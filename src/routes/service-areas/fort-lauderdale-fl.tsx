import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight, MapPin, Building2, Zap, Home } from "lucide-react";
import img from "@/assets/service-commercial.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/service-areas/fort-lauderdale-fl")({
  head: () => ({
    meta: [
      { title: "Electrical Contractor in Fort Lauderdale, FL | Broward Electrician" },
      { name: "description", content: "Licensed electrical contractor in Fort Lauderdale & Broward County. Commercial build-outs, residential rewiring, EV chargers & 24/7 emergency repair. Call (786) 307-5933." },
      { name: "keywords", content: "electrician Fort Lauderdale FL, electrical contractor Fort Lauderdale FL, commercial electrician Fort Lauderdale, emergency electrician Fort Lauderdale, electrical repair Fort Lauderdale, Broward county electrician" },
      { property: "og:title", content: "Electrical Contractor in Fort Lauderdale, FL | Broward Electrician" },
      { property: "og:description", content: "State-licensed electrical contractor serving Fort Lauderdale and all Broward County communities with commercial build-outs, panel upgrades, and 24/7 emergency repair." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/service-areas/fort-lauderdale-fl" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/service-areas/fort-lauderdale-fl" }
    ],
  }),
  component: FortLauderdaleServiceAreaPage,
});

