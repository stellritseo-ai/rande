import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/hooks/useLanguage";
import { addWebEmail } from "@/lib/leads-store";

export function Estimate() {
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [service, setService] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    const form = e.currentTarget;
    const name = (form.querySelector("#name") as HTMLInputElement)?.value || "";
    const phone = (form.querySelector("#phone") as HTMLInputElement)?.value || "";
    const email = (form.querySelector("#email") as HTMLInputElement)?.value || "";
    const msg = (form.querySelector("#msg") as HTMLTextAreaElement)?.value || "";

    try {
      // 1. Save to MongoDB database
      await addWebEmail({
        name,
        phone,
        email,
        service: service || "General Inquiry",
        message: msg,
        source: "Free Estimate Page"
      });

      // 2. Email backup forwarding
      const response = await fetch("https://formsubmit.co/ajax/stellritinc@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: name,
          Phone: phone,
          Email: email,
          "Service Needed": service || "General Inquiry",
          Message: msg
        })
      });

      if (response.ok) {
        toast.success(t("Thanks! We'll be in touch within 24 hours.", "¡Gracias! Nos pondremos en contacto dentro de las 24 horas."));
        form.reset();
        setService("");
      } else {
        toast.error(t("Submission failed. Please try again.", "Error en el envío. Por favor, inténtelo de nuevo."));
      }
    } catch (err) {
      toast.error(t("Connection error. Please try again.", "Error de conexión. Por favor, inténtelo de nuevo."));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">{t("Free Estimate", "Presupuesto Gratis")}</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-secondary sm:text-5xl">
            {t("Get a free, no-pressure quote.", "Obtenga una cotización gratuita y sin compromiso.")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("Tell us about your project and we'll get back within 24 hours with a transparent quote.", "Cuéntenos sobre su proyecto y le responderemos en un plazo de 24 horas con una cotización transparente.")}
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-white p-8 shadow-[var(--shadow-card)]">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={t("Full Name", "Nombre Completo")} id="name"><Input id="name" required placeholder={t("Jane Smith", "Juan Pérez")} /></Field>
              <Field label={t("Phone", "Teléfono")} id="phone"><Input id="phone" type="tel" required placeholder="(720) 298-7777" /></Field>
              <div className="sm:col-span-2">
                <Field label={t("Email", "Correo Electrónico")} id="email"><Input id="email" type="email" required placeholder="jane@example.com" /></Field>
              </div>
              <div className="sm:col-span-2">
                <Field label={t("Service Type", "Tipo de Servicio")} id="service">
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger id="service" className="h-11"><SelectValue placeholder={t("Select a service", "Seleccione un servicio")} /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="driveway">{t("Driveways", "Entradas de Autos")}</SelectItem>
                      <SelectItem value="patios">{t("Patios", "Patios")}</SelectItem>
                      <SelectItem value="sidewalk">{t("Sidewalks", "Aceras")}</SelectItem>
                      <SelectItem value="remodeling">{t("Remodeling", "Remodelación")}</SelectItem>
                      <SelectItem value="interior-exterior">{t("Interior/Exterior", "Interior/Exterior")}</SelectItem>
                      <SelectItem value="home-additions">{t("Additions", "Adiciones")}</SelectItem>
                      <SelectItem value="home-improvements">{t("Home Improvements", "Mejoras para el Hogar")}</SelectItem>
                      <SelectItem value="foundation">{t("Foundations", "Cimientos")}</SelectItem>
                      <SelectItem value="decks">{t("Decks", "Terrazas de Madera")}</SelectItem>
                      <SelectItem value="fencing">{t("Fencing", "Cercas")}</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label={t("Message", "Mensaje")} id="msg">
                  <Textarea id="msg" rows={5} placeholder={t("Tell us about your project...", "Cuéntenos sobre su proyecto...")} />
                </Field>
              </div>
            </div>
            <Button type="submit" variant="hero" size="xl" disabled={submitting} className="mt-6 w-full">
              {submitting ? t("Sending...", "Enviando...") : <>{t("Get My Free Estimate", "Obtener Mi Presupuesto Gratis")} <Send className="h-4 w-4" /></>}
            </Button>
          </form>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)] relative h-72">
              <iframe
                title="ACC Construction LLC Location"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49063.05536944167!2d-105.10931055!3d39.77465845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b8643274af203%3A0xb7b0aeced99d5e09!2sWheat%20Ridge%2C%20CO%2C%20USA!5e0!3m2!1sen!2snp!4v1783399129761!5m2!1sen!2snp"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={Phone} title={t("Call Us", "Llámenos")} lines={["(720) 298-7777", t("24/7 Emergency", "Emergencia 24/7")]} />
              <InfoCard icon={Mail} title={t("Email", "Correo")} lines={["leonholley45@gmail.com"]} />
              <InfoCard icon={MapPin} title={t("Office", "Oficina")} lines={["Wheat Ridge", "Colorado"]} />
              <InfoCard icon={Clock} title={t("Hours", "Horarios")} lines={[t("Mon–Sat: 7am–7pm", "Lun–Sáb: 7am–7pm"), t("Sun: Emergency only", "Dom: Solo emergencias")]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <Label htmlFor={id} className="text-xs font-bold uppercase tracking-wider text-secondary">{label}</Label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: React.ElementType; title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="mt-3 font-display text-base font-extrabold text-secondary">{title}</h4>
      {lines.map((l) => (
        <p key={l} className="text-sm text-muted-foreground">{l}</p>
      ))}
    </div>
  );
}
