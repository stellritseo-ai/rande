import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-industrial.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services/industrial")({
  head: () => ({
    meta: [
      { title: "Industrial Electrical Services | R&E Electrical Contractor Corp" },
      { name: "description", content: "Professional, licensed industrial electrical installations, 3-phase power distribution, motor controls, and heavy machinery hookups across South Florida." },
      { property: "og:title", content: "Industrial Electrical Services | R&E Electrical" },
      { property: "og:description", content: "Licensed industrial electrical solutions for South Florida." },
    ],
  }),
  component: IndustrialPage,
});

function IndustrialPage() {
  const serviceList = [
    "3-Phase Power Distribution Systems",
    "Motor Control Centers & VFD Install",
    "Heavy Machinery & Equipment Hookups",
    "PLC Cabinet Wiring & Program Integration",
    "Industrial Facility Power Audits",
    "Hazardous Location (Classified) Wiring",
    "Busway & Cable Tray System Installs",
    "High-Voltage Transformer Upgrades",
  ];

  const faqs = [
    { q: "Do your technicians follow OSHA and NFPA standards?", a: "Yes. Safety is our absolute priority. Our industrial team wears complete PPE and strictly adheres to OSHA, NEC, and NFPA 70E (Electrical Safety in the Workplace) safety standards." },
    { q: "What industrial industries do you service?", a: "R&E Electrical Contractor Corp works with warehouses, manufacturing lines, recycling facilities, packaging plants, food & beverage facilities, and distribution centers across South Florida." },
    { q: "Do you offer industrial backup generator integration?", a: "Yes. We install high-capacity backup generator systems and automatic transfer switches to ensure continuous facility operations during utility failure." },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Industrial Services"
        title="Heavy-Duty Power for Industrial Facilities"
        subtitle="Keep your production lines running. Our expert industrial electricians deploy high-voltage systems, machinery hookups, and controls safely."
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  Specialized Industrial Electrical Engineering
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Industrial environments demand heavy-duty, highly resilient electrical systems. 
                  R&E Electrical Contractor Corp's industrial electricians possess specialized training in 3-phase power, 
                  motor controls, PLC cabinets, and classified wiring for dust/vapor environments. 
                  We minimize downtime by planning installations with surgical precision and conducting detailed diagnostic testing.
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
                  alt="Industrial machinery electrical systems"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">R&E Electrical Industrial</div>
                  <div className="mt-1 font-display text-xl font-extrabold">3-Phase & High-Voltage Systems</div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold text-secondary">Ready to get started?</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Book an industrial electrical system assessment. We will review your layouts or single-line drawings.
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
