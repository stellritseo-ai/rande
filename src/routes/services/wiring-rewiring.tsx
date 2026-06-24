import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-residential.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/wiring-rewiring")({
  head: () => ({
    meta: [
      { title: "Electrical Wiring & Rewiring | R&E Electrical Contractor Corp" },
      { name: "description", content: "Professional, licensed home & commercial electrical wiring services. Knob & tube removal, aluminum wire mitigation, code corrections in Florida." },
      { property: "og:title", content: "Wiring & Rewiring Services | R&E Electrical" },
      { property: "og:description", content: "Safe, expert electrical wiring solutions for South Florida." },
    ],
  }),
  component: WiringPage,
});

function WiringPage() {
  const serviceList = [
    "Whole-Home Structural Rewiring",
    "Knob & Tube Wiring Removals & Mitigation",
    "Aluminum Wiring Safety Upgrades & Remediation",
    "Dedicated Circuits (Refrigeration, AC, EV)",
    "Resolving Electrical Code Violations",
    "Low-Voltage Smart Home Wiring",
    "Outdoor & Landscape Lighting Wiring",
    "Commercial Conduit & Cable Tray Runs",
  ];

  const faqs = [
    { q: "Is aluminum wiring safe?", a: "Aluminum wiring (common in homes built between 1965 and 1973) poses a fire risk at connection points due to thermal expansion. We perform complete safety remediations using COPALUM crimps or AlumiConn connectors to make your wiring safe without a full rewire." },
    { q: "How long does a complete home rewire take?", a: "A full rewire typically takes between 5 to 10 working days, depending on the size of the home and access to walls (attic or crawlspace). We minimize sheetrock damage by carefully running cables behind walls." },
    { q: "Will I need to vacate my home during a rewire?", a: "Not necessarily. We work section-by-section to ensure you have power and access in major parts of the home during evenings. However, it can be noisy, so some homeowners choose to be away during daytime hours." },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Wiring & Rewiring"
        title="Safe & Reliable Structural Wiring"
        subtitle="Protect your property from outdated, degraded, or non-compliant wiring. Our licensed master electricians deliver code-perfect wiring solutions."
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  Ensure Your Infrastructure is Solid & Safe
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Electrical wiring isn't meant to last forever. Outdated insulation, structural shifts, 
                  rodent damage, or poor initial installations can lead to degradation, creating serious fire hazards. 
                  R&E Electrical Contractor Corp's master electricians conduct thorough diagnostic checks on your circuitry, 
                  resolve code violations, and install modern, code-compliant copper wiring to keep your property running safely.
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
                  alt="Installing electrical wiring"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">R&E Electrical Wiring</div>
                  <div className="mt-1 font-display text-xl font-extrabold">Complete Rewires & Code Upgrades</div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold text-secondary">Ready to get started?</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Book a detailed wiring diagnostic or remodeling review. We'll map your system and provide a transparent quote.
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
