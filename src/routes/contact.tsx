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
        "item": "https://www.randeelectrical.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Us",
        "item": "https://www.randeelectrical.com/contact"
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
        title={t("Let's power your next project.", "Alimentemos su próximo proyecto.")}
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
      { title: "Free Estimate & Contact | R&E Electrical Contractor Corp" },
      { name: "description", content: "Get a free, transparent electrical estimate from Florida's trusted licensed contractors. Call (786) 307-5933." },
      { property: "og:title", content: "Contact R&E Electrical Contractor Corp" },
      { property: "og:description", content: "Free electrical estimates within 24 hours." },
    ],
    links: [
      { rel: "canonical", href: "https://www.randeelectrical.com/contact" }
    ],
  }),
  component: ContactPage,
});
