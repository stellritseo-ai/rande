import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import whyChooseImg from "@/assets/why-choose.jpeg";
import { useLanguage } from "@/hooks/useLanguage";

const TinyShieldIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#008A22] fill-[#008A22]/20 shrink-0" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export function WhyChooseUs() {
  const { t } = useLanguage();

  const features = [
    { title: t("Licensed & Insured", "Con Licencia y Seguro"), desc: t("Fully licensed general builders with $2M liability coverage.", "Constructores generales totalmente autorizados con cobertura de responsabilidad civil de $2M.") },
    { title: t("Prompt Schedule", "Programación Rápida"), desc: t("Prompt quotes, active project timelines, and reliable build pacing.", "Cotizaciones rápidas, cronogramas de proyectos activos y ritmo de construcción confiable.") },
    { title: t("Transparent Pricing", "Precios Transparentes"), desc: t("Flat-rate quotes signed off before any work begins.", "Cotizaciones de tarifa fija firmadas antes de que comience cualquier trabajo.") },
    { title: t("Experienced Builders", "Constructores Experimentados"), desc: t("25+ years average experience. Background-checked professional crew.", "Más de 25 años de experiencia promedio. Equipo profesional con verificación de antecedentes.") },
    { title: t("Certified Compliance", "Cumplimiento Certificado"), desc: t("Strict adherence to local Colorado building codes and safety regulations.", "Adhesión estricta a los códigos de construcción y normas de seguridad locales de Colorado.") },
    { title: t("Satisfaction Guarantee", "Garantía de Satisfacción"), desc: t("Workmanship warranty on every construction project we deliver.", "Garantía de mano de obra en cada proyecto de construcción que entregamos.") },
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
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#008A22]/20 bg-[#008A22]/5 text-[#008A22] text-[10px] md:text-[11px] font-black uppercase tracking-widest mb-6 shadow-sm select-none">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008A22] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#008A22]"></span>
                </span>
                <span>{t("Why Choose Us", "Por Qué Elegirnos")}</span>
              </div>

              <h2 className="leading-[1.2] text-neutral-900 tracking-tight font-extrabold text-[24px] sm:text-[31px] capitalize mt-[-10px] mb-[10px]">
                {t("The standard for ", "El estándar para una ")}<span className="text-[#008A22]">{t("premium", "construcción")}</span>{t(" construction service.", " premium.")}
              </h2>

              {/* Description */}
              <p className="text-slate-500 text-[15px] leading-[28px] mb-6 font-medium max-w-[95%]">
                {t("We've built our reputation on doing the job right the first time — with the safety, craftsmanship, and transparent communication that Colorado homeowners and businesses rely on.", "Hemos construido nuestra reputación haciendo bien el trabajo desde la primera vez, con la seguridad, la mano de obra y la comunicación transparente en la que confían los propietarios y empresas del Colorado.")}
              </p>

              {/* Feature items */}
              <div className="space-y-1 mb-8 w-full text-left">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="group/item flex items-start gap-3 hover:bg-[#008A22]/5 p-2.5 rounded-xl transition-all duration-300"
                  >
                    <span className="text-[#008A22] mt-1 shrink-0 group-hover/item:translate-x-1.5 transition-transform duration-300 ease-out">
                      <TinyShieldIcon />
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
                  href="tel:+17202987777"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#008A22] to-[#006e1b] hover:from-[#006e1b] hover:to-[#004f13] text-white text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-full px-7 py-3.5 transition-all duration-300 shadow-[0_4px_14px_rgba(0,138,34,0.25)] hover:scale-[1.03] active:scale-[0.97]"
                >
                  {t("Call (720) 298-7777", "Llamar al (720) 298-7777")}
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
                alt="Licensed Contractor working on framing"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500 ease-out"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none" />

              {/* Glassmorphic Overlay Card */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:p-5 shadow-lg flex items-center justify-between select-none transition-all duration-300 group-hover:bottom-6 group-hover:bg-white/95 group-hover:shadow-xl">
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{t("ACC Quality", "Calidad ACC")}</p>
                  <p className="text-xs sm:text-sm font-extrabold text-[#0F172A] mt-0.5">{t("Licensed Colorado Contractors", "Contratistas Autorizados de Colorado")}</p>
                </div>
                <span className="text-[10px] font-black text-[#008A22] bg-[#008A22]/10 border border-[#008A22]/20 px-2.5 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
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
