import { ArrowRight, FileUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import welcomeImg from "@/assets/welcome-img.png";
import topIcon from "@/assets/topicon.png";
import bottomIcon from "@/assets/buttomicon.png";
import { Counter } from "./Counter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const TinyLightningIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#FF6B00] fill-[#FF6B00] shrink-0" viewBox="0 0 24 24">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const PointingHandIcon = () => (
  <svg className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10h4v8H3z" />
    <path d="M7 10c0-1.5 1.5-2 2.5-2s1.5 1.5 1.5 2.5V12" />
    <path d="M11 10h10a1.5 1.5 0 0 1 0 3H11" />
    <path d="M11 13h8a1.5 1.5 0 0 1 0 3H11" />
    <path d="M11 16h6a1.5 1.5 0 0 1 0 3H11" />
  </svg>
);

export function Welcome() {
  const { t } = useLanguage();

  const checklistPoints = [
    t("New construction and hotel remodeling projects across Florida", "Proyectos de nueva construcción y remodelación de hoteles en Florida"),
    t("Multifamily residential buildings, condos, and high-density developments", "Edificios residenciales multifamiliares, condominios y desarrollos"),
    t("Restaurants, commercial kitchens, retail, and shopping centers", "Restaurantes, cocinas comerciales, comercios y centros comerciales"),
    t("Schools, educational campuses, and institutional facilities", "Escuelas, campus educativos e instalaciones institucionales"),
    t("Dental and medical clinics with specialized healthcare electrical", "Clínicas dentales y médicas con electricidad de grado hospitalario"),
    t("Secondary focus: residential fire alarm, low-voltage, and service upgrades", "Enfoque secundario: alarmas de incendio residencial, bajo voltaje y mejoras"),
  ];

  return (
    <section id="welcome" className="bg-white overflow-hidden py-[60px] border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">

        {/* Main layout: stack on mobile, 3-col on desktop */}
        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.7fr_0.7fr] lg:gap-5 items-center">

          {/* Left Column: Copy & Checklist */}
          <div className="animate-fade-up flex flex-col items-start text-left">
            <div className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-[#0F172A]">
              <TinyLightningIcon /> {t("Florida Commercial Electrical Contractor", "Contratista Eléctrico Comercial de Florida")} <TinyLightningIcon />
            </div>
            
            <h2 className="mt-4 font-display text-[26px] sm:text-[30px] lg:text-[33px] leading-[1.35] font-extrabold text-[#0F172A]">
              {t("Electrical Services for ", "Servicios Eléctricos para ")}<br className="hidden md:inline" />
              <span className="text-[#FF6B00]">{t("General Contractors & Developers", "Contratistas Generales y Desarrolladores")}</span>
            </h2>
            
            <p className="font-medium text-slate-700 mt-[13px] mb-[4px] text-[14px] sm:text-[15px] leading-relaxed sm:leading-[30px]">
              {t(
                "Operating under State Certified License #EC 13008942, R&E Electrical Contractor Corp provides General Contractors, developers, and facility managers with master-level commercial electrical execution. From complex ground-up hospitality builds to multifamily and healthcare clinics, we deliver on time and strictly to code.",
                "Bajo la Licencia Certificada Estatal #EC 13008942, R&E Electrical Contractor Corp ofrece a Contratistas Generales, desarrolladores y administradores de propiedades ejecución eléctrica comercial de primer nivel. Desde obras hoteleras desde cero hasta multifamiliares y clínicas de salud, cumplimos a tiempo y bajo normativa estricta."
              )}
            </p>

            <ul className="mt-5 space-y-3">
              {checklistPoints.map((point) => (
                <li key={point} className="flex items-start gap-3.5 text-slate-800 font-bold text-sm leading-snug">
                  <PointingHandIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button asChild variant="hero" size="lg" className="font-extrabold rounded-full px-7 bg-[#FF6B00] hover:bg-[#E05E00] shadow-[0_10px_25px_-5px_rgba(255,107,0,0.4)]">
                <Link to="/submit-plans" className="flex items-center gap-2">
                  <FileUp className="h-4 w-4" />
                  <span>{t("Submit Plans for Bid", "Presentar Planos para Licitación")}</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6 border-slate-300 text-slate-800 hover:border-[#FF6B00] hover:text-[#FF6B00]">
                <Link to="/about">
                  {t("Read More About R&E", "Conozca Más de R&E")} <span className="ml-1 text-sm font-black">≫</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Middle Column: Lightning Bolt Image – hidden on mobile/tablet */}
          <div
            className="group relative hidden lg:flex justify-center items-center h-[560px] w-full shrink-0 lg:translate-x-[80px] transition-all duration-700 ease-out hover:scale-105 filter drop-shadow-[0_20px_30px_rgba(15,23,42,0.18)] hover:drop-shadow-[0_30px_50px_rgba(255,107,0,0.25)]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FF6B00]/10 blur-3xl -z-10 animate-pulse transition-all duration-1000 ease-out group-hover:scale-125 group-hover:bg-[#FF6B00]/20" />
            <img
              src={welcomeImg}
              alt="Florida licensed commercial electrician and electrical construction contractor"
              className="w-full h-full object-contain object-center animate-welcome-float transition-all duration-700 ease-out group-hover:brightness-105"
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
                  <Counter end={600} suffix="+" />
                </span>
                <span className="text-xs lg:text-sm font-extrabold text-[#0F172A] tracking-tight leading-tight mt-1.5 lg:mt-2.5">
                  {t("Commercial & Multi Projects", "Proyectos Comerciales")}
                </span>
                <span className="text-[10px] lg:text-[11px] font-semibold text-gray-400 mt-0.5 lg:mt-1">
                  {t("Delivered Across Florida", "Entregados en Toda Florida")}
                </span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-4">
              <div className="w-10 h-10 lg:w-14 lg:h-14 shrink-0" />
              <div className="flex flex-col text-left">
                <span className="font-display text-3xl lg:text-5xl font-black text-[#0F172A] leading-none">
                  <Counter end={17} suffix="+" />
                </span>
                <span className="text-xs lg:text-sm font-extrabold text-[#0F172A] tracking-tight leading-tight mt-1.5 lg:mt-2.5">
                  {t("Years In Industry", "Años de Trayectoria")}
                </span>
                <span className="text-[10px] lg:text-[11px] font-semibold text-gray-400 mt-0.5 lg:mt-1">
                  {t("State Certified EC 13008942", "Certificación Estatal EC 13008942")}
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
                  <Counter end={50} suffix="+" />
                </span>
                <span className="text-xs lg:text-sm font-extrabold text-[#0F172A] tracking-tight leading-tight mt-1.5 lg:mt-2.5">
                  {t("Master Electricians & Crew", "Maestros Electricistas")}
                </span>
                <span className="text-[10px] lg:text-[11px] font-semibold text-gray-400 mt-0.5 lg:mt-1">
                  {t("Bonded & Insured Team", "Equipo Afianzado y Asegurado")}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
