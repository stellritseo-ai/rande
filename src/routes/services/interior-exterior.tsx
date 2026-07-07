import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, Mail, MapPin, ArrowRight, CheckSquare } from "lucide-react";
import cleanImg from "@/assets/painting-construction-clean.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/interior-exterior")({
  head: () => ({
    meta: [
      { title: "Interior & Exterior Painting Wheat Ridge | ACC Construction LLC" },
      { name: "description", content: "ACC Construction LLC provides premium interior painting, exterior painting, drywall repairs, texturing, cabinet painting, and wood staining in Colorado." },
      { property: "og:title", content: "Painting Services | ACC Construction LLC" },
      { property: "og:description", content: "Professional interior and exterior painting services in Colorado's Front Range." },
    ],
    links: [
      { rel: "canonical", href: "https://www.accconstructionllc.com/services/interior-exterior" }
    ],
  }),
  component: PaintingPage,
});

function PaintingPage() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("Interior Wall & Ceiling Painting", "Pintura de Paredes y Techos Interiores"),
      desc: t("Premium low-VOC paints in flat, eggshell, or satin finishes for bedrooms, living rooms, and high-traffic areas.", "Pinturas premium de bajo VOC en acabados mate, satinado o cáscara de huevo para dormitorios, salas de estar y pasillos.")
    },
    {
      title: t("Exterior Trim & Siding Painting", "Pintura de Revestimiento y Molduras Exteriores"),
      desc: t("Heavy-duty weather-resistant coatings to protect wood, stucco, and fiber cement siding from hail and UV damage.", "Revestimientos de alta resistencia para proteger la madera, el estuco y el cemento de fibra contra el granizo y la radiación solar.")
    },
    {
      title: t("Drywall Patching & Texturing", "Reparación y Texturizado de Yeso"),
      desc: t("Professional repairs for cracks, holes, and water damage, finished with seamless texture matching.", "Reparación profesional de grietas, agujeros y daños por agua, con un acabado texturizado perfecto y uniforme.")
    },
    {
      title: t("Wood Stain & Sealing", "Teñido y Sellado de Madera"),
      desc: t("Premium stains and sealers for wood decks, fences, pergolas, and custom trim work.", "Tintes y selladores de primera calidad para terrazas de madera, cercas, pérgolas y carpintería decorativa.")
    },
    {
      title: t("Trim, Baseboard & Cabinet Painting", "Pintura de Gabinetes, Zócalos y Molduras"),
      desc: t("Precision brush-and-spray finishes for doors, casing, crown molding, and kitchen cabinets.", "Acabados de precisión con brocha y rociador para puertas, marcos, molduras de corona y gabinetes de cocina.")
    },
    {
      title: t("Surface Prep & Pressure Washing", "Preparación de Superficies y Lavado a Presión"),
      desc: t("Complete cleaning, scraping, caulking, and priming to ensure a flawless paint bond.", "Limpieza completa, raspado, calafateo y aplicación de imprimador para garantizar una adherencia impecable de la pintura.")
    }
  ];

  const coatings = [
    {
      type: t("Latex / Acrylic Paint", "Pintura de Látex / Acrílica"),
      finish: t("Flat, Eggshell, Satin, Semi-Gloss", "Mate, Cáscara de Huevo, Satinado, Semibrillante"),
      bestFor: t("Interior walls, ceilings, exterior siding & wood surfaces", "Paredes y techos interiores, revestimiento exterior y superficies de madera"),
      features: t("Easy water cleanup, highly flexible to prevent cracking", "Limpieza fácil con agua, alta flexibilidad para evitar grietas")
    },
    {
      type: t("Alkyd / Oil-Based Paint", "Pintura Alquídica / a Base de Aceite"),
      finish: t("Satin, Semi-Gloss, High-Gloss", "Satinado, Semibrillante, Brillo Intenso"),
      bestFor: t("Baseboards, doors, crown molding, and kitchen cabinets", "Zócalos, puertas, molduras de corona y gabinetes de cocina"),
      features: t("Extremely hard, scrub-resistant, smooth leveling", "Extremadamente dura, resistente al frote, nivelación suave")
    },
    {
      type: t("Polyurethane & Wood Stains", "Poliuretano y Tintes para Madera"),
      finish: t("Clear Satin, Semi-Gloss, Gloss", "Satinado Claro, Semibrillante, Brillante"),
      bestFor: t("Decks, fences, wood siding, and pergolas", "Terrazas, cercas, revestimientos de madera y pérgolas"),
      features: t("Enhances wood grain, protects against moisture and UV", "Realza la veta de la madera, protege contra la humedad y rayos UV")
    },
    {
      type: t("Elastomeric Paint", "Pintura Elastomérica"),
      finish: t("Flat", "Mate"),
      bestFor: t("Exterior stucco walls and masonry surfaces", "Paredes de estuco exteriores y superficies de mampostería"),
      features: t("High elasticity, bridges hairline cracks, heavy waterproofing", "Alta elasticidad, cubre grietas finas, impermeabilización pesada")
    }
  ];

  const warningSigns = [
    t("Peeling, bubbling, or cracking paint on siding or trim", "Pintura que se descascara, burbujea o se agrieta en el revestimiento o las molduras"),
    t("Fading and chalking colors from intense Colorado UV rays", "Colores descoloridos por los intensos rayos solares de Colorado"),
    t("Discoloration, water spots, or stains on ceilings and walls", "Descoloración, manchas de agua o manchas en techos y paredes"),
    t("Cracks and holes in drywall or damaged stucco surfaces", "Grietas y agujeros en paneles de yeso o superficies de estuco dañadas"),
    t("Bare wood exposed to moisture and weather elements", "Madera desnuda expuesta a la humedad y a los elementos climáticos"),
    t("Outdated color schemes that lower curb appeal and home value", "Esquemas de colores anticuados que reducen el atractivo exterior y el valor")
  ];

  const steps = [
    { step: "1", title: t("Free Estimation", "Estimación Gratis"), desc: t("We visit your home to inspect surfaces, discuss colors, and provide a clear quote.", "Visitamos su hogar para inspeccionar las superficies, discutir los colores y dar un presupuesto.") },
    { step: "2", title: t("Color Selection", "Selección de Colores"), desc: t("Choose from premium color palettes or request custom color matching.", "Elija entre paletas de colores premium o solicite igualación de color personalizada.") },
    { step: "3", title: t("Room & Wall Prep", "Preparación de Habitaciones"), desc: t("We move furniture, cover floors with drop cloths, and mask trim with tape.", "Movemos muebles, cubrimos pisos con lonas protectoras y enmascaramos molduras con cinta.") },
    { step: "4", title: t("Surface Cleaning", "Limpieza de Superficies"), desc: t("We wipe interior walls and pressure wash exterior siding to remove dust and grit.", "Limpiamos las paredes interiores y lavamos a presión el revestimiento exterior.") },
    { step: "5", title: t("Repairing Drywall", "Reparación de Paneles de Yeso"), desc: t("We patch cracks, fill nail holes, repair drywall tape, and match textures.", "Reparamos grietas, tapamos agujeros de clavos, arreglamos cinta de yeso y nivelamos texturas.") },
    { step: "6", title: t("Scraping & Sanding", "Raspado y Lijado"), desc: t("We remove old flaking paint and sand rough spots for a smooth profile.", "Retiramos la pintura vieja descascarada y lijamos los puntos ásperos.") },
    { step: "7", title: t("Priming & Caulking", "Imprimación y Calafateo"), desc: t("We apply premium bonding primer to bare wood/drywall and caulk all joints.", "Aplicamos imprimador en madera/yeso expuestos y calafateamos todas las juntas de molduras.") },
    { step: "8", title: t("Precision Painting", "Pintura de Precisión"), desc: t("We apply two coats of premium paint using brushes, rollers, and professional sprayers.", "Aplicamos dos capas de pintura premium usando brochas, rodillos y rociadores profesionales.") },
    { step: "9", title: t("Clean Up & Inspection", "Limpieza e Inspección"), desc: t("We remove masking tape, sweep floors, return furniture, and inspect the finishes.", "Retiramos la cinta protectora, barremos los pisos, regresamos los muebles e inspeccionamos.") },
    { step: "10", title: t("Customer Walkthrough", "Inspección del Cliente"), desc: t("We walk through the completed project with you to ensure 100% satisfaction.", "Recorremos el proyecto terminado con usted para asegurar su satisfacción del 100%.") }
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("Painting Services", "Servicios de Pintura")}
        title={t("Interior & Exterior Painting", "Pintura Interior y Exterior")}
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
                      "A fresh coat of paint does more than just change a color—it protects your home, enhances its architectural details, and boosts your property value.",
                      "Una nueva capa de pintura hace más que cambiar el color: protege su hogar, realza los detalles arquitectónicos y aumenta el valor de su propiedad."
                    )}
                  </p>
                </div>
                
                <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed pl-1">
                  {t(
                    "Whether you are updating a single bedroom, repairing damaged drywall, or completely repainting your home's exterior to withstand Colorado's extreme sun and snow shifts, the quality of the finish comes down to preparation. At ACC Construction LLC, we don't cut corners on prep work. We scrape, sand, prime, and patch every surface to ensure seamless, professional results.",
                    "Ya sea que esté actualizando un dormitorio, reparando paneles de yeso dañados o repintando por completo el exterior de su hogar para resistir el sol y la nieve de Colorado, la calidad del acabado depende de la preparación. En ACC Construction LLC, no escatimamos en la preparación. Raspamos, lijamos, imprimamos y parchamos cada superficie para asegurar resultados profesionales."
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
                  alt={t("ACC Professional Interior Painting and Preparation Showcase", "Exhibición de pintura y preparación interior profesional de ACC")}
                  className="w-full h-auto max-h-[500px] object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <div className="absolute inset-x-6 bottom-6 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl text-white text-left text-xs font-extrabold sm:text-sm border border-white/10 flex items-center justify-between">
                  <span>{t("Professional interior wall preparation, masking, and roller painting by ACC Construction", "Preparación profesional de paredes interiores, enmascarado y pintura con rodillo por ACC Construction")}</span>
                  <span className="bg-[#008A22] text-[10px] uppercase font-black tracking-widest px-2.5 py-1 rounded-full hidden sm:inline-block">{t("Painting", "Pintura")}</span>
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
                  {t("Request a transparent, itemized quote for your custom interior or exterior painting project.", "Solicite una cotización detallada y transparente para su proyecto de pintura interior o exterior.")}
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

          {/* Row 2: Painting Specialties Grid */}
          <div className="border-t border-slate-100 pt-16 space-y-12 text-left">
            <div className="space-y-4">
              <h2 className="font-display font-black text-[#0F172A] text-2xl sm:text-4xl tracking-tight">
                {t("Our Painting Specialties", "Nuestras Especialidades en Pintura")}
              </h2>
              <p className="text-slate-500 font-medium text-base sm:text-lg max-w-3xl leading-relaxed">
                {t("We bring precision cabinet sprays, custom staining, weatherproofing, and detailed drywall patching to your home.", "Aportamos rociado de precisión para gabinetes, teñido a medida, impermeabilización y parches de yeso detallados a su hogar.")}
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

          {/* Row 3: Coating Types Comparison (Table) */}
          <div className="border-t border-slate-100 pt-16 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("Paint & Protective Coating Types Guide", "Guía de Tipos de Pintura y Revestimientos")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl leading-relaxed">
                {t("Selecting the correct finish and chemical base is vital to get clean finishes and weather defense.", "Seleccionar el acabado y la base química correctos es fundamental para obtener acabados limpios y protección climática.")}
              </p>
            </div>
            
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                    <th className="px-6 py-4 w-[220px]">{t("Coating / Base", "Revestimiento / Base")}</th>
                    <th className="px-6 py-4 w-[180px]">{t("Available Finishes", "Acabados Disponibles")}</th>
                    <th className="px-6 py-4">{t("Best Suited For", "Ideal Para")}</th>
                    <th className="px-6 py-4 w-[280px]">{t("Key Features", "Características Clave")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {coatings.map((c) => (
                    <tr key={c.type} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-4 font-black text-[#0F172A] text-sm group-hover:text-[#008A22] transition-colors">
                        {c.type}
                      </td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        {c.finish}
                      </td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                        {c.bestFor}
                      </td>
                      <td className="px-6 py-4 text-xs sm:text-sm text-slate-700 font-bold leading-relaxed">
                        {c.features}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Row 4: Signs You Need a Fresh Coat (Checklist) */}
          <div className="border-t border-slate-100 pt-16 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("Signs You Need a Fresh Coat of Paint", "Señales de que Necesita una Nueva Mano de Pintura")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl leading-relaxed">
                {t("Protect your structural integrity and aesthetic value by watching for these issues.", "Proteja su integridad estructural y valor estético prestando atención a estos problemas.")}
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

          {/* Row 5: 10-Step Painting Process Timeline */}
          <div className="border-t border-slate-100 pt-16 space-y-10 text-left">
            <div className="space-y-3">
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {t("Our Painting & Preparation Process", "Nuestro Proceso de Pintura y Preparación")}
              </h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl">
                {t("We strictly manage prep, scrap, drywall, sanding, and application to provide 100% smooth coats.", "Gestionamos estrictamente la preparación, raspado, yeso, lijado y aplicación para brindar capas perfectas.")}
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
