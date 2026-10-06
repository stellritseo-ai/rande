import { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck, FileCheck, MapPin, Zap } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "@tanstack/react-router";

export function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: t(
        "What does a commercial electrical contractor do in Florida?",
        "¿Qué hace un contratista eléctrico comercial en Florida?"
      ),
      a: t(
        "A commercial electrical contractor designs, installs, upgrades, and maintains complex electrical power systems for business facilities, commercial construction, and multifamily developments. At R&E Electrical Contractor Corp (EC 13008942), our commercial scope includes 3-phase power distribution, switchboards, transformers, new construction rough-ins, hotel remodels, restaurant power, medical clinic systems (NFPA 99), fire alarm integration, EV charging infrastructure, and municipal code compliance.",
        "Un contratista eléctrico comercial diseña, instala, moderniza y mantiene sistemas de energía para instalaciones comerciales, proyectos de construcción y desarrollos multifamiliares. En R&E Electrical Contractor Corp (EC 13008942), nuestro alcance comercial abarca distribución trifásica, tableros principales, transformadores, construcción nueva, remodelación hotelera, sistemas clínicos (NFPA 99), alarmas contra incendios e infraestructura de carga de EV."
      ),
    },
    {
      q: t(
        "Do you provide electrical plan takeoffs and bid preparation for General Contractors?",
        "¿Proporcionan desgloses de planos eléctricos y preparación de ofertas para Contratistas Generales?"
      ),
      a: t(
        "Yes. We specialize in working directly with General Contractors, commercial developers, and project estimators. You can upload architectural and MEP blueprints through our Plan Room (/submit-plans). Our estimators provide comprehensive line-item takeoffs, branch circuit breakdowns, switchgear specifications, and value engineering (VE) recommendations with turnaround within 24 to 48 hours for standard projects.",
        "Sí. Nos especializamos en trabajar directamente con Contratistas Generales, desarrolladores y estimadores. Puede subir planos arquitectónicos y MEP a través de nuestra sala de planos (/submit-plans). Entregamos presupuestos detallados por partidas, desgloses de circuitos y recomendaciones de ingeniería de valor con entrega en 24 a 48 horas para proyectos estándar."
      ),
    },
    {
      q: t(
        "What licenses, bonding, and insurance does R&E Electrical Contractor Corp maintain?",
        "¿Qué licencias, fianzas y seguros mantiene R&E Electrical Contractor Corp?"
      ),
      a: t(
        "R&E Electrical Contractor Corp holds Florida State Certified Electrical Contractor License #EC 13008942, authorizing us to pull permits and perform electrical construction across every county and municipality statewide. We carry $2,000,000 in commercial general liability insurance, comprehensive workers' compensation, and full commercial automotive coverage, satisfying corporate GC and institutional requirements.",
        "R&E Electrical Contractor Corp cuenta con la Licencia de Contratista Eléctrico Certificado del Estado de Florida #EC 13008942, autorizándonos a tramitar permisos en todos los condados del estado. Mantenemos $2,000,000 en seguro de responsabilidad civil general, compensación laboral y cobertura vehicular comercial completa."
      ),
    },
    {
      q: t(
        "Which commercial industries and building types do you service in Florida?",
        "¿A qué sectores comerciales y tipos de edificios prestan servicio en Florida?"
      ),
      a: t(
        "We serve hotels & hospitality resorts, multifamily apartment communities & condominiums, commercial dining & restaurants, retail centers & shopping plazas, dental & medical clinics, corporate office build-outs, warehouses & industrial logistics facilities, and educational institutions across South Florida and statewide.",
        "Atendemos hoteles y complejos turísticos, edificios multifamiliares y condominios, restaurantes y cocinas comerciales, centros comerciales, clínicas dentales y médicas, oficinas corporativas, almacenes e instalaciones logísticas e instituciones educativas en toda Florida."
      ),
    },
    {
      q: t(
        "How do you coordinate with Florida Power & Light (FPL) and municipal building departments?",
        "¿Cómo coordinan con Florida Power & Light (FPL) y los departamentos municipales de construcción?"
      ),
      a: t(
        "We coordinate all electrical utility interfaces directly with FPL and local municipal building departments. Our team prepares load calculation sheets, coordinates pad-mounted transformer specifications and CT metering cabinets, submits electrical permit packages, and schedules rough-in, slab pre-pour, and final inspections for swift re-energization and Certificates of Occupancy.",
        "Coordinamos todas las interfaces con FPL y los departamentos municipales de construcción. Nuestro equipo prepara hojas de cálculo de carga, coordina transformadores, gabinetes de medición CT, tramita paquetes de permisos y programa inspecciones para una energización rápida y Certificados de Ocupación."
      ),
    },
    {
      q: t(
        "Do you handle emergency commercial power outages and electrical hazards?",
        "¿Manejan cortes de energía comercial de emergencia y riesgos eléctricos?"
      ),
      a: t(
        "Yes. We maintain a 24/7 rapid response dispatch team for urgent commercial outages, transformer failures, damaged switchgear, and safety hazards. Emergency crews are equipped with thermal imaging cameras and replacement hardware to diagnose and restore power promptly.",
        "Sí. Mantenemos un equipo de despacho de respuesta rápida 24/7 para apagones comerciales urgentes, fallas de transformadores, tableros dañados y riesgos de seguridad con camiones equipados."
      ),
    },
  ];

  return (
    <section id="faq" className="py-[60px] bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/25 bg-[#FF6B00]/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FF6B00] mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>{t("Commercial Electrical Knowledge", "Conocimiento Eléctrico Comercial")}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            {t("Frequently Asked ", "Preguntas ")}
            <span className="text-[#FF6B00]">{t("Questions", "Frecuentes")}</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            {t(
              "Answers to common questions from General Contractors, commercial developers, and property owners considering R&E Electrical Contractor Corp.",
              "Respuestas a preguntas habituales de Contratistas Generales, desarrolladores y propietarios que eligen a R&E Electrical Contractor Corp."
            )}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors hover:bg-slate-50/70"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-[#0F172A] leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-[#FF6B00] text-white border-[#FF6B00]"
                        : "bg-slate-100 text-slate-500 border-slate-200"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 font-medium">
                    <p className="mt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* GEO / AEO Entity Answer Block */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF6B00]/10 text-[#FF6B00]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#0F172A]">
                  {t("Florida License & Credentials", "Licencia y Credenciales")}
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  State Certified Electrical Contractor <strong>EC 13008942</strong>. Bonded & $2M insured for commercial, hospitality, and industrial construction.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF6B00]/10 text-[#FF6B00]">
                <FileCheck className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#0F172A]">
                  {t("Plan Takeoffs & Estimating", "Presupuestos y Planos")}
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Fast 24–48 hour turnaround on architectural and MEP blueprint takeoffs via our dedicated{" "}
                  <Link to="/submit-plans" className="font-bold text-[#FF6B00] hover:underline">
                    Plan Room
                  </Link>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF6B00]/10 text-[#FF6B00]">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#0F172A]">
                  {t("Statewide Florida Reach", "Cobertura en Florida")}
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Headquartered in Hialeah (Miami-Dade) with active commercial job sites across Broward, Palm Beach, and statewide Florida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
