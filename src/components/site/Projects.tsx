import { useState, useEffect, useCallback, useMemo } from "react";
import { MapPin, ArrowRight, Zap, Building2, Home, Factory, X, ZoomIn } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/service-commercial.jpg";
import p6 from "@/assets/service-ev.jpg";
import p7 from "@/assets/service-generator.jpg";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "@tanstack/react-router";
import { getGalleryPhotos } from "@/lib/leads-store";

const catIcons = {
  All: Zap,
  Residential: Home,
  Commercial: Building2,
  Industrial: Factory,
};

export function Projects({ isLanding = false }: { isLanding?: boolean }) {
  const { t } = useLanguage();
  const [dbPhotos, setDbPhotos] = useState<any[]>([]);

  useEffect(() => {
    getGalleryPhotos().then(photos => {
      if (Array.isArray(photos) && photos.length > 0) {
        setDbPhotos(photos);
      }
    }).catch(err => {
      console.warn("Failed to load database gallery photos, using static seeds:", err);
    });
  }, []);

  const fallbackAll = [
    {
      img: p1,
      title: t("Luxury Home Lighting System", "Sistema de Iluminación de Lujo para el Hogar"),
      cat: "Residential",
      loc: "Coral Gables, FL",
      year: "2024",
      tag: t("Smart Lighting", "Iluminación Inteligente"),
      featured: true,
    },
    {
      img: p2,
      title: t("Corporate Atrium Installation", "Instalación de Atrio Corporativo"),
      cat: "Commercial",
      loc: "Brickell, FL",
      year: "2024",
      tag: t("Panel Upgrade", "Actualización de Panel"),
      featured: false,
    },
    {
      img: p3,
      title: t("Warehouse High-Bay LED Retrofit", "Actualización LED de Gran Altura para Almacén"),
      cat: "Industrial",
      loc: "Doral, FL",
      year: "2023",
      tag: t("Industrial LED", "LED Industrial"),
      featured: true,
    },
    {
      img: p4,
      title: t("Restaurant Ambient Lighting", "Iluminación Ambiental para Restaurante"),
      cat: "Commercial",
      loc: "Wynwood, FL",
      year: "2024",
      tag: t("Ambient Design", "Diseño de Ambiente"),
      featured: false,
    },
    {
      img: p5,
      title: t("Office Build-Out Wiring", "Cableado de Construcción de Oficinas"),
      cat: "Commercial",
      loc: "Aventura, FL",
      year: "2023",
      tag: t("Full Rewire", "Re-cableado Completo"),
      featured: false,
    },
    {
      img: p6,
      title: t("Fleet EV Charging Station", "Estación de Carga EV para Flota"),
      cat: "Residential",
      loc: "Pinecrest, FL",
      year: "2024",
      tag: t("EV Charger", "Cargador EV"),
      featured: false,
    },
    {
      img: p7,
      title: t("Whole-Home Generator Install", "Instalación de Generador para Todo el Hogar"),
      cat: "Residential",
      loc: "Miami Beach, FL",
      year: "2023",
      tag: t("Generator", "Generador"),
      featured: false,
    },
  ];

  const all = dbPhotos.length > 0 ? dbPhotos.map((photo, index) => {
    const rawCat = photo.category || "residential";
    const cat = rawCat.charAt(0).toUpperCase() + rawCat.slice(1);
    return {
      img: photo.url,
      title: photo.title || `${cat} Electrical Installation`,
      cat,
      loc: photo.location || "Miami, FL",
      year: photo.uploadedAt ? new Date(photo.uploadedAt).getFullYear().toString() : "2024",
      tag: photo.tag || `${cat} Service`,
      featured: index % 3 === 0,
    };
  }) : fallbackAll;

  const catLabels = {
    All: t("All", "Todos"),
    Residential: t("Residential", "Residencial"),
    Commercial: t("Commercial", "Comercial"),
    Industrial: t("Industrial", "Industrial"),
  };

  const dynamicCats = useMemo(() => {
    const categories = new Set<string>();
    categories.add("All");
    all.forEach((p) => {
      if (p.cat) {
        categories.add(p.cat);
      }
    });
    return Array.from(categories);
  }, [all]);

  const [active, setActive] = useState<string>("All");
  const items = active === "All" ? all : all.filter((p) => p.cat === active);
  const displayItems = isLanding ? items.slice(0, 15) : items;

  // Lightbox state
  const [lightbox, setLightbox] = useState<null | (typeof all)[number]>(null);

  const openLightbox = useCallback((p: (typeof all)[number]) => {
    setLightbox(p);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  // ESC key to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeLightbox(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeLightbox]);

  // Cleanup on unmount
  useEffect(() => () => { document.body.style.overflow = ""; }, []);

  return (
    <section id="projects" className="bg-[#F8FAFC] py-[60px] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ──────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF6B00] mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
              {t("Featured Projects", "Proyectos Destacados")}
            </div>

            <h2 
              className="text-slate-900 tracking-tight leading-[1.1]"
              style={{ textTransform: "capitalize", fontWeight: 800, fontSize: "40px", marginTop: "-11px", marginBottom: "8px" }}
            >
              {t("Work we're ", "Trabajo del cual estamos ")}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#E05E00]">
                {t("proud of", "orgullosos")}
              </span>
            </h2>
            <p 
              className="text-slate-500 text-base leading-relaxed"
              style={{ marginBottom: "-25px" }}
            >
              {t("A hand-picked selection of recent electrical installations across Miami & South Florida — residential, commercial, and industrial.", "Una selección cuidadosamente elegida de instalaciones eléctricas recientes en todo Miami y el sur de Florida: residenciales, comerciales e industriales.")}
            </p>
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1e293b] text-white text-xs font-bold uppercase tracking-widest rounded-full px-7 py-4 transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] shrink-0 self-start lg:self-auto"
          >
            {t("Start Your Project", "Iniciar Su Proyecto")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ── Filter Tabs ─────────────────────────────── */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {dynamicCats.map((c) => {
            const Icon = catIcons[c as keyof typeof catIcons] || Zap;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold transition-all duration-200 border cursor-pointer",
                  active === c
                    ? "bg-[#FF6B00] text-white border-[#FF6B00] shadow-[0_4px_14px_rgba(255,107,0,0.3)]"
                    : "bg-white text-slate-600 border-slate-200 hover:border-[#FF6B00] hover:text-[#FF6B00] shadow-sm"
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {catLabels[c as keyof typeof catLabels] || c}
              </button>
            );
          })}
        </div>

        {/* ── Projects Grid ───────────────────────────── */}
        <div className={isLanding ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"}>
          {displayItems.map((p, idx) => (
            <article
              key={idx}
              onClick={() => openLightbox(p)}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-zoom-in",
                isLanding 
                  ? "aspect-[4/3] w-full"
                  : p.featured ? "sm:col-span-1 lg:row-span-2" : ""
              )}
            >
              {/* Image */}
              <div className={cn(
                "overflow-hidden w-full h-full",
                isLanding ? "h-full" : p.featured ? "h-[420px] lg:h-full lg:min-h-[520px]" : "h-[240px] sm:h-[260px]"
              )}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading={idx < 5 ? "eager" : "lazy"}
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Top badges */}
              <div className="absolute top-2.5 left-2.5 right-2.5 flex items-start justify-between gap-1">
                <span className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/10 text-white text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  {p.tag}
                </span>
                {!isLanding && (
                  <span className="bg-[#FF6B00] text-white text-[10px] font-black px-2.5 py-1 rounded-full">
                    {p.year}
                  </span>
                )}
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-3.5">
                {/* Category pill */}
                <span className="inline-flex items-center bg-[#FF6B00] text-white text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full mb-1.5">
                  {catLabels[p.cat as keyof typeof catLabels] || p.cat}
                </span>

                <h3 className={cn(
                  "font-extrabold text-white leading-tight mb-1 truncate",
                  isLanding ? "text-xs sm:text-sm" : "text-base sm:text-lg"
                )}>
                  {p.title}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-white/75 text-[10px] sm:text-xs font-medium truncate">
                    <MapPin className="h-3 w-3 shrink-0" />
                    {p.loc}
                  </div>
                  {!isLanding && (
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ZoomIn className="h-3.5 w-3.5" />
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* ── Lightbox Modal ──────────────────────────────── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)] animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Full image */}
            <div className="relative flex-1 overflow-hidden bg-black">
              <img
                src={lightbox.img}
                alt={lightbox.title}
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>

            {/* Info bar */}
            <div className="bg-white px-6 py-4 flex items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <span className="bg-[#FF6B00] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shrink-0">
                  {catLabels[lightbox.cat as keyof typeof catLabels] || lightbox.cat}
                </span>
                <div className="min-w-0">
                  <p className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight truncate">{lightbox.title}</p>
                  <p className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                    <MapPin className="h-3.5 w-3.5 text-[#FF6B00] shrink-0" />
                    {lightbox.loc}
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-slate-400 shrink-0">{lightbox.year}</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        .animate-zoom-in {
          animation: zoom-in 0.25s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
}
