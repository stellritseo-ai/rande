import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, Mail, MapPin, ArrowRight, CheckSquare } from "lucide-react";
import cleanImg from "@/assets/remodeling-construction-clean.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/remodeling")({
  head: () => ({
    meta: [
      { title: "Home Kitchen & Bath Remodeling Wheat Ridge | ACC Construction LLC" },
      { name: "description", content: "ACC Construction LLC provides premium kitchen remodeling, bathroom renovations, basement finishing, and whole-home remodeling services in Colorado." },
      { property: "og:title", content: "Remodeling Services | ACC Construction LLC" },
      { property: "og:description", content: "Expert home renovations and custom remodeling in Colorado's Front Range." },
    ],
    links: [
      { rel: "canonical", href: "https://www.accconstructionllc.com/services/remodeling" }
    ],
  }),
  component: RemodelingPage,
});

function RemodelingPage() {
  const { t } = useLanguage();

  const kitchenDetails = [
    { item: t("Cabinet installation & refacing", "Instalación y revestimiento de gabinetes"), details: t("Custom and semi-custom options", "Opciones personalizadas y semipersonalizadas") },
    { item: t("Countertop replacement", "Reemplazo de encimeras"), details: t("Granite, quartz, butcher block, solid surface", "Granito, cuarzo, bloque de carnicero, superficie sólida") },
    { item: t("Kitchen layout changes", "Cambios en la distribución de la cocina"), details: t("Moving walls, expanding footprints", "Mover paredes, expandir la superficie") },
    { item: t("Backsplash & tile work", "Salpicadero y trabajo de azulejos"), details: t("Ceramic, porcelain, natural stone", "Cerámica, porcelana, piedra natural") },
    { item: t("Lighting & electrical updates", "Actualizaciones eléctricas y de iluminación"), details: t("LED, under-cabinet, pendant lighting", "LED, debajo de gabinetes, iluminación colgante") },
    { item: t("Sink & fixture replacement", "Reemplazo de fregadero y accesorios"), details: t("Modern, functional, durable", "Moderno, funcional, duradero") }
  ];

  const bathroomDetails = [
    { item: t("Shower & tub replacement", "Reemplazo de ducha y bañera"), details: t("Walk-in showers, soaking tubs, tub-to-shower conversions", "Duchas a ras de suelo, bañeras de hidromasaje, conversión de bañera a ducha") },
    { item: t("Vanity & sink installation", "Instalación de tocador y lavabo"), details: t("Custom and prefabricated options", "Opciones personalizadas y prefabricadas") },
    { item: t("Tile flooring & walls", "Pisos y paredes de azulejos"), details: t("Waterproof installations", "Instalaciones impermeables") },
    { item: t("Toilet relocation or replacement", "Reubicación o reemplazo de inodoro"), details: t("Plumbing reconfiguration when needed", "Reconfiguración de plomería cuando sea necesario") },
    { item: t("Lighting & ventilation", "Iluminación y ventilación"), details: t("Exhaust fans, moisture-resistant fixtures", "Extractores de aire, accesorios resistentes a la humedad") },
    { item: t("Accessibility upgrades", "Mejoras de accesibilidad"), details: t("Grab bars, curbless showers, comfort-height toilets", "Barras de apoyo, duchas sin curvas, inodoros de altura confort") }
  ];

  const basementDetails = [
    { item: t("Finished basements", "Sótanos terminados"), details: t("Bedrooms, bathrooms, home theaters, gyms", "Dormitorios, baños, salas de cine, gimnasios") },
    { item: t("Egress window installation", "Instalación de ventanas de escape"), details: t("Required for basement bedrooms – we handle permits", "Requerido para dormitorios en el sótano – nos encargamos de los permisos") },
    { item: t("Insulation & moisture control", "Aislamiento y control de humedad"), details: t("Colorado-specific solutions for dry, stable basements", "Soluciones específicas de Colorado para sótanos secos y estables") },
    { item: t("Subfloor & flooring", "Subsuelo y pisos"), details: t("LVP, carpet, tile over concrete slabs", "LVP, alfombra, azulejos sobre losas de concreto") },
    { item: t("Bar & wet bar installation", "Instalación de bar y fregadero"), details: t("Plumbing, cabinetry, and finishes", "Plomería, gabinetes y acabados") }
  ];

  const wholeHomeDetails = [
    { item: t("Multi-room renovations", "Renovaciones de varias habitaciones"), details: t("Kitchen + bath + living areas combined", "Cocina + baño + salas de estar combinadas") },
    { item: t("Floor plan changes", "Cambios en la distribución"), details: t("Load-bearing wall removal (licensed contractor required)", "Eliminación de muros de carga (se requiere contratista autorizado)") },
    { item: t("Interior/Exterior updates", "Actualizaciones interiores/exteriores"), details: t("Cohesive design inside and out", "Diseño cohesivo por dentro y por fuera") },
    { item: t("Historic home remodels", "Remodelación de casas históricas"), details: t("Respecting original character while updating systems", "Respetar el carácter original mientras se actualizan los sistemas") }
  ];

  const interiorList = [
    t("Kitchens", "Cocinas"),
    t("Bathrooms", "Baños"),
    t("Basements", "Sótanos"),
    t("Living rooms & bedrooms", "Salas de estar y dormitorios"),
    t("Laundry rooms", "Cuartos de lavado"),
    t("Home offices", "Oficinas en el hogar")
  ];

  const exteriorList = [
    t("Siding replacement & repair", "Reemplazo y reparación de revestimiento"),
    t("Window & door replacement", "Reemplazo de ventanas y puertas"),
    t("Deck construction & repair", "Construcción y reparación de terrazas (decks)"),
    t("Patio covers & pergolas", "Cubiertas de patio y pérgolas"),
    t("Exterior painting & finishing", "Pintura y acabado exterior"),
    t("Garage conversions", "Conversión de garajes")
  ];

  const steps = [
    { step: "1", title: t("Free Consultation", "Consulta Gratis"), desc: t("Call (720) 298-7777 or email leonholley45@gmail.com. We discuss your vision, needs, and rough budget.", "Llame al (720) 298-7777 o envíe un correo a leonholley45@gmail.com. Discutimos su visión, necesidades y presupuesto aproximado.") },
    { step: "2", title: t("In-Home Design & Measure", "Diseño y Medición en el Hogar"), desc: t("We visit your property. Take measurements. Discuss layout, materials, and timeline.", "Visitamos su propiedad. Tomamos medidas. Discutimos la distribución, los materiales y el cronograma.") },
    { step: "3", title: t("Detailed Proposal", "Propuesta Detallada"), desc: t("Line-item estimate including labor, materials, permits, and contingency. No hidden fees.", "Estimación detallada que incluye mano de obra, materiales, permisos e imprevistos. Sin tarifas ocultas.") },
    { step: "4", title: t("Permitting", "Permisos"), desc: t("As a licensed contractor, we pull all required permits. You do nothing.", "Como contratistas autorizados, tramitamos todos los permisos necesarios. Usted no hace nada.") },
    { step: "5", title: t("Demolition", "Demolición"), desc: t("Protected workspaces. Dust control. Responsible debris removal.", "Espacios de trabajo protegidos. Control de polvo. Eliminación responsable de escombros.") },
    { step: "6", title: t("Rough-In Work", "Trabajo de Obra Negra"), desc: t("Electrical, plumbing, HVAC, framing – inspected before closing walls.", "Electricidad, plomería, calefacción/ventilación, encofrado – inspeccionado antes de cerrar las paredes.") },
    { step: "7", title: t("Finishes & Fixtures", "Acabados y Accesorios"), desc: t("Cabinets, counters, tile, paint, flooring, lighting, plumbing fixtures.", "Gabinetes, encimeras, azulejos, pintura, pisos, iluminación, accesorios de plomería.") },
    { step: "8", title: t("Final Walkthrough", "Inspección Final"), desc: t("You inspect every detail. We do not leave until you are 100% satisfied.", "Usted inspecciona cada detalle. No nos vamos hasta que esté 100% satisfecho.") }
  ];

  const warningSigns = [
    t("Your kitchen layout does not work for how you actually live", "La distribución de su cocina no funciona para su forma de vida real"),
    t("Bathroom fixtures are dated, cracked, or inefficient", "Los accesorios del baño son anticuados, están agrietados o son ineficientes"),
    t("Your basement is unfinished or feels like a dungeon", "Su sótano está sin terminar o se siente como un calabozo"),
    t("You need more space but do not want to move", "Necesita más espacio pero no quiere mudarse"),
    t("Outdated electrical or plumbing needs replacement", "La plomería o electricidad obsoleta necesita ser reemplazada"),
    t("You want to increase your home’s resale value", "Desea aumentar el valor de reventa de su casa")
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("Remodeling", "Remodelación")}
        title={t("Remodeling That Respects Your Home – And Your Budget", "Remodelaciones que Respetan su Hogar y su Presupuesto")}
        subtitle={t("25+ years of experience. Licensed. Insured. Bonded. Based in Wheat Ridge and serving the entire Front Range.", "Más de 25 años de experiencia. Con Licencia, Asegurado y Bajo Fianza. Con sede en Wheat Ridge y sirviendo a todo el Front Range.")}
      />

      <section className="py-24 bg-white relative">
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
                      "Remodeling is exciting. It is also disruptive, complex, and full of decisions. The difference between a dream renovation and a nightmare project comes down to one thing: the contractor you hire.",
                      "La remodelación es emocionante. También es disruptiva, compleja y está llena de decisiones. La diferencia entre una renovación de ensueño y un proyecto de pesadilla se reduce a una cosa: el contratista que contrate."
                    )}
                  </p>
                </div>
                
                <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed pl-1">
                  {t(
                    "At ACC Construction LLC, we have been remodeling homes across Colorado for over 25 years. We are a licensed, insured, and bonded residential general contractor based in Wheat Ridge. We do not disappear mid-project. We do not cut corners behind your walls. We show up on time, communicate clearly, and build spaces you will love for decades.",
                    "En ACC Construction LLC, hemos estado remodelando casas en todo Colorado durante más de 25 años. Somos un contratista general residencial autorizado, asegurado y bajo fianza con sede en Wheat Ridge. No desaparecemos a mitad del proyecto. No recortamos caminos detrás de sus paredes. Nos presentamos a tiempo, nos comunicamos con claridad y construimos espacios que amará por décadas."
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

              {/* Large Premium Image Showcase */}
              <div className="relative group rounded-[32px] overflow-hidden border border-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.08)] hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)] bg-white p-4 transition-all duration-500">
                <img
                  src={cleanImg}
                  alt={t("ACC Luxury Kitchen Remodeling Showcase", "Exhibición de remodelación de cocina de lujo de ACC")}
                  className="w-full h-auto max-h-[500px] object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <div className="absolute inset-x-6 bottom-6 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl text-white text-left text-xs font-extrabold sm:text-sm border border-white/10 flex items-center justify-between">
                  <span>{t("Custom cabinetry and modern quartz island finish by ACC Construction", "Gabinetes personalizados y acabado de isla de cuarzo moderno por ACC Construction")}</span>
                  <span className="bg-[#008A22] text-[10px] uppercase font-black tracking-widest px-2.5 py-1 rounded-full hidden sm:inline-block">{t("Remodeling", "Remodelación")}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              {/* Booking card */}
              <div className="rounded-3xl border border-[#008A22]/20 bg-[#008A22]/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-[#0F172A]">
                  {t("Ready to love your home again?", "¿Listo para amar su hogar de nuevo?")}
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
                      <span className="text-sm font-black text-[#0F172A]">Wheat Ridge, CO (we come to you)</span>
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

          {/* Row 2: Specialties Table Grid (Spans Full Container Width 100%) */}
          <div className="border-t border-slate-100 pt-16 space-y-12 text-left">
            <div className="space-y-4">
              <h2 className="font-display font-black text-[#0F172A] text-2xl sm:text-4xl tracking-tight">
                {t("Our Remodeling Services", "Nuestros Servicios de Remodelación")}
              </h2>
              <p className="text-slate-500 font-medium text-base sm:text-lg max-w-3xl leading-relaxed">
                {t("We bring full project execution, load-bearing expertise, and premium craftsmanship to every room.", "Aportamos ejecución completa de proyectos, experiencia en muros de carga y artesanía de primera calidad a cada habitación.")}
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
              
              {/* Kitchen table */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between bg-white">
                <div>
                  <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
                    <h3 className="font-display font-black text-white text-base sm:text-lg">
                      {t("Kitchen Remodeling", "Remodelación de Cocinas")}
                    </h3>
                  </div>
                  <table className="w-full text-left border-collapse">
                    <tbody className="divide-y divide-slate-100">
                      {kitchenDetails.map((row) => (
                        <tr key={row.item} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4 font-extrabold text-[#0F172A] text-[13px] sm:text-sm w-[40%]">{row.item}</td>
                          <td className="px-6 py-4 text-xs sm:text-sm text-slate-500 font-medium">{row.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bathroom table */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between bg-white">
                <div>
                  <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
                    <h3 className="font-display font-black text-white text-base sm:text-lg">
                      {t("Bathroom Remodeling", "Remodelación de Baños")}
                    </h3>
                  </div>
                  <table className="w-full text-left border-collapse">
                    <tbody className="divide-y divide-slate-100">
                      {bathroomDetails.map((row) => (
                        <tr key={row.item} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4 font-extrabold text-[#0F172A] text-[13px] sm:text-sm w-[40%]">{row.item}</td>
                          <td className="px-6 py-4 text-xs sm:text-sm text-slate-500 font-medium">{row.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Basement table */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between bg-white">
                <div>
                  <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
                    <h3 className="font-display font-black text-white text-base sm:text-lg">
                      {t("Basement Remodeling", "Remodelación de Sótanos")}
                    </h3>
                  </div>
                  <table className="w-full text-left border-collapse">
                    <tbody className="divide-y divide-slate-100">
                      {basementDetails.map((row) => (
                        <tr key={row.item} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4 font-extrabold text-[#0F172A] text-[13px] sm:text-sm w-[40%]">{row.item}</td>
                          <td className="px-6 py-4 text-xs sm:text-sm text-slate-500 font-medium">{row.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Whole-Home table */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between bg-white">
                <div>
                  <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
                    <h3 className="font-display font-black text-white text-base sm:text-lg">
                      {t("Whole-Home Remodeling", "Remodelación de Toda la Casa")}
                    </h3>
                  </div>
                  <table className="w-full text-left border-collapse">
                    <tbody className="divide-y divide-slate-100">
                      {wholeHomeDetails.map((row) => (
                        <tr key={row.item} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4 font-extrabold text-[#0F172A] text-[13px] sm:text-sm w-[40%]">{row.item}</td>
                          <td className="px-6 py-4 text-xs sm:text-sm text-slate-500 font-medium">{row.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>

          {/* Row 3: Interior vs. Exterior Remodeling (Width 100%) */}
          <div className="border-t border-slate-100 pt-16 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("Interior vs. Exterior Remodeling", "Remodelación Interior vs. Exterior")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl leading-relaxed">
                {t("As a full-service residential general contractor, ACC Construction LLC handles both interior spaces and exterior transformations.", "Como contratista general residencial de servicio completo, ACC Construction LLC se encarga tanto de espacios interiores como de transformaciones exteriores.")}
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {/* Interior Remodeling card */}
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl hover:bg-white hover:border-[#008A22]/20 hover:shadow-md transition-all duration-300">
                <h4 className="font-black text-[#0F172A] text-lg mb-4 text-[#008A22]">{t("Interior Remodeling", "Remodelación Interior")}</h4>
                <ul className="space-y-2.5">
                  {interiorList.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-slate-700 font-semibold text-xs sm:text-sm">
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#008A22] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exterior Remodeling card */}
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl hover:bg-white hover:border-[#008A22]/20 hover:shadow-md transition-all duration-300">
                <h4 className="font-black text-[#0F172A] text-lg mb-4 text-[#008A22]">{t("Exterior Remodeling", "Remodelación Exterior")}</h4>
                <ul className="space-y-2.5">
                  {exteriorList.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-slate-700 font-semibold text-xs sm:text-sm">
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#008A22] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm font-semibold italic mt-4 pl-1">
              {t("For full exterior concrete work (driveways, sidewalks, foundations), see our dedicated service pages.", "Para trabajos completos de concreto exterior (entradas, aceras, cimientos), consulte nuestras páginas de servicio dedicadas.")}
            </p>
          </div>

          {/* Row 4: Signs You Are Ready to Remodel (Interactive Checklist) */}
          <div className="border-t border-slate-100 pt-16 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("Signs You Are Ready to Remodel", "Señales de que está Listo para Remodelar")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl leading-relaxed">
                {t("If you checked one or more of these boxes, call us for a free consultation. No pressure. Just honest advice.", "Si marcó una o más de estas casillas, llámenos para una consulta gratuita. Sin presiones. Solo asesoramiento honesto.")}
              </p>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {warningSigns.map((sign, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 border border-slate-200/80 rounded-2xl bg-white hover:border-[#008A22]/20 hover:shadow-sm transition-all duration-300">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-slate-200 bg-white text-[#008A22] hover:border-[#008A22]/40 transition-colors">
                    <CheckSquare className="h-4 w-4 text-[#008A22]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">{sign}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 5: Remodeling Process (Timeline) */}
          <div className="border-t border-slate-100 pt-16 space-y-10 text-left">
            <div className="space-y-3">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("The Remodeling Process – No Surprises", "El Proceso de Remodelación: Sin Sorpresas")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl">
                {t("Our step-by-step approach ensures your remodeling project finishes on budget, on schedule, and to exact specifications.", "Nuestro enfoque paso a paso garantiza que su proyecto de remodelación termine dentro del presupuesto, a tiempo y según las especificaciones exactas.")}
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

      <EmergencyCTA />
    </>
  );
}
