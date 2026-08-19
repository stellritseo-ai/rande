import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-ev.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/ev-charger")({
  head: () => ({
    meta: [
      { title: "EV Charger Installation in Florida | Electrical Contractor Corp" },
      { name: "description", content: "Certified Level 2 EV charger installation in Florida. Tesla Wall Connectors, ChargePoint & commercial stations. Free home estimate: (786) 307-5933." },
      { name: "keywords", content: "EV charger installation Florida, EV charger installer Florida, electric vehicle charger installation Florida, Level 2 EV charger installation Florida, home EV charger installation Florida, commercial EV charger installation Florida, Tesla wall connector Florida" },
      { property: "og:title", content: "EV Charger Installation in Florida | Electrical Contractor Corp" },
      { property: "og:description", content: "Licensed Level 2 home and commercial electric vehicle charger installations across Florida. Certified Tesla, ChargePoint, and universal EV chargers." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/services/ev-charger" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/services/ev-charger" }
    ],
  }),
  component: EvChargerPage,
});

function EvChargerPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("Tesla Wall Connector Certified Home Installations", "Instalaciones Certificadas de Tesla Wall Connector"),
    t("Universal Level 2 EV Charger Setups (ChargePoint, Wallbox, Emporia)", "Configuraciones de Nivel 2 Universal (ChargePoint, Wallbox)"),
    t("Dedicated 240V NEMA 14-50 & 6-50 Receptacles", "Receptáculos Dedicados de 240V NEMA 14-50 y 6-50"),
    t("Commercial & Multi-Family Fleet EV Charging Stations", "Estaciones Comerciales y Multifamiliares para Flotas"),
    t("Electrical Panel Capacity & Load Calculations", "Cálculos de Capacidad y Carga de Panel Eléctrico"),
    t("Subpanel Installation for High-Amp Vehicle Circuits", "Instalación de Subpaneles para Circuitos de Alto Amperaje"),
    t("Weatherproof Outdoor All-Weather Enclosure Mounting", "Montaje de Gabinetes para Exteriores Resistentes al Clima"),
    t("Smart Wi-Fi Power Management & App Scheduling Setup", "Gestión de Energía Inteligente por Wi-Fi y Programación"),
    t("Utility Rebate & Tax Incentive Form Documentation", "Documentación para Reembolsos e Incentivos Fiscales"),
    t("Full Municipal Permitting & Electrical Safety Inspections", "Permisos Municipales e Inspecciones de Seguridad"),
  ];

  const faqs = [
    {
      q: t("How much faster does a Level 2 EV charger charge compared to a standard wall outlet?", "¿Qué tan más rápido carga un cargador Nivel 2 en comparación con un tomacorriente estándar?"),
      a: t("A standard 120V Level 1 wall outlet delivers only 3 to 5 miles of range per hour. A dedicated 240V Level 2 EV charger (32A to 48A) delivers 25 to 45 miles of range per hour, fully recharging an empty EV battery overnight in 4 to 8 hours.", "Un tomacorriente estándar de 120V Nivel 1 proporciona solo de 3 a 5 millas por hora. Un cargador Nivel 2 de 240V (32A a 48A) proporciona de 25 a 45 millas por hora, recargando una batería vacía durante la noche en 4 a 8 horas.")
    },
    {
      q: t("Do I need to upgrade my electrical panel to install an EV charger?", "¿Necesito actualizar mi panel eléctrico para instalar un cargador de EV?"),
      a: t("It depends on your current panel capacity (100A vs. 200A) and existing home electrical loads (AC, dryer, water heater). Our licensed electricians conduct a formal NEC load calculation during our site assessment to determine if your panel can support a dedicated 50A or 60A circuit safely.", "Depende de la capacidad de su panel actual y las cargas existentes. Nuestros electricistas autorizados realizan un cálculo formal de carga NEC para determinar si su panel admite un circuito dedicado de 50A o 60A de forma segura.")
    },
    {
      q: t("Are there utility rebates available for installing an EV charger in Florida?", "¿Hay reembolsos de servicios públicos disponibles en Florida?"),
      a: t("Yes. Florida Power & Light (FPL) and other local utilities offer incentive programs (such as FPL EVolution) and off-peak charging credits. Additionally, federal tax credits (Section 30C) may cover up to 30% of residential EV hardware and installation costs in eligible areas.", "Sí. Florida Power & Light (FPL) y otras empresas de servicios públicos ofrecen programas de incentivos (como FPL EVolution). Además, los créditos fiscales federales pueden cubrir hasta el 30% del costo.")
    },
    {
      q: t("Can you install EV charging stations for commercial properties and condos?", "¿Pueden instalar estaciones de carga para propiedades comerciales y condominios?"),
      a: t("Yes. We design and install multi-port commercial EV charging stations for corporate offices, retail parking facilities, condominium associations, and commercial fleets, complete with RFID access control and billing software integration.", "Sí. Diseñamos e instalamos estaciones de carga comercial de múltiples puertos para oficinas, estacionamientos comerciales, condominios y flotas comerciales.")
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
        "name": "EV Charger Installation",
        "item": "https://electricalcontractorcorp.com/services/ev-charger"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Level 2 EV Charger Installation Services",
    "serviceType": "EV Charger Installation",
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
    "description": "Certified Level 2 electric vehicle (EV) charger installations across Florida. Tesla Wall Connectors, ChargePoint, universal 240V circuits, and commercial fleet stations."
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
        eyebrow={t("EV Charging Solutions", "Soluciones de Carga de EV")}
        title={t("Level 2 EV Charger Installation in Florida", "Instalación de Cargadores de EV Nivel 2 en Florida")}
        subtitle={t("Wake up to a full battery every morning. We install certified home and commercial Level 2 EV charging stations, Tesla Wall Connectors, and 240V circuits.", "Despierte con la batería llena cada mañana. Instalamos estaciones de carga Nivel 2 para el hogar y comercios, Tesla Wall Connectors y circuitos de 240V.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10 text-left">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary tracking-tight">
                  {t("Fast, Safe & Certified Electric Vehicle Charging", "Carga Rápida, Segura y Certificada para Vehículos Eléctricos")}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("Electric vehicles demand high, continuous electrical amperage. Charging on an undersized circuit or improper receptacle can lead to thermal overload and dangerous fire hazards. At Electrical Contractor Corp, our certified master electricians perform rigorous panel load calculations, pull required municipal permits, and install heavy-gauge copper wiring and dedicated breakers to ensure your EV charger operates at maximum speed and peak safety.", "Los vehículos eléctricos exigen un amperaje continuo elevado. Cargar en un circuito de tamaño insuficiente puede provocar sobrecalentamiento e incendios. En Electrical Contractor Corp, nuestros maestros electricistas realizan cálculos de carga, tramitan permisos municipales e instalan cables de cobre para garantizar la máxima velocidad y seguridad.")}
                </p>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("We install all leading Level 2 hardware brands including Tesla Universal Wall Connectors, ChargePoint Home Flex, Wallbox Pulsar Plus, Emporia, and commercial dual-port pedestal units with full smart Wi-Fi load management.", "Instalamos las principales marcas de hardware Nivel 2, incluidos Tesla Universal Wall Connectors, ChargePoint Home Flex, Wallbox Pulsar Plus y unidades comerciales de pedestal con gestión inteligente de carga por Wi-Fi.")}
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Our EV Charging Specialties", "Nuestras Especialidades en Carga de EV")}
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
                  alt="Certified Level 2 EV charging station installation"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    {t("Florida EV Charger Installers", "Instaladores de Cargadores EV en Florida")}
                  </div>
                  <div className="mt-1 font-display text-xl font-extrabold">
                    {t("Tesla & Universal Level 2 Charging", "Carga Tesla y Universal de Nivel 2")}
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Book Your EV Charger Install", "Reserve su Instalación de Cargador EV")}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Schedule a free on-site electrical panel and garage review. We check service capacity and provide a flat-rate installation quote.", "Programe una revisión gratuita del panel eléctrico y garaje. Verificamos la capacidad de servicio y ofrecemos una cotización de tarifa fija.")}
                </p>

                <div className="mt-6 space-y-3.5">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">{t("Get Free EV Quote", "Obtener Cotización Gratis")}</Link>
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
                    <Clock className="h-4 w-4 text-primary" /> {t("Fast 1-Day Professional Installation", "Instalación Rápida Profesional en 1 Día")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" /> {t("Tesla & Universal Brand Certified", "Certificado para Tesla y Marcas Universales")}
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
