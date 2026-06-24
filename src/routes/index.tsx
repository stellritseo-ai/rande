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
      { title: "R&E Electrical Contractor Corp | Premium Electrical Contractors in Florida" },
      { name: "description", content: "Licensed, insured electricians delivering residential, commercial, and industrial electrical solutions across the state of Florida." },
      { property: "og:title", content: "R&E Electrical Contractor Corp | Premium Electrical Contractors" },
      { property: "og:description", content: "Powering homes and businesses with expert electrical solutions." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <Welcome />
      <Services />
      <EmergencyCTA />
      <Process />
      <WhyChooseUs />
      <Projects />
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
