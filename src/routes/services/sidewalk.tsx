import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, Mail, MapPin, ArrowRight } from "lucide-react";
import cleanImg from "@/assets/sidewalk-construction-clean.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/sidewalk")({
  head: () => ({
    meta: [
      { title: "Concrete Sidewalk Installation & Walkway Repair | ACC Construction LLC" },
      { name: "description", content: "ACC Construction LLC provides professional sidewalk replacement, walkway installation, ADA ramp compliance, and trip hazard grinding in Colorado." },
      { property: "og:title", content: "Sidewalks & Walkways | ACC Construction LLC" },
      { property: "og:description", content: "Expert sidewalk installation and repairs in Colorado's Front Range." },
    ],
    links: [
      { rel: "canonical", href: "https://www.accconstructionllc.com/services/sidewalk" }
    ],
  }),
  component: SidewalkPage,
});

function SidewalkPage() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("New Sidewalk Installation", "Nueva Instalación de Aceras"),
      desc: t("Brand new walkways for new construction, landscaping projects, or connecting existing pathways. We handle grading, forming, pouring, and finishing.", "Senderos completamente nuevos para construcciones nuevas, proyectos de paisajismo o conexión de caminos existentes. Nos encargamos de nivelar, encofrar, verter y acabar.")
    },
    {
      title: t("Sidewalk Replacement", "Reemplazo de Aceras"),
      desc: t("Remove old, cracked, or settled concrete. Properly prepare the sub-base. Pour new, reinforced concrete that stays level.", "Eliminación de concreto viejo, agrietado o hundido. Preparación adecuada de la subbase. Vertido de concreto nuevo y reforzado que se mantiene nivelado.")
    },
    {
      title: t("Sidewalk Repair", "Reparación de Aceras"),
      desc: t("For minor cracking, spalling, or edge damage. We evaluate whether repair is viable or replacement is the better long-term solution.", "Para grietas menores, descascarillado o daños en los bordes. Evaluamos si la reparación es viable o si el reemplazo es la mejor solución a largo plazo.")
    },
    {
      title: t("Trip Hazard Removal", "Eliminación de Riesgos de Tropiezo"),
      desc: t("Grinding down raised edges (1/2 inch or more) or replacing sunken sections. ADA-compliant solutions for residential and commercial properties.", "Esmerilado de bordes elevados (1/2 pulgada o más) o reemplazo de secciones hundidas. Soluciones que cumplen con ADA para propiedades residenciales y comerciales.")
    },
    {
      title: t("Public Sidewalk Repair (City-Owned)", "Reparación de Aceras Públicas (Propiedad de la Ciudad)"),
      desc: t("Many Colorado cities hold homeowners responsible for the public sidewalk in front of their property. We handle city permits, inspections, and code-compliant repairs.", "Muchas ciudades de Colorado responsabilizan a los propietarios por la acera pública frente a su propiedad. Tramitamos permisos, inspecciones y reparaciones conformes al código.")
    },
    {
      title: t("Decorative Sidewalks", "Aceras Decorativas"),
      desc: t("Stamped, colored, or exposed aggregate finishes for garden paths, pool surrounds, and landscape walkways.", "Acabados estampados, coloreados o de agregados expuestos para caminos de jardín, perímetros de piscinas y senderos de jardín.")
    }
  ];

  const problemTable = [
    {
      problem: t("Heaving (Upward Movement)", "Levantamiento (Movimiento Ascendente)"),
      why: t("Freeze-thaw cycles push concrete upward. Expansive clay soils swell when wet.", "Los ciclos de congelación y descongelación empujan el concreto hacia arriba. Los suelos arcillosos expansivos se hinchan cuando están húmedos."),
      solution: t("4–6 inches of compacted gravel base + proper drainage + control joints.", "4–6 pulgadas de base de grava compactada + drenaje adecuado + juntas de control.")
    },
    {
      problem: t("Settling (Downward Movement)", "Asentamiento (Movimiento Descendente)"),
      why: t("Poorly compacted soil compresses under weight. Erosion washes away base material.", "El suelo mal compactado se comprime bajo el peso. La erosión arrastra el material de la base."),
      solution: t("Deep excavation + mechanical compaction + reinforced concrete (rebar or mesh).", "Excavación profunda + compactación mecánica + concreto reforzado (varillas o malla).")
    },
    {
      problem: t("Cracking", "Agrietamiento"),
      why: t("No control joints. Inadequate reinforcement. Improper concrete mix.", "Ausencia de juntas de control. Refuerzo inadecuado. Mezcla de concreto inadecuada."),
      solution: t("Control joints every 4–6 feet + rebar or fiber mesh + low water-to-cement ratio.", "Juntas de control cada 4-6 pies + varilla o malla de fibra + baja relación agua-cemento.")
    },
    {
      problem: t("Scaling / Spalling", "Descamación / Descascarillado"),
      why: t("De-icing salts damage poorly cured concrete. Air entrainment failure.", "Las sales de deshielo dañan el concreto mal curado. Falla en la incorporación de aire."),
      solution: t("Proper curing (minimum 7 days) + air-entrained concrete + sealing recommendation.", "Curado adecuado (mínimo 7 días) + concreto con aire incorporado + recomendación de sellado.")
    },
    {
      problem: t("Poor Drainage", "Mal Drenaje"),
      why: t("Sidewalk slopes toward house or street creates puddles and ice hazards.", "La acera se inclina hacia la casa o la calle, creando charcos y riesgos de hielo."),
      solution: t("Precision grading to 1–2% slope away from structures.", "Nivelación de precisión a una pendiente del 1 al 2% lejos de las estructuras.")
    },
    {
      problem: t("Tree Root Damage", "Daños por Raíces de Árboles"),
      why: t("Roots grow under sidewalk, lifting and cracking concrete.", "Las raíces crecen debajo de la acera, levantando y agrietando el concreto."),
      solution: t("Root barriers + proper base depth + consideration of tree removal or rerouting.", "Barreras de raíces + profundidad de base adecuada + consideración de retiro o desvío de árboles.")
    }
  ];

  const walkwayTypes = [
    { type: t("Public Sidewalk (City-Owned)", "Acera Pública (Propiedad de la Ciudad)"), use: t("Front of residential properties", "Frente de propiedades residenciales"), width: t("4–5 feet", "4–5 pies"), thick: t("4 inches", "4 pulgadas") },
    { type: t("Private Walkway", "Sendero Privado"), use: t("From driveway to front door", "Desde la entrada de autos a la puerta principal"), width: t("3–4 feet", "3–4 pies"), thick: t("4 inches", "4 pulgadas") },
    { type: t("Garden Path", "Camino de Jardín"), use: t("Through landscaping or yard", "A través del jardín o patio"), width: t("2–3 feet", "2–3 pies"), thick: t("3–4 inches", "3–4 pulgadas") },
    { type: t("Pool Surround", "Perímetro de Piscina"), use: t("Around swimming pools", "Alrededor de piscinas"), width: t("4–6 feet", "4–6 pies"), thick: t("4 inches (non-slip finish)", "4 pulgadas (acabado antideslizante)") },
    { type: t("Approach / Apron", "Rampa de Entrada / Delantal"), use: t("Driveway to street (public right-of-way)", "Entrada de autos a la calle (derecho de paso público)"), width: t("Varies by driveway width", "Varía según el ancho de la entrada"), thick: t("6 inches (reinforced)", "6 pulgadas (reforzado)") },
    { type: t("Decorative Walkway", "Sendero Decorativo"), use: t("Accent pathways", "Senderos decorativos de acento"), width: t("2–4 feet", "2–4 pies"), thick: t("4 inches", "4 pulgadas") }
  ];

  const steps = [
    { step: "1", title: t("Free Consultation", "Consulta Gratis"), desc: t("Call (720) 298-7777 or email leonholley45@gmail.com. We discuss your sidewalk concerns and goals.", "Llame al (720) 298-7777 o envíe un correo a leonholley45@gmail.com. Discutimos sus inquietudes y objetivos para la acera.") },
    { step: "2", title: t("On-Site Evaluation", "Evaluación en el Sitio"), desc: t("We inspect existing sidewalk (if any). Check for trip hazards, drainage issues, base failure, and tree root damage.", "Inspeccionamos la acera existente (si la hay). Verificamos peligros de tropiezo, problemas de drenaje, fallas en la base y daños por raíces de árboles.") },
    { step: "3", title: t("Written Estimate", "Estimación por Escrito"), desc: t("Line-item quote including demolition (if needed), base preparation, materials, reinforcement, pouring, finishing, and cleanup.", "Cotización detallada que incluye demolición (si es necesaria), preparación de la base, materiales, refuerzo, vertido, acabado y limpieza.") },
    { step: "4", title: t("Permitting", "Permisos"), desc: t("As a licensed contractor, we pull all required city/county permits. For public sidewalks, we handle the city’s inspection process.", "Como contratistas autorizados, tramitamos todos los permisos de la ciudad/condado. Para aceras públicas, nos encargamos de las inspecciones municipales.") },
    { step: "5", title: t("Demolition & Removal", "Demolición y Retiro"), desc: t("We remove old concrete and haul it away. Excavate to proper depth (typically 8–10 inches total).", "Retiramos el concreto viejo y lo transportamos. Excavamos a la profundidad adecuada (generalmente de 8 a 10 pulgadas en total).") },
    { step: "6", title: t("Base Installation", "Instalación de la Base"), desc: t("4–6 inches of compacted Class 5 gravel. Mechanically compacted in lifts. This prevents settling.", "4–6 pulgadas de grava Clase 5 compactada. Compactada mecánicamente en capas. Esto evita el hundimiento.") },
    { step: "7", title: t("Forming & Reinforcement", "Encofrado y Refuerzo"), desc: t("Wood forms installed at correct slope. Rebar or wire mesh placed.", "Moldes de madera instalados con la pendiente correcta. Varillas o malla metálica colocada.") },
    { step: "8", title: t("Pouring & Finishing", "Vertido y Acabado"), desc: t("Air-entrained concrete poured, leveled, floated, and finished to specification (broom finish for slip resistance).", "Vertido de concreto con aire incorporado, nivelado, flotado y acabado según especificaciones (acabado de escoba para resistencia al deslizamiento).") },
    { step: "9", title: t("Control Joint Cutting", "Corte de Juntas de Control"), desc: t("Joints cut every 4–6 feet to control where cracking occurs.", "Juntas cortadas cada 4-6 pies para controlar dónde ocurren las grietas.") },
    { step: "10", title: t("Curing", "Curado"), desc: t("Proper curing covered. Minimum 7 days for full strength.", "Curado adecuado cubierto. Mínimo 7 días para alcanzar la resistencia total.") },
    { step: "11", title: t("Final Walkthrough", "Inspección Final"), desc: t("You inspect. We ensure proper slope, smooth finish, and no trip hazards.", "Usted inspecciona. Garantizamos la pendiente adecuada, un acabado liso y la ausencia de riesgos de tropiezo.") }
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("Sidewalks", "Aceras")}
        title={t("Safe, Level Sidewalks That Pass Inspection – And Look Great Doing It", "Aceras Seguras y Niveladas que Pasan la Inspección y Lucen Increíbles")}
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
                      "A cracked, uneven, or sunken sidewalk is more than an eyesore. It is a liability. Tripping hazards cause falls, injuries, and lawsuits. Municipalities issue violation notices. Homebuyers discount their offers.",
                      "Una acera agrietada, irregular o hundida es más que algo desagradable a la vista. Es una responsabilidad legal. Los peligros de tropiezo provocan caídas, lesiones y demandas. Los municipios emiten notificaciones de infracción y los compradores de viviendas descuentan sus ofertas."
                    )}
                  </p>
                </div>
                
                <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed pl-1">
                  {t(
                    "At ACC Construction LLC, we have been installing, repairing, and replacing sidewalks across Colorado for over 25 years. We are a licensed, insured, and bonded residential general contractor based in Wheat Ridge. We understand exactly how Colorado’s freeze-thaw cycles and expansive clay soils heave and crack concrete walkways. We know the specific slope requirements (1% to 2% for drainage). And we build sidewalks that stay level, drain properly, and comply with all local codes.",
                    "En ACC Construction LLC, hemos estado instalando, reparando y reemplazando aceras en todo Colorado durante más de 25 años. Somos un contratista general residencial autorizado, asegurado y bajo fianza con sede en Wheat Ridge. Entendemos exactamente cómo los ciclos de congelación-descongelación de Colorado y los suelos de arcilla expansiva levantan y agrietan los senderos de concreto. Conocemos los requisitos de pendiente específicos (1% a 2% para drenaje) y construimos aceras que se mantienen niveladas, drenan adecuadamente y cumplen con todos los códigos locales."
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
                  alt={t("ACC Clean Concrete Sidewalk Paving Showcase", "Exhibición de pavimentación de aceras de concreto limpio de ACC")}
                  className="w-full h-auto max-h-[500px] object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <div className="absolute inset-x-6 bottom-6 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl text-white text-left text-xs font-extrabold sm:text-sm border border-white/10 flex items-center justify-between">
                  <span>{t("Slip-resistant concrete sidewalk path showing clean broom texture and borders", "Sendero de acera de concreto antideslizante que muestra textura y bordes de escoba limpios")}</span>
                  <span className="bg-[#008A22] text-[10px] uppercase font-black tracking-widest px-2.5 py-1 rounded-full hidden sm:inline-block">{t("Concrete Walkways", "Senderos de Concreto")}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              {/* Booking card */}
              <div className="rounded-3xl border border-[#008A22]/20 bg-[#008A22]/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-[#0F172A]">
                  {t("Don't let a cracked sidewalk become a liability.", "No deje que una acera agrietada sea una responsabilidad legal.")}
                </h3>
                <p className="mt-2 text-sm text-slate-500 font-semibold leading-relaxed">
                  {t("Contact us to resolve trip hazards or city inspection violations quickly.", "Contáctenos para resolver riesgos de tropiezo o infracciones de inspección de la ciudad rápidamente.")}
                </p>
                
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

          {/* Row 2: Sidewalk Services Grid (Spans Full Container Width 100%) */}
          <div className="border-t border-slate-100 pt-16 space-y-12 text-left">
            <div className="space-y-4">
              <h2 className="font-display font-black text-[#0F172A] text-2xl sm:text-4xl tracking-tight">
                {t("Our Sidewalk Services", "Nuestros Servicios de Aceras")}
              </h2>
              <p className="text-slate-500 font-medium text-base sm:text-lg max-w-3xl leading-relaxed">
                {t("From ADA-compliant ramps to public pathway repairs, we deliver level, code-compliant structures.", "Desde rampas que cumplen con la ley ADA hasta reparaciones de senderos públicos, entregamos estructuras niveladas que cumplen con el código.")}
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
                {t("The Colorado Problem – Why Sidewalks Fail Here", "El Problema de Colorado: Por qué fallan las aceras aquí")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl leading-relaxed">
                {t("Our 25+ years of local experience means we build sidewalks that survive Colorado winters.", "Nuestros más de 25 años de experiencia local significan que construimos aceras que sobreviven a los inviernos de Colorado.")}
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

          {/* Row 4: Types of Sidewalks We Build (Table) */}
          <div className="border-t border-slate-100 pt-16 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("Types of Sidewalks We Build", "Tipos de Aceras que Construimos")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl leading-relaxed">
                {t("We customize concrete thickness, reinforcement, and dimensions depending on property layout and use case.", "Personalizamos el espesor del concreto, el refuerzo y las dimensiones según el diseño de la propiedad y el caso de uso.")}
              </p>
            </div>
            
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                    <th className="px-6 py-4">{t("Type", "Tipo")}</th>
                    <th className="px-6 py-4">{t("Best For", "Ideal Para")}</th>
                    <th className="px-6 py-4 w-[160px]">{t("Typical Width", "Ancho Típico")}</th>
                    <th className="px-6 py-4 w-[180px]">{t("Typical Thickness", "Espesor Típico")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {walkwayTypes.map((row) => (
                    <tr key={row.type} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-4 font-black text-[#0F172A] text-sm group-hover:text-[#008A22] transition-colors">
                        {row.type}
                      </td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        {row.use}
                      </td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-slate-500 font-semibold">
                        {row.width}
                      </td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-slate-500 font-semibold">
                        {row.thick}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Row 5: Sidewalk Process timeline */}
          <div className="border-t border-slate-100 pt-16 space-y-10 text-left">
            <div className="space-y-3">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("Our Sidewalk Process", "Nuestro Proceso para Aceras")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl">
                {t("We handle everything from demolition and gravel base compaction to code-compliant slope inspection.", "Nos encargamos de todo, desde la demolición y compactación de la base de grava hasta la inspección de pendientes conforme al código.")}
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
