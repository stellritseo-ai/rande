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
import { FAQSection } from "@/components/site/FAQSection";
import { ContactIllustrationSection } from "@/components/site/ContactIllustrationSection";
import { ServiceArea } from "@/components/site/ServiceArea";
import { GetInTouch } from "@/components/site/GetInTouch";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Commercial Electrical Contractor in Florida | R&E Electrical Contractor Corp" },
      { name: "description", content: "Licensed & insured commercial electrical contractor in Florida (EC 13008942). New construction, multifamily, hospitality, industrial & line-item plan takeoffs. Call (786) 307-5933." },
      { name: "keywords", content: "commercial electrical contractor Florida, commercial electrician Florida, electrical contractor Florida, electrical construction contractor Florida, new construction electrical contractor Florida, industrial electrical contractor Florida, multifamily electrical contractor Florida, electrical contractor Miami, electrical contractor Hialeah, electrical contractor Fort Lauderdale, commercial electrical services Florida, electrical estimating Florida, electrical plan takeoff Florida, EC 13008942" },
      { property: "og:title", content: "Commercial Electrical Contractor in Florida | R&E Electrical Contractor Corp" },
      { property: "og:description", content: "Florida Commercial Electrical Contractor. Commercial • Multifamily • Hospitality • Industrial • New Construction. State Certified EC 13008942. Request a bid or submit plans." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/" },
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
      "https://www.instagram.com/randeelectricalcontractorcrop/",
      "https://www.bbb.org/us/fl/hialeah/profile/electrician/r-e-electrical-contractor-0633-92050505"
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://electricalcontractorcorp.com/"
      }
    ]
  };

  const homepageFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does a commercial electrical contractor do in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A commercial electrical contractor designs, installs, upgrades, and maintains complex electrical power systems for business facilities, commercial construction, and multifamily developments. At R&E Electrical Contractor Corp (EC 13008942), our commercial scope includes 3-phase power distribution, switchboards, transformers, new construction rough-ins, hotel remodels, restaurant power, medical clinic systems (NFPA 99), fire alarm integration, EV charging infrastructure, and municipal code compliance."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide electrical plan takeoffs and bid preparation for General Contractors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialize in working directly with General Contractors, commercial developers, and project estimators. You can upload architectural and MEP blueprints through our Plan Room (/submit-plans). Our estimators provide comprehensive line-item takeoffs, branch circuit breakdowns, switchgear specifications, and value engineering (VE) recommendations with turnaround within 24 to 48 hours for standard projects."
        }
      },
      {
        "@type": "Question",
        "name": "What licenses, bonding, and insurance does R&E Electrical Contractor Corp maintain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "R&E Electrical Contractor Corp holds Florida State Certified Electrical Contractor License #EC 13008942, authorizing us to pull permits and perform electrical construction across every county and municipality statewide. We carry $2,000,000 in commercial general liability insurance, comprehensive workers' compensation, and full commercial automotive coverage, satisfying corporate GC and institutional requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Which commercial industries and building types do you service in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve hotels & hospitality resorts, multifamily apartment communities & condominiums, commercial dining & restaurants, retail centers & shopping plazas, dental & medical clinics, corporate office build-outs, warehouses & industrial logistics facilities, and educational institutions across South Florida and statewide."
        }
      },
      {
        "@type": "Question",
        "name": "How do you coordinate with Florida Power & Light (FPL) and municipal building departments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We coordinate all electrical utility interfaces directly with FPL and local municipal building departments. Our team prepares load calculation sheets, coordinates pad-mounted transformer specifications and CT metering cabinets, submits electrical permit packages, and schedules rough-in, slab pre-pour, and final inspections for swift re-energization and Certificates of Occupancy."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle emergency commercial power outages and electrical hazards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We maintain a 24/7 rapid response dispatch team for urgent commercial outages, transformer failures, damaged switchgear, and safety hazards. Emergency crews are equipped with thermal imaging cameras and replacement hardware to diagnose and restore power promptly."
        }
      }
    ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }}
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
      <FAQSection />
      <ContactIllustrationSection />
      <ServiceArea />
      <GetInTouch />
      <Toaster />
    </SiteLayout>
  );
}
