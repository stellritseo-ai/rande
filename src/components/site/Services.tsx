import { Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  Battery, 
  Bolt, 
  Building2, 
  Cable, 
  Home, 
  Plug, 
  ShieldAlert, 
  Video, 
  Wrench, 
  Zap,
  Hotel,
  Activity,
  Utensils
} from "lucide-react";
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/80 group-hover:to-black/20 transition-all duration-500" />

      {/* Orange accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF6B00] via-[#FF8533] to-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon badge — top-left */}
      <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-[#FF6B00]/90 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
        <Icon className="h-4 w-4" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-5 flex flex-col justify-end z-10">
        <div className="transition-all duration-500 group-hover:-translate-y-2 text-left">
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
    // Top 3 Commercial & Construction cards
    { 
      icon: Building2, 
      title: t("Commercial Electrical", "Electricidad Comercial"), 
      desc: t("Tenant build-outs, multifamily housing, retail lighting, 3-phase switchboards, and full NEC compliance.", "Remodelaciones de oficina, edificios multifamiliares, comercio, trifásica y cumplimiento NEC."), 
      image: comImg, 
      to: "/services/commercial" 
    },
    { 
      icon: Building2, 
      title: t("New Construction Electrical", "Nuevas Construcciones"), 
      desc: t("Ground-up engineering, underground conduit, primary risers, blueprints, rough-ins, and final code sign-offs.", "Ingeniería desde cero, conductos subterráneos, acometidas, planos, rough-in e inspecciones."), 
      image: comImg, 
      to: "/services/new-construction-electrical" 
    },
    { 
      icon: Hotel, 
      title: t("Hospitality & Hotel Remodeling", "Hotelería y Remodelación de Hoteles"), 
      desc: t("Comprehensive hotel renovations, guest room power, resort lighting, and commercial generator backup systems.", "Renovación integral de hoteles, energía en habitaciones, iluminación de resorts y generadores."), 
      image: indImg, 
      to: "/services/commercial" 
    },
    // Secondary & specialty capabilities
    { 
      icon: ShieldAlert, 
      title: t("Fire Alarm Systems", "Sistemas de Alarma contra Incendios"), 
      desc: t("Life-safety certified design, low-voltage conduit, central panels, and Fire Marshal inspection approvals.", "Diseño con certificación de seguridad, tuberías de bajo voltaje, paneles y aprobación de bomberos."), 
      image: panImg, 
      to: "/services/fire-alarm" 
    },
    { 
      icon: Bolt, 
      title: t("Industrial Electrical", "Electricidad Industrial"), 
      desc: t("Heavy manufacturing power distribution, MCC motor controls, high-voltage transformers, and plant maintenance.", "Distribución para manufactura pesada, centros de control de motores y mantenimiento."), 
      image: indImg, 
      to: "/services/industrial" 
    },
    { 
      icon: Activity, 
      title: t("Medical & Dental Clinics", "Clínicas Médicas y Dentales"), 
      desc: t("NFPA 99 healthcare compliant electrical, isolated ground lines, imaging rooms, and clinical equipment circuits.", "Electricidad bajo norma NFPA 99, tierras aisladas, salas de rayos X y equipos clínicos."), 
      image: comImg, 
      to: "/services/commercial" 
    },
    { 
      icon: Utensils, 
      title: t("Restaurant & Kitchen Power", "Restaurantes y Cocinas Comerciales"), 
      desc: t("High-amperage kitchen equipment, walk-in cooler circuits, Ansul exhaust interlocks, and dining illumination.", "Equipos de cocina de alto amperaje, cuartos fríos, interbloqueo de campanas e iluminación."), 
      image: indImg, 
      to: "/services/commercial" 
    },
    { 
      icon: Zap, 
      title: t("Panel Upgrades & Switchgear", "Actualizaciones de Tableros"), 
      desc: t("Modernize circuit breaker panels and commercial main switchboards from 200A to 2000A capacity safely.", "Modernice paneles de disyuntores y tableros comerciales principales de 200A a 2000A."), 
      image: panImg, 
      to: "/services/panel-upgrades" 
    },
    { 
      icon: Plug, 
      title: t("EV Charger Stations", "Estaciones de Carga EV"), 
      desc: t("Commercial fleet charging hubs, multi-family parking lot ports, and Level 2 installations.", "Hubs de carga para flotas comerciales, estacionamientos multifamiliares e instalaciones Nivel 2."), 
      image: evImg, 
      to: "/services/ev-charger" 
    },
    { 
      icon: Battery, 
      title: t("Commercial Backup Generators", "Generadores de Respaldo Comerciales"), 
      desc: t("High-capacity automatic transfer switches, hurricane emergency backup, and continuous critical power.", "Interruptores de transferencia automática, respaldo ante huracanes y energía ininterrumpida."), 
      image: genImg, 
      to: "/services/generator" 
    },
    { 
      icon: Home, 
      title: t("Residential Electrical", "Electricidad Residencial"), 
      desc: t("High-end residential wiring, architectural lighting, safety diagnostics, and whole-home rewiring.", "Cableado residencial de alta gama, iluminación arquitectónica, diagnósticos y recableado."), 
      image: resImg, 
      to: "/services/residential" 
    },
    { 
      icon: Video, 
      title: t("CCTV & Low-Voltage Systems", "Cámaras CCTV y Bajo Voltaje"), 
      desc: t("Structured data cabling, 4K security camera surveillance, and NVR enterprise networks.", "Cableado estructurado de datos, videovigilancia 4K y redes empresariales NVR."), 
      image: cctvImg, 
      to: "/services/cctv-camera" 
    },
    { 
      icon: Wrench, 
      title: t("24/7 Emergency Dispatch", "Servicio de Emergencia 24/7"), 
      desc: t("Immediate master electrician response for commercial power failures, hazards, and blown transformers.", "Respuesta inmediata para cortes comerciales, riesgos eléctricos y transformadores dañados."), 
      image: indImg, 
      to: "/services/emergency" 
    },
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
              {t("Commercial & Construction Services", "Servicios Comerciales y de Construcción")}
              <svg className="w-3 h-3 fill-[#FF6B00]" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </span>

            {/* Heading */}
            <h2
              className="text-neutral-900 tracking-tight leading-[1.2] font-extrabold"
              style={{ fontSize: "29px", marginTop: "-12px", marginBottom: "-8px" }}
            >
              <span className="text-[#FF6B00]">{t("Commercial Electrical Services", "Servicios Eléctricos Comerciales")}</span>{" "}
              {t("Across Florida", "en Toda Florida")}
            </h2>

            {/* Divider accent */}
            <div className="flex items-center gap-3 mt-5 mb-5">
              <div className="h-[2px] w-10 bg-[#FF6B00] rounded-full" />
              <div className="h-[2px] w-4 bg-[#FF6B00]/40 rounded-full" />
            </div>

            <p
              className="text-slate-600 text-sm md:text-[15px] leading-[28px] font-medium max-w-[95%]"
              style={{ marginTop: "-11px", marginBottom: "-20px" }}
            >
              {t(
                "Operating under License #EC 13008942, we specialize in major commercial projects, multifamily buildings, hotels, and new construction across Florida. Master electricians delivering precision line-item bids and on-time project milestones.",
                "Bajo la Licencia #EC 13008942, nos especializamos en grandes proyectos comerciales, edificios multifamiliares, hoteles y nuevas construcciones en Florida. Maestros electricistas con presupuestos precisos y entrega puntual."
              )}
            </p>

            {/* Trust row */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-bold text-slate-700">
              {[
                t("License #EC 13008942", "Licencia #EC 13008942"),
                t("Bonded & $2M Insured", "Afianzado y Asegurado $2M"),
                t("Bid Turnarounds 24–48h", "Presupuestos en 24–48h"),
              ].map((itemText) => (
                <span key={itemText} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                  {itemText}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/submit-plans"
                className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#E05E00] text-white rounded-full px-6 py-3.5 text-[12px] font-black uppercase tracking-wider shadow-[0_10px_25px_-5px_rgba(255,107,0,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                {t("Submit Plans for Bid", "Presentar Planos para Licitación")} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-slate-300 hover:border-[#FF6B00] text-slate-800 hover:text-[#FF6B00] rounded-full px-5 py-3.5 text-[12px] font-bold uppercase tracking-wider transition-all duration-300"
              >
                {t("All Services", "Todos los Servicios")}
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
          className="mt-8 relative"
        >
          {/* Section divider with label */}
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 whitespace-nowrap">
              {t("Specialized Commercial, Healthcare & Residential Services", "Servicios Especializados Comerciales, de Salud y Residenciales")}
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
