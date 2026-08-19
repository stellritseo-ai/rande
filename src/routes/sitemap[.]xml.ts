import { createFileRoute } from "@tanstack/react-router";

interface SitemapEntry {
  path: string;
  changefreq?: "daily" | "weekly" | "monthly";
  priority?: string;
  lastmod?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const BASE_URL = "https://electricalcontractorcorp.com";
        const today = new Date().toISOString().split("T")[0];

        const entries: SitemapEntry[] = [
          // Primary Hubs
          { path: "", changefreq: "weekly", priority: "1.0", lastmod: today },
          { path: "/services", changefreq: "weekly", priority: "0.9", lastmod: today },
          { path: "/service-areas", changefreq: "weekly", priority: "0.9", lastmod: today },

          // Core & Specialty Services
          { path: "/services/residential", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/services/commercial", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/services/industrial", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/services/emergency", changefreq: "weekly", priority: "0.9", lastmod: today },
          { path: "/services/panel-upgrades", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/services/ev-charger", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/services/generator", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/services/fire-alarm", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/services/cctv-camera", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/services/security-systems", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/services/new-construction-electrical", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/services/wiring-rewiring", changefreq: "monthly", priority: "0.8", lastmod: today },

          // Service Areas (Verified Local Hubs)
          { path: "/service-areas/miami-fl", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/service-areas/hialeah-fl", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/service-areas/fort-lauderdale-fl", changefreq: "monthly", priority: "0.8", lastmod: today },

          // Trust & Supporting Pages
          { path: "/about", changefreq: "monthly", priority: "0.7", lastmod: today },
          { path: "/contact", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/projects", changefreq: "monthly", priority: "0.7", lastmod: today },
          { path: "/reviews", changefreq: "monthly", priority: "0.7", lastmod: today },
          { path: "/careers", changefreq: "monthly", priority: "0.7", lastmod: today },
        ];

        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
          },
        });
      },
    },
  },
});
