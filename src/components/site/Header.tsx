import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Menu, Phone, X, Mail, MapPin, Facebook, Instagram, Clock,
  ChevronDown, Home, Building2, Factory, Zap, BatteryCharging,
  ShieldAlert, Cable, Shield, AlertTriangle, Video, FileUp, Hotel, Activity, Utensils
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
    { to: "/service-areas", label: t("Service Areas", "Áreas de Servicio") },
    { to: "/projects", label: t("Projects", "Proyectos") },
    { to: "/reviews", label: t("Reviews", "Opiniones") },
    { to: "/careers", label: t("Careers", "Carreras") },
    { to: "/contact", label: t("Contact Us", "Contáctenos") },
  ];

  const serviceLinks = [
    { to: "/services/commercial", l: t("Commercial Electrical", "Electricidad Comercial"), desc: t("Multifamily, hospitality, retail & 3-phase power", "Multifamiliar, hotelería, comercio y energía trifásica"), icon: Building2 },
    { to: "/services/new-construction-electrical", l: t("New Construction Electrical", "Nuevas Construcciones"), desc: t("Ground-up blueprints, rough-ins & inspection sign-offs", "Planos desde cero, cableado inicial y autorizaciones"), icon: Building2 },
    { to: "/services/fire-alarm", l: t("Fire Alarm & Low-Voltage", "Alarmas contra Incendios y Bajo Voltaje"), desc: t("Safety-certified design, code compliance & conduit", "Diseño certificado, cumplimiento de código y conductos"), icon: ShieldAlert },
    { to: "/services/industrial", l: t("Industrial Electrical", "Electricidad Industrial"), desc: t("Heavy machinery, high-voltage transformers & MCC controls", "Maquinaria pesada, transformadores y controles MCC"), icon: Factory },
    { to: "/services/panel-upgrades", l: t("Panel & Switchboard Upgrades", "Actualizaciones de Tableros"), desc: t("Modernize main switchgear & breaker capacity (200A–2000A)", "Modernice tableros principales y capacidad (200A–2000A)"), icon: Zap },
    { to: "/services/ev-charger", l: t("EV Charger Stations", "Estaciones de Carga EV"), desc: t("Commercial fleet & multifamily Level 2 charging ports", "Puertos de carga de Nivel 2 para flotas y multifamiliares"), icon: BatteryCharging },
    { to: "/services/generator", l: t("Generator Installation", "Instalación de Generadores"), desc: t("Commercial standby backup power & transfer switches", "Energía de respaldo comercial y transferencias automáticas"), icon: AlertTriangle },
    { to: "/services/residential", l: t("Residential Electrical", "Electricidad Residencial"), desc: t("Expert home wiring, custom lighting & safety diagnostics", "Cableado residencial experto, iluminación y seguridad"), icon: Home },
    { to: "/services/cctv-camera", l: t("CCTV & Security Networks", "Cámaras CCTV y Redes de Seguridad"), desc: t("4K IP surveillance, NVR setups & remote monitoring", "Vigilancia IP 4K, NVR y monitoreo remoto"), icon: Video },
    { to: "/services/wiring-rewiring", l: t("Wiring & Rewiring", "Cableado y Re-cableado"), desc: t("Copper structural rewiring & aluminum mitigation", "Recableado estructural de cobre y mitigación de aluminio"), icon: Cable },
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
          "w-full bg-[#0F172A] border-b border-slate-800 text-white px-4 sm:px-6 lg:px-8 pointer-events-auto transition-all duration-300 origin-top overflow-hidden",
          scrolled ? "max-h-0 py-0 opacity-0 border-none" : "max-h-20 py-2 opacity-100"
        )}
      >
        <div className="mx-auto max-w-7xl flex flex-row justify-between items-center w-full gap-2">
          {/* Left: License & Credential */}
          <div className="flex items-center gap-2 text-white min-w-0">
            <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-[#FF6B00] text-white rounded px-2 py-0.5">
              EC 13008942
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider leading-tight truncate text-slate-300">
              <span className="hidden md:inline">{t("STATE CERTIFIED COMMERCIAL & ELECTRICAL CONSTRUCTION CONTRACTOR · FLORIDA", "CONTRATISTA DE CONSTRUCCIÓN ELÉCTRICA Y COMERCIAL CERTIFICADO · FLORIDA")}</span>
              <span className="inline md:hidden">{t("STATE CERTIFIED CONTRACTOR · EC 13008942", "CONTRATISTA CERTIFICADO · EC 13008942")}</span>
            </span>
          </div>

          {/* Right: Hours & Language */}
          <div className="flex items-center gap-4 text-[10px] sm:text-xs shrink-0 text-slate-300">
            <div className="hidden sm:flex items-center gap-1.5">
              <Clock className="h-3 w-3 text-[#FF6B00] shrink-0" />
              <span className="font-semibold text-[10px]">{t("24/7 Rapid Emergency Dispatch", "Despacho de Emergencia 24/7")}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "flex items-center gap-1 transition font-bold cursor-pointer select-none",
                  language === "en" ? "text-[#FF8533]" : "text-slate-400 hover:text-white"
                )}
              >
                <span className="text-sm leading-none">🇬🇧</span>
                <span className="hidden sm:inline">English</span>
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={cn(
                  "flex items-center gap-1 transition font-bold cursor-pointer select-none",
                  language === "es" ? "text-[#FF8533]" : "text-slate-400 hover:text-white"
                )}
              >
                <span className="text-sm leading-none">🇪🇸</span>
                <span className="hidden sm:inline">Spanish</span>
              </button>
            </div>
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
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logoImg} alt="R&E Electrical Contractor Corp Logo" className="h-12 lg:h-14 w-auto object-contain" />
            <div className="hidden lg:flex flex-col text-left border-l border-slate-200 pl-3">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">{t("State Certified Electrical Contractor", "Contratista Eléctrico Certificado")}</span>
              <span className="text-[12px] font-extrabold text-[#0F172A] tracking-tight">License #EC 13008942</span>
            </div>
          </Link>

          {/* Contact cards */}
          <div className="flex items-center gap-4 lg:gap-8 ml-auto">
            {/* Email */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FF6B00] flex items-center justify-center text-white shrink-0 shadow-md">
                <Mail className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t("Commercial Estimating", "Estimación Comercial")}</span>
                <a
                  href="mailto:Williams@electricalcontractorcorp.com"
                  className="text-[13px] font-bold text-[#1E293B] hover:text-[#FF6B00] transition truncate max-w-[220px]"
                >
                  Williams@electricalcontractorcorp.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FF6B00] flex items-center justify-center text-white shrink-0 shadow-md">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t("Headquarters", "Sede Central")}</span>
                <span className="text-[13px] font-bold text-[#1E293B] leading-tight">
                  18730 NW 77 TH CT, Hialeah FL
                </span>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2 shrink-0">
            <a href="https://www.facebook.com/electricalcontractorcrop" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-[#FF6B00] hover:border-[#FF6B00] transition">
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a href="https://www.instagram.com/randeelectricalcontractorcrop/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-[#FF6B00] hover:border-[#FF6B00] transition">
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
          <div className="flex items-center justify-between w-full md:hidden bg-white/95 backdrop-blur-md rounded-2xl px-3 py-2 shadow-sm border border-gray-100">
            <Link to="/" className="flex items-center shrink-0">
              <img src={logoImg} alt="R&E Electrical Contractor Corp Logo" className="h-9 w-auto object-contain" />
            </Link>
            
            {/* Right: Submit Plans + Phone + hamburger */}
            <div className="flex items-center gap-2">
              <Link
                to="/submit-plans"
                className="flex items-center gap-1 bg-[#0F172A] text-white text-[10px] font-black uppercase rounded-full px-2.5 py-1.5 shadow-sm"
              >
                <FileUp className="h-3 w-3 text-[#FF6B00]" />
                <span>Plans</span>
              </Link>
              <a
                href="tel:+17863075933"
                className="flex items-center gap-1 bg-[#FF6B00] text-white text-[10px] font-black rounded-full px-2.5 py-1.5 shadow-sm"
              >
                <Phone className="h-3 w-3" />
                <span>Call</span>
              </a>
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="grid h-8 w-8 place-items-center rounded-xl border border-gray-200 bg-white text-[#1E293B] transition hover:border-[#FF6B00]"
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* ── DESKTOP: Pill Nav + GC Plan Button + Call Button ──────────────── */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 w-full justify-between">
            {/* Navigation pill */}
            <nav
              className={cn(
                "rounded-full px-3 lg:px-5 py-2 flex items-center gap-0.5 lg:gap-1.5 shadow-sm border transition-colors",
                scrolled
                  ? "bg-[#F1F3F5] border-gray-200/60"
                  : "bg-white/90 backdrop-blur-md border-white/40"
              )}
            >
              {navItems.map((item) => {
                const active = pathname === item.to;

                if (item.to === "/services") {
                  return (
                    <div key={item.label} className="relative group/nav">
                      <Link
                        to="/services"
                        className={cn(
                          "flex items-center gap-1 rounded-full px-2.5 lg:px-3 py-1.5 text-[10px] lg:text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap",
                          active ? "text-[#FF6B00]" : "text-[#1E293B] hover:text-[#FF6B00]"
                        )}
                      >
                        {t("Services", "Servicios")} <ChevronDown className="h-3 w-3" />
                      </Link>
                      {/* Dropdown */}
                      <div className="absolute left-0 top-full z-50 pt-2 opacity-0 invisible pointer-events-none group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:pointer-events-auto transition-all duration-200">
                        <div className="w-[580px] max-w-[90vw] bg-white border border-gray-100 rounded-3xl shadow-[0_20px_50px_-12px_rgba(15,23,42,0.14)] p-5 flex flex-col gap-3">
                          <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t("Commercial & Construction Services", "Servicios Comerciales y Construcción")}</span>
                            <Link to="/services" className="text-[10px] font-black uppercase text-[#FF6B00] tracking-wider hover:underline">{t("View All →", "Ver Todos →")}</Link>
                          </div>
                          <div className="grid grid-cols-2 gap-1.5">
                            {serviceLinks.map((srv) => (
                              <Link
                                key={srv.to}
                                to={srv.to}
                                className="group/item flex items-start gap-2.5 rounded-xl p-2 hover:bg-gray-50 transition-colors duration-200"
                              >
                                <div className="w-8 h-8 rounded-lg bg-gray-50 group-hover/item:bg-[#FF6B00]/10 flex items-center justify-center text-gray-500 group-hover/item:text-[#FF6B00] transition-colors shrink-0">
                                  <srv.icon className="h-4 w-4" />
                                </div>
                                <div className="flex flex-col text-left">
                                  <span className="text-[11px] font-bold text-gray-900 group-hover/item:text-[#FF6B00] transition-colors leading-tight">{srv.l}</span>
                                  <span className="text-[10px] text-gray-500 leading-tight mt-0.5 line-clamp-1">{srv.desc}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                          {/* GC Callout inside menu */}
                          <div className="bg-[#0F172A] text-white rounded-xl p-3 flex justify-between items-center gap-3">
                            <div className="flex items-center gap-2">
                              <FileUp className="h-4 w-4 text-[#FF6B00]" />
                              <div className="flex flex-col text-left">
                                <span className="text-[11px] font-bold">{t("General Contractors & Developers", "Contratistas Generales y Desarrolladores")}</span>
                                <span className="text-[10px] text-slate-300">{t("Submit PDF plans for 24-hr line-item takeoff", "Envíe planos PDF para presupuesto detallado")}</span>
                              </div>
                            </div>
                            <Link
                              to="/submit-plans"
                              className="bg-[#FF6B00] hover:bg-[#E05E00] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition whitespace-nowrap"
                            >
                              {t("Submit Plans", "Enviar Planos")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={cn(
                      "rounded-full px-2.5 lg:px-3 py-1.5 text-[10px] lg:text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap",
                      active ? "text-[#FF6B00]" : "text-[#1E293B] hover:text-[#FF6B00]"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons: SUBMIT PLANS FOR BID + Call Us Now */}
            <div className="flex items-center gap-2 shrink-0">
              <Link
                to="/submit-plans"
                className="bg-[#0F172A] hover:bg-[#1E293B] text-white flex items-center gap-1.5 rounded-full px-3.5 lg:px-4 py-2 text-[10px] lg:text-xs font-black uppercase tracking-wider shadow-sm transition hover:scale-[1.02] border border-white/20"
              >
                <FileUp className="h-3.5 w-3.5 text-[#FF6B00]" />
                <span className="whitespace-nowrap">{t("Submit Plans for Bid", "Presentar Planos")}</span>
              </Link>

              {/* Call Now button */}
              <a
                href="tel:+17863075933"
                className="bg-[#FF6B00] hover:bg-[#E05E00] text-white flex items-center gap-2 shadow-[0_8px_20px_-6px_rgba(255,107,0,0.6)] transition duration-300 shrink-0 px-3 lg:px-4 py-2"
                style={{ borderRadius: "50px 0px 50px 50px" }}
              >
                <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-white/20 flex items-center justify-center border border-white/20 shrink-0">
                  <Phone className="h-3 w-3 lg:h-3.5 lg:w-3.5 fill-white text-white" />
                </div>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[8px] font-black uppercase tracking-wider text-white/90">{t("Call Direct", "Llamar")}</span>
                  <span className="text-xs lg:text-sm font-extrabold text-white mt-0.5">(786) 307-5933</span>
                </div>
              </a>
            </div>

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
          
          {/* Prominent Submit Plans for GC in mobile */}
          <div className="bg-[#0F172A] rounded-2xl p-4 text-white text-left">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#FF8533]">
              {t("For General Contractors & Developers", "Para Contratistas y Desarrolladores")}
            </span>
            <h4 className="text-base font-extrabold mt-1">
              {t("Have Construction Plans?", "¿Tiene Planos de Construcción?")}
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              {t("Submit PDF blueprints for competitive line-item bids.", "Envíe planos en PDF para presupuestos competitivos.")}
            </p>
            <Link
              to="/submit-plans"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 w-full bg-[#FF6B00] text-white text-xs font-black uppercase tracking-wider py-2.5 rounded-xl shadow-md"
            >
              <FileUp className="h-3.5 w-3.5" />
              <span>{t("SUBMIT PLANS FOR BID", "PRESENTAR PLANOS")}</span>
            </Link>
          </div>

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
                      <div className="ml-4 mt-1 mb-1 flex flex-col gap-0.5 border-l-2 border-[#FF6B00]/20 pl-3">
                        {serviceLinks.map((srv) => (
                          <Link
                            key={srv.to}
                            to={srv.to}
                            className="flex items-center gap-2 py-2 text-sm font-semibold text-slate-700 hover:text-[#FF6B00] transition"
                          >
                            <srv.icon className="h-3.5 w-3.5 text-[#FF6B00] shrink-0" />
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
                    active
                      ? "bg-[#FF6B00]/10 text-[#FF6B00]"
                      : "text-[#1E293B] hover:bg-gray-50"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
