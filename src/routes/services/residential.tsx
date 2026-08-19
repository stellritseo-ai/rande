import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-residential.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/residential")({
  head: () => ({
    meta: [
      { title: "Residential Electrician in Florida | Electrical Contractor Corp" },
      { name: "description", content: "Licensed residential electricians serving Florida. Home rewiring, panel upgrades, lighting, EV chargers & safety inspections. Free estimates: (786) 307-5933." },
      { name: "keywords", content: "residential electrician Florida, residential electrical contractor Florida, home electrician Florida, residential electrical services Florida, home electrical repair Florida, house rewiring Florida, electrical panel upgrade Florida" },
      { property: "og:title", content: "Residential Electrician in Florida | Electrical Contractor Corp" },
      { property: "og:description", content: "Licensed residential electricians delivering expert home wiring, panel upgrades, EV chargers, and safety repairs across Florida." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/services/residential" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/services/residential" }
    ],
  }),
  component: ResidentialPage,
});

function ResidentialPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("Whole-Home Copper Rewiring & Code Corrections", "Recableado Estructural de Cobre y Correcciones"),
    t("Electrical Panel Upgrades (100A to 200A/400A)", "Actualizaciones de Panel (100A a 200A/400A)"),
    t("Dedicated Circuits for AC, Ovens & EV Chargers", "Circuitos Dedicados para AC, Hornos y EV"),
    t("Indoor LED Recessed & Custom Accent Lighting", "Iluminación Empotrada LED y Acentos"),
    t("Outdoor Security & Landscape Low-Voltage Lighting", "Iluminación Exterior y de Paisaje"),
    t("GFCI & AFCI Breaker Safety Receptacle Upgrades", "Actualizaciones de Receptáculos GFCI y AFCI"),
    t("Smart Home Automation, Switches & Thermostats", "Automatización, Interruptores y Termostatos"),
    t("Whole-House Surge Protection Systems", "Protección contra Sobretensiones para el Hogar"),
    t("Ceiling Fan & Chandelier Reinforcement Wiring", "Instalación de Ventiladores y Candelabros"),
    t("Comprehensive Home Electrical Safety Inspections", "Inspecciones Integrales de Seguridad Eléctrica"),
  ];

  const faqs = [
    {
      q: t("How do I know if my home needs a rewire?", "¿Cómo sé si mi casa necesita un re-cableado?"),
      a: t("Signs include frequently tripping breakers, flickering lights when appliances turn on, burning odors near outlets, two-prong ungrounded outlets, or if your home was built over 30-40 years ago with older wiring types like aluminum or degraded cloth insulation.", "Las señales incluyen disyuntores que se disparan con frecuencia, luces parpadeantes, olores a quemado cerca de los tomacorrientes, tomacorrientes de dos clavijas sin conexión a tierra, o si su casa tiene más de 30-40 años con estilos de cableado más antiguos como aluminio o aislamiento textil degradado.")
    },
    {
      q: t("Are your residential electricians licensed and insured in Florida?", "¿Están sus electricistas residenciales autorizados y asegurados en Florida?"),
      a: t("Yes. Electrical Contractor Corp operates under Florida State Certified Electrical Contractor License #EC13009876. Every technician is background-checked, drug-tested, and fully insured with $2M general liability and workers' compensation.", "Sí. Electrical Contractor Corp opera bajo la Licencia de Contratista Eléctrico Certificado del Estado de Florida #EC13009876. Cada técnico es sometido a verificación de antecedentes y cuenta con seguro completo.")
    },
    {
      q: t("Do you provide free upfront estimates for home electrical repairs?", "¿Proporcionan presupuestos iniciales gratuitos para reparaciones eléctricas del hogar?"),
      a: t("Yes. We offer transparent, flat-rate written estimates within 24 hours. We charge by the project rather than unexpected hourly fees, ensuring complete peace of mind.", "Sí. Ofrecemos presupuestos escritos transparentes y de tarifa fija en 24 horas. Cobramos por proyecto en lugar de tarifas por hora imprevistas.")
    },
    {
      q: t("Do you offer 24/7 emergency dispatch for residential electrical hazards?", "¿Ofrecen despacho de emergencia 24/7 para peligros eléctricos residenciales?"),
      a: t("Absolutely. If you experience sparking panels, burning odors, or complete power loss, our on-call emergency electricians are available 24/7 across South Florida and statewide.", "Absolutamente. Si experimenta paneles con chispas, olores a quemado o pérdida total de energía, nuestros electricistas de emergencia de guardia están disponibles 24/7.")
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
        "name": "Residential Electrical",
        "item": "https://electricalcontractorcorp.com/services/residential"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Electrical Services",
    "serviceType": "Residential Electrical Contracting",
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
    "description": "Licensed residential electrical services across Florida: home rewiring, 200A panel upgrades, EV chargers, lighting installation, and safety repairs."
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
        eyebrow={t("Residential Electrical Services", "Servicios Eléctricos Residenciales")}
        title={t("Trusted Residential Electrician Serving Florida", "Electricista Residencial de Confianza en Florida")}
        subtitle={t("From safety inspections and panel upgrades to custom lighting and full home rewiring, our licensed electricians power your home with safety and precision.", "Desde inspecciones de seguridad y actualizaciones de panel hasta iluminación y recableado completo, nuestros electricistas energizan su hogar con seguridad y precisión.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10 text-left">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary tracking-tight">
                  {t("Complete Home Electrical Solutions in Florida", "Soluciones Eléctricas Integrales para el Hogar en Florida")}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("Your home's electrical infrastructure is essential to your family's daily comfort and safety. At Electrical Contractor Corp, our licensed master electricians specialize in comprehensive residential electrical repairs, energy-efficient modernizations, and new installations. Whether you are upgrading your electrical panel to accommodate modern appliances, installing Level 2 EV charging, or renovating your kitchen, we ensure every circuit meets the strict safety standards of the National Electrical Code (NEC) and Florida building codes.", "La infraestructura eléctrica de su hogar es esencial para el confort y la seguridad diaria de su familia. En Electrical Contractor Corp, nuestros maestros electricistas se especializan en reparaciones residenciales integrales, modernizaciones eficientes e instalaciones. Nos aseguramos de que cada circuito cumpla con las normas del Código Eléctrico Nacional (NEC) y los códigos de Florida.")}
                </p>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("Florida's climate presents unique challenges, including severe storm lightning surges, heavy humidity, and high air conditioning electrical draw. We install heavy-duty whole-home surge suppressors, corrosion-resistant outdoor enclosures, and dedicated subpanels to ensure your home remains safe and resilient year-round.", "El clima de Florida presenta desafíos únicos, incluidos picos de sobretensión por tormentas, alta humedad y alto consumo de aire acondicionado. Instalamos supresores de sobretensión para todo el hogar y gabinetes resistentes a la corrosión.")}
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Our Residential Specialties", "Nuestras Especialidades Residenciales")}
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
                  alt="Residential electrical installation by Electrical Contractor Corp"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    {t("Florida Residential Master Electricians", "Electricistas Residenciales de Florida")}
                  </div>
                  <div className="mt-1 font-display text-xl font-extrabold">
                    {t("Licensed Home Electrical Installations", "Instalaciones Eléctricas Autorizadas para el Hogar")}
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Need a Home Electrician?", "¿Necesita un Electricista en Casa?")}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Request a transparent, flat-rate estimate. We coordinate permits, utility disconnects with FPL, and complete all inspections.", "Solicite un presupuesto transparente de tarifa fija. Coordinamos permisos, desconexiones con FPL y completamos todas las inspecciones.")}
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
                    <ShieldCheck className="h-4 w-4 text-primary" /> {t("State Certified License #EC13009876", "Licencia Certificada Estatal #EC13009876")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" /> {t("Fast Estimates & Same-Day Service", "Presupuestos Rápidos y Servicio el Mismo Día")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" /> {t("100% Code Compliance Guarantee", "Garantía de Cumplimiento del 100%")}
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
