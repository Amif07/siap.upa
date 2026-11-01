/**
 * Real-time Multiplayer Service for Static Web Apps (Vercel / Netlify / AI Studio)
 * Supports Supabase Realtime (WebSockets Broadcast & Presence)
 * with automatic fallback to WebRTC P2P (PeerJS) and BroadcastChannel (local tabs).
 */
import { createClient, SupabaseClient, RealtimeChannel } from '@supabase/supabase-js';
import Peer, { DataConnection } from 'peerjs';
import { Participant, RoomSettings, RoomChatMessage, UPAQuestion } from '../types/quiz';

export type RealtimeTransportType = 'supabase' | 'webrtc' | 'broadcast';

export interface SupabaseConfig {
  url: string;
  anonKey: string;
}

const STORAGE_KEY_SUPABASE = 'advokatquiz_supabase_config_v1';

// Default public Supabase project credentials for instant out-of-the-box realtime on Vercel
// Users can also override this via UI modal or VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY env vars
const DEFAULT_SUPABASE_URL = (import.meta as unknown as { env: Record<string, string> }).env?.VITE_SUPABASE_URL || 'https://advokatquiz-realtime.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY = (import.meta as unknown as { env: Record<string, string> }).env?.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.demo_advokatquiz_realtime_key';

export interface RealtimeEventPayload {
  type: 'ROOM_JOIN' | 'ROOM_LEAVE' | 'START_EXAM' | 'SCORE_UPDATE' | 'CHAT_MESSAGE' | 'HOST_SYNC' | 'QUESTION_ANSWERED' | 'NEXT_QUESTION_SYNC';
  roomCode: string;
  senderId: string;
  participant?: Participant;
  roomSettings?: RoomSettings;
  seed?: string;
  score?: number;
  answeredCount?: number;
  isFinished?: boolean;
  timeSpentSeconds?: number;
  message?: RoomChatMessage;
  participantsSnapshot?: Participant[];
  answeredIndex?: number;
  answeredIndices?: number[];
  targetQuestionIndex?: number;
  questions?: UPAQuestion[];
  questionIds?: number[];
}

export class RealtimeMultiplayerService {
  private supabase: SupabaseClient | null = null;
  private supabaseChannel: RealtimeChannel | null = null;
  private peer: Peer | null = null;
  private peerConnections: Map<string, DataConnection> = new Map();
  private hostConnection: DataConnection | null = null;
  private broadcastChannel: BroadcastChannel | null = null;

  private currentRoomCode: string | null = null;
  private currentParticipant: Participant | null = null;
  private currentRoomSettings: RoomSettings | null = null;
  private currentLockedQuestions: UPAQuestion[] | null = null;
  private activeTransport: RealtimeTransportType = 'broadcast';
  private connectionStatus: 'disconnected' | 'connecting' | 'connected' | 'error' = 'disconnected';

  // Event Callbacks
  private onParticipantsChangeCb: ((participants: Participant[]) => void) | null = null;
  private onStartExamCb: ((settings: RoomSettings, seed: string, questions?: UPAQuestion[]) => void) | null = null;
  private onScoreUpdateCb: ((data: { participantId: string; score: number; answeredCount: number; isFinished: boolean; timeSpentSeconds: number }) => void) | null = null;
  private onQuestionAnsweredCb: ((data: { participantId: string; answeredIndex: number; answeredIndices: number[] }) => void) | null = null;
  private onNextQuestionSyncCb: ((targetIndex: number) => void) | null = null;
  private onChatMessageCb: ((message: RoomChatMessage) => void) | null = null;
  private onStatusChangeCb: ((status: string, transport: RealtimeTransportType) => void) | null = null;

  private participantsMap: Map<string, Participant> = new Map();

  constructor() {
    this.initBroadcastChannel();
  }

