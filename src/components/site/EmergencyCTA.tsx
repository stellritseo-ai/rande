import { motion } from "framer-motion";
import { Phone, Clock, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
import heroVideo from "@/assets/herovideo.mp4";
import { useLanguage } from "@/hooks/useLanguage";

export function EmergencyCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden py-[50px] text-white bg-[#0F172A] border-y border-white/5">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden translate-z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover [will-change:transform] translate-z-0"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Modern dark gradient overlay for visual depth and contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/70 to-[#0F172A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-[#0F172A]/35" />
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-center">

          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-red-500/10 border border-red-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              {t("Emergency Dispatch Active", "Despacho de Emergencia Activo")}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[26px] sm:text-3xl lg:text-[34px] font-extrabold capitalize tracking-tight leading-tight text-white"
            >
              {t("Need immediate electrical assistance?", "¿Necesita asistencia eléctrica inmediata?")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-white/80 max-w-xl leading-relaxed"
            >
              {t("Power outage? Burning smell? Sparking outlets? Don't wait and risk electrical fires or injury. Our certified master electricians are on call 24/7 with fully equipped response trucks.", "¿Corte de energía? ¿Olor a quemado? ¿Tomacorrientes con chispas? No espere y se arriesgue a incendios eléctricos o lesiones. Nuestros electricistas certificados están de guardia 24/7 con camiones de respuesta totalmente equipados.")}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-3 pt-2 w-full max-w-sm"
            >
              <li className="flex items-center gap-3 text-white/90">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF6B00]/20 text-[#FF6B00] shrink-0">
                  <Clock className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm font-medium">
                  {t("24/7 Emergency Response", "Respuesta de Emergencia 24/7")}
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF6B00]/20 text-[#FF6B00] shrink-0">
                  <Zap className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm font-medium">
                  {t("30 Min Average Arrival", "Llegada Promedio en 30 Minutos")}
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF6B00]/20 text-[#FF6B00] shrink-0">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm font-medium">
                  {t("Licensed & Insured Pros", "Profesionales Autorizados y Asegurados")}
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF6B00]/20 text-[#FF6B00] shrink-0">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm font-medium">
                  {t("100% Satisfaction Guarantee", "Garantía de Satisfacción del 100%")}
                </span>
              </li>
            </motion.ul>
          </div>

          {/* Right Action Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2,
            }}
            className="lg:col-span-5 flex flex-col items-center gap-4 w-full"
          >
            <div className="relative group w-full max-w-full sm:max-w-sm">
              {/* Outer pulsing ring background effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

              <a
                href="tel:(786)307-5933"
                className="relative flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-red-600 to-[#d62828] p-5 sm:p-6 font-semibold text-white shadow-2xl hover:brightness-110 transition-all duration-300 w-full"
              >
                <div className="flex items-center gap-4">
                  <span className="relative grid place-items-center h-12 w-12 rounded-full bg-white/10 ring-4 ring-white/5 pulse-ring shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </span>
                  <div className="text-left">
                    <span className="block text-[10px] uppercase tracking-widest text-white/80 font-bold">
                      {t("Emergency Hotline", "Línea Directa de Emergencia")}
                    </span>
                    <span className="block text-xl sm:text-2xl font-display font-black leading-tight tracking-tight mt-0.5">
                      (786) 307-5933
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Micro-trust glass badge */}
            <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-xs text-white/70 w-full max-w-sm justify-center lg:justify-start">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t("Electricians are active & ready to dispatch in Miami", "Los electricistas están activos y listos para despachar en Miami")}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
