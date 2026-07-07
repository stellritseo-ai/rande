import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Projects } from "@/components/site/Projects";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { useLanguage } from "@/hooks/useLanguage";

function ProjectsPage() {
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
        "name": "Projects",
        "item": "https://www.accconstructionllc.com/projects"
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
        eyebrow={t("Projects", "Proyectos")}
        title={t("Work we're proud of.", "Trabajo del cual estamos orgullosos.")}
        subtitle={t("A snapshot of recent installations from the ACC Construction crew.", "Una muestra de las instalaciones recientes del equipo de ACC Construction.")}
      />
      <Projects />
      <EmergencyCTA />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Featured Projects | ACC Construction LLC" },
      { name: "description", content: "Recent residential and commercial construction, remodeling, driveway, and foundation projects across Colorado." },
      { property: "og:title", content: "Featured Projects | ACC Construction LLC" },
      { property: "og:description", content: "Hand-picked recent construction and home improvement installations." },
    ],
    links: [
      { rel: "canonical", href: "https://www.accconstructionllc.com/projects" }
    ],
  }),
  component: ProjectsPage,
});
