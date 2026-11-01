import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare, Shield, Smile, X, Minimize2, Sparkles } from 'lucide-react';
import { RoomChatMessage, Participant } from '../types/quiz';
import { soundEffects } from '../utils/soundEffects';

interface RoomLiveChatProps {
  roomCode: string;
  currentUser: Participant | null;
  messages: RoomChatMessage[];
  onSendMessage: (message: string) => void;
  onClose?: () => void;
  isFloating?: boolean;
}

const QUICK_REACTIONS = [
  '⚖️ Semangat rekan-rekan!',
  '📖 Fokus di Hukum Acara!',
  '⏱️ Perhatikan sisa waktu!',
  '💡 Baca soal dengan teliti!',
  '🔥 Bismillah lulus UPA!'
];

export const RoomLiveChat: React.FC<RoomLiveChatProps> = ({
  roomCode,
  currentUser,
  messages,
  onSendMessage,
  onClose,
  isFloating = false,
}) => {
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    soundEffects.playClick();
    onSendMessage(inputText.trim());
    setInputText('');
  };

  const handleQuickSend = (text: string) => {
    soundEffects.playClick();
    onSendMessage(text);
  };

  const formatTime = (timestamp: number) => {
    const d = new Date(timestamp);
    return d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div
      className={`flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden ${
        isFloating ? 'h-[500px] w-full sm:w-[380px] shadow-2xl' : 'h-[440px] w-full'
      }`}
    >
      {/* Chat Header */}
      <div className="px-4 py-3 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="relative">
            <MessageSquare className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5 leading-none">
              <span>Obrolan Ruangan ({roomCode})</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-normal">
                Live
              </span>
            </h4>
            <span className="text-[10px] text-slate-500 dark:text-slate-400">
              {messages.length} pesan terkirim
            </span>
          </div>
        </div>

        {onClose && (
          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            title="Tutup Chat"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Messages Thread Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-4 text-slate-400 dark:text-slate-500 space-y-2">
            <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
              Belum ada obrolan di ruangan ini
            </p>
            <p className="text-[11px] max-w-[240px]">
              Ketik pesan atau pilih reaksi cepat di bawah untuk memulai diskusi dengan rekan ujian Anda.
            </p>
          </div>
        ) : (
          messages.map((msg) => {
            const isMe = currentUser && msg.senderId === currentUser.id;

            if (msg.isSystem) {
              return (
                <div key={msg.id} className="flex justify-center my-1.5">
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-500 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700/80 text-center">
                    {msg.message}
                  </span>
                </div>
              );
            }

            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
              >
                {!isMe && (
                  <div className="flex items-center gap-1.5 mb-1 px-1">
                    <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                      {msg.senderName}
                    </span>
                    {msg.senderRole === 'host' && (
                      <span className="text-[9px] px-1 py-0.2 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold">
                        Host
                      </span>
                    )}
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 shadow-2xs break-words ${
                    isMe
                      ? 'bg-slate-900 dark:bg-amber-600 text-white rounded-br-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-bl-xs border border-slate-200 dark:border-slate-700/60'
                  }`}
                >
                  <p className="text-xs leading-relaxed whitespace-pre-wrap">{msg.message}</p>
                  <div
                    className={`text-[9px] mt-1 text-right ${
                      isMe ? 'text-slate-300 dark:text-amber-100' : 'text-slate-400 dark:text-slate-400'
                    }`}
                  >
                    {formatTime(msg.timestamp)}
                  </div>
                </div>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Reaction Bar */}
      <div className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
        <Sparkles className="w-3 h-3 text-amber-500 shrink-0 ml-1" />
        {QUICK_REACTIONS.map((reaction, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleQuickSend(reaction)}
            className="text-[11px] whitespace-nowrap px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-amber-400 dark:hover:border-amber-600 transition-colors shrink-0 shadow-2xs"
          >
            {reaction}
          </button>
        ))}
      </div>

      {/* Input Message Form */}
      <form
        onSubmit={handleSubmit}
        className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 shrink-0"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ketik pesan untuk rekan..."
          className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
          maxLength={200}
        />
        <button
          type="submit"
          disabled={!inputText.trim()}
          className="p-2 rounded-xl bg-slate-900 dark:bg-amber-600 text-white hover:bg-slate-800 dark:hover:bg-amber-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-2xs shrink-0"
          title="Kirim Pesan"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
