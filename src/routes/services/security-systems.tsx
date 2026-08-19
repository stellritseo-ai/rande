import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-commercial.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/security-systems")({
  head: () => ({
    meta: [
      { title: "Security Systems & Low-Voltage Wiring in Florida | Electrical Contractor Corp" },
      { name: "description", content: "Licensed low-voltage security wiring in Florida. Access control, Cat6 cabling, intercoms & commercial security systems. Call (786) 307-5933." },
      { name: "keywords", content: "security systems low voltage Florida, commercial security systems Florida, access control system installation Florida, structured low voltage cabling Florida, Cat6 network cabling Florida, magnetic lock wiring" },
      { property: "og:title", content: "Security Systems & Low-Voltage Wiring in Florida | Electrical Contractor Corp" },
      { property: "og:description", content: "Licensed low-voltage electrical engineering, commercial access control, structured Cat6 network cabling, and smart security integrations in Florida." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/services/security-systems" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/services/security-systems" }
    ],
  }),
  component: SecurityPage,
});

function SecurityPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("Commercial Access Control, Card Readers & Keypad Systems", "Control de Acceso Comercial, Lectores de Tarjetas y Teclados"),
    t("Magnetic Door Lock (Maglock) & Electric Strike Low-Voltage Wiring", "Cerraduras Magnéticas y Cerraduras Eléctricas"),
    t("Structured Cat6, Cat6A & Fiber Optic Network Cabling", "Cableado de Red Estructurado Cat6, Cat6A y Fibra Óptica"),
    t("Smart Video Intercom Systems & Touchscreen Door Entry", "Intercomunicadores con Video y Entrada con Pantalla Táctil"),
    t("Commercial Fire-Stop Penetration & Plenum Ceiling Conduits", "Sellado Cortafuegos y Conductos Plenum en Cielorrasos"),
    t("Server Rack Patch Panels, Cable Trays & J-Hook Routing", "Racks de Servidores, Paneles de Parcheo y Bandejas"),
    t("Whole-Home & Commercial Wi-Fi Access Point (WAP) Cabling", "Cableado de Puntos de Acceso Wi-Fi (WAP)"),
    t("Low-Voltage Landscape & Architectural Lighting Controls", "Controles de Iluminación Arquitectónica de Bajo Voltaje"),
    t("Intrusion Alarm Sensor Wiring & Motion Detector Networks", "Cableado de Sensores de Alarma y Detectores de Movimiento"),
    t("Complete Low-Voltage Municipal Permitting & Code Compliance", "Permisos Municipales y Cumplimiento de Bajo Voltaje"),
  ];

  const faqs = [
    {
      q: t("What is the difference between line voltage and low-voltage electrical work?", "¿Cuál es la diferencia entre voltaje de línea y bajo voltaje?"),
      a: t("Line voltage operates at standard 120V to 480V for power and lighting. Low-voltage operates under 50V (typically 12V, 24V, or 48V PoE) and is used for security sensors, structured network cabling, access control systems, and intercoms. Both require licensed electrical installation to prevent fire hazards and code violations.", "El voltaje de línea opera de 120V a 480V para energía e iluminación. El bajo voltaje opera a menos de 50V (12V, 24V o 48V PoE) y se utiliza para seguridad, cableado de red y control de acceso.")
    },
    {
      q: t("Do access control systems require emergency battery backups and fire alarm tie-ins?", "¿Los sistemas de control de acceso requieren baterías de respaldo e integración con alarmas?"),
      a: t("Yes. Florida Life Safety Code (NFPA 101) mandates that magnetic door locks automatically unlock upon fire alarm activation to allow safe emergency egress. Our licensed electricians ensure all access control systems integrate seamlessly with fire alarm relays and backup power supplies.", "Sí. El Código de Seguridad Humana de Florida exige que las cerraduras magnéticas se desbloqueen automáticamente tras activarse la alarma de incendio para permitir la evacuación segura.")
    },
    {
      q: t("Can you install structured Cat6 cabling for our corporate office or warehouse?", "¿Pueden instalar cableado Cat6 estructurado para nuestra oficina o almacén?"),
      a: t("Yes. We install complete structured cabling grids with patch panels, cable management racks, and tested wall jacks that provide Gigabit and 10-Gigabit data throughput for modern office networks.", "Sí. Instalamos redes de cableado estructurado con paneles de parcheo y racks de servidores que proporcionan velocidades Gigabit y 10-Gigabit.")
    },
    {
      q: t("Do low-voltage installations require city building permits in Florida?", "¿Las instalaciones de bajo voltaje requieren permisos municipales en Florida?"),
      a: t("Yes. Most Florida municipalities require low-voltage permits and inspections to verify proper plenum-rated wire usage, conduit support, and fire-stopping at wall penetrations.", "Sí. La mayoría de los municipios de Florida requieren permisos de bajo voltaje para verificar el uso de cables clasificados plenum y cortafuegos.")
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
        "name": "Security Systems & Low-Voltage",
        "item": "https://electricalcontractorcorp.com/services/security-systems"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Low-Voltage Security Systems & Cabling Services",
    "serviceType": "Low-Voltage Electrical Contractor",
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
    "description": "Licensed low-voltage electrical contractor in Florida. Commercial access control systems, structured Cat6 network cabling, maglocks, and smart security integrations."
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
        eyebrow={t("Low-Voltage & Access Control", "Bajo Voltaje y Control de Acceso")}
        title={t("Security Systems & Low-Voltage Wiring in Florida", "Sistemas de Seguridad y Cableado de Bajo Voltaje en Florida")}
        subtitle={t("Secure your commercial building or residence with enterprise access control, structured Cat6 cabling, and smart video intercom networks.", "Proteja su edificio o residencia con control de acceso empresarial, cableado estructurado Cat6 e intercomunicadores con video.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10 text-left">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary tracking-tight">
                  {t("Enterprise Access Control & Structured Infrastructure", "Control de Acceso Empresarial e Infraestructura Estructurada")}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("Modern commercial facilities and high-end residential properties require sophisticated low-voltage electrical systems. Electrical Contractor Corp designs and installs clean, high-performance cabling architectures for access control, automated card readers, magnetic door locks, and high-speed data networks.", "Las instalaciones comerciales modernas y residencias de alto nivel requieren sistemas eléctricos de bajo voltaje sofisticados. Electrical Contractor Corp diseña e instala cableado de alto rendimiento para control de acceso, lectores de tarjetas y redes de datos.")}
                </p>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("We route plenum-rated Cat6 and fiber optic cables neatly using J-hooks, cable trays, and conduits, applying certified fire-stop sealants at all firewall penetrations to maintain total Life Safety Code compliance.", "Instalamos cables Cat6 clasificados plenum y fibra óptica utilizando ganchos en J y bandejas de cables, aplicando selladores cortafuegos certificados.")}
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Our Low-Voltage Specialties", "Nuestras Especialidades de Bajo Voltaje")}
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
                  alt="Low-voltage security wiring and access control installation"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    {t("Low-Voltage Contractors", "Contratistas de Bajo Voltaje")}
                  </div>
                  <div className="mt-1 font-display text-xl font-extrabold">
                    {t("Access Control, Cat6 & Security Wiring", "Control de Acceso, Cat6 y Cableado de Seguridad")}
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Request a Low-Voltage Consultation", "Solicite una Consulta de Bajo Voltaje")}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Schedule an on-site property walkthrough to map access control points, server rack locations, and network drops.", "Programe un recorrido por la propiedad para mapear puntos de acceso, racks de servidores y puntos de red.")}
                </p>

                <div className="mt-6 space-y-3.5">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">{t("Get Free Estimate", "Obtener Presupuesto Gratis")}</Link>
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
                    <Clock className="h-4 w-4 text-primary" /> {t("NFPA Life Safety Fire Alarm Integrations", "Integraciones de Seguridad NFPA con Alarma")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" /> {t("Clean, Concealed Architectural Routing", "Enrutamiento Oculto y Limpio")}
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
