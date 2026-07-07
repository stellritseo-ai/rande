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
  const schema = {
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
        "name": "About Us",
        "item": "https://www.accconstructionllc.com/about"
      }
    ]
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHeader
        eyebrow={t("About Us", "Sobre Nosotros")}
        title={t("Who We Are", "Quiénes Somos")}
        subtitle={t("For over 25 years, ACC Construction LLC has stood for reliability, skill, and absolute integrity in Colorado.", "Durante más de 25 años, ACC Construction LLC ha sido sinónimo de confiabilidad, habilidad y absoluta integridad en Colorado.")}
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
      { title: "About ACC Construction LLC | Wheat Ridge's General Contractor" },
      { name: "description", content: "Learn more about ACC Construction LLC. For over 25 years, we have provided licensed, insured, and bonded general contracting services across Colorado." },
      { property: "og:title", content: "About ACC Construction LLC | Colorado General Contractor" },
      { property: "og:description", content: "Wheat Ridge's licensed, insured, and bonded general contractor with 25+ years of experience." },
    ],
    links: [
      { rel: "canonical", href: "https://www.accconstructionllc.com/about" }
    ],
  }),
  component: AboutPage,
});
