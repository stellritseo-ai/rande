import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import welcomeImg from "@/assets/welcome-img.png";
import topIcon from "@/assets/topicon.png";
import bottomIcon from "@/assets/buttomicon.png";
import { Counter } from "./Counter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const TinyShieldIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#008A22] fill-[#008A22]/20 shrink-0" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const GreenCheckIcon = () => (
  <svg className="w-5 h-5 text-[#008A22] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export function Welcome() {
  const { t } = useLanguage();

  const checklistPoints = [
    t("Residential remodeling and custom home improvements", "Remodelación residencial y mejoras personalizadas para el hogar"),
    t("Paver driveways, concrete sidewalks and pathway pouring", "Entradas de adoquines, aceras de concreto y vertido de caminos"),
    t("Full structural concrete foundations and retaining slabs", "Cimientos de concreto estructural completos y losas de retención"),
    t("Service Area: Serving Denver-Dade, Lakewood, and Colorado", "Área de Servicio: Sirviendo a Denver-Dade, Lakewood y el Sur de Colorado"),
  ];

  return (
    <section id="welcome" className="bg-white overflow-hidden py-[60px] border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">

        {/* Main layout: stack on mobile, 3-col on desktop */}
        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.7fr_0.7fr] lg:gap-5 items-center">

          {/* Left Column: Copy & Checklist */}
          <div className="animate-fade-up flex flex-col items-start text-left">
            <div className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-[#0F172A]">
              <TinyShieldIcon /> {t("About Us", "Sobre Nosotros")} <TinyShieldIcon />
            </div>
            <h2 className="mt-4 font-display text-[26px] sm:text-[30px] lg:text-[33px] leading-[1.35] font-extrabold text-[#0F172A]">
              {t("Best General Contractor In", "La Mejor Compañía de Contratista General en")}<br className="hidden md:inline" /> {t("Denver. Residential & Commercial ", "Denver. Servicio Residencial y Comercial de ")}
              <span className="text-[#008A22]">{t("Construction", "Construcción")}</span>
            </h2>
            <p className="font-medium text-black mt-[13px] mb-[-15px] text-[14px] sm:text-[15px] leading-relaxed sm:leading-[32px]">
              {t("ACC Construction LLC is a premier general contractor serving Colorado. We are dedicated to providing the highest quality construction, remodeling, and home improvement services. With over 25 years of experience, we have built a reputation for excellence, integrity, and reliable craftsmanship. No matter the scale of your project, our team is equipped to deliver exceptional results from design to completion.", "ACC Construction LLC es un contratista general de primer nivel que sirve al Colorado. Nos dedicamos a brindar servicios de construcción, remodelación y mejoras para el hogar de la más alta calidad. Con más de 25 años de experiencia, hemos construido una reputación de excelencia, integridad y mano de obra confiable. No importa la escala de su proyecto, nuestro equipo está equipado para brindar resultados excepcionales desde el diseño hasta la finalización.")}
            </p>

            <ul className="mt-6 space-y-4">
              {checklistPoints.map((point) => (
                <li key={point} className="flex items-start gap-3.5 text-slate-800 font-bold text-sm leading-snug">
                  <GreenCheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <Button asChild variant="hero" size="lg" className="mt-8 font-extrabold rounded-full px-8 bg-[#008A22] hover:bg-[#006e1b] shadow-[0_10px_25px_-5px_rgba(0,138,34,0.4)]">
              <Link to="/about">
                {t("Read More", "Leer Más")} <span className="ml-1 text-sm font-black">≫</span>
              </Link>
            </Button>
          </div>

          {/* Middle Column: Square Image Frame – hidden on mobile/tablet */}
          <div
            className="group relative hidden lg:flex justify-center items-center w-[320px] h-[320px] aspect-square shrink-0 lg:translate-x-[30px] transition-all duration-700 ease-out hover:scale-105 hover:drop-shadow-[0_30px_50px_rgba(0,138,34,0.25)]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#008A22]/10 blur-3xl -z-10 animate-pulse transition-all duration-1000 ease-out group-hover:scale-125 group-hover:bg-[#008A22]/20" />
            <img
              src={welcomeImg}
              alt="Professional builder working on home framing"
              className="w-full h-full object-cover object-center animate-welcome-float transition-all duration-700 ease-out group-hover:brightness-105"
            />
          </div>

          {/* Right Column: Statistics – horizontal row on mobile, vertical column on desktop */}
          <div className="animate-fade-up grid grid-cols-3 gap-4 lg:flex lg:flex-col lg:gap-12 text-left lg:justify-self-end w-full lg:w-fit">
            {/* Stat 1 */}
            <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-4">
              <div className="w-10 h-10 lg:w-14 lg:h-14 shrink-0 flex items-center justify-center">
                <img src={topIcon} alt="Successful Projects Icon" className="w-10 h-10 lg:w-14 lg:h-14 object-contain" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display text-3xl lg:text-5xl font-black text-[#0F172A] leading-none">
                  <Counter end={5000} suffix="+" />
                </span>
                <span className="text-xs lg:text-sm font-extrabold text-[#0F172A] tracking-tight leading-tight mt-1.5 lg:mt-2.5">
                  {t("Projects Completed", "Proyectos Completados")}
                </span>
                <span className="text-[10px] lg:text-[11px] font-semibold text-gray-400 mt-0.5 lg:mt-1">
                  {t("Successful Builds Done", "Obras Exitosas Realizadas")}
                </span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-4">
              <div className="w-10 h-10 lg:w-14 lg:h-14 shrink-0" />
              <div className="flex flex-col text-left">
                <span className="font-display text-3xl lg:text-5xl font-black text-[#0F172A] leading-none">
                  <Counter end={25} suffix="+" />
                </span>
                <span className="text-xs lg:text-sm font-extrabold text-[#0F172A] tracking-tight leading-tight mt-1.5 lg:mt-2.5">
                  {t("Years Of Experience", "Años de Experiencia")}
                </span>
                <span className="text-[10px] lg:text-[11px] font-semibold text-gray-400 mt-0.5 lg:mt-1">
                  {t("Quality Construction Services", "Servicios de Construcción de Calidad")}
                </span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-4">
              <div className="w-10 h-10 lg:w-14 lg:h-14 shrink-0 flex items-center justify-center">
                <img src={bottomIcon} alt="Experienced Staff Icon" className="w-10 h-10 lg:w-14 lg:h-14 object-contain" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display text-3xl lg:text-5xl font-black text-[#0F172A] leading-none">
                  <Counter end={13} suffix="+" />
                </span>
                <span className="text-xs lg:text-sm font-extrabold text-[#0F172A] tracking-tight leading-tight mt-1.5 lg:mt-2.5">
                  {t("Expert Workers", "Trabajadores Expertos")}
                </span>
                <span className="text-[10px] lg:text-[11px] font-semibold text-gray-400 mt-0.5 lg:mt-1">
                  {t("Professional Builders", "Constructores Profesionales")}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
