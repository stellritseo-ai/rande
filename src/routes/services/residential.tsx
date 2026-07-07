import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-residential.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/residential")({
  head: () => ({
    meta: [
      { title: "Residential General Contractor | ACC Construction LLC" },
      { name: "description", content: "Licensed residential construction services, custom home improvements, kitchen & bathroom remodeling, driveway installation, and home additions in Colorado." },
      { property: "og:title", content: "Residential Construction | ACC Construction LLC" },
      { property: "og:description", content: "Safe, expert residential general contractor solutions." },
    ],
    links: [
      { rel: "canonical", href: "https://www.accconstructionllc.com/services/residential" }
    ],
  }),
  component: ResidentialPage,
});

function ResidentialPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("Kitchen & Bathroom Remodeling", "Remodelación de Cocina y Baño"),
    t("Home Additions & Guest Suites", "Adiciones de Casa y Suites de Huéspedes"),
    t("Paver Driveway Installation", "Instalación de Entrada de Adoquines"),
    t("Concrete Sidewalks & Pathways", "Aceras de Concreto"),
    t("General Handyman & Carpentry", "Carpintería y Mantenimiento General"),
    t("Drywall, Trim & Paint Finishing", "Paneles de Yeso, Molduras y Acabado de Pintura"),
  ];

  const faqs = [
    {
      q: t("How do I start a remodeling project?", "¿Cómo inicio un proyecto de remodelación?"),
      a: t("You can begin by submitting our online quote request or calling us directly. We will schedule a site visit to assess your dimensions and design requirements.", "Puede comenzar enviando nuestra solicitud de cotización en línea o llamándonos directamente. Programaremos una visita al sitio para evaluar sus dimensiones y requisitos de diseño.")
    },
    {
      q: t("Is ACC Construction LLC licensed and insured?", "¿Está ACC Construction LLC autorizada y asegurada?"),
      a: t("Yes. ACC Construction LLC is a fully licensed and insured general contractor in Colorado, holding license number Licensed & Insured with $2M liability coverage.", "Sí. ACC Construction LLC es un contratista general totalmente autorizado y asegurado en Colorado, con el número de licencia Licensed & Insured y cobertura de responsabilidad de $2M.")
    },
    {
      q: t("Do you offer free estimates?", "¿Ofrecen presupuestos gratuitos?"),
      a: t("Absolutely. We provide detailed, itemized estimates for all residential projects at no charge.", "Absolutamente. Proporcionamos presupuestos detallados y desglosados para todos los proyectos residenciales sin cargo alguno.")
    }
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("Residential Services", "Servicios Residenciales")}
        title={t("Premium Residential Construction", "Construcción Residencial Premium")}
        subtitle={t("From minor home improvements to complete structural remodeling, our professional builders deliver reliable results.", "Desde pequeñas mejoras en el hogar hasta remodelaciones estructurales completas, nuestros constructores profesionales ofrecen resultados confiables.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  {t("Complete Remodeling & Paving Care", "Cuidado Integral de Remodelación y Pavimentación del Hogar")}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {t("Your home is your most valuable asset. At ACC Construction LLC, we design and execute residential projects that prioritize safety, aesthetics, and lasting value. Whether you are remodeling a kitchen, constructing a concrete driveway, or expanding layouts, we do the job right the first time.", "Su hogar es su activo más valioso. En ACC Construction LLC, diseñamos y ejecutamos proyectos residenciales que priorizan la seguridad, la estética y el valor duradero. Ya sea que esté remodelando una cocina, construyendo una entrada de concreto o ampliando planos, hacemos el trabajo bien a la primera.")}
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
                  alt="Residential construction work"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">{t("Colorado Contractors", "Contratistas de Colorado")}</div>
                  <div className="mt-1 font-display text-xl font-extrabold">{t("Professional Remodeling", "Remodelación Profesional del Hogar")}</div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold text-secondary">{t("Ready to get started?", "¿Listo para comenzar?")}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Request a transparent, itemized residential quote for your next remodeling or paving project.", "Solicite un presupuesto residencial detallado y transparente para su próximo proyecto de remodelación o pavimentación.")}
                </p>

                <div className="mt-6 space-y-3.5">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">{t("Request Quote", "Solicitar Cotización")}</Link>
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
