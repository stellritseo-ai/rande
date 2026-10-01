import heroVideo from "@/assets/herovideo.mp4";
import heroImg from "@/assets/hero-electrician.jpg";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  variant = "dark",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  variant?: "dark" | "light";
}) {
  const isLight = variant === "light";

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-20 transition-colors",
        isLight
          ? "bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-900 border-b border-slate-200"
          : "bg-[#0F172A] text-white"
      )}
    >
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={cn(
            "h-full w-full object-cover",
            isLight ? "opacity-15 mix-blend-multiply" : "opacity-30"
          )}
          poster={heroImg}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div
          className={cn(
            "absolute inset-0",
            isLight
              ? "bg-gradient-to-b from-white/75 via-white/90 to-white"
              : "bg-gradient-to-b from-[#0F172A]/60 via-[#0F172A]/80 to-[#0F172A]"
          )}
        />
        {isLight && (
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        )}
      </div>

      {/* Glow blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className={cn(
            "absolute top-1/4 left-1/4 h-64 w-64 rounded-full blur-3xl animate-blob",
            isLight ? "bg-[#FF6B00]/10" : "bg-[#FF6B00]/15"
          )}
        />
        <div
          className={cn(
            "absolute bottom-0 right-1/4 h-80 w-80 rounded-full blur-3xl animate-blob",
            isLight ? "bg-blue-600/5" : "bg-blue-600/10"
          )}
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {eyebrow && (
          <div
            className={cn(
              "inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6",
              isLight
                ? "bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#E05E00]"
                : "bg-white/10 border border-white/15 text-[#FF6B00]"
            )}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
            {eyebrow}
          </div>
        )}
        <h1
          className={cn(
            "font-display text-[38px] sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-5",
            isLight ? "text-[#0F172A]" : "text-white"
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={cn(
              "mx-auto max-w-2xl text-base sm:text-lg leading-relaxed font-medium",
              isLight ? "text-slate-600" : "text-white/65"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
