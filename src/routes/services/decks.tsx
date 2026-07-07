import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, Mail, MapPin, ArrowRight, CheckSquare } from "lucide-react";
import cleanImg from "@/assets/deck-construction-clean.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/decks")({
  head: () => ({
    meta: [
      { title: "Custom Wood & Composite Decks Wheat Ridge | ACC Construction LLC" },
      { name: "description", content: "ACC Construction LLC provides premium custom wood decks, Trex composite decking, multi-story deck engineering, railings, and deck restorations in Colorado." },
      { property: "og:title", content: "Decks | ACC Construction LLC" },
      { property: "og:description", content: "Professional deck construction and outdoor structural services in Colorado's Front Range." },
    ],
    links: [
      { rel: "canonical", href: "https://www.accconstructionllc.com/services/decks" }
    ],
  }),
  component: DecksPage,
});

function DecksPage() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("Custom Wood Decks", "Terrazas de Madera Personalizadas"),
      desc: t("Classic natural pine or cedar lumber decks built on heavy structural concrete footings.", "Terrazas clásicas de pino natural o cedro construidas sobre zapatas de concreto estructural pesado.")
    },
    {
      title: t("Low-Maintenance Composite Decks", "Terrazas Compuestas de Bajo Mantenimiento"),
      desc: t("Premium Trex or TimberTech composite deck surfaces that never splinter, fade, warp, or require staining.", "Superficies de material compuesto Trex o TimberTech premium que no se astillan, decoloran ni requieren teñido.")
    },
    {
      title: t("Multi-Level Deck Engineering", "Ingeniería de Terrazas Multinivel"),
      desc: t("High-level residential decks requiring deep-set concrete columns, structural stairs, and safety platforms.", "Terrazas elevadas que requieren columnas de concreto profundas, escaleras estructurales y plataformas de seguridad.")
    },
    {
      title: t("Railing Replacements & Upgrades", "Reemplazo e Instalación de Barandillas"),
      desc: t("Modern black metal horizontal cables, horizontal wood slats, or custom railings built to code.", "Cables horizontales modernos de metal negro, listones de madera horizontales o barandas personalizadas según el código.")
    },
    {
      title: t("Deck Restorations & Staining", "Restauración y Teñido de Terrazas"),
      desc: t("Complete power washing, sanding, replacing dry-rotted joist/deck boards, and applying premium waterproofing stains.", "Lavado a presión, lijado, reemplazo de tablas o vigas podridas y aplicación de tintes impermeabilizantes premium.")
    },
    {
      title: t("Pergolas & Covered Roofs", "Pérgolas y Cubiertas de Techo"),
      desc: t("Integrated custom patio pergolas, gazebos, or covered deck roofs matching your home's architecture.", "Pérgolas personalizadas integradas, gazebos o techos de terraza cubiertos que combinan con su arquitectura.")
    }
  ];

  const materials = [
    {
      name: t("Pressure-Treated Pine", "Pino Tratado a Presión"),
      lifespan: t("15 - 20 Years", "15 - 20 Años"),
      maintenance: t("High (clean & stain every 2 years)", "Alto (limpiar y teñir cada 2 años)"),
      pros: t("Lowest initial cost, solid structural load capacity", "Menor costo inicial, sólida capacidad de carga estructural"),
      cons: t("Prone to warping and splintering in Colorado weather", "Propenso a deformarse y astillarse en el clima de Colorado")
    },
    {
      name: t("Redwood / Cedar", "Secuoya / Cedro"),
      lifespan: t("20 - 25 Years", "20 - 25 Años"),
      maintenance: t("High (annual wash & seal to keep color)", "Alto (lavado y sellado anual para conservar el color)"),
      pros: t("Natural wood beauty, stays cooler under sun, insect-resistant", "Belleza de madera natural, se mantiene fresco bajo el sol, resistente a insectos"),
      cons: t("Moderately expensive, softer wood prone to dents", "Moderadamente caro, madera más blanda propensa a abolladuras")
    },
    {
      name: t("Premium Composite", "Material Compuesto (Composite)"),
      lifespan: t("25 - 30+ Years", "25 - 30+ Años"),
      maintenance: t("Extremely Low (simple soap and water wash)", "Extremadamente Bajo (lavado simple con agua y jabón)"),
      pros: t("No splinters, zero warping, color stays vibrant, highly durable", "Sin astillas, cero deformación, color vibrante y alta durabilidad"),
      cons: t("Higher initial material and install cost", "Mayor costo inicial de materiales e instalación")
    },
    {
      name: t("Cable & Metal Railings", "Barandas de Metal y Cable"),
      lifespan: t("30+ Years", "30+ Años"),
      maintenance: t("Low (annual check of cable tension)", "Bajo (revisión anual de tensión de cables)"),
      pros: t("Modern premium aesthetics, unobstructed mountain views", "Estética moderna premium, vistas despejadas a las montañas"),
      cons: t("High cost of specialized tension fittings", "Alto costo de los accesorios de tensión especializados")
    }
  ];

  const warningSigns = [
    t("Soft, rotting, or spongy wood on framing joists", "Madera blanda, podrida o esponjosa en las vigas del marco"),
    t("Wobbly railings that fail to support adult weight", "Barandillas tambaleantes que no soportan el peso de un adulto"),
    t("Soil erosion or cracked concrete footer columns", "Erosión del suelo o columnas de zapata de concreto agrietadas"),
    t("Splintering, warped, or loose deck boards", "Tablas de la terraza astilladas, deformadas o sueltas"),
    t("Ledger board separating from house siding", "Tabla de apoyo (ledger board) que se separa del revestimiento de la casa"),
    t("Rusted or missing hangers, bolts, and connector plates", "Colgadores, pernos y placas de conexión oxidados o faltantes")
  ];

  const steps = [
    { step: "1", title: t("Vision & Assessment", "Visión y Evaluación"), desc: t("We inspect your existing deck/yard, discuss wood vs. composite, and draft ideas.", "Inspeccionamos su terraza/patio, discutimos madera vs. compuesto y redactamos ideas.") },
    { step: "2", title: t("Blueprint & Engineering", "Plano e Ingeniería"), desc: t("We design framing blueprints showing dimensions, beam spans, and load calculations.", "Diseñamos planos de estructura que muestran dimensiones, luces de vigas y cargas.") },
    { step: "3", title: t("Permitting & HOA", "Permisos y HOA"), desc: t("We submit plans to local building departments and coordinate with HOA committees.", "Presentamos los planos a los departamentos de construcción y coordinamos con la HOA.") },
    { step: "4", title: t("Demolition & Grading", "Demolición y Nivelación"), desc: t("We disassemble old structures and excavate footers to solid clay-bearing depths.", "Desarmamos estructuras viejas y excavamos las zapatas a profundidades sólidas.") },
    { step: "5", title: t("Concrete Footer Pour", "Vertido de Zapata de Concreto"), desc: t("We pour deep-set concrete footings below Colorado's 36\" frost line to prevent shifting.", "Vertemos zapatas por debajo de la línea de congelación de 36\" para evitar desplazamientos.") },
    { step: "6", title: t("Structural Framing", "Estructura Estructural"), desc: t("We build heavy-duty framing using pressure-treated wood joists, beams, and hangers.", "Construimos la estructura de alta resistencia con vigas y soportes de madera tratada.") },
    { step: "7", title: t("Deck Board Installation", "Instalación de Tablas"), desc: t("We lay composite or natural wood decking with hidden fastener clips for a clean surface.", "Colocamos tablas de compuesto o madera natural con clips ocultos para una superficie limpia.") },
    { step: "8", title: t("Custom Railing Fit", "Ajuste de Barandillas"), desc: t("We install code-compliant metal, cable, or wood railings with post collars.", "Instalamos barandas de metal, cable o madera que cumplen con los códigos vigentes.") },
    { step: "9", title: t("Trim & Fascia Detailing", "Detalles de Molduras y Fascia"), desc: t("We wrap exposed structural beams and stairs with matching finish boards.", "Cubrimos las vigas estructurales expuestas y las escaleras con tablas de acabado a juego.") },
    { step: "10", title: t("Walkthrough & Cleanup", "Inspección y Limpieza"), desc: t("We clear all wood scrap, perform a final inspection, and review care instructions.", "Retiramos todos los restos de madera, realizamos la inspección final y revisamos el cuidado.") }
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("Decks", "Terrazas")}
        title={t("Custom Decks & Outdoor Structures", "Terrazas Personalizadas y Estructuras")}
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
                      "Extend your indoor living space outwards with a premium custom deck. At ACC Construction LLC, we design and build durable, code-compliant wood and composite decks tailored to your lifestyle.",
                      "Amplíe su espacio habitable hacia afuera con una terraza personalizada de primera calidad. En ACC Construction LLC, diseñamos y construimos terrazas de madera y material compuesto duraderas."
                    )}
                  </p>
                </div>
                
                <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed pl-1">
                  {t(
                    "We utilize high-strength structural footers poured below Colorado's 36\" frost line, robust framing materials, and premium hidden fastener systems to ensure your outdoor decking remains beautiful, solid, and safe for years to come. Whether you prefer the organic warmth of cedar lumber or the low-maintenance lifespan of composite deck materials, our expert carpenters deliver outstanding craftsmanship.",
                    "Utilizamos zapatas estructurales de alta resistencia vertidas por debajo de la línea de congelación de 36\" de Colorado, materiales de estructura robustos y sistemas de fijación ocultos. Ya sea que prefiera la calidez del cedro o la vida útil de los materiales compuestos, nuestros carpinteros entregan una artesanía sobresaliente."
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
                  alt={t("ACC Custom Outdoor Wood Deck and Modern Cable Railing Showcase", "Exhibición de terraza de madera y baranda de cable moderna de ACC")}
                  className="w-full h-auto max-h-[500px] object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <div className="absolute inset-x-6 bottom-6 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl text-white text-left text-xs font-extrabold sm:text-sm border border-white/10 flex items-center justify-between">
                  <span>{t("Custom wooden deck boards and horizontal metal railings built by ACC Construction", "Tablas de terraza de madera a medida y barandas metálicas horizontales construidas por ACC Construction")}</span>
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
                  {t("Request a transparent, itemized quote for your custom wood or composite deck project.", "Solicite una cotización detallada y transparente para su proyecto de terraza de madera o compuesto.")}
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

          {/* Row 2: Deck specialties Grid */}
          <div className="border-t border-slate-100 pt-16 space-y-12 text-left">
            <div className="space-y-4">
              <h2 className="font-display font-black text-[#0F172A] text-2xl sm:text-4xl tracking-tight">
                {t("Our Custom Decking Specialties", "Nuestras Especialidades en Terrazas")}
              </h2>
              <p className="text-slate-500 font-medium text-base sm:text-lg max-w-3xl leading-relaxed">
                {t("We bring premium wood carpentry, multi-level deck structures, covered roofs, and structural restorations to your home.", "Aportamos carpintería de madera premium, estructuras de terrazas multinivel, techos cubiertos y restauraciones a su hogar.")}
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

          {/* Row 3: Decking Materials Comparison (Table) */}
          <div className="border-t border-slate-100 pt-16 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("Decking Materials Comparison", "Comparación de Materiales para Terrazas")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl leading-relaxed">
                {t("Choosing the right decking lumber or composite depends on your budget, style, and care willingness.", "Elegir la madera o el compuesto adecuado depende de su presupuesto, estilo y disposición para el mantenimiento.")}
              </p>
            </div>
            
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                    <th className="px-6 py-4 w-[180px]">{t("Material", "Material")}</th>
                    <th className="px-6 py-4 w-[120px]">{t("Lifespan", "Vida Útil")}</th>
                    <th className="px-6 py-4 w-[220px]">{t("Maintenance Required", "Mantenimiento")}</th>
                    <th className="px-6 py-4 w-[280px]">{t("Pros", "Ventajas")}</th>
                    <th className="px-6 py-4">{t("Cons / Drawbacks", "Desventajas / Inconvenientes")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {materials.map((m) => (
                    <tr key={m.name} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-4 font-black text-[#0F172A] text-sm group-hover:text-[#008A22] transition-colors">
                        {m.name}
                      </td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-slate-700 font-bold leading-relaxed">
                        {m.lifespan}
                      </td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                        {m.maintenance}
                      </td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        {m.pros}
                      </td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                        {m.cons}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Row 4: Signs You Need a Structural Upgrade (Checklist) */}
          <div className="border-t border-slate-100 pt-16 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("Signs Your Deck Needs a Structural Upgrade", "Señales de que su Terraza Necesita una Actualización")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl leading-relaxed">
                {t("Safety is our top priority. Inspect your deck for these warning signs of aging or code violations.", "La seguridad es nuestra prioridad. Revise su terraza en busca de estas señales de envejecimiento.")}
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

          {/* Row 5: 10-Step Custom Decking Process */}
          <div className="border-t border-slate-100 pt-16 space-y-10 text-left">
            <div className="space-y-3">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("Our Custom Deck Installation Process", "Nuestro Proceso de Instalación de Terrazas")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl">
                {t("We strictly manage blueprints, municipal permits, deep-set concrete footers, and finish carpentry.", "Gestionamos los planos, permisos municipales, zapatas de concreto profundo y carpintería de acabado.")}
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
