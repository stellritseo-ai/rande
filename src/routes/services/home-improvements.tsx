import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight, Mail, MapPin, Hammer, ArrowRight } from "lucide-react";
import cleanImg from "@/assets/home-improvements-clean.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/home-improvements")({
  head: () => ({
    meta: [
      { title: "Home Improvements & Remodeling Wheat Ridge | ACC Construction LLC" },
      { name: "description", content: "ACC Construction LLC provides premium home improvements, kitchen & bath remodeling, concrete driveways, decks, and structural additions in Colorado." },
      { property: "og:title", content: "Home Improvements | ACC Construction LLC" },
      { property: "og:description", content: "Premium, licensed general contractor services in Colorado's Front Range." },
    ],
    links: [
      { rel: "canonical", href: "https://www.accconstructionllc.com/services/home-improvements" }
    ],
  }),
  component: HomeImprovementsPage,
});

function HomeImprovementsPage() {
  const { t } = useLanguage();

  const exteriorServices = [
    { name: t("Driveways", "Entradas de Autos"), desc: t("New installation, replacement, or repair. Built to withstand Colorado freeze-thaw cycles.", "Nueva instalación, reemplazo o reparación. Construido para soportar los ciclos de congelación-descongelación de Colorado.") },
    { name: t("Patios", "Patios"), desc: t("Concrete, stamped, or colored patios for outdoor living.", "Patios de concreto, estampados o de colores para la vida al aire libre.") },
    { name: t("Sidewalks & Walkways", "Aceras y Senderos"), desc: t("Safe, level, and code-compliant pedestrian paths.", "Senderos peatonales seguros, nivelados y que cumplen con el código.") },
    { name: t("Decks", "Terrazas (Decks)"), desc: t("Wood or composite. Custom design and professional installation.", "Madera o compuesto. Diseño personalizado e instalación profesional.") },
    { name: t("Fencing", "Cercas"), desc: t("Privacy, picket, or ranch-style fencing. Durable materials only.", "Cercas de privacidad, estacas o estilo rancho. Solo materiales duraderos.") }
  ];

  const interiorServices = [
    { name: t("Remodeling", "Remodelación"), desc: t("Kitchens, bathrooms, basements, and living spaces.", "Cocinas, baños, sótanos y espacios habitables.") },
    { name: t("Interior/Exterior Updates", "Actualizaciones Interiores/Exteriores"), desc: t("Fresh finishes, modern upgrades, and improved functionality.", "Acabados frescos, actualizaciones modernas y funcionalidad mejorada.") },
    { name: t("Home Additions", "Adiciones de Casa"), desc: t("Extra bedrooms, family rooms, or expanding your footprint.", "Dormitorios adicionales, salas familiares o expansión de su huella.") }
  ];

  const structuralServices = [
    { name: t("Foundations", "Cimientos"), desc: t("New pours, repairs, and stabilization for settling foundations.", "Nuevos vertidos, reparaciones y estabilización para cimientos asentados.") },
    { name: t("Residential General Contracting", "Contratación General Residencial"), desc: t("Full-service project management from permit to final walkthrough.", "Gestión completa del proyecto, desde el permiso hasta la inspección final.") }
  ];  const chooseReasons = [
    {
      icon: <Award className="h-6 w-6 text-[#008A22]" />,
      title: t("1. 25+ Years of Colorado Experience", "1. Más de 25 Años de Experiencia en Colorado"),
      desc: t("We understand Colorado’s unique soil conditions, extreme temperature shifts, and local building codes. What works in other states fails here. We build for Colorado.", "Entendemos las condiciones únicas del suelo de Colorado, los cambios de temperatura extremos y los códigos de construcción locales. Lo que funciona en otros estados falla aquí. Construimos para Colorado.")
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-[#008A22]" />,
      title: t("2. Licensed, Insured & Bonded", "2. Con Licencia, Asegurado y Bajo Fianza"),
      desc: t("This is not a side business. We carry full licensing, insurance, and bonding to protect you, your property, and our crew.", "Este no es un negocio secundario. Contamos con licencia completa, seguro y fianza para protegerlo a usted, a su propiedad y a nuestro equipo.")
    },
    {
      icon: <Clock className="h-6 w-6 text-[#008A22]" />,
      title: t("3. Extended Availability", "3. Disponibilidad Extendida"),
      desc: t("We work Monday through Saturday, 7 AM to 7 PM. Evening and weekend consultations available by request.", "Trabajamos de lunes a sábado, de 7 AM a 7 PM. Consultas por la tarde y los fines de semana disponibles a pedido.")
    },
    {
      icon: <MapPin className="h-6 w-6 text-[#008A22]" />,
      title: t("4. We Travel to You", "4. Viajamos a Usted"),
      desc: t("Proudly serving: Denver, Colorado Springs, Aurora, Fort Collins, Lakewood, Thornton, Arvada, Westminster, Pueblo, Greeley, Centennial, Boulder, Longmont, Loveland, Broomfield, Castle Rock, Commerce City, Parker, Grand Junction, Littleton, and surrounding areas.", "Sirviendo con orgullo a: Denver, Colorado Springs, Aurora, Fort Collins, Lakewood, Thornton, Arvada, Westminster, Pueblo, Greeley, Centennial, Boulder, Longmont, Loveland, Broomfield, Castle Rock, Commerce City, Parker, Grand Junction, Littleton y áreas circundantes.")
    }
  ];

  const steps = [
    { step: "1", title: t("Free Consultation", "Consulta Gratis"), desc: t("Call (720) 298-7777 or email leonholley45@gmail.com. We discuss your goals and budget.", "Llame al (720) 298-7777 o envíe un correo a leonholley45@gmail.com. Discutimos sus objetivos y presupuesto.") },
    { step: "2", title: t("On-Site Estimate", "Estimación en el Sitio"), desc: t("We visit your property, take measurements, and provide a written, line-item estimate.", "Visitamos su propiedad, tomamos medidas y proporcionamos una estimación por escrito detallada.") },
    { step: "3", title: t("Permitting & Planning", "Permisos y Planificación"), desc: t("We handle all necessary permits (licensed contractor advantage).", "Nos encargamos de todos los permisos necesarios (ventaja de contratista autorizado).") },
    { step: "4", title: t("Construction", "Construcción"), desc: t("Clean, organized, and on-schedule work. We communicate daily.", "Trabajo limpio, organizado y a tiempo. Nos comunicamos diariamente.") },
    { step: "5", title: t("Final Walkthrough", "Inspección Final"), desc: t("You inspect every detail. Only when you are 100% satisfied do we close the project.", "Usted inspecciona cada detalle. Solo cuando esté 100% satisfecho cerramos el proyecto.") }
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("Home Improvements", "Mejoras del Hogar")}
        title={t("Home Improvements That Actually Improve Your Home Value", "Mejoras del Hogar que Realmente Mejoran el Valor de su Hogar")}
        subtitle={t("25+ years of experience. Licensed. Insured. Bonded. Based in Wheat Ridge and serving all of Colorado’s Front Range.", "Más de 25 años de experiencia. Con Licencia, Asegurado y Bajo Fianza. Con sede en Wheat Ridge y sirviendo a todo el Front Range de Colorado.")}
      />

      <section className="py-24 bg-white relative">
        {/* Subtle decorative background details */}
        <div className="absolute inset-0 bg-[radial-gradient(#80808008_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
          
          {/* Row 1: Intro & Sidebar Booking Card */}
          <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
            {/* Left Column: Main Content */}
            <div className="space-y-12 text-left">
              {/* Introduction Card */}
              <div className="space-y-6">
                <div className="border-l-4 border-[#008A22] bg-[#008A22]/5 p-6 rounded-r-3xl rounded-bl-3xl">
                  <p className="text-xl text-slate-800 font-extrabold leading-relaxed">
                    {t(
                      "Your home is likely your single largest investment. Every improvement should add lasting value, beauty, and durability. At ACC Construction LLC, we bring over 25 years of residential construction experience to every project—big or small.",
                      "Su hogar es probablemente su mayor inversión. Cada mejora debe agregar valor duradero, belleza y durabilidad. En ACC Construction LLC, aportamos más de 25 años de experiencia en construcción residencial a cada proyecto, grande o pequeño."
                    )}
                  </p>
                </div>
                
                <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed pl-1">
                  {t(
                    "We are a licensed, insured, and bonded general contractor based in Wheat Ridge, Colorado. That means when you hire us, you are protected. No corners cut. No permits ignored. No surprises. From a new front sidewalk to a complete home addition, we manage every detail so you can enjoy the result.",
                    "Somos un contratista general autorizado, asegurado y bajo fianza con sede en Wheat Ridge, Colorado. Eso significa que cuando nos contrata, está protegido. Sin recortes de esquinas. Sin permisos ignorados. Sin sorpresas. Desde una nueva acera delantera hasta una adición completa de la casa, gestionamos cada detalle para que pueda disfrutar del resultado."
                  )}
                </p>
                
                <div className="pt-2 pl-1">
                  <Button asChild size="lg" className="font-extrabold rounded-full px-8 bg-[#008A22] hover:bg-[#006e1b] shadow-[0_10px_25px_-5px_rgba(0,138,34,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all">
                    <Link to="/contact">
                      {t("Book A Service", "Reservar un Servicio")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Large Premium Image Showcase - Newly generated image */}
              <div className="relative group rounded-[32px] overflow-hidden border border-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.08)] hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)] bg-white p-4 transition-all duration-500">
                <img
                  src={cleanImg}
                  alt={t("ACC Home Improvements and Custom Cabinetry", "Mejoras para el hogar y gabinetes personalizados de ACC")}
                  className="w-full h-auto max-h-[500px] object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <div className="absolute inset-x-6 bottom-6 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl text-white text-left text-xs font-extrabold sm:text-sm border border-white/10 flex items-center justify-between">
                  <span>{t("Professional unbranded craftsmanship in interior carpentry and finishing", "Artesanía profesional sin marca en carpintería y acabados interiores")}</span>
                  <span className="bg-[#008A22] text-[10px] uppercase font-black tracking-widest px-2.5 py-1 rounded-full hidden sm:inline-block">{t("Expert Work", "Trabajo Experto")}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              {/* Booking card */}
              <div className="rounded-3xl border border-[#008A22]/20 bg-[#008A22]/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-[#0F172A]">
                  {t("Ready to improve your home?", "¿Listo para mejorar su hogar?")}
                </h3>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-white border border-slate-200/80 rounded-xl">
                    <Phone className="h-5 w-5 text-[#008A22] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-400">{t("Call or Text Us Directly", "Llámenos o Envíe un Mensaje")}</span>
                      <a href="tel:+17202987777" className="text-sm font-black text-[#0F172A] hover:text-[#008A22] transition-colors">(720) 298-7777</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white border border-slate-200/80 rounded-xl">
                    <Mail className="h-5 w-5 text-[#008A22] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-400">{t("Email Us", "Correo Electrónico")}</span>
                      <a href="mailto:leonholley45@gmail.com" className="text-sm font-black text-[#0F172A] hover:text-[#008A22] transition-colors break-all">leonholley45@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white border border-slate-200/80 rounded-xl">
                    <Clock className="h-5 w-5 text-[#008A22] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-400">{t("Hours", "Horarios")}</span>
                      <span className="text-sm font-black text-[#0F172A]">Monday – Saturday, 7 AM – 7 PM</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white border border-slate-200/80 rounded-xl">
                    <MapPin className="h-5 w-5 text-[#008A22] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-400">{t("Location", "Ubicación")}</span>
                      <span className="text-sm font-black text-[#0F172A]">{t("Wheat Ridge, CO (we come to you)", "Wheat Ridge, CO (vamos a usted)")}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap gap-2 text-[10px] text-slate-500 font-extrabold uppercase tracking-wider select-none">
                  <span className="bg-white px-2.5 py-1 rounded-full border border-slate-200/60">{t("Free estimates", "Presupuestos gratis")}</span>
                  <span className="bg-white px-2.5 py-1 rounded-full border border-slate-200/60">{t("Licensed", "Con Licencia")}</span>
                  <span className="bg-white px-2.5 py-1 rounded-full border border-slate-200/60">{t("Insured", "Asegurado")}</span>
                  <span className="bg-white px-2.5 py-1 rounded-full border border-slate-200/60">{t("Bonded", "Bajo Fianza")}</span>
                  <span className="bg-white px-2.5 py-1 rounded-full border border-slate-200/60">{t("25+ Years", "25+ Años")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Specialties Showcase (Spans Full Container Width 100% / Row 100%) */}
          <div className="border-t border-slate-100 pt-16 space-y-12 text-left">
            <div className="space-y-4">
              <h2 className="font-display font-black text-[#0F172A] text-2xl sm:text-4xl tracking-tight">
                {t("Our Services & Specialties", "Nuestros Servicios y Especialidades")}
              </h2>
              <p className="text-slate-500 font-medium text-base sm:text-lg max-w-3xl leading-relaxed">
                {t("From minor updates to major structural additions, we deliver high-end carpentry, concrete, and remodeling services.", "Desde actualizaciones menores hasta adiciones estructurales importantes, ofrecemos servicios de carpintería, concreto y remodelación de alta gama.")}
              </p>
            </div>

            <div className="space-y-16">
              
              {/* Exterior Home Improvements - Full Width Row 100% */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-6 rounded-full bg-[#008A22]" />
                  <h3 className="font-display font-black text-[#0F172A] text-xl sm:text-2xl">
                    {t("Exterior Home Improvements", "Mejoras Exteriores del Hogar")}
                  </h3>
                </div>
                
                <div className="grid gap-4 grid-cols-1">
                  {exteriorServices.map((service) => (
                    <div 
                      key={service.name} 
                      className="group/card relative bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-[#008A22]/30 hover:shadow-[0_12px_30px_-10px_rgba(0,138,34,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col md:flex-row md:items-center gap-4 justify-between"
                    >
                      <div className="flex items-center gap-4 shrink-0">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#008A22]/10 text-[#008A22] group-hover/card:bg-[#008A22] group-hover/card:text-white transition-colors duration-300">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <h4 className="font-extrabold text-[#0F172A] text-base group-hover/card:text-[#008A22] transition-colors">{service.name}</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed md:max-w-2xl text-left md:text-right">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interior Home Improvements - 3 Columns across 100% width */}
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-6 rounded-full bg-[#008A22]" />
                  <h3 className="font-display font-black text-[#0F172A] text-xl sm:text-2xl">
                    {t("Interior Home Improvements", "Mejoras Interiores del Hogar")}
                  </h3>
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {interiorServices.map((service) => (
                    <div 
                      key={service.name} 
                      className="group/card relative bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-[#008A22]/30 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,138,34,0.12)] transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#008A22]/10 text-[#008A22] group-hover/card:bg-[#008A22] group-hover/card:text-white transition-colors duration-300">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <h4 className="font-extrabold text-[#0F172A] text-base group-hover/card:text-[#008A22] transition-colors">{service.name}</h4>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Structural & Major Projects - 2 Columns across 100% width */}
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-6 rounded-full bg-[#008A22]" />
                  <h3 className="font-display font-black text-[#0F172A] text-xl sm:text-2xl">
                    {t("Structural & Major Projects", "Proyectos Estructurales y Mayores")}
                  </h3>
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2">
                  {structuralServices.map((service) => (
                    <div 
                      key={service.name} 
                      className="group/card relative bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-[#008A22]/30 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,138,34,0.12)] transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#008A22]/10 text-[#008A22] group-hover/card:bg-[#008A22] group-hover/card:text-white transition-colors duration-300">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <h4 className="font-extrabold text-[#0F172A] text-base group-hover/card:text-[#008A22] transition-colors">{service.name}</h4>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Why Choose Us (Spans Full Container Width 100%) */}
          <div className="border-t border-slate-100 pt-16 space-y-8 text-left">
            <div className="space-y-3">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("Why Choose ACC Construction for Home Improvements", "Por qué elegir ACC Construction para mejoras en el hogar")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl">
                {t("We bring local expertise, licensing protection, and customer-first service to every job.", "Aportamos experiencia local, protección de licencias y servicio centrado en el cliente a cada trabajo.")}
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {chooseReasons.map((reason) => (
                <div 
                  key={reason.title} 
                  className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-4 hover:bg-white hover:border-[#008A22]/20 hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#008A22]/10 text-[#008A22] shadow-sm">
                    {reason.icon}
                  </div>
                  <h4 className="font-black text-[#0F172A] text-base leading-snug">{reason.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 4: Process details (Spans Full Container Width 100%) */}
          <div className="border-t border-slate-100 pt-16 space-y-10 text-left">
            <div className="space-y-3">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("The ACC Construction Process", "El Proceso de ACC Construction")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl">
                {t("Our step-by-step approach ensures a smooth, worry-free project from start to finish.", "Nuestro enfoque paso a paso garantiza un proyecto fluido y sin preocupaciones de principio a fin.")}
              </p>
            </div>
            
            <div className="relative border-l border-slate-200 ml-4 pl-8 space-y-6">
              {steps.map((s) => (
                <div key={s.step} className="relative group/step p-6 border border-slate-200/80 rounded-2xl bg-white hover:border-[#008A22]/30 hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
                  {/* Step Indicator Dot */}
                  <span className="absolute -left-[49px] top-6 flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 text-xs font-black text-slate-700 shadow-sm transition-all group-hover/step:border-[#008A22] group-hover/step:bg-[#008A22] group-hover/step:text-white">
                    {s.step}
                  </span>
                  
                  <h4 className="font-bold text-[#0F172A] text-base leading-none pt-0.5 transition-colors group-hover/step:text-[#008A22]">{s.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-3 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Process />
      <EmergencyCTA />
    </>
  );
}
