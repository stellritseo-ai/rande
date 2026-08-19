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
        "item": "https://electricalcontractorcorp.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://electricalcontractorcorp.com/projects"
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
        eyebrow={t("Projects Portfolio", "Portafolio de Proyectos")}
        title={t("Completed Electrical Projects in Florida", "Proyectos Eléctricos Completados en Florida")}
        subtitle={t("A showcase of recent residential, commercial, and industrial electrical installations across Florida.", "Una muestra de instalaciones eléctricas residenciales, comerciales e industriales recientes en Florida.")}
      />
      <Projects />
      <EmergencyCTA />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Featured Electrical Projects in Florida | Electrical Contractor Corp" },
      { name: "description", content: "Explore our portfolio of completed residential panel upgrades, commercial office build-outs, and industrial electrical installations across Florida." },
      { name: "keywords", content: "electrical projects Florida, commercial electrical portfolio Florida, residential panel upgrade projects, EV charger installation photos Florida" },
      { property: "og:title", content: "Featured Electrical Projects in Florida | Electrical Contractor Corp" },
      { property: "og:description", content: "Explore recent electrical installations across Florida." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/projects" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/projects" }
    ],
  }),
  component: ProjectsPage,
});
