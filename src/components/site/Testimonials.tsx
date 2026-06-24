import { useRef } from "react";
import { Star } from "lucide-react";

interface Review {
  text: string;
  name: string;
  role: string;
  rating: number;
  initials: string;
  avatarColor: string;
}

const reviews: Review[] = [
  {
    text: "The electrical panel upgrade they did for our home was outstanding. Professional, clean, and finished ahead of schedule. Zero issues since.",
    name: "Marcus T.",
    role: "Homeowner, Miami",
    rating: 5,
    initials: "MT",
    avatarColor: "#1D4ED8",
  },
  {
    text: "Called them for an emergency at 11pm — they arrived within 45 minutes. Fixed the issue fast. Truly 24/7 service.",
    name: "Priya S.",
    role: "Business Owner",
    rating: 5,
    initials: "PS",
    avatarColor: "#7C3AED",
  },
  {
    text: "They installed 12 EV chargers across our fleet parking lot. Flawless execution. I'll never use another electrician again.",
    name: "Jared W.",
    role: "Fleet Manager",
    rating: 5,
    initials: "JW",
    avatarColor: "#065F46",
  },
  {
    text: "Best electrical contractor in Miami. They wired our entire office renovation — on time, on budget, and zero punch list items.",
    name: "Diana L.",
    role: "Office Manager",
    rating: 5,
    initials: "DL",
    avatarColor: "#B45309",
  },
  {
    text: "Smart home integration was seamless. They set up Lutron controls, automated lighting scenes, and a whole-home surge protector.",
    name: "Kenji M.",
    role: "Homeowner",
    rating: 5,
    initials: "KM",
    avatarColor: "#BE185D",
  },
  {
    text: "Hired them for a complete rewire of a 1960s bungalow. They handled every permit, passed every inspection, amazing team.",
    name: "Rosa F.",
    role: "Real Estate Investor",
    rating: 5,
    initials: "RF",
    avatarColor: "#0F766E",
  },
  {
    text: "Generator installation was smooth and the team was incredibly knowledgeable. They explained every step and left the site spotless.",
    name: "Tony B.",
    role: "Restaurant Owner",
    rating: 5,
    initials: "TB",
    avatarColor: "#9333EA",
  },
  {
    text: "Outstanding service from start to finish. The crew was courteous, efficient, and clearly knew what they were doing. Highly recommend.",
    name: "Sandra K.",
    role: "Property Manager",
    rating: 5,
    initials: "SK",
    avatarColor: "#DC2626",
  },
];

const row1 = reviews.slice(0, 4);
const row2 = reviews.slice(4, 8);

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

function TestimonialCard({ review }: { review: Review }) {
  return (
    <div className="relative flex-shrink-0 w-[340px] sm:w-[380px] mx-3 bg-white border border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-2xl p-6 flex flex-col gap-4 group hover:shadow-[0_6px_30px_rgba(0,0,0,0.10)] hover:border-slate-300 transition-all duration-300">
      {/* Rating */}
      <StarRating count={review.rating} />

      {/* Text */}
      <p className="text-slate-600 text-sm leading-relaxed font-medium flex-1">
        "{review.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
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

export function Testimonials() {
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
          Client Reviews
        </div>

        <h2 className="text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight capitalize -mt-[5px] mb-[10px]">
          Trusted by{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
            hundreds
          </span>{" "}
          of customers
        </h2>

        <p className="mx-auto max-w-xl text-[#000] text-sm sm:text-base leading-relaxed -mb-[35px]">
          Real experiences from real clients across Miami & South Florida. See
          why homeowners and businesses choose us every time.
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="relative z-10 flex flex-col gap-5">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>

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
