import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import whyChooseImg from "@/assets/why-choose.jpeg";
import { useLanguage } from "@/hooks/useLanguage";

const TinyLightningIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#FF6B00] fill-[#FF6B00] shrink-0" viewBox="0 0 24 24">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export function WhyChooseUs() {
  const { t } = useLanguage();

  const features = [
    { title: t("Licensed & Insured", "Con Licencia y Seguro"), desc: t("Fully licensed master electricians with $2M liability coverage.", "Electricistas maestros totalmente autorizados con cobertura de responsabilidad civil de $2M.") },
    { title: t("Fast Response Time", "Tiempo de Respuesta Rápido"), desc: t("Same-day quotes and emergency dispatch within 60 minutes.", "Cotizaciones el mismo día y despacho de emergencia en menos de 60 minutos.") },
    { title: t("Transparent Pricing", "Precios Transparentes"), desc: t("Flat-rate quotes signed off before any work begins.", "Cotizaciones de tarifa fija firmadas antes de que comience cualquier trabajo.") },
    { title: t("Experienced Electricians", "Electricistas Experimentados"), desc: t("17+ years average tenure. Background-checked technicians.", "Más de 17 años de experiencia promedio. Técnicos con verificación de antecedentes.") },
    { title: t("Emergency Support", "Soporte de Emergencia"), desc: t("24/7 hotline for power outages, breakers, and hazards.", "Línea directa 24/7 para cortes de energía, disyuntores y peligros.") },
    { title: t("Satisfaction Guarantee", "Garantía de Satisfacción"), desc: t("Workmanship warranty on every installation we deliver.", "Garantía de mano de obra en cada instalación que entregamos.") },
  ];

  return (
    <section id="why-choose-us" className="py-[60px] bg-white border-b border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">

          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center h-full w-full order-2 lg:order-1"
          >
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
              {/* Badge with Ping */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#FF6B00]/20 bg-[#FF6B00]/5 text-[#FF6B00] text-[10px] md:text-[11px] font-black uppercase tracking-widest mb-6 shadow-sm select-none">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B00]"></span>
                </span>
                <span>{t("Why Choose Us", "Por Qué Elegirnos")}</span>
              </div>

              <h2 className="leading-[1.2] text-neutral-900 tracking-tight font-extrabold text-[24px] sm:text-[31px] capitalize mt-[-10px] mb-[10px]">
                {t("The standard for ", "El estándar para un ")}<span className="text-[#FF6B00]">{t("premium", "servicio")}</span>{t(" electrical service.", " eléctrico premium.")}
              </h2>

              {/* Description */}
              <p className="text-slate-500 text-[15px] leading-[28px] mb-6 font-medium max-w-[95%]">
                {t("We've built our reputation on doing the job right the first time — with the safety, craftsmanship, and transparent communication that South Florida homeowners and businesses rely on.", "Hemos construido nuestra reputación haciendo bien el trabajo desde la primera vez, con la seguridad, la mano de obra y la comunicación transparente en la que confían los propietarios y empresas del sur de Florida.")}
              </p>

              {/* Feature items */}
              <div className="space-y-1 mb-8 w-full text-left">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="group/item flex items-start gap-3 hover:bg-[#FF6B00]/5 p-2.5 rounded-xl transition-all duration-300"
                  >
                    <span className="text-[#FF6B00] mt-1 shrink-0 group-hover/item:translate-x-1.5 transition-transform duration-300 ease-out">
                      <TinyLightningIcon />
                    </span>
                    <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed">
                      <strong className="font-extrabold text-[#0F172A]">{f.title}:</strong>{" "}
                      <span className="text-slate-500 font-medium">{f.desc}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#1e293b] text-white text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-full px-7 py-3.5 transition-all duration-300 shadow-[0_4px_14px_rgba(15,23,42,0.15)] hover:scale-[1.03] active:scale-[0.97]"
                >
                  {t("Explore Services", "Explorar Servicios")}
                </Link>
                <a
                  href="tel:+17863075933"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#E05E00] hover:from-[#E05E00] hover:to-[#C24F00] text-white text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-full px-7 py-3.5 transition-all duration-300 shadow-[0_4px_14px_rgba(255,107,0,0.25)] hover:scale-[1.03] active:scale-[0.97]"
                >
                  {t("Call (786) 307-5933", "Llamar al (786) 307-5933")}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Image Showcase Card */}
          <div className="relative w-full order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group rounded-3xl overflow-hidden shadow-lg border border-slate-100 h-[280px] sm:h-[360px] lg:h-[480px] lg:sticky lg:top-[120px] w-full"
            >
              <img
                src={whyChooseImg}
                alt="Licensed Electrician working on breaker panel board"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500 ease-out"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none" />

              {/* Glassmorphic Overlay Card */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:p-5 shadow-lg flex items-center justify-between select-none transition-all duration-300 group-hover:bottom-6 group-hover:bg-white/95 group-hover:shadow-xl">
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{t("R&E Quality", "Calidad R&E")}</p>
                  <p className="text-xs sm:text-sm font-extrabold text-[#0F172A] mt-0.5">{t("Licensed Florida Electricians", "Electricistas Autorizados de Florida")}</p>
                </div>
                <span className="text-[10px] font-black text-[#FF6B00] bg-[#FF6B00]/10 border border-[#FF6B00]/20 px-2.5 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                  {t("Active Work", "Trabajo Activo")}
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