function FortLauderdaleServiceAreaPage() {
  const { t } = useLanguage();

  const neighborhoods = [
    "Downtown Fort Lauderdale & Las Olas", "Hollywood", "Pompano Beach", "Pembroke Pines",
    "Miramar", "Plantation", "Sunrise & Sawgrass", "Davie & Cooper City",
    "Coral Springs & Parkland", "Deerfield Beach", "Weston", "Hallandale Beach"
  ];

  const servicesOffered = [
    t("Commercial Tenant Build-Outs & Retail Power Distribution", "Remodelaciones Comerciales y Distribución de Energía"),
    t("Residential 200A & 400A Service Breaker Upgrades", "Actualizaciones de Disyuntores de 200A y 400A"),
    t("Level 2 EV Charging Station Installations (Home & Fleet)", "Instalación de Cargadores de EV Nivel 2"),
    t("Whole-Home Standby Generators with Automatic Transfer", "Generadores de Respaldo para el Hogar con Transferencia Automática"),
    t("24/7 Rapid Emergency Response Across Broward County", "Respuesta de Emergencia Rápida 24/7 en el Condado de Broward"),
    t("Marine & Coastal Weatherproof Electrical Installations", "Instalaciones Eléctricas Resistentes al Clima Marino y Costero"),
    t("Commercial Fire Alarm Systems & Life Safety Inspections", "Sistemas de Alarma contra Incendios y Seguridad Humana"),
    t("Broward County Building Department Permitting & Sign-Offs", "Permisos del Departamento de Construcción de Broward"),
  ];

  const faqs = [
    {
      q: t("Do you serve all cities and communities across Broward County?", "¿Prestan servicio a todas las ciudades del condado de Broward?"),
      a: t("Yes. Electrical Contractor Corp actively dispatches licensed master electricians across Fort Lauderdale, Hollywood, Pembroke Pines, Miramar, Pompano Beach, Plantation, Weston, and all surrounding Broward municipalities.", "Sí. Electrical Contractor Corp despacha activamente electricistas certificados a Fort Lauderdale, Hollywood, Pembroke Pines, Miramar, Pompano Beach y todo Broward.")
    },
    {
      q: t("How do you handle coastal and marine corrosion on electrical equipment?", "¿Cómo manejan la corrosión costera en equipos eléctricos?"),
      a: t("Fort Lauderdale's coastal environment requires NEMA 4X stainless steel or heavy marine-grade non-metallic enclosures, copper conductors, and corrosion-inhibiting compound treatments to ensure electrical systems do not deteriorate prematurely from saltwater exposure.", "El entorno costero de Fort Lauderdale requiere gabinetes NEMA 4X de acero inoxidable y tratamientos anticorrosivos para evitar el deterioro por el salitre.")
    },
    {
      q: t("Do you manage Broward County electrical permitting and inspections?", "¿Gestionan los permisos de construcción eléctrica y las inspecciones de Broward?"),
      a: t("Yes. We handle all Broward County building department permitting, plan submissions, load calculations, and final electrical and fire marshal inspections.", "Sí. Gestionamos todos los permisos del departamento de construcción del condado de Broward, planos, cálculos de carga e inspecciones finales.")
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
        "name": "Service Areas",
        "item": "https://electricalcontractorcorp.com/service-areas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Fort Lauderdale, FL",
        "item": "https://electricalcontractorcorp.com/service-areas/fort-lauderdale-fl"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": "https://electricalcontractorcorp.com/service-areas/fort-lauderdale-fl#business",
    "name": "Electrical Contractor Corp - Fort Lauderdale & Broward",
    "image": "https://electricalcontractorcorp.com/assets/logo.png",
    "telephone": "+17863075933",
    "url": "https://electricalcontractorcorp.com/service-areas/fort-lauderdale-fl",
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "City",
        "name": "Fort Lauderdale"
      },
      {
        "@type": "City",
        "name": "Hollywood"
      },
      {
        "@type": "City",
        "name": "Pompano Beach"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Broward County"
      }
    ],
    "description": "Licensed electrical contractor serving Fort Lauderdale and Broward County with residential, commercial, industrial, and 24/7 emergency electrical services."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHeader
        eyebrow={t("Broward County Electrical Services", "Servicios Eléctricos en el Condado de Broward")}
        title={t("Licensed Electrical Contractor in Fort Lauderdale, FL", "Contratista Eléctrico Autorizado en Fort Lauderdale, FL")}
        subtitle={t("Delivering commercial build-outs, residential upgrades, EV chargers, and 24/7 emergency dispatch across Fort Lauderdale and Broward County.", "Remodelaciones comerciales, mejoras residenciales, cargadores de EV y despacho de emergencia 24/7 en Fort Lauderdale y el condado de Broward.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10 text-left">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary tracking-tight">
                  {t("Premier Electrical Solutions for Fort Lauderdale & Broward", "Soluciones Eléctricas de Primer Nivel para Fort Lauderdale y Broward")}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("From commercial restaurant and retail build-outs on Las Olas Boulevard to residential dock wiring and 200A panel modernizations in suburban Broward, Electrical Contractor Corp delivers reliable, code-compliant electrical contracting throughout Fort Lauderdale, FL. Our state-certified master electricians engineer systems specifically built to endure coastal South Florida's environmental demands.", "Desde remodelaciones comerciales en Las Olas Boulevard hasta cableado de muelles residenciales y modernizaciones de paneles en Broward, Electrical Contractor Corp ofrece contratación eléctrica confiable en Fort Lauderdale, FL. Nuestros maestros electricistas diseñan sistemas para soportar el entorno costero.")}
                </p>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("We offer priority 24/7 emergency response throughout Broward County, complete municipal permitting through local city building departments, and all-inclusive flat-rate estimates.", "Ofrecemos respuesta de emergencia prioritaria 24/7 en todo el condado de Broward, gestión completa de permisos municipales y presupuestos con tarifas transparentes.")}
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Services Provided in Fort Lauderdale & Broward", "Servicios Prestados en Fort Lauderdale y Broward")}
                </h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {servicesOffered.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-secondary">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Neighborhoods List */}
              <div className="border-t border-border pt-8">
                <h3 className="font-display text-2xl font-extrabold text-secondary mb-4">
                  {t("Broward County Communities We Serve", "Comunidades del Condado de Broward que Servimos")}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {neighborhoods.map((n, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-muted/30 p-2.5 rounded-xl border border-border/50">
                      <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>{n}</span>
                    </div>
                  ))}
                </div>
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
                  alt="Commercial electrical project in Fort Lauderdale, FL"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    {t("Broward County Electricians", "Electricistas del Condado de Broward")}
                  </div>
                  <div className="mt-1 font-display text-xl font-extrabold">
                    {t("Fort Lauderdale Metro Area", "Área Metropolitana de Fort Lauderdale")}
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Need an Electrician in Fort Lauderdale?", "¿Necesita un Electricista en Fort Lauderdale?")}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Request a transparent, flat-rate estimate or rapid emergency repair in Broward County.", "Solicite un presupuesto transparente de tarifa fija o reparación de emergencia en el condado de Broward.")}
                </p>

                <div className="mt-6 space-y-3.5">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">{t("Request Free Estimate", "Solicitar Presupuesto Gratis")}</Link>
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
                    <ShieldCheck className="h-4 w-4 text-primary" /> {t("State Certified License #EC13009876", "Licencia Estatal #EC13009876")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" /> {t("Rapid Dispatch Across Broward County", "Despacho Rápido en el Condado de Broward")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" /> {t("Commercial & Residential Licensed", "Licencia Comercial y Residencial")}
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
