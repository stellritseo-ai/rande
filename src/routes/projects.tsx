import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Projects } from "@/components/site/Projects";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Featured Projects | R&E Electrical Contractor Corp" },
      { name: "description", content: "Recent residential, commercial, and industrial electrical projects across Florida." },
      { property: "og:title", content: "Featured Projects | R&E Electrical Contractor Corp" },
      { property: "og:description", content: "Hand-picked recent electrical installations." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="Projects" title="Work we're proud of." subtitle="A snapshot of recent installations from the R&E Electrical crew." />
      <Projects />
      <EmergencyCTA />
    </SiteLayout>
  ),
});
