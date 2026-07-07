import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, Mail, MapPin, ArrowRight } from "lucide-react";
import cleanImg from "@/assets/additions-construction-clean.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/home-additions")({
  head: () => ({
    meta: [
      { title: "Home Additions & Second Story Extensions Wheat Ridge | ACC Construction LLC" },
      { name: "description", content: "ACC Construction LLC provides professional residential additions, second-story extensions, ADU construction, and garage additions in Colorado." },
      { property: "og:title", content: "Home Additions | ACC Construction LLC" },
      { property: "og:description", content: "Expand your living space with custom additions in Colorado's Front Range." },
    ],
    links: [
      { rel: "canonical", href: "https://www.accconstructionllc.com/services/home-additions" }
    ],
  }),
  component: HomeAdditionsPage,
});

function HomeAdditionsPage() {
  const { t } = useLanguage();

  const roomAdditions = [
    { type: t("Bedroom Addition", "Adición de Dormitorio"), desc: t("Master suites, guest rooms, or children’s bedrooms. Includes closets, windows (egress where required), and electrical.", "Suites principales, habitaciones de invitados o dormitorios infantiles. Incluye armarios, ventanas (salidas de emergencia donde se requiera) y electricidad.") },
    { type: t("Living Room Addition", "Adición de Sala de Estar"), desc: t("Expand your main living area. Great for growing families or entertainment spaces.", "Amplíe su sala de estar principal. Ideal para familias en crecimiento o salas de entretenimiento.") },
    { type: t("Dining Room Addition", "Adición de Comedor"), desc: t("Formal or casual dining spaces connected to the kitchen.", "Espacios de comedor formales o informales conectados a la cocina.") },
    { type: t("Home Office Addition", "Adición de Oficina en Casa"), desc: t("Quiet, dedicated workspace separate from household activity.", "Espacio de trabajo tranquilo y dedicado, separado de la actividad del hogar.") },
    { type: t("Sunroom / Four Seasons Room", "Sala de Sol / Sala de Cuatro Estaciones"), desc: t("Light-filled spaces with windows, insulation, and climate control.", "Espacios llenos de luz con ventanas, aislamiento y control de clima.") }
  ];

  const secondStoryAdditions = [
    { type: t("Full Second Story", "Segundo Piso Completo"), desc: t("Adding an entire upper floor. Complex structural work. Maximum square footage gain.", "Adición de un piso superior completo. Trabajo estructural complejo. Máxima ganancia de pies cuadrados.") },
    { type: t("Dormer Additions", "Adiciones de Buhardillas (Dormer)"), desc: t("Adding headroom and windows to existing second floor or attic spaces.", "Adición de altura y ventanas a espacios existentes en el segundo piso o ático.") },
    { type: t("Second Story Over Garage", "Segundo Piso Sobre Garaje"), desc: t("Expanding upward above an existing garage.", "Expansión hacia arriba por encima de un garaje existente.") }
  ];

  const garageAdditions = [
    { type: t("Attached Garage Addition", "Adición de Garaje Adjunto"), desc: t("Adding a new garage connected to your home.", "Adición de un nuevo garaje conectado a su hogar.") },
    { type: t("Garage Expansion", "Expansión de Garaje"), desc: t("Making an existing single-car garage into a double or triple.", "Convertir un garaje existente para un solo vehículo en uno doble o triple.") },
    { type: t("Garage with Living Space Above", "Garaje con Espacio Habitable Arriba"), desc: t("Garage on ground level + apartment, office, or studio upstairs.", "Garaje en planta baja + apartamento, oficina o estudio en el piso superior.") }
  ];

  const bumpOutAdditions = [
    { type: t("Kitchen Bump-Out", "Ampliación de Cocina (Bump-Out)"), desc: t("Expanding kitchen footprint by 2–4 feet. Enough for an island, pantry, or breakfast nook.", "Ampliación del espacio de la cocina por 2–4 pies. Suficiente para una isla, despensa o desayunador.") },
    { type: t("Bathroom Bump-Out", "Ampliación de Baño (Bump-Out)"), desc: t("Adding space for a larger shower, double vanity, or soaking tub.", "Adición de espacio para una ducha más grande, tocador doble o bañera profunda.") },
    { type: t("Entryway Bump-Out", "Ampliación de Entrada (Bump-Out)"), desc: t("Creating a mudroom, foyer, or covered entry.", "Creación de un vestíbulo, recibidor o entrada cubierta.") }
  ];

  const adus = [
    { type: t("Detached ADU", "ADU Independiente"), desc: t("Separate structure in backyard. Perfect for in-laws, rental income, or home office.", "Estructura separada en el patio trasero. Perfecto para familiares, ingresos de alquiler o una oficina.") },
    { type: t("Attached ADU", "ADU Adjunto"), desc: t("Connected to main home but with separate entrance and utilities.", "Conectado a la casa principal pero con entrada y servicios públicos independientes.") },
    { type: t("Garage Conversion ADU", "ADU por Conversión de Garaje"), desc: t("Converting existing garage into a living unit.", "Conversión de un garaje existente en una unidad de vivienda.") }
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("Home Additions", "Adiciones al Hogar")}
        title={t("More Space. More Value. No Moving Trucks.", "Más Espacio. Más Valor. Sin Camiones de Mudanza.")}
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
                      "You need more space. But you love your neighborhood, your mortgage rate, and your lot. Moving is expensive, stressful, and uncertain. There is a better solution: build exactly what you need, right where you are.",
                      "Necesita más espacio. Pero ama su vecindario, su tasa hipotecaria y su terreno. Mudarse es costoso, estresante e incierto. Hay una mejor solución: construya exactamente lo que necesita, justo donde está."
                    )}
                  </p>
                </div>
                
                <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed pl-1">
                  {t(
                    "At ACC Construction LLC, we have been designing and building home additions across Colorado for over 25 years. We are a licensed, insured, and bonded residential general contractor based in Wheat Ridge. We handle every aspect of your addition—from foundation to roof, permits to final finishes. No cutting corners. No disappearing contractors. Just more square footage done right.",
                    "En ACC Construction LLC, hemos estado diseñando y construyendo adiciones al hogar en todo Colorado durante más de 25 años. Somos un contratista general residencial autorizado, asegurado y bajo fianza con sede en Wheat Ridge. Manejamos todos los aspectos de su adición: desde los cimientos hasta el techo, desde los permisos hasta los acabados finales. Sin escatimar. Sin contratistas que desaparezcan. Solo más pies cuadrados bien hechos."
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
                  alt={t("ACC Custom Residential Home Addition Construction", "Construcción de adición al hogar residencial personalizada de ACC")}
                  className="w-full h-auto max-h-[500px] object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  loading="lazy"
                />
                <div className="absolute inset-x-6 bottom-6 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl text-white text-left text-xs font-extrabold sm:text-sm border border-white/10 flex items-center justify-between">
                  <span>{t("Residential framing and timber connection work by ACC Construction builders", "Trabajo de estructuras residenciales y conexión de madera por constructores de ACC Construction")}</span>
                  <span className="bg-[#008A22] text-[10px] uppercase font-black tracking-widest px-2.5 py-1 rounded-full hidden sm:inline-block">{t("Framing", "Estructura")}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              {/* Booking card */}
              <div className="rounded-3xl border border-[#008A22]/20 bg-[#008A22]/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-[#0F172A]">
                  {t("Stop outgrowing your home.", "Deje de quedarle pequeña su casa.")}
                </h3>
                <p className="mt-2 text-sm text-slate-500 font-semibold leading-relaxed">
                  {t("Start expanding it with Colorado's trusted general contractor.", "Comience a expandirla con el contratista general de confianza de Colorado.")}
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

          {/* Row 2: Services Grid (Spans Full Container Width 100%) */}
          <div className="border-t border-slate-100 pt-16 space-y-12 text-left">
            <div className="space-y-4">
              <h2 className="font-display font-black text-[#0F172A] text-2xl sm:text-4xl tracking-tight">
                {t("Our Home Addition Services", "Nuestros Servicios de Adición al Hogar")}
              </h2>
              <p className="text-slate-500 font-medium text-base sm:text-lg max-w-3xl leading-relaxed">
                {t("We bring full design-build execution, deep zoning coordination, and expert structural framing to every addition.", "Aportamos ejecución completa de diseño y construcción, profunda coordinación de zonificación y estructuras de madera expertas en cada adición.")}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              
              {/* Room Additions table */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between bg-white">
                <div>
                  <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
                    <h3 className="font-display font-black text-white text-base sm:text-lg">
                      {t("Room Additions", "Adiciones de Habitaciones")}
                    </h3>
                  </div>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-400 border-b border-slate-200">
                        <th className="px-6 py-3">{t("Type", "Tipo")}</th>
                        <th className="px-6 py-3">{t("Description", "Descripción")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {roomAdditions.map((row) => (
                        <tr key={row.type} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4 font-extrabold text-[#0F172A] text-[13px] sm:text-sm w-[35%]">{row.type}</td>
                          <td className="px-6 py-4 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">{row.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Second Story Additions table */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between bg-white">
                <div>
                  <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
                    <h3 className="font-display font-black text-white text-base sm:text-lg">
                      {t("Second Story Additions", "Adiciones de Segundo Piso")}
                    </h3>
                  </div>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-400 border-b border-slate-200">
                        <th className="px-6 py-3">{t("Type", "Tipo")}</th>
                        <th className="px-6 py-3">{t("Description", "Descripción")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {secondStoryAdditions.map((row) => (
                        <tr key={row.type} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4 font-extrabold text-[#0F172A] text-[13px] sm:text-sm w-[35%]">{row.type}</td>
                          <td className="px-6 py-4 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">{row.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Garage Additions table */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between bg-white">
                <div>
                  <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
                    <h3 className="font-display font-black text-white text-base sm:text-lg">
                      {t("Garage Additions", "Adiciones de Garaje")}
                    </h3>
                  </div>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-400 border-b border-slate-200">
                        <th className="px-6 py-3">{t("Type", "Tipo")}</th>
                        <th className="px-6 py-3">{t("Description", "Descripción")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {garageAdditions.map((row) => (
                        <tr key={row.type} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4 font-extrabold text-[#0F172A] text-[13px] sm:text-sm w-[35%]">{row.type}</td>
                          <td className="px-6 py-4 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">{row.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bump-Out Additions table */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between bg-white">
                <div>
                  <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
                    <h3 className="font-display font-black text-white text-base sm:text-lg">
                      {t("Bump-Out Additions", "Ampliaciones (Bump-Out)")}
                    </h3>
                  </div>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-400 border-b border-slate-200">
                        <th className="px-6 py-3">{t("Type", "Tipo")}</th>
                        <th className="px-6 py-3">{t("Description", "Descripción")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {bumpOutAdditions.map((row) => (
                        <tr key={row.type} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4 font-extrabold text-[#0F172A] text-[13px] sm:text-sm w-[35%]">{row.type}</td>
                          <td className="px-6 py-4 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">{row.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Accessory Dwelling Units (ADUs) table */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between bg-white md:col-span-2 max-w-4xl mx-auto w-full">
                <div>
                  <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
                    <h3 className="font-display font-black text-white text-base sm:text-lg">
                      {t("Accessory Dwelling Units (ADUs)", "Unidades de Vivienda Accesorias (ADU)")}
                    </h3>
                  </div>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-400 border-b border-slate-200">
                        <th className="px-6 py-3">{t("Type", "Tipo")}</th>
                        <th className="px-6 py-3">{t("Description", "Descripción")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {adus.map((row) => (
                        <tr key={row.type} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4 font-extrabold text-[#0F172A] text-[13px] sm:text-sm w-[30%]">{row.type}</td>
                          <td className="px-6 py-4 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">{row.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <EmergencyCTA />
    </>
  );
}
