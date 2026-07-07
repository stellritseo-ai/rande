import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Estimate } from "@/components/site/Estimate";
import { Toaster } from "@/components/ui/sonner";
import { useLanguage } from "@/hooks/useLanguage";

function ContactPage() {
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
        "name": "Contact Us",
        "item": "https://www.accconstructionllc.com/contact"
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
        eyebrow={t("Contact", "Contacto")}
        title={t("Let's build your next project.", "Construyamos su próximo proyecto.")}
        subtitle={t("Free estimates within 24 hours — no pressure, fully transparent.", "Presupuestos gratuitos en 24 horas — sin presiones, totalmente transparentes.")}
      />
      <Estimate />
      <Toaster />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Free Estimate & Contact | ACC Construction LLC" },
      { name: "description", content: "Get a free, transparent construction estimate from Colorado's trusted licensed general contractors. Call (720) 298-7777." },
      { property: "og:title", content: "Contact ACC Construction LLC" },
      { property: "og:description", content: "Free home remodeling and construction estimates within 24 hours." },
    ],
    links: [
      { rel: "canonical", href: "https://www.accconstructionllc.com/contact" }
    ],
  }),
  component: ContactPage,
});
