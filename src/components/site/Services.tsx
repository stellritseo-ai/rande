import { Link } from "@tanstack/react-router";
import { ArrowRight, Battery, Bolt, Building2, Cable, Home, Plug, ShieldAlert, Video, Wrench, Zap } from "lucide-react";
import resImg from "@/assets/service-residential.jpg";
import comImg from "@/assets/service-commercial.jpg";
import indImg from "@/assets/service-industrial.jpg";
import panImg from "@/assets/service-panel.jpg";
import evImg from "@/assets/service-ev.jpg";
import genImg from "@/assets/service-generator.jpg";
import cctvImg from "@/assets/service-cctv.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

/* ── Shared card inner content ─────────────────────────────── */
function CardContent({ s }: { s: { icon: any; title: string; desc: string; image: string; to: string } }) {
  const Icon = s.icon;
  const { t } = useLanguage();

  return (
    <>
      {/* Image */}
      <img
        src={s.image}
        alt={s.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        loading="lazy"
      />

      {/* Gradient — stronger on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent group-hover:from-black/95 group-hover:via-black/80 group-hover:to-black/20 transition-all duration-500" />

      {/* Orange accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF6B00] via-[#FF8533] to-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon badge — top-left */}
      <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-[#FF6B00]/90 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
        <Icon className="h-4 w-4" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-5 flex flex-col justify-end z-10">
        <div className="transition-all duration-500 group-hover:-translate-y-2">
          <h3 className="text-sm sm:text-[15px] font-extrabold text-white leading-tight uppercase tracking-wide">
            {s.title}
          </h3>

          {/* Hover reveal */}
          <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-out">
            <div className="overflow-hidden">
              <p className="text-[12px] text-white/80 leading-snug mt-2 line-clamp-3">
                {s.desc}
              </p>
              <Link
                to={s.to}
                className="mt-3 inline-flex items-center gap-1.5 text-[#FF8533] font-black text-[10px] uppercase tracking-widest group/link"
              >
                <span className="border-b border-[#FF8533]/50 group-hover/link:border-[#FF8533] transition-colors">
                  {t("Explore Service", "Explorar Servicio")}
                </span>
                <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Services() {
  const { t } = useLanguage();

  const services = [
    { icon: Building2,   title: t("New Construction Electrical", "Electricidad de Nuevas Construcciones"), desc: t("Commercial & residential wiring, structural installations, and full system layouts.", "Cableado comercial y residencial, instalaciones estructurales y diseños completos de sistemas."), image: comImg, to: "/services/commercial" },
    { icon: ShieldAlert, title: t("Fire Alarm Systems", "Sistemas de Alarma contra Incendios"),          desc: t("Safety-certified design, low-voltage wiring, code compliance, and testing.", "Diseño con certificación de seguridad, cableado de bajo voltaje, cumplimiento de códigos y pruebas."),   image: panImg, to: "/services/wiring-rewiring" },
    { icon: Cable,       title: t("Internet & Security Cameras", "Internet y Cámaras de Seguridad"), desc: t("Structured Cat6 network cabling, IP surveillance setups, and smart locks.", "Cableado estructurado de red Cat6, configuraciones de vigilancia IP y cerraduras inteligentes."),   image: resImg, to: "/services/security-systems" },
    { icon: Video,       title: t("CCTV Camera Install & Repair", "Instalación y Reparación de Cámaras CCTV"), desc: t("Premium HD surveillance, DVR configurations, IP setups, and diagnostics.", "Vigilancia HD premium, configuraciones de DVR, configuraciones IP y diagnósticos."), image: cctvImg, to: "/services/cctv-camera" },
    { icon: Home,        title: t("Residential Electrical", "Electricidad Residencial"),      desc: t("Whole-home wiring, lighting setups, smart controls, and safety diagnostics.", "Cableado para todo el hogar, configuraciones de iluminación, controles inteligentes y diagnósticos de seguridad."), image: resImg, to: "/services/residential" },
    { icon: Zap,         title: t("Panel Upgrades", "Actualizaciones de Panel"),              desc: t("Modernize circuit breaker panels to 200A or 400A service.", "Modernice los paneles de disyuntores a un servicio de 200A o 400A."),             image: panImg, to: "/services/panel-upgrades" },
    { icon: Plug,        title: t("EV Charger Installation", "Instalación de Cargador EV"),     desc: t("Level 2 home chargers and commercial EV station installations.", "Cargadores domésticos de nivel 2 e instalaciones de estaciones de EV comerciales."),        image: evImg,  to: "/services/ev-charger" },
    { icon: Battery,     title: t("Generator Installation", "Instalación de Generadores"),      desc: t("Whole-home emergency standby power setups with automatic transfer.", "Configuraciones de energía de reserva de emergencia para todo el hogar con transferencia automática."),    image: genImg, to: "/services/generator" },
    { icon: Bolt,        title: t("Industrial Electrical", "Electricidad Industrial"),       desc: t("Heavy-duty power distribution, equipment hookups, and phase controls.", "Distribución de energía de servicio pesado, conexiones de equipos y controles de fase."), image: indImg, to: "/services/industrial" },
    { icon: Wrench,      title: t("24/7 Emergency Service", "Servicio de Emergencia 24/7"),      desc: t("Rapid dispatch for power outages, sparking outlets, and hazards.", "Despacho rápido para cortes de energía, tomacorrientes con chispas y peligros."),      image: indImg, to: "/services/emergency" },
  ];

  const topItems   = services.slice(0, 3);
  const slideItems = [...services.slice(3), ...services.slice(3)];

  return (
    <section id="services" className="bg-[#F8FAFC] py-[60px] overflow-hidden border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">

        {/* ── Top Row: Text + 3 Hero Cards ──────────────────── */}
        <div className="grid gap-10 lg:grid-cols-[38%_1fr] lg:gap-14 items-center">

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="flex flex-col justify-center text-left"
          >
            {/* Eyebrow badge */}
            <span className="inline-flex items-center gap-2 bg-[#FF6B00]/10 border border-[#FF6B00]/20 text-[#FF6B00] rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest mb-5 w-fit">
              <svg className="w-3 h-3 fill-[#FF6B00]" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              {t("Our Services", "Nuestros Servicios")}
              <svg className="w-3 h-3 fill-[#FF6B00]" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </span>

            {/* Heading */}
            <h2
              className="text-neutral-900 tracking-tight leading-[1.2] font-extrabold"
              style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
            >
              {t("Full-Spectrum ", "Soluciones ")}
              <span className="text-[#FF6B00]">{t("Electrical", "Eléctricas")}</span>{" "}
              {t("Solutions", "Completas")}
            </h2>

            {/* Divider accent */}
            <div className="flex items-center gap-3 mt-5 mb-5">
              <div className="h-[2px] w-10 bg-[#FF6B00] rounded-full" />
              <div className="h-[2px] w-4 bg-[#FF6B00]/40 rounded-full" />
            </div>

            <p className="text-slate-500 text-sm md:text-[15px] leading-[28px] font-medium max-w-[95%]">
              {t("One licensed team. Every job — from a single outlet to a 50,000 sqft facility. High-quality electrical work with guaranteed safety and performance across Miami & South Florida.", "Un equipo autorizado. Cada trabajo, desde un solo tomacorriente hasta una instalación de 50,000 pies cuadrados. Trabajo eléctrico de alta calidad con seguridad y rendimiento garantizados en todo Miami y el sur de Florida.")}
            </p>

            {/* Trust row */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-bold text-slate-600">
              {[t("Licensed & Insured", "Con Licencia y Seguro"), t("24/7 Emergency", "Emergencia 24/7"), t("Free Estimates", "Presupuestos Gratis")].map((itemText) => (
                <span key={itemText} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                  {itemText}
                </span>
              ))}
            </div>

            <div className="mt-7">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#E05E00] text-white rounded-full px-7 py-3.5 text-[13px] font-black uppercase tracking-wider shadow-[0_10px_25px_-5px_rgba(255,107,0,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                {t("View All Services", "Ver Todos los Servicios")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Top 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {topItems.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: idx * 0.12, ease: "easeOut" }}
                className="group relative rounded-2xl overflow-hidden bg-neutral-950 h-[210px] sm:h-[290px] lg:h-[360px] xl:h-[400px] cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.22)] transition-shadow duration-500"
              >
                <CardContent s={s} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Auto-scroll Carousel ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
          className="mt-6 relative"
        >
          {/* Section divider with label */}
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">
              {t("More Services", "Más Servicios")}
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Fade edges */}
          <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none hidden sm:block" />
          <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none hidden sm:block" />

          <Carousel
            plugins={[
              AutoScroll({
                speed: 1.2,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                stopOnFocusIn: true,
              }),
            ]}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {slideItems.map((s, idx) => (
                <CarouselItem
                  key={`${s.title}-${idx}`}
                  className="pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <div className="group relative rounded-xl overflow-hidden bg-neutral-950 h-[180px] sm:h-[220px] lg:h-[260px] cursor-pointer shadow-md hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-shadow duration-500">
                    <CardContent s={s} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>

      </div>
    </section>
  );
}
