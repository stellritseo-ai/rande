import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight, MapPin, Building2, Zap, Home } from "lucide-react";
import img from "@/assets/service-residential.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/service-areas/miami-fl")({
  head: () => ({
    meta: [
      { title: "Electrical Contractor in Miami, FL | Licensed Electrician Miami" },
      { name: "description", content: "Top-rated electrical contractor in Miami, FL. Residential, commercial & 24/7 emergency electrical services. Panel upgrades, EV chargers. Call (786) 307-5933." },
      { name: "keywords", content: "electrical contractor Miami FL, electrician Miami FL, licensed electrician Miami, commercial electrician Miami FL, emergency electrician Miami FL, electrical repair Miami, EV charger installation Miami" },
      { property: "og:title", content: "Electrical Contractor in Miami, FL | Licensed Electrician Miami" },
      { property: "og:description", content: "Licensed electrical contractor in Miami, FL providing residential rewiring, commercial build-outs, panel upgrades, and 24/7 emergency dispatch." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/service-areas/miami-fl" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/service-areas/miami-fl" }
    ],
  }),
  component: MiamiServiceAreaPage,
});

function MiamiServiceAreaPage() {
  const { t } = useLanguage();

  const neighborhoods = [
    "Downtown Miami & Brickell", "Coral Gables", "Coconut Grove", "Wynwood & Design District",
    "Miami Beach & South Beach", "Doral", "Little Havana", "Kendall & Pinecrest",
    "Aventura & Sunny Isles", "Edgewater & Midtown", "Key Biscayne", "Westchester"
  ];

  const servicesOffered = [
    t("Residential 200A/400A Electrical Panel Upgrades", "Actualizaciones de Panel Eléctrico de 200A/400A"),
    t("Commercial Tenant Improvements & Office Lighting", "Remodelaciones Comerciales e Iluminación de Oficinas"),
    t("Level 2 EV Charging Station Installations (Tesla/Universal)", "Instalación de Cargadores de EV Nivel 2"),
    t("Whole-Home Standby Generator Deployments", "Instalaciones de Generadores de Respaldo para el Hogar"),
    t("24/7 Rapid Emergency Dispatch Across Miami-Dade", "Despacho de Emergencia Rápido 24/7 en Miami-Dade"),
    t("Whole-House Copper Rewiring & Aluminum Wire Mitigations", "Recableado Estructural de Cobre y Mitigación de Aluminio"),
    t("4K PoE CCTV & Commercial Security Access Control", "Cámaras CCTV 4K PoE y Control de Acceso"),
    t("Miami-Dade Building Department Permitting & Sign-Offs", "Permisos del Departamento de Construcción de Miami-Dade"),
  ];

  const faqs = [
    {
      q: t("How quickly can an emergency electrician arrive at my Miami property?", "¿Qué tan rápido puede llegar un electricista de emergencia a mi propiedad en Miami?"),
      a: t("For urgent hazard calls (sparking breaker panels, complete power outages, burning smells) in Miami, our on-call dispatch team arrives on-site within 60 minutes. We operate 24 hours a day, 7 days a week.", "Para llamadas de peligro urgente en Miami, nuestro equipo de despacho de guardia llega al lugar en 60 minutos. Operamos las 24 horas del día, los 7 días de la semana.")
    },
    {
      q: t("Do you manage Miami-Dade County electrical permits and FPL meter disconnects?", "¿Gestionan los permisos del condado de Miami-Dade y desconexiones con FPL?"),
      a: t("Yes. Electrical Contractor Corp coordinates all required Miami-Dade municipal building permits, engineering calculations, Florida Power & Light (FPL) meter disconnects, and final city inspection approvals.", "Sí. Electrical Contractor Corp coordina todos los permisos municipales de Miami-Dade, cálculos de ingeniería, desconexiones con FPL y aprobaciones de inspección final.")
    },
    {
      q: t("Are your electricians licensed and insured in Miami, FL?", "¿Están sus electricistas autorizados y asegurados en Miami, FL?"),
      a: t("Yes. We hold an active State Certified Electrical Contractor License (#EC13009876) with $2M general liability insurance and workers' compensation coverage, ensuring full legal and financial protection.", "Sí. Poseemos una Licencia de Contratista Eléctrico Certificado del Estado (#EC13009876) con un seguro de responsabilidad civil de $2M y compensación laboral.")
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
        "name": "Miami, FL",
        "item": "https://electricalcontractorcorp.com/service-areas/miami-fl"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": "https://electricalcontractorcorp.com/service-areas/miami-fl#business",
    "name": "Electrical Contractor Corp - Miami, FL",
    "image": "https://electricalcontractorcorp.com/assets/logo.png",
    "telephone": "+17863075933",
    "url": "https://electricalcontractorcorp.com/service-areas/miami-fl",
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
      "latitude": "25.7617",
      "longitude": "-80.1918"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Miami"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Miami-Dade County"
      }
    ],
    "description": "Licensed electrical contractor in Miami, FL providing residential, commercial, industrial, and 24/7 emergency electrical services."
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
        eyebrow={t("Miami-Dade Electrical Services", "Servicios Eléctricos en Miami-Dade")}
        title={t("Licensed Electrical Contractor in Miami, FL", "Contratista Eléctrico Autorizado en Miami, FL")}
        subtitle={t("Comprehensive residential, commercial, and 24/7 emergency electrical solutions across Miami and surrounding Miami-Dade neighborhoods.", "Soluciones eléctricas residenciales, comerciales y de emergencia 24/7 en Miami y los vecindarios circundantes de Miami-Dade.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10 text-left">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary tracking-tight">
                  {t("Trusted Electrical Services for Miami Homes & Businesses", "Servicios Eléctricos de Confianza para Hogares y Comercios en Miami")}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("From high-rise condominium build-outs in Brickell and historical home rewiring in Coral Gables to retail lighting installations in Wynwood and emergency breaker replacements in Kendall, Electrical Contractor Corp delivers precision electrical craftsmanship across Miami, FL. Our state-certified master electricians understand the unique electrical infrastructure challenges of South Florida, including high humidity, salt-air corrosion, and extreme storm electrical surges.", "Desde mejoras en condominios en Brickell y recableado de casas históricas en Coral Gables hasta iluminación comercial en Wynwood y reemplazo de disyuntores en Kendall, Electrical Contractor Corp ofrece mano de obra de precisión en Miami, FL. Nuestros maestros electricistas certificados comprenden los desafíos del sur de Florida.")}
                </p>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("We offer fast 60-minute emergency dispatch throughout Miami-Dade County, transparent flat-rate project estimates, and complete municipal permitting coordination with the Miami-Dade Building Department.", "Ofrecemos despacho de emergencia rápido en 60 minutos en el condado de Miami-Dade, presupuestos transparentes de tarifa fija y coordinación completa de permisos municipales.")}
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Services Provided in Miami, FL", "Servicios Prestados en Miami, FL")}
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
                  {t("Miami Neighborhoods We Serve", "Vecindarios de Miami que Servimos")}
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
                  alt="Licensed electrician working on residential property in Miami, FL"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    {t("Miami Master Electricians", "Maestros Electricistas en Miami")}
                  </div>
                  <div className="mt-1 font-display text-xl font-extrabold">
                    {t("Miami-Dade County Operations", "Operaciones en el Condado de Miami-Dade")}
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Need an Electrician in Miami?", "¿Necesita un Electricista en Miami?")}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Request a fast, flat-rate quote or 24/7 emergency dispatch. Licensed, insured, and locally based in South Florida.", "Solicite una cotización rápida de tarifa fija o despacho de emergencia 24/7. Autorizados y asegurados.")}
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
                    <Clock className="h-4 w-4 text-primary" /> {t("60-Min Emergency Response in Miami", "Respuesta de Emergencia en 60 Minutos en Miami")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" /> {t("Miami-Dade Code Compliance Guaranteed", "Cumplimiento del Código de Miami-Dade Garantizado")}
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