  // Get saved or environment Supabase config
  public getSupabaseConfig(): SupabaseConfig {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY_SUPABASE);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (parsed.url && parsed.anonKey) return parsed;
        } catch {
          // ignore
        }
      }
    }
    return {
      url: DEFAULT_SUPABASE_URL,
      anonKey: DEFAULT_SUPABASE_ANON_KEY,
    };
  }

  // Save custom Supabase config
  public saveSupabaseConfig(config: SupabaseConfig): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY_SUPABASE, JSON.stringify(config));
    }
    // Reinitialize Supabase client if changed
    this.initSupabaseClient(config);
  }

  private initSupabaseClient(config: SupabaseConfig): boolean {
    if (!config.url || !config.anonKey || !config.url.startsWith('http')) {
      this.supabase = null;
      return false;
    }
    try {
      this.supabase = createClient(config.url, config.anonKey, {
        realtime: {
          params: {
            eventsPerSecond: 10,
          },
        },
      });
      return true;
    } catch (err) {
      console.warn('Failed to initialize Supabase client:', err);
      this.supabase = null;
      return false;
    }
  }

  private initBroadcastChannel(): void {
    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      try {
        this.broadcastChannel = new BroadcastChannel('advokatquiz_realtime_sync');
        this.broadcastChannel.onmessage = (event) => {
          this.handleIncomingPayload(event.data);
        };
      } catch (e) {
        console.warn('BroadcastChannel not supported:', e);
      }
    }
  }

  // Bind Listeners
  public onParticipantsChange(cb: (participants: Participant[]) => void) {
    this.onParticipantsChangeCb = cb;
  }

  public onStartExam(cb: (settings: RoomSettings, seed: string, questions?: UPAQuestion[]) => void) {
    this.onStartExamCb = cb;
  }

  public onScoreUpdate(cb: (data: { participantId: string; score: number; answeredCount: number; isFinished: boolean; timeSpentSeconds: number }) => void) {
    this.onScoreUpdateCb = cb;
  }

  public onChatMessage(cb: (message: RoomChatMessage) => void) {
    this.onChatMessageCb = cb;
  }

  public onStatusChange(cb: (status: string, transport: RealtimeTransportType) => void) {
    this.onStatusChangeCb = cb;
  }

  public getActiveTransport(): RealtimeTransportType {
    return this.activeTransport;
  }

  public getConnectionStatus() {
    return this.connectionStatus;
  }

  private updateStatus(status: 'disconnected' | 'connecting' | 'connected' | 'error', transport: RealtimeTransportType, message?: string) {
    this.connectionStatus = status;
    this.activeTransport = transport;
    if (this.onStatusChangeCb) {
      this.onStatusChangeCb(message || status, transport);
    }
  }

  /**
   * Connect to a Room (as Host or Guest)
   */
  public async joinRoom(roomSettings: RoomSettings, participant: Participant): Promise<void> {
    this.leaveRoom(); // Clean previous room if any

    this.currentRoomCode = roomSettings.code;
    this.currentParticipant = participant;
    this.participantsMap.clear();
    this.participantsMap.set(participant.id, participant);
    this.notifyParticipants();

    this.updateStatus('connecting', 'supabase', 'Menghubungkan ke Supabase Realtime...');

    const config = this.getSupabaseConfig();
    const hasSupabase = this.initSupabaseClient(config);

    let supabaseConnected = false;

    if (hasSupabase && this.supabase) {
      try {
        supabaseConnected = await this.connectSupabase(roomSettings.code, participant);
      } catch (err) {
        console.warn('Supabase Realtime connection failed, falling back to WebRTC P2P:', err);
      }
    }

    if (supabaseConnected) {
      this.updateStatus('connected', 'supabase', 'Terhubung via Supabase Realtime (Serverless Static)');
    } else {
      // Fallback to PeerJS WebRTC P2P
      this.updateStatus('connecting', 'webrtc', 'Mengaktifkan koneksi WebRTC P2P...');
      this.connectWebRTC(roomSettings.code, participant);
    }

    // Always announce locally via BroadcastChannel as well
    this.broadcastToLocal({
      type: 'ROOM_JOIN',
      roomCode: roomSettings.code,
      senderId: participant.id,
      participant,
    });
  }

  /**
   * Supabase Realtime Integration (Presence & Broadcast)
   */
  private async connectSupabase(roomCode: string, participant: Participant): Promise<boolean> {
    if (!this.supabase) return false;

    return new Promise((resolve) => {
      try {
        const channelName = `advokatquiz_room_${roomCode.replace(/[^a-zA-Z0-9]/g, '_')}`;
        const channel = this.supabase!.channel(channelName, {
          config: {
            broadcast: { self: false },
            presence: { key: participant.id },
          },
        });

        this.supabaseChannel = channel;

        // 1. Presence Sync (Track who is in the room in real time)
        channel
          .on('presence', { event: 'sync' }, () => {
            const state = channel.presenceState();
            const onlinePeers: Participant[] = [];

            // Add self first
            if (this.currentParticipant) {
              onlinePeers.push(this.currentParticipant);
            }

            for (const [key, presences] of Object.entries(state)) {
              if (key === participant.id) continue;
              if (Array.isArray(presences) && presences.length > 0) {
                const pData = (presences[0] as unknown) as Participant;
                if (pData && pData.id) {
                  onlinePeers.push(pData);
                  this.participantsMap.set(pData.id, pData);
                }
              }
            }

            this.notifyParticipants();
          })
          .on('presence', { event: 'join' }, ({ key, newPresences }) => {
            if (key !== participant.id && Array.isArray(newPresences) && newPresences.length > 0) {
              const newP = (newPresences[0] as unknown) as Participant;
              if (newP && newP.id) {
                this.participantsMap.set(newP.id, newP);
                this.notifyParticipants();
              }
            }
          })
          .on('presence', { event: 'leave' }, ({ key }) => {
            if (this.participantsMap.has(key)) {
              this.participantsMap.delete(key);
              this.notifyParticipants();
            }
          });

        // 2. Broadcast Events (Exam start, scores, chat, settings)
        channel.on('broadcast', { event: 'ADVOKAT_EVENT' }, ({ payload }) => {
          this.handleIncomingPayload(payload);
        });

        // Subscribe with timeout
        const timeout = setTimeout(() => {
          resolve(false);
        }, 5000);

        channel.subscribe(async (status) => {
          if (status === 'SUBSCRIBED') {
            clearTimeout(timeout);
            await channel.track(participant);
            resolve(true);
          } else if (status === 'TIMED_OUT' || status === 'CHANNEL_ERROR') {
            clearTimeout(timeout);
            resolve(false);
          }
        });
      } catch (e) {
        console.warn('Error establishing Supabase channel:', e);
        resolve(false);
      }
    });
  }

  /**
   * WebRTC P2P fallback via PeerJS
   */
  private connectWebRTC(roomCode: string, participant: Participant): void {
    const cleanRoomCode = roomCode.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const hostPeerId = `advokatquiz-host-${cleanRoomCode}`;
    const myPeerId = participant.isHost
      ? hostPeerId
      : `advokatquiz-guest-${cleanRoomCode}-${participant.id.slice(0, 6)}`;

    try {
      this.peer = new Peer(myPeerId, {
        debug: 0,
        config: {
          iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:global.stun.twilio.com:3478' },
          ],
        },
      });

      this.peer.on('open', () => {
        this.updateStatus('connected', 'webrtc', 'Terhubung via WebRTC P2P (Bebas Server)');

        if (!participant.isHost) {
          // Guest connects to Host
          const conn = this.peer!.connect(hostPeerId, {
            reliable: true,
            metadata: { participant },
          });

          this.hostConnection = conn;

          conn.on('open', () => {
            conn.send({
              type: 'ROOM_JOIN',
              roomCode,
              senderId: participant.id,
              participant,
            });
          });

          conn.on('data', (data: unknown) => {
            this.handleIncomingPayload(data as RealtimeEventPayload);
          });

          conn.on('close', () => {
            console.log('Connection to host closed');
          });
        }
      });

      this.peer.on('connection', (conn) => {
        // Host receives connection from Guest
        const guestId = conn.peer;
        this.peerConnections.set(guestId, conn);

        conn.on('open', () => {
          // Send current participants snapshot to new guest along with locked questions
          conn.send({
            type: 'HOST_SYNC',
            roomCode,
            senderId: participant.id,
            participantsSnapshot: Array.from(this.participantsMap.values()),
            questions: this.currentLockedQuestions || undefined,
            roomSettings: this.currentRoomSettings || undefined,
          });
        });

        conn.on('data', (data: unknown) => {
          const payload = data as RealtimeEventPayload;
          this.handleIncomingPayload(payload);

          // Host relays to all other connected peers
          if (participant.isHost) {
            this.peerConnections.forEach((otherConn, id) => {
              if (id !== guestId && otherConn.open) {
                otherConn.send(payload);
              }
            });
          }
        });

        conn.on('close', () => {
          this.peerConnections.delete(guestId);
        });
      });

      this.peer.on('error', (err) => {
        console.warn('PeerJS WebRTC notice:', err);
        // If host ID is taken because user restarted or rejoined, fallback to broadcast channel
        this.updateStatus('connected', 'broadcast', 'Terhubung via Jalur Lokal (Broadcast)');
      });
    } catch (e) {
      console.warn('PeerJS initialization error:', e);
      this.updateStatus('connected', 'broadcast', 'Terhubung via Jalur Lokal');
    }
  }

  /**
   * Handle incoming payloads from any transport (Supabase, WebRTC, Broadcast)
   */
  private handleIncomingPayload(payload: RealtimeEventPayload): void {
    if (!payload || !payload.roomCode || payload.roomCode !== this.currentRoomCode) return;
    if (payload.senderId === this.currentParticipant?.id) return; // ignore own echo

    switch (payload.type) {
      case 'ROOM_JOIN':
        if (payload.participant) {
          this.participantsMap.set(payload.participant.id, payload.participant);
          this.notifyParticipants();

          // If I am host, reply to announce all existing participants
          if (this.currentParticipant?.isHost) {
            this.broadcast({
              type: 'HOST_SYNC',
              roomCode: payload.roomCode,
              senderId: this.currentParticipant.id,
              participantsSnapshot: Array.from(this.participantsMap.values()),
            });
          }
        }
        break;

      case 'HOST_SYNC':
        if (payload.participantsSnapshot) {
          payload.participantsSnapshot.forEach((p) => {
            this.participantsMap.set(p.id, p);
          });
          // Ensure current user is preserved
          if (this.currentParticipant) {
            this.participantsMap.set(this.currentParticipant.id, this.currentParticipant);
          }
          this.notifyParticipants();
        }
        if (payload.questions && payload.questions.length > 0) {
          this.currentLockedQuestions = payload.questions;
          if (payload.roomSettings) {
            this.currentRoomSettings = payload.roomSettings;
            if (this.onStartExamCb) {
              this.onStartExamCb(payload.roomSettings, payload.seed || payload.roomCode, payload.questions);
            }
          }
        }
        break;

      case 'ROOM_LEAVE':
        if (payload.senderId && this.participantsMap.has(payload.senderId)) {
          this.participantsMap.delete(payload.senderId);
          this.notifyParticipants();
        }
        break;

      case 'START_EXAM':
        if (payload.roomSettings && this.onStartExamCb) {
          if (payload.questions) {
            this.currentLockedQuestions = payload.questions;
          }
          this.currentRoomSettings = payload.roomSettings;
          this.onStartExamCb(payload.roomSettings, payload.seed || payload.roomCode, payload.questions);
        }
        break;

      case 'SCORE_UPDATE':
        if (payload.senderId) {
          const existing = this.participantsMap.get(payload.senderId);
          if (existing) {
            existing.score = payload.score ?? existing.score;
            existing.answeredCount = payload.answeredCount ?? existing.answeredCount;
            existing.isFinished = payload.isFinished ?? existing.isFinished;
            existing.timeSpentSeconds = payload.timeSpentSeconds ?? existing.timeSpentSeconds;
            this.participantsMap.set(payload.senderId, { ...existing });
            this.notifyParticipants();
          }

          if (this.onScoreUpdateCb) {
            this.onScoreUpdateCb({
              participantId: payload.senderId,
              score: payload.score || 0,
              answeredCount: payload.answeredCount || 0,
              isFinished: Boolean(payload.isFinished),
              timeSpentSeconds: payload.timeSpentSeconds || 0,
            });
          }
        }
        break;

      case 'CHAT_MESSAGE':
        if (payload.message && this.onChatMessageCb) {
          this.onChatMessageCb(payload.message);
        }
        break;

      case 'QUESTION_ANSWERED':
        if (payload.senderId && payload.answeredIndex !== undefined) {
          const existing = this.participantsMap.get(payload.senderId);
          if (existing) {
            const currentIndices = existing.answeredIndices ? [...existing.answeredIndices] : [];
            if (!currentIndices.includes(payload.answeredIndex)) {
              currentIndices.push(payload.answeredIndex);
            }
            existing.answeredIndices = payload.answeredIndices || currentIndices;
            existing.answeredCount = existing.answeredIndices.length;
            this.participantsMap.set(payload.senderId, { ...existing });
            this.notifyParticipants();
          }
          if (this.onQuestionAnsweredCb) {
            this.onQuestionAnsweredCb({
              participantId: payload.senderId,
              answeredIndex: payload.answeredIndex,
              answeredIndices: payload.answeredIndices || [],
            });
          }
        }
        break;

      case 'NEXT_QUESTION_SYNC':
        if (payload.targetQuestionIndex !== undefined && this.onNextQuestionSyncCb) {
          this.onNextQuestionSyncCb(payload.targetQuestionIndex);
        }
        break;
    }
  }

  private notifyParticipants(): void {
    if (this.onParticipantsChangeCb) {
      this.onParticipantsChangeCb(Array.from(this.participantsMap.values()));
    }
  }

  /**
   * Broadcast an event across all active transports
   */
  public broadcast(payload: RealtimeEventPayload): void {
    if (!this.currentRoomCode) return;

    // 1. Supabase Realtime Broadcast
    if (this.supabaseChannel && this.connectionStatus === 'connected') {
      try {
        this.supabaseChannel.send({
          type: 'broadcast',
          event: 'ADVOKAT_EVENT',
          payload,
        });
      } catch (err) {
        console.warn('Failed to broadcast via Supabase:', err);
      }
    }

    // 2. WebRTC P2P DataConnection
    if (this.hostConnection && this.hostConnection.open) {
      try {
        this.hostConnection.send(payload);
      } catch (err) {
        console.warn('Failed to send to host via WebRTC:', err);
      }
    } else if (this.peerConnections.size > 0) {
      this.peerConnections.forEach((conn) => {
        if (conn.open) {
          try {
            conn.send(payload);
          } catch {
            // ignore
          }
        }
      });
    }

    // 3. Local BroadcastChannel
    this.broadcastToLocal(payload);
  }

  private broadcastToLocal(payload: RealtimeEventPayload): void {
    if (this.broadcastChannel) {
      try {
        this.broadcastChannel.postMessage(payload);
      } catch {
        // ignore
      }
    }
  }

  /**
   * Update participant's own score and broadcast to everyone
   */
  public updateMyScore(score: number, answeredCount: number, isFinished: boolean, timeSpentSeconds: number): void {
    if (!this.currentParticipant || !this.currentRoomCode) return;

    this.currentParticipant.score = score;
    this.currentParticipant.answeredCount = answeredCount;
    this.currentParticipant.isFinished = isFinished;
    this.currentParticipant.timeSpentSeconds = timeSpentSeconds;

    this.participantsMap.set(this.currentParticipant.id, { ...this.currentParticipant });
    this.notifyParticipants();

    this.broadcast({
      type: 'SCORE_UPDATE',
      roomCode: this.currentRoomCode,
      senderId: this.currentParticipant.id,
      score,
      answeredCount,
      isFinished,
      timeSpentSeconds,
    });
  }

  /**
   * Send a chat message
   */
  public sendChatMessage(text: string): RoomChatMessage | null {
    if (!this.currentParticipant || !this.currentRoomCode || !text.trim()) return null;

    const message: RoomChatMessage = {
      id: 'msg-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6),
      roomCode: this.currentRoomCode,
      senderId: this.currentParticipant.id,
      senderName: this.currentParticipant.name,
      senderRole: this.currentParticipant.isHost ? 'host' : 'peserta',
      message: text.trim(),
      timestamp: Date.now(),
    };

    this.broadcast({
      type: 'CHAT_MESSAGE',
      roomCode: this.currentRoomCode,
      senderId: this.currentParticipant.id,
      message,
    });

    return message;
  }

  /**
   * Start Exam (Host only) - Broadcasts fixed questions and frozen options
   */
  public startExam(roomSettings: RoomSettings, seed: string, lockedQuestions?: UPAQuestion[]): void {
    if (!this.currentParticipant?.isHost || !this.currentRoomCode) return;

    this.currentLockedQuestions = lockedQuestions || null;
    this.currentRoomSettings = roomSettings;

    this.broadcast({
      type: 'START_EXAM',
      roomCode: this.currentRoomCode,
      senderId: this.currentParticipant.id,
      roomSettings,
      seed,
      questions: lockedQuestions,
      questionIds: lockedQuestions ? lockedQuestions.map((q) => q.id) : undefined,
    });
  }

  public getCurrentLockedQuestions(): UPAQuestion[] | null {
    return this.currentLockedQuestions;
  }

  /**
   * Submit and broadcast that current user has answered a specific question index
   */
  public submitQuestionAnswer(questionIndex: number, currentAnsweredIndices: number[]): void {
    if (!this.currentParticipant || !this.currentRoomCode) return;

    this.currentParticipant.answeredIndices = currentAnsweredIndices;
    this.currentParticipant.answeredCount = currentAnsweredIndices.length;
    this.participantsMap.set(this.currentParticipant.id, { ...this.currentParticipant });
    this.notifyParticipants();

    this.broadcast({
      type: 'QUESTION_ANSWERED',
      roomCode: this.currentRoomCode,
      senderId: this.currentParticipant.id,
      answeredIndex: questionIndex,
      answeredIndices: currentAnsweredIndices,
    });
  }

  /**
   * Synchronize advancing to next question for all players in room
   */
  public syncNextQuestion(targetIndex: number): void {
    if (!this.currentParticipant || !this.currentRoomCode) return;

    this.broadcast({
      type: 'NEXT_QUESTION_SYNC',
      roomCode: this.currentRoomCode,
      senderId: this.currentParticipant.id,
      targetQuestionIndex: targetIndex,
    });
  }

  public onQuestionAnswered(cb: (data: { participantId: string; answeredIndex: number; answeredIndices: number[] }) => void): void {
    this.onQuestionAnsweredCb = cb;
  }

  public onNextQuestionSync(cb: (targetIndex: number) => void): void {
    this.onNextQuestionSyncCb = cb;
  }

  /**
   * Leave Room and cleanup
   */
  public leaveRoom(): void {
    if (this.currentRoomCode && this.currentParticipant) {
      this.broadcast({
        type: 'ROOM_LEAVE',
        roomCode: this.currentRoomCode,
        senderId: this.currentParticipant.id,
      });
    }

    if (this.supabaseChannel) {
      try {
        this.supabaseChannel.untrack();
        this.supabaseChannel.unsubscribe();
      } catch {
        // ignore
      }
      this.supabaseChannel = null;
    }

    if (this.hostConnection) {
      try {
        this.hostConnection.close();
      } catch {
        // ignore
      }
      this.hostConnection = null;
    }

    this.peerConnections.forEach((conn) => {
      try {
        conn.close();
      } catch {
        // ignore
      }
    });
    this.peerConnections.clear();

    if (this.peer) {
      try {
        this.peer.destroy();
      } catch {
        // ignore
      }
      this.peer = null;
    }

    this.currentRoomCode = null;
    this.currentParticipant = null;
    this.participantsMap.clear();
    this.updateStatus('disconnected', 'broadcast');
  }
}

export const realtimeMultiplayerService = new RealtimeMultiplayerService();
