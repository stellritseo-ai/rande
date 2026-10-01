import { Link } from "@tanstack/react-router";
import { CheckCircle2, ShieldCheck, FileUp } from "lucide-react";
import aboutTeamImg from "@/assets/about-team.jpg";
import { Counter } from "./Counter";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

export function About() {
  const { t } = useLanguage();

  const points = [
    t("State Certified Electrical Contractor – License #EC 13008942", "Contratista Eléctrico Certificado Estatal – Licencia #EC 13008942"),
    t("Primary Focus: New construction, hotel remodeling, multifamily, restaurants, schools & clinics", "Enfoque Principal: Nueva construcción, remodelación hotelera, multifamiliares, restaurantes, escuelas y clínicas"),
    t("Secondary Focus: Residential fire alarms, structured low-voltage cabling & service panels", "Enfoque Secundario: Alarmas de incendio residencial, cableado estructurado y paneles"),
    t("Bonded & $2M commercial liability coverage for major developments", "Afianzado y cobertura de responsabilidad de $2M para grandes obras"),
    t("Fast blueprint takeoffs (24–48h) and dedicated commercial project management", "Presupuestos de planos rápidos (24–48h) y gestión de proyectos dedicada"),
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="absolute -top-6 -left-6 h-32 w-32 rounded-3xl bg-primary/15" aria-hidden />
          <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-3xl bg-accent/15" aria-hidden />
          <img
            src={aboutTeamImg}
            alt="R&E Electrical Contractor Corp team"
            className="relative rounded-3xl shadow-[var(--shadow-elegant)] object-cover object-top w-full aspect-[3/2] sm:aspect-[16/9] h-auto"
            loading="lazy"
          />
          <div className="glass-card absolute -bottom-8 left-6 right-6 rounded-2xl p-5 sm:left-10 sm:right-auto sm:w-80">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">{t("State Certified EC 13008942", "Certificación Estatal EC 13008942")}</div>
            <div className="mt-1 font-display text-xl font-extrabold text-secondary">{t("Commercial & Construction", "Comercial y Construcción")}</div>
            <div className="mt-1 text-xs text-muted-foreground">{t("Built on trust, safety, and master craftsmanship since 2009.", "Construido sobre confianza, seguridad y maestría desde 2009.")}</div>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <ShieldCheck className="h-3.5 w-3.5" />
            {t("Florida Commercial & Electrical Construction", "Construcción Eléctrica y Comercial de Florida")}
          </span>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-secondary tracking-tight">
            {t("Turning Blueprints Into ", "Convertimos Planos en ")}
            <span className="text-[#FF6B00]">{t("Successful Projects", "Proyectos Exitosos")}</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t(
              "R&E Electrical Contractor Corp provides General Contractors, developers, and facility managers across Florida with high-caliber commercial electrical execution. We specialize in ground-up new construction, hotel renovations, multifamily residential towers, restaurants, educational facilities, and healthcare clinics, while maintaining our established residential fire alarm and electrical services.",
              "R&E Electrical Contractor Corp ofrece a Contratistas Generales, desarrolladores y administradores de propiedades ejecución eléctrica comercial de primer nivel. Nos especializamos en nuevas construcciones, renovaciones hoteleras, torres residenciales multifamiliares, restaurantes, escuelas y clínicas de salud, manteniendo también servicios residenciales."
            )}
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-secondary text-sm font-semibold">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="bg-[#FF6B00] hover:bg-[#E05E00] text-white font-bold rounded-full px-6 shadow-md">
              <Link to="/submit-plans" className="flex items-center gap-2">
                <FileUp className="h-4 w-4" />
                <span>{t("Submit Plans for Bid", "Presentar Planos")}</span>
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { v: 600, s: "+", l: t("Projects", "Proyectos") },
              { v: 50, s: "+", l: t("Electricians", "Electricistas") },
              { v: 17, s: "+", l: t("Years Exp.", "Años Exp.") },
              { v: 100, s: "%", l: t("Code Pass Rate", "Pase de Código") },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-white p-4 text-center shadow-sm">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-primary">
                  <Counter end={s.v} suffix={s.s} />
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
