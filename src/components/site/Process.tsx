import { motion } from "framer-motion";
import {
  CalendarCheck,
  Search,
  FileText,
  Wrench,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/hooks/useLanguage";

export function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: CalendarCheck,
      title: t("Schedule Service", "Programar Servicio"),
      desc: t("Book online in 60 seconds or call our 24/7 dispatcher for immediate dispatch.", "Reserve en línea en 60 segundos o llame a nuestro despachador 24/7 para un envío inmediato."),
    },
    {
      icon: Search,
      title: t("Detailed Inspection", "Inspección Detallada"),
      desc: t("Comprehensive diagnostic checks of panels, wiring, loads, and code compliance.", "Controles de diagnóstico integrales de paneles, cableado, cargas y cumplimiento de códigos."),
    },
    {
      icon: FileText,
      title: t("Transparent Estimate", "Presupuesto Transparente"),
      desc: t("Upfront, itemized quote signed before any work begins. What we quote is what you pay.", "Cotización detallada por adelantado firmada antes de comenzar cualquier trabajo. Lo que cotizamos es lo que paga."),
    },
    {
      icon: Wrench,
      title: t("Expert Installation", "Instalación Experta"),
      desc: t("Licensed master electricians execute clean, code-compliant, and safe work.", "Electricistas maestros autorizados ejecutan trabajos limpios, seguros y que cumplen con los códigos."),
    },
    {
      icon: BadgeCheck,
      title: t("Safety & Sign-Off", "Seguridad y Aprobación"),
      desc: t("Load testing, safety compliance sign-off, and full workmanship warranty activated.", "Prueba de carga, aprobación de cumplimiento de seguridad y garantía de mano de obra completa activada."),
    },
  ];

  const desktopPositions = [
    { left: "20%", top: "50px" },
    { left: "50%", top: "50px" },
    { left: "80%", top: "50px" },
    { left: "20%", top: "310px" },
    { left: "50%", top: "310px" },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-white border-y border-slate-100">

      {/* Background grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #FF6B00 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* CSS Animations */}
      <style>{`
        @keyframes electricFlow {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -30; }
        }
        @keyframes sparkFlow {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 45; }
        }
        @keyframes verticalElectricFlow {
          0%   { background-position: 0 0; }
          100% { background-position: 0 -40px; }
        }
        @keyframes pulseGlow {
          0%,100% { transform: scale(0.96); opacity: 0.15; }
          50%     { transform: scale(1.04); opacity: 0.35; }
        }
        @keyframes pulseGlowLarge {
          0%,100% { transform: scale(0.98); opacity: 0.05; }
          50%     { transform: scale(1.02); opacity: 0.15; }
        }
        .pulse-glow      { animation: pulseGlow 2s infinite ease-in-out; transform-origin: 17px 15px; }
        .pulse-glow-large{ animation: pulseGlowLarge 3s infinite ease-in-out; transform-origin: 17px 15px; }
        .electric-flow   { stroke-dasharray: 6 6; animation: electricFlow 0.5s infinite linear; }
        .spark-flow      { stroke-dasharray: 12 24; animation: sparkFlow 1.8s infinite linear; }
        .mobile-electric-flow {
          background: linear-gradient(to bottom,#ff6b00 0%,#ff6b00 30%,#ffe2cc 50%,#ff6b00 70%,#ff6b00 100%);
          background-size: 100% 40px;
          animation: verticalElectricFlow 1.2s infinite linear;
        }
      `}</style>

      <div className="mx-auto w-[90%] max-w-7xl relative z-10">

        {/* ── Section Header ──────────────────────────────── */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 bg-[#FF6B00]/10 border border-[#FF6B00]/20 text-[#FF6B00] rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
            {t("Step by Step Process", "Proceso Paso a Paso")}
          </span>

          <h2 
            className="text-[#0F172A] tracking-tight leading-[1.15]"
            style={{ fontSize: "36px", marginTop: "-15px", marginBottom: "10px", fontWeight: 700 }}
          >
            {t("We Complete Every ", "Completamos Cada ")}
            <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF8C33] bg-clip-text text-transparent">
              {t("Step Carefully.", "Paso con Cuidado.")}
            </span>
          </h2>

          <p 
            className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-medium leading-relaxed"
            style={{ marginBottom: "-50px" }}
          >
            {t("Our proven methodology guarantees precision, safety, and clean, code-compliant results — from your first call to final sign-off.", "Nuestra metodología comprobada garantiza precisión, seguridad y resultados limpios que cumplen con los códigos, desde su primera llamada hasta la firma final.")}
          </p>
        </motion.div>

        {/* ── 1. DESKTOP: S-Curve SVG Layout ──────────────── */}
        <div className="hidden lg:block relative w-full h-[500px] select-none">
          <svg
            viewBox="0 0 1200 360"
            className="absolute top-0 left-0 w-full h-[360px] pointer-events-none z-0"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor="#1E293B" />
                <stop offset="40%"  stopColor="#475569" />
                <stop offset="60%"  stopColor="#334155" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>
            </defs>

            {/* Drop shadow */}
            <path d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#0f172a" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" opacity="0.07" />
            {/* Outer conduit */}
            <path d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#334155" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            {/* Animated orange core */}
            <motion.path
              d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#FF6B00" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
            {/* Yellow spark flow */}
            <path d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#FFE600" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
              opacity="0.8" className="spark-flow" />
            {/* Glossy highlight */}
            <motion.path
              d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              opacity="0.75"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />

            {/* Meter box at start */}
            <g transform="translate(45, 20)">
              <rect x="0" y="0" width="55" height="60" rx="8" fill="#334155" stroke="#1E293B" strokeWidth="2.5" />
              <rect x="4" y="4" width="47" height="20" rx="3" fill="#1E293B" />
              <rect x="8" y="7" width="39" height="14" rx="1.5" fill="#090D16" />
              <line x1="12" y1="14" x2="32" y2="14" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
              <circle cx="39" cy="14" r="1.5" fill="#10B981" className="animate-pulse" />
              <rect x="14" y="32" width="10" height="18" rx="1.5" fill="#0F172A" />
              <rect x="16" y="29" width="6" height="10" rx="0.5" fill="#FF6B00" />
              <path d="M 36 34 L 42 34 L 39 41 L 44 38 L 40 47" stroke="#FFE600" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            </g>
            <rect x="100" y="40" width="8" height="20" rx="1" fill="#1E293B" />
            <rect x="108" y="46" width="12" height="8" fill="#475569" />

            {/* Glowing bulb at end */}
            <g transform="translate(915, 260)">
              <rect x="0" y="44" width="8" height="14" rx="1" fill="#1E293B" />
              <rect x="8" y="40" width="18" height="22" rx="2" fill="#64748B" stroke="#475569" strokeWidth="1.5" />
              <line x1="8"  y1="46" x2="26" y2="46" stroke="#334155" strokeWidth="1.5" />
              <line x1="8"  y1="52" x2="26" y2="52" stroke="#334155" strokeWidth="1.5" />
              <line x1="8"  y1="58" x2="26" y2="58" stroke="#334155" strokeWidth="1.5" />
              <path d="M 13 40 L 15 28 M 21 40 L 19 28" stroke="#94A3B8" strokeWidth="1" />
              <path d="M 15 28 Q 17 22 19 28" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" fill="none" className="pulse-glow" />
              <path d="M 5 32 C -5 32, -8 18, -3 8 C 2 -2, 32 -2, 37 8 C 42 18, 39 32, 29 32 Z"
                fill="none" stroke="#E2E8F0" strokeWidth="2.5" />
              <circle cx="17" cy="15" r="28" fill="#FF6B00" opacity="0.12" className="pulse-glow" />
              <circle cx="17" cy="15" r="45" fill="#FF8C33" opacity="0.05" className="pulse-glow-large" />
            </g>
          </svg>

          {/* Step nodes */}
          {steps.map((s, i) => {
            const pos = desktopPositions[i];
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="absolute group cursor-default"
                style={{ left: pos.left, top: pos.top }}
              >
                {/* Circle node */}
                <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[78px] h-[78px] rounded-full bg-white shadow-[0_10px_32px_rgba(15,23,42,0.08)] border border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_40px_-6px_rgba(255,107,0,0.25)] group-hover:border-[#FF6B00]/30">
                  {/* Step number badge */}
                  <div className="absolute -top-2.5 -right-1 w-5 h-5 rounded-full bg-[#FF6B00] flex items-center justify-center shadow-md border-2 border-white">
                    <span className="text-white text-[9px] font-black leading-none">{i + 1}</span>
                  </div>
                  {/* Outer halo */}
                  <div className="absolute -inset-3 rounded-full border border-[#FF6B00]/15 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400" />
                  {/* Inner ring */}
                  <div className="absolute inset-1 rounded-full border border-transparent group-hover:border-[#FF6B00]/30 transition-all duration-300" />
                  {/* Icon */}
                  <Icon className="h-7 w-7 text-slate-400 group-hover:text-[#FF6B00] transition-colors duration-300" />
                </div>

                {/* Text block below node */}
                <div className="absolute top-[48px] -translate-x-1/2 text-center w-[220px] flex flex-col items-center pt-1">
                  <h3 className="font-extrabold text-[15px] text-[#0F172A] leading-tight mt-1 mb-1.5 group-hover:text-[#FF6B00] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium px-1">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── 2. MOBILE: Vertical Timeline ────────────────── */}
        <div className="relative grid gap-8 pl-14 lg:hidden">
          {/* Animated vertical conduit */}
          <div className="absolute left-[39px] top-6 bottom-6 w-2.5 pointer-events-none z-0">
            <div className="absolute inset-0 bg-slate-900/10 rounded-full blur-[2px]" />
            <div className="absolute inset-0 bg-[#334155] rounded-full" />
            <div className="absolute inset-[2px] rounded-full mobile-electric-flow" />
            <div className="absolute left-[3px] top-[2px] bottom-[2px] w-[1.5px] bg-white/75 rounded-full" />
          </div>

          {/* Meter box at top */}
          <div className="absolute left-[18px] -top-6 pointer-events-none z-10 w-[50px] h-[54px]">
            <svg viewBox="0 0 60 65" className="w-full h-full" fill="none">
              <rect x="5" y="5" width="50" height="55" rx="6" fill="#334155" stroke="#1E293B" strokeWidth="2" />
              <rect x="10" y="10" width="40" height="15" rx="2" fill="#090D16" />
              <line x1="15" y1="17" x2="35" y2="17" stroke="#10B981" strokeWidth="1.5" />
              <rect x="25" y="35" width="10" height="18" rx="1" fill="#0F172A" />
              <rect x="27" y="32" width="6" height="10" rx="0.5" fill="#FF6B00" />
            </svg>
          </div>

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col group text-left"
              >
                {/* Circle node */}
                <div className="absolute -left-[54px] top-0 w-12 h-12 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.07)] border border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-105 group-hover:border-[#FF6B00]/30">
                  {/* Step badge */}
                  <div className="absolute -top-1.5 -right-0.5 w-4 h-4 rounded-full bg-[#FF6B00] flex items-center justify-center border border-white">
                    <span className="text-white text-[8px] font-black">{i + 1}</span>
                  </div>
                  <div className="absolute inset-0.5 rounded-full border border-transparent group-hover:border-[#FF6B00]/40 transition-colors duration-300" />
                  <div className="absolute -inset-2 rounded-full border border-[#FF6B00]/20 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                  <Icon className="h-5 w-5 text-slate-400 group-hover:text-[#FF6B00] transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="pl-4 py-0.5">
                  <h3 className="font-extrabold text-base text-[#0F172A] leading-tight mt-0 mb-1.5 group-hover:text-[#FF6B00] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium max-w-sm">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
