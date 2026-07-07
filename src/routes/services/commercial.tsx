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
      { title: "Commercial General Contractor | ACC Construction LLC" },
      { name: "description", content: "Licensed commercial contracting services, retail store build-outs, office renovations, structural concrete foundations, and pathway paving in Colorado." },
      { property: "og:title", content: "Commercial Contracting | ACC Construction LLC" },
      { property: "og:description", content: "Licensed commercial construction solutions for Colorado businesses." },
    ],
    links: [
      { rel: "canonical", href: "https://www.accconstructionllc.com/services/commercial" }
    ],
  }),
  component: CommercialPage,
});

function CommercialPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("Office Build-Outs & Retail Renovations", "Remodelaciones de Oficinas y Tiendas Minoristas"),
    t("Commercial Concrete Foundations", "Cimientos de Concreto Comercial"),
    t("Driveway & Parking Lot Pavers", "Entradas y Estacionamientos de Adoquines"),
    t("Concrete Sidewalks & Curbing", "Aceras y Bordillos de Concreto"),
    t("Drywall Framing & Partition Walls", "Estructuras de Yeso y Paredes Divisorias"),
    t("Commercial Structural Renovations", "Renovaciones Estructurales Comerciales"),
  ];

  const faqs = [
    {
      q: t("Do you offer services after business hours?", "¿Ofrecen servicios fuera del horario de atención?"),
      a: t("Yes. We understand that daytime disruptions cost money. We regularly schedule commercial work during off-hours, nights, and weekends to keep your business operating smoothly.", "Sí. Entendemos que las interrupciones diurnas cuestan dinero. Programamos regularmente trabajos comerciales fuera de horario, noches y fines de semana para que su negocio siga funcionando sin problemas.")
    },
    {
      q: t("Are you fully insured for large commercial properties?", "¿Están totalmente asegurados para grandes propiedades comerciales?"),
      a: t("Yes. ACC Construction LLC maintains $2M in general liability coverage, commercial auto insurance, and worker's compensation, satisfying the requirements of major landlords and corporate guidelines.", "Sí. ACC Construction LLC mantiene una cobertura de responsabilidad general de $2M, seguro de automóvil comercial y compensación laboral, satisfaciendo los requisitos de los principales propietarios y pautas corporativas.")
    },
    {
      q: t("Can you help with permits and municipal approvals?", "¿Pueden ayudar con los permisos y las aprobaciones municipales?"),
      a: t("Absolutely. We manage the entire permitting workflow, coordinating with structural engineers, local building departments, and inspectors to ensure absolute compliance.", "Absolutamente. Gestionamos todo el flujo de trabajo de obtención de permisos, coordinando con ingenieros estructurales, departamentos de construcción locales e inspectores para garantizar el cumplimiento absoluto.")
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
        "item": "https://www.accconstructionllc.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.accconstructionllc.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Commercial Contracting",
        "item": "https://www.accconstructionllc.com/services/commercial"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial General Contractor Services",
    "serviceType": "Commercial General Contractor Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ACC Construction LLC",
      "telephone": "+17202987777",
      "image": "https://www.accconstructionllc.com/assets/logo.png",
      "priceRange": "$$"
    },
    "areaServed": {
      "@type": "State",
      "name": "Colorado"
    },
    "description": "Licensed commercial contracting services, retail store build-outs, office renovations, structural concrete foundations, and pathway paving in Colorado."
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
      <PageHeader
        eyebrow={t("Commercial Services", "Servicios Comerciales")}
        title={t("Powering Your Commercial Builds", "Potenciando sus Construcciones Comerciales")}
        subtitle={t("Minimize delays with our highly reliable, licensed commercial builders. From retail build-outs to structural foundations, we handle it all.", "Minimice los retrasos con nuestros constructores comerciales autorizados y altamente confiables. Desde remodelaciones de tiendas hasta cimientos estructurales, lo manejamos todo.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  {t("Robust Construction Solutions for Businesses", "Soluciones de Construcción Robustas para Empresas")}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {t("ACC Construction LLC works with property managers, developers, and business owners across Colorado to deliver safe, scalable, and code-compliant commercial solutions. Whether you are planning a modern retail layout, constructing structural concrete foundations, or installing premium paver pathways, our commercial crew is ready to execute.", "ACC Construction LLC trabaja con administradores de propiedades, desarrolladores y propietarios de empresas en todo el Colorado para ofrecer soluciones comerciales seguras, escalables y que cumplen con los códigos. Ya sea que esté planeando un diseño minorista moderno, construyendo cimientos de concreto estructurales o instalando senderos de adoquines premium, nuestro equipo comercial está listo para ejecutar.")}
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-xl font-extrabold text-secondary">{t("Our Specialties", "Nuestras Especialidades")}</h3>
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
                <h3 className="font-display text-xl font-extrabold text-secondary mb-6">{t("Frequently Asked Questions", "Preguntas Frecuentes")}</h3>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <details key={idx} className="group border border-border rounded-2xl bg-muted/20 p-5 [&_summary::-webkit-details-marker]:hidden">
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
              <div className="relative overflow-hidden rounded-3xl border border-border">
                <img
                  src={img}
                  alt="Commercial construction installation"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">{t("ACC Construction Commercial", "ACC Construction Comercial")}</div>
                  <div className="mt-1 font-display text-xl font-extrabold">{t("Office, Retail, & Building Renovations", "Servicios de Oficina, Comercio y Edificios")}</div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold text-secondary">{t("Ready to get started?", "¿Listo para comenzar?")}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Request a commercial construction site audit. We will review your plans or systems and issue a transparent quote.", "Solicite una auditoría del sitio de construcción comercial. Revisaremos sus planos o sistemas y emitiremos una cotización transparente.")}
                </p>

                <div className="mt-6 space-y-3.5">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">{t("Request Proposal", "Solicitar Propuesta")}</Link>
                  </Button>
                  <a
                    href="tel:+17202987777"
                    className="flex items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-3 text-sm font-bold text-secondary hover:border-primary hover:text-primary transition"
                  >
                    <Phone className="h-4 w-4" /> (720) 298-7777
                  </a>
                </div>

                <div className="mt-6 space-y-2 text-xs font-semibold text-secondary/80">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary" /> {t("Fully Licensed & Insured", "Totalmente Autorizado y Asegurado")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" /> {t("Estimates Within 24 Hours", "Presupuestos en 24 Horas")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" /> {t("100% Satisfaction Guaranteed", "Garantía de Satisfacción del 100%")}
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
