import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-commercial.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/security-systems")({
  head: () => ({
    meta: [
      { title: "Security Systems & Low-Voltage Wiring | R&E Electrical Contractor Corp" },
      { name: "description", content: "Professional, licensed security camera wiring, smart doorbells, access control systems, and low-voltage electrical solutions in Florida." },
      { property: "og:title", content: "Security Systems & Low-Voltage | R&E Electrical" },
      { property: "og:description", content: "Expert commercial and residential low-voltage cabling solutions." },
    ],
  }),
  component: SecurityPage,
});

function SecurityPage() {
  const serviceList = [
    "IP Security Camera Conduit & Wiring",
    "Access Control Systems (Card Readers/Keypads)",
    "Smart Video Doorbell Installations",
    "Low-Voltage Landscape & Accent Lighting",
    "Structured Ethernet & Network Cabling",
    "Intercom & Commercial Paging Systems",
    "Surround Sound & Home Theater Low-Voltage",
    "Smart Lock Integration & Power Wiring",
  ];

  const faqs = [
    { q: "Do you supply the cameras and locks?", a: "We can both supply enterprise-grade surveillance equipment or professionally wire and install customer-provided smart locks and cameras (like Ring, Nest, or Ubiquiti)." },
    { q: "Why is professional low-voltage wiring better than wireless?", a: "Wireless systems suffer from interference, batteries that require regular recharging, and signal loss through walls. Hardwired systems (using PoE or dedicated power lines) are completely reliable and require almost zero maintenance." },
    { q: "Is low-voltage wiring subject to permitting?", a: "Yes, in many South Florida municipalities, low-voltage installations (especially for commercial properties) require specific permits and inspections to verify proper fire-stopping in walls and ceilings." },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Security & Low Voltage"
        title="Securing Your Property with Reliable Wiring"
        subtitle="Protect your family or assets. We deploy enterprise-grade security cabling, network structures, and access control systems with professional, clean routing."
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  High-Performance Cabling for Security & Networks
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Modern security and home/business automation rely on steady, hardwired connections. 
                  R&E Electrical Contractor Corp's low-voltage technicians run structured cabling (Cat6, PoE, and alarm lines) 
                  that ensures peak performance for your smart cameras, security sensors, network access points, and access panels. 
                  We run cables neatly behind drywall, in attics, or through conduits, and install proper firewall fire-stopping.
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
                  alt="Security cameras and wiring installation"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">R&E Low-Voltage</div>
                  <div className="mt-1 font-display text-xl font-extrabold">Cabling, Security, & Ethernet</div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold text-secondary">Ready to get started?</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Book a security layout review or ethernet cabling diagnostic. We'll map your requirements and quote.
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
