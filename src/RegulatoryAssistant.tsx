import React, { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = `You are a professional Zambian mining regulatory compliance assistant for Cadastre Mining Compliance Advisory.
You specialize in:
- The Mines and Minerals Development Act, 2015 (Zambia)
- Mining cadastre administration (applications, renewals, amendments)
- MOSES statutory mineral production reporting
- Export permit applications and facilitation
- Regulatory compliance best practices for Zambian mining licence holders

Be concise, professional, and helpful. Keep answers focused and practical. If a question is outside your domain, politely redirect to mining compliance topics.`;

export default function RegulatoryAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm your Zambian Mining Regulatory Assistant. Ask me about the Mines & Minerals Act, MOSES reporting, cadastre processes, or export permits.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');

    const newMessages: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages,
          systemPrompt: SYSTEM_PROMPT,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const reply = data.reply || 'Sorry, I could not process that. Please try again.';
      setMessages([...newMessages, { role: 'assistant', content: reply }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages([...newMessages, { role: 'assistant', content: 'Network error. Please check your connection and try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        title="Ask the Regulatory Assistant"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-2xl hover:bg-amber-800 transition-all transform hover:scale-105"
      >
        {open ? (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-28 right-8 z-50 w-[380px] max-h-[560px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
          style={{ maxWidth: 'calc(100vw - 2rem)' }}>
          {/* Header */}
          <div className="bg-slate-900 text-white px-5 py-4 flex items-center gap-3 shrink-0">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <div>
              <div className="font-bold text-sm">Regulatory Assistant</div>
              <div className="text-xs text-slate-400">Zambian Mining Compliance AI</div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 min-h-[200px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.role === 'user'
                    ? 'self-end bg-slate-900 text-white rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[80%] text-sm leading-relaxed'
                    : 'self-start bg-slate-50 text-slate-800 rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[85%] text-sm leading-relaxed border border-slate-100'
                }
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="self-start bg-slate-50 border border-slate-100 text-slate-400 rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm italic">
                Thinking...
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex gap-2 p-3 border-t border-slate-100 bg-white shrink-0">
            <input
              type="text"
              className="flex-1 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-amber-500 transition-colors font-sans"
              placeholder="Ask about mining regulations..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              disabled={loading}
              autoFocus
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="bg-slate-900 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-amber-800 transition-colors disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
