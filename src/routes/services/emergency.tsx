import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight, AlertTriangle } from "lucide-react";
import img from "@/assets/service-industrial.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/emergency")({
  head: () => ({
    meta: [
      { title: "24/7 Emergency Electrician in Florida | Electrical Contractor Corp" },
      { name: "description", content: "24/7 emergency electrician in Florida. Rapid 60-min response for power outages, smoking panels & hazards. Call our emergency hotline: (786) 307-5933." },
      { name: "keywords", content: "24/7 emergency electrician Florida, emergency electrician Florida, 24 hour electrician Florida, emergency electrical repair Florida, emergency electrical services Florida, emergency electrical contractor Florida, after hours electrician Florida" },
      { property: "og:title", content: "24/7 Emergency Electrician in Florida | Electrical Contractor Corp" },
      { property: "og:description", content: "Immediate 24/7 emergency electrical dispatch across Florida for sparking breaker boxes, severe power outages, and critical electrical hazards." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/services/emergency" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/services/emergency" }
    ],
  }),
  component: EmergencyPage,
});

function EmergencyPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("Partial or Complete Property Power Outages", "Cortes de Energía Parciales o Totales en la Propiedad"),
    t("Crackling, Humming, or Smoking Circuit Breaker Panels", "Cajas de Disyuntores con Humo, Zumbidos o Crujidos"),
    t("Storm Lightning Damage & Flooded Electrical Equipment", "Daños por Rayos de Tormentas y Equipos Inundados"),
    t("Main Breaker Tripping & Blown Service Fuses", "Disyuntores Principales Defectuosos y Fusibles Quemados"),
    t("Commercial Egress & Emergency Lighting System Failures", "Fallas en Iluminación y Salidas de Emergencia Comercial"),
    t("Industrial Production Machinery Electrical Faults", "Fallas Eléctricas en Maquinaria de Producción Industrial"),
    t("Burnt Receptacles & Melted Wire Insulation Mitigations", "Receptáculos Quemados y Aislamiento Derretido"),
    t("Short Circuit Diagnostics & Urgent Load Stabilization", "Diagnóstico de Cortocircuitos y Estabilización de Carga"),
  ];

  const faqs = [
    {
      q: t("What should I do immediately during an electrical emergency?", "¿Qué debo hacer inmediatamente durante una emergencia eléctrica?"),
      a: t("If it is safe to do so, locate your main electrical panel and switch off the main breaker to kill power to the property. Do NOT touch sparking wires or stand in water near electrical fixtures. If there is active fire or heavy smoke, evacuate immediately and dial 911, then call our 24/7 emergency line at (786) 307-5933.", "Si es seguro hacerlo, localice su panel eléctrico principal y apague el disyuntor principal. NO toque cables con chispas ni se pare en agua. Si hay fuego activo o humo denso, evacúe de inmediato y llame al 911, luego comuníquese con nuestra línea 24/7 al (786) 307-5933.")
    },
    {
      q: t("How quickly do your emergency electricians arrive on-site?", "¿Qué tan rápido llegan sus electricistas de emergencia al lugar?"),
      a: t("We maintain an active on-call dispatch fleet 24 hours a day, 7 days a week, 365 days a year. For critical hazard calls across our primary South Florida service territories, our target on-site arrival is within 60 minutes.", "Mantenemos una flota de despacho activa las 24 horas del día, los 7 días de la semana. Para llamadas de alto peligro en el sur de Florida, nuestro objetivo de llegada es de 60 minutos.")
    },
    {
      q: t("Do your emergency vans carry replacement parts for same-night repairs?", "¿Sus camionetas de emergencia llevan repuestos para reparaciones la misma noche?"),
      a: t("Yes. Our emergency vans are fully stocked with common breaker brands (Square D, Eaton, Siemens, GE), heavy copper cables, meter sockets, and temporary disconnects to restore safety and power on the initial visit.", "Sí. Nuestras camionetas de emergencia están equipadas con marcas comunes de disyuntores, cables de cobre pesados y bases de medidores para restaurar la seguridad en la primera visita.")
    },
    {
      q: t("Are you available during major Florida hurricanes and tropical storms?", "¿Están disponibles durante huracanes y tormentas tropicales en Florida?"),
      a: t("Yes. Electrical Contractor Corp operates prioritized emergency response teams before, during, and after major Florida storm events to repair weatherheads, reconnect service drops with FPL, and deploy emergency generators.", "Sí. Electrical Contractor Corp opera equipos de respuesta prioritarios antes, durante y después de tormentas en Florida para reparar acometidas con FPL y conectar generadores.")
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
        "name": "24/7 Emergency Electrician",
        "item": "https://electricalcontractorcorp.com/services/emergency"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "24/7 Emergency Electrical Services",
    "serviceType": "Emergency Electrician",
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
    "description": "24/7 emergency electrical contractor in Florida. Rapid response for power outages, smoking panels, electrical fires, and storm damage."
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
        eyebrow={t("24/7 Emergency Electrical Dispatch", "Despacho de Emergencia Eléctrica 24/7")}
        title={t("24/7 Emergency Electrician in Florida", "Electricista de Emergencia 24/7 en Florida")}
        subtitle={t("Sparks? Smoke? Complete power loss? Call our emergency hotline at (786) 307-5933. On-call master electricians ready for immediate dispatch.", "¿Chispas? ¿Humo? ¿Pérdida de energía? Llame a nuestra línea directa de emergencia al (786) 307-5933. Maestros electricistas listos para el despacho inmediato.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10 text-left">
              <div className="rounded-3xl bg-destructive/10 border border-destructive/20 p-6 flex gap-4">
                <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg font-extrabold text-destructive">
                    {t("Urgent Safety Warning", "Advertencia de Seguridad Urgente")}
                  </h3>
                  <p className="mt-1 text-sm text-secondary/80 leading-relaxed">
                    {t("If you observe visible flames, active sparking inside walls, or smell a pungent burning odor, evacuate immediately and dial 911 before contacting our emergency dispatch. Never attempt to handle live high-voltage wires yourself.", "Si observa llamas visibles, chispas activas dentro de las paredes o huele a quemado, evacúe de inmediato y llame al 911 antes de comunicarse con nuestro despacho. Nunca intente manipular cables de alta tensión usted mismo.")}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary tracking-tight">
                  {t("Around-the-Clock Electrical Restoration Across Florida", "Restauración Eléctrica las 24 Horas en Toda Florida")}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("Electrical failures do not wait for standard business hours. When your circuit breaker panel overheats, a main line faults, or severe tropical weather knocks out your service entrance mast, Electrical Contractor Corp is on standby to protect your home or business. Our emergency division operates 24 hours a day, 7 days a week, 365 days a year with licensed master electricians.", "Las fallas eléctricas no esperan al horario comercial. Cuando su panel de disyuntores se sobrecalienta o el clima tropical daña su acometida, Electrical Contractor Corp está de guardia para proteger su propiedad. Nuestra división de emergencia opera las 24 horas del día con electricistas autorizados.")}
                </p>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("Our emergency vans are fully equipped mobile repair centers stocked with heavy-gauge copper conduits, commercial breaker modules, and test equipment. We diagnose faults rapidly and execute immediate repairs to restore safe power on the first visit.", "Nuestras camionetas de emergencia son centros de reparación móviles equipados con conductos de cobre, módulos de disyuntores comerciales y equipos de prueba para restaurar la energía de inmediato.")}
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Emergency Electrical Scenarios We Resolve", "Escenarios Eléctricos de Emergencia que Resolvemos")}
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
                  alt="24/7 Emergency electrical service truck"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    {t("Emergency Dispatch Hotline", "Línea Directa de Despacho de Emergencia")}
                  </div>
                  <div className="mt-1 font-display text-xl font-extrabold">
                    {t("60-Minute Rapid Response Target", "Objetivo de Respuesta Rápida en 60 Minutos")}
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Immediate Emergency Dispatch", "Despacho de Emergencia Inmediato")}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Call our dedicated emergency hotline directly for immediate priority dispatch.", "Llame a nuestra línea directa de emergencia directamente para un despacho prioritario.")}
                </p>

                <div className="mt-6 space-y-3.5">
                  <a
                    href="tel:+17863075933"
                    className="flex items-center justify-center gap-2.5 rounded-full bg-primary text-primary-foreground px-4 py-4 text-base font-black shadow-lg hover:bg-primary/95 transition btn-glow animate-pulse-glow"
                  >
                    <Phone className="h-5 w-5" /> {t("Call Hotline: (786) 307-5933", "Llamar Línea Directa: (786) 307-5933")}
                  </a>
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <Link to="/contact">{t("Submit Service Request", "Enviar Solicitud de Servicio")}</Link>
                  </Button>
                </div>

                <div className="mt-6 space-y-2.5 text-xs font-semibold text-secondary/80">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary" /> {t("State License #EC13009876", "Licencia Estatal #EC13009876")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" /> {t("24/7/365 On-Call Technician Fleet", "Flota de Técnicos de Guardia 24/7/365")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" /> {t("Fully Stocked Emergency Vans", "Camionetas de Emergencia Totalmente Equipadas")}
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
