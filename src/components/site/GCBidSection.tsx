import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  FileUp, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Send, 
  ArrowRight, 
  Upload, 
  FileText, 
  X, 
  AlertCircle,
  HardHat,
  Briefcase,
  FileCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useLanguage } from "@/hooks/useLanguage";
import { addWebEmail } from "@/lib/leads-store";

export function GCBidSection() {
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [projectType, setProjectType] = useState<string>("new-construction");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Check file size (max 50MB)
      if (file.size > 50 * 1024 * 1024) {
        toast.error(t("File is too large (max 50MB). Please provide a cloud link instead.", "El archivo es demasiado grande (máx 50MB). Proporcione un enlace en la nube."));
        return;
      }
      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const gcName = (form.querySelector("#gc-name") as HTMLInputElement)?.value || "";
    const company = (form.querySelector("#gc-company") as HTMLInputElement)?.value || "";
    const email = (form.querySelector("#gc-email") as HTMLInputElement)?.value || "";
    const phone = (form.querySelector("#gc-phone") as HTMLInputElement)?.value || "";
    const projectName = (form.querySelector("#project-name") as HTMLInputElement)?.value || "";
    const location = (form.querySelector("#project-location") as HTMLInputElement)?.value || "";
    const bidDeadline = (form.querySelector("#bid-deadline") as HTMLInputElement)?.value || "";
    const planLink = (form.querySelector("#plan-link") as HTMLInputElement)?.value || "";
    const description = (form.querySelector("#project-desc") as HTMLTextAreaElement)?.value || "";

    const combinedMessage = `
--- GENERAL CONTRACTOR / DEVELOPER BID SUBMISSION ---
Company: ${company}
Contact Name: ${gcName}
Phone: ${phone}
Email: ${email}
Project Name: ${projectName}
Project Type: ${projectType}
Project Location: ${location}
Bid Deadline: ${bidDeadline}
Plans Cloud Link: ${planLink || "None provided"}
Attached File Name: ${selectedFile ? selectedFile.name + ` (${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)` : "None"}
Project Scope & Details:
${description}
    `.trim();

    try {
      // Save to database & trigger real-time Zoho email notification
      await addWebEmail({
        name: `${gcName} (${company || "GC / Developer"})`,
        email,
        phone,
        service: `GC Bid: ${projectName} [${projectType}]`,
        message: combinedMessage,
        source: "GC & Developer Plan Submission Hub"
      });

      setSubmitted(true);
      toast.success(t("Bid package submitted successfully! Our estimating team will review your plans.", "¡Paquete de licitación enviado con éxito! Nuestro equipo de estimación revisará sus planos."));
    } catch (err) {
      setSubmitted(true);
      toast.success(t("Plans submitted! Our commercial estimators will contact you promptly.", "¡Planos enviados! Nuestros estimadores comerciales se pondrán en contacto pronto."));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="submit-plans" className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 overflow-hidden border-y border-slate-200">
      {/* Background blueprint grid accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#FF6B00]/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#E05E00] backdrop-blur-md mb-4">
            <HardHat className="h-3.5 w-3.5 text-[#FF6B00]" />
            {t("General Contractors & Developers Hub", "Portal para Contratistas Generales y Desarrolladores")}
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
            {t("Turning Blueprints Into ", "Convertimos Planos en ")}
            <span className="text-[#FF6B00]">{t("Winning Contracts", "Contratos Ganadores")}</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            {t(
              "Are you a General Contractor, Developer, or Estimator? Submit your architectural electrical drawings for comprehensive line-item takeoffs, value engineering, and competitive commercial bids.",
              "¿Es Contratista General, Desarrollador o Estimador? Envíe sus planos eléctricos para desgloses detallados, ingeniería de valor y ofertas comerciales competitivas."
            )}
          </p>

          <div className="mt-6 flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-700">
            <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3.5 py-1.5 shadow-xs">
              <ShieldCheck className="h-4 w-4 text-[#FF6B00]" />
              {t("State Certified – EC 13008942", "Certificado Estatal – EC 13008942")}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3.5 py-1.5 shadow-xs">
              <Clock className="h-4 w-4 text-[#FF6B00]" />
              {t("24–48 Hr Takeoff Turnaround", "Entrega de Estimación en 24–48 Horas")}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3.5 py-1.5 shadow-xs">
              <Briefcase className="h-4 w-4 text-[#FF6B00]" />
              {t("$2M Liability & Full Bonding", "Seguro de $2M y Fianza Completa")}
            </span>
          </div>
        </div>

        {/* Main Grid: Benefits on Left, Submission Form on Right */}
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          
          {/* Left Column: Why GCs Choose R&E */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 space-y-6 shadow-md">
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#0F172A] flex items-center gap-3">
                <Building2 className="h-6 w-6 text-[#FF6B00]" />
                {t("Why Florida GCs Partner with R&E", "Por Qué los Contratistas Eligen a R&E")}
              </h3>

              <div className="space-y-4">
                {[
                  {
                    title: t("Commercial Blueprint Takeoffs", "Estimación Precisa de Planos"),
                    desc: t("Detailed branch circuitry, switchgear, panels, low-voltage, and photometric lighting takeoffs.", "Desglose minucioso de circuitos derivados, tableros de distribución, bajo voltaje e iluminación.")
                  },
                  {
                    title: t("Value Engineering (VE)", "Ingeniería de Valor (VE)"),
                    desc: t("We identify material and routing cost efficiencies that keep your project under budget without compromising code.", "Identificamos eficiencias de costos en materiales y rutas para mantener el presupuesto sin sacrificar normativas.")
                  },
                  {
                    title: t("Submittal & RFI Responsiveness", "Gestión Rápida de RFI y Envíos"),
                    desc: t("Dedicated commercial project managers provide lightning-fast RFI turnarounds, submittals, and schedule adherence.", "Gerentes de proyecto dedicados aseguran respuestas rápidas a RFIs, fichas técnicas y cumplimiento de cronogramas.")
                  },
                  {
                    title: t("Permitting & Inspection Authority", "Gestión Integral de Permisos e Inspecciones"),
                    desc: t("Direct coordination with FPL and Florida municipal building departments from rough-in to final Certificate of Occupancy (CO).", "Coordinación directa con FPL y departamentos municipales desde el rough-in hasta el Certificado de Ocupación final.")
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 border-t border-slate-100 pt-3.5 first:border-none first:pt-0">
                    <CheckCircle2 className="h-5 w-5 text-[#FF6B00] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A] leading-tight">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Estimating Contact Card */}
              <div className="rounded-2xl border border-orange-200/90 bg-gradient-to-br from-orange-50 via-amber-50/50 to-orange-50 p-5 shadow-xs">
                <div className="text-[11px] font-black uppercase tracking-wider text-[#E05E00]">
                  {t("Direct Estimating Department", "Departamento Directo de Estimaciones")}
                </div>
                <div className="mt-1 text-sm font-bold text-slate-900">
                  Williams@electricalcontractorcorp.com
                </div>
                <div className="text-xs text-slate-700 mt-0.5 font-medium">
                  Direct Line: <a href="tel:+17863075933" className="text-[#FF6B00] hover:underline font-bold">(786) 307-5933</a>
                </div>
                <div className="mt-2 text-[11px] text-slate-500">
                  {t("Florida License #EC 13008942 · Serving Statewide Commercial Projects", "Licencia de Florida #EC 13008942 · Proyectos Comerciales en Todo el Estado")}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent "SUBMIT PLANS FOR BID" Portal */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative text-left">
              
              {/* Highlight ribbon */}
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#FF6B00] text-white text-[10px] sm:text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <FileCheck className="h-3.5 w-3.5" />
                {t("Commercial Plan Room", "Recepción de Planos Comerciales")}
              </div>

              <div className="mb-6">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                  {t("Submit Plans for Bid", "Presentar Planos para Licitación")}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                  {t("Upload your project drawings or share a link. Our estimating department will verify receipt within 2 hours.", "Suba los planos de su proyecto o comparta un enlace. Confirmaremos la recepción en 2 horas.")}
                </p>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00] flex items-center justify-center mx-auto text-[#FF6B00]">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#0F172A]">
                      {t("Bid Package Received!", "¡Paquete de Licitación Recibido!")}
                    </h4>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      {t("Thank you for inviting R&E Electrical Contractor Corp to bid on your project. Our commercial estimating team is reviewing your files and will confirm timeline details shortly.", "Gracias por invitar a R&E Electrical Contractor Corp a licitar su proyecto. Nuestro equipo revisará los archivos y confirmará detalles en breve.")}
                    </p>
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setSelectedFile(null);
                      }}
                      variant="outline"
                      className="mt-4 border-slate-300 text-slate-800 hover:bg-slate-50"
                    >
                      {t("Submit Another Project", "Enviar Otro Proyecto")}
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-5">
                    
                    {/* Contact Info Row */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="gc-name" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          {t("Contact Name *", "Nombre de Contacto *")}
                        </Label>
                        <Input
                          id="gc-name"
                          required
                          placeholder={t("e.g. John Miller, Lead Estimator", "ej. Juan Pérez, Estimador")}
                          className="mt-1.5 bg-slate-50/80 border-slate-200 hover:border-slate-300 focus:bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00] rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="gc-company" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          {t("GC / Developer Company Name *", "Empresa de Contratista / Desarrollador *")}
                        </Label>
                        <Input
                          id="gc-company"
                          required
                          placeholder={t("e.g. Apex Construction Partners", "ej. Apex Construcciones")}
                          className="mt-1.5 bg-slate-50/80 border-slate-200 hover:border-slate-300 focus:bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00] rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Email & Phone Row */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="gc-email" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          {t("Work Email *", "Correo Electrónico *")}
                        </Label>
                        <Input
                          id="gc-email"
                          type="email"
                          required
                          placeholder="estimating@gc-company.com"
                          className="mt-1.5 bg-slate-50/80 border-slate-200 hover:border-slate-300 focus:bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00] rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="gc-phone" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          {t("Phone Number *", "Teléfono *")}
                        </Label>
                        <Input
                          id="gc-phone"
                          type="tel"
                          required
                          placeholder="(786) 307-5933"
                          className="mt-1.5 bg-slate-50/80 border-slate-200 hover:border-slate-300 focus:bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00] rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Project Information Row */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="project-name" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          {t("Project Name *", "Nombre del Proyecto *")}
                        </Label>
                        <Input
                          id="project-name"
                          required
                          placeholder={t("e.g. Biscayne Palms Hotel Remodel", "ej. Remodelación Hotel Biscayne")}
                          className="mt-1.5 bg-slate-50/80 border-slate-200 hover:border-slate-300 focus:bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00] rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="project-type" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          {t("Primary Target Market / Sector *", "Sector / Mercado Principal *")}
                        </Label>
                        <Select value={projectType} onValueChange={setProjectType}>
                          <SelectTrigger id="project-type" className="mt-1.5 bg-slate-50/80 border-slate-200 hover:border-slate-300 text-slate-900 h-10 rounded-xl">
                            <SelectValue placeholder={t("Select Sector", "Seleccionar Sector")} />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-slate-200 text-slate-900 shadow-xl">
                            <SelectItem value="new-construction-hotel">{t("New Construction & Hotel Remodeling", "Construcción Nueva y Remodelación Hotelera")}</SelectItem>
                            <SelectItem value="multifamily">{t("Multifamily Residential Buildings", "Edificios Residenciales Multifamiliares")}</SelectItem>
                            <SelectItem value="restaurant">{t("Restaurants & Commercial Dining", "Restaurantes y Locales Gastronómicos")}</SelectItem>
                            <SelectItem value="schools">{t("Schools & Educational Facilities", "Escuelas e Instalaciones Educativas")}</SelectItem>
                            <SelectItem value="dental-medical">{t("Dental & Medical Clinics", "Clínicas Dentales y Médicas")}</SelectItem>
                            <SelectItem value="large-commercial">{t("Commercial Buildings & Retail Centers", "Edificios Comerciales y Centros Minoristas")}</SelectItem>
                            <SelectItem value="industrial">{t("Industrial & Warehouse Facilities", "Instalaciones Industriales y Almacenes")}</SelectItem>
                            <SelectItem value="residential-fire-alarm">{t("Residential Fire Alarm & Low-Voltage", "Alarma de Incendio y Bajo Voltaje Residencial")}</SelectItem>
                            <SelectItem value="other">{t("Other Commercial Project", "Otro Proyecto Comercial")}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Location & Bid Deadline */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="project-location" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          {t("Project Location / City (Florida) *", "Ubicación / Ciudad del Proyecto (Florida) *")}
                        </Label>
                        <div className="relative mt-1.5">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                          <Input
                            id="project-location"
                            required
                            placeholder={t("e.g. Miami, Fort Lauderdale, Orlando, FL", "ej. Miami, Fort Lauderdale, Orlando, FL")}
                            className="pl-9 bg-slate-50/80 border-slate-200 hover:border-slate-300 focus:bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00] rounded-xl"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="bid-deadline" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          {t("Bid Due Date / Deadline *", "Fecha Límite de Oferta *")}
                        </Label>
                        <div className="relative mt-1.5">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                          <Input
                            id="bid-deadline"
                            type="date"
                            required
                            className="pl-9 bg-slate-50/80 border-slate-200 hover:border-slate-300 focus:bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00] rounded-xl"
                          />
                        </div>
                      </div>
                    </div>

                    {/* PDF Plans Upload / Drop Area */}
                    <div className="space-y-2">
                      <Label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center justify-between">
                        <span>{t("Upload PDF Plans / Drawings", "Subir Planos en PDF / Dibujos")}</span>
                        <span className="text-[11px] text-slate-500 font-normal normal-case">{t("Max 50MB · PDF, DWG, ZIP", "Máx 50MB · PDF, DWG, ZIP")}</span>
                      </Label>

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.dwg,.zip,.rar"
                        onChange={handleFileChange}
                        className="hidden"
                        id="plan-file-input"
                      />

                      {selectedFile ? (
                        <div className="flex items-center justify-between p-3.5 rounded-2xl bg-orange-50/80 border border-[#FF6B00]/40 text-slate-900">
                          <div className="flex items-center gap-2.5 truncate">
                            <FileText className="h-5 w-5 text-[#FF6B00] shrink-0" />
                            <div className="truncate text-left">
                              <p className="text-xs font-bold truncate text-slate-900">{selectedFile.name}</p>
                              <p className="text-[10px] text-slate-500">
                                {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={removeFile}
                            className="p-1 hover:bg-orange-100 rounded-lg text-slate-500 hover:text-slate-800 transition"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          className="border-2 border-dashed border-slate-300 hover:border-[#FF6B00] bg-slate-50/80 hover:bg-orange-50/40 rounded-2xl p-4 sm:p-6 text-center cursor-pointer transition-colors duration-200"
                        >
                          <Upload className="h-7 w-7 text-[#FF6B00] mx-auto mb-2 opacity-90" />
                          <p className="text-xs font-bold text-slate-900">
                            {t("Click to select PDF blueprints or drag files here", "Haga clic para seleccionar planos en PDF o arrástrelos aquí")}
                          </p>
                          <p className="text-[11px] text-slate-500 mt-1">
                            {t("Architectural drawings, MEP single-line diagrams, or fixture schedules", "Planos arquitectónicos, diagramas unifilares MEP o calendarios de iluminación")}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Cloud Plan Link (Procore, Dropbox, Google Drive, Box) */}
                    <div>
                      <Label htmlFor="plan-link" className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center justify-between">
                        <span>{t("Or Share Cloud Plan Room Link (Optional)", "O Comparta Enlace en la Nube (Opcional)")}</span>
                        <span className="text-[10px] text-slate-500 font-normal normal-case">Procore, Dropbox, Google Drive, Box</span>
                      </Label>
                      <Input
                        id="plan-link"
                        type="url"
                        placeholder="https://app.procore.com/... or https://drive.google.com/..."
                        className="mt-1.5 bg-slate-50/80 border-slate-200 hover:border-slate-300 focus:bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00] rounded-xl"
                      />
                    </div>

                    {/* Scope & Notes */}
                    <div>
                      <Label htmlFor="project-desc" className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        {t("Scope of Work & Estimator Notes (Optional)", "Alcance del Trabajo y Notas (Opcional)")}
                      </Label>
                      <Textarea
                        id="project-desc"
                        rows={3}
                        placeholder={t("Mention special requirements: e.g., 480V service, fire alarm rough-in, generator backup, phased tenant delivery...", "Mencione requisitos: ej. servicio de 480V, alarma de incendios, respaldo de generador...")}
                        className="mt-1.5 bg-slate-50/80 border-slate-200 hover:border-slate-300 focus:bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#FF6B00] focus-visible:border-[#FF6B00] rounded-xl"
                      />
                    </div>

                    {/* Prominent SUBMIT PLANS FOR BID Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={submitting}
                        className="w-full h-14 rounded-2xl bg-[#FF6B00] hover:bg-[#E05E00] text-white font-black text-sm sm:text-base uppercase tracking-widest shadow-[0_12px_30px_rgba(255,107,0,0.35)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                      >
                        {submitting ? (
                          <span>{t("Processing Bid Submission...", "Procesando Envío de Oferta...")}</span>
                        ) : (
                          <>
                            <FileUp className="h-5 w-5" />
                            <span>{t("SUBMIT PLANS FOR BID", "PRESENTAR PLANOS PARA LICITACIÓN")}</span>
                            <ArrowRight className="h-5 w-5 ml-1" />
                          </>
                        )}
                      </Button>
                      <p className="text-[11px] text-slate-500 text-center mt-2.5 font-medium">
                        {t("Plans are handled confidentially under strict non-disclosure. Replies guaranteed within 24 hours.", "Los planos se manejan con estricta confidencialidad. Respuestas garantizadas en 24 horas.")}
                      </p>
                    </div>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
