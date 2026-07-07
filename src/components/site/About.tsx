import { motion } from "framer-motion";
import { CheckCircle2, Phone, Mail, Clock, MapPin, ArrowRight, ShieldCheck, Hammer, Building, Trees, Layers } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import aboutTeamImg from "@/assets/about-team.jpg";
import aboutConstructionImg from "@/assets/about-construction-clean.png";
import { Counter } from "./Counter";
import { useLanguage } from "@/hooks/useLanguage";

export function About() {
  const { t } = useLanguage();

  const specialties = [
    {
      icon: <Trees className="h-6 w-6 text-[#008A22]" />,
      title: t("Exterior Hardscapes", "Paisajismo Exterior"),
      desc: t("Driveways, patios, sidewalks, decks, and fencing.", "Entradas de autos, patios, aceras, terrazas y cercas.")
    },
    {
      icon: <Building className="h-6 w-6 text-[#008A22]" />,
      title: t("Structural Work", "Trabajo Estructural"),
      desc: t("Foundations and home additions.", "Cimientos y adiciones de casas.")
    },
    {
      icon: <Hammer className="h-6 w-6 text-[#008A22]" />,
      title: t("Interior Remodeling", "Remodelación de Interiores"),
      desc: t("Kitchens, bathrooms, and whole-home improvements.", "Cocinas, baños y mejoras para todo el hogar.")
    },
    {
      icon: <Layers className="h-6 w-6 text-[#008A22]" />,
      title: t("General Contracting", "Contratación General"),
      desc: t("Full-service project management for residential properties.", "Gestión de proyectos de servicio completo para propiedades residenciales.")
    }
  ];

  const cities = [
    "Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood",
    "Thornton", "Arvada", "Westminster", "Pueblo", "Greeley",
    "Centennial", "Boulder", "Longmont", "Loveland", "Broomfield",
    "Castle Rock", "Commerce City", "Parker", "Grand Junction", "Littleton"
  ];

  return (
    <div className="bg-white overflow-hidden">
      
      {/* SECTION 1: WHO WE ARE (Alternating Layout - Image Right) */}
      <section className="py-[80px] border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex rounded-full bg-[#008A22]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#008A22]">
                {t("Who We Are", "Quiénes Somos")}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] leading-tight font-extrabold text-[#0F172A]">
                {t("ACC Construction LLC", "ACC Construction LLC")}<br />
                <span className="text-[#008A22]">
                  {t("Wheat Ridge’s Licensed & Insured Contractor", "Contratista con Licencia y Seguro de Wheat Ridge")}
                </span>
              </h2>
              
              <div className="space-y-4 text-slate-600 font-medium text-[15px] sm:text-base leading-relaxed">
                <p>
                  {t(
                    "For over 25 years, ACC Construction LLC has stood for reliability, skill, and absolute integrity. Founded and operated in Wheat Ridge, Colorado, we are a family-led residential general contracting company that treats every home as if it were our own.",
                    "Durante más de 25 años, ACC Construction LLC ha sido sinónimo de confiabilidad, habilidad y absoluta integridad. Fundada y operada en Wheat Ridge, Colorado, somos una empresa familiar de contratación general residencial que trata cada hogar como si fuera el nuestro."
                  )}
                </p>
                <p className="border-l-4 border-[#008A22] pl-4 italic text-[#0F172A] font-semibold bg-slate-50/50 py-2">
                  {t(
                    "We are not salespeople. We are builders. From the first shovel of dirt for a new driveway to the final coat of paint on an interior remodel, we are on-site, hands-on, and committed to excellence.",
                    "No somos vendedores. Somos constructores. Desde la primera pala de tierra para una nueva entrada de autos hasta la capa final de pintura en una remodelación interior, estamos en el lugar, listos y comprometidos con la excelencia."
                  )}
                </p>
                <p>
                  {t(
                    "Unlike unlicensed handymen or fly-by-night crews, ACC Construction is fully licensed, insured, and bonded. That means when you hire us, you are hiring legal protection, professional standards, and peace of mind.",
                    "A diferencia de los trabajadores no autorizados o los equipos temporales, ACC Construction está totalmente autorizada, asegurada y bajo fianza. Eso significa que cuando nos contrata, está contratando protección legal, estándares profesionales y tranquilidad."
                  )}
                </p>
              </div>

              <div className="pt-2">
                <Button asChild size="lg" className="font-extrabold rounded-full px-8 bg-[#008A22] hover:bg-[#006e1b] shadow-[0_10px_25px_-5px_rgba(0,138,34,0.4)]">
                  <Link to="/contact">
                    {t("Book A Service", "Reservar un Servicio")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column: Premium Image with float animation */}
            <div className="lg:col-span-5 relative w-full flex justify-center items-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#008A22]/5 blur-3xl -z-10 animate-pulse" />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-[440px] aspect-square rounded-[32px] overflow-hidden border border-slate-100 bg-white p-4 shadow-[0_20px_50px_rgba(15,23,42,0.08)] group"
              >
                <img
                  src={aboutConstructionImg}
                  alt={t("ACC Construction site building", "Sitio de construcción de ACC")}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg select-none">
                  <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">{t("Colorado Craftsmanship", "Artesanía de Colorado")}</p>
                  <p className="text-xs sm:text-sm font-extrabold text-[#0F172A] mt-0.5">{t("Unbranded Quality Builder", "Constructor de Calidad de Confianza")}</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE DO (Alternating Layout - Image Left) */}
      <section className="py-[80px] bg-slate-50/50 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Left Column: Team Image */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative w-full flex justify-center items-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#008A22]/5 blur-3xl -z-10 animate-pulse" />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-[440px] aspect-square rounded-[32px] overflow-hidden border border-slate-100 bg-white p-4 shadow-[0_20px_50px_rgba(15,23,42,0.08)] group"
              >
                <img
                  src={aboutTeamImg}
                  alt={t("ACC Construction LLC team working", "Equipo de ACC Construction LLC trabajando")}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg select-none">
                  <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">{t("Hands-on Projects", "Proyectos Prácticos")}</p>
                  <p className="text-xs sm:text-sm font-extrabold text-[#0F172A] mt-0.5">{t("Wheat Ridge General Contractors", "Contratistas Generales de Wheat Ridge")}</p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Text Content + Specialties Grid */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
              <span className="inline-flex rounded-full bg-[#008A22]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#008A22]">
                {t("What We Do", "Lo Que Hacemos")}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl leading-tight font-extrabold text-[#0F172A]">
                {t("Transforming Residential Properties", "Transformando Propiedades Residenciales")}<br />
                <span className="text-[#008A22]">{t("Inside and Out", "Por Dentro y Por Fuera")}</span>
              </h2>
              <p className="text-slate-600 font-medium text-[15px] sm:text-base leading-relaxed">
                {t(
                  "We specialize in transforming residential properties inside and out. Our team manages projects of all sizes, bringing precision and care to every job site.",
                  "Nos especializamos en transformar propiedades residenciales por dentro y por fuera. Nuestro equipo gestiona proyectos de todos los tamaños, aportando precisión y cuidado a cada sitio de trabajo."
                )}
              </p>

              {/* Specialties Cards Grid */}
              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                {specialties.map((spec) => (
                  <div 
                    key={spec.title}
                    className="flex flex-col p-5 rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#008A22]/10 mb-3 shrink-0">
                      {spec.icon}
                    </div>
                    <h3 className="font-bold text-[#0F172A] text-[15px] sm:text-base">{spec.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1 leading-relaxed">{spec.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-500 text-sm font-semibold italic pt-2">
                {t(
                  "Whether you need a stamped patio in Aurora or a foundation repair in Colorado Springs, we bring the same level of precision and care to every job.",
                  "Ya sea que necesite un patio estampado en Aurora o una reparación de cimientos en Colorado Springs, brindamos el mismo nivel de precisión y cuidado a cada trabajo."
                )}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: THE PROMISE, SERVICE AREA, AND BOTTOM LINE CARDS */}
      <section className="py-[80px] bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-center">
          <span className="inline-flex rounded-full bg-[#008A22]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#008A22] mb-4">
            {t("Our Core Values", "Nuestros Valores")}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-12">
            {t("Built on Trust. Built for Colorado.", "Construido sobre la Confianza. Construido para Colorado.")}
          </h2>

          <div className="grid gap-8 lg:grid-cols-3 text-left">
            
            {/* Card 1: Our Promise */}
            <div className="relative group rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#008A22]/10 text-[#008A22] mb-6">
                <Phone className="h-6 w-6 animate-pulse" />
              </div>
              <h3 className="font-display text-xl font-extrabold text-[#0F172A] mb-3">
                {t("Our Promise", "Nuestra Promesa")}
              </h3>
              <p className="text-slate-600 font-medium text-sm sm:text-[15px] leading-relaxed">
                {t(
                  "We answer the phone. You can reach us directly at (720) 298-7777 from 7 AM to 7 PM, Monday through Saturday. We know your time is valuable, so we show up when promised and communicate clearly through every phase of your project.",
                  "Nosotros respondemos el teléfono. Puede comunicarse con nosotros directamente al (720) 298-7777 de 7 AM a 7 PM, de lunes a sábado. Sabemos que su tiempo es valioso, por lo que nos presentamos cuando lo prometemos y nos comunicamos claramente en cada fase de su proyecto."
                )}
              </p>
            </div>

            {/* Card 2: We Travel to You */}
            <div className="relative group rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#008A22]/10 text-[#008A22] mb-6">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-extrabold text-[#0F172A] mb-3">
                {t("We Travel to You", "Viajamos a Usted")}
              </h3>
              <p className="text-slate-600 font-medium text-sm sm:text-[15px] leading-relaxed mb-4">
                {t(
                  "ACC Construction proudly serves more than 20 Colorado cities. We travel directly to your property to deliver professional builds.",
                  "ACC Construction se enorgullece de servir a más de 20 ciudades de Colorado. Viajamos directamente a su propiedad para entregar construcciones profesionales."
                )}
              </p>
              
              {/* Cities pills layout */}
              <div className="flex flex-wrap gap-1.5 max-h-[140px] overflow-y-auto pr-1">
                {cities.map((city) => (
                  <span 
                    key={city}
                    className="text-[10px] font-bold text-slate-700 bg-slate-100/80 px-2 py-0.5 rounded-full border border-slate-200/60"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 3: The Bottom Line */}
            <div className="relative group rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#008A22]/10 text-[#008A22] mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-extrabold text-[#0F172A] mb-3">
                {t("The Bottom Line", "El Resultado Final")}
              </h3>
              <p className="text-slate-600 font-medium text-sm sm:text-[15px] leading-relaxed">
                {t(
                  "With 25+ years of experience navigating Colorado’s unique freeze-thaw cycles, expansive soils, and strict building codes, ACC Construction builds structures that last. We don’t cut corners. We build right. We stand behind our work.",
                  "Con más de 25 años de experiencia navegando por los ciclos únicos de congelación-descongelación de Colorado, suelos expansivos y estrictos códigos de construcción, ACC Construction construye estructuras que duran. No recortamos caminos. Construimos bien. Respaldamos nuestro trabajo."
                )}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION BANNER (Ready to start?) */}
      <section className="py-[80px] bg-slate-900 text-white relative overflow-hidden">
        {/* Background design accents */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#008A22]/20 blur-[100px]" />
        
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white">
              {t("Let’s Build Something That Lasts.", "Construyamos Algo Que Dure.")}
            </h2>
            <p className="text-slate-400 font-bold text-lg">
              {t("Ready to start your project?", "¿Listo para comenzar su proyecto?")}
            </p>
          </div>

          {/* Grid of contact details */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto text-left pt-4">
            
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
              <Phone className="h-5 w-5 text-[#008A22] shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">{t("Call Us", "Llámenos")}</span>
                <a href="tel:+17202987777" className="text-sm font-black text-white hover:text-[#008A22] transition-colors">(720) 298-7777</a>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
              <Mail className="h-5 w-5 text-[#008A22] shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">{t("Email Us", "Correo")}</span>
                <a href="mailto:leonholley45@gmail.com" className="text-sm font-black text-white hover:text-[#008A22] transition-colors break-all">leonholley45@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
              <Clock className="h-5 w-5 text-[#008A22] shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">{t("Hours", "Horas")}</span>
                <span className="text-sm font-black text-white">7 AM – 7 PM, Mon – Sat</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
              <MapPin className="h-5 w-5 text-[#008A22] shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-400">{t("Location", "Ubicación")}</span>
                <span className="text-sm font-black text-white">Wheat Ridge, CO</span>
              </div>
            </div>

          </div>

          {/* Badges footer */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-6 text-xs text-slate-300 font-extrabold uppercase tracking-wider select-none">
            <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/5">{t("Free estimates", "Presupuestos gratis")}</span>
            <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/5">{t("Licensed", "Con Licencia")}</span>
            <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/5">{t("Insured", "Asegurado")}</span>
            <span className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/5">{t("Bonded", "Bajo Fianza")}</span>
          </div>
        </div>
      </section>

    </div>
  );
}
