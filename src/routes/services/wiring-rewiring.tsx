import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-residential.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/wiring-rewiring")({
  head: () => ({
    meta: [
      { title: "House Rewiring & Electrical Wiring in Florida | Electrical Contractor Corp" },
      { name: "description", content: "Licensed electrical wiring & whole house rewiring in Florida. Aluminum wire mitigation, knob & tube removal & code corrections. Call (786) 307-5933." },
      { name: "keywords", content: "house rewiring Florida, home electrical rewiring Florida, electrical wiring contractor Florida, home electrical wiring Florida, aluminum wiring repair Florida, dedicated electrical circuit installation, electrical rewiring Miami" },
      { property: "og:title", content: "House Rewiring & Electrical Wiring in Florida | Electrical Contractor Corp" },
      { property: "og:description", content: "Licensed whole-house copper rewiring, aluminum wiring mitigation (AlumiConn), knob & tube removal, and electrical code corrections across Florida." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/services/wiring-rewiring" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/services/wiring-rewiring" }
    ],
  }),
  component: WiringPage,
});

function WiringPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("Whole-House Copper Structural Rewiring", "Recableado Estructural de Cobre para Todo el Hogar"),
    t("Aluminum Wiring Hazard Remediation & AlumiConn Mitigations", "Remediación de Cableado de Aluminio y Conectores AlumiConn"),
    t("Outdated Knob & Tube Wiring Safety Removal", "Eliminación Segura de Cableado Antiguo de Perilla y Tubo"),
    t("Dedicated 120V & 240V Appliance Circuit Installations", "Instalación de Circuitos Dedicados de 120V y 240V"),
    t("Arc Fault (AFCI) & Ground Fault (GFCI) Code Corrections", "Correcciones del Código de Seguridad AFCI y GFCI"),
    t("Kitchen, Bathroom & Home Addition Electrical Wiring", "Cableado para Cocinas, Baños y Ampliaciones del Hogar"),
    t("Concealed Wall Routing with Minimal Drywall Cutting", "Tendido Oculto en Paredes con Mínimo Corte de Drywall"),
    t("Hot Tub, Swimming Pool Pump & Spa Dedicated Feeder Wiring", "Cableado de Jacuzzis, Bombas de Piscina y Spas"),
    t("Ungrounded 2-Prong Outlet Replacement to 3-Prong Grounded", "Reemplazo de Tomacorrientes de 2 Clavijas por Puesta a Tierra"),
    t("Complete 4-Point Insurance Electrical Inspection Sign-Offs", "Certificaciones para Inspecciones Eléctricas de Seguro de 4 Puntos"),
  ];

  const faqs = [
    {
      q: t("Why is vintage aluminum wiring dangerous in Florida homes?", "¿Por qué es peligroso el cableado de aluminio antiguo en casas de Florida?"),
      a: t("Single-strand aluminum wiring (installed in many homes between 1965 and 1973) expands and contracts significantly under electrical load. Over time, connections at switches and outlets become loose and oxidize, generating extreme heat and causing house fires. We perform certified remediations using COPALUM or UL-listed AlumiConn connectors to eliminate this risk without requiring a full tear-out.", "El cableado de aluminio se expande y contrae bajo carga. Con el tiempo, las conexiones se aflojan y oxidan, generando calor e incendios. Realizamos remediaciones certificadas usando conectores AlumiConn para eliminar este riesgo.")
    },
    {
      q: t("How long does a complete whole-house rewire take to complete?", "¿Cuánto tiempo tarda un recableado completo de toda la casa?"),
      a: t("A typical whole-house rewire takes between 4 to 8 business days, depending on square footage, single vs. multi-story layouts, and attic accessibility. Our technicians work room-by-room to ensure you have functioning power in essential areas every evening.", "Un recableado completo suele tardar entre 4 y 8 días laborables. Nuestros técnicos trabajan habitación por habitación para garantizar que tenga energía en áreas esenciales cada noche.")
    },
    {
      q: t("Will you have to cut large holes in my walls during a rewiring project?", "¿Tendrán que hacer grandes agujeros en las paredes durante el recableado?"),
      a: t("No. Our master electricians use specialized flex drill bits and fish tapes through attics, crawlspaces, and basements, keeping drywall incisions to an absolute minimum. Any small access cuts are cleanly mapped and prepared for patching.", "No. Nuestros maestros electricistas utilizan brocas flexibles y guías a través de áticos y entretechos, reduciendo los cortes de paneles de yeso al mínimo absoluto.")
    },
    {
      q: t("Can you provide an electrical certification for our 4-point insurance inspection?", "¿Pueden certificar nuestra inspección de 4 puntos para el seguro?"),
      a: t("Yes. Florida insurance companies strictly inspect wiring type, panel condition, and ground bonding. Once we resolve open hazards, we provide a formal Certificate of Electrical Inspection to satisfy your homeowners insurance carrier.", "Sí. Las aseguradoras de Florida inspeccionan estrictamente el cableado y los paneles. Tras corregir los peligros, proporcionamos un Certificado de Inspección formal para su aseguradora.")
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
        "name": "Wiring & Rewiring",
        "item": "https://electricalcontractorcorp.com/services/wiring-rewiring"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "House Rewiring & Electrical Wiring Services",
    "serviceType": "Electrical Wiring Contractor",
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
    "description": "Licensed whole-house copper rewiring, aluminum wiring remediation, knob and tube removal, and dedicated appliance circuits in Florida."
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
        eyebrow={t("Electrical Wiring & Rewiring", "Cableado y Recableado Eléctrico")}
        title={t("Whole-House Rewiring & Structural Wiring in Florida", "Recableado de Casas y Cableado Estructural en Florida")}
        subtitle={t("Protect your property from outdated, degraded, or ungrounded wiring. Our licensed master electricians deliver safe, code-compliant copper rewiring.", "Proteja su propiedad de cableados obsoletos o sin conexión a tierra. Nuestros maestros electricistas ofrecen recableado de cobre seguro y que cumple con el código.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10 text-left">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary tracking-tight">
                  {t("Safe, Code-Compliant Copper Electrical Infrastructure", "Infraestructura Eléctrica de Cobre Segura y Conforme al Código")}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("Electrical wiring is the invisible nervous system of your property. Over decades, structural movement, insulation brittleness, rodent interference, and ungrounded circuits can turn outdated wiring into a serious fire hazard. Electrical Contractor Corp provides precision whole-house copper rewiring, aluminum wiring mitigations, and code compliance corrections.", "El cableado eléctrico es el sistema nervioso invisible de su propiedad. Con el paso de las décadas, el desgaste del aislamiento y los circuitos sin conexión a tierra pueden convertirlo en un peligro. Electrical Contractor Corp ofrece recableado de cobre, mitigación de aluminio y correcciones de código.")}
                </p>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("Whether you need a dedicated 240V line for a high-draw appliance, a kitchen remodel circuit upgrade, or an insurance-mandated rewiring for a historic home, our electricians treat your property with surgical cleanliness and utmost care.", "Ya sea que necesite una línea dedicada de 240V, una actualización para la cocina o un recableado exigido por el seguro para una casa histórica, nuestros electricistas tratan su propiedad con máxima limpieza y cuidado.")}
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Our Wiring & Rewiring Specialties", "Nuestras Especialidades en Cableado y Recableado")}
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
                  alt="Installing structural copper electrical wiring"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    {t("Florida Wiring Specialists", "Especialistas en Cableado de Florida")}
                  </div>
                  <div className="mt-1 font-display text-xl font-extrabold">
                    {t("Whole-Home Rewiring & Code Upgrades", "Recableado Completo y Actualizaciones")}
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Book a Wiring Diagnostic", "Reserve un Diagnóstico de Cableado")}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Schedule an on-site circuit assessment. We check grounding, test insulation resistance, and provide a transparent quote.", "Programe una evaluación de circuitos en el sitio. Verificamos la conexión a tierra, probamos el aislamiento y ofrecemos una cotización transparente.")}
                </p>

                <div className="mt-6 space-y-3.5">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">{t("Schedule Inspection", "Programar Inspección")}</Link>
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
                    <Clock className="h-4 w-4 text-primary" /> {t("4-Point Insurance Report Certification", "Certificación de Informe de Seguro de 4 Puntos")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" /> {t("Minimal Drywall Disruption Guarantee", "Mínimo Impacto en Paneles de Yeso")}
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
