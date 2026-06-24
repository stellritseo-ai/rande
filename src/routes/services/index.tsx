import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";

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
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Every wire. Every watt."
        subtitle="One licensed team for every electrical need — residential to industrial."
      />
      <Services />
      <Process />
      <EmergencyCTA />
    </>
  );
}
