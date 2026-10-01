import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { TargetMarkets } from "@/components/site/TargetMarkets";
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
      { title: "Florida Commercial & Electrical Construction Contractor | EC 13008942" },
      { name: "description", content: "Florida Commercial & Electrical Construction Contractor. Commercial • Multifamily • Hospitality • Industrial • New Construction. State Certified EC 13008942. Request a bid or submit plans for estimate." },
      { name: "keywords", content: "commercial electrical contractor Florida, electrical construction contractor Florida, multifamily electrical contractor Florida, hotel electrical remodel Florida, new construction electrician Florida, submit plans electrical bid, dental medical clinic electrical Florida, school electrical contractor, EC 13008942" },
      { property: "og:title", content: "Florida Commercial & Electrical Construction Contractor | EC 13008942" },
      { property: "og:description", content: "Commercial • Multifamily • Hospitality • Industrial • New Construction. State Certified Electrical Contractor – EC 13008942. Request a bid or submit plans." },
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "State Certified Electrical Contractor",
      "recognizedBy": {
        "@type": "State",
        "name": "State of Florida Construction Industry Licensing Board"
      },
      "identifier": "EC 13008942"
    },
    "description": "State Certified Electrical Contractor (EC 13008942) specializing in commercial construction, multifamily developments, hotel remodeling, schools, clinics, and emergency electrical services across Florida.",
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
      },
      {
        "@type": "AdministrativeArea",
        "name": "Palm Beach County"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Commercial & Construction Electrical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Electrical Construction",
            "url": "https://electricalcontractorcorp.com/services/commercial"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "New Construction Electrical",
            "url": "https://electricalcontractorcorp.com/services/new-construction-electrical"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multifamily & Hotel Electrical Remodeling",
            "url": "https://electricalcontractorcorp.com/services/commercial"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fire Alarm & Low Voltage Systems",
            "url": "https://electricalcontractorcorp.com/services/fire-alarm"
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
            "name": "Residential Electrical Services",
            "url": "https://electricalcontractorcorp.com/services/residential"
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
    "name": "R&E Electrical Contractor Corp",
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
      <TargetMarkets />
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
