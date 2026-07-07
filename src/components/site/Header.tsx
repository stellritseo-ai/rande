import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Menu, Phone, X, Mail, MapPin, Facebook, Instagram, Clock,
  ChevronDown, Home, Building2, Factory, Zap, BatteryCharging,
  ShieldAlert, Cable, Shield, AlertTriangle, Video, Wrench, Layers, Hammer, HardHat
} from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo.png";
import { useLanguage } from "@/hooks/useLanguage";

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { to: "/", label: t("Home", "Inicio") },
    { to: "/about", label: t("About Us", "Sobre Nosotros") },
    { to: "/services", label: t("Services", "Servicios") },
    { to: "/projects", label: t("Projects", "Proyectos") },
    { to: "/reviews", label: t("Reviews", "Opiniones") },
    { to: "/contact", label: t("Free Estimate", "Presupuesto Gratis") },
    { to: "/contact", label: t("Contact Us", "Contáctenos") },
  ];

  const serviceLinks = [
    { to: "/services/driveway", l: t("Driveways", "Entradas de Autos"), desc: t("Custom driveway designs & paving slabs", "Diseños de entradas personalizados y losas"), icon: Layers },
    { to: "/services/patios", l: t("Patios", "Patios"), desc: t("Premium stone and paver brick patios", "Patios premium de adoquines y piedra"), icon: Hammer },
    { to: "/services/sidewalk", l: t("Sidewalks", "Aceras"), desc: t("Concrete walkways, pathways and curbs", "Aceras y caminos de concreto"), icon: Cable },
    { to: "/services/remodeling", l: t("Remodeling", "Remodelación"), desc: t("Kitchens, bathrooms, and interior renovations", "Cocinas, baños y renovaciones interiores"), icon: Hammer },
    { to: "/services/interior-exterior", l: t("Interior/Exterior", "Interior/Exterior"), desc: t("Drywall repairs, siding, and painting work", "Reparaciones de paneles de yeso, revestimiento y pintura"), icon: Wrench },
    { to: "/services/home-additions", l: t("Additions", "Adiciones"), desc: t("Home extensions and guest house construction", "Extensiones de casas y adiciones"), icon: Home },
    { to: "/services/home-improvements", l: t("Home Improvements", "Mejoras para el Hogar"), desc: t("Handyman, general repairs & carpentry", "Reparaciones generales y carpintería"), icon: Wrench },
    { to: "/services/foundation", l: t("Foundations", "Cimientos"), desc: t("Concrete foundations and structural slabs", "Cimientos de concreto y losas estructurales"), icon: Building2 },
    { to: "/services/decks", l: t("Decks", "Terrazas de Madera"), desc: t("Wood and composite deck installations", "Instalaciones de terrazas de madera y compuesto"), icon: HardHat },
    { to: "/services/fencing", l: t("Fencing", "Cercas"), desc: t("Wood, vinyl, and aluminum boundary fences", "Cercas de madera, vinilo y aluminio"), icon: Factory },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full bg-transparent pointer-events-none">

      {/* ── TOP BAR ──────────────────────────────────────────── */}
      <div
        className={cn(
          "w-full bg-[#F8F9FA] border-b border-gray-200/80 px-4 sm:px-6 lg:px-8 pointer-events-auto transition-all duration-300 origin-top overflow-hidden",
          scrolled ? "max-h-0 py-0 opacity-0 border-none" : "max-h-20 py-2 opacity-100"
        )}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-1.5 text-[#1E293B] min-w-0">
            <Clock className="h-3.5 w-3.5 text-[#008A22] shrink-0" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider leading-tight truncate">
              <span className="hidden sm:inline">{t("AVAILABLE FOR YOUR PROJECTS | MON–SAT, 7AM–7PM", "DISPONIBLE PARA SUS PROYECTOS | LUN–SÁB, 7AM–7PM")}</span>
              <span className="inline sm:hidden">{t("ACC CONSTRUCTION LLC", "ACC CONSTRUCTION LLC")}</span>
            </span>
          </div>
          {/* Right: Language */}
          <div className="flex items-center gap-3 text-[10px] sm:text-xs shrink-0">
            <button
              onClick={() => setLanguage("en")}
              className={cn(
                "flex items-center gap-1 transition font-bold cursor-pointer select-none",
                language === "en" ? "text-[#1E293B]" : "text-gray-400 hover:text-[#008A22]"
              )}
            >
              <span className="text-sm leading-none">🇬🇧</span>
              <span className="hidden sm:inline">English</span>
            </button>
            <button
              onClick={() => setLanguage("es")}
              className={cn(
                "flex items-center gap-1 transition font-bold cursor-pointer select-none",
                language === "es" ? "text-[#1E293B]" : "text-gray-400 hover:text-[#008A22]"
              )}
            >
              <span className="text-sm leading-none">🇪🇸</span>
              <span className="hidden sm:inline">Spanish</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── MIDDLE BAR (desktop only) ────────────────────────── */}
      <div
        className={cn(
          "w-full bg-white px-4 sm:px-6 lg:px-8 border-b border-gray-100 pointer-events-auto transition-all duration-300 origin-top overflow-hidden hidden md:block",
          scrolled ? "max-h-0 py-0 opacity-0 border-none" : "max-h-28 py-3 opacity-100"
        )}
      >
        <div className="mx-auto max-w-7xl flex justify-between items-center w-full gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={logoImg} alt="ACC Construction LLC Logo" className="h-16 lg:h-20 w-auto object-contain" />
          </Link>

          {/* Contact cards */}
          <div className="flex items-center gap-4 lg:gap-8 ml-auto">
            {/* Email */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#008A22] flex items-center justify-center text-white shrink-0 shadow-md">
                <Mail className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email</span>
                <a
                  href="mailto:leonholley45@gmail.com"
                  className="text-[13px] font-bold text-[#1E293B] hover:text-[#008A22] transition truncate max-w-[220px]"
                >
                  leonholley45@gmail.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#008A22] flex items-center justify-center text-white shrink-0 shadow-md">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Address</span>
                <span className="text-[13px] font-bold text-[#1E293B] leading-tight">
                  Wheat Ridge, Colorado
                </span>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2 shrink-0">
            <a href="https://www.facebook.com/accconstructionllc" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-[#008A22] hover:border-[#008A22] transition">
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a href="https://www.instagram.com/accconstructionllc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-[#008A22] hover:border-[#008A22] transition">
              <Instagram className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV BAR ─────────────────────────────────────── */}
      <div
        className={cn(
          "w-full transition-all duration-300 px-3 sm:px-4 lg:px-8 pointer-events-auto",
          scrolled
            ? "py-2 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
            : "py-3 bg-transparent md:bg-[linear-gradient(to_bottom,#ffffff_50%,transparent_50%)] md:absolute md:top-full md:left-0 md:z-40"
        )}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between w-full gap-3">

          {/* ── MOBILE: Logo + Hamburger ─────────────────────── */}
          <div className="flex items-center justify-between w-full md:hidden bg-white/90 backdrop-blur-md rounded-2xl px-3 py-2 shadow-sm border border-gray-100">
            <Link to="/" className="flex items-center shrink-0">
              <img src={logoImg} alt="ACC Construction LLC Logo" className="h-11 w-auto object-contain" />
            </Link>
            {/* Right: Phone shortcut + hamburger */}
            <div className="flex items-center gap-2">
              <a
                href="tel:+17202987777"
                className="flex items-center gap-1.5 bg-[#008A22] text-white text-[11px] font-black rounded-full px-3 py-1.5 shadow-sm"
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="hidden xs:inline">(720) 298-7777</span>
                <span className="inline xs:hidden">Call</span>
              </a>
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="grid h-9 w-9 place-items-center rounded-xl border border-gray-200 bg-white text-[#1E293B] transition hover:border-[#008A22]"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* ── DESKTOP: Pill Nav + Call Button ──────────────── */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-3 w-full justify-between">
            {/* Navigation pill */}
            <nav
              className={cn(
                "rounded-full px-6 lg:px-10 py-2.5 flex items-center gap-1 lg:gap-3 shadow-sm border transition-colors",
                scrolled
                  ? "bg-[#F1F3F5] border-gray-200/60"
                  : "bg-white/90 backdrop-blur-md border-white/40"
              )}
            >
              {navItems.map((item) => {
                const active = pathname === item.to;

                if (item.to === "/services") {
                  return (
                    <div key={item.to} className="relative group/nav">
                      <Link
                        to={item.to}
                        className={cn(
                          "relative inline-flex items-center gap-1.5 rounded-full px-2.5 lg:px-3.5 py-2 text-[10px] lg:text-xs xl:text-[13px] font-bold uppercase tracking-wider transition-all select-none cursor-pointer",
                          active ? "text-[#008A22]" : "text-[#1E293B] hover:text-[#008A22]"
                        )}
                      >
                        {t("Services", "Servicios")} <ChevronDown className="h-3 w-3" />
                      </Link>
                      {/* Dropdown — pt-2 creates a transparent bridge so hover stays active */}
                      <div className="absolute left-0 top-full z-50 pt-2 opacity-0 invisible pointer-events-none group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:pointer-events-auto transition-all duration-200">
                        <div className="w-[580px] max-w-[90vw] bg-white border border-gray-100 rounded-3xl shadow-[0_20px_50px_-12px_rgba(15,23,42,0.14)] p-5 flex flex-col gap-3">
                          <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t("Our Construction Services", "Nuestros Servicios de Construcción")}</span>
                            <Link to="/services" className="text-[10px] font-black uppercase text-[#008A22] tracking-wider hover:underline">{t("View All →", "Ver Todos →")}</Link>
                          </div>
                          <div className="grid grid-cols-2 gap-1.5">
                            {serviceLinks.map((srv) => (
                              <Link
                                key={srv.to}
                                to={srv.to}
                                className="group/item flex items-center gap-3 rounded-xl p-2.5 hover:bg-gray-50 transition-colors duration-200"
                              >
                                <div className="w-9 h-9 rounded-xl bg-gray-50 group-hover/item:bg-[#008A22]/10 flex items-center justify-center text-gray-500 group-hover/item:text-[#008A22] transition-colors shrink-0">
                                  <srv.icon className="h-4.5 w-4.5" />
                                </div>
                                <div className="flex flex-col text-left">
                                  <span className="text-[13px] font-extrabold text-gray-900 group-hover/item:text-[#008A22] transition-colors leading-snug">{srv.l}</span>
                                  <span className="text-[11px] text-gray-500 leading-normal mt-0.5 line-clamp-1">{srv.desc}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                          {/* Emergency CTA */}
                          <div className="bg-[#008A22]/5 border border-[#008A22]/10 rounded-xl p-2.5 flex justify-between items-center gap-3">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-lg bg-[#008A22] flex items-center justify-center text-white shrink-0">
                                <HardHat className="h-4 w-4 animate-pulse" />
                              </div>
                              <div className="flex flex-col text-left">
                                <span className="text-[11px] font-bold text-gray-900">{t("Need a General Contractor?", "¿Necesita un Contratista General?")}</span>
                                <span className="text-[10px] text-gray-500">{t("Licensed & Insured", "Con Licencia y Seguro")}</span>
                              </div>
                            </div>
                            <Link
                              to="/contact"
                              className="bg-white border border-gray-200 hover:border-[#008A22] hover:text-[#008A22] text-gray-800 text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition whitespace-nowrap"
                            >
                              {t("Get Quote", "Cotizar")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                const isEstimateActive = active && item.to !== "/contact";
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={cn(
                      "rounded-full px-2.5 lg:px-3.5 py-2 text-[10px] lg:text-xs xl:text-[13px] font-bold uppercase tracking-wider transition-colors whitespace-nowrap",
                      isEstimateActive ? "text-[#008A22]" : "text-[#1E293B] hover:text-[#008A22]"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Call Now button */}
            <a
              href="tel:+17202987777"
              className="bg-[#008A22] hover:bg-[#006e1b] text-white flex items-center gap-2 lg:gap-3 shadow-[0_8px_20px_-6px_rgba(0,138,34,0.6)] transition duration-300 shrink-0 px-3 lg:px-5 py-2 lg:py-2.5"
              style={{ borderRadius: "50px 0px 50px 50px" }}
            >
              <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/20 shrink-0">
                <Phone className="h-3.5 w-3.5 lg:h-4 lg:w-4 fill-white text-white" />
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-[8px] lg:text-[9px] font-black uppercase tracking-wider text-white/90">{t("Call Us Now", "Llámenos Ahora")}</span>
                <span className="text-xs lg:text-sm xl:text-base font-extrabold text-white mt-0.5">(720) 298-7777</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ── MOBILE DRAWER ────────────────────────────────────── */}
      <div
        className={cn(
          "md:hidden overflow-y-auto transition-[max-height,opacity] duration-300 bg-white pointer-events-auto shadow-xl",
          open ? "max-h-[calc(100vh-80px)] opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {/* Nav links */}
          <nav className="flex flex-col gap-0.5">
            {navItems.map((item) => {
              const active = pathname === item.to;

              if (item.to === "/services") {
                return (
                  <div key="services-mobile">
                    <button
                      onClick={() => setServicesOpen((v) => !v)}
                      className="w-full flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-wider text-[#1E293B] hover:bg-gray-50 transition"
                    >
                      {t("Services", "Servicios")}
                      <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
                    </button>
                    {servicesOpen && (
                      <div className="ml-4 mt-1 mb-1 flex flex-col gap-0.5 border-l-2 border-[#008A22]/20 pl-3">
                        {serviceLinks.map((srv) => (
                          <Link
                            key={srv.to}
                            to={srv.to}
                            className="flex items-center gap-2 py-2 text-sm font-semibold text-slate-700 hover:text-[#008A22] transition"
                          >
                            <srv.icon className="h-3.5 w-3.5 text-[#008A22] shrink-0" />
                            {srv.l}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors",
                    active && item.to !== "/contact"
                      ? "bg-[#008A22]/10 text-[#008A22]"
                      : "text-[#1E293B] hover:bg-gray-50"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Contact info */}
          <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
            <a
              href="tel:+17202987777"
              className="flex items-center justify-center gap-2.5 rounded-full bg-[#008A22] hover:bg-[#006e1b] text-white py-3 text-sm font-black shadow-md transition"
            >
              <Phone className="h-4 w-4" /> (720) 298-7777
            </a>
            <div className="flex flex-col gap-2 text-xs text-gray-500 font-semibold px-1">
              <a href="mailto:leonholley45@gmail.com" className="flex items-start gap-2 hover:text-[#008A22] transition">
                <Mail className="h-4 w-4 text-[#008A22] shrink-0 mt-0.5" />
                <span className="break-all">leonholley45@gmail.com</span>
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#008A22] shrink-0" />
                Wheat Ridge, Colorado
              </span>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
}
