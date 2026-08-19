import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Testimonials } from "@/components/site/Testimonials";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { useLanguage } from "@/hooks/useLanguage";

function ReviewsPage() {
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
        "name": "Reviews",
        "item": "https://electricalcontractorcorp.com/reviews"
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
        eyebrow={t("Client Testimonials", "Testimonios de Clientes")}
        title={t("Trusted by Homes & Businesses Across Florida", "Con la Confianza de Hogares y Empresas en Toda Florida")}
        subtitle={t("Read verified customer reviews and feedback for Electrical Contractor Corp's residential, commercial, and emergency electrical services.", "Lea reseñas verificadas de clientes para los servicios eléctricos residenciales, comerciales y de emergencia de Electrical Contractor Corp.")}
      />
      <Testimonials isGrid={true} />
      <EmergencyCTA />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews & Ratings | Electrical Contractor Corp" },
      { name: "description", content: "Read verified customer reviews and ratings for Electrical Contractor Corp. Trusted residential, commercial & emergency electricians in Florida. Call (786) 307-5933." },
      { name: "keywords", content: "electrician reviews Florida, electrical contractor reviews Miami, top rated electrician Florida, trusted electricians Hialeah" },
      { property: "og:title", content: "Customer Reviews & Ratings | Electrical Contractor Corp" },
      { property: "og:description", content: "Verified five-star reviews from residential and commercial electrical clients in Florida." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/reviews" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/reviews" }
    ],
  }),
  component: ReviewsPage,
});
