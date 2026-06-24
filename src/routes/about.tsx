import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About R&E Electrical Contractor Corp | Florida Master Electricians" },
      { name: "description", content: "Family-owned electrical contractors with 15+ years powering Florida homes and businesses safely and beautifully." },
      { property: "og:title", content: "About R&E Electrical Contractor Corp" },
      { property: "og:description", content: "Florida's trusted licensed electrical contractors." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="About Us" title="Built on craft. Powered by trust." subtitle="A family-owned team of master electricians serving Florida since 2009." />
      <About />
      <WhyChooseUs />
      <Process />
      <EmergencyCTA />
    </SiteLayout>
  ),
});
