import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-secondary text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary">
                <Zap className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-2xl font-extrabold">Voltline</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Licensed, insured, and trusted electrical contractors powering homes and
              businesses across South Florida with safety-first craftsmanship.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Services" links={["Residential", "Commercial", "Industrial", "EV Chargers", "Generators", "Panel Upgrades"]} />
          <FooterCol title="Service Areas" links={["Miami", "Coral Gables", "Brickell", "Doral", "Aventura", "Fort Lauderdale"]} />

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary" /> (305) 555-1234</li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-primary" /> hello@voltline.com</li>
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> 1450 Brickell Ave<br/>Miami, FL 33131</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Voltline Electrical Contractors. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">License #EC13009876</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">{title}</h4>
      <ul className="mt-5 space-y-2.5 text-sm text-white/70">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="transition hover:text-primary">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
