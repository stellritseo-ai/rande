import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, Mail, MapPin, ArrowRight, CheckSquare } from "lucide-react";
import cleanImg from "@/assets/foundation-construction-clean.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/foundation")({
  head: () => ({
    meta: [
      { title: "Concrete Foundation Repair & Installation Wheat Ridge | ACC Construction LLC" },
      { name: "description", content: "ACC Construction LLC provides professional foundation repair, replacements, structural stabilization, and slab pours in Colorado." },
      { property: "og:title", content: "Foundation Services | ACC Construction LLC" },
      { property: "og:description", content: "Expert concrete foundation installations and repairs in Colorado's Front Range." },
    ],
    links: [
      { rel: "canonical", href: "https://www.accconstructionllc.com/services/foundation" }
    ],
  }),
  component: FoundationPage,
});

function FoundationPage() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("New Foundation Installation", "Nueva Instalación de Cimientos"),
      desc: t("For new construction, additions, or garage builds. We handle excavation, forming, rebar placement, concrete pouring, curing, and waterproofing.", "Para nuevas construcciones, adiciones o garajes. Nos encargamos de la excavación, encofrado, colocación de varillas, vertido de concreto, curado y permeabilización.")
    },
    {
      title: t("Foundation Repair", "Reparación de Cimientos"),
      desc: t("Cracked walls? Bowing basement walls? Settling corners? We assess the damage and implement permanent repair solutions.", "¿Paredes agrietadas? ¿Paredes del sótano inclinadas? ¿Esquinas asentadas? Evaluamos los daños e implementamos soluciones de reparación permanentes.")
    },
    {
      title: t("Foundation Replacement", "Reemplazo de Cimientos"),
      desc: t("When repair is no longer viable, we carefully lift, support, or replace failing foundation sections—or the entire foundation if necessary.", "Cuando la reparación ya no es viable, levantamos, apoyamos o reemplazamos con cuidado las secciones de cimentación defectuosas, o todo el cimiento si es necesario.")
    },
    {
      title: t("Foundation Stabilization", "Estabilización de Cimientos"),
      desc: t("Preventative work for homes showing early signs of movement. Pier systems, wall anchors, and carbon fiber reinforcement.", "Trabajo preventivo para viviendas que muestran signos tempranos de movimiento. Sistemas de pilares, anclajes de pared y refuerzo de fibra de carbono.")
    },
    {
      title: t("Crawl Space Foundations", "Cimientos de Espacio de Rastreo"),
      desc: t("For homes with crawl spaces instead of basements. We repair, encapsulate, and reinforce crawl space foundations.", "Para casas con espacios de rastreo en lugar de sótanos. Reparamos, encapsulamos y reforzamos los cimientos del espacio de rastreo.")
    },
    {
      title: t("Concrete Slab Foundations", "Cimientos de Losa de Concreto"),
      desc: t("For garages, additions, and homes built on slabs. We pour new slabs and repair settled or cracked existing slabs.", "Para garajes, adiciones y viviendas construidas sobre losas. Vertemos nuevas losas y reparamos losas existentes asentadas o agrietadas.")
    }
  ];

  const problemTable = [
    {
      problem: t("Expansive Clay Soil", "Suelo Arcilloso Expansivo"),
      why: t("Clay soil absorbs water and swells, then dries and shrinks. This repeated movement cracks foundations.", "El suelo arcilloso absorbe agua y se hincha, luego se seca y se contrae. Este movimiento repetido agrieta los cimientos."),
      solution: t("Proper soil compaction + deep footings + drainage systems + pier stabilization when needed.", "Compactación adecuada del suelo + zapatas profundas + sistemas de drenaje + estabilización de pilares cuando sea necesario.")
    },
    {
      problem: t("Freeze-Thaw Cycles", "Ciclos de Congelación-Descongelación"),
      why: t("Water in soil freezes (expands) and thaws (contracts), pushing and pulling on foundation walls.", "El agua en el suelo se congela (se expande) y se derrite (se contrae), empujando y tirando de las paredes de los cimientos."),
      solution: t("Footings poured below frost line (minimum 36 inches in Colorado). Proper drainage to prevent water accumulation.", "Zapatas vertidas por debajo de la línea de congelación (mínimo 36 pulgadas en Colorado). Drenaje adecuado para evitar la acumulación de agua.")
    },
    {
      problem: t("Poor Drainage", "Mal Drenaje"),
      why: t("Downspouts and grading direct water toward the foundation instead of away. Hydrostatic pressure pushes against basement walls.", "Los bajantes y la nivelación dirigen el agua hacia los cimientos en lugar de alejarla. La presión hidrostática empuja contra las paredes del sótano."),
      solution: t("Exterior waterproofing + French drains + proper grading + sump pump systems.", "Impermeabilización exterior + drenajes franceses + nivelación adecuada + sistemas de bomba de sumidero.")
    },
    {
      problem: t("Tree Roots", "Raíces de Árboles"),
      why: t("Large trees near the home extract moisture from soil, causing uneven settlement.", "Los árboles grandes cerca de la casa extraen la humedad del suelo, causando un asentamiento desigual."),
      solution: t("Root barriers + soil moisture management + underpinning.", "Barreras de raíces + gestión de la humedad del suelo + apuntalamiento.")
    },
    {
      problem: t("Original Poor Construction", "Construcción Original Deficiente"),
      why: t("Many Colorado homes from the 1960s–1990s were built with insufficient rebar, shallow footings, or weak concrete mixes.", "Muchas casas de Colorado de los años 1960 a 1990 fueron construidas con varillas de refuerzo insuficientes, zapatas poco profundas o mezclas de concreto débiles."),
      solution: t("Complete replacement or structural reinforcement to modern standards.", "Reemplazo completo o refuerzo estructural según los estándares modernos.")
    }
  ];

  const exteriorWarnings = [
    t("Horizontal or stair-step cracks in exterior brick or block walls", "Grietas horizontales o en forma de escalera en paredes exteriores de ladrillo o bloque"),
    t("Gaps around window or door frames", "Espacios alrededor de los marcos de ventanas o puertas"),
    t("Chimney leaning or separating from the house", "Chimenea inclinada o separándose de la casa"),
    t("Cracks in driveway, patio, or sidewalk near the foundation", "Grietas en la entrada de autos, patio o acera cerca de los cimientos"),
    t("Water pooling against foundation walls", "Acumulación de agua contra las paredes de los cimientos")
  ];

  const interiorWarnings = [
    t("Cracks in drywall (especially above door frames or corners)", "Grietas en paneles de yeso (especialmente arriba de marcos de puertas o esquinas)"),
    t("Doors or windows that stick, won’t latch, or have visible gaps", "Puertas o ventanas que se atascaran, no cierran o tienen espacios visibles"),
    t("Sloping, bouncing, or uneven floors", "Pisos inclinados, rebotantes o desiguales"),
    t("Cracks in tile, vinyl, or concrete slab floors", "Grietas en pisos de baldosas, vinilo o losas de concreto"),
    t("Basement walls bowing inward or showing horizontal cracks", "Paredes del sótano arqueadas hacia adentro o con grietas horizontales"),
    t("Cabinets or counters pulling away from walls", "Gabinetes o encimeras separándose de las paredes")
  ];

  const steps = [
    { step: "1", title: t("Free Consultation & Inspection", "Consulta e Inspección Gratis"), desc: t("Call (720) 298-7777 or email leonholley45@gmail.com. We schedule a site visit. We inspect interior and exterior foundation conditions.", "Llame al (720) 298-7777 o envíe un correo a leonholley45@gmail.com. Programamos una visita. Inspeccionamos las condiciones interiores y exteriores del cimiento.") },
    { step: "2", title: t("Diagnosis & Written Report", "Diagnóstico e Informe por Escrito"), desc: t("We identify the cause of the problem (soil, drainage, original construction, etc.). We provide a written assessment with photos and measurements.", "Identificamos la causa del problema (suelo, drenaje, construcción original, etc.). Proporcionamos una evaluación escrita con fotos y medidas.") },
    { step: "3", title: t("Detailed Estimate", "Estimación Detallada"), desc: t("Line-item quote including all repair methods, materials, permits, and timeline. No surprises.", "Cotización detallada que incluye todos los métodos de reparación, materiales, permisos y plazos. Sin sorpresas.") },
    { step: "4", title: t("Permitting", "Permisos"), desc: t("As a licensed contractor, we pull all required structural permits. Your municipality will inspect our work.", "Como contratistas autorizados, tramitamos todos los permisos estructurales necesarios. Su municipio inspeccionará nuestro trabajo.") },
    { step: "5", title: t("Repair or Replacement", "Reparación o Reemplazo"), desc: t("We implement the solution—pier systems, wall anchors, carbon fiber, slab jacking, or full replacement. Work is done systematically to protect your home’s structure during repairs.", "Implementamos la solución: sistemas de pilares, anclajes de pared, fibra de carbono, elevación de losa o reemplazo completo. El trabajo se realiza sistemáticamente para proteger la estructura de su hogar.") },
    { step: "6", title: t("Drainage & Waterproofing (If Needed)", "Drenaje e Impermeabilización (Si es Necesario)"), desc: t("Exterior excavation, French drains, waterproof membranes, or interior drain tile + sump pump.", "Excavación exterior, drenajes franceses, membranas impermeables o tubería de drenaje interior + bomba de sumidero.") },
    { step: "7", title: t("Final Inspection", "Inspección Final"), desc: t("City/county inspector signs off. We walk through with you.", "El inspector de la ciudad/condado aprueba el trabajo. Realizamos una inspección con usted.") },
    { step: "8", title: t("Restoration (If Needed)", "Restauración (Si es Necesaria)"), desc: t("We repair drywall, trim, and other interior finishes disturbed during foundation work.", "Reparamos paneles de yeso, molduras y otros acabados interiores afectados durante los trabajos de cimentación.") }
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("Foundations", "Cimientos")}
        title={t("Foundations Built for Colorado Soil – Not Just Built to Code", "Cimientos Construidos para el Suelo de Colorado, No Solo para Cumplir el Código")}
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
                      "Your foundation is the single most important structural element of your home. When it fails, everything above it fails—walls crack, floors slope, doors stick, and your property value drops.",
                      "El cimiento es el elemento estructural más importante de su hogar. Cuando falla, todo lo que está encima falla: las paredes se agrietan, los pisos se inclinan, las puertas se atascan y el valor de su propiedad disminuye."
                    )}
                  </p>
                </div>
                
                <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed pl-1">
                  {t(
                    "At ACC Construction LLC, we have been installing, repairing, and replacing foundations across Colorado for over 25 years. We are a licensed, insured, and bonded residential general contractor based in Wheat Ridge. We understand exactly how Colorado’s expansive clay soils, extreme freeze-thaw cycles, and poor drainage damage foundations. More importantly, we know how to fix them permanently. This is not handyman work. This is structural work. Hire a licensed professional.",
                    "En ACC Construction LLC, hemos estado instalando, reparando y reemplazando cimientos en todo Colorado durante más de 25 años. Somos un contratista general residencial autorizado, asegurado y bajo fianza con sede en Wheat Ridge. Entendemos exactamente cómo los suelos de arcilla expansiva de Colorado, los ciclos extremos de congelación y descongelación y el mal drenaje dañan los cimientos. Más importante aún, sabemos cómo solucionarlo de forma permanente. Este no es trabajo de un ayudante común. Este es un trabajo estructural. Contrate a un profesional con licencia."
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
                  alt={t("ACC Structural Foundation Formwork Showcase", "Exhibición de encofrado de cimientos estructurales de ACC")}
                  className="w-full h-auto max-h-[500px] object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <div className="absolute inset-x-6 bottom-6 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl text-white text-left text-xs font-extrabold sm:text-sm border border-white/10 flex items-center justify-between">
                  <span>{t("Engineered residential foundation formwork and steel reinforcing rebar grid", "Encofrado de cimientos residenciales de ingeniería y cuadrícula de varillas de refuerzo de acero")}</span>
                  <span className="bg-[#008A22] text-[10px] uppercase font-black tracking-widest px-2.5 py-1 rounded-full hidden sm:inline-block">{t("Structure", "Estructura")}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              {/* Booking card */}
              <div className="rounded-3xl border border-[#008A22]/20 bg-[#008A22]/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-[#0F172A]">
                  {t("Do not wait for small cracks to grow.", "No espere a que las pequeñas grietas crezcan.")}
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
                  <span className="bg-white px-2.5 py-1 rounded-full border border-slate-200/60">{t("Free evaluations", "Evaluaciones gratis")}</span>
                  <span className="bg-white px-2.5 py-1 rounded-full border border-slate-200/60">{t("Licensed", "Con Licencia")}</span>
                  <span className="bg-white px-2.5 py-1 rounded-full border border-slate-200/60">{t("Insured", "Asegurado")}</span>
                  <span className="bg-white px-2.5 py-1 rounded-full border border-slate-200/60">{t("Bonded", "Bajo Fianza")}</span>
                  <span className="bg-white px-2.5 py-1 rounded-full border border-slate-200/60">{t("25+ Years", "25+ Años")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Foundation Services Grid (Spans Full Container Width 100%) */}
          <div className="border-t border-slate-100 pt-16 space-y-12 text-left">
            <div className="space-y-4">
              <h2 className="font-display font-black text-[#0F172A] text-2xl sm:text-4xl tracking-tight">
                {t("Our Foundation Services", "Nuestros Servicios de Cimentación")}
              </h2>
              <p className="text-slate-500 font-medium text-base sm:text-lg max-w-3xl leading-relaxed">
                {t("From preventative anchors to full slab replacements, we secure your home from the ground up.", "Desde anclajes preventivos hasta reemplazos completos de losas, aseguramos su hogar desde los cimientos.")}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div 
                  key={service.title} 
                  className="group/card relative bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-[#008A22]/30 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,138,34,0.12)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#008A22]/10 text-[#008A22] group-hover/card:bg-[#008A22] group-hover/card:text-white transition-colors duration-300">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <h4 className="font-extrabold text-[#0F172A] text-base group-hover/card:text-[#008A22] transition-colors">{service.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3: The Colorado Problem (Detailed Table) */}
          <div className="border-t border-slate-100 pt-16 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("The Colorado Problem – Why Foundations Fail Here", "El Problema de Colorado: Por qué fallan los cimientos aquí")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl leading-relaxed">
                {t("Our 25+ years of local experience means we have seen every foundation failure pattern in Colorado. We know exactly how to fix them.", "Nuestros más de 25 años de experiencia local significan que hemos visto cada patrón de falla de cimientos en Colorado. Sabemos exactamente cómo solucionarlos.")}
              </p>
            </div>
            
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                    <th className="px-6 py-4 w-[180px]">{t("Problem", "Problema")}</th>
                    <th className="px-6 py-4 w-[280px]">{t("What Causes It", "Qué Lo Causa")}</th>
                    <th className="px-6 py-4">{t("ACC Construction Solution", "Solución de ACC Construction")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {problemTable.map((row) => (
                    <tr key={row.problem} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-4 font-black text-[#0F172A] text-sm group-hover:text-[#008A22] transition-colors">
                        {row.problem}
                      </td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        {row.why}
                      </td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                        {row.solution}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Row 4: Signs You Have a Foundation Problem (Checklists) */}
          <div className="border-t border-slate-100 pt-16 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("Signs You Have a Foundation Problem", "Señales de que Tiene un Problema de Cimientos")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl leading-relaxed">
                {t("Do not wait until the damage is severe. Early intervention saves money.", "No espere hasta que el daño sea grave. La intervención temprana ahorra dinero.")}
              </p>
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2">
              
              {/* Exterior warnings */}
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl hover:bg-white hover:border-[#008A22]/20 hover:shadow-md transition-all duration-300">
                <h4 className="font-black text-[#0F172A] text-lg mb-4 text-[#008A22]">{t("Exterior Signs", "Señales Exteriores")}</h4>
                <div className="space-y-3">
                  {exteriorWarnings.map((sign, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-200 bg-white text-[#008A22]">
                        <CheckSquare className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interior warnings */}
              <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl hover:bg-white hover:border-[#008A22]/20 hover:shadow-md transition-all duration-300">
                <h4 className="font-black text-[#0F172A] text-lg mb-4 text-[#008A22]">{t("Interior Signs", "Señales Interiores")}</h4>
                <div className="space-y-3">
                  {interiorWarnings.map((sign, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-200 bg-white text-[#008A22]">
                        <CheckSquare className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Row 5: Process steps timeline */}
          <div className="border-t border-slate-100 pt-16 space-y-10 text-left">
            <div className="space-y-3">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("Our Foundation Process", "Nuestro Proceso de Cimentación")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl">
                {t("We work systematically to protect your home's structural integrity at every stage.", "Trabajamos sistemáticamente para proteger la integridad estructural de su hogar en cada etapa.")}
              </p>
            </div>
            
            <div className="relative border-l border-slate-200 ml-4 pl-8 space-y-6">
              {steps.map((s) => (
                <div key={s.step} className="relative group/step p-6 border border-slate-200/80 rounded-2xl bg-white hover:border-[#008A22]/30 hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
                  {/* Step Dot */}
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
