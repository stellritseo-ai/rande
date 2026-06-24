import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-panel.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/panel-upgrades")({
  head: () => ({
    meta: [
      { title: "Electrical Panel Upgrades | R&E Electrical Contractor Corp" },
      { name: "description", content: "Professional, licensed panel upgrades and replacement services. Increase electrical capacity to 200A or 400A safely in Florida." },
      { property: "og:title", content: "Electrical Panel Upgrades | R&E Electrical" },
      { property: "og:description", content: "Upgrade to a safe, modern electrical panel with R&E Electrical Contractor Corp." },
    ],
  }),
  component: PanelUpgradesPage,
});

function PanelUpgradesPage() {
  const serviceList = [
    "Outdated Fuse Box Replacement",
    "100A to 200A Service Upgrades",
    "400A Smart Panel Installations",
    "Federal Pacific & Zinsco Removals",
    "Sub-Panel Installations (Garage/Workshop)",
    "Whole-House Surge Protection Installs",
    "Arc Fault & Ground Fault (AFCI/GFCI) Breakers",
    "Labeling & Circuit Mapping Services",
  ];

  const faqs = [
    { q: "How much does a panel upgrade cost?", a: "Costs typically range depending on the home layout, current service lines, and if utility lines need to be moved. R&E Electrical Contractor Corp provides exact, flat-rate quotes on-site so there are never any surprises." },
    { q: "Why are Federal Pacific and Zinsco panels dangerous?", a: "These legacy panels have documented design flaws where breakers fail to trip during overload conditions. This creates extreme heat and is a major source of electrical fires." },
    { q: "How long does the installation take?", a: "Most panel upgrades are completed in a single day. We coordinate closely with FPL (Florida Power & Light) and the city inspectors to restore power as quickly as possible, usually within 4-6 hours." },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Panel Upgrades"
        title="Modern Electrical Panels for Safety & Power"
        subtitle="Upgrade your panel to support modern appliances, EV chargers, and smart devices. Safe, fast, and fully permitted installations."
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  Future-Proof Your Home's Electrical Capacity
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Older houses typically operate on 60-amp or 100-amp electrical services, which fail to meet the demands 
                  of modern central AC systems, electric dryers, and EV chargers. Upgrading to a 200-amp or 400-amp service 
                  provides the capacity and safety you need. At R&E Electrical Contractor Corp, we manage the entire process, including utility coordination, 
                  municipal permitting, and premium safety grounding.
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
                  alt="Upgraded electrical panel installation"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">R&E Electrical Power</div>
                  <div className="mt-1 font-display text-xl font-extrabold">200A / 400A Breaker Box Upgrades</div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold text-secondary">Ready to get started?</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Book a free, transparent on-site panel evaluation. We'll check your current load capacity and quote options.
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
