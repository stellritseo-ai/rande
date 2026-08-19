import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Estimate } from "@/components/site/Estimate";
import { Toaster } from "@/components/ui/sonner";
import { useLanguage } from "@/hooks/useLanguage";

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
    "name": "Contact Electrical Contractor Corp",
    "description": "Request a free flat-rate electrical estimate or 24/7 emergency electrical dispatch across Florida.",
    "mainEntity": {
      "@type": "Electrician",
      "name": "Electrical Contractor Corp",
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
        eyebrow={t("Contact & Free Estimate", "Contacto y Presupuesto Gratis")}
        title={t("Let's Power Your Next Project", "Alimentemos su Próximo Proyecto")}
        subtitle={t("Free estimates within 24 hours — transparent flat rates, licensed master electricians, and 24/7 emergency response.", "Presupuestos gratuitos en 24 horas — tarifas planas transparentes, maestros electricistas autorizados y respuesta de emergencia las 24 horas, los 7 días de la semana.")}
      />
      <Estimate />
      <Toaster />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us & Free Estimate | Electrical Contractor Corp" },
      { name: "description", content: "Get a free, transparent electrical estimate from Florida's licensed master electricians. Fast 24-hr turnaround or 24/7 emergency dispatch: (786) 307-5933." },
      { name: "keywords", content: "contact electrician Florida, free electrical estimate Florida, electrical contractor Miami FL phone, licensed electrician contact Hialeah, emergency electrical hotline Florida" },
      { property: "og:title", content: "Contact Us & Free Estimate | Electrical Contractor Corp" },
      { property: "og:description", content: "Free electrical estimates within 24 hours. Call (786) 307-5933 or submit your project details online." },
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
