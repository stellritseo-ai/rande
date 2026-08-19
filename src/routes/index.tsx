import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Welcome } from "@/components/site/Welcome";
import { Services } from "@/components/site/Services";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Projects } from "@/components/site/Projects";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactIllustrationSection } from "@/components/site/ContactIllustrationSection";
import { ServiceArea } from "@/components/site/ServiceArea";
import { GetInTouch } from "@/components/site/GetInTouch";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Electrical Contractor in Florida | Electrical Contractor Corp" },
      { name: "description", content: "Licensed & insured electrical contractor serving Florida. Residential, commercial, industrial & 24/7 emergency electrical services. Call (786) 307-5933." },
      { name: "keywords", content: "electrical contractor Florida, electrician Florida, electrical services Florida, licensed electrician Florida, commercial electrical contractor Florida, residential electrician Florida, 24/7 emergency electrician Florida, electrical company Florida" },
      { property: "og:title", content: "Electrical Contractor in Florida | Electrical Contractor Corp" },
      { property: "og:description", content: "Licensed & insured electrical contractor serving Florida. Residential, commercial, industrial & 24/7 emergency electrical services. Call (786) 307-5933." },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
      { name: "google-site-verification", content: "e-s3WCmdQDJJ0mhTLiX5OjFcSV4yRPThw8kw1kYrmjo" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/" }
    ],
  }),
  component: Index,
});

function Index() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": "https://electricalcontractorcorp.com/#organization",
    "name": "Electrical Contractor Corp",
    "alternateName": "R&E Electrical Contractor Corp",
    "image": "https://electricalcontractorcorp.com/assets/logo.png",
    "url": "https://electricalcontractorcorp.com",
    "telephone": "+17863075933",
    "email": "Williams@electricalcontractorcorp.com",
    "priceRange": "$$",
    "description": "State-licensed and insured electrical contractor providing residential, commercial, industrial, and 24/7 emergency electrical services throughout the state of Florida.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "18730 NW 77 TH CT",
      "addressLocality": "Hialeah",
      "addressRegion": "FL",
      "postalCode": "33015",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.9427",
      "longitude": "-80.3245"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Florida"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Miami-Dade County"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Broward County"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Electrical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Electrical Services",
            "url": "https://electricalcontractorcorp.com/services/residential"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Electrical Services",
            "url": "https://electricalcontractorcorp.com/services/commercial"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Electrical Services",
            "url": "https://electricalcontractorcorp.com/services/industrial"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Emergency Electrical Services",
            "url": "https://electricalcontractorcorp.com/services/emergency"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electrical Panel Upgrades",
            "url": "https://electricalcontractorcorp.com/services/panel-upgrades"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "EV Charger Installation",
            "url": "https://electricalcontractorcorp.com/services/ev-charger"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Backup Generator Installation",
            "url": "https://electricalcontractorcorp.com/services/generator"
          }
        }
      ]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/electricalcontractorcrop",
      "https://www.instagram.com/randeelectricalcontractorcrop/"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://electricalcontractorcorp.com/#website",
    "url": "https://electricalcontractorcorp.com",
    "name": "Electrical Contractor Corp",
    "publisher": {
      "@id": "https://electricalcontractorcorp.com/#organization"
    }
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Hero />
      <TrustBar />
      <Welcome />
      <Services />
      <EmergencyCTA />
      <Process />
      <WhyChooseUs />
      <Projects isLanding={true} />
      <Testimonials />
      <ContactIllustrationSection />
      <ServiceArea />
      <GetInTouch />
      <Toaster />
    </SiteLayout>
  );
}
