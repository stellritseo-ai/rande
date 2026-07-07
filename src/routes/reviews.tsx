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
        "item": "https://www.accconstructionllc.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Reviews",
        "item": "https://www.accconstructionllc.com/reviews"
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
        eyebrow={t("Reviews", "Opiniones")}
        title={t("Trusted by 300+ homes & businesses.", "Con la confianza de más de 300 hogares y empresas.")}
        subtitle={t("See what our customers say about the ACC Construction LLC experience.", "Vea lo que dicen nuestros clientes sobre la experiencia con ACC Construction LLC.")}
      />
      <Testimonials isGrid={true} />
      <EmergencyCTA />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | ACC Construction LLC" },
      { name: "description", content: "Read 300+ five-star reviews from ACC Construction LLC's residential and commercial contracting clients." },
      { property: "og:title", content: "Customer Reviews | ACC Construction LLC" },
      { property: "og:description", content: "4.9 average rating from 300+ customers." },
    ],
    links: [
      { rel: "canonical", href: "https://www.accconstructionllc.com/reviews" }
    ],
  }),
  component: ReviewsPage,
});
