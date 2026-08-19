import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight, MapPin, Building2, Zap, Home } from "lucide-react";
import img from "@/assets/service-panel.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/service-areas/hialeah-fl")({
  head: () => ({
    meta: [
      { title: "Electrical Contractor in Hialeah, FL | HQ Electrician Hialeah" },
      { name: "description", content: "Licensed electrical contractor headquartered in Hialeah, FL. Fast residential, commercial & 24/7 emergency electrical services. Call (786) 307-5933." },
      { name: "keywords", content: "electrical contractor Hialeah FL, electrician Hialeah FL, licensed electrician Hialeah, commercial electrician Hialeah, 24/7 emergency electrician Hialeah, panel upgrade Hialeah FL, electrical repair Hialeah FL" },
      { property: "og:title", content: "Electrical Contractor in Hialeah, FL | HQ Electrician Hialeah" },
      { property: "og:description", content: "Licensed electrical contractor headquartered in Hialeah, FL. Fast residential rewiring, commercial build-outs, 200A panel upgrades, and 24/7 emergency repairs." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/service-areas/hialeah-fl" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/service-areas/hialeah-fl" }
    ],
  }),
  component: HialeahServiceAreaPage,
});

function HialeahServiceAreaPage() {
  const { t } = useLanguage();

  const neighborhoods = [
    "Hialeah Gardens", "Miami Lakes", "Palm Springs North", "Hialeah West",
    "Seminola / East Hialeah", "Country Club", "Hialeah Heights", "Medley Industrial District",
    "West Hialeah Industrial Corridor", "Opa-Locka Border", "Doral Border", "NW 77th Court Corridor"
  ];

  const servicesOffered = [
    t("Residential 200-Amp & 400-Amp Electrical Panel Upgrades", "Actualizaciones de Paneles Residenciales de 200A y 400A"),
    t("Commercial & Industrial 3-Phase Power Distribution", "Distribución de Potencia Trifásica Comercial e Industrial"),
    t("Immediate Priority 24/7 Emergency Dispatch in Hialeah", "Despacho de Emergencia Prioritario Inmediato 24/7 en Hialeah"),
    t("Whole-House Copper Rewiring & Aluminum Line Corrections", "Recableado de Cobre y Correcciones de Líneas de Aluminio"),
    t("Level 2 EV Charging Station Installations (Tesla & Universal)", "Instalación de Cargadores de EV Nivel 2"),
    t("Whole-Home Standby Generator Deployments (Generac/Kohler)", "Instalaciones de Generadores de Respaldo"),
    t("Industrial Warehouse High-Bay Lighting & Machinery Hookups", "Iluminación High-Bay y Conexiones de Maquinaria Industrial"),
    t("City of Hialeah Building Department Permitting & Sign-Offs", "Permisos del Departamento de Construcción de Hialeah"),
  ];

  const faqs = [
    {
      q: t("Where is Electrical Contractor Corp headquartered in Hialeah?", "¿Dónde tiene su sede Electrical Contractor Corp en Hialeah?"),
      a: t("Our primary operations center and physical headquarters is located at 18730 NW 77 TH CT, Hialeah, FL 33015. Being locally based allows us to provide rapid on-site emergency dispatch across Hialeah, Hialeah Gardens, and Miami Lakes within minutes.", "Nuestro centro de operaciones principal y sede física se encuentra en 18730 NW 77 TH CT, Hialeah, FL 33015. Estar ubicados localmente nos permite ofrecer un despacho de emergencia rápido en Hialeah en cuestión de minutos.")
    },
    {
      q: t("Do you handle City of Hialeah electrical building permits and inspections?", "¿Gestionan los permisos de construcción eléctrica y las inspecciones de la Ciudad de Hialeah?"),
      a: t("Yes. We pull electrical permits directly through the City of Hialeah Building Department (and Miami-Dade County), schedule all rough-in and final inspections, and coordinate meter re-energization with Florida Power & Light (FPL).", "Sí. Tramitamos permisos directamente a través del Departamento de Construcción de la Ciudad de Hialeah, programamos inspecciones y coordinamos con FPL.")
    },
    {
      q: t("Are your electricians fluent in English and Spanish?", "¿Sus electricistas hablan inglés y español con fluidez?"),
      a: t("Yes! Our entire customer support team and certified master electricians are fully bilingual (English and Spanish), ensuring crystal-clear communication throughout your project.", "¡Sí! Todo nuestro equipo de atención al cliente y maestros electricistas certificados son completamente bilingües (inglés y español).")
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
        "name": "Hialeah, FL",
        "item": "https://electricalcontractorcorp.com/service-areas/hialeah-fl"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": "https://electricalcontractorcorp.com/#organization",
    "name": "Electrical Contractor Corp - Hialeah Headquarters",
    "image": "https://electricalcontractorcorp.com/assets/logo.png",
    "telephone": "+17863075933",
    "url": "https://electricalcontractorcorp.com/service-areas/hialeah-fl",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "18730 NW 77 TH CT",
      "addressLocality": "Hialeah",
      "addressRegion": "FL",
      "postalCode": "33015",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.8576",
      "longitude": "-80.2781"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Hialeah"
      },
      {
        "@type": "City",
        "name": "Hialeah Gardens"
      },
      {
        "@type": "City",
        "name": "Miami Lakes"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Miami-Dade County"
      }
    ],
    "description": "Licensed electrical contractor headquartered in Hialeah, FL providing rapid residential, commercial, industrial, and 24/7 emergency electrical services."
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
        eyebrow={t("Hialeah Corporate Headquarters", "Sede Corporativa en Hialeah")}
        title={t("Licensed Electrical Contractor in Hialeah, FL", "Contratista Eléctrico Autorizado en Hialeah, FL")}
        subtitle={t("Headquartered at 18730 NW 77 TH CT, Hialeah FL 33015. Immediate local dispatch for residential, commercial, industrial, and emergency electrical needs.", "Con sede en 18730 NW 77 TH CT, Hialeah FL 33015. Despacho local inmediato para necesidades residenciales, comerciales e industriales.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10 text-left">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary tracking-tight">
                  {t("Hialeah's Premier Hometown Electrical Contractor", "El Contratista Eléctrico Líder de Hialeah")}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("Headquartered right here in Hialeah at 18730 NW 77th CT, Electrical Contractor Corp is proud to be the trusted local electrical contractor for homeowners, commercial property owners, and industrial warehouse operators across Hialeah, Hialeah Gardens, and Miami Lakes.", "Con sede aquí mismo en Hialeah en 18730 NW 77th CT, Electrical Contractor Corp se enorgullece de ser el contratista eléctrico local de confianza para propietarios y operadores industriales en Hialeah, Hialeah Gardens y Miami Lakes.")}
                </p>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("Because our operations hub and fully equipped service vans are based directly in Hialeah, we provide the fastest emergency response times in Northwest Miami-Dade. Whether you require a 200A electrical panel upgrade, warehouse high-bay LED lighting retrofit, 3-phase machinery wiring, or EV charger installation, our fully bilingual master electricians deliver top-quality craftsmanship with guaranteed transparent pricing.", "Dado que nuestro centro de operaciones está ubicado directamente en Hialeah, ofrecemos los tiempos de respuesta de emergencia más rápidos en el noroeste de Miami-Dade. Nuestros maestros electricistas bilingües ofrecen mano de obra de primera calidad.")}
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Electrical Services in Hialeah, FL", "Servicios Eléctricos en Hialeah, FL")}
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
                  {t("Hialeah Areas & Communities We Serve", "Comunidades y Zonas de Hialeah que Servimos")}
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
                  alt="Electrical Contractor Corp headquarters in Hialeah, FL"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    {t("Headquarters Operations Hub", "Centro de Operaciones Sede")}
                  </div>
                  <div className="mt-1 font-display text-xl font-extrabold">
                    18730 NW 77 TH CT, Hialeah FL
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Contact Our Hialeah Team", "Contacte a Nuestro Equipo de Hialeah")}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Schedule an on-site visit or immediate emergency dispatch. Hablamos Español.", "Programe una visita en el sitio o despacho de emergencia inmediato. Hablamos Español.")}
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
                    <ShieldCheck className="h-4 w-4 text-primary" /> {t("State License #EC13009876", "Licencia Estatal #EC13009876")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" /> {t("Fastest Local Dispatch in Hialeah", "El Despacho Local Más Rápido en Hialeah")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" /> {t("Bilingual English / Spanish Team", "Equipo Bilingüe Inglés / Español")}
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
