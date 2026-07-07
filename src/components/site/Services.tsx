import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Cable, Home, Wrench, Layers, Hammer, HardHat, Factory } from "lucide-react";
import srvDriveway from "@/assets/service-driveway.jpg";
import srvPatios from "@/assets/service-patios.jpg";
import srvSidewalk from "@/assets/service-sidewalk.jpg";
import srvRemodeling from "@/assets/service-remodeling.jpg";
import srvInteriorExterior from "@/assets/service-interior-exterior.jpg";
import srvAdditions from "@/assets/service-additions.jpg";
import srvHomeImprovements from "@/assets/service-home-improvements.jpg";
import srvFoundations from "@/assets/service-foundations.jpg";
import srvDecks from "@/assets/service-decks.jpg";
import srvFencing from "@/assets/service-fencing.jpg";
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

      {/* Green accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#008A22] via-[#10B981] to-[#008A22] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon badge — top-left */}
      <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-[#008A22]/90 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
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
                className="mt-3 inline-flex items-center gap-1.5 text-[#10B981] font-black text-[10px] uppercase tracking-widest group/link"
              >
                <span className="border-b border-[#10B981]/50 group-hover/link:border-[#10B981] transition-colors">
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
    { icon: Layers,    title: t("Driveways", "Entradas de Autos"), desc: t("Custom driveway designs, high-durability paving slabs, stone walkways, and overlays.", "Diseños de entradas personalizados, losas de pavimento de alta durabilidad, senderos de piedra."), image: srvDriveway, to: "/services/driveway" },
    { icon: Hammer,    title: t("Patios", "Patios"), desc: t("Premium stone, brick paver, and poured concrete patios built for relaxation and entertaining.", "Patios de adoquines de piedra, ladrillo y concreto vertido construidos para relajación."), image: srvPatios, to: "/services/patios" },
    { icon: Cable,      title: t("Sidewalks", "Aceras"), desc: t("Professional concrete sidewalks, pathways, curbs, walkways, and commercial pathways.", "Aceras de concreto profesionales, senderos, bordillos, caminos peatonales y senderos comerciales."), image: srvSidewalk, to: "/services/sidewalk" },
    { icon: Building2,  title: t("Remodeling", "Remodelación"), desc: t("Complete kitchen, bathroom, and structural interior renovations tailored to your vision.", "Renovaciones completas de cocina, baño y estructura interior adaptadas a su visión."), image: srvRemodeling, to: "/services/remodeling" },
    { icon: Wrench,    title: t("Interior/Exterior", "Interior/Exterior"), desc: t("Drywall repairs, exterior siding, painting, trim carpentry, and outdoor upgrades.", "Reparaciones de paneles de yeso, revestimiento exterior, pintura y carpintería de molduras."), image: srvInteriorExterior, to: "/services/interior-exterior" },
    { icon: Home,       title: t("Additions", "Adiciones"), desc: t("Expand your living space with custom guest houses, extra bedrooms, or secondary units.", "Amplíe su espacio habitable con casas de huéspedes personalizadas, dormitorios adicionales."), image: srvAdditions, to: "/services/home-additions" },
    { icon: Hammer,    title: t("Home Improvements", "Mejoras para el Hogar"), desc: t("General handyman repairs, wall texturing, framing improvements, and local carpentry.", "Reparaciones generales, texturizado de paredes, mejoras de estructuras y carpintería local."), image: srvHomeImprovements, to: "/services/home-improvements" },
    { icon: Layers,    title: t("Foundations", "Cimientos"), desc: t("Slabs, footings, high-strength concrete foundations, retaining walls, and structural work.", "Losas, zapatas, cimientos de concreto de alta resistencia, muros de contención y trabajo estructural."), image: srvFoundations, to: "/services/foundation" },
    { icon: HardHat,    title: t("Decks", "Terrazas de Madera"), desc: t("Custom wood and composite decks built for optimal outdoor living and durability.", "Terrazas de madera y material compuesto personalizadas construidas para durar."), image: srvDecks, to: "/services/decks" },
    { icon: Factory,    title: t("Fencing", "Cercas"), desc: t("Wood privacy, low-maintenance vinyl, chain link, and aluminum boundary fences.", "Cercas de privacidad de madera, vinilo de bajo mantenimiento, eslabones y aluminio."), image: srvFencing, to: "/services/fencing" },
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
            <span className="inline-flex items-center gap-2 bg-[#008A22]/10 border border-[#008A22]/20 text-[#008A22] rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest mb-5 w-fit">
              <svg className="w-3 h-3 fill-[#008A22]" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              {t("Our Services", "Nuestros Servicios")}
              <svg className="w-3 h-3 fill-[#008A22]" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </span>

            {/* Heading */}
            <h2
              className="text-neutral-900 tracking-tight leading-[1.2] font-extrabold"
              style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
            >
              {t("Premium ", "Servicios de ")}
              <span className="text-[#008A22]">{t("Construction", "Construcción")}</span>{" "}
              {t("Services", "Premium")}
            </h2>

            {/* Divider accent */}
            <div className="flex items-center gap-3 mt-5 mb-5">
              <div className="h-[2px] w-10 bg-[#008A22] rounded-full" />
              <div className="h-[2px] w-4 bg-[#008A22]/40 rounded-full" />
            </div>

            <p className="text-slate-500 text-sm md:text-[15px] leading-[28px] font-medium max-w-[95%]">
              {t("One licensed team for all your construction and home remodeling needs. High-quality craftsmanship with guaranteed safety and performance across Denver & Colorado.", "Un equipo autorizado para todas sus necesidades de construcción y remodelación de viviendas. Mano de obra de alta calidad con seguridad y rendimiento garantizados en todo Denver y el Colorado.")}
            </p>

            {/* Trust row */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-bold text-slate-600">
              {[t("Licensed & Insured", "Con Licencia y Seguro"), t("25+ Years Experience", "25+ Años de Experiencia"), t("Free Estimates", "Presupuestos Gratis")].map((itemText) => (
                <span key={itemText} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#008A22]" />
                  {itemText}
                </span>
              ))}
            </div>

            <div className="mt-7">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-[#008A22] hover:bg-[#006e1b] text-white rounded-full px-7 py-3.5 text-[13px] font-black uppercase tracking-wider shadow-[0_10px_25px_-5px_rgba(0,138,34,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
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
