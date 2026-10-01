import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { useLanguage } from "@/hooks/useLanguage";

function AboutPage() {
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
        "name": "About Us",
        "item": "https://electricalcontractorcorp.com/about"
      }
    ]
  };

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://electricalcontractorcorp.com/about#webpage",
    "url": "https://electricalcontractorcorp.com/about",
    "name": "About R&E Electrical Contractor Corp",
    "description": "Florida State Certified Electrical Contractor (License #EC 13008942) specializing in commercial construction, multifamily developments, hotel remodeling, schools, clinics, and residential electrical services.",
    "mainEntity": {
      "@type": "Electrician",
      "name": "R&E Electrical Contractor Corp",
      "telephone": "+17863075933",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <PageHeader
        eyebrow={t("About R&E Electrical", "Acerca de R&E Electrical")}
        title={t("Commercial & Electrical Construction Contractor", "Contratista de Construcción Eléctrica y Comercial")}
        subtitle={t("State Certified Electrical Contractor – EC 13008942. Commercial • Multifamily • Hospitality • Industrial • New Construction.", "Contratista Eléctrico Certificado Estatal – EC 13008942. Comercial • Multifamiliar • Hotelería • Industrial • Nueva Construcción.")}
      />
      <About />
      <WhyChooseUs />
      <Process />
      <EmergencyCTA />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Commercial & Electrical Construction Contractor | EC 13008942" },
      { name: "description", content: "Florida Commercial & Electrical Construction Contractor (EC 13008942). Serving General Contractors, developers & facility managers across Florida. Call (786) 307-5933." },
      { name: "keywords", content: "commercial electrical contractor Florida, electrical construction contractor Florida, licensed electrician Florida EC 13008942, master electrician Florida" },
      { property: "og:title", content: "About Us | Commercial & Electrical Construction Contractor | EC 13008942" },
      { property: "og:description", content: "Florida's trusted commercial & electrical construction contractors. Commercial, multifamily, hospitality, industrial & new construction." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/about" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/about" }
    ],
  }),
  component: AboutPage,
});
