import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-residential.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/residential")({
  head: () => ({
    meta: [
      { title: "Residential Electrical Services | R&E Electrical Contractor Corp" },
      { name: "description", content: "Professional, licensed home electrical repairs, installations, smart home setups, and safety inspections across South Florida." },
      { property: "og:title", content: "Residential Electrical Services | R&E Electrical" },
      { property: "og:description", content: "Safe, expert residential electrical solutions." },
    ],
  }),
  component: ResidentialPage,
});

function ResidentialPage() {
  const serviceList = [
    "Whole-Home Rewiring & Cable Replacement",
    "Smart Lighting & Home Automation Setup",
    "Recessed LED Lighting Installations",
    "Ceiling Fan & Fixture Installations",
    "Surge Protection & Safety Inspections",
    "Outlet, GFCIs & Switch Replacements",
    "Sub-Panel Installations & Capacity Upgrades",
    "Remodeling & Kitchen/Bath Additions",
  ];

  const faqs = [
    { q: "How do I know if my home needs a rewire?", a: "Signs include frequently tripping breakers, flickering lights, burning odors near outlets, two-prong ungrounded outlets, or if your home is over 40 years old with older wiring styles like knob & tube or aluminum." },
    { q: "Are all R&E Electrical Contractor Corp technicians licensed?", a: "Yes. Every technician sent to your home is fully background-checked, drug-tested, and licensed in accordance with Florida state requirements." },
    { q: "Do you offer emergency residential dispatch?", a: "Absolutely. We have emergency dispatch technicians on-call 24/7 for hazards like sparks, smoke, or complete power outages." },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Residential Services"
        title="Safe & Modern Power for Your Home"
        subtitle="From simple receptacle replacements to complete home rewiring, our master electricians treat your home with the care it deserves."
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  Complete Home Electrical Care
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Your home's electrical system is its heartbeat. At R&E Electrical Contractor Corp, we design and install systems 
                  that prioritize your family's safety and comfort, while introducing modern efficiency. 
                  Whether you are upgrading to smart lighting, adding dedicated vehicle charging circuits, 
                  or securing your home with backup power, we do the job right the first time.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-xl font-extrabold text-secondary">Our Specialties</h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {serviceList.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-secondary">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ Section */}
              <div className="border-t border-border pt-8">
                <h3 className="font-display text-xl font-extrabold text-secondary mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <details key={idx} className="group border border-border rounded-2xl bg-muted/20 p-5 [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-display text-base font-bold text-secondary">
                        {faq.q}
                        <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-open:rotate-90 text-primary" />
                      </summary>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed border-t border-border/60 pt-3">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: CTA Sidebar */}
            <div className="space-y-8">
              <div className="relative overflow-hidden rounded-3xl border border-border">
                <img
                  src={img}
                  alt="Residential electrical work"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">Florida Electricians</div>
                  <div className="mt-1 font-display text-xl font-extrabold">Professional Home Installations</div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold text-secondary">Ready to get started?</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Book a transparent, fixed-price home electrical estimate. We charge by the job, not the hour.
                </p>

                <div className="mt-6 space-y-3.5">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">Request Estimate</Link>
                  </Button>
                  <a
                    href="tel:+17863075933"
                    className="flex items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-3 text-sm font-bold text-secondary hover:border-primary hover:text-primary transition"
                  >
                    <Phone className="h-4 w-4" /> (786) 307-5933
                  </a>
                </div>

                <div className="mt-6 space-y-2 text-xs font-semibold text-secondary/80">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary" /> Fully Licensed & Insured
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" /> Estimates Within 24 Hours
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" /> 100% Satisfaction Guaranteed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Process />
      <EmergencyCTA />
    </>
  );
}
