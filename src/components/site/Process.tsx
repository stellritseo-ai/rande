import { motion } from "framer-motion";
import {
  CalendarCheck,
  Search,
  FileText,
  Wrench,
  BadgeCheck,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: CalendarCheck,
      title: t("Schedule Consultation", "Programar Consulta"),
      desc: t("Book online or call our office team to schedule a detailed on-site project walkthrough.", "Reserve en línea o llame a nuestra oficina para programar una visita detallada del proyecto en el sitio."),
    },
    {
      icon: Search,
      title: t("Site Planning & Inspection", "Planificación e Inspección del Sitio"),
      desc: t("We assess dimensions, structural feasibility, and layout requirements to plan your build correctly.", "Evaluamos dimensiones, viabilidad estructural y requisitos de diseño para planificar su construcción correctamente."),
    },
    {
      icon: FileText,
      title: t("Transparent Quote", "Cotización Transparente"),
      desc: t("Get a detailed, itemized contract and project schedule. What we quote is what you pay.", "Obtenga un contrato detallado y desglosado y un calendario de proyecto. Lo que cotizamos es lo que paga."),
    },
    {
      icon: Wrench,
      title: t("Precision Construction", "Construcción de Precisión"),
      desc: t("Our licensed tradesmen execute framing, concrete pouring, pavers, or remodeling work cleanly.", "Nuestros artesanos autorizados ejecutan carpintería, vertido de concreto, adoquines o remodelaciones con limpieza."),
    },
    {
      icon: BadgeCheck,
      title: t("Final Walkthrough", "Inspección Final"),
      desc: t("Detailed structural inspection, site cleanup, and full craftsmanship warranty activation.", "Inspección estructural detallada, limpieza del sitio y activación de la garantía total de mano de obra."),
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
            "radial-gradient(circle, #008A22 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* CSS Animations */}
      <style>{`
        @keyframes constructionFlow {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -30; }
        }
        @keyframes builderFlow {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 45; }
        }
        @keyframes verticalConstructionFlow {
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
        .construction-flow   { stroke-dasharray: 6 6; animation: constructionFlow 0.5s infinite linear; }
        .builder-flow      { stroke-dasharray: 12 24; animation: builderFlow 1.8s infinite linear; }
        .mobile-construction-flow {
          background: linear-gradient(to bottom, #008A22 0%, #008A22 30%, #e6f4ea 50%, #008A22 70%, #008A22 100%);
          background-size: 100% 40px;
          animation: verticalConstructionFlow 1.2s infinite linear;
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
          <span className="inline-flex items-center gap-2 bg-[#008A22]/10 border border-[#008A22]/20 text-[#008A22] rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#008A22] animate-pulse" />
            {t("Step by Step Process", "Proceso Paso a Paso")}
          </span>

          <h2 
            className="text-[#0F172A] tracking-tight leading-[1.15]"
            style={{ fontSize: "36px", marginTop: "-15px", marginBottom: "10px", fontWeight: 700 }}
          >
            {t("We Complete Every ", "Completamos Cada ")}
            <span className="bg-gradient-to-r from-[#008A22] to-[#10B981] bg-clip-text text-transparent">
              {t("Step Carefully.", "Paso con Cuidado.")}
            </span>
          </h2>

          <p 
            className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-medium leading-relaxed"
            style={{ marginBottom: "-50px" }}
          >
            {t("Our proven methodology guarantees precision, safety, and clean, durable results — from your first consultation to final inspection.", "Nuestra metodología comprobada garantiza precisión, seguridad y resultados limpios y duraderos, desde su primera consulta hasta la inspección final.")}
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
            {/* Drop shadow */}
            <path d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#0f172a" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" opacity="0.07" />
            {/* Outer conduit */}
            <path d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#334155" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            {/* Animated green core */}
            <motion.path
              d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#008A22" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
            {/* Yellow spark flow */}
            <path d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
              opacity="0.8" className="builder-flow" />
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

            {/* Project Blueprint Clipboard at start */}
            <g transform="translate(45, 20)">
              <rect x="0" y="0" width="55" height="60" rx="8" fill="#334155" stroke="#1E293B" strokeWidth="2.5" />
              <rect x="18" y="0" width="19" height="7" rx="1.5" fill="#64748B" stroke="#1E293B" strokeWidth="1.5" />
              <rect x="6" y="12" width="43" height="42" rx="3" fill="#E2E8F0" />
              <line x1="12" y1="20" x2="43" y2="20" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="28" x2="38" y2="28" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="36" x2="28" y2="36" stroke="#008A22" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 36 38 L 40 42 L 46 34" stroke="#008A22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>
            <rect x="100" y="40" width="8" height="20" rx="1" fill="#1E293B" />
            <rect x="108" y="46" width="12" height="8" fill="#475569" />

            {/* Completed House with Checklist Badge at end */}
            <g transform="translate(915, 260)">
              {/* House roof */}
              <path d="M 2 24 L 20 8 L 38 24 Z" fill="#475569" stroke="#334155" strokeWidth="2" strokeLinejoin="round" />
              {/* House walls */}
              <rect x="5" y="24" width="30" height="26" rx="2" fill="#334155" stroke="#1E293B" strokeWidth="2" />
              {/* House door */}
              <rect x="16" y="34" width="8" height="16" fill="#1E293B" />
              {/* Window (warm yellow glow) */}
              <rect x="8" y="28" width="5" height="5" rx="1" fill="#FFE600" opacity="0.8" className="pulse-glow" />
              
              {/* Glowing approval badge */}
              <circle cx="34" cy="12" r="10" fill="#008A22" stroke="#FFFFFF" strokeWidth="1.5" className="pulse-glow" />
              <path d="M 30 12 L 33 15 L 38 10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="34" cy="12" r="18" fill="#10B981" opacity="0.08" className="pulse-glow-large" />
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
                <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[78px] h-[78px] rounded-full bg-white shadow-[0_10px_32px_rgba(15,23,42,0.08)] border border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_40px_-6px_rgba(0,138,34,0.25)] group-hover:border-[#008A22]/30">
                  {/* Step number badge */}
                  <div className="absolute -top-2.5 -right-1 w-5 h-5 rounded-full bg-[#008A22] flex items-center justify-center shadow-md border-2 border-white">
                    <span className="text-white text-[9px] font-black leading-none">{i + 1}</span>
                  </div>
                  {/* Outer halo */}
                  <div className="absolute -inset-3 rounded-full border border-[#008A22]/15 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400" />
                  {/* Inner ring */}
                  <div className="absolute inset-1 rounded-full border border-transparent group-hover:border-[#008A22]/30 transition-all duration-300" />
                  {/* Icon */}
                  <Icon className="h-7 w-7 text-slate-400 group-hover:text-[#008A22] transition-colors duration-300" />
                </div>

                {/* Text block below node */}
                <div className="absolute top-[48px] -translate-x-1/2 text-center w-[220px] flex flex-col items-center pt-1">
                  <h3 className="font-extrabold text-[15px] text-[#0F172A] leading-tight mt-1 mb-1.5 group-hover:text-[#008A22] transition-colors duration-300">
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
            <div className="absolute inset-[2px] rounded-full mobile-construction-flow" />
            <div className="absolute left-[3px] top-[2px] bottom-[2px] w-[1.5px] bg-white/75 rounded-full" />
          </div>

          {/* Blueprint Clipboard at top */}
          <div className="absolute left-[18px] -top-6 pointer-events-none z-10 w-[50px] h-[54px]">
            <svg viewBox="0 0 60 65" className="w-full h-full" fill="none">
              <rect x="2" y="2" width="56" height="60" rx="8" fill="#334155" stroke="#1E293B" strokeWidth="2" />
              <rect x="20" y="2" width="20" height="7" rx="1.5" fill="#64748B" stroke="#1E293B" strokeWidth="1.5" />
              <rect x="8" y="14" width="44" height="42" rx="3" fill="#E2E8F0" />
              <line x1="15" y1="22" x2="45" y2="22" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
              <line x1="15" y1="30" x2="40" y2="30" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
              <line x1="15" y1="38" x2="30" y2="38" stroke="#008A22" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 38 40 L 42 44 L 48 36" stroke="#008A22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
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
                <div className="absolute -left-[54px] top-0 w-12 h-12 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.07)] border border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-105 group-hover:border-[#008A22]/30">
                  {/* Step badge */}
                  <div className="absolute -top-1.5 -right-0.5 w-4 h-4 rounded-full bg-[#008A22] flex items-center justify-center border border-white">
                    <span className="text-white text-[8px] font-black">{i + 1}</span>
                  </div>
                  <div className="absolute inset-0.5 rounded-full border border-transparent group-hover:border-[#008A22]/40 transition-colors duration-300" />
                  <div className="absolute -inset-2 rounded-full border border-[#008A22]/20 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                  <Icon className="h-5 w-5 text-slate-400 group-hover:text-[#008A22] transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="pl-4 py-0.5">
                  <h3 className="font-extrabold text-base text-[#0F172A] leading-tight mt-0 mb-1.5 group-hover:text-[#008A22] transition-colors duration-300">
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
