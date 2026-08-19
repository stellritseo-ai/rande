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
    "name": "About Electrical Contractor Corp",
    "description": "Florida state-certified electrical contractor providing licensed residential, commercial, industrial, and 24/7 emergency electrical services.",
    "mainEntity": {
      "@type": "Electrician",
      "name": "Electrical Contractor Corp",
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
        eyebrow={t("About Us", "Sobre Nosotros")}
        title={t("Built on Craft. Powered by Trust.", "Construido sobre Mano de Obra. Impulsado por la Confianza.")}
        subtitle={t("State-certified master electricians proudly serving the entire state of Florida with residential, commercial, and industrial excellence.", "Maestros electricistas certificados por el estado que sirven con orgullo a todo Florida con excelencia residencial, comercial e industrial.")}
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
      { title: "About Us | Electrical Contractor Corp | Florida Master Electricians" },
      { name: "description", content: "Learn about Electrical Contractor Corp, Florida's state-licensed electrical contracting team. 17+ years of residential, commercial & industrial excellence. Call (786) 307-5933." },
      { name: "keywords", content: "about electrical contractor Florida, licensed electrical company Florida, Florida master electricians, electrical contractor Hialeah FL, commercial electrical contractor Florida" },
      { property: "og:title", content: "About Us | Electrical Contractor Corp | Florida Master Electricians" },
      { property: "og:description", content: "Florida's trusted licensed electrical contractors. Residential, commercial, industrial, and 24/7 emergency electrical services." },
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
