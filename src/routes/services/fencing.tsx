import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, Mail, MapPin, ArrowRight, CheckSquare } from "lucide-react";
import cleanImg from "@/assets/fencing-construction-clean.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/fencing")({
  head: () => ({
    meta: [
      { title: "Residential & Commercial Fencing Wheat Ridge | ACC Construction LLC" },
      { name: "description", content: "ACC Construction LLC provides premium wood privacy fences, low-maintenance vinyl fencing, ornamental aluminum, gates, and fence repairs in Colorado." },
      { property: "og:title", content: "Fencing | ACC Construction LLC" },
      { property: "og:description", content: "Professional fencing construction and boundary services in Colorado's Front Range." },
    ],
    links: [
      { rel: "canonical", href: "https://www.accconstructionllc.com/services/fencing" }
    ],
  }),
  component: FencingPage,
});

function FencingPage() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("Wood Privacy Fencing", "Cercas de Privacidad de Madera"),
      desc: t("Hand-built cedar or redwood fencing featuring vertical pickets, strong cedar posts, and custom trim caps.", "Cercas de cedro o secuoya construidas a mano, con tablas verticales, postes resistentes y molduras de acabado personalizadas.")
    },
    {
      title: t("Low-Maintenance Vinyl Fences", "Cercas de Vinilo de Bajo Mantenimiento"),
      desc: t("Heavy-duty PVC vinyl fences that never rot, warp, crack, or require staining or paint.", "Cercas de vinilo PVC de alta resistencia que nunca se pudren, deforman, agrietan ni requieren tintura o pintura.")
    },
    {
      title: t("Ornamental Aluminum & Iron", "Aluminio Ornamental y Hierro"),
      desc: t("Clean metal fences providing security and clear views, with powder-coated finishes to resist rust.", "Cercas de metal limpias que brindan seguridad y vistas despejadas, con acabados de pintura en polvo para resistir el óxido.")
    },
    {
      title: t("Commercial Chain-Link", "Cercas de Eslabones de Cadena Comerciales"),
      desc: t("Industrial chain-link fencing with security barbed wire and customized access control gates.", "Cercas industriales de eslabones de cadena con alambre de púas de seguridad y puertas de control de acceso.")
    },
    {
      title: t("Gate Installation & Automation", "Instalación y Automatización de Puertas"),
      desc: t("Custom pedestrian walkthrough doors and automated slide/swing driveway gates with security keypads.", "Puertas peatonales personalizadas y puertas automáticas corredizas o batientes para entradas con teclados de seguridad.")
    },
    {
      title: t("Fence Repairs & Resetting", "Reparación y Reinicio de Cercas"),
      desc: t("Complete fence post replacement, straightening sagging gates, and resetting storm-damaged lines in concrete.", "Reemplazo completo de postes, enderezamiento de puertas caídas y fijación en concreto de líneas dañadas por tormentas.")
    }
  ];

  const materials = [
    {
      name: t("Western Red Cedar", "Cedro Rojo Occidental"),
      lifespan: t("15 - 20 Years", "15 - 20 Años"),
      windResistance: t("Moderate (up to 70 MPH with reinforced posts)", "Moderada (hasta 70 MPH con postes reforzados)"),
      maintenance: t("Moderate (water sealer every 3 years)", "Moderado (sellador cada 3 años)"),
      idealFor: t("Backyard privacy, residential boundaries", "Privacidad del patio trasero, límites residenciales")
    },
    {
      name: t("Premium PVC Vinyl", "Vinilo PVC Premium"),
      lifespan: t("25 - 30+ Years", "25 - 30+ Años"),
      windResistance: t("High (with internally reinforced aluminum posts)", "Alta (con postes de aluminio reforzados internamente)"),
      maintenance: t("Very Low (wash with hose occasionally)", "Muy Bajo (lavar con manguera ocasionalmente)"),
      idealFor: t("Homeowners seeking zero-maintenance privacy", "Propietarios que buscan privacidad sin mantenimiento")
    },
    {
      name: t("Ornamental Aluminum", "Aluminio Ornamental"),
      lifespan: t("30 - 40+ Years", "30 - 40+ Años"),
      windResistance: t("Extremely High (allows wind to flow through)", "Extremadamente Alta (permite el flujo del viento)"),
      maintenance: t("Low (powder coating resists peeling)", "Bajo (revestimiento en polvo que resiste el pelado)"),
      idealFor: t("Property boundaries, pool enclosures, safety gates", "Límites de propiedad, cercados de piscinas, puertas de seguridad")
    },
    {
      name: t("Galvanized Chain-Link", "Eslabón de Cadena Galvanizado"),
      lifespan: t("25 - 30 Years", "25 - 30 Años"),
      windResistance: t("Extremely High (zero wind obstruction)", "Extremadamente Alta (cero obstrucción del viento)"),
      maintenance: t("Very Low (resists rust and weather damage)", "Muy Bajo (resiste el óxido y los daños climáticos)"),
      idealFor: t("Commercial yards, security barriers, pet enclosures", "Patios comerciales, barreras de seguridad, cercados para mascotas")
    }
  ];

  const warningSigns = [
    t("Leaning or sagging fence sections due to rotten posts", "Secciones de la cerca inclinadas o caídas debido a postes podridos"),
    t("Fence posts loose in soil or pulling out of concrete", "Postes de la cerca sueltos en el suelo o saliéndose del concreto"),
    t("Broken, split, or missing cedar pickets/panels", "Tablas o paneles de cedro rotos, partidos o faltantes"),
    t("Gate scraping on the ground or failing to latch securely", "Puerta que arrastra en el suelo o que no se cierra con seguridad"),
    t("Mildew growth, dry rot, or insect damage in wood", "Crecimiento de moho, podredumbre seca o daño por insectos en la madera"),
    t("Discolored, yellowed, or cracked vinyl fence posts", "Postes de vinilo descoloridos, amarillentos o agrietados")
  ];

  const steps = [
    { step: "1", title: t("Utility Line Marking", "Marcado de Líneas de Servicios"), desc: t("We call 811 to locate underground gas, electric, water, and sewer lines.", "Llamamos al 811 para localizar líneas subterráneas de gas, electricidad, agua y alcantarillado.") },
    { step: "2", title: t("Property Line Verification", "Verificación de Límites"), desc: t("We verify boundary lines and locate original property survey markers.", "Verificamos las líneas fronterizas y localizamos los marcadores de límites originales.") },
    { step: "3", title: t("Material Selection", "Selección de Materiales"), desc: t("Discuss styles, heights, spacing, and gate configurations.", "Discutimos estilos, alturas, espaciado y configuraciones de puertas.") },
    { step: "4", title: t("Post Layout & Staking", "Trazado y Estacado de Postes"), desc: t("We run layout strings and mark exact post holes (typically spaced 6-8 feet).", "Colocamos cuerdas de guía y marcamos los agujeros exactos para los postes.") },
    { step: "5", title: t("Deep Post Hole Digging", "Excavación de Agujeros"), desc: t("We dig post holes below Colorado's frost depth (typically 30-36 inches).", "Cavamos agujeros por debajo de la profundidad de congelación de Colorado (30-36 pulgadas).") },
    { step: "6", title: t("Structural Post Setting", "Fijación Estructural de Postes"), desc: t("Post set in concrete to ensure absolute vertical level and straight alignment.", "Postes colocados en concreto para garantizar la plomada vertical y la alineación recta.") },
    { step: "7", title: t("Horizontal Rail Installation", "Instalación de Rieles"), desc: t("We install 2x4 cedar horizontal rails using galvanized deck screws.", "Instalamos rieles horizontales de cedro de 2x4 utilizando tornillos galvanizados.") },
    { step: "8", title: t("Picket & Panel Construction", "Construcción de Tablas"), desc: t("Pickets nailed individually with overlapping gap spacing to accommodate wood expansion.", "Tablas clavadas individualmente con espaciado adecuado para la expansión de la madera.") },
    { step: "9", title: t("Custom Gate Engineering", "Ingeniería de Puertas"), desc: t("We build structural gate frames with diagonal cross-braces to prevent sagging.", "Construimos marcos estructurales de puertas con refuerzos diagonales para evitar que se caigan.") },
    { step: "10", title: t("Walkthrough & Clean Up", "Inspección y Limpieza"), desc: t("We clean dirt debris, check gate latch operations, and ensure customer satisfaction.", "Limpiamos los escombros de tierra, revisamos los pestillos de las puertas y aseguramos su satisfacción.") }
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("Fencing", "Cercas")}
        title={t("Durable Residential & Commercial Fencing", "Cercas Residenciales y Comerciales")}
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
                      "Enhance your property's privacy, safety, and curb appeal with custom fencing built by ACC Construction LLC. We design and build high-durability boundary lines tailored to your landscape.",
                      "Mejore la privacidad, la seguridad y el atractivo exterior de su propiedad con cercas personalizadas construidas por ACC Construction LLC. Diseñamos líneas de límite duraderas."
                    )}
                  </p>
                </div>
                
                <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed pl-1">
                  {t(
                    "Our skilled crew is experienced in setting straight, sturdy fences using wood, vinyl, chain link, and aluminum materials. We anchor all critical posts securely in deep concrete footers (poured below Colorado's frost line to prevent seasonal shifting) and construct custom gate systems that open smoothly and lock reliably year after year.",
                    "Nuestro equipo tiene experiencia en la colocación de cercas rectas y resistentes utilizando madera, vinilo, eslabones de cadena y aluminio. Anclamos todos los postes críticos en concreto (por debajo de la línea de congelación para evitar desplazamientos por el clima) y construimos puertas que funcionan suavemente."
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
                  alt={t("ACC Custom Backyard Cedar Wood Privacy Fence Showcase", "Exhibición de cerca de privacidad de madera de cedro personalizada de ACC")}
                  className="w-full h-auto max-h-[500px] object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <div className="absolute inset-x-6 bottom-6 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl text-white text-left text-xs font-extrabold sm:text-sm border border-white/10 flex items-center justify-between">
                  <span>{t("Sturdy wood privacy fence with vertical cedar pickets built by ACC Construction", "Cerca de privacidad de madera resistente con tablas verticales de cedro construida por ACC Construction")}</span>
                  <span className="bg-[#008A22] text-[10px] uppercase font-black tracking-widest px-2.5 py-1 rounded-full hidden sm:inline-block">{t("Fencing", "Cercas")}</span>
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
                  {t("Request a transparent, itemized quote for your boundary fencing or custom gate project.", "Solicite una cotización detallada y transparente para su proyecto de cerca o puerta personalizada.")}
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

          {/* Row 2: Fencing Specialties Grid */}
          <div className="border-t border-slate-100 pt-16 space-y-12 text-left">
            <div className="space-y-4">
              <h2 className="font-display font-black text-[#0F172A] text-2xl sm:text-4xl tracking-tight">
                {t("Our Custom Fencing Specialties", "Nuestras Especialidades en Cercas")}
              </h2>
              <p className="text-slate-500 font-medium text-base sm:text-lg max-w-3xl leading-relaxed">
                {t("We bring wood privacy lines, low-maintenance vinyl, ornamental aluminum, and customized security gates to your boundaries.", "Aportamos cercas de madera para privacidad, vinilo de bajo mantenimiento, aluminio ornamental y puertas de seguridad personalizadas.")}
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

          {/* Row 3: Fencing Materials Comparison (Table) */}
          <div className="border-t border-slate-100 pt-16 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("Fencing Materials Comparison Guide", "Guía de Comparación de Materiales de Cercas")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl leading-relaxed">
                {t("Review how wood, vinyl, aluminum, and chain-link fencing rank in wind resistance, life, and maintenance.", "Revise cómo se clasifican los diferentes materiales en resistencia al viento, vida útil y mantenimiento.")}
              </p>
            </div>
            
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                    <th className="px-6 py-4 w-[180px]">{t("Material", "Material")}</th>
                    <th className="px-6 py-4 w-[120px]">{t("Lifespan", "Vida Útil")}</th>
                    <th className="px-6 py-4 w-[220px]">{t("Wind Resistance", "Resistencia al Viento")}</th>
                    <th className="px-6 py-4 w-[180px]">{t("Maintenance", "Mantenimiento")}</th>
                    <th className="px-6 py-4">{t("Ideal Use Case", "Uso Ideal")}</th>
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
                        {m.windResistance}
                      </td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        {m.maintenance}
                      </td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                        {m.idealFor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Row 4: Signs You Need a Fence Repair or Replacement (Checklist) */}
          <div className="border-t border-slate-100 pt-16 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("Signs Your Fence Needs Professional Repair or Replacement", "Señales de que su Cerca Necesita Reparación o Reemplazo")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl leading-relaxed">
                {t("Do not let weather deterioration compromise your security and property valuation.", "No permita que el deterioro por el clima comprometa su seguridad y la valoración de su propiedad.")}
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

          {/* Row 5: 10-Step Fencing Installation Process */}
          <div className="border-t border-slate-100 pt-16 space-y-10 text-left">
            <div className="space-y-3">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("Our Custom Fence Installation Process", "Nuestro Proceso de Instalación de Cercas")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl">
                {t("We strictly manage property boundaries, 811 utility markings, deep post concrete settings, and custom gate framing.", "Gestionamos rigurosamente los límites, marcado de servicios, fijación de postes en concreto y marcos de puertas.")}
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
