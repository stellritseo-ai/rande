import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, BadgeCheck, FileUp, Phone, ShieldCheck, Star, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-electrician.jpg";
import heroVideo from "@/assets/herovideo.mp4";
import { useLanguage } from "@/hooks/useLanguage";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative isolate min-h-screen overflow-hidden pt-16 md:pt-20 flex items-center">
      {/* Background Video with Image Fallback Poster */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          poster={heroImg}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Horizontal gradient overlay: dark navy on the left for text readability, blending to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D1B]/95 via-[#0B1329]/80 to-slate-950/40" />
      </div>

      {/* Animated blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 h-72 w-72 rounded-full bg-[#FF6B00]/15 blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pb-20 lg:px-8 lg:pt-24 w-full flex justify-start">
        <div className="animate-fade-up text-white flex flex-col items-start text-left max-w-3xl">
          
          {/* State Certified License Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/15 px-4 py-2 text-xs font-bold tracking-wide backdrop-blur-md text-[#FF8533]">
            <ShieldCheck className="h-4 w-4 text-[#FF6B00]" />
            <span>{t("State Certified Electrical Contractor – EC 13008942", "Contratista Eléctrico Certificado Estatal – EC 13008942")}</span>
          </div>

          {/* Main Headline */}
          <h1 className="mt-5 font-display text-[32px] leading-[40px] sm:text-[48px] sm:leading-[55px] font-extrabold tracking-tight">
            {t("Florida Commercial & ", "Contratista de Construcción ")}
            <span className="gradient-text-orange">{t("Electrical Construction", "Eléctrica y Comercial")}</span>{" "}
            {t("Contractor", "en Florida")}
          </h1>

          {/* Core Target Market Positioning Sub-line */}
          <div className="mt-3.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm md:text-[15px] font-extrabold uppercase tracking-wider text-amber-300/90">
            <span>{t("Commercial", "Comercial")}</span>
            <span className="text-[#FF6B00]">•</span>
            <span>{t("Multifamily", "Multifamiliar")}</span>
            <span className="text-[#FF6B00]">•</span>
            <span>{t("Hospitality", "Hotelería")}</span>
            <span className="text-[#FF6B00]">•</span>
            <span>{t("Industrial", "Industrial")}</span>
            <span className="text-[#FF6B00]">•</span>
            <span>{t("New Construction", "Nuevas Construcciones")}</span>
          </div>

          {/* Paragraph copy tailored for GCs, Developers & Estimators */}
          <p className="max-w-2xl mt-4 mb-2 text-white/90 text-[15px] sm:text-[17px] leading-relaxed sm:leading-[28px] font-medium">
            {t(
              "Built for General Contractors, developers, and property estimators. We deliver master-grade electrical engineering, line-item blueprint takeoffs, and dependable on-schedule delivery for major commercial projects, multifamily buildings, hotels, clinics, and new construction across Florida — while maintaining trusted residential services.",
              "Diseñado para Contratistas Generales, desarrolladores y estimadores. Brindamos ingeniería eléctrica de primer nivel, presupuestos detallados sobre planos y cumplimiento puntual para proyectos comerciales, edificios multifamiliares, hoteles, clínicas y nuevas construcciones en Florida — manteniendo servicios residenciales confiables."
            )}
          </p>

          {/* Primary Action Buttons: Submit Plans for Estimate | Request a Bid */}
          <div className="mt-8 flex flex-row flex-wrap items-center gap-3 sm:gap-4">
            <Button asChild variant="hero" size="xl" className="bg-[#FF6B00] hover:bg-[#E05E00] shadow-[0_12px_28px_rgba(255,107,0,0.45)]">
              <Link to="/submit-plans" className="flex items-center gap-2">
                <FileUp className="h-4 w-4" />
                <span>{t("Submit Plans for Estimate", "Presentar Planos para Estimación")}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl" className="border-white/30 hover:bg-white/10">
              <Link to="/contact">
                {t("Request a Bid", "Solicitar una Licitación")}
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10 hidden sm:inline-flex">
              <a href="tel:+17863075933" className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#FF6B00]" /> (786) 307-5933
              </a>
            </Button>
          </div>

          {/* Trust points */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs sm:text-sm text-white/90 font-medium">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4.5 w-4.5 text-[#FF6B00]" /> 
              {t("License EC 13008942", "Licencia EC 13008942")}
            </span>
            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4.5 w-4.5 text-[#FF6B00]" /> 
              {t("Fully Bonded & $2M Insured", "Totalmente Afianzado y $2M en Seguro")}
            </span>
            <span className="inline-flex items-center gap-2">
              <HardHat className="h-4.5 w-4.5 text-[#FF6B00]" /> 
              {t("Fast Plan Takeoffs (24–48h)", "Estimación Rápida de Planos (24–48h)")}
            </span>
            <span className="inline-flex items-center gap-2">
              <Award className="h-4.5 w-4.5 text-[#FF6B00]" /> 
              {t("Statewide Florida Execution", "Ejecución en Toda Florida")}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
