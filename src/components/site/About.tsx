import { CheckCircle2 } from "lucide-react";
import aboutTeamImg from "@/assets/about-team.jpg";
import { Counter } from "./Counter";
import { useLanguage } from "@/hooks/useLanguage";

export function About() {
  const { t } = useLanguage();

  const points = [
    t("17+ years powering Florida residences and businesses", "Más de 17 años alimentando residencias y empresas de Florida"),
    t("Master-licensed electricians and NEC-certified team", "Electricistas con licencia de maestro y equipo certificado por la NEC"),
    t("Strict OSHA and NFPA 70E safety protocols", "Protocolos estrictos de seguridad de OSHA y NFPA 70E"),
    t("Transparent fixed-quote pricing — no surprises", "Precios de cotización fijos y transparentes — sin sorpresas"),
  ];

  return (
    <section id="about" className="section-padding">
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
          <div className="glass-card absolute -bottom-8 left-6 right-6 rounded-2xl p-5 sm:left-10 sm:right-auto sm:w-72">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">{t("Since 2009", "Desde 2009")}</div>
            <div className="mt-1 font-display text-2xl font-extrabold text-secondary">{t("Family-owned & operated", "Propiedad y operación familiar")}</div>
            <div className="mt-1 text-sm text-muted-foreground">{t("Built on trust, safety, and craftsmanship.", "Construido sobre la confianza, la seguridad y la artesanía.")}</div>
          </div>
        </div>

        <div>
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">{t("About R&E Electrical", "Acerca de R&E Electrical")}</span>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-secondary whitespace-nowrap tracking-tight">
            {t("Florida's Trusted Electrical Experts", "Expertos Eléctricos de Confianza de Florida")}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            {t("From a single panel upgrade to a full commercial build-out, R&E Electrical Contractor Corp delivers code-perfect electrical work with a customer-first approach. Our master electricians treat every job site like their own home.", "Desde una simple actualización de panel hasta una instalación comercial completa, R&E Electrical Contractor Corp ofrece un trabajo eléctrico que cumple perfectamente con los códigos y con un enfoque centrado en el cliente. Nuestros maestros electricistas tratan cada lugar de trabajo como si fuera su propio hogar.")}
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
              { v: 600, s: "+", l: t("Projects", "Proyectos") },
              { v: 50, s: "+", l: t("Experts", "Expertos") },
              { v: 15, s: "+", l: t("Years", "Años") },
              { v: 100, s: "%", l: t("Satisfaction", "Satisfacción") },
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
