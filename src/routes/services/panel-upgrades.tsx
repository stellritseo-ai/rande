import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-panel.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/panel-upgrades")({
  head: () => ({
    meta: [
      { title: "Electrical Panel Upgrade in Florida | Electrical Contractor Corp" },
      { name: "description", content: "Professional electrical panel upgrades in Florida. 200A & 400A breaker boxes, Federal Pacific replacement & FPL coordination. Call (786) 307-5933." },
      { name: "keywords", content: "electrical panel upgrade Florida, electrical panel replacement Florida, breaker panel upgrade Florida, electrical panel upgrade Miami FL, 200 amp panel upgrade Florida, electrical service upgrade Florida" },
      { property: "og:title", content: "Electrical Panel Upgrade in Florida | Electrical Contractor Corp" },
      { property: "og:description", content: "Upgrade your electrical panel to 200A or 400A capacity. Licensed electricians managing full municipal permits and FPL utility coordination." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/services/panel-upgrades" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/services/panel-upgrades" }
    ],
  }),
  component: PanelUpgradesPage,
});

function PanelUpgradesPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("100-Amp to 200-Amp Main Service Panel Upgrades", "Actualización de Panel Principal de 100A a 200A"),
    t("High-Capacity 400-Amp Multi-Meter Center Upgrades", "Actualización de Centros de Medición a 400A"),
    t("Hazardous Federal Pacific & Zinsco Panel Replacements", "Reemplazo de Paneles Peligrosos Federal Pacific y Zinsco"),
    t("Whole-House Surge Protection Device (SPD) Additions", "Dispositivos de Protección contra Sobretensiones (SPD)"),
    t("Subpanel Installation for EV Chargers, Pools & Additions", "Subpaneles para Cargadores EV, Piscinas y Ampliaciones"),
    t("Arc Fault (AFCI) & Ground Fault (GFCI) Breaker Retrofits", "Disyuntores de Falla por Arco (AFCI) y Tierra (GFCI)"),
    t("Detailed Electrical Load Calculations & Single-Line Diagrams", "Cálculos de Carga Eléctrica y Diagramas Unifilares"),
    t("Florida Power & Light (FPL) Meter Base Coordination", "Coordinación de Base de Medidor con Florida Power & Light"),
    t("Complete Municipal Building Permitting & Inspection Sign-Off", "Permisos Municipales Completos e Inspección Final"),
    t("Circuit Directory Mapping, Labeling & Balance Testing", "Mapeo, Etiquetado de Circuitos y Pruebas de Balance"),
  ];

  const faqs = [
    {
      q: t("How do I know if my electrical panel needs to be upgraded?", "¿Cómo sé si mi panel eléctrico necesita ser actualizado?"),
      a: t("Key indicators include circuit breakers that frequently trip, flickering lights when the air conditioner kicks on, a panel that feels warm or hums, an outdated 60-amp or 100-amp service capacity, or the addition of major electrical loads like an EV charger, pool pump, or induction range.", "Las señales clave incluyen disyuntores que se disparan con frecuencia, luces parpadeantes cuando enciende el aire acondicionado, un panel caliente o con zumbidos, una capacidad obsoleta de 60 o 100 amperios, o la adición de cargas como cargadores de EV o piscinas.")
    },
    {
      q: t("Why are Federal Pacific and Zinsco panels considered fire hazards?", "¿Por qué los paneles Federal Pacific y Zinsco se consideran peligros de incendio?"),
      a: t("Testing has proven that Federal Pacific Electric (FPE) Stab-Lok and Zinsco breaker panels frequently fail to trip during overload or short-circuit conditions, leading to extreme internal heat and electrical fires. Most Florida insurance carriers require immediate replacement of these panels before issuing coverage.", "Las pruebas han demostrado que los disyuntores FPE Stab-Lok y Zinsco con frecuencia no se disparan durante sobrecargas, lo que provoca incendios. La mayoría de las aseguradoras en Florida exigen su reemplazo inmediato.")
    },
    {
      q: t("How long does an electrical panel upgrade take?", "¿Cuánto tiempo toma una actualización de panel eléctrico?"),
      a: t("Most residential panel replacements are completed within a single day (usually 4 to 6 hours of power interruption). We schedule in advance with FPL and the city inspector so your power is safely reconnected before the end of the day.", "La mayoría de los reemplazos se completan en un solo día (generalmente de 4 a 6 horas de interrupción). Coordinamos con FPL y el inspector municipal para restablecer la energía antes del final del día.")
    },
    {
      q: t("Do you handle the city permits and FPL meter disconnect?", "¿Se encargan de los permisos municipales y la desconexión con FPL?"),
      a: t("Yes. Electrical Contractor Corp manages the entire turn-key process: engineering load calculations, municipal permit acquisition, FPL service coordination, copper installation, grounding rod installation, and final inspection sign-off.", "Sí. Electrical Contractor Corp gestiona todo el proceso: cálculos de carga, permisos municipales, coordinación con FPL, instalación de varillas de tierra e inspección final.")
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
        "name": "Panel Upgrades",
        "item": "https://electricalcontractorcorp.com/services/panel-upgrades"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Electrical Panel Upgrade & Replacement Services",
    "serviceType": "Electrical Panel Upgrades",
    "provider": {
      "@type": "Electrician",
      "name": "Electrical Contractor Corp",
      "telephone": "+17863075933",
      "image": "https://electricalcontractorcorp.com/assets/logo.png",
      "priceRange": "$$",
      "url": "https://electricalcontractorcorp.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    },
    "description": "Licensed electrical panel upgrades in Florida. 200A and 400A circuit breaker replacements, Federal Pacific panel mitigation, and FPL utility coordination."
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
        eyebrow={t("Electrical Panel Services", "Servicios de Paneles Eléctricos")}
        title={t("Electrical Panel Upgrades & Replacement in Florida", "Actualizaciones y Reemplazo de Paneles Eléctricos en Florida")}
        subtitle={t("Upgrade your home or facility to a modern 200A or 400A breaker panel. Safe, code-certified installations with full FPL coordination and city permits.", "Actualice su hogar a un panel de 200A o 400A. Instalaciones certificadas con coordinación completa con FPL y permisos de la ciudad.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10 text-left">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary tracking-tight">
                  {t("Modernize Your Electrical Capacity for Safety & Efficiency", "Modernice su Capacidad Eléctrica para Seguridad y Eficiencia")}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("Older properties throughout Florida were originally built with 60-amp or 100-amp electrical panels. Today's modern appliances—including central high-efficiency heat pumps, induction cooktops, Level 2 electric vehicle chargers, and backup generators—demand significantly more power. Electrical Contractor Corp provides precision 200-amp and 400-amp electrical panel upgrades that ensure your property operates safely without overloaded breakers.", "Las propiedades más antiguas en Florida se construyeron con paneles de 60 o 100 amperios. Los electrodomésticos modernos exigen mucha más energía. Electrical Contractor Corp ofrece actualizaciones de paneles a 200 y 400 amperios que garantizan que su propiedad funcione de forma segura.")}
                </p>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("If your home contains a hazardous Federal Pacific Electric (Stab-Lok), Zinsco, or Challenger breaker box, our team executes complete turnkey replacements using top-tier copper bus panels (Square D, Siemens, Eaton) complete with new grounding electrode systems and whole-house surge suppression.", "Si su hogar contiene un panel peligroso Federal Pacific, Zinsco o Challenger, nuestro equipo ejecuta reemplazos completos utilizando paneles de cobre de primer nivel con supresión de sobretensión.")}
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Our Panel Upgrade Services", "Nuestros Servicios de Actualización de Paneles")}
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
                  alt="Upgraded 200A electrical breaker panel installation"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    {t("Florida Panel Specialists", "Especialistas en Paneles de Florida")}
                  </div>
                  <div className="mt-1 font-display text-xl font-extrabold">
                    {t("200A / 400A Breaker Upgrades", "Actualizaciones de Disyuntores 200A / 400A")}
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Get a Flat-Rate Panel Quote", "Obtenga una Cotización de Tarifa Fija")}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Book a free on-site electrical panel inspection. We check load capacity, inspect grounding, and provide an all-inclusive quote.", "Reserve una inspección gratuita del panel en el sitio. Verificamos la capacidad de carga e inspeccionamos la conexión a tierra.")}
                </p>

                <div className="mt-6 space-y-3.5">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">{t("Schedule Panel Inspection", "Programar Inspección de Panel")}</Link>
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
                    <ShieldCheck className="h-4 w-4 text-primary" /> {t("State License #EC13009876", "Licencia Estatal #EC13009876")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" /> {t("Same-Day Power Restoration", "Restablecimiento de Energía el Mismo Día")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" /> {t("Full City Permitting & FPL Coordination", "Permisos de Ciudad y Coordinación con FPL")}
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
