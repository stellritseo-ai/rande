import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-commercial.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Electrical Contractor in Florida | Electrical Contractor Corp" },
      { name: "description", content: "Licensed commercial electrical contractor in Florida. Office build-outs, retail lighting, 3-phase power & tenant improvements. Call (786) 307-5933." },
      { name: "keywords", content: "commercial electrical contractor Florida, commercial electrician Florida, commercial electrical services Florida, commercial wiring contractor Florida, commercial electrical installation Florida, commercial lighting contractor Florida, commercial panel upgrade Florida" },
      { property: "og:title", content: "Commercial Electrical Contractor in Florida | Electrical Contractor Corp" },
      { property: "og:description", content: "State-certified commercial electrical contractor for office build-outs, retail facilities, tenant improvements, and 3-phase power across Florida." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/services/commercial" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/services/commercial" }
    ],
  }),
  component: CommercialPage,
});

function CommercialPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("Commercial Office Build-Outs & Tenant Improvements", "Remodelaciones de Oficinas y Mejoras de Inquilinos"),
    t("Retail Store LED Display & High-Bay Accent Lighting", "Iluminación LED y Acentos para Tiendas Minoristas"),
    t("3-Phase Electrical Switchboard & Panel Board Upgrades", "Tableros de Distribución Eléctrica Trifásica"),
    t("Emergency Exit Lighting & Life Safety Battery Units", "Iluminación de Salida de Emergencia y Baterías de Respaldo"),
    t("Dedicated Power Circuits for Heavy Commercial Machinery", "Circuitos Dedicados para Maquinaria Comercial"),
    t("Commercial EV Fleet Charging Station Infrastructure", "Estaciones de Carga de EV para Flotas Comerciales"),
    t("Preventative Electrical Maintenance & Thermal Imaging Audits", "Mantenimiento Preventivo y Termografía Infrarroja"),
    t("Commercial Standby Backup Generator Integration", "Integración de Generadores de Respaldo Comerciales"),
    t("Data Center, Server Room & Low-Voltage Cable Trays", "Centros de Datos, Salas de Servidores y Bandejas de Cables"),
    t("Complete NEC Code Violations Correction & Permitting", "Corrección de Violaciones del Código NEC y Permisos"),
  ];

  const faqs = [
    {
      q: t("Do you provide after-hours and weekend commercial electrical work?", "¿Ofrecen trabajos eléctricos comerciales fuera de horario y fines de semana?"),
      a: t("Yes. We understand that daytime disruptions impact your revenue and operations. We routinely schedule commercial electrical installations, panel replacements, and maintenance during nights and weekends to keep your business operating smoothly without downtime.", "Sí. Entendemos que las interrupciones diurnas impactan sus ingresos. Programamos regularmente trabajos comerciales fuera de horario, noches y fines de semana para evitar interrupciones.")
    },
    {
      q: t("Is Electrical Contractor Corp fully insured and bonded for large commercial projects?", "¿Está Electrical Contractor Corp asegurada y afianzada para grandes proyectos comerciales?"),
      a: t("Yes. We maintain $2,000,000 in commercial general liability insurance, commercial automotive coverage, and comprehensive workers' compensation, satisfying the insurance criteria of major corporate landlords and general contractors across Florida.", "Sí. Mantenemos $2,000,000 en seguro de responsabilidad civil general comercial, cobertura de automóviles comerciales y compensación laboral integral.")
    },
    {
      q: t("Can you help our commercial building achieve local Fire Marshal & NEC compliance?", "¿Pueden ayudar a que nuestro edificio cumpla con el Mariscal de Bomberos y el código NEC?"),
      a: t("Absolutely. We perform thorough commercial code audits, resolve open violations, upgrade egress lighting batteries, and liaise directly with municipal building departments to secure final inspection sign-offs.", "Absolutamente. Realizamos auditorías de código comercial, resolvemos violaciones abiertas, actualizamos baterías de iluminación de salida y coordinamos con departamentos municipales.")
    },
    {
      q: t("How do you handle commercial utility upgrades with Florida Power & Light (FPL)?", "¿Cómo manejan las actualizaciones de servicios públicos con Florida Power & Light (FPL)?"),
      a: t("We coordinate all electrical engineering plans, transformer vault requests, meter center disconnects, and CT cabinet installations directly with FPL and local municipal building departments.", "Coordinamos todos los planos de ingeniería eléctrica, solicitudes de transformadores, desconexiones de medidores e instalaciones de gabinetes CT directamente con FPL.")
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
        "name": "Commercial Electrical",
        "item": "https://electricalcontractorcorp.com/services/commercial"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Electrical Contracting Services",
    "serviceType": "Commercial Electrical Contractor",
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
    "description": "Licensed commercial electrical contractor in Florida. Office build-outs, tenant improvements, 3-phase power distribution, and code compliance."
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
        eyebrow={t("Commercial Electrical Contractor", "Contratista Eléctrico Comercial")}
        title={t("Premier Commercial Electrical Contractor in Florida", "Contratista Eléctrico Comercial Líder en Florida")}
        subtitle={t("Delivering scalable, code-compliant electrical systems for corporate offices, retail spaces, restaurants, and commercial facilities across Florida.", "Sistemas eléctricos escalables y conformes con el código para oficinas corporativas, comercios, restaurantes e instalaciones en Florida.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10 text-left">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary tracking-tight">
                  {t("Enterprise-Grade Commercial Electrical Solutions", "Soluciones Eléctricas Comerciales de Nivel Empresarial")}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("Electrical Contractor Corp partners with commercial developers, property managers, general contractors, and business owners throughout Florida to deliver safe, highly reliable electrical engineering solutions. From tenant build-outs in modern high-rises to multi-unit retail lighting retrofits and 3-phase switchboard installations, our commercial electricians bring deep technical mastery to every job site.", "Electrical Contractor Corp se asocia con desarrolladores comerciales, administradores de propiedades y contratistas generales en Florida para brindar soluciones eléctricas seguras y confiables. Desde mejoras de inquilinos en edificios de gran altura hasta modernizaciones de iluminación y distribución trifásica, nuestros electricistas comerciales aportan un profundo dominio técnico.")}
                </p>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("Commercial operations require zero unscheduled downtime. We implement redundant power feeds, automatic backup generator integration, and scheduled preventative thermal imaging audits that pinpoint overheating switchgear before a failure occurs.", "Las operaciones comerciales requieren cero tiempo de inactividad no programado. Implementamos alimentación redundante, generadores de respaldo y auditorías preventivas con termografía infrarroja.")}
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Commercial Electrical Capabilities", "Capacidades Eléctricas Comerciales")}
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
                  alt="Commercial electrical installation by Electrical Contractor Corp"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    {t("Florida Commercial Contractors", "Contratistas Comerciales de Florida")}
                  </div>
                  <div className="mt-1 font-display text-xl font-extrabold">
                    {t("Offices, Retail & Multi-Family Facilities", "Oficinas, Comercio e Instalaciones Multifamiliares")}
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Request a Commercial Proposal", "Solicitar una Propuesta Comercial")}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Submit your blueprints or schedule a commercial facility walk-through. We provide detailed line-item bids and project timelines.", "Envíe sus planos o programe un recorrido por la instalación comercial. Ofrecemos cotizaciones detalladas y cronogramas de proyecto.")}
                </p>

                <div className="mt-6 space-y-3.5">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">{t("Request Proposal / Bid", "Solicitar Propuesta / Cotización")}</Link>
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
                    <ShieldCheck className="h-4 w-4 text-primary" /> {t("$2M Commercial General Liability Coverage", "Cobertura de Responsabilidad General de $2M")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" /> {t("Off-Hours & Weekend Scheduling Available", "Disponibilidad Fuera de Horario y Fines de Semana")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" /> {t("State License #EC13009876", "Licencia Estatal #EC13009876")}
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
