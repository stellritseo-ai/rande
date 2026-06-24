import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-generator.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/generator")({
  head: () => ({
    meta: [
      { title: "Whole-Home Generator Installation | R&E Electrical Contractor Corp" },
      { name: "description", content: "Professional, licensed backup generator installations. Generac and Kohler certified installers. Automatic transfer switches in Florida." },
      { property: "og:title", content: "Generator Installation | R&E Electrical" },
      { property: "og:description", content: "Never lose power again with R&E Electrical Contractor Corp standby generator systems." },
    ],
  }),
  component: GeneratorPage,
});

function GeneratorPage() {
  const serviceList = [
    "Whole-Home Standby Generator Setup",
    "Generac & Kohler Certified Installs",
    "Automatic Transfer Switch (ATS) Wiring",
    "Manual Transfer Switch Receptacles",
    "Interlock Kit Installations (Portable Generators)",
    "Annual Maintenance & Testing Audits",
    "Propane or Natural Gas Line Coordination",
    "Surge Protection & Safety Grounding",
  ];

  const faqs = [
    { q: "How does a standby generator work?", a: "A standby generator is permanently installed outside your home, similar to an AC unit. It connects to your home's fuel source (natural gas or liquid propane) and monitors incoming utility power. Within seconds of an outage, it starts automatically and transfer switches shift your home's load to the generator." },
    { q: "What size generator do I need for my home?", a: "This depends on what appliances you want to run. A 20-22kW standby generator can power a typical medium-to-large Miami home, including central air conditioning, refrigeration, and cooking appliances. We perform a precise sizing audit on-site." },
    { q: "Do you handle city permits and concrete pads?", a: "Yes. In South Florida, code dictates strict concrete pads and anchoring requirements due to hurricanes. R&E Electrical Contractor Corp handles all mechanical pad installation, plumbing coordination, and electrical engineering permits." },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Backup Generators"
        title="Uninterrupted Power with Standby Generators"
        subtitle="Protect your family and property from Florida storm outages. We install and maintain premium standby generator systems with automatic transfer switches."
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  Complete Hurricane-Season Protection
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Power outages in South Florida can last for days or weeks during major storm events. A standby generator 
                  keeps your AC running, food fresh, and security systems active. R&E Electrical Contractor Corp is a certified installer 
                  for top standby generator manufacturers (Generac, Kohler, Briggs & Stratton). We design and install the entire system, 
                  including load-shedding modules and automatic transfer switches.
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
                  alt="Installing backup standby generator"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">R&E Electrical Backup Power</div>
                  <div className="mt-1 font-display text-xl font-extrabold">Generac & Kohler Certified Installers</div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold text-secondary">Ready to get started?</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Book a free on-site standby generator layout and load review. We'll map your system and provide a complete quote.
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
