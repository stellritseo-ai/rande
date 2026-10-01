import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { GCBidSection } from "@/components/site/GCBidSection";
import { Toaster } from "@/components/ui/sonner";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Building2, 
  ShieldCheck, 
  Clock, 
  HardHat, 
  Award, 
  CheckCircle2, 
  FileText, 
  Briefcase, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  Layers,
  Hotel,
  Activity,
  Utensils,
  GraduationCap
} from "lucide-react";
import comImg from "@/assets/service-commercial.jpg";

function SubmitPlansPage() {
  const { t } = useLanguage();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://electricalcontractorcorp.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Submit Plans for Bid",
        "item": "https://electricalcontractorcorp.com/submit-plans"
      }
    ]
  };

  const planRoomSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Electrical Estimating & Plan Room",
    "serviceType": "Commercial Electrical Takeoff and Bidding",
    "provider": {
      "@type": "Electrician",
      "name": "R&E Electrical Contractor Corp",
      "telephone": "+17863075933",
      "email": "Williams@electricalcontractorcorp.com",
      "url": "https://electricalcontractorcorp.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "18730 NW 77 TH CT",
        "addressLocality": "Hialeah",
        "addressRegion": "FL",
        "postalCode": "33015",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    },
    "description": "Florida State Certified Electrical Contractor (License #EC 13008942) accepting architectural blueprints and MEP plan sets from General Contractors and Developers for line-item takeoffs."
  };

  const estimatingCapabilities = [
    {
      icon: HardHat,
      title: t("Line-Item Blueprint Takeoffs", "Presupuestos Detallados por Partidas"),
      desc: t(
        "Comprehensive branch wiring, feeders, switchgear, panel schedules, fixture packages, and low-voltage systems broken down with total clarity.",
        "Desglose completo de cableado, alimentadores, tableros de distribución, luminarias y sistemas de bajo voltaje."
      )
    },
    {
      icon: Briefcase,
      title: t("Value Engineering (VE)", "Ingeniería de Valor (VE)"),
      desc: t(
        "We identify material and routing cost efficiencies to keep your project within budget without ever sacrificing NEC compliance or performance.",
        "Identificamos ahorros en materiales y rutas para mantener el presupuesto sin comprometer las normativas NEC."
      ),
    },
    {
      icon: Clock,
      title: t("24–48 Hr Fast Turnaround", "Entrega Rápida en 24–48 Horas"),
      desc: t(
        "Standard commercial plan sets are returned within 24–48 hours, enabling your estimating team to meet tight RFP and tender deadlines.",
        "Los planos comerciales estándar se entregan en 24–48 horas para que su equipo cumpla con plazos de licitación exigentes."
      ),
    },
    {
      icon: ShieldCheck,
      title: t("Fully Bonded & $2M Insured", "Afianzado y Asegurado por $2M"),
      desc: t(
        "State Certified License #EC 13008942, $2,000,000 commercial general liability, auto, and full workers' compensation coverage.",
        "Licencia Estatal #EC 13008942, $2,000,000 en seguro de responsabilidad civil, automóviles y compensación laboral."
      ),
    },
  ];

  const targetSectors = [
    {
      icon: Hotel,
      title: t("New Construction & Hotels", "Construcción Nueva y Hoteles"),
      desc: t("Ground-up developments, resort remodels, guest room rough-ins, ballroom lighting, and emergency generator interlocks.", "Desarrollos desde cero, remodelaciones de resorts, habitaciones y generadores.")
    },
    {
      icon: Layers,
      title: t("Multifamily Residential", "Residencial Multifamiliar"),
      desc: t("Apartment communities, condo towers, multi-meter centers, EV charging stations, and life-safety egress power.", "Edificios de apartamentos, condominios, centros de medición múltiple y carga de vehículos eléctricos.")
    },
    {
      icon: Utensils,
      title: t("Restaurants & Dining", "Restaurantes y Locales"),
      desc: t("Commercial kitchen power, walk-in coolers, Ansul hood fire interlocks, and custom front-of-house architectural illumination.", "Cocinas comerciales, cuartos fríos, interbloqueo de campanas Ansul e iluminación de salón.")
    },
    {
      icon: GraduationCap,
      title: t("Schools & Campus Facilities", "Escuelas y Campus Educativos"),
      desc: t("Classrooms, computer IT laboratories, occupancy sensor controls, and campus emergency lighting systems.", "Aulas, laboratorios informáticos, sensores de ocupación y sistemas de emergencia.")
    },
    {
      icon: Activity,
      title: t("Dental & Medical Clinics", "Clínicas Dentales y Médicas"),
      desc: t("NFPA 99 healthcare compliant electrical, isolated ground lines, imaging rooms, and clinical equipment power.", "Normativa de salud NFPA 99, tierras aisladas, salas de rayos X y equipos clínicos.")
    },
    {
      icon: Building2,
      title: t("Commercial & Industrial", "Comercial e Industrial"),
      desc: t("Office build-outs, retail shopping centers, 3-phase switchgear, warehouse lighting, and heavy machine power hookups.", "Oficinas, centros comerciales, tableros trifásicos e instalaciones industriales.")
    },
  ];

  const estimatingFaqs = [
    {
      q: t("What plan file formats do you accept for estimating?", "¿Qué formatos de archivo aceptan para estimar?"),
      a: t("We accept standard PDF blueprint sets (architectural, electrical, mechanical, and fixture schedules), CAD/DWG drawings, and ZIP archives. You can also share direct links to cloud plan rooms including Procore, Dropbox, Google Drive, Box, and BuildingConnected.", "Aceptamos planos en PDF (arquitectónicos, eléctricos, mecánicos y de iluminación), archivos CAD/DWG y carpetas ZIP. También puede compartir enlaces a Procore, Dropbox, Google Drive y BuildingConnected.")
    },
    {
      q: t("How fast can R&E return an electrical line-item bid?", "¿Con qué rapidez puede entregar R&E una cotización detallada?"),
      a: t("For standard commercial tenant improvements and remodel plans under 20,000 sq ft, our typical turnaround is 24 to 48 hours. For large ground-up developments, hotels, or multifamily complexes, we assign a dedicated estimator and provide milestone updates.", "Para remodelaciones comerciales estándar de menos de 20,000 pies cuadrados, entregamos en 24 a 48 horas. Para grandes desarrollos o complejos hoteleros, asignamos un estimador dedicado.")
    },
    {
      q: t("Are you licensed and qualified to pull commercial electrical permits across Florida?", "¿Tienen licencia para tramitar permisos comerciales en toda Florida?"),
      a: t("Yes. We hold State Certified Electrical Contractor License #EC 13008942, authorizing us to pull permits, submit engineering load calculations, and pass inspections in every county and municipality across Florida.", "Sí. Poseemos la Licencia de Contratista Eléctrico Certificado del Estado #EC 13008942, autorizándonos a tramitar permisos e inspecciones en cada condado y municipio de Florida.")
    },
    {
      q: t("Can you provide on-site pre-bid walkthroughs for renovation and retrofit projects?", "¿Realizan visitas técnicas previas a la oferta para proyectos de renovación?"),
      a: t("Yes. If your project involves an existing hotel, restaurant, clinic, or office space, our lead estimator can attend mandatory pre-bid job site walkthroughs throughout Miami-Dade, Broward, Palm Beach, and across Florida.", "Sí. Si su proyecto involucra un hotel, restaurante o clínica existente, nuestro estimador principal puede asistir a recorridos técnicos en obra en todo el estado de Florida.")
    },
    {
      q: t("Do you coordinate primary utility service connections with Florida Power & Light (FPL)?", "¿Coordinan conexiones de servicios públicos primarios con Florida Power & Light (FPL)?"),
      a: t("Yes. We interface directly with FPL and local utilities for transformer pad sizing, vault submittals, single-line reviews, CT metering cabinets, and final energization scheduling.", "Sí. Nos coordinamos directamente con FPL para dimensionar transformadores, bóvedas, gabinetes de medición CT y energización final.")
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": estimatingFaqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(planRoomSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page Header */}
      <PageHeader
        variant="light"
        eyebrow={t("General Contractors & Developers Plan Room", "Recepción de Planos para Contratistas y Desarrolladores")}
        title={t("Submit Plans for Bid", "Presentar Planos para Licitación")}
        subtitle={t("State Certified Electrical Contractor – EC 13008942. Comprehensive line-item takeoffs, value engineering, and competitive commercial bids returned within 24–48 hours across Florida.", "Contratista Eléctrico Certificado Estatal – EC 13008942. Presupuestos detallados, ingeniería de valor y ofertas competitivas en 24–48 horas en toda Florida.")}
      />

      {/* Trust & Estimating Standards Bar - Light Mode */}
      <section className="bg-white text-slate-900 py-12 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {estimatingCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="flex items-start gap-4 rounded-2xl bg-slate-50/80 border border-slate-200/90 p-5 text-left shadow-xs hover:border-[#FF6B00]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B00] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-[#0F172A] leading-tight">{cap.title}</h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-medium">{cap.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dedicated Form & Plan Submission Hub */}
      <GCBidSection />

      {/* Target Sectors Grid */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#FF6B00]">
              {t("Commercial Project Sectors", "Sectores de Proyectos Comerciales")}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] mt-2 tracking-tight">
              {t("Projects We Estimate & Execute Statewide", "Proyectos que Estimamos y Ejecutamos en Toda Florida")}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
              {t("Our commercial estimating team specializes in high-complexity blueprints across all major Florida construction sectors.", "Nuestro equipo se especializa en planos de alta complejidad en todos los sectores principales de Florida.")}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {targetSectors.map((sector, idx) => {
              const Icon = sector.icon;
              return (
                <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition text-left flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[#FF6B00] flex items-center justify-center mb-4 shadow-xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#0F172A]">{sector.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">{sector.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-[#FF6B00]">
                    <span>{t("Blueprints Accepted", "Aceptamos Planos")}</span>
                    <ChevronRight className="h-3 w-3" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Estimating Department Direct Contacts - Light Mode */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-amber-50/50 to-orange-50 text-slate-900 p-8 sm:p-12 shadow-sm border border-orange-200/90 flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-black uppercase tracking-widest text-[#E05E00]">
                {t("Commercial Estimating Hotline", "Línea Directa de Estimación Comercial")}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                {t("Need an Immediate Takeoff or Have an Urgent Tender Deadline?", "¿Necesita una Estimación Inmediata o Tiene una Licitación Urgente?")}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {t("Speak directly with our senior commercial estimator to discuss timeline constraints, single-line diagrams, or scheduled site walkthroughs.", "Hable directamente con nuestro estimador comercial principal para coordinar cronogramas o recorridos en obra.")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <a
                href="tel:+17863075933"
                className="inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#E05E00] text-white text-sm font-black uppercase tracking-wider py-4 px-6 rounded-full shadow-md transition hover:scale-105 active:scale-95"
              >
                <Phone className="h-4 w-4" /> (786) 307-5933
              </a>
              <a
                href="mailto:Williams@electricalcontractorcorp.com"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 hover:border-[#FF6B00] text-sm font-bold py-4 px-6 rounded-full transition shadow-xs"
              >
                <Mail className="h-4 w-4 text-[#FF6B00]" /> Email Plans Direct
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Estimating FAQs */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-primary">
              {t("Estimator FAQ", "Preguntas Frecuentes de Estimación")}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-2">
              {t("Questions About Bidding & Plan Submission", "Preguntas sobre Licitaciones y Envíos de Planos")}
            </h2>
          </div>

          <div className="space-y-4">
            {estimatingFaqs.map((faq, idx) => (
              <details key={idx} className="group border border-slate-200 rounded-2xl bg-white p-5 [&_summary::-webkit-details-marker]:hidden text-left shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-display text-base font-bold text-[#0F172A]">
                  {faq.q}
                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-open:rotate-90 text-[#FF6B00]" />
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 font-medium">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Toaster />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/submit-plans")({
  head: () => ({
    meta: [
      { title: "Submit Plans for Bid | Commercial Electrical Estimating | EC 13008942" },
      { name: "description", content: "General Contractors & Developers: Submit architectural electrical plans for 24-48h line-item takeoffs. State Certified Electrical Contractor EC 13008942. Call (786) 307-5933." },
      { name: "keywords", content: "submit plans for bid electrical, commercial electrical bid Florida, electrical blueprint takeoff, general contractor electrical sub Florida, hotel electrical bid, multifamily electrical contractor, EC 13008942" },
      { property: "og:title", content: "Submit Plans for Bid | Commercial Electrical Estimating | EC 13008942" },
      { property: "og:description", content: "Submit PDF plans for commercial electrical takeoffs. New construction, hotels, multifamily, restaurants, schools, and clinics across Florida." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://electricalcontractorcorp.com/submit-plans" },
      { property: "og:image", content: "https://electricalcontractorcorp.com/assets/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://electricalcontractorcorp.com/submit-plans" }
    ],
  }),
  component: SubmitPlansPage,
});
