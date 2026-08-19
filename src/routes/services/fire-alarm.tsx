import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-panel.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/fire-alarm")({
  head: () => ({
    meta: [
      { title: "Fire Alarm Installation & Systems in Florida | Electrical Contractor Corp" },
      { name: "description", content: "Licensed fire alarm contractor in Florida. Commercial fire alarm systems, control panels, conduit installation, testing & code compliance. Call (786) 307-5933." },
      { name: "keywords", content: "fire alarm installation Florida, fire alarm contractor Florida, fire alarm systems Florida, commercial fire alarm installation Florida, fire alarm service Florida, fire alarm inspection Florida" },
      { property: "og:title", content: "Fire Alarm Installation & Systems in Florida | Electrical Contractor Corp" },
      { property: "og:description", content: "State-licensed commercial fire alarm installation, control panel wiring, safety testing, and local Fire Marshal certification across Florida." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/services/fire-alarm" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/services/fire-alarm" }
    ],
  }),
  component: FireAlarmPage,
});

function FireAlarmPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("Commercial Fire Alarm Control Panel (FACP) Installations", "Instalaciones de Paneles de Control de Alarma contra Incendios (FACP)"),
    t("Smoke, Heat & Carbon Monoxide Sensor Network Wiring", "Cableado de Sensores de Humo, Calor y Monóxido de Carbono"),
    t("Manual Pull Station & Horn/Strobe Notification Appliance Wiring", "Estaciones Manuales y Notificadores de Bocina/Estroboscópicos"),
    t("Duct Smoke Detector Installation for HVAC Air Handling Systems", "Detectores de Humo en Conductos para Sistemas de HVAC"),
    t("Dedicated Red Fire Alarm Conduit & Riser Installations", "Instalación de Conductos Rojos y Montantes para Alarma"),
    t("Fire Sprinkler Waterflow & Tamper Switch Electrical Integration", "Integración Eléctrica con Rociadores e Interruptores de Flujo"),
    t("Fire Alarm Central Station Cellular Communicator Setup", "Configuración de Comunicadores Celulares para Central de Monitoreo"),
    t("Access Control Magnetic Door Lock Fail-Safe Relay Tie-Ins", "Integración de Desbloqueo Seguro con Cerraduras Magnéticas"),
    t("Annual Fire Alarm Safety Certification & Decal Testing", "Certificación Anual de Seguridad y Pruebas de Calcomanías"),
    t("Municipal Fire Marshal Code Violation Corrections & Permitting", "Corrección de Violaciones del Código del Mariscal de Bomberos"),
  ];

  const faqs = [
    {
      q: t("What codes regulate commercial fire alarm installations in Florida?", "¿Qué códigos regulan las alarmas contra incendios comerciales en Florida?"),
      a: t("Commercial fire alarms in Florida are strictly governed by NFPA 72 (National Fire Alarm and Signaling Code), NFPA 101 (Life Safety Code), the Florida Fire Prevention Code (FFPC), and local municipal fire department standards. Our master electricians ensure 100% compliance across all system components.", "Las alarmas contra incendios comerciales en Florida se rigen por la NFPA 72, NFPA 101, el Código de Prevención de Incendios de Florida (FFPC) y las normas municipales locales.")
    },
    {
      q: t("How often are commercial fire alarm systems required to be inspected?", "¿Con qué frecuencia se deben inspeccionar los sistemas de alarma contra incendios?"),
      a: t("Under Florida Fire Prevention Codes, commercial fire alarm systems must undergo formal annual functional testing and inspection by a state-certified contractor to verify horn/strobe decibel levels, battery standby capacities, smoke sensitivity, and central dispatch communications.", "Según los códigos de Florida, los sistemas de alarma comerciales deben someterse a pruebas funcionales e inspecciones anuales formales realizadas por un contratista certificado.")
    },
    {
      q: t("Can you integrate our fire alarm with building elevators, HVAC, and magnetic doors?", "¿Pueden integrar la alarma con ascensores, HVAC y puertas magnéticas?"),
      a: t("Yes. We specialize in complete life-safety integration: automatically recalling elevators to the primary floor, shutting down HVAC air handlers to prevent smoke circulation, and releasing magnetic doors to allow safe building evacuation.", "Sí. Nos especializamos en la integración completa de seguridad humana: llamada automática de ascensores, apagado de HVAC para evitar humo y liberación de puertas magnéticas.")
    },
    {
      q: t("Do you handle municipal Fire Marshal inspections and final sign-offs?", "¿Gestionan las inspecciones del Mariscal de Bomberos y la aprobación final?"),
      a: t("Yes. We prepare engineering submittal packages, pull required electrical fire permits, perform full pre-testing, and accompany the municipal Fire Inspector during the final acceptance walkthrough.", "Sí. Preparamos los paquetes de ingeniería, tramitamos los permisos de incendio requeridos y acompañamos al Inspector de Bomberos municipal durante la prueba de aceptación final.")
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
        "name": "Fire Alarm Systems",
        "item": "https://electricalcontractorcorp.com/services/fire-alarm"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Fire Alarm Installation Services",
    "serviceType": "Fire Alarm Contractor",
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
    "description": "State-certified commercial fire alarm installation, control panel wiring, annual testing, and municipal Fire Marshal certification across Florida."
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
        eyebrow={t("Life Safety & Code Compliance", "Seguridad Humana y Cumplimiento de Códigos")}
        title={t("Commercial Fire Alarm Installation & Systems in Florida", "Instalación de Alarmas contra Incendios en Florida")}
        subtitle={t("Protect lives and maintain full municipal code compliance. Certified fire alarm wiring, control panels, annual testing, and Fire Marshal sign-offs.", "Proteja vidas y mantenga el cumplimiento de los códigos municipales. Cableado certificado de alarmas, tableros de control y pruebas anuales.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10 text-left">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary tracking-tight">
                  {t("Code-Certified Fire Alarm Engineering & Life Safety Systems", "Ingeniería de Alarmas contra Incendios y Sistemas de Seguridad")}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("A reliable, code-compliant fire alarm system is the cornerstone of life safety in every commercial building, multi-family residence, educational facility, and healthcare institution. Electrical Contractor Corp provides complete turn-key fire alarm contracting in strict compliance with NFPA 72, NFPA 101, and the Florida Fire Prevention Code.", "Un sistema de alarma contra incendios confiable es fundamental para la seguridad en edificios comerciales, residencias multifamiliares y centros de salud. Electrical Contractor Corp ofrece contratación integral de alarmas contra incendios en estricto cumplimiento con la NFPA 72 y el Código de Prevención de Incendios de Florida.")}
                </p>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("Our certified master electricians handle the entire installation lifecycle—from dedicated red conduit routing, sensor loop wiring, and Fire Alarm Control Panel (FACP) commissioning to central monitoring station dialers, sprinkler waterflow integrations, and local Fire Marshal acceptance testing.", "Nuestros maestros electricistas certificados manejan todo el ciclo de instalación: conductos dedicados, tableros de control FACP, transmisores celulares de monitoreo y pruebas con el Mariscal de Bomberos.")}
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Fire Alarm Capabilities & Scope", "Capacidades y Alcance en Alarmas")}
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
                  alt="Commercial fire alarm control panel installation"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    {t("Florida Fire Alarm Contractors", "Contratistas de Alarmas de Incendio en Florida")}
                  </div>
                  <div className="mt-1 font-display text-xl font-extrabold">
                    {t("NFPA 72 & Life Safety Certified", "Certificado NFPA 72 y Seguridad Humana")}
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Request a Fire Alarm Bid", "Solicite una Cotización de Alarma")}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Submit your architectural plans or schedule an on-site building life safety walkthrough with our engineering team.", "Envíe sus planos arquitectónicos o programe un recorrido de seguridad con nuestro equipo de ingeniería.")}
                </p>

                <div className="mt-6 space-y-3.5">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">{t("Request Proposal", "Solicitar Propuesta")}</Link>
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
                    <Clock className="h-4 w-4 text-primary" /> {t("Annual Inspection & Decal Certification", "Inspección Anual y Certificación")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" /> {t("100% Fire Marshal Acceptance Guarantee", "Garantía de Aceptación del Mariscal de Bomberos")}
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
