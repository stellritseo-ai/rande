import { useState } from "react";
import { MessageCircle, X, Send, Phone, Calendar, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !name.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setMessage("");
      setName("");
    }, 800);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="pointer-events-auto mb-4 w-[290px] sm:w-[350px] bg-white border border-slate-100 rounded-3xl shadow-[0_20px_50px_-12px_rgba(15,23,42,0.15)] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B00] flex items-center justify-center font-bold text-sm text-white select-none">
                    R&E
                  </div>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-[#0F172A] animate-pulse" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-extrabold text-sm tracking-wide">R&E Assistant</span>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Online · Dispatch Active</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition p-1 hover:bg-white/10 rounded-lg cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 max-h-[260px] overflow-y-auto bg-slate-50/50 flex flex-col gap-3.5">
              {/* Message 1 */}
              <div className="flex gap-2.5 items-start">
                <div className="w-7 h-7 rounded-full bg-[#FF6B00] flex items-center justify-center font-bold text-xs text-white shrink-0 select-none">
                  R&E
                </div>
                <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none p-3 shadow-sm text-left max-w-[80%]">
                  <p className="text-xs text-slate-800 font-semibold leading-relaxed">
                    Hi! Thanks for visiting R&E Electrical Contractor Corp. We serve the entire state of Florida. How can we help you today?
                  </p>
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex gap-2.5 items-start"
                >
                  <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-xs text-white shrink-0 select-none">
                    ✓
                  </div>
                  <div className="bg-emerald-50 border border-emerald-100 text-emerald-950 rounded-2xl rounded-tl-none p-3.5 shadow-sm text-left max-w-[80%] flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5 font-bold text-xs text-emerald-800">
                      <CheckCircle2 className="h-4 w-4 shrink-0" /> Message Received!
                    </div>
                    <p className="text-[11px] font-medium leading-relaxed">
                      Thank you! A dispatch coordinator will review your message and contact you in under 60 minutes.
                    </p>
                  </div>
                </motion.div>
              ) : null}
            </div>

            {/* Form Actions */}
            {!submitted && (
              <div className="px-4 pb-4 pt-2 border-t border-slate-100 bg-white flex flex-col gap-2">
                <div className="text-[10px] font-black uppercase text-slate-400 tracking-wider text-left pl-1">
                  Quick Actions
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:+17863075933"
                    className="flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 hover:border-[#FF6B00]/30 rounded-xl py-2 px-1 text-[10px] sm:text-xs font-bold text-slate-700 transition"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#FF6B00] shrink-0" /> Call 24/7 Support
                  </a>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 hover:border-[#FF6B00]/30 rounded-xl py-2 px-1 text-[10px] sm:text-xs font-bold text-slate-700 transition"
                  >
                    <Calendar className="h-3.5 w-3.5 text-[#FF6B00] shrink-0" /> Free Estimate
                  </Link>
                </div>

                <form onSubmit={handleSend} className="mt-2.5 flex flex-col gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/10 focus:border-[#FF6B00] transition"
                  />
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      required
                      placeholder="Type a message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-3 pr-10 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/10 focus:border-[#FF6B00] transition"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting || !message.trim() || !name.trim()}
                      className="absolute right-1.5 p-1.5 rounded-lg text-white bg-[#FF6B00] hover:bg-[#E05E00] transition disabled:opacity-50 disabled:hover:bg-[#FF6B00] cursor-pointer"
                    >
                      <Send className="h-3 w-3" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen);
          if (submitted) setSubmitted(false);
        }}
        className="pointer-events-auto relative h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#E05E00] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none select-none cursor-pointer"
      >
        <span className="absolute inset-0 rounded-full bg-[#FF6B00] opacity-35 animate-ping -z-10" />
        {isOpen ? <X className="h-6 w-6 sm:h-7 sm:w-7" /> : <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />}
      </motion.button>
    </div>
  );
}
