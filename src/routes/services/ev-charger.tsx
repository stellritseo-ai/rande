import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-ev.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/ev-charger")({
  head: () => ({
    meta: [
      { title: "EV Charger Installation | R&E Electrical Contractor Corp" },
      { name: "description", content: "Professional, licensed Level 2 home EV charger installations. Certified Tesla, ChargePoint, and generic charger setup in Florida." },
      { property: "og:title", content: "EV Charger Installation | R&E Electrical" },
      { property: "og:description", content: "Get your home or business Level 2 EV charging ready." },
    ],
  }),
  component: EvChargerPage,
});

function EvChargerPage() {
  const serviceList = [
    "Tesla Wall Connector Installation",
    "Universal Level 2 Home Charger Setups",
    "NEMA 14-50 240V Outlet Installations",
    "Commercial EV Fleet Charging Stations",
    "Load Management & Sub-Panel Wiring",
    "Multi-Family & Condo EV Charging Systems",
    "City Permit & Safety Compliance Inspections",
    "Smart Wi-Fi Enabled Charger Setup",
  ];

  const faqs = [
    { q: "What is the difference between Level 1 and Level 2 charging?", a: "Level 1 uses a standard 120V outlet and adds only 3-5 miles of range per hour. Level 2 uses a 240V circuit and adds 25-50 miles of range per hour, fully charging most vehicles overnight." },
    { q: "Will I need to upgrade my electrical panel for an EV charger?", a: "Not always. We perform a load calculation on your current panel. If you have a 200-amp panel, you usually have room. For 100-amp panels, a load-shedding device or minor upgrade might be needed." },
    { q: "Are there tax credits or utility rebates available?", a: "Yes. The federal government offers credits for residential EV infrastructure, and local utilities like FPL occasionally run rebate programs for off-peak EV charging setup." },
  ];

  return (
    <>
      <PageHeader
        eyebrow="EV Charging"
        title="Fast & Secure EV Charger Installations"
        subtitle="Wake up to a full charge. We install certified home and commercial Level 2 EV chargers, mapped perfectly to your vehicle's requirements."
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  High-Speed Charging at Your Convenience
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Electric vehicles are the future, and charging at home is the most convenient way to fuel them. 
                  R&E Electrical Contractor Corp installs Level 2 charging equipment from all major brands (Tesla, ChargePoint, Wallbox, Emporia, and more). 
                  Our certified electricians ensure that your wiring, breakers, and receptacles are sized correctly 
                  to prevent overheating and electrical fire risks.
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
                  alt="Installing EV charging station"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">R&E Electrical EV</div>
                  <div className="mt-1 font-display text-xl font-extrabold">Tesla & Universal Level 2 Chargers</div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold text-secondary">Ready to get started?</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Book an EV charger site review. We'll verify your panel capacity and provide a quote for the install.
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
