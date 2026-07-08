import { motion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck, Zap, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import electricianIllustration from "@/assets/electrician-illustration.png";

const TinyLightningIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#FF6B00] fill-[#FF6B00] shrink-0" viewBox="0 0 24 24">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export function ContactIllustrationSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#F8FAFC] to-white overflow-hidden border-b border-gray-100">
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-orange-100/30 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-45 -left-20 w-[600px] h-[600px] rounded-full bg-blue-50/50 blur-[130px]" />

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Left Column: Premium content card */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#0F172A] shadow-sm"
            >
              <TinyLightningIcon /> CONTACT US <TinyLightningIcon />
            </motion.div>

            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-tight font-extrabold text-[#0F172A]"
              >
                Need Professional <br className="hidden sm:inline" />
                Electrical <span className="text-[#FF6B00]">Contractor</span> Help?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 font-medium text-base leading-relaxed max-w-2xl"
              >
                Our team of certified, highly-skilled electricians delivers premier electrical services
                across the entire state of Florida. Whether it's a minor residential repair, an emergency outage, 
                or a complex commercial new construction installation, we complete the job safely, on time, and within budget.
              </motion.p>
            </div>

            {/* Checklist of highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid gap-4 sm:grid-cols-2 pt-2"
            >
              <div className="flex items-center gap-3.5 text-slate-800 font-bold text-sm">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF6B00]/10 text-[#FF6B00] shrink-0 shadow-sm">
                  <Zap className="h-4 w-4" />
                </div>
                <span>24/7 Emergency Dispatch</span>
              </div>
              <div className="flex items-center gap-3.5 text-slate-800 font-bold text-sm">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF6B00]/10 text-[#FF6B00] shrink-0 shadow-sm">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <span>Licensed, Bonded & Insured</span>
              </div>
              <div className="flex items-center gap-3.5 text-slate-800 font-bold text-sm">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF6B00]/10 text-[#FF6B00] shrink-0 shadow-sm">
                  <Star className="h-4 w-4 fill-[#FF6B00]" />
                </div>
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-3.5 text-slate-800 font-bold text-sm">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF6B00]/10 text-[#FF6B00] shrink-0 shadow-sm">
                  <Phone className="h-4 w-4" />
                </div>
                <span>Free On-Site Estimates</span>
              </div>
            </motion.div>

            {/* Emergency Hotline Banner Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.4 }}
              className="relative group max-w-md w-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF6B00] to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              
              <div className="relative flex items-center justify-between gap-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-md transition-all duration-300">
                <div className="flex items-center gap-4">
                  <a
                    href="tel:(786)307-5933"
                    className="relative grid place-items-center h-14 w-14 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] transition-colors duration-300 hover:bg-[#FF6B00] hover:text-white shrink-0 group-hover:scale-105"
                  >
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-20 group-hover:opacity-40"></span>
                    <Phone className="h-6 w-6" />
                  </a>
                  <div className="text-left">
                    <span className="block text-xs uppercase tracking-wider text-slate-500 font-extrabold">
                      FOR EMERGENCY CALL
                    </span>
                    <a
                      href="tel:(786)307-5933"
                      className="block text-2xl font-display font-black leading-tight text-[#0F172A] hover:text-[#FF6B00] transition-colors duration-300 mt-1"
                    >
                      (786) 307-5933
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 pt-2"
            >
              <Button asChild size="lg" className="font-extrabold rounded-full px-8 bg-[#FF6B00] hover:bg-[#E05E00] shadow-[0_10px_25px_-5px_rgba(255,107,0,0.4)]">
                <Link to="/contact">
                  Schedule Service <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Premium Electrician Illustration Showcase */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            {/* Background design elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#FF6B00]/5 blur-3xl -z-10 animate-pulse" />
            <div className="absolute top-1/4 left-1/4 w-[180px] h-[180px] rounded-full bg-blue-200/20 blur-2xl -z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.3 }}
              className="relative w-full max-w-[480px] aspect-square rounded-[32px] border border-slate-100 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] hover:shadow-[0_30px_70px_rgba(15,23,42,0.14)] hover:scale-[1.02] transition-all duration-500 ease-out overflow-hidden group"
            >
              {/* Card glowing edge */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00]/0 via-[#FF6B00]/0 to-[#FF6B00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Grid backdrop */}
              <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Rotating mechanical wheel watermark in card background */}
              <motion.div 
                className="absolute right-[5%] bottom-[15%] w-36 h-36 text-slate-100/50 pointer-events-none -z-10 hidden sm:block"
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </motion.div>

              {/* The Electrician Illustration Image - floats smoothly in 3D space */}
              <motion.img
                src={electricianIllustration}
                alt="Expert electrician vector illustration installing a pendant light bulb"
                className="w-full h-full object-contain object-center select-none z-10"
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 1.5, -1, 0],
                  scale: [1, 1.02, 0.99, 1]
                }}
                transition={{
                  duration: 8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
              />

              {/* Tiny floating accent badge */}
              <motion.div 
                className="absolute bottom-6 right-6 flex items-center gap-1.5 bg-[#0F172A] text-white px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-md select-none pointer-events-none"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Expert Care
              </motion.div>

              {/* Additional floating lightning spark in top-left */}
              <motion.div 
                className="absolute top-8 left-8 flex items-center justify-center bg-[#FF6B00] text-white p-2 rounded-xl shadow-lg select-none pointer-events-none"
                animate={{
                  y: [0, 6, 0],
                  scale: [1, 1.1, 0.9, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Zap className="h-4 w-4 fill-white" />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
