import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, Mail, MapPin, ArrowRight, CheckSquare } from "lucide-react";
import cleanImg from "@/assets/patio-construction-clean.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/patios")({
  head: () => ({
    meta: [
      { title: "Custom Concrete & Paver Patios Wheat Ridge | ACC Construction LLC" },
      { name: "description", content: "ACC Construction LLC provides premium custom brick paver patios, natural flagstone patios, stamped concrete, and patio restorations in Colorado." },
      { property: "og:title", content: "Patios | ACC Construction LLC" },
      { property: "og:description", content: "Expert patio design and installation services in Colorado's Front Range." },
    ],
    links: [
      { rel: "canonical", href: "https://www.accconstructionllc.com/services/patios" }
    ],
  }),
  component: PatiosPage,
});

function PatiosPage() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("Custom Brick Paver Layouts", "Diseños de Adoquines de Ladrillo"),
      desc: t("Custom patterns, borders, and color variations. We lay concrete and clay brick pavers on dense compacted bases with sand joint stabilization.", "Patrones, bordes y variaciones de color a medida. Colocamos adoquines de concreto y arcilla sobre bases compactadas densas con estabilización de juntas.")
    },
    {
      title: t("Poured Concrete Patios", "Patios de Concreto Vertido"),
      desc: t("Heavy-duty reinforced slabs with optional broom finish for slip resistance. Perfect for clean, modern backyard entertainment spaces.", "Losas reforzadas de alta resistencia con acabado de escoba opcional para resistencia al deslizamiento. Perfecto para espacios modernos de entretenimiento.")
    },
    {
      title: t("Outdoor Seating & Dining", "Áreas para Sentarse y Cenar"),
      desc: t("Design-build layouts with custom stone seat walls, fire pit integrations, and dining zones.", "Diseño y construcción de distribuciones con muros de piedra para sentarse, chimeneas integradas y zonas de comedor al aire libre.")
    },
    {
      title: t("Natural Flagstone Walkways", "Senderos de Laja Natural"),
      desc: t("Beautiful natural flagstone pathways laid on gravel or mortar bases, blending into your backyard landscape.", "Hermosos senderos de laja natural colocados sobre bases de grava o mortero, integrándose al diseño de su jardín.")
    },
    {
      title: t("Patio Restorations & Leveling", "Restauración y Nivelación de Patios"),
      desc: t("We resolve uneven brick settles, clean weed growth, re-sand joints, and level cracked concrete slabs.", "Resolvemos asentamientos desiguales de adoquines, eliminamos malezas, rellenamos juntas con arena y nivelamos losas de concreto agrietadas.")
    },
    {
      title: t("Stamped & Stained Concrete", "Concreto Estampado y Teñido"),
      desc: t("Premium textured concrete simulating wood, slate, or stone tile, colored to match your home's exterior design.", "Concreto texturizado de primera calidad que simula madera, pizarra o losas de piedra, coloreado para combinar con el exterior de su hogar.")
    }
  ];

  const materials = [
    {
      name: t("Concrete Pavers", "Adoquines de Concreto"),
      pros: t("Extremely durable, easy to repair individually, zero cracking, rich design options", "Extremadamente duraderos, fáciles de reparar de forma individual, sin grietas, ricas opciones de diseño"),
      cons: t("Higher initial cost than standard concrete", "Mayor costo inicial que el concreto estándar"),
      bestFor: t("Premium patios, driveways, and high-traffic pathways", "Patios premium, entradas de autos y senderos de alto tráfico")
    },
    {
      name: t("Standard Concrete", "Concreto Estándar Vertido"),
      pros: t("Cost-effective, clean modern look, fast installation", "Económico, aspecto moderno y limpio, instalación rápida"),
      cons: t("Can crack over time, low color customizability", "Puede agrietarse con el tiempo, baja personalización de colores"),
      bestFor: t("Large patio dining areas, utility pads, simple designs", "Grandes comedores de patio, plataformas de servicios públicos, diseños simples")
    },
    {
      name: t("Natural Flagstone", "Laja Natural (Flagstone)"),
      pros: t("Stunning organic aesthetics, stays cooler in summer, long lifespan", "Estética orgánica impresionante, se mantiene más fresco en verano, larga vida útil"),
      cons: t("Irregular surfaces, labor-intensive install", "Superficies irregulares, instalación laboriosa"),
      bestFor: t("Rustic paths, seating circles, custom garden accents", "Caminos rústicos, círculos para sentarse, detalles personalizados en jardines")
    },
    {
      name: t("Stamped Concrete", "Concreto Estampado"),
      pros: t("Custom stone/wood appearance, lower cost than natural stone, seamless", "Aspecto de piedra o madera a medida, menor costo que la piedra natural, sin juntas"),
      cons: t("Requires regular sealing, slippery when wet if untextured", "Requiere sellado regular, resbaladizo cuando está húmedo si no está texturizado"),
      bestFor: t("Decorative patios, pool decks, custom textures", "Patios decorativos, cubiertas de piscinas, texturas personalizadas")
    }
  ];

  const warningSigns = [
    t("Uneven brick pavers creating tripping hazards", "Adoquines desiguales que crean riesgos de tropiezo"),
    t("Deep cracks in concrete slabs wider than ¼\"", "Grietas profundas en losas de concreto de más de ¼ de pulgada"),
    t("Stubborn weed growth between brick joints", "Crecimiento persistente de malezas entre las juntas de los adoquines"),
    t("Discolored, faded, or unsealed surfaces", "Superficies descoloridas, desgastadas o sin sellar"),
    t("Water pooling near the foundation during rains", "Acumulación de agua cerca de los cimientos durante las lluvias"),
    t("Outdated, cramped, or dysfunctional layout", "Diseño anticuado, estrecho o disfuncional")
  ];

  const steps = [
    { step: "1", title: t("Free Consultation", "Consulta Gratis"), desc: t("We discuss your vision, budget, and material preferences.", "Discutimos su visión, presupuesto y preferencias de materiales.") },
    { step: "2", title: t("On-Site Measure & Grade", "Medición y Nivelación en el Sitio"), desc: t("We evaluate your yard's slope, check drainage, and take dimensions.", "Evaluamos la pendiente de su jardín, verificamos el drenaje y tomamos medidas.") },
    { step: "3", title: t("Written Proposal", "Propuesta por Escrito"), desc: t("Line-item quote covering base excavation, gravel, reinforcement, materials, and labor.", "Cotización detallada que cubre la excavación de la base, grava, refuerzo, materiales y mano de obra.") },
    { step: "4", title: t("Permitting & HOA", "Permisos y HOA"), desc: t("We pull required municipal permits and provide documents for HOA approvals.", "Tramitamos los permisos municipales necesarios y proporcionamos documentos para aprobaciones de HOA.") },
    { step: "5", title: t("Demolition & Grading", "Demolición y Nivelación"), desc: t("We clear old concrete or grass, excavating to proper depth (typically 6-8 inches total).", "Retiramos el concreto viejo o el césped, excavando a la profundidad adecuada (generalmente de 6 a 8 pulgadas en total).") },
    { step: "6", title: t("Base Compaction", "Compactación de la Base"), desc: t("We lay and mechanically compact 4 inches of Class 5 gravel base. This prevents paver settling.", "Colocamos y compactamos mecánicamente 4 pulgadas de base de grava Clase 5. Esto evita el asentamiento de los adoquines.") },
    { step: "7", title: t("Form Setting", "Colocación de Moldes"), desc: t("Wood forms set at a 1-2% slope for drainage. Rebar grids or wire mesh laid.", "Moldes de madera colocados con una pendiente del 1 al 2% para el drenaje. Varillas o malla de alambre colocada.") },
    { step: "8", title: t("Pour or Laying", "Vertido o Colocación"), desc: t("Concrete poured and finished, or pavers laid individually on a sand bed.", "Concreto vertido y acabado, o adoquines colocados individualmente sobre una cama de arena.") },
    { step: "9", title: t("Joint Sand & Sealing", "Arena de Juntas y Sellado"), desc: t("Polymeric sand swept into paver joints to lock them, followed by premium protective sealer.", "Arena polimérica barrida en las juntas de los adoquines para fijarlos, seguida de un sellador protector de primera calidad.") },
    { step: "10", title: t("Walkthrough & Cleanup", "Inspección y Limpieza"), desc: t("We clean the workspace, inspect the grade, and ensure you are 100% satisfied.", "Limpiamos el espacio de trabajo, inspeccionamos la nivelación y nos aseguramos de que esté 100% satisfecho.") }
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("Patios", "Patios")}
        title={t("Custom Concrete & Stone Patios", "Patios Personalizados de Concreto y Piedra")}
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
                      "Transform your backyard with a custom-built patio tailored to your lifestyle. At ACC Construction LLC, we specialize in high-durability brick pavers, natural flagstone, and decorative stamped concrete layouts.",
                      "Transforme su patio trasero con un diseño a la medida. En ACC Construction LLC, nos especializamos en adoquines de alta durabilidad, laja natural y concreto estampado decorativo."
                    )}
                  </p>
                </div>
                
                <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed pl-1">
                  {t(
                    "Our expert crew handles complete subgrade preparation, drainage planning, and robust sealing to ensure your outdoor patio space remains beautiful and level for years to come. Whether you prefer a rustic stone pathway or a seamless modern concrete slab for backyard barbecues, we build exactly for Colorado's clay expansion and heavy freeze-thaw shifts.",
                    "Nuestro equipo se encarga de la preparación de la base, el drenaje y el sellado de alta resistencia para garantizar que su patio se mantenga hermoso y nivelado por años. Ya sea que prefiera un camino de piedra rústico o una losa de concreto moderna y sin juntas para barbacoas en el patio trasero, construimos específicamente para los cambios de arcilla y congelación de Colorado."
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
                  alt={t("ACC Custom Backyard Stone Patio and Fire Pit Showcase", "Exhibición de patio de piedra y chimenea personalizada de ACC")}
                  className="w-full h-auto max-h-[500px] object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <div className="absolute inset-x-6 bottom-6 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl text-white text-left text-xs font-extrabold sm:text-sm border border-white/10 flex items-center justify-between">
                  <span>{t("Custom flagstone pavers and modern stone fire pit layout built by ACC Construction", "Adoquines de laja a medida y diseño moderno de chimenea de piedra construido por ACC Construction")}</span>
                  <span className="bg-[#008A22] text-[10px] uppercase font-black tracking-widest px-2.5 py-1 rounded-full hidden sm:inline-block">{t("Outdoor Living", "Vida al Aire Libre")}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              {/* Booking card */}
              <div className="rounded-3xl border border-[#008A22]/20 bg-[#008A22]/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-[#0F172A]">
                  {t("Ready to get started?", "¿Listo para comenzar?")}
                </h3>
                <p className="mt-2 text-sm text-slate-500 font-semibold leading-relaxed">
                  {t("Request a transparent, itemized quote for your custom patio design and build project.", "Solicite una cotización detallada y transparente para su diseño y construcción de patio.")}
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

          {/* Row 2: Patio Services Grid (Spans Full Container Width 100%) */}
          <div className="border-t border-slate-100 pt-16 space-y-12 text-left">
            <div className="space-y-4">
              <h2 className="font-display font-black text-[#0F172A] text-2xl sm:text-4xl tracking-tight">
                {t("Our Patio Specialties", "Nuestras Especialidades en Patios")}
              </h2>
              <p className="text-slate-500 font-medium text-base sm:text-lg max-w-3xl leading-relaxed">
                {t("We bring premium stone layouts, structural seat walls, and durable concrete engineering to your backyard.", "Aportamos diseños de piedra de primera calidad, muros de asiento estructurales e ingeniería de concreto duradera a su patio trasero.")}
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

          {/* Row 3: Patio Materials Comparison (Table) */}
          <div className="border-t border-slate-100 pt-16 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("Backyard Patio Materials Comparison", "Comparación de Materiales para Patios Traseros")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl leading-relaxed">
                {t("Choosing the right material depends on your landscape goals, budget, and desired maintenance level.", "La elección del material adecuado depende de sus objetivos de diseño, presupuesto y nivel de mantenimiento deseado.")}
              </p>
            </div>
            
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                    <th className="px-6 py-4 w-[180px]">{t("Material", "Material")}</th>
                    <th className="px-6 py-4 w-[280px]">{t("Pros", "Ventajas")}</th>
                    <th className="px-6 py-4">{t("Cons / Limitations", "Desventajas / Limitaciones")}</th>
                    <th className="px-6 py-4 w-[220px]">{t("Best For", "Ideal Para")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {materials.map((m) => (
                    <tr key={m.name} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-4 font-black text-[#0F172A] text-sm group-hover:text-[#008A22] transition-colors">
                        {m.name}
                      </td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        {m.pros}
                      </td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                        {m.cons}
                      </td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-slate-700 font-bold leading-relaxed">
                        {m.bestFor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Row 4: Signs You Need a Patio Upgrade (Checklist) */}
          <div className="border-t border-slate-100 pt-16 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("Signs You Need a Patio Upgrade", "Señales de que Necesita una Actualización de Patio")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl leading-relaxed">
                {t("If you experience any of these backyard issues, contact us for a free estimate.", "Si experimenta alguno de estos problemas en su patio, contáctenos para un presupuesto gratuito.")}
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
                {t("Our Patio Installation Process", "Nuestro Proceso de Instalación de Patios")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl">
                {t("We manage the entire project from grading and excavation to polymeric sanding and final wash.", "Gestionamos todo el proyecto, desde la nivelación y excavación hasta la arena polimérica y el lavado final.")}
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
