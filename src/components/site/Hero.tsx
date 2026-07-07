import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, BadgeCheck, Phone, ShieldCheck, Star } from "lucide-react";
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/40 to-transparent" />
      </div>

      {/* Animated blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pb-20 lg:px-8 lg:pt-20 w-full flex justify-start">
        <div className="animate-fade-up text-white flex flex-col items-start text-left max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur-md">
            <span className="flex text-amber-400 gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current text-amber-400" />)}
            </span>
            {t("NO JOB IS TOO SMALL OR TOO BIG", "NINGÚN TRABAJO ES DEMASIADO PEQUEÑO O GRANDE")}
          </span>
          <h1 className="mt-6 font-display text-[30px] leading-[40px] sm:text-[40px] sm:leading-[52px] md:text-[50px] md:leading-[65px] font-extrabold tracking-tight">
            {t("Residential General ", "Servicios de Contratista ")}
            <span className="gradient-text-orange">{t("Contractor Services", "General Residencial")}</span>
          </h1>
          <p className="max-w-2xl mt-5 mb-0 text-white text-[15px] sm:text-[17px] leading-relaxed">
            {t("Fully licensed & insured | Proudly serving Colorado with high quality home remodeling, driveway, foundation, and general contractor services.", "Totalmente autorizado y asegurado | Orgullosamente sirviendo al Colorado con remodelación de viviendas de alta calidad, entradas para autos, cimientos y servicios de contratista general.")}
          </p>
          <div className="mt-7 flex flex-row flex-wrap items-center gap-3 sm:gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                {t("Request Quote", "Solicitar Cotización")} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a href="tel:+17202987777">
                <Phone className="h-4 w-4" /> (720) 298-7777
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2.5 text-sm text-white/90 font-medium">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4.5 w-4.5 text-primary" /> {t("Licensed & Insured", "Licencia y Seguro")}</span>
            <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4.5 w-4.5 text-primary" /> {t("25+ Years Experience", "Más de 25 Años de Experiencia")}</span>
            <span className="inline-flex items-center gap-2"><Award className="h-4.5 w-4.5 text-primary" /> {t("Premium Quality Guaranteed", "Calidad Premium Garantizada")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
