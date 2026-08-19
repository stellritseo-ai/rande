import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-industrial.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/industrial")({
  head: () => ({
    meta: [
      { title: "Industrial Electrical Contractor in Florida | Electrical Contractor Corp" },
      { name: "description", content: "Licensed industrial electrical contractor in Florida. 3-phase power distribution, motor controls, machinery wiring & high-voltage systems. Call (786) 307-5933." },
      { name: "keywords", content: "industrial electrical contractor Florida, industrial electrician Florida, industrial electrical services Florida, industrial electrical installation Florida, industrial wiring contractor Florida, 3-phase power installation Florida, high voltage electrical contractor Florida" },
      { property: "og:title", content: "Industrial Electrical Contractor in Florida | Electrical Contractor Corp" },
      { property: "og:description", content: "State-licensed industrial electrical engineering, 3-phase distribution, high-voltage equipment hookups, and PLC automation across Florida." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/services/industrial" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/services/industrial" }
    ],
  }),
  component: IndustrialPage,
});

function IndustrialPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("Three-Phase Power Distribution (480V / 208V / 240V)", "Distribución de Energía Trifásica (480V / 208V / 240V)"),
    t("Heavy Industrial Machinery Hookups & Feeder Cables", "Conexiones de Maquinaria Industrial Pesada y Alimentadores"),
    t("Motor Control Centers (MCC) & Variable Frequency Drives (VFD)", "Centros de Control de Motores (MCC) y Variadores (VFD)"),
    t("High-Voltage Conduit Runs & Rigid Cable Tray Installs", "Conductos de Alto Voltaje y Bandejas Rígidas"),
    t("Step-Down Transformers & Industrial Switchgear", "Transformadores Reductores y Cuadros Eléctricos"),
    t("Hazardous Location Class I, II, III Explosion-Proof Wiring", "Cableado a Prueba de Explosiones en Áreas Peligrosas"),
    t("Facility Electrical Load Testing & Harmonic Power Analysis", "Pruebas de Carga de Instalaciones y Análisis de Armónicos"),
    t("Automated Emergency Standby Power & Paralleling Switchgear", "Generadores de Emergencia y Tableros en Paralelo"),
    t("Industrial Automation, PLC Wiring & Control Panels", "Automatización Industrial, Cableado PLC y Paneles"),
    t("FPL Utility Engineering Coordination for Primary Service", "Coordinación de Ingeniería Eléctrica con FPL"),
  ];

  const faqs = [
    {
      q: t("What voltage systems and phases do your industrial electricians work on?", "¿En qué sistemas de voltaje y fases trabajan sus electricistas industriales?"),
      a: t("We work on standard commercial single-phase (120/240V) as well as heavy industrial three-phase systems (208Y/120V, 480Y/277V, and medium-voltage primary distribution up to 13.8kV), including step-down transformers and switchgear.", "Trabajamos en sistemas residenciales monofásicos (120/240V) y en sistemas industriales trifásicos pesados (208Y/120V, 480Y/277V y distribución primaria de media tensión hasta 13.8kV), incluidos transformadores reductores y tableros.")
    },
    {
      q: t("How do you manage shutdown windows for industrial manufacturing facilities?", "¿Cómo gestionan las ventanas de parada en plantas de manufactura?"),
      a: t("We plan plant shutdowns with meticulous timeline coordination. Our industrial crews work around-the-clock during planned plant turnarounds, holiday shutdowns, and off-peak shifts to complete major switchgear swaps and conduit installations with zero disruption to active production runs.", "Planificamos las paradas de planta con una coordinación meticulosa. Nuestros equipos trabajan las 24 horas durante paradas programadas y turnos nocturnos para completar cambios de tableros sin interrumpir la producción.")
    },
    {
      q: t("Are your technicians certified for hazardous and explosion-proof environments?", "¿Están certificados para entornos peligrosos y a prueba de explosiones?"),
      a: t("Yes. We specialize in National Electrical Code (NEC) Class I (flammable gases), Class II (combustible dusts), and Class III (ignitible fibers) classified environments using explosion-proof fittings, seals, and rigid threaded conduit systems.", "Sí. Nos especializamos en entornos clasificados por el Código Eléctrico Nacional (NEC) Clase I, Clase II y Clase III utilizando accesorios a prueba de explosiones y conductos roscados rígidos.")
    },
    {
      q: t("Do you coordinate high-amp industrial service upgrades with Florida Power & Light?", "¿Coordinan aumentos de capacidad industrial con Florida Power & Light?"),
      a: t("Yes. We coordinate directly with FPL industrial engineering teams for primary service drops, CT metering cabinets, pad-mounted transformer sizing, and fault current calculations.", "Sí. Coordinamos directamente con los equipos de ingeniería de FPL para acometidas principales, gabinetes de medición CT, transformadores y cálculos de corriente de falla.")
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://electricalcontractorcorp.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://electricalcontractorcorp.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Industrial Electrical",
        "item": "https://electricalcontractorcorp.com/services/industrial"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Industrial Electrical Contracting Services",
    "serviceType": "Industrial Electrical Contractor",
    "provider": {
      "@type": "Electrician",
      "name": "Electrical Contractor Corp",
      "telephone": "+17863075933",
      "image": "https://electricalcontractorcorp.com/assets/logo.png",
      "priceRange": "$$$",
      "url": "https://electricalcontractorcorp.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    },
    "description": "Licensed industrial electrical contractor in Florida specializing in 3-phase power distribution, motor control centers, machinery hookups, and high-voltage power engineering."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHeader
        eyebrow={t("Industrial Electrical Engineering", "Ingeniería Eléctrica Industrial")}
        title={t("Heavy-Duty Industrial Electrical Contractor in Florida", "Contratista Eléctrico Industrial de Alta Capacidad en Florida")}
        subtitle={t("Delivering 3-phase power distribution, motor controls, machinery hookups, and high-voltage infrastructure across Florida manufacturing plants and logistics facilities.", "Distribución trifásica, controles de motores, conexiones de maquinaria e infraestructura de alto voltaje para plantas de manufactura y centros logísticos en Florida.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10 text-left">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary tracking-tight">
                  {t("Precision High-Voltage Industrial Power Systems", "Sistemas Eléctricos Industriales de Alta Tensión y Precisión")}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("Industrial manufacturing facilities, warehouses, logistics distribution centers, and processing plants require resilient electrical infrastructures engineered for continuous high-load operations. Electrical Contractor Corp provides industrial electrical contracting designed to maximize uptime, optimize power factor efficiency, and protect high-value capital equipment.", "Las plantas industriales, centros de distribución logística e instalaciones de procesamiento requieren infraestructuras eléctricas diseñadas para operaciones continuas de alta carga. Electrical Contractor Corp ofrece contratación eléctrica industrial para maximizar el tiempo de actividad y proteger equipos de alto valor.")}
                </p>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("Our master electricians possess specialized expertise in 480V 3-phase electrical switchboards, motor control centers (MCC), variable frequency drive (VFD) integration, and explosion-proof hazardous wiring. We perform thermal imaging inspections and load balancing to keep your operations compliant with OSHA, NFPA 70E, and NEC codes.", "Nuestros maestros electricistas poseen experiencia especializada en tableros trifásicos de 480V, centros de control de motores (MCC), variadores de frecuencia (VFD) y cableado a prueba de explosiones.")}
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Industrial Capabilities & Scope", "Capacidades y Alcance Industrial")}
                </h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {serviceList.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-secondary">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ Section */}
              <div className="border-t border-border pt-8">
                <h3 className="font-display text-2xl font-extrabold text-secondary mb-6">
                  {t("Frequently Asked Questions", "Preguntas Frecuentes")}
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <details key={idx} className="group border border-border rounded-2xl bg-card p-5 [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-display text-base font-bold text-secondary">
                        {faq.q}
                        <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-open:rotate-90 text-primary" />
                      </summary>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed border-t border-border/60 pt-3">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: CTA Sidebar */}
            <div className="space-y-8">
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-sm">
                <img
                  src={img}
                  alt="Industrial 3-phase machinery electrical installation"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    {t("Florida Industrial Contractors", "Contratistas Industriales de Florida")}
                  </div>
                  <div className="mt-1 font-display text-xl font-extrabold">
                    {t("Heavy-Duty Power Distribution & Controls", "Distribución de Potencia Pesada y Controles")}
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Schedule an Industrial Facility Audit", "Programe una Auditoría de Planta Industrial")}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Our engineering crew reviews single-line drawings, machinery load requirements, and shutdown schedules to provide an itemized project bid.", "Nuestro equipo revisa diagramas unifilares, cargas de maquinaria y cronogramas de parada para proporcionar una cotización detallada.")}
                </p>

                <div className="mt-6 space-y-3.5">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">{t("Request Industrial Proposal", "Solicitar Propuesta Industrial")}</Link>
                  </Button>
                  <a
                    href="tel:+17863075933"
                    className="flex items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-3 text-sm font-bold text-secondary hover:border-primary hover:text-primary transition"
                  >
                    <Phone className="h-4 w-4" /> (786) 307-5933
                  </a>
                </div>

                <div className="mt-6 space-y-2.5 text-xs font-semibold text-secondary/80">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary" /> {t("OSHA & NFPA 70E Safety Compliant", "Cumplimiento de Seguridad OSHA y NFPA 70E")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" /> {t("Turnaround & Plant Shutdown Specialists", "Especialistas en Paradas de Planta")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" /> {t("State License #EC13009876", "Licencia Estatal #EC13009876")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Process />
      <EmergencyCTA />
    </>
  );
}
