import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { 
  Building2, 
  Hotel, 
  Utensils, 
  GraduationCap, 
  Activity, 
  Layers, 
  ArrowRight, 
  ShieldAlert, 
  Zap, 
  CheckCircle2, 
  FileUp,
  FileCheck
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import comImg from "@/assets/service-commercial.jpg";
import indImg from "@/assets/service-industrial.jpg";
import panImg from "@/assets/service-panel.jpg";
import resImg from "@/assets/service-residential.jpg";

export function TargetMarkets() {
  const { t } = useLanguage();

  const primaryMarkets = [
    {
      id: "hotels-new-construction",
      icon: Hotel,
      badge: t("Primary Focus", "Enfoque Principal"),
      title: t("New Construction & Hotel Remodeling", "Construcción Nueva y Remodelación Hotelera"),
      description: t(
        "Ground-up hospitality construction, resort power distribution, ballroom & guest room lighting modernization, and emergency generator interlocks.",
        "Construcción hotelera desde cero, distribución de energía para complejos turísticos, modernización de iluminación y generadores de emergencia."
      ),
      bullets: [
        t("Guestroom electrical rough-ins & architectural lighting", "Cableado en habitaciones e iluminación arquitectónica"),
        t("Switchboard distribution & 480V/277V step-down transformers", "Tableros de distribución y transformadores de 480V/277V"),
        t("Phased hotel renovations without guest disruption", "Remodelaciones por fases sin interrumpir huéspedes"),
      ],
      image: comImg,
    },
    {
      id: "multifamily",
      icon: Layers,
      badge: t("High Demand", "Alta Demanda"),
      title: t("Multifamily Residential Buildings", "Edificios Residenciales Multifamiliares"),
      description: t(
        "Complete electrical infrastructure for apartment communities, condominium towers, student housing, and mixed-use developments across Florida.",
        "Infraestructura eléctrica completa para condominios, torres de apartamentos, residencias estudiantiles y desarrollos de uso mixto."
      ),
      bullets: [
        t("Multi-meter centers & sub-metering systems", "Bancos de medidores múltiples y sistemas de sub-medición"),
        t("Common area lighting, clubhouse & EV charging stations", "Iluminación de áreas comunes y estaciones de carga EV"),
        t("Life safety egress, fire alarms & central emergency power", "Sistemas contra incendios y energía de emergencia central"),
      ],
      image: resImg,
    },
    {
      id: "restaurants",
      icon: Utensils,
      badge: t("Specialized Fit-Outs", "Especializado"),
      title: t("Restaurants & Commercial Dining", "Restaurantes y Locales Gastronómicos"),
      description: t(
        "Heavy electrical requirements for commercial kitchens, dedicated walk-in cooler circuits, hood suppression interlocks, and ambient customer lighting.",
        "Requisitos de alta potencia para cocinas comerciales, cuartos fríos, enclavamientos de campanas de extracción e iluminación ambiental."
      ),
      bullets: [
        t("Commercial kitchen equipment & refrigeration hookups", "Conexión de equipos de cocina y refrigeración industrial"),
        t("Make-up air, exhaust hood & Ansul system interlocks", "Enclavamiento de extracción de aire y sistemas Ansul"),
        t("Architectural dining room dimming & bar electrical", "Iluminación regulable arquitectónica y tomas de barra"),
      ],
      image: indImg,
    },
    {
      id: "schools",
      icon: GraduationCap,
      badge: t("Institutional & Public", "Institucional y Público"),
      title: t("Schools & Educational Facilities", "Escuelas e Instalaciones Educativas"),
      description: t(
        "Safe, high-efficiency electrical installations for K-12 schools, charter academies, vocational centers, and higher education campus buildings.",
        "Instalaciones eléctricas seguras y eficientes para escuelas primarias y secundarias, academias y campus universitarios."
      ),
      bullets: [
        t("Classroom smart lighting controls & occupancy sensors", "Controles inteligentes de iluminación y sensores"),
        t("IT computer labs, data drops & surge suppression panels", "Laboratorios de computación y paneles de supresión"),
        t("Campus emergency lighting, intercom & egress compliance", "Iluminación de emergencia en campus y cumplimiento de normas"),
      ],
      image: panImg,
    },
    {
      id: "dental-medical",
      icon: Activity,
      badge: t("Healthcare Certified", "Certificado Médico"),
      title: t("Dental & Medical Clinics", "Clínicas Dentales y Médicas"),
      description: t(
        "Precision healthcare-grade electrical systems adhering strictly to NFPA 99 standards, including isolated grounds, imaging power, and exam room lighting.",
        "Sistemas eléctricos de grado médico bajo estándares NFPA 99, tierras aisladas, equipos de rayos X e iluminación de quirófanos."
      ),
      bullets: [
        t("Isolated ground circuits for medical & dental equipment", "Circuitos de tierra aislada para equipos médicos y dentales"),
        t("X-ray, CT scanner, & autoclave dedicated high-power lines", "Líneas dedicadas para rayos X, escáneres y autoclaves"),
        t("Emergency backup power for critical clinical preservation", "Respaldo eléctrico de emergencia para equipos críticos"),
      ],
      image: comImg,
    },
  ];

  return (
    <section id="target-markets" className="py-[60px] bg-white border-b border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/20 bg-[#FF6B00]/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FF6B00] mb-4">
            <Building2 className="h-3.5 w-3.5" />
            {t("Primary Commercial Target Markets", "Mercados Comerciales Principales")}
          </div>

          <h2
            className="font-display font-extrabold text-[#0F172A] tracking-tight leading-tight sm:whitespace-nowrap"
            style={{ fontSize: "42px", marginTop: "-6px", marginBottom: "-15px" }}
          >
            {t("Built for Florida's ", "Diseñado para los Proyectos ")}
            <span className="text-[#FF6B00]">{t("Most Demanding Sectors", "Más Exigentes de Florida")}</span>
          </h2>

          <p
            className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed"
            style={{ marginBottom: "-35px" }}
          >
            {t(
              "R&E Electrical Contractor Corp focuses on significant commercial construction, hospitality, and institutional projects with the master-level engineering and bonding capacity that developers trust.",
              "R&E Electrical Contractor Corp se enfoca en proyectos de construcción comercial, hotelería e institucionales con la ingeniería y capacidad de fianza que los desarrolladores exigen."
            )}
          </p>
        </div>

        {/* 5 Primary Markets Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {primaryMarkets.map((market, idx) => {
            const Icon = market.icon;
            const isFeatured = idx === 0;

            return (
              <motion.div
                key={market.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isFeatured ? "sm:col-span-2 lg:col-span-1 border-[#FF6B00]/30 ring-1 ring-[#FF6B00]/20" : ""
                }`}
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-slate-100 rounded-full px-3 py-1">
                      {market.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-extrabold text-[#0F172A] group-hover:text-[#FF6B00] transition-colors leading-tight">
                    {market.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {market.description}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    {market.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 font-semibold">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#FF6B00] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to="/submit-plans"
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#FF6B00] hover:text-[#E05E00] transition group-hover:translate-x-1"
                  >
                    <span>{t("Submit Plans for This Sector", "Enviar Planos para Este Sector")}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}

          {/* 6th Card: Callout for General Contractors / Developers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-6 sm:p-7 text-white shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FF6B00] text-white flex items-center justify-center shadow-lg mb-5">
                <FileCheck className="h-6 w-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#FF8533] bg-white/10 rounded-full px-3 py-1">
                {t("Statewide Contracting", "Contratación Estatal")}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white mt-4 leading-tight">
                {t("Have Plans Ready for Bid?", "¿Tiene Planos Listos para Licitación?")}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                {t(
                  "We provide rapid, highly competitive line-item bids directly to General Contractors and Developers for ground-up commercial and major renovations across Florida.",
                  "Ofrecemos ofertas detalladas y competitivas directamente a Contratistas Generales y Desarrolladores en toda Florida."
                )}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <Link
                to="/submit-plans"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs font-black uppercase tracking-wider py-3 px-5 rounded-2xl transition-all shadow-md"
              >
                <FileUp className="h-4 w-4" />
                <span>{t("SUBMIT PLANS FOR BID", "PRESENTAR PLANOS PARA LICITACIÓN")}</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Secondary Focus Strip: Residential, Fire Alarm, Low-Voltage */}
        <div className="mt-12 rounded-3xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-[#FF6B00] flex items-center justify-center shrink-0">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-slate-500">
                {t("Secondary Specialty Capabilities", "Especialidades Secundarias")}
              </div>
              <h4 className="text-base sm:text-lg font-bold text-[#0F172A] mt-0.5">
                {t(
                  "Residential Fire Alarm, Low-Voltage Cabling & Emergency Electrical",
                  "Alarmas de Incendio Residencial, Cableado de Bajo Voltaje y Emergencias"
                )}
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                {t(
                  "While our primary focus is large commercial & construction projects, we continue proudly providing certified residential fire alarm systems, structured low-voltage data cabling, smart panel upgrades, and 24/7 emergency services.",
                  "Aunque nuestro enfoque principal son proyectos comerciales y de construcción, seguimos ofreciendo sistemas de alarma de incendio residencial, cableado de bajo voltaje y emergencias 24/7."
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/services/fire-alarm"
              className="w-full sm:w-auto text-center px-4 py-2.5 rounded-full border border-slate-300 text-slate-700 hover:border-[#FF6B00] hover:text-[#FF6B00] text-xs font-bold uppercase tracking-wider transition"
            >
              {t("Fire Alarm", "Alarma Incendio")}
            </Link>
            <Link
              to="/services/residential"
              className="w-full sm:w-auto text-center px-4 py-2.5 rounded-full border border-slate-300 text-slate-700 hover:border-[#FF6B00] hover:text-[#FF6B00] text-xs font-bold uppercase tracking-wider transition"
            >
              {t("Residential Services", "Servicios Residenciales")}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
