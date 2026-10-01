import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Estimate } from "@/components/site/Estimate";
import { Toaster } from "@/components/ui/sonner";
import { useLanguage } from "@/hooks/useLanguage";
import { FileUp, ArrowRight } from "lucide-react";

function ContactPage() {
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
        "name": "Contact Us",
        "item": "https://electricalcontractorcorp.com/contact"
      }
    ]
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://electricalcontractorcorp.com/contact#webpage",
    "url": "https://electricalcontractorcorp.com/contact",
    "name": "Contact R&E Electrical Contractor Corp",
    "description": "Florida State Certified Electrical Contractor (License #EC 13008942). Request a commercial bid, submit PDF plans for estimating, or 24/7 emergency dispatch.",
    "mainEntity": {
      "@type": "Electrician",
      "name": "R&E Electrical Contractor Corp",
      "telephone": "+17863075933",
      "email": "Williams@electricalcontractorcorp.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "18730 NW 77 TH CT",
        "addressLocality": "Hialeah",
        "addressRegion": "FL",
        "postalCode": "33015",
        "addressCountry": "US"
      }
    }
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <PageHeader
        variant="light"
        eyebrow={t("Florida Commercial & Construction Electrical", "Construcción Eléctrica y Comercial de Florida")}
        title={t("Request a Bid or Service Estimate", "Solicitar Licitación o Presupuesto de Servicio")}
        subtitle={t("State Certified Electrical Contractor – EC 13008942. Serving General Contractors, developers, commercial properties, and residential clients across Florida.", "Contratista Eléctrico Certificado Estatal – EC 13008942. Atendiendo a Contratistas Generales, desarrolladores, propiedades comerciales y clientes residenciales en Florida.")}
      />
      
      {/* Blueprint Submission Notice for GCs - Light Mode */}
      <section className="bg-gradient-to-r from-orange-50/80 via-amber-50/60 to-orange-50/80 py-6 px-4 border-b border-orange-200/70">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-orange-200/90 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#FF6B00] text-white flex items-center justify-center shrink-0 shadow-md">
              <FileUp className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                {t("Submitting Blueprints or Project Plans for Bid?", "¿Presentando Planos o Especificaciones para Licitación?")}
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                {t("Use our specialized Estimating Portal to upload PDF drawings, set bid deadlines, and enter cloud plan rooms.", "Utilice nuestro Portal de Estimación para subir planos en PDF, establecer fechas límites y compartir salas de planos.")}
              </p>
            </div>
          </div>
          <Link
            to="/submit-plans"
            className="shrink-0 inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#E05E00] text-white font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-full transition shadow-md hover:shadow-lg active:scale-95"
          >
            <span>{t("Go to Submit Plans Portal", "Ir al Portal de Planos")}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      <Estimate />
      <Toaster />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request a Bid | Submit Plans for Estimate | EC 13008942" },
      { name: "description", content: "State Certified Electrical Contractor – EC 13008942. Submit PDF plans for commercial estimating or request a bid for new construction, hospitality, multifamily, and clinics across Florida." },
      { name: "keywords", content: "submit plans electrical bid, request electrical bid Florida, commercial electrical takeoff Florida, general contractor electrical sub Florida, EC 13008942" },
      { property: "og:title", content: "Request a Bid | Submit Plans for Estimate | EC 13008942" },
      { property: "og:description", content: "Florida Commercial & Electrical Construction Contractor. Commercial • Multifamily • Hospitality • Industrial • New Construction. State Certified EC 13008942." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/contact" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/contact" }
    ],
  }),
  component: ContactPage,
});
