import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Careers } from "@/components/site/Careers";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { useLanguage } from "@/hooks/useLanguage";

function CareersPage() {
  const { t } = useLanguage();
  const schema = {
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
        "name": "Careers",
        "item": "https://electricalcontractorcorp.com/careers"
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
        eyebrow={t("Careers & Hiring", "Carreras y Contratación")}
        title={t("Join Our Electrical Team in Florida", "Únase a Nuestro Equipo Eléctrico en Florida")}
        subtitle={t("We are actively hiring licensed journeyman electricians, apprentices, and low-voltage technicians across Florida. Competitive pay, benefits, and career growth.", "Estamos contratando activamente electricistas certificados, aprendices y técnicos de bajo voltaje en Florida.")}
      />
      <Careers />
      <EmergencyCTA />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Electrician Careers & Jobs in Florida | Electrical Contractor Corp" },
      { name: "description", content: "Apply for electrician jobs, journeyman positions & apprenticeships at Electrical Contractor Corp. Competitive wages, health benefits & steady Florida work." },
      { name: "keywords", content: "electrician jobs Florida, electrical contractor hiring Miami, apprentice electrician jobs Hialeah, journeyman electrician careers Florida" },
      { property: "og:title", content: "Electrician Careers & Jobs in Florida | Electrical Contractor Corp" },
      { property: "og:description", content: "Join our licensed electrical crew in Florida. Competitive compensation and steady career growth." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/careers" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/careers" }
    ],
  }),
  component: CareersPage,
});
