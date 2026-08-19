import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-commercial.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/new-construction-electrical")({
  head: () => ({
    meta: [
      { title: "New Construction Electrical Contractor in Florida | Electrical Contractor Corp" },
      { name: "description", content: "State-certified new construction electrical contractor in Florida. Commercial & residential ground-up builds, blueprints, rough-ins & inspections. Call (786) 307-5933." },
      { name: "keywords", content: "new construction electrical contractor Florida, new construction electrician Florida, new construction electrical services Florida, electrical contractor for new construction Florida, commercial new construction electrician Florida, residential new construction electrician Florida" },
      { property: "og:title", content: "New Construction Electrical Contractor in Florida | Electrical Contractor Corp" },
      { property: "og:description", content: "State-certified electrical contractor for ground-up commercial buildings, multi-family developments, and luxury custom homes across Florida." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/services/new-construction-electrical" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/services/new-construction-electrical" }
    ],
  }),
  component: NewConstructionPage,
});

function NewConstructionPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("Complete Electrical Blueprint Design & Value Engineering", "Diseño de Planos Eléctricos e Ingeniería de Valor"),
    t("Underground Conduit Trenching & Primary Service Risers", "Zanjeo de Conductos Subterráneos y Acometidas Principales"),
    t("Commercial & Multi-Family Main Distribution Switchboards", "Tableros de Distribución Eléctrica Principal"),
    t("Phase-1 Rough-In Wiring, Conduit Bending & Outlet Boxes", "Cableado de Fase 1 (Rough-In) y Cajas de Salida"),
    t("Architectural Recessed, Track & High-Bay Lighting Systems", "Sistemas de Iluminación Arquitectónica y High-Bay"),
    t("Dedicated HVAC, Chiller & Heavy Equipment Power Hookups", "Conexiones Dedicadas para HVAC y Equipos Pesados"),
    t("Low-Voltage Structured Cabling, Fire Alarm & Security Rough-In", "Cableado de Bajo Voltaje, Alarma de Incendio y Seguridad"),
    t("Florida Power & Light (FPL) Transformer Vault Coordination", "Coordinación de Bóvedas de Transformadores con FPL"),
    t("Phase-2 Trim-Out, Fixture Hanging & Device Installation", "Fase 2 (Trim-Out), Montaje de Luminarias y Dispositivos"),
    t("Full Municipal Pre-Pour, Rough-In & Final Inspection Sign-Offs", "Inspecciones Municipales: Pre-Vaciado, Rough-In y Final"),
  ];

  const faqs = [
    {
      q: t("When should an electrical contractor be brought into a new construction project?", "¿Cuándo debe incorporarse el contratista eléctrico a un proyecto de nueva construcción?"),
      a: t("Early involvement during pre-construction and architectural design is critical. We work alongside architects, developers, and general contractors to perform value engineering, review single-line diagrams, verify utility service availability with FPL, and prevent costly design revisions down the road.", "La participación temprana durante el diseño arquitectónico es crítica. Trabajamos junto a desarrolladores y contratistas generales para realizar ingeniería de valor y verificar la disponibilidad de servicios públicos con FPL.")
    },
    {
      q: t("How do you manage phased construction schedules and milestone inspections?", "¿Cómo gestionan los cronogramas de construcción por fases y las inspecciones?"),
      a: t("We assign dedicated project managers and master electricians to oversee each construction phase: underground conduit placement prior to slab pour, wall rough-in before insulation and drywall, and final trim-out after paint. We schedule municipal inspections proactively to keep your overall general construction timeline on schedule.", "Asignamos directores de proyecto para supervisar cada fase: zanjeo subterráneo antes del vaciado, cableado en pared antes del drywall y acabado final.")
    },
    {
      q: t("Can you provide bonded bids for commercial ground-up developments?", "¿Pueden proporcionar ofertas afianzadas para desarrollos comerciales?"),
      a: t("Yes. Electrical Contractor Corp maintains complete bonding capabilities, $2,000,000 general liability insurance, and full workers' compensation coverage, meeting all bid qualification standards for public and private commercial construction projects in Florida.", "Sí. Electrical Contractor Corp cuenta con capacidad de fianza completa, seguro de responsabilidad civil de $2,000,000 y compensación laboral integral.")
    },
    {
      q: t("Do you coordinate primary service connections with Florida utility companies?", "¿Coordinan las conexiones de servicio primario con las empresas de servicios públicos de Florida?"),
      a: t("Yes. We interface directly with Florida Power & Light (FPL), Duke Energy, and local municipal electric authorities to size pad-mounted transformers, submit load sheets, and coordinate energization timing.", "Sí. Nos comunicamos directamente con Florida Power & Light (FPL) y Duke Energy para dimensionar transformadores y coordinar la energización.")
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
        "name": "New Construction Electrical",
        "item": "https://electricalcontractorcorp.com/services/new-construction-electrical"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "New Construction Electrical Contracting Services",
    "serviceType": "New Construction Electrical Contractor",
    "provider": {
      "@type": "Electrician",
      "name": "Electrical Contractor Corp",
      "telephone": "+17863075933",
      "image": "https://electricalcontractorcorp.com/assets/logo.png",
      "priceRange": "$$$",
      "url": "https://electricalcontractorcorp.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    },
    "description": "Licensed new construction electrical contractor in Florida. Commercial developments, luxury custom homes, multi-family projects, blueprints, rough-ins, and final inspections."
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
        eyebrow={t("Ground-Up Electrical Construction", "Construcción Eléctrica desde Cero")}
        title={t("New Construction Electrical Contractor in Florida", "Contratista Eléctrico de Nuevas Construcciones en Florida")}
        subtitle={t("Turn-key electrical engineering and contracting for commercial developments, luxury residential builds, and multi-family communities across Florida.", "Ingeniería y contratación eléctrica llave en mano para desarrollos comerciales, residencias de lujo y comunidades multifamiliares en Florida.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10 text-left">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary tracking-tight">
                  {t("From Ground-Break to Final Certificate of Occupancy", "Desde el Inicio de Obra hasta el Certificado Final de Ocupación")}
                </h2>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("New construction electrical systems require seamless collaboration, disciplined milestone tracking, and strict code compliance. Electrical Contractor Corp acts as a dedicated trade partner for general contractors, commercial developers, and custom home builders throughout Florida. We manage every phase of the electrical build with uncompromising precision.", "Los sistemas eléctricos de nuevas construcciones requieren colaboración fluida y estricto cumplimiento del código. Electrical Contractor Corp actúa como un socio comercial dedicado para contratistas generales y desarrolladores en Florida.")}
                </p>
                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("From underground conduit trenching and main switchboard rigging to branch circuit rough-in, low-voltage infrastructure, architectural lighting trim-out, and final municipal inspection sign-offs, our experienced master electricians deliver builds on-time and within budget.", "Desde el zanjeo de conductos subterráneos y tableros principales hasta el cableado de circuitos, iluminación arquitectónica e inspecciones finales, nuestros maestros electricistas entregan proyectos a tiempo y dentro del presupuesto.")}
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("New Construction Scope & Milestones", "Alcance y Fases de Nueva Construcción")}
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
                  alt="New construction commercial electrical contracting in Florida"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">
                    {t("Florida Construction Electricians", "Electricistas de Construcción en Florida")}
                  </div>
                  <div className="mt-1 font-display text-xl font-extrabold">
                    {t("Commercial & Residential Ground-Up Builds", "Construcción Comercial y Residencial desde Cero")}
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm text-left">
                <h3 className="font-display text-2xl font-extrabold text-secondary">
                  {t("Submit Blueprints for Bid", "Envíe sus Planos para Cotización")}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Upload your project plans or schedule a pre-construction consultation with our lead estimator. We provide itemized, competitive bids.", "Cargue los planos de su proyecto o programe una consulta de preconstrucción con nuestro estimador principal.")}
                </p>

                <div className="mt-6 space-y-3.5">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">{t("Submit Project Plans", "Enviar Planos del Proyecto")}</Link>
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
                    <Clock className="h-4 w-4 text-primary" /> {t("Dedicated Phased Project Management", "Gestión de Proyecto Dedicada por Fases")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" /> {t("Bonded & Insured for Major Developments", "Afianzado y Asegurado para Grandes Desarrollos")}
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
