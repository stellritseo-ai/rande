import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Electrical Services | R&E Electrical Contractor Corp" },
      { name: "description", content: "Residential, commercial, industrial, EV chargers, generators, panel upgrades and emergency electrical services in Florida." },
      { property: "og:title", content: "Electrical Services | R&E Electrical" },
      { property: "og:description", content: "Full-spectrum electrical services across Florida." },
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
        title={t("Every wire. Every watt.", "Cada cable. Cada vatio.")}
        subtitle={t("One licensed team for every electrical need — residential to industrial.", "Un equipo autorizado para cada necesidad eléctrica, desde residencial hasta industrial.")}
      />
      <Services />
      <Process />
      <EmergencyCTA />
    </>
  );
}
