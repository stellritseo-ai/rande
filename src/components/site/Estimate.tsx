import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

export function Estimate() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks! We'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">Free Estimate</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-secondary sm:text-5xl">
            Get a free, no-pressure quote.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us about your project and we'll get back within 24 hours with a transparent quote.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-white p-8 shadow-[var(--shadow-card)]">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" id="name"><Input id="name" required placeholder="Jane Smith" /></Field>
              <Field label="Phone" id="phone"><Input id="phone" type="tel" required placeholder="(786) 307-5933" /></Field>
              <div className="sm:col-span-2">
                <Field label="Email" id="email"><Input id="email" type="email" required placeholder="jane@example.com" /></Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Service Type" id="service">
                  <Select>
                    <SelectTrigger id="service" className="h-11"><SelectValue placeholder="Select a service" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Electrical</SelectItem>
                      <SelectItem value="commercial">Commercial Electrical</SelectItem>
                      <SelectItem value="industrial">Industrial Electrical</SelectItem>
                      <SelectItem value="panel">Panel Upgrade</SelectItem>
                      <SelectItem value="ev">EV Charger</SelectItem>
                      <SelectItem value="generator">Generator</SelectItem>
                      <SelectItem value="emergency">Emergency Service</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Message" id="msg">
                  <Textarea id="msg" rows={5} placeholder="Tell us about your project..." />
                </Field>
              </div>
            </div>
            <Button type="submit" variant="hero" size="xl" disabled={submitting} className="mt-6 w-full">
              {submitting ? "Sending..." : <>Get My Free Estimate <Send className="h-4 w-4" /></>}
            </Button>
          </form>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
              <iframe
                title="R&E Electrical Contractor Corp Location"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-80.330%2C25.862%2C-80.318%2C25.872&layer=mapnik&marker=25.8677%2C-80.3243"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={Phone} title="Call Us" lines={["(786) 307-5933", "24/7 Emergency"]} />
              <InfoCard icon={Mail} title="Email" lines={["Williams@electricalcontractorcorp.com"]} />
              <InfoCard icon={MapPin} title="Office" lines={["18730 NW 77 TH CT", "Hialeah, FL 33015"]} />
              <InfoCard icon={Clock} title="Hours" lines={["Mon–Sat: 7am–7pm", "Sun: Emergency only"]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <Label htmlFor={id} className="text-xs font-bold uppercase tracking-wider text-secondary">{label}</Label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: React.ElementType; title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="mt-3 font-display text-base font-extrabold text-secondary">{title}</h4>
      {lines.map((l) => (
        <p key={l} className="text-sm text-muted-foreground">{l}</p>
      ))}
    </div>
  );
}
