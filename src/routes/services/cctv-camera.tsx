import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-cctv.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/cctv-camera")({
  head: () => ({
    meta: [
      { title: "CCTV Camera Installation in Florida | Electrical Contractor Corp" },
      { name: "description", content: "Professional CCTV security camera installation & repairs in Florida. 4K PoE IP cameras, NVR recording setups & remote phone access. Call (786) 307-5933." },
      { name: "keywords", content: "CCTV installation Florida, security camera installation Florida, surveillance camera installation Florida, commercial security camera installation Florida, CCTV installer Florida, IP camera installation Florida, security camera installation Miami" },
      { property: "og:title", content: "CCTV Camera Installation in Florida | Electrical Contractor Corp" },
      { property: "og:description", content: "Licensed CCTV security camera installation and repair services across Florida. 4K PoE IP cameras, commercial NVR servers, and mobile live-view apps." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/services/cctv-camera" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/services/cctv-camera" }
    ],
  }),
  component: CCTVCameraPage,
});

function CCTVCameraPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("4K Ultra-HD Power-over-Ethernet (PoE) IP Camera Installs", "Instalación de Cámaras IP PoE 4K Ultra-HD"),
    t("Commercial NVR & DVR Storage Server Configuration", "Configuración de Servidores de Almacenamiento NVR y DVR"),
    t("Smartphone Remote Monitoring & Live Playback Setup", "Configuración de Monitoreo Remoto y Reproducción en Móvil"),
    t("PTZ (Pan-Tilt-Zoom) High-Speed Optical Zoom Cameras", "Cámaras PTZ con Zoom Óptico de Alta Velocidad"),
    t("Night Vision, Infrared & Thermal Sensor Camera Positioning", "Cámaras con Visión Nocturna, Infrarrojos y Sensores Térmicos"),
    t("Structured Cat6 Low-Voltage Network Cabling Runs", "Tendido de Cableado de Red Estructurado Cat6"),
    t("Coaxial BNC to High-Definition IP System Migrations", "Migración de Sistemas Coaxiales BNC a IP de Alta Definición"),
    t("Video Signal Loss Diagnostics, Splicing & Balun Repairs", "Diagnóstico de Pérdida de Video, Empalmes y Baluns"),
    t("License Plate Recognition (LPR) & AI Motion Alerts", "Reconocimiento de Placas (LPR) y Alertas de Movimiento por IA"),
    t("Commercial Municipal Surveillance Code Compliance Layouts", "Diseños de Cumplimiento de Códigos de Vigilancia Comercial"),
  ];

  const faqs = [
    {
      q: t("Why choose hardwired PoE IP cameras over battery or wireless Wi-Fi cameras?", "¿Por qué elegir cámaras IP PoE cableadas sobre cámaras inalámbricas o de batería?"),
      a: t("Hardwired PoE (Power over Ethernet) cameras transmit both continuous electrical power and uncompressed 4K video data over a single dedicated Cat6 cable. Unlike Wi-Fi cameras, hardwired systems never suffer from dropped connections, signal jamming, or dead batteries, providing 100% reliable 24/7 recording.", "Las cámaras PoE cableadas transmiten energía y video 4K sin comprimir a través de un solo cable Cat6. A diferencia de las cámaras Wi-Fi, los sistemas cableados no sufren desconexiones ni baterías agotadas, ofreciendo grabación continua 24/7 100% confiable.")
    },
    {
      q: t("Can I view live security camera video feeds from my iPhone or Android device?", "¿Puedo ver las transmisiones de video en vivo desde mi iPhone o Android?"),
      a: t("Yes. We configure your Network Video Recorder (NVR) with encrypted remote access client software on your smartphones, tablets, and desktop computers so you can view live multi-camera feeds, review recorded footage, and receive instant motion push notifications from anywhere.", "Sí. Configuramos su grabador NVR con software de acceso remoto encriptado en sus teléfonos, tabletas y computadoras para ver transmisiones en vivo, revisar grabaciones y recibir alertas instantáneas.")
    },
    {
      q: t("How much video recording history is typically stored on the NVR system?", "¿Cuánto historial de grabación se almacena normalmente en el sistema NVR?"),
      a: t("Depending on the hard drive capacity (4TB to 32TB+) and whether you configure continuous recording or AI motion-activated recording, systems typically store between 30 and 90 days of continuous high-definition footage before looping.", "Según la capacidad del disco duro (de 4TB a 32TB+) y la configuración, los sistemas suelen almacenar entre 30 y 90 días de grabaciones continuas en alta definición.")
    },
    {
      q: t("Do you install commercial security camera systems for warehouses and retail stores?", "¿Instalan sistemas de cámaras de seguridad para almacenes y tiendas minoristas?"),
      a: t("Yes. We install enterprise surveillance systems for commercial warehouses, retail plazas, condo communities, parking garages, and office buildings, ensuring comprehensive blind-spot coverage and compliance with municipal security ordinances.", "Sí. Instalamos sistemas de vigilancia empresarial para almacenes, centros comerciales, condominios y edificios de oficinas, garantizando la cobertura de puntos ciegos y el cumplimiento del código.")
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
        "name": "CCTV Camera Installation",
        "item": "https://electricalcontractorcorp.com/services/cctv-camera"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "CCTV Security Camera Installation Services",
    "serviceType": "CCTV Camera Installation",
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
    "description": "Licensed CCTV security camera installation and repair services in Florida. 4K PoE IP cameras, NVR storage servers, structured cabling, and smartphone live-view apps."
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
        eyebrow={t("Security & Surveillance", "Seguridad y Vigilancia")}
        title={t("CCTV Camera Installation & Repair in Florida", "Instalación y Reparación de Cámaras CCTV en Florida")}
        subtitle={t("Protect your family, employees, and assets. We install commercial-grade 4K PoE security cameras, NVR storage servers, and remote mobile access systems.", "Proteja a su familia, empleados y activos. Instalamos cámaras de seguridad PoE 4K, servidores NVR y sistemas de acceso móvil remoto.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10 text-left">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary tracking-tight">
                  {t("Enterprise-Grade 4K Surveillance & Signal Diagnostics", "Vigilancia 4K de Nivel Empresarial y Diagnóstico de Señal")}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("A high-definition security camera system provides critical peace of mind and essential deterrence for homes, businesses, and industrial facilities. Electrical Contractor Corp provides professional low-voltage structured cabling, precision camera placement to eliminate blind spots, and secure Network Video Recorder (NVR) server deployments.", "Un sistema de cámaras de seguridad de alta definición brinda tranquilidad y disuasión para hogares, empresas e industrias. Electrical Contractor Corp ofrece cableado estructurado de bajo voltaje, ubicación precisa de cámaras y servidores NVR seguros.")}
                </p>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("If you have an existing CCTV system experiencing video signal loss, fuzzy night vision, or failed recording drives, our technicians carry specialized diagnostic testing tools to trace wiring faults, re-terminate connectors, and restore 4K clarity quickly.", "Si tiene un sistema CCTV con pérdida de señal o fallas en el disco duro, nuestros técnicos realizan pruebas diagnósticas especializadas para corregir el cableado y restaurar la claridad 4K.")}
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("CCTV Camera Capabilities", "Capacidades en Cámaras CCTV")}
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
                  alt="Security cameras and structured wiring installation"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    {t("Florida Surveillance Specialists", "Especialistas en Vigilancia de Florida")}
                  </div>
                  <div className="mt-1 font-display text-xl font-extrabold">
                    {t("4K PoE IP Cameras & NVR Storage", "Cámaras IP PoE 4K y Almacenamiento NVR")}
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Request a Surveillance Layout Review", "Solicite una Revisión de Vigilancia")}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Schedule an on-site property walkthrough. We'll identify blind spots, map cable routes, and provide an itemized system quote.", "Programe un recorrido por la propiedad. Identificaremos puntos ciegos, trazaremos rutas de cable y ofreceremos una cotización detallada.")}
                </p>

                <div className="mt-6 space-y-3.5">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">{t("Get Free Security Quote", "Obtener Cotización de Seguridad")}</Link>
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
                    <Clock className="h-4 w-4 text-primary" /> {t("Hardwired Cat6 Commercial Reliability", "Confiabilidad Comercial Cat6 Cableada")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" /> {t("100% Blind-Spot Elimination Layouts", "Diseños con Eliminación de Puntos Ciegos")}
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
