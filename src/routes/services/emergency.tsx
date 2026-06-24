import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight, AlertTriangle } from "lucide-react";
import img from "@/assets/service-industrial.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/emergency")({
  head: () => ({
    meta: [
      { title: "24/7 Emergency Electrical Services | R&E Electrical Contractor Corp" },
      { name: "description", content: "On-call 24/7 emergency electricians in Florida. Rapid response for power outages, breaker box failures, electrical fires, and hazards." },
      { property: "og:title", content: "24/7 Emergency Electrical | R&E Electrical" },
      { property: "og:description", content: "Rapid emergency electrical response across Florida." },
    ],
  }),
  component: EmergencyPage,
});

function EmergencyPage() {
  const serviceList = [
    "Complete Power Outage Diagnostics",
    "Sparking Receptacle & Switch Inspections",
    "Melted or Overheated Breaker Replacements",
    "Restoring Power to Critical Circuits",
    "Storm & Water Damage Electrical Safety Cuts",
    "Burnt Electrical Odor Diagnostics",
    "Tripping Main Breaker Troubleshooting",
    "Emergency Generator Temporary Hookups",
  ];

  const faqs = [
    { q: "What constitutes an electrical emergency?", a: "If you hear buzzing/crackling inside walls, smell a fishy or chemical burning odor, see sparks, experience smoking outlets, or lose power to essential medical equipment, you should immediately turn off the main breaker and contact us." },
    { q: "How fast do you dispatch technicians?", a: "We operate a dedicated 24/7 emergency dispatch line. For high-hazard calls inside our service areas in South Florida, we aim to have a technician on-site within 60 minutes." },
    { q: "What should I do before the electrician arrives?", a: "If safe to do so, locate your main breaker box and turn off power to the affected room or the entire property. Do not touch wet areas or sparking wires. Stay clear of the panel if it is actively sparking or smoking." },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Emergency Support"
        title="24/7 Rapid Emergency Response"
        subtitle="Sparks? Smoke? Complete power loss? Call our emergency line immediately at (786) 307-5933. On-call master electricians are ready for immediate dispatch."
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10">
              <div className="rounded-3xl bg-destructive/10 border border-destructive/20 p-6 flex gap-4">
                <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg font-extrabold text-destructive">Electrical Hazard Warning</h3>
                  <p className="mt-1 text-sm text-secondary/80 leading-relaxed">
                    If you detect smoke, active sparking, or a strong chemical/burning smell, please vacate the premises 
                    and contact 911 immediately before calling our emergency line. Do not attempt to touch or repair electrical failures yourself.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  Ready to Restore Safety & Power Around the Clock
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Electrical emergencies don't wait for business hours, and neither do we. R&E Electrical Contractor Corp operates a fully 
                  staffed night and weekend dispatch division. Our emergency vans are stocked with common panels, breakers, 
                  and conduits to ensure we can complete repairs and restore power on the first visit.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-xl font-extrabold text-secondary">Common Emergency Calls We Handle</h3>
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
                  alt="On-site emergency repair truck"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">R&E Electrical Dispatch</div>
                  <div className="mt-1 font-display text-xl font-extrabold">24/7 Rapid Emergency Response</div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold text-secondary">Need immediate service?</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Call our dispatch hotline directly for priority queue processing.
                </p>

                <div className="mt-6 space-y-3.5">
                  <a
                    href="tel:+17863075933"
                    className="flex items-center justify-center gap-2.5 rounded-full bg-primary text-primary-foreground px-4 py-4 text-base font-bold shadow-lg hover:bg-primary/95 transition btn-glow animate-pulse-glow"
                  >
                    <Phone className="h-5 w-5" /> Call Hotline: (786) 307-5933
                  </a>
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <Link to="/contact">Request Estimate</Link>
                  </Button>
                </div>

                <div className="mt-6 space-y-2 text-xs font-semibold text-secondary/80">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary" /> Fully Licensed & Insured
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" /> 60-Minute Response Target
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
