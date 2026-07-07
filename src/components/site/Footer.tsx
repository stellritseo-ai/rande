import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import logoImg from "@/assets/logo.png";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/hooks/useLanguage";

// Inline SVG Social Icons for maximum reliability
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socials = [
  { icon: FacebookIcon, href: "https://www.facebook.com/accconstructionllc", label: "Facebook" },
  { icon: InstagramIcon, href: "https://www.instagram.com/accconstructionllc/", label: "Instagram" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
];

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t("Home", "Inicio"), href: "/" },
    { label: t("About Us", "Sobre Nosotros"), href: "/about" },
    { label: t("Our Services", "Nuestros Servicios"), href: "/services" },
    { label: t("Featured Projects", "Proyectos Destacados"), href: "/projects" },
    { label: t("Client Reviews", "Opiniones de Clientes"), href: "/reviews" },
    { label: t("Get In Touch", "Ponerse en Contacto"), href: "/contact" },
  ];

  const servicesLinks = [
    { label: t("Driveways", "Entradas de Autos"), href: "/services/driveway" },
    { label: t("Patios", "Patios"), href: "/services/patios" },
    { label: t("Sidewalks", "Aceras"), href: "/services/sidewalk" },
    { label: t("Remodeling", "Remodelación"), href: "/services/remodeling" },
    { label: t("Interior/Exterior", "Interior/Exterior"), href: "/services/interior-exterior" },
    { label: t("Additions", "Adiciones"), href: "/services/home-additions" },
    { label: t("Home Improvements", "Mejoras para el Hogar"), href: "/services/home-improvements" },
    { label: t("Foundations", "Cimientos"), href: "/services/foundation" },
    { label: t("Decks", "Terrazas de Madera"), href: "/services/decks" },
    { label: t("Fencing", "Cercas"), href: "/services/fencing" },
  ];

  return (
    <footer className="relative bg-[#050b1a] text-white overflow-hidden border-t border-slate-900">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />

      {/* Decorative Blur Blobs */}
      <div className="absolute -top-40 left-1/4 w-[400px] h-[400px] bg-[#008A22]/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute -bottom-40 right-10 w-[350px] h-[350px] bg-green-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />

      <div className="relative mx-auto w-[90%] max-w-7xl py-20 lg:py-24 z-10 text-left">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">

          {/* Logo & Description */}
          <div className="col-span-2 lg:col-span-4">
            <Link to="/" className="flex items-center">
              <img
                src={logoImg}
                alt="ACC Construction LLC Logo"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
 
            <p className="mt-6 text-sm text-slate-400 leading-relaxed max-w-sm font-semibold">
              {t("Licensed, insured, and trusted general contractors serving Colorado with top-tier construction, home remodeling, driveways, concrete, and home improvements.", "Contratistas generales autorizados, asegurados y de confianza que brindan servicios al Colorado con construcción de primer nivel, remodelación de viviendas, entradas para autos, concreto y mejoras para el hogar.")}
            </p>
 
            {/* Socials row */}
            <div className="mt-8 flex gap-3 select-none">
              {socials.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -4, scale: 1.05, backgroundColor: "rgba(0, 138, 34, 0.15)", borderColor: "rgba(0, 138, 34, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  aria-label={label}
                  className="grid place-items-center h-10 w-10 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white transition-colors shadow-sm"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap gap-2 select-none">
              <div className="flex items-center gap-2 bg-slate-900/40 border border-slate-800/80 rounded-xl px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                License #CGC1530932
              </div>
              <div className="flex items-center gap-2 bg-slate-900/40 border border-slate-800/80 rounded-xl px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {t("Licensed & Insured", "Con Licencia y Seguro")}
              </div>
              <div className="flex items-center gap-2 bg-slate-900/40 border border-slate-800/80 rounded-xl px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {t("Colorado Service", "Servicio en el Sur de Colorado")}
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <Col title={t("Quick Links", "Enlaces Rápidos")} items={quickLinks} />

          {/* Services Column */}
          <Col title={t("Our Services", "Nuestros Servicios")} items={servicesLinks} />

          {/* Contact & Hours Column (4-span grid layout subsplit) */}
          <div className="col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-6">

            {/* Contact Details */}
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-6">
                {t("Contact Us", "Contáctenos")}
              </div>
              <ul className="space-y-4.5 text-sm">
                <li>
                  <a
                    href="tel:+17202987777"
                    className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-center text-[#008A22] group-hover:bg-[#008A22]/10 group-hover:border-[#008A22]/30 transition-all shrink-0">
                      <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Phone</span>
                      <span className="font-semibold text-white tracking-tight mt-0.5">(720) 298-7777</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:leonholley45@gmail.com"
                    className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-center text-[#008A22] group-hover:bg-[#008A22]/10 group-hover:border-[#008A22]/30 transition-all shrink-0">
                      <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Email</span>
                      <span className="font-semibold text-white tracking-tight mt-0.5 text-wrap break-all">leonholley45@gmail.com</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.google.com/?q=Wheat+Ridge,+Colorado"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-center text-[#008A22] group-hover:bg-[#008A22]/10 group-hover:border-[#008A22]/30 transition-all shrink-0">
                      <MapPin className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">{t("Office", "Oficina")}</span>
                      <span className="font-semibold text-white tracking-tight mt-0.5 leading-snug">
                        Wheat Ridge,<br />
                        Colorado
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours Info */}
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-6">
                {t("Service Hours", "Horario de Servicio")}
              </div>
              <div className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5">
                <span className="text-[#008A22] font-black uppercase tracking-wider block mb-3 text-[10px] flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008A22] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#008A22]"></span>
                  </span>
                  {t("Support Line Active", "Línea de Soporte Activa")}
                </span>
                <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                  {t("We are available during operational hours to answer queries and plan on-site estimates.", "Estamos disponibles durante las horas operativas para responder consultas y planificar presupuestos en el sitio.")}<br /><br />
                  <span className="text-white block font-bold mb-1">{t("Standard Office:", "Oficina Estándar:")}</span>
                  {t("Mon–Sat: 7am–7pm", "Lun–Sáb: 7am–7pm")}<br />
                  {t("Sun: Closed", "Dom: Cerrado")}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Copy/Trademark Row with Back to Top trigger */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-wrap items-center justify-between gap-6">
          <p className="text-xs text-slate-500 font-semibold">
            © 2026 ACC Construction LLC. {t("All rights reserved. Design by", "Todos los derechos reservados. Diseño por")}{" "}
            <a 
              href="https://stellrit.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-[#008A22] transition-colors"
            >
              StellR IT LLC
            </a>
          </p>
 
          <div className="flex items-center gap-6">
            <p className="text-xs text-slate-500 font-semibold hidden sm:block">
              License #CGC1530932 · {t("Licensed & Insured", "Con Licencia y Seguro")}
            </p>
 
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="text-xs text-slate-400 hover:text-white transition-colors font-bold flex items-center gap-2 cursor-pointer select-none"
            >
              <span>{t("Back to Top", "Volver Arriba")}</span>
              <ArrowRight className="h-4 w-4 -rotate-90 text-[#008A22]" />
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
}

function Col({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-6">
        {title}
      </div>
      <ul className="space-y-4">
        {items.map(({ label, href }) => (
          <li key={label}>
            {href.startsWith("/") ? (
              <Link
                to={href}
                className="text-sm text-slate-400 hover:text-white transition-colors block font-semibold hover:text-[#008A22]"
              >
                <motion.span
                  whileHover={{ x: 4, color: "#008A22" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="block"
                >
                  {label}
                </motion.span>
              </Link>
            ) : (
              <motion.a
                whileHover={{ x: 4, color: "#008A22" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                href={href}
                className="text-sm text-slate-400 hover:text-white transition-colors block font-semibold"
              >
                {label}
              </motion.a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
