import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-commercial.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Electrical Services | R&E Electrical Contractor Corp" },
      { name: "description", content: "Professional, licensed commercial electrical installations, office build-outs, tenant improvements, and retail lighting across South Florida." },
      { property: "og:title", content: "Commercial Electrical Services | R&E Electrical" },
      { property: "og:description", content: "Licensed commercial electrical solutions for South Florida businesses." },
    ],
  }),
  component: CommercialPage,
});

function CommercialPage() {
  const serviceList = [
    "Office Build-Outs & Tenant Improvements",
    "Retail Store LED Display & Accent Lighting",
    "Commercial Panel Board Upgrades & Installations",
    "Emergency Exit Lighting & Sign Systems",
    "Data & Low-Voltage Structured Cabling",
    "Preventative Maintenance & Safety Audits",
    "Dedicated Circuits for High-Draw Equipment",
    "Commercial Surge Protection Solutions",
  ];

  const faqs = [
    { q: "Do you offer services after business hours?", a: "Yes. We understand that daytime disruptions cost money. We regularly schedule commercial work during off-hours, nights, and weekends to keep your business operating smoothly." },
    { q: "Are you fully insured for large commercial properties?", a: "Yes. R&E Electrical Contractor Corp maintains $2M in general liability coverage, commercial auto insurance, and worker's compensation, satisfying the requirements of major landlords and corporate guidelines." },
    { q: "Can you help bring our building up to NEC code compliance?", a: "Absolutely. We conduct detailed audits and carry out all required remediations, from emergency egress lighting code issues to panel corrections, to keep you compliant with local fire marshal standards." },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Commercial Services"
        title="Powering Your Business Operations"
        subtitle="Minimize downtime with our highly reliable, licensed commercial electricians. From office wiring to advanced building automations, we handle it all."
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  Robust Electrical Solutions for Businesses
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  R&E Electrical Contractor Corp works with property managers, general contractors, developers, and small business owners 
                  across South Florida to deliver safe, scalable, and code-compliant commercial solutions. 
                  Whether you are planning a modern open-office layout, retrofitting a retail store with energy-efficient LED, 
                  or installing redundant power solutions, our commercial crew is ready to execute.
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
                  alt="Commercial electrical installation"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">R&E Electrical Commercial</div>
                  <div className="mt-1 font-display text-xl font-extrabold">Office, Retail, & Building Services</div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold text-secondary">Ready to get started?</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Book a commercial electrical site audit. We will review your plans or systems and issue a transparent quote.
                </p>

                <div className="mt-6 space-y-3.5">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">Request Proposal</Link>
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
