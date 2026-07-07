import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight, Mail, MapPin, ArrowRight, CheckSquare } from "lucide-react";
import cleanImg from "@/assets/driveway-construction-clean.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/driveway")({
  head: () => ({
    meta: [
      { title: "Driveway Concrete Paving & Replacement Wheat Ridge | ACC Construction LLC" },
      { name: "description", content: "ACC Construction LLC provides professional concrete driveway installation, replacements, sub-base preparation, and stamped concrete solutions in Colorado." },
      { property: "og:title", content: "Driveways | ACC Construction LLC" },
      { property: "og:description", content: "Premium concrete driveway services in Colorado's Front Range." },
    ],
    links: [
      { rel: "canonical", href: "https://www.accconstructionllc.com/services/driveway" }
    ],
  }),
  component: DrivewayPage,
});

function DrivewayPage() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("New Driveway Installation", "Nueva Instalación de Entrada de Autos"),
      desc: t("Building from scratch on new construction or undeveloped property. We handle grading, base preparation, forming, pouring, and finishing.", "Construcción desde cero en nuevas construcciones o terrenos sin desarrollar. Nos encargamos de la nivelación, preparación de la base, encofrado, vertido y acabado.")
    },
    {
      title: t("Driveway Replacement", "Reemplazo de Entrada de Autos"),
      desc: t("Remove old, cracked, or sinking concrete. Properly prepare the sub-base. Pour new, reinforced concrete that stays level.", "Retirada de concreto viejo, agrietado o hundido. Preparación adecuada de la subbase. Vertido de concreto nuevo y por encima del nivel del suelo.")
    },
    {
      title: t("Driveway Repair & Resurfacing", "Reparación y Revestimiento de Entradas"),
      desc: t("For driveways with minor cracking or surface spalling. We evaluate whether repair is viable or replacement is the better long-term solution.", "Para entradas de autos con grietas menores o descascarillado superficial. Evaluamos si la reparación es viable o si el reemplazo es la mejor solución a largo plazo.")
    },
    {
      title: t("Concrete Driveways (Our Specialty)", "Entradas de Concreto (Nuestra Especialidad)"),
      desc: t("We pour standard, stamped, colored, and exposed aggregate concrete driveways. Concrete is the #1 choice for Colorado due to its durability and reflectivity (melts snow faster than asphalt).", "Vertemos entradas de concreto estándar, estampado, de color y con agregados expuestos. El concreto es la opción número 1 para Colorado debido a su durabilidad y reflectividad (derrite la nieve más rápido que el asfalto).")
    }
  ];

  const problemTable = [
    {
      problem: t("Cracking", "Agrietamiento"),
      why: t("Freeze-thaw cycles cause water to expand inside concrete.", "Los ciclos de congelación y descongelación hacen que el agua se expanda dentro del concreto."),
      solution: t("Proper reinforcement (rebar or fiber mesh) + control joints placed correctly.", "Refuerzo adecuado (varilla o malla de fibra) + juntas de control colocadas correctamente.")
    },
    {
      problem: t("Settling / Sinking", "Asentamiento / Hundimiento"),
      why: t("Expansive clay soil beneath the driveway shrinks and swells.", "El suelo de arcilla expansiva debajo de la entrada de autos se contrae y se hincha."),
      solution: t("4–6 inches of compacted gravel base + proper drainage grading.", "4–6 pulgadas de base de grava compactada + nivelación de drenaje adecuada.")
    },
    {
      problem: t("Scaling / Spalling", "Descamación / Descascarillado"),
      why: t("De-icing salts damage poorly cured concrete.", "Las sales de deshielo dañan el concreto mal curado."),
      solution: t("Low water-to-cement ratio + proper curing time (minimum 7 days).", "Baja relación agua-cemento + tiempo de curado adecuado (mínimo 7 días).")
    },
    {
      problem: t("Poor Drainage", "Mal Drenaje"),
      why: t("Driveway slopes toward the garage or house.", "La entrada de autos se inclina hacia el garaje o la casa."),
      solution: t("Precision grading to direct water to the street or yard.", "Nivelación de precisión para dirigir el agua hacia la calle o el patio.")
    }
  ];

  const processSteps = [
    { step: "1", title: t("Free Consultation", "Consulta Gratis"), desc: t("Call (720) 298-7777 or email leonholley45@gmail.com. We discuss your driveway goals and budget.", "Llame al (720) 298-7777 o envíe un correo a leonholley45@gmail.com. Discutimos sus objetivos de la entrada de autos y su presupuesto.") },
    { step: "2", title: t("On-Site Evaluation", "Evaluación en el Sitio"), desc: t("We inspect your existing driveway (if any). Check for drainage issues, base failure, and underlying soil problems.", "Inspeccionamos su entrada de autos existente (si la hay). Verificamos problemas de drenaje, fallas en la base y problemas de suelo subyacente.") },
    { step: "3", title: t("Written Estimate", "Estimación por Escrito"), desc: t("Line-item quote including demolition (if needed), base preparation, materials, reinforcement, pouring, finishing, and cleanup.", "Cotización detallada que incluye demolición (si es necesaria), preparación de la base, materiales, refuerzo, vertido, acabado y limpieza.") },
    { step: "4", title: t("Permitting", "Permisos"), desc: t("As a licensed contractor, we pull any required permits. You do nothing.", "Como contratistas autorizados, tramitamos todos los permisos necesarios. Usted no hace nada.") },
    { step: "5", title: t("Demolition & Excavation", "Demolición y Excavación"), desc: t("We remove old concrete and excavate to proper depth (typically 8–12 inches total).", "Retiramos el concreto viejo y excavamos a la profundidad adecuada (generalmente de 8 a 12 pulgadas en total).") },
    { step: "6", title: t("Base Installation", "Instalación de la Base"), desc: t("4–6 inches of compacted Class 5 gravel. This is the secret to a driveway that doesn’t sink.", "4–6 pulgadas de grava compactada Clase 5. Este es el secreto de una entrada de autos que no se hunde.") },
    { step: "7", title: t("Forming & Reinforcement", "Encofrado y Refuerzo"), desc: t("Wood forms installed. Rebar or wire mesh placed.", "Moldes de madera instalados. Varilla de refuerzo o malla de alambre colocada.") },
    { step: "8", title: t("Pouring & Finishing", "Vertido y Acabado"), desc: t("Concrete poured, leveled, floated, and finished to your specification (broom finish, exposed aggregate, or stamped).", "Concreto vertido, nivelado, flotado y acabado según sus especificaciones (acabado de escoba, agregado expuesto o estampado).") },
    { step: "9", title: t("Curing & Sealing", "Curado y Sellado"), desc: t("Proper curing covered. Control joints cut. Sealing recommended for added protection.", "Curado adecuado cubierto. Juntas de control cortadas. Sellado recomendado para mayor protección.") },
    { step: "10", title: t("Final Walkthrough", "Inspección Final"), desc: t("You inspect. Only when you are 100% satisfied do we close the project.", "Usted inspecciona. Solo cuando esté 100% satisfecho cerramos el proyecto.") }
  ];

  const warningSigns = [
    t("Large cracks wider than ½ inch", "Grietas grandes de más de ½ pulgada"),
    t("Sections of concrete that are more than 1 inch higher or lower than adjacent sections", "Secciones de concreto que están más de 1 pulgada más altas o más bajas que las adyacentes"),
    t("Pooling water near your garage door", "Agua acumulada cerca de la puerta de su garaje"),
    t("Crumbling edges or surface spalling", "Bordes desmoronados o descascarillado de la superficie"),
    t("Previous patches that have failed", "Parches anteriores que han fallado"),
    t("The driveway is more than 20–25 years old", "La entrada de autos tiene más de 20 a 25 años")
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("Driveways", "Entradas de Autos")}
        title={t("Driveways That Survive Colorado Winters", "Entradas de Autos que Sobreviven a los Inviernos de Colorado")}
        subtitle={t("25+ years of concrete experience. Licensed. Insured. Bonded. Based in Wheat Ridge and serving the entire Front Range.", "Más de 25 años de experiencia en concreto. Con Licencia, Asegurado y Bajo Fianza. Con sede en Wheat Ridge y sirviendo a todo el Front Range.")}
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
                      "Your driveway is one of the first things people notice about your home. Cracks, sinking sections, and uneven settling do more than look bad—they create tripping hazards, drainage problems, and lower your property value.",
                      "La entrada de su casa es una de las primeras cosas que la gente nota. Las grietas, las secciones hundidas y los asentamientos desiguales hacen más que verse mal: crean riesgos de tropiezo, problemas de drenaje y reducen el valor de su propiedad."
                    )}
                  </p>
                </div>
                
                <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed pl-1">
                  {t(
                    "At ACC Construction LLC, we have been installing and replacing driveways across Colorado for over 25 years. We are a licensed, insured, and bonded residential general contractor based in Wheat Ridge. We understand exactly how Colorado’s extreme freeze-thaw cycles, expansive clay soils, and heavy Front Range traffic damage concrete. And we know exactly how to build driveways that last.",
                    "En ACC Construction LLC, hemos estado instalando y reemplazando entradas de autos en todo Colorado durante más de 25 años. Somos un contratista general residencial autorizado, asegurado y bajo fianza con sede en Wheat Ridge. Entendemos exactamente cómo los ciclos extremos de congelación-descongelación de Colorado, los suelos de arcilla expansiva y el tráfico pesado del Front Range dañan el concreto. Y sabemos exactamente cómo construir entradas de autos que duren."
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
                  alt={t("ACC Concrete Driveway Paving Work", "Trabajos de pavimentación de entradas de concreto de ACC")}
                  className="w-full h-auto max-h-[500px] object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <div className="absolute inset-x-6 bottom-6 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl text-white text-left text-xs font-extrabold sm:text-sm border border-white/10 flex items-center justify-between">
                  <span>{t("Professional unbranded concrete pouring and finishing in Colorado", "Vertido y acabado de concreto profesional sin marca en Colorado")}</span>
                  <span className="bg-[#008A22] text-[10px] uppercase font-black tracking-widest px-2.5 py-1 rounded-full hidden sm:inline-block">{t("Expert Paring", "Pavimentación Experta")}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              {/* Booking card */}
              <div className="rounded-3xl border border-[#008A22]/20 bg-[#008A22]/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-[#0F172A]">
                  {t("Ready for a driveway that lasts?", "¿Listo para una entrada de autos duradera?")}
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

          {/* Row 2: Specialties Showcase (Spans Full Container Width 100%) */}
          <div className="border-t border-slate-100 pt-16 space-y-12 text-left">
            <div className="space-y-4">
              <h2 className="font-display font-black text-[#0F172A] text-2xl sm:text-4xl tracking-tight">
                {t("Our Driveway Services", "Nuestros Servicios de Entradas de Autos")}
              </h2>
              <p className="text-slate-500 font-medium text-base sm:text-lg max-w-3xl leading-relaxed">
                {t("We offer comprehensive design, installation, and replacement solutions built specifically for Colorado's conditions.", "Ofrecemos soluciones integrales de diseño, instalación y reemplazo construidas específicamente para las condiciones de Colorado.")}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
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

          {/* Row 3: The Colorado Problem (Premium styled Table) */}
          <div className="border-t border-slate-100 pt-16 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("The Colorado Problem – Why Driveways Fail Here", "El Problema de Colorado: Por qué fallan las entradas de autos aquí")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl leading-relaxed">
                {t("Our 25+ years of local experience means we build for these conditions from day one.", "Nuestros más de 25 años de experiencia local significan que construimos para estas condiciones desde el primer día.")}
              </p>
            </div>
            
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                    <th className="px-6 py-4 w-[180px]">{t("Problem", "Problema")}</th>
                    <th className="px-6 py-4 w-[280px]">{t("Why It Happens", "Por Qué Sucede")}</th>
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

          {/* Row 4: Signs You Need a New Driveway (Interactive Checklist) */}
          <div className="border-t border-slate-100 pt-16 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("Signs You Need a New Driveway", "Señales de que Necesita una Nueva Entrada")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl leading-relaxed">
                {t("If you check one or more of these boxes, call us for a free evaluation.", "Si marca una o más de estas casillas, llámenos para una evaluación gratuita.")}
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

          {/* Row 5: Process details */}
          <div className="border-t border-slate-100 pt-16 space-y-10 text-left">
            <div className="space-y-3">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("Our Driveway Process", "Nuestro Proceso para Entradas de Autos")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl">
                {t("Our structured, transparent process ensures details are perfect from demolition to final seal.", "Nuestro proceso estructurado y transparente garantiza que los detalles sean perfectos desde la demolición hasta el sellado final.")}
              </p>
            </div>
            
            <div className="relative border-l border-slate-200 ml-4 pl-8 space-y-6">
              {processSteps.map((s) => (
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
