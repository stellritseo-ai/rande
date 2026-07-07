import { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";
import { getReviews } from "@/lib/leads-store";

interface Review {
  text: string;
  name: string;
  role: string;
  rating: number;
  initials: string;
  avatarColor: string;
  replyText?: string;
}

import { useLanguage } from "@/hooks/useLanguage";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]"
        />
      ))}
    </div>
  );
}

import { cn } from "@/lib/utils";

function TestimonialCard({ review, isGrid = false }: { review: Review; isGrid?: boolean }) {
  return (
    <div className={cn(
      "relative bg-white border border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-2xl p-6 flex flex-col gap-4 group hover:shadow-[0_6px_30px_rgba(0,0,0,0.10)] hover:border-slate-300 transition-all duration-300 text-left justify-between",
      isGrid ? "w-full" : "flex-shrink-0 w-[340px] sm:w-[380px] mx-3"
    )}>
      <div className="space-y-4">
        {/* Rating */}
        <StarRating count={review.rating} />

        {/* Text */}
        <p className="text-slate-655 text-sm leading-relaxed font-medium flex-1">
          "{review.text}"
        </p>

        {review.replyText && (
          <div className="mt-3 bg-slate-50 border border-slate-100 p-3.5 rounded-xl text-left text-xs">
            <p className="font-extrabold text-[#008A22] uppercase tracking-wider text-[10px]">ACC Construction Response</p>
            <p className="text-slate-600 font-medium leading-relaxed mt-1">"{review.replyText}"</p>
          </div>
        )}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-slate-100 mt-2">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{ backgroundColor: review.avatarColor }}
        >
          {review.initials}
        </div>
        <div>
          <p className="text-slate-900 font-semibold text-sm leading-tight">
            {review.name}
          </p>
          <p className="text-slate-400 text-xs mt-0.5">{review.role}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
}: {
  items: Review[];
  direction?: "left" | "right";
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const duplicated = [...items, ...items, ...items];

  const animClass =
    direction === "left" ? "marquee-track-left" : "marquee-track-right";

  return (
    <div
      className="overflow-hidden relative group/row"
      onMouseEnter={() => {
        if (trackRef.current) {
          trackRef.current.style.animationPlayState = "paused";
        }
      }}
      onMouseLeave={() => {
        if (trackRef.current) {
          trackRef.current.style.animationPlayState = "running";
        }
      }}
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#F8FAFC] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#F8FAFC] to-transparent" />

      <div ref={trackRef} className={`flex ${animClass}`}>
        {duplicated.map((review, i) => (
          <TestimonialCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials({ isGrid = false }: { isGrid?: boolean }) {
  const { t } = useLanguage();
  const [dbReviews, setDbReviews] = useState<Review[]>([]);

  useEffect(() => {
    getReviews().then((items) => {
      if (Array.isArray(items)) {
        const mapped = items
          .filter((r) => r.featured)
          .map((r) => {
            const initials = r.author
              .split(" ")
              .map((n) => n.charAt(0))
              .join("")
              .toUpperCase()
              .slice(0, 2) || "V";

            const colors = ["#1D4ED8", "#7C3AED", "#065F46", "#B45309", "#BE185D", "#0F766E", "#9333EA", "#DC2626"];
            const hash = r.author.charCodeAt(0) % colors.length;
            const avatarColor = colors[isNaN(hash) ? 0 : hash];

            return {
              text: r.text,
              name: r.author,
              role: r.location,
              rating: r.rating,
              initials,
              avatarColor,
              replyText: r.replyText
            };
          });
        
        if (mapped.length > 0) {
          setDbReviews(mapped);
        }
      }
    }).catch(err => {
      console.warn("Failed to load dynamic reviews, utilizing static fallbacks:", err);
    });
  }, []);

  const fallbackReviews: Review[] = [
    {
      text: t("The home addition and remodeling they did for our home was outstanding. Professional, clean, and finished ahead of schedule. Zero issues since.", "La adición y remodelación de la casa que hicieron para nuestro hogar fue excelente. Profesional, limpia y terminada antes de lo previsto. Cero problemas desde entonces."),
      name: "Marcus T.",
      role: t("Homeowner, Denver", "Propietario, Denver"),
      rating: 5,
      initials: "MT",
      avatarColor: "#1D4ED8",
    },
    {
      text: t("Called them for a quick quote and site assessment — they arrived the next day. Fixed the structural issue fast. Truly professional service.", "Los llamé para una cotización rápida y evaluación del sitio; llegaron al día siguiente. Solucionaron el problema estructural rápido. Servicio realmente profesional."),
      name: "Priya S.",
      role: t("Business Owner", "Propietario de Negocio"),
      rating: 5,
      initials: "PS",
      avatarColor: "#7C3AED",
    },
    {
      text: t("They paved our entire concrete driveway and walkways. Flawless execution. I'll never use another contractor again.", "Pavimentaron toda nuestra entrada de concreto y caminos. Ejecución impecable. Nunca volveré a usar a otro contratista."),
      name: "Jared W.",
      role: t("Fleet Manager", "Gerente de Flota"),
      rating: 5,
      initials: "JW",
      avatarColor: "#065F46",
    },
    {
      text: t("Best general contractor in Denver. They executed our entire office renovation — on time, on budget, and zero punch list items.", "El mejor contratista general en Denver. Realizaron toda la renovación de nuestra oficina: a tiempo, dentro del presupuesto y sin detalles pendientes."),
      name: "Diana L.",
      role: t("Office Manager", "Administradora de Oficina"),
      rating: 5,
      initials: "DL",
      avatarColor: "#B45309",
    },
    {
      text: t("The driveway pavers installation was seamless. They set up borders, matched our aesthetic, and completed the work quickly.", "La instalación de los adoquines de la entrada fue perfecta. Configuraron los bordes, combinaron con nuestra estética y completaron el trabajo rápidamente."),
      name: "Kenji M.",
      role: t("Homeowner", "Propietario"),
      rating: 5,
      initials: "KM",
      avatarColor: "#BE185D",
    },
    {
      text: t("Hired them for a complete rewire of a 1960s bungalow. They handled every permit, passed every inspection, amazing team.", "Los contratamos para un recableado completo de un bungalow de los años 60. Se encargaron de cada permiso, pasaron cada inspección, un equipo increíble."),
      name: "Rosa F.",
      role: t("Real Estate Investor", "Inversor de Bienes Raíces"),
      rating: 5,
      initials: "RF",
      avatarColor: "#0F766E",
    },
    {
      text: t("Generator installation was smooth and the team was incredibly knowledgeable. They explained every step and left the site spotless.", "La instalación del generador fue sencilla y el equipo estuvo increíblemente capacitado. Explicaron cada paso y dejaron el lugar impecable."),
      name: "Tony B.",
      role: t("Restaurant Owner", "Dueño de Restaurante"),
      rating: 5,
      initials: "TB",
      avatarColor: "#9333EA",
    },
    {
      text: t("Outstanding service from start to finish. The crew was courteous, efficient, and clearly knew what they were doing. Highly recommend.", "Excelente servicio de principio a fin. El personal fue cortés, eficiente y claramente sabía lo que estaba haciendo. Muy recomendado."),
      name: "Sandra K.",
      role: t("Property Manager", "Administradora de Propiedades"),
      rating: 5,
      initials: "SK",
      avatarColor: "#DC2626",
    },
  ];

  const reviews = dbReviews.length > 0 ? dbReviews : fallbackReviews;

  const row1 = reviews.slice(0, Math.ceil(reviews.length / 2));
  const row2 = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <section
      id="reviews"
      className="relative py-[60px] bg-[#F8FAFC] overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-200/40 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-violet-200/30 blur-[100px]" />

      {/* Section Header */}
      <div className="mx-auto w-[90%] max-w-7xl text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          {t("Client Reviews", "Opiniones de Clientes")}
        </div>

        <h2 className="text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight capitalize -mt-[5px] mb-[10px]">
          {t("Trusted by ", "Con la confianza de ")}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
            {t("hundreds", "cientos")}
          </span>{" "}
          {t("of customers", "de clientes")}
        </h2>

        <p className={cn(
          "mx-auto max-w-xl text-[#000] text-sm sm:text-base leading-relaxed",
          isGrid ? "mb-0" : "-mb-[35px]"
        )}>
          {t("Real experiences from real clients across Denver & Colorado. See why homeowners and businesses choose us every time.", "Experiencias reales de clientes reales en todo Denver y el Colorado. Vea por qué los propietarios e inquilinos nos eligen siempre.")}
        </p>
      </div>

      {/* Grid or Marquee View */}
      {isGrid ? (
        <div className="mx-auto w-[90%] max-w-7xl relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {reviews.map((review, idx) => (
            <TestimonialCard key={idx} review={review} isGrid={true} />
          ))}
        </div>
      ) : (
        <div className="relative z-10 flex flex-col gap-5">
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-33.3333%); }
          100% { transform: translateX(0); }
        }
        .marquee-track-left {
          animation: marquee-left 30s linear infinite;
          width: max-content;
        }
        .marquee-track-right {
          animation: marquee-right 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
