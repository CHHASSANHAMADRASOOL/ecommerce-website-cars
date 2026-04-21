"use client";
import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Welcome to Wild Wonders VIP Lounge. I am your AI Concierge. How can I assist your luxury journey today?' }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when new message arrives
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // AI Response Logic (Simulated)
    setTimeout(() => {
      let botResponse = "";
      const query = input.toLowerCase();

      if (query.includes("price") || query.includes("cost")) {
        botResponse = "Our VIP collection starts from $150,000. Which specific model (Lamborghini, Ferrari, or Porsche) are you interested in?";
      } else if (query.includes("fast") || query.includes("speed")) {
        botResponse = "The Aventador SVJ in our inventory is the fastest, reaching 0-100 km/h in just 2.8 seconds.";
      } else if (query.includes("hello") || query.includes("hi")) {
        botResponse = "Greetings! I am here to help you secure the world's most exotic cars. What's on your mind?";
      } else {
        botResponse = "That sounds interesting! Let me connect you with a human VIP agent for specific details, or would you like to see our Inventory?";
      }

      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-black/80 backdrop-blur-2xl border border-white/20 rounded-[30px] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 bg-gradient-to-r from-red-900/50 to-black border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-widest">VIP CONCIERGE</h3>
                  <p className="text-[10px] text-green-500 font-bold animate-pulse uppercase">Online Now</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 scroll-smooth">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user' 
                    ? 'bg-red-600 text-white rounded-tr-none' 
                    : 'bg-white/10 text-gray-200 border border-white/10 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-black/40">
              <div className="relative flex items-center">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about your dream car..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-5 pr-12 text-sm text-white focus:border-red-600 outline-none transition-all"
                />
                <button 
                  onClick={handleSendMessage}
                  className="absolute right-2 bg-red-600 p-2 rounded-full text-white hover:bg-red-700 transition-all"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-red-600/40 hover:scale-110 active:scale-95 transition-all group relative"
      >
        <div className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-20"></div>
        {isOpen ? <X size={28} /> : <Sparkles size={28} className="group-hover:rotate-12 transition-transform" />}
      </button>
    </div>
  );
}