import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Building2, Home, Factory, Zap, BatteryCharging, 
  AlertTriangle, ShieldAlert, Video, Cable, ChevronRight, CheckCircle2 
} from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Electrical Services in Florida | Electrical Contractor Corp" },
      { name: "description", content: "Comprehensive residential, commercial & industrial electrical services across Florida. 24/7 emergency dispatch, panel upgrades, EV chargers & generators. Call (786) 307-5933." },
      { name: "keywords", content: "electrical services Florida, licensed electrician Florida, electrical contractor services, commercial electrical Florida, residential electrical Florida, emergency electrician Florida" },
      { property: "og:title", content: "Electrical Services in Florida | Electrical Contractor Corp" },
      { property: "og:description", content: "State-licensed master electricians delivering residential, commercial, industrial, and 24/7 emergency electrical services throughout Florida." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/services" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/services" }
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  const { t } = useLanguage();

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
      }
    ]
  };

  const serviceCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Full-Service Electrical Contracting in Florida",
    "serviceType": "Electrical Services",
    "provider": {
      "@type": "Electrician",
      "name": "Electrical Contractor Corp",
      "telephone": "+17863075933",
      "url": "https://electricalcontractorcorp.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    },
    "description": "Licensed electrical solutions for residential homes, commercial enterprises, industrial facilities, and emergency repairs across Florida."
  };

  const serviceCategories = [
    {
      title: t("Residential Electrical", "Electricidad Residencial"),
      desc: t("From panel upgrades and rewiring to custom lighting and EV chargers, we power Florida homes safely.", "Desde actualizaciones de paneles y recableado hasta iluminación y cargadores de EV, energizamos hogares de Florida."),
      to: "/services/residential",
      icon: Home,
      features: [t("Panel Upgrades (200A/400A)", "Actualizaciones de Panel"), t("Home Rewiring & Safety", "Recableado del Hogar"), t("Dedicated Appliance Circuits", "Circuitos Dedicados")]
    },
    {
      title: t("Commercial Electrical", "Electricidad Comercial"),
      desc: t("Tenant improvements, retail lighting, 3-phase power distribution, and full NEC code compliance.", "Mejoras para inquilinos, iluminación comercial, energía trifásica y cumplimiento del código NEC."),
      to: "/services/commercial",
      icon: Building2,
      features: [t("Office & Retail Build-Outs", "Remodelación de Oficinas"), t("3-Phase Power Distribution", "Distribución Trifásica"), t("Emergency Lighting Egress", "Iluminación de Emergencia")]
    },
    {
      title: t("Industrial Electrical", "Electricidad Industrial"),
      desc: t("High-voltage power systems, heavy machinery hookups, motor control centers (MCC), and plant maintenance.", "Sistemas de alto voltaje, conexiones de maquinaria pesada, centros de control de motores y mantenimiento."),
      to: "/services/industrial",
      icon: Factory,
      features: [t("Motor Control Centers", "Centros de Control de Motores"), t("High-Voltage Transformers", "Transformadores de Alto Voltaje"), t("Preventative Plant Audits", "Auditorías Preventivas")]
    },
    {
      title: t("24/7 Emergency Dispatch", "Despacho de Emergencia 24/7"),
      desc: t("Rapid response for power loss, sparking breaker boxes, storm damage, and critical electrical hazards.", "Respuesta rápida para pérdidas de energía, cajas con chispas, daños por tormentas y peligros críticos."),
      to: "/services/emergency",
      icon: AlertTriangle,
      features: [t("60-Min Emergency Response", "Respuesta en 60 Minutos"), t("Hazardous Spark Mitigation", "Mitigación de Chispas Peligrosas"), t("Main Breaker Restoration", "Restauración de Disyuntor")]
    },
    {
      title: t("Electrical Panel Upgrades", "Actualizaciones de Paneles"),
      desc: t("Modernize outdated fuse boxes or hazardous Federal Pacific/Zinsco panels to 200A or 400A capacity.", "Modernice cajas obsoletas o paneles peligrosos Federal Pacific/Zinsco a 200A o 400A de capacidad."),
      to: "/services/panel-upgrades",
      icon: Zap,
      features: [t("200A / 400A Breaker Upgrades", "Disyuntores de 200A / 400A"), t("FPL Utility Coordination", "Coordinación con FPL"), t("Full Permitting & Safety", "Permisos y Seguridad")]
    },
    {
      title: t("EV Charger Installation", "Instalación de Cargadores EV"),
      desc: t("Certified Level 2 charging stations for homes and businesses. Tesla Wall Connectors & universal ports.", "Estaciones de carga de Nivel 2 certificadas para hogares y empresas. Tesla Wall Connectors y puertos universales."),
      to: "/services/ev-charger",
      icon: BatteryCharging,
      features: [t("Tesla & Universal Level 2", "Tesla y Nivel 2 Universal"), t("Dedicated 240V Receptacles", "Receptáculos Dedicados de 240V"), t("Commercial Fleet Stations", "Estaciones para Flotas")]
    },
    {
      title: t("Standby Generator Installation", "Instalación de Generadores"),
      desc: t("Keep power running during Florida hurricane outages. Generac & Kohler automatic standby systems.", "Mantenga la energía durante los apagones por huracanes en Florida. Sistemas de respaldo Generac y Kohler."),
      to: "/services/generator",
      icon: Zap,
      features: [t("Automatic Transfer Switches", "Interruptores Automáticos"), t("Whole-Home Backup Power", "Energía de Respaldo Total"), t("Storm Readiness Layouts", "Diseños para Tormentas")]
    },
    {
      title: t("Fire Alarm Systems", "Sistemas de Alarma contra Incendios"),
      desc: t("Safety-certified fire alarm wiring, control panels, conduit routing, and municipal code inspection testing.", "Cableado de alarmas con certificación de seguridad, tableros de control y pruebas de inspección de código."),
      to: "/services/fire-alarm",
      icon: ShieldAlert,
      features: [t("Commercial Fire Panels", "Tableros Comerciales de Incendio"), t("Conduit & Sensor Wiring", "Cableado de Conductos y Sensores"), t("Fire Marshal Inspections", "Inspecciones de Bomberos")]
    },
    {
      title: t("CCTV & Security Cameras", "Cámaras CCTV y Seguridad"),
      desc: t("4K IP surveillance camera networks, NVR recording storage, remote mobile apps, and video diagnostics.", "Redes de cámaras IP 4K, almacenamiento NVR, aplicaciones móviles remotas y diagnósticos de video."),
      to: "/services/cctv-camera",
      icon: Video,
      features: [t("4K PoE IP Security Cameras", "Cámaras de Seguridad IP 4K PoE"), t("NVR Server Configurations", "Configuraciones de Servidor NVR"), t("Remote Smartphone Access", "Acceso Remoto desde Smartphone")]
    },
    {
      title: t("New Construction Electrical", "Nuevas Construcciones"),
      desc: t("Architectural blueprints, ground-up electrical systems, service panels, and full construction rough-ins.", "Planos arquitectónicos, sistemas eléctricos desde cero, tableros de servicio y cableado preliminar."),
      to: "/services/new-construction-electrical",
      icon: Building2,
      features: [t("Blueprint & Load Calculations", "Cálculos de Carga y Planos"), t("Commercial Ground-Up Builds", "Construcción Comercial"), t("Residential Developments", "Desarrollos Residenciales")]
    },
    {
      title: t("Wiring & Rewiring", "Cableado y Recableado"),
      desc: t("Whole-house copper structural rewiring, aluminum wiring mitigation (AlumiConn), and code corrections.", "Recableado estructural de cobre para toda la casa, mitigación de aluminio y correcciones de código."),
      to: "/services/wiring-rewiring",
      icon: Cable,
      features: [t("Whole-Home Copper Rewiring", "Recableado de Cobre Total"), t("Aluminum Wire Mitigation", "Mitigación de Cables de Aluminio"), t("GFCI/AFCI Safety Upgrades", "Actualizaciones GFCI/AFCI")]
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }}
      />
      <PageHeader
        eyebrow={t("Florida Electrical Services", "Servicios Eléctricos en Florida")}
        title={t("Comprehensive Electrical Services Across Florida", "Servicios Eléctricos Integrales en Toda Florida")}
        subtitle={t("State-licensed, fully insured master electricians providing residential, commercial, industrial, and 24/7 emergency solutions.", "Maestros electricistas autorizados y asegurados por el estado que brindan soluciones residenciales, comerciales, industriales y de emergencia las 24 horas, los 7 días de la semana.")}
      />

      {/* Services Grid Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {t("Full-Spectrum Solutions", "Soluciones de Espectro Completo")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-secondary mt-2 tracking-tight">
              {t("Electrical Contracting for Every Need", "Contratación Eléctrica para Cada Necesidad")}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {t("Whether you require an immediate emergency repair, a 200-amp panel upgrade, a Level 2 EV charging setup, or complete new construction electrical contracting, Electrical Contractor Corp delivers code-compliant, precision craftsmanship with guaranteed transparent pricing.", "Ya sea que necesite una reparación de emergencia inmediata, una actualización de panel de 200 amperios, una configuración de carga de EV de nivel 2 o una contratación eléctrica completa para nuevas construcciones, Electrical Contractor Corp ofrece mano de obra de precisión que cumple con los códigos y precios transparentes garantizados.")}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div 
                  key={cat.to}
                  className="rounded-3xl border border-border bg-card p-7 shadow-sm hover:shadow-md hover:border-primary/40 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-secondary mb-3">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {cat.desc}
                    </p>
                    <ul className="space-y-2 mb-6 border-t border-border/60 pt-4">
                      {cat.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-secondary">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={cat.to}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary hover:text-primary/80 transition"
                  >
                    {t("View Service Details", "Ver Detalles del Servicio")} <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Services />
      <Process />
      <EmergencyCTA />
    </>
  );
}
