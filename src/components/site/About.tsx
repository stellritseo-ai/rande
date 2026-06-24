import { CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-electrician.jpg";
import { Counter } from "./Counter";

const points = [
  "15+ years powering Florida residences and businesses",
  "Master-licensed electricians and NEC-certified team",
  "Strict OSHA and NFPA 70E safety protocols",
  "Transparent fixed-quote pricing — no surprises",
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="absolute -top-6 -left-6 h-32 w-32 rounded-3xl bg-primary/15" aria-hidden />
          <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-3xl bg-accent/15" aria-hidden />
          <img
            src={aboutImg}
            alt="R&E Electrical Contractor Corp master electrician"
            className="relative rounded-3xl shadow-[var(--shadow-elegant)] object-cover"
            width={1200}
            height={1400}
            loading="lazy"
          />
          <div className="glass-card absolute -bottom-8 left-6 right-6 rounded-2xl p-5 sm:left-10 sm:right-auto sm:w-72">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Since 2009</div>
            <div className="mt-1 font-display text-2xl font-extrabold text-secondary">Family-owned & operated</div>
            <div className="mt-1 text-sm text-muted-foreground">Built on trust, safety, and craftsmanship.</div>
          </div>
        </div>

        <div>
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">About R&E Electrical</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-secondary sm:text-5xl">
            Florida's Trusted Electrical Experts
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            From a single panel upgrade to a full commercial build-out, R&E Electrical Contractor Corp delivers
            code-perfect electrical work with a customer-first approach. Our master electricians
            treat every job site like their own home.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-secondary">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { v: 600, s: "+", l: "Projects" },
              { v: 50, s: "+", l: "Experts" },
              { v: 15, s: "+", l: "Years" },
              { v: 100, s: "%", l: "Satisfaction" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-white p-5 text-center shadow-sm">
                <div className="font-display text-3xl font-extrabold text-primary">
                  <Counter end={s.v} suffix={s.s} />
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
