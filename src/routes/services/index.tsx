import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Building2, Home, Factory, Zap, BatteryCharging, 
  AlertTriangle, ShieldAlert, Video, Cable, ChevronRight, CheckCircle2, Hotel, Activity, Utensils,
  FileUp, ArrowRight
} from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Florida Commercial & Construction Electrical Services | EC 13008942" },
      { name: "description", content: "Florida Commercial & Electrical Construction Contractor. Commercial • Multifamily • Hospitality • Industrial • New Construction. State Certified EC 13008942. Call (786) 307-5933." },
      { name: "keywords", content: "commercial electrical services Florida, new construction electrician Florida, hotel electrical remodel Florida, multifamily electrical contractor, submit plans electrical bid, EC 13008942" },
      { property: "og:title", content: "Florida Commercial & Construction Electrical Services | EC 13008942" },
      { property: "og:description", content: "State Certified Electrical Contractor (#EC 13008942) delivering commercial, multifamily, hospitality, and new construction electrical services statewide." },
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
    "name": "Commercial & Construction Electrical Contracting in Florida",
    "serviceType": "Electrical Services",
    "provider": {
      "@type": "Electrician",
      "name": "R&E Electrical Contractor Corp",
      "telephone": "+17863075933",
      "url": "https://electricalcontractorcorp.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    },
    "description": "Florida State Certified Electrical Contractor (License #EC 13008942) providing commercial, multifamily, hospitality, industrial, and new construction electrical services."
  };

  const serviceCategories = [
    {
      title: t("Commercial Electrical Construction", "Construcción Eléctrica Comercial"),
      desc: t("Tenant improvements, retail lighting, 3-phase power distribution, switchboards, and full NEC compliance.", "Mejoras para inquilinos, iluminación comercial, energía trifásica y cumplimiento del código NEC."),
      to: "/services/commercial",
      icon: Building2,
      features: [t("Multifamily & Commercial Towers", "Edificios Multifamiliares y Torres"), t("3-Phase Power Distribution", "Distribución Trifásica"), t("Emergency Lighting Egress", "Iluminación de Emergencia")]
    },
    {
      title: t("New Construction Electrical", "Nuevas Construcciones"),
      desc: t("Architectural blueprints, ground-up electrical systems, service panels, and full construction rough-ins.", "Planos arquitectónicos, sistemas eléctricos desde cero, tableros de servicio y cableado preliminar."),
      to: "/services/new-construction-electrical",
      icon: Building2,
      features: [t("Blueprint & Load Calculations", "Cálculos de Carga y Planos"), t("Commercial Ground-Up Builds", "Construcción Comercial"), t("Multi-Meter Centers", "Bancos de Medidores Múltiples")]
    },
    {
      title: t("Hospitality & Hotel Remodeling", "Hotelería y Remodelación de Hoteles"),
      desc: t("Complete resort electrical upgrades, guestroom architectural lighting, ballroom power, and emergency generators.", "Modernización eléctrica de resorts, iluminación de habitaciones y generadores de emergencia."),
      to: "/services/commercial",
      icon: Hotel,
      features: [t("Phased Hotel Renovations", "Remodelaciones por Fases"), t("480V/277V Step-Down Systems", "Sistemas 480V/277V"), t("Minimal Guest Interruption", "Mínima Interrupción de Huéspedes")]
    },
    {
      title: t("Fire Alarm & Low-Voltage Systems", "Alarmas de Incendio y Bajo Voltaje"),
      desc: t("Safety-certified fire alarm wiring, control panels, conduit routing, and municipal code inspection testing.", "Cableado de alarmas con certificación de seguridad, tableros de control y pruebas de inspección de código."),
      to: "/services/fire-alarm",
      icon: ShieldAlert,
      features: [t("Commercial Fire Panels", "Tableros Comerciales de Incendio"), t("Conduit & Sensor Wiring", "Cableado de Conductos y Sensores"), t("Fire Marshal Inspections", "Inspecciones de Bomberos")]
    },
    {
      title: t("Industrial Electrical", "Electricidad Industrial"),
      desc: t("High-voltage power systems, heavy machinery hookups, motor control centers (MCC), and plant maintenance.", "Sistemas de alto voltaje, conexiones de maquinaria pesada, centros de control de motores y mantenimiento."),
      to: "/services/industrial",
      icon: Factory,
      features: [t("Motor Control Centers", "Centros de Control de Motores"), t("High-Voltage Transformers", "Transformadores de Alto Voltaje"), t("Preventative Plant Audits", "Auditorías Preventivas")]
    },
    {
      title: t("Electrical Panel & Switchboard Upgrades", "Actualizaciones de Tableros y Paneles"),
      desc: t("Modernize outdated distribution gear or hazardous panels to 200A–2000A capacity safely with FPL coordination.", "Modernice equipos obsoletos o paneles peligrosos a 200A–2000A de forma segura con coordinación FPL."),
      to: "/services/panel-upgrades",
      icon: Zap,
      features: [t("200A to 2000A Switchboards", "Tableros de 200A a 2000A"), t("FPL Utility Coordination", "Coordinación con FPL"), t("Full Permitting & Safety", "Permisos y Seguridad")]
    },
    {
      title: t("EV Charger Stations", "Estaciones de Carga EV"),
      desc: t("Commercial fleet charging infrastructure and multifamily resident charging ports. Tesla & universal stations.", "Infraestructura para flotas comerciales y puertos de carga para condominios. Tesla y universales."),
      to: "/services/ev-charger",
      icon: BatteryCharging,
      features: [t("Commercial Fleet Stations", "Estaciones para Flotas"), t("Dedicated 240V/480V Receptacles", "Receptáculos Dedicados"), t("Multifamily Parking Charging", "Carga en Estacionamientos")]
    },
    {
      title: t("Standby Generator Installation", "Instalación de Generadores"),
      desc: t("Commercial automatic standby systems for storm resilience and continuous operational continuity.", "Sistemas comerciales de respaldo automático para resiliencia ante tormentas y continuidad operativa."),
      to: "/services/generator",
      icon: Zap,
      features: [t("Automatic Transfer Switches", "Interruptores Automáticos"), t("High-Capacity Commercial Power", "Energía Comercial de Alta Capacidad"), t("Hurricane Storm Readiness", "Preparación para Huracanes")]
    },
    {
      title: t("Residential Electrical Services", "Electricidad Residencial"),
      desc: t("Secondary specialty: custom home wiring, architectural lighting, safety inspections, and rewiring.", "Especialidad secundaria: cableado de viviendas, iluminación arquitectónica, inspecciones y recableado."),
      to: "/services/residential",
      icon: Home,
      features: [t("Whole-Home Safety Inspections", "Inspecciones de Seguridad"), t("Custom Architectural Lighting", "Iluminación Arquitectónica"), t("Panel Modernization", "Modernización de Paneles")]
    },
    {
      title: t("24/7 Emergency Dispatch", "Despacho de Emergencia 24/7"),
      desc: t("Rapid response for power loss, sparking breaker boxes, storm damage, and critical electrical hazards.", "Respuesta rápida para pérdidas de energía, cajas con chispas, daños por tormentas y peligros críticos."),
      to: "/services/emergency",
      icon: AlertTriangle,
      features: [t("60-Min Emergency Response", "Respuesta en 60 Minutos"), t("Hazardous Spark Mitigation", "Mitigación de Chispas Peligrosas"), t("Main Breaker Restoration", "Restauración de Disyuntor")]
    },
    {
      title: t("CCTV & Security Networks", "Cámaras CCTV y Redes de Seguridad"),
      desc: t("4K IP surveillance camera networks, NVR recording storage, remote mobile apps, and video diagnostics.", "Redes de cámaras IP 4K, almacenamiento NVR, aplicaciones móviles remotas y diagnósticos de video."),
      to: "/services/cctv-camera",
      icon: Video,
      features: [t("4K PoE IP Security Cameras", "Cámaras de Seguridad IP 4K PoE"), t("NVR Server Configurations", "Configuraciones de Servidor NVR"), t("Remote Smartphone Access", "Acceso Remoto desde Smartphone")]
    },
    {
      title: t("Wiring & Rewiring", "Cableado y Recableado"),
      desc: t("Whole-building copper structural rewiring, aluminum wiring mitigation (AlumiConn), and code corrections.", "Recableado estructural de cobre, mitigación de aluminio y correcciones de código."),
      to: "/services/wiring-rewiring",
      icon: Cable,
      features: [t("Copper Structural Rewiring", "Recableado Estructural de Cobre"), t("Aluminum Wire Mitigation", "Mitigación de Cables de Aluminio"), t("GFCI/AFCI Safety Upgrades", "Actualizaciones GFCI/AFCI")]
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
        eyebrow={t("State Certified Electrical Contractor – EC 13008942", "Contratista Eléctrico Certificado – EC 13008942")}
        title={t("Commercial & Construction Electrical Services", "Servicios Eléctricos de Construcción y Comerciales")}
        subtitle={t("Commercial • Multifamily • Hospitality • Industrial • New Construction. Master electricians delivering precision line-item bids and on-time project execution across Florida.", "Comercial • Multifamiliar • Hotelería • Industrial • Nueva Construcción. Maestros electricistas con ofertas precisas y ejecución a tiempo en Florida.")}
      />

      {/* Services Grid Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {t("Florida Commercial & Construction Capabilities", "Capacidades Comerciales y de Construcción")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-secondary mt-2 tracking-tight">
              {t("Engineered for General Contractors & Developers", "Diseñado para Contratistas Generales y Desarrolladores")}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {t(
                "Operating under State License #EC 13008942, we specialize in major commercial projects, multifamily buildings, hotels, clinics, schools, and new construction across Florida, while continuing to provide trusted residential fire alarm, low-voltage, and emergency services.",
                "Bajo la Licencia #EC 13008942, nos especializamos en proyectos comerciales, edificios multifamiliares, hoteles, clínicas, escuelas y nuevas construcciones en Florida, manteniendo servicios residenciales confiables."
              )}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div 
                  key={cat.title}
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

      {/* GC & Developer Plans Callout Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-[#0B1329] to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#FF8533] bg-[#FF6B00]/10 border border-[#FF6B00]/30 px-3 py-1 rounded-full">
              {t("General Contractors & Estimators", "Contratistas Generales y Estimadores")}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-3">
              {t("Have Project Blueprints or Specifications Ready for Bid?", "¿Tiene Planos o Especificaciones Listos para Licitación?")}
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              {t(
                "Upload your drawings directly to our dedicated Estimating Portal for fast 24–48h line-item takeoffs and value-engineering reviews.",
                "Cargue sus planos directamente en nuestro Portal de Estimación dedicado para presupuestos detallados en 24–48 horas."
              )}
            </p>
          </div>
          <Link
            to="/submit-plans"
            className="shrink-0 inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#E05E00] text-white font-black text-xs uppercase tracking-wider px-6 py-4 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            <FileUp className="h-4 w-4" />
            <span>{t("Go to Plan Submission Portal", "Ir al Portal de Planos")}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Services />
      <Process />
      <EmergencyCTA />
    </>
  );
}
