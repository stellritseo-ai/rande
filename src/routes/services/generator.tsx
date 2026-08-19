import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-generator.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/generator")({
  head: () => ({
    meta: [
      { title: "Generator Installation in Florida | Electrical Contractor Corp" },
      { name: "description", content: "Whole house & standby generator installation in Florida. Generac & Kohler certified installers. Automatic transfer switches & hurricane backup. Call (786) 307-5933." },
      { name: "keywords", content: "generator installation Florida, generator installer Florida, whole house generator installation Florida, standby generator installation Florida, backup generator installation Florida, commercial generator installation Florida, Generac generator installation Florida" },
      { property: "og:title", content: "Generator Installation in Florida | Electrical Contractor Corp" },
      { property: "og:description", content: "Certified whole house and commercial standby generator installation in Florida. Automatic transfer switches, hurricane storm protection, and fuel hookups." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/services/generator" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/services/generator" }
    ],
  }),
  component: GeneratorPage,
});

function GeneratorPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("Generac Standby Generator Whole-Home Installations", "Instalaciones de Generadores de Respaldo Generac"),
    t("Kohler Power Systems Standby Generator Deployments", "Instalaciones de Generadores Kohler para el Hogar"),
    t("Automatic Transfer Switch (ATS) Wiring & Commissioning", "Interruptores de Transferencia Automática (ATS)"),
    t("Manual Generator Interlock Kit Installs (Portable Units)", "Kits de Enclavamiento Manual para Generadores Portátiles"),
    t("High-Capacity Commercial & Industrial Standby Generators", "Generadores de Respaldo Comerciales e Industriales"),
    t("Florida Hurricane Wind-Rated Concrete Equipment Pads", "Plataformas de Concreto Certificadas contra Huracanes"),
    t("Propane (LP) & Natural Gas (NG) Fuel Line Coordination", "Coordinación de Líneas de Gas Natural y Propano"),
    t("Smart Mobile Generator Power Monitoring Integration", "Monitoreo Inteligente de Generador en el Celular"),
    t("Annual Preventative Maintenance, Oil & Battery Service", "Mantenimiento Anual Preventivo, Aceite y Baterías"),
    t("Full Municipal Permitting & Engineering Sign-Offs", "Permisos Municipales y Certificaciones de Ingeniería"),
  ];

  const faqs = [
    {
      q: t("How does a whole-home standby generator work during a power outage?", "¿Cómo funciona un generador de respaldo para toda la casa durante un corte?"),
      a: t("A standby generator is permanently installed outdoors and connected to your electrical panel via an Automatic Transfer Switch (ATS) and a fuel source (natural gas or liquid propane). Within 10 to 20 seconds of detecting a utility power failure, the ATS automatically starts the generator and transfers your property's electrical load seamlessly.", "Un generador de respaldo se instala de forma permanente en el exterior y se conecta a su panel mediante un Interruptor de Transferencia Automática (ATS) y una fuente de gas. En 10 a 20 segundos tras detectar un corte, el ATS enciende el generador y transfiere la carga de forma automática.")
    },
    {
      q: t("What size generator do I need to run central AC and essential appliances in Florida?", "¿Qué tamaño de generador necesito para hacer funcionar el aire acondicionado y electrodomésticos en Florida?"),
      a: t("For typical 2,000 to 3,500 sq. ft. Florida homes, a 20kW to 26kW air-cooled standby generator is the gold standard. It provides sufficient capacity to run whole-house central air conditioning, refrigeration, lighting, security, and kitchen appliances simultaneously.", "Para hogares típicos de 2,000 a 3,500 pies cuadrados en Florida, un generador de 20kW a 26kW es el estándar de oro. Proporciona suficiente capacidad para operar aire acondicionado central, refrigeración, iluminación y cocina simultáneamente.")
    },
    {
      q: t("Do you handle hurricane concrete anchoring pads and municipal permits?", "¿Se encargan de las plataformas de anclaje para huracanes y los permisos?"),
      a: t("Yes. Florida building code requires engineered concrete pads and tie-down anchoring rated to withstand 150+ MPH hurricane winds. Electrical Contractor Corp handles the complete turnkey process including mechanical pads, plumbing gas coordination, electrical wiring, and city permits.", "Sí. El código de construcción de Florida exige plataformas de concreto y anclajes certificados para soportar vientos de huracán de más de 150 MPH. Electrical Contractor Corp gestiona todo el proceso llave en mano.")
    },
    {
      q: t("Can I install a manual interlock switch for a portable generator instead?", "¿Puedo instalar un interruptor de enclavamiento manual para un generador portátil?"),
      a: t("Yes. If you prefer using a portable generator, we install safe, code-compliant manual generator interlock kits and dedicated outdoor inlet receptacles that prevent dangerous electrical backfeeding into the utility grid.", "Sí. Si prefiere usar un generador portátil, instalamos kits de enclavamiento manual que cumplen con el código y receptáculos de entrada exteriores para evitar retroalimentación peligrosa.")
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
        "name": "Generator Installation",
        "item": "https://electricalcontractorcorp.com/services/generator"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Whole-Home Standby Generator Installation Services",
    "serviceType": "Generator Installation",
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
    "description": "Licensed whole-house standby generator installations across Florida. Generac and Kohler certified installers, automatic transfer switches, and hurricane backup power systems."
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
        eyebrow={t("Emergency Standby Generators", "Generadores de Respaldo de Emergencia")}
        title={t("Whole-Home Generator Installation in Florida", "Instalación de Generadores para el Hogar en Florida")}
        subtitle={t("Protect your family and property during Florida hurricane outages. We install certified Generac and Kohler standby generators with automatic transfer switches.", "Proteja a su familia y propiedad durante los apagones por huracanes en Florida. Instalamos generadores de respaldo Generac y Kohler con interruptores automáticos.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10 text-left">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary tracking-tight">
                  {t("Uninterrupted Backup Power for Florida Hurricane Season", "Energía de Respaldo Ininterrumpida para la Temporada de Huracanes")}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("Florida storm seasons bring extreme winds, severe lightning, and extended power outages that can paralyze homes and businesses for days or weeks. A permanently installed standby generator protects your property by keeping your central air conditioning running, food cold, medical devices powered, and security systems active.", "Las temporadas de tormentas en Florida traen vientos extremos y cortes de energía prolongados que pueden paralizar propiedades durante días o semanas. Un generador de respaldo instalado permanentemente protege su propiedad manteniendo el aire acondicionado, alimentos y sistemas de seguridad activos.")}
                </p>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("Electrical Contractor Corp is a certified installer for top manufacturers including Generac Power Systems, Kohler, and Briggs & Stratton. We manage the entire project from initial load sizing and concrete pad engineering to automatic transfer switch wiring, fuel plumbing coordination, and final municipal inspection sign-offs.", "Electrical Contractor Corp es un instalador certificado de los principales fabricantes, incluidos Generac Power Systems y Kohler. Gestionamos todo el proyecto, desde el cálculo de carga hasta los interruptores automáticos e inspecciones finales.")}
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Our Generator Installation Capabilities", "Nuestras Capacidades de Instalación de Generadores")}
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
                  alt="Installing standby generator system in Florida"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    {t("Certified Generator Specialists", "Especialistas Certificados en Generadores")}
                  </div>
                  <div className="mt-1 font-display text-xl font-extrabold">
                    {t("Generac & Kohler Automatic Standby", "Generadores de Respaldo Automáticos")}
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Get a Standby Generator Estimate", "Obtenga una Cotización de Generador")}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Book a free on-site generator layout and electrical load review. We'll map your system and provide a transparent, all-inclusive quote.", "Reserve una revisión gratuita de carga eléctrica y diseño de generador en el sitio. Mapearemos su sistema y ofreceremos una cotización transparente.")}
                </p>

                <div className="mt-6 space-y-3.5">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">{t("Schedule Generator Consultation", "Programar Consulta de Generador")}</Link>
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
                    <Clock className="h-4 w-4 text-primary" /> {t("Automatic 10-Second Power Transfer", "Transferencia Automática de Energía en 10 Segundos")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" /> {t("150+ MPH Hurricane Wind-Rated Pads", "Plataformas para Vientos de Huracán de 150+ MPH")}
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
