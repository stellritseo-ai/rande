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
// import { Estimate } from "@/components/site/Estimate";
// import { CTASection } from "@/components/site/CTASection";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Licensed General Contractor Denver & Colorado | ACC Construction LLC" },
      { name: "description", content: "Looking for a reliable general contractor in Denver or Colorado? ACC Construction LLC is licensed & insured. Call (720) 298-7777 for professional home remodeling, driveways, foundation, and home addition services." },
      { name: "keywords", content: "general contractor denver, home remodel denver, driveway contractor colorado, foundation pouring colorado, home additions, concrete sidewalks colorado" },
      { property: "og:title", content: "Licensed General Contractor Denver & Colorado | ACC Construction" },
      { property: "og:description", content: "ACC Construction LLC: Professional home remodeling, driveway installation, foundation work, and general contractor services in Colorado." },
    ],
    links: [
      { rel: "canonical", href: "https://www.accconstructionllc.com/" }
    ],
  }),
  component: Index,
});

function Index() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "ACC Construction LLC",
    "image": "https://www.accconstructionllc.com/assets/logo.png",
    "@id": "https://www.accconstructionllc.com/#organization",
    "url": "https://www.accconstructionllc.com",
    "telephone": "+17202987777",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Wheat Ridge",
      "addressRegion": "CO",
      "postalCode": "80033",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.7747",
      "longitude": "-105.1093"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "07:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.facebook.com/accconstructionllc",
      "https://www.instagram.com/accconstructionllc/"
    ]
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
      {/* <Estimate /> */}
      {/* <CTASection /> */}
      <Toaster />
    </SiteLayout>
  );
}
