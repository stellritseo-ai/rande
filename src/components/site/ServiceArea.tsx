import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areasData = [
  { name: "Denver", x: "50%", y: "45%", primary: true },
  { name: "Colorado Springs", x: "52%", y: "82%" },
  { name: "Aurora", x: "64%", y: "48%" },
  { name: "Fort Collins", x: "48%", y: "15%" },
  { name: "Lakewood", x: "38%", y: "48%" },
  { name: "Thornton", x: "51%", y: "30%" },
  { name: "Arvada", x: "39%", y: "38%" },
  { name: "Westminster", x: "44%", y: "34%" },
  { name: "Pueblo", x: "54%", y: "92%" },
  { name: "Greeley", x: "62%", y: "18%" },
  { name: "Centennial", x: "58%", y: "60%" },
  { name: "Boulder", x: "32%", y: "26%" },
  { name: "Longmont", x: "38%", y: "21%" },
  { name: "Loveland", x: "44%", y: "18%" },
  { name: "Broomfield", x: "43%", y: "28%" },
  { name: "Castle Rock", x: "56%", y: "74%" },
  { name: "Commerce City", x: "56%", y: "38%" },
  { name: "Parker", x: "65%", y: "66%" },
  { name: "Grand Junction", x: "10%", y: "55%" },
  { name: "Littleton", x: "46%", y: "58%" },
];

const TinyShieldIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#008A22] fill-[#008A22]/20 shrink-0" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export function ServiceArea() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <section id="service-area" className="relative py-[60px] bg-white border-b border-slate-100 overflow-hidden">
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Chips (50% width) */}
          <div className="z-10 text-left">
            <span className="inline-flex items-center gap-2 bg-[#008A22]/10 border border-[#008A22]/20 text-[#008A22] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
              <TinyShieldIcon /> Service Area <TinyShieldIcon />
            </span>
            <h2 
              className="text-[#0F172A] leading-tight tracking-tight"
              style={{ fontSize: "40px", fontWeight: 800, marginBottom: "10px" }}
            >
              Proudly Serving The Entire State Of <span className="text-[#008A22]">Colorado</span>.
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-lg mb-8">
              We provide prompt, dependable general contracting solutions across the entire state of Colorado — typically dispatched from our local Denver metro area operations center.
            </p>
            
            {/* Premium Capsule Chips */}
            <div className="flex flex-wrap gap-2.5">
              {areasData.map((a) => {
                const isActive = hoveredArea === a.name;
                return (
                  <motion.div
                    key={a.name}
                    onMouseEnter={() => setHoveredArea(a.name)}
                    onMouseLeave={() => setHoveredArea(null)}
                    whileHover={{ scale: 1.03, y: -1 }}
                    className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider rounded-xl py-2.5 px-4 transition-all duration-300 shadow-sm cursor-pointer border ${
                      isActive
                        ? "bg-[#008A22]/10 border-[#008A22]/45 text-[#008A22] scale-[1.03] -translate-y-0.5 shadow-md shadow-[#008A22]/5"
                        : "text-slate-600 bg-slate-50 border-slate-100 hover:bg-[#008A22]/5 hover:border-[#008A22]/25 hover:text-[#008A22]"
                    }`}
                  >
                    <MapPin className={`h-3.5 w-3.5 shrink-0 transition-colors duration-300 ${
                      isActive ? "text-[#008A22]" : "text-[#008A22]/75"
                    }`} />
                    {a.name}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sleek Dispatch Telemetry Map (50% width) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c1324] to-[#040814] border border-slate-800 shadow-glow"
          >
            {/* Embedded Google Map Background (Centered on Wheat Ridge, CO) */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49063.05536944167!2d-105.10931055!3d39.77465845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b8643274af203%3A0xb7b0aeced99d5e09!2sWheat%20Ridge%2C%20CO%2C%20USA!5e0!3m2!1sen!2snp!4v1783399129761!5m2!1sen!2snp"
              className="absolute inset-0 w-full h-full opacity-80 grayscale invert contrast-[1.2] brightness-[0.85] pointer-events-none"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
            
            {/* Stylized map grid and contour boundary */}
            <svg
              viewBox="0 0 600 450"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                <radialGradient id="mapGlow" cx="55%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#008A22" stopOpacity="0.25" />
                  <stop offset="60%" stopColor="#008A22" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#008A22" stopOpacity="0" />
                </radialGradient>
              </defs>
              
              {/* Coverage radial glow under Denver */}
              <circle cx="330" cy="225" r="200" fill="url(#mapGlow)" />

              {/* Radar Sweep Line */}
              <line
                x1="330"
                y1="225"
                x2="330"
                y2="45"
                stroke="rgba(0, 138, 34, 0.4)"
                strokeWidth="1.5"
                className="radar-sweep-line"
              />

              {/* Styled coverage contour boundary */}
              <path
                d="M 120 280 C 150 160, 230 110, 350 140 S 530 200, 520 310 C 470 380, 350 400, 230 370 S 100 340, 120 280 Z"
                fill="rgba(0, 138, 34, 0.01)"
                stroke="#008A22"
                strokeWidth="2"
                className="animated-boundary"
                opacity="0.6"
              />

              {/* Grid coordinates overlay */}
              {Array.from({ length: 6 }).map((_, i) => (
                <line
                  key={i}
                  x1={60 + i * 90}
                  y1="0"
                  x2={60 + i * 90 - 30}
                  y2="450"
                  stroke="#1e293b"
                  strokeWidth="1"
                  opacity="0.4"
                />
              ))}
              {Array.from({ length: 5 }).map((_, i) => (
                <line
                  key={`h${i}`}
                  x1="0"
                  y1={60 + i * 80}
                  x2="600"
                  y2={40 + i * 80}
                  stroke="#1e293b"
                  strokeWidth="1"
                  opacity="0.4"
                />
              ))}
            </svg>

            {/* Pins with glowing radar rings */}
            {areasData.map((pin) => (
              <Pin
                key={pin.name}
                x={pin.x}
                y={pin.y}
                label={pin.name}
                primary={pin.primary}
                active={hoveredArea === pin.name}
                onMouseEnter={() => setHoveredArea(pin.name)}
                onMouseLeave={() => setHoveredArea(null)}
              />
            ))}

            {/* Coverage badge */}
            <div className="absolute bottom-5 left-5 bg-slate-950/75 border border-slate-800/80 backdrop-blur-md text-white rounded-2xl px-4 py-3 select-none z-20">
              <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                Service Area
              </div>
              <div className="font-display font-bold text-sm text-[#008A22] mt-0.5">
                Entire State of Colorado
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes radar-sweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes boundary-dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .radar-sweep-line {
          transform-origin: 330px 225px;
          animation: radar-sweep 10s linear infinite;
        }
        .animated-boundary {
          stroke-dasharray: 6 4;
          animation: boundary-dash 15s linear infinite;
        }
      `}</style>
    </section>
  );
}

function Pin({
  x,
  y,
  label,
  primary = false,
  active = false,
  onMouseEnter,
  onMouseLeave,
}: {
  x: string;
  y: string;
  label: string;
  primary?: boolean;
  active?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-full group cursor-pointer z-20 transition-all duration-300"
      style={{ left: x, top: y }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col items-center gap-1.5">
        {/* Glowing hotspot */}
        <div className="relative flex h-8 w-8 items-center justify-center">
          {/* Pulsing ring */}
          <span className={`animate-ping absolute inline-flex h-6 w-6 rounded-full opacity-75 transition-all duration-300 ${
            active 
              ? "bg-[#008A22] scale-125" 
              : primary 
                ? "bg-[#10B981]" 
                : "bg-emerald-400"
          }`}></span>
          {/* Inner solid ring */}
          <span className={`relative inline-flex rounded-full h-4.5 w-4.5 items-center justify-center text-white shadow-md transition-all duration-300 ${
            active 
              ? "bg-[#008A22] scale-110 shadow-[0_0_12px_rgba(0,138,34,0.5)]" 
              : primary 
                ? "bg-[#10B981]" 
                : "bg-gradient-to-r from-[#008A22] to-emerald-400"
          }`}>
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          </span>
        </div>
        
        {/* Label frame */}
        <span className={`px-2.5 py-0.5 rounded-lg backdrop-blur-sm border transition-all duration-300 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap shadow-sm ${
          primary || active ? "inline-block" : "hidden sm:inline-block"
        } ${
          active
            ? "bg-[#008A22] border-[#008A22] text-white scale-105 shadow-[0_4px_12px_rgba(0,138,34,0.3)]"
            : "bg-[#0c1324]/85 border-slate-800/80 text-white group-hover:bg-[#008A22] group-hover:border-[#008A22]/50 group-hover:text-white"
        }`}>
          {label}
        </span>
      </div>
    </div>
  );
}
