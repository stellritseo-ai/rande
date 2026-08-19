import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ServiceArea } from "@/components/site/ServiceArea";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  MapPin, CheckCircle2, Phone, ShieldCheck, Clock, Award, 
  ChevronRight, Building2, Home, Zap, AlertTriangle, ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/service-areas/")({
  head: () => ({
    meta: [
      { title: "Florida Electrical Service Areas | Electrical Contractor Corp" },
      { name: "description", content: "Proudly serving the entire state of Florida. Licensed electricians for residential, commercial, industrial & 24/7 emergency services. Call (786) 307-5933." },
      { name: "keywords", content: "electrician Florida, electrical contractor statewide Florida, Florida electrical service areas, electrical company Florida, licensed electrician Florida, emergency electrician Florida" },
      { property: "og:title", content: "Florida Electrical Service Areas | Electrical Contractor Corp" },
      { property: "og:description", content: "Statewide licensed electrical contracting across Florida. Residential, commercial, industrial, and 24/7 emergency dispatch." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/service-areas" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/service-areas" }
    ],
  }),
  component: ServiceAreasIndexPage,
});

function ServiceAreasIndexPage() {
  const { t } = useLanguage();

  const regions = [
    {
      name: t("Miami-Dade County & South Florida", "Condado de Miami-Dade y Sur de Florida"),
      tag: t("Primary Operational Headquarters", "Sede Operativa Principal"),
      desc: t("Rapid 60-minute emergency dispatch and full-service residential, commercial, and industrial contracting.", "Despacho de emergencia rápido en 60 minutos y contratación residencial, comercial e industrial completa."),
      hubs: [
        { name: "Miami, FL", to: "/service-areas/miami-fl" },
        { name: "Hialeah, FL (Headquarters)", to: "/service-areas/hialeah-fl" },
        { name: "Doral, FL", to: "/service-areas/miami-fl" },
        { name: "Coral Gables, FL", to: "/service-areas/miami-fl" },
        { name: "Brickell / Downtown Miami", to: "/service-areas/miami-fl" },
        { name: "Miami Beach / Aventura", to: "/service-areas/miami-fl" },
      ]
    },
    {
      name: t("Broward County & Fort Lauderdale Metro", "Condado de Broward y Metro Fort Lauderdale"),
      tag: t("Active Daily Dispatch Region", "Región de Despacho Diario Activo"),
      desc: t("Complete commercial build-outs, tenant improvements, whole-home rewiring, EV charging, and emergency service.", "Remodelaciones comerciales, recableado del hogar, carga de EV y servicio de emergencia."),
      hubs: [
        { name: "Fort Lauderdale, FL", to: "/service-areas/fort-lauderdale-fl" },
        { name: "Hollywood, FL", to: "/service-areas/fort-lauderdale-fl" },
        { name: "Pompano Beach, FL", to: "/service-areas/fort-lauderdale-fl" },
        { name: "Pembroke Pines, FL", to: "/service-areas/fort-lauderdale-fl" },
        { name: "Miramar, FL", to: "/service-areas/fort-lauderdale-fl" },
      ]
    },
    {
      name: t("Statewide Florida Commercial & Industrial Project Coverage", "Cobertura de Proyectos Comerciales e Industriales en Toda Florida"),
      tag: t("Statewide Licensing & Project Contracting", "Licencia Estatal y Contratación de Proyectos"),
      desc: t("State-certified electrical contracting for large-scale new construction, commercial build-outs, multi-family developments, and industrial power plants across Florida.", "Contratación eléctrica para nuevas construcciones a gran escala, desarrollos comerciales e industrias en toda Florida."),
      hubs: [
        { name: "Central Florida (Orlando Metro)", to: "/contact" },
        { name: "West Central Florida (Tampa / St. Petersburg)", to: "/contact" },
        { name: "Southwest Florida (Naples / Fort Myers)", to: "/contact" },
        { name: "Palm Beach County (Boca Raton / West Palm)", to: "/contact" },
      ]
    },
  ];

  const faqs = [
    {
      q: t("Do you genuinely provide electrical services across the entire state of Florida?", "¿Realmente brindan servicios eléctricos en todo el estado de Florida?"),
      a: t("Yes. Electrical Contractor Corp holds an active, unrestricted State Certified Electrical Contractor License (#EC13009876), authorizing us to perform electrical engineering, construction, and installations in every city and county in Florida. While our daily rapid-dispatch fleet operates primarily across South Florida (Miami-Dade, Broward, Palm Beach), our commercial and industrial construction divisions execute major projects statewide.", "Sí. Electrical Contractor Corp posee una Licencia de Contratista Eléctrico Certificado del Estado de Florida (#EC13009876) activa e irrestricta. Nuestra flota de despacho rápido opera principalmente en el sur de Florida, mientras que nuestras divisiones comerciales e industriales ejecutan proyectos importantes en todo el estado.")
    },
    {
      q: t("How do you handle emergency service calls outside of Miami-Dade County?", "¿Cómo gestionan las llamadas de emergencia fuera del condado de Miami-Dade?"),
      a: t("We operate 24/7 dedicated dispatch teams. For urgent emergency calls across Miami-Dade and Broward counties, our target on-site response is within 60 minutes. For commercial and industrial facilities throughout Florida, we schedule priority on-site response crews.", "Operamos equipos de despacho dedicados las 24 horas del día. Para emergencias en Miami-Dade y Broward, nuestro objetivo es llegar en 60 minutos.")
    },
    {
      q: t("Are your electricians familiar with local municipal building departments in Florida?", "¿Están sus electricistas familiarizados con los departamentos de construcción de Florida?"),
      a: t("Yes. We regularly pull permits and coordinate inspections with building departments and fire marshals across South Florida and statewide, ensuring 100% first-time inspection pass rates.", "Sí. Tramitamos permisos e inspecciones con departamentos de construcción y bomberos en todo el sur de Florida y a nivel estatal.")
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
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": "https://electricalcontractorcorp.com/#organization",
    "name": "Electrical Contractor Corp",
    "image": "https://electricalcontractorcorp.com/assets/logo.png",
    "telephone": "+17863075933",
    "url": "https://electricalcontractorcorp.com",
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "State",
        "name": "Florida"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Miami-Dade County"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Broward County"
      }
    ],
    "description": "Licensed electrical contractor proudly serving the entire state of Florida with residential, commercial, industrial, and 24/7 emergency electrical services."
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
        eyebrow={t("Florida Statewide Service Coverage", "Cobertura de Servicio en Toda Florida")}
        title={t("Proudly Serving The Entire State Of Florida", "Sirviendo con Orgullo a Todo el Estado de Florida")}
        subtitle={t("State-certified electrical contractor providing residential, commercial, industrial, and 24/7 emergency electrical solutions from our South Florida operations hub.", "Contratista eléctrico certificado por el estado que brinda soluciones residenciales, comerciales, industriales y de emergencia 24/7 desde nuestra sede en el sur de Florida.")}
      />

      {/* Main Coverage Overview */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-14 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {t("Statewide Reach · Local Expertise", "Alcance Estatal · Experiencia Local")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-secondary mt-2 tracking-tight">
              {t("Licensed Electrical Services Throughout Florida", "Servicios Eléctricos Autorizados en Toda Florida")}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t("Electrical Contractor Corp operates under Florida State License #EC13009876, enabling us to deliver certified electrical engineering, installation, and repair services statewide. Whether you need an emergency electrician in Miami or a commercial contracting crew for a new development in Central Florida, our licensed master electricians deliver unmatched safety, speed, and craftsmanship.", "Electrical Contractor Corp opera bajo la Licencia del Estado de Florida #EC13009876, lo que nos permite ofrecer servicios certificados de ingeniería, instalación y reparación en todo el estado. Ya sea que necesite un electricista de emergencia en Miami o un equipo comercial para un nuevo desarrollo en Florida Central, nuestros maestros electricistas ofrecen seguridad y rapidez incomparables.")}
            </p>
          </div>

          {/* Regional Cards Grid */}
          <div className="grid gap-8 lg:grid-cols-3 mb-16">
            {regions.map((reg, idx) => (
              <div 
                key={idx}
                className="rounded-3xl border border-border bg-card p-8 shadow-sm hover:shadow-md hover:border-primary/40 transition flex flex-col justify-between text-left"
              >
                <div>
                  <span className="inline-block text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
                    {reg.tag}
                  </span>
                  <h3 className="font-display text-xl font-bold text-secondary mb-3">
                    {reg.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {reg.desc}
                  </p>

                  <div className="border-t border-border/60 pt-4 space-y-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary block mb-2">
                      {t("Key Hubs & Cities:", "Centros y Ciudades Clave:")}
                    </span>
                    {reg.hubs.map((hub, hIdx) => (
                      <Link
                        key={hIdx}
                        to={hub.to}
                        className="flex items-center justify-between text-sm font-semibold text-muted-foreground hover:text-primary transition py-1 group"
                      >
                        <span className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                          {hub.name}
                        </span>
                        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/60">
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/contact">
                      {t("Request Service in This Region", "Solicitar Servicio en Esta Región")}
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Local Landing Pages Quick Access */}
          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 lg:p-10 text-left">
            <div className="max-w-3xl">
              <h3 className="font-display text-2xl font-extrabold text-secondary">
                {t("Looking for Local City Service Centers?", "¿Busca Centros de Servicio Locales por Ciudad?")}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t("Explore dedicated local service pages for our primary operating markets across South Florida, detailing local electrical codes, rapid dispatch times, and neighborhood coverage.", "Explore las páginas de servicio locales dedicadas a nuestros principales mercados en el sur de Florida.")}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="default">
                  <Link to="/service-areas/miami-fl">
                    Miami, FL Electrical Services <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild size="default">
                  <Link to="/service-areas/hialeah-fl">
                    Hialeah, FL Headquarters <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild size="default">
                  <Link to="/service-areas/fort-lauderdale-fl">
                    Fort Lauderdale & Broward <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="border-t border-border mt-16 pt-12 text-left">
            <h3 className="font-display text-2xl font-extrabold text-secondary mb-6">
              {t("Frequently Asked Questions About Florida Service Areas", "Preguntas Frecuentes Sobre las Áreas de Servicio de Florida")}
            </h3>
            <div className="space-y-4 max-w-4xl">
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
      </section>

      <ServiceArea />
      <Process />
      <EmergencyCTA />
    </>
  );
}
