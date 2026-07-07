import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "General Contractor Services | ACC Construction LLC" },
      { name: "description", content: "Residential and commercial general contracting, kitchen/bathroom remodeling, driveway pavers, structural concrete foundations, and home additions in Colorado." },
      { property: "og:title", content: "Construction Services | ACC Construction LLC" },
      { property: "og:description", content: "Premium general contracting and home remodeling services across Colorado." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader
        eyebrow={t("Services", "Servicios")}
        title={t("Quality craftsmanship. Guaranteed results.", "Mano de obra de calidad. Resultados garantizados.")}
        subtitle={t("One licensed team for every construction and remodeling need.", "Un equipo autorizado para cada necesidad de construcción y remodelación.")}
      />
      <Services />
      <Process />
      <EmergencyCTA />
    </>
  );
}
