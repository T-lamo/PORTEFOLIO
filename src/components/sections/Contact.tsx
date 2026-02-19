import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, Send, AlertCircle, Phone, Mail } from "lucide-react";
import { useForm } from "react-hook-form";

import { heroTexts } from "../../constants";
import { contactSchema, type ContactFormData } from "../../schemas/contactSchema";
import { SectionWrapper } from "../shared/SectionWrapper";

const ContactComponent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Récupération dynamique des infos depuis les constantes
  const myTel = heroTexts.Tel;
  const myEmail = heroTexts.Email;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  /**
   * Encode les données pour Netlify Forms
   * Typage strict pour satisfaire ESLint (@typescript-eslint/no-explicit-any)
   */
  const encode = (data: Record<string, string | number | boolean | undefined>) => {
    return Object.keys(data)
      .map((key) => {
        const value = data[key];
        return (
          encodeURIComponent(key) +
          "=" +
          encodeURIComponent(value !== undefined ? String(value) : "")
        );
      })
      .join("&");
  };

  const onSubmit = async (data: ContactFormData) => {
    if (data.username) return;
    setIsSubmitting(true);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact-portfolio", ...data }),
      });
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Une erreur est survenue, veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex w-full flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-black tracking-widest uppercase md:text-6xl"
      >
        Contact
      </motion.h2>
      <div className="bg-primary mt-6 mb-10 h-1.5 w-24 rounded-full" />

      <div className="glass-card relative w-full max-w-2xl overflow-hidden rounded-[2.5rem] p-8 md:p-12">
        {/* --- INFOS DE CONTACT DIRECT (DYNAMIQUE) --- */}
        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <a
            href={`tel:${myTel.replace(/\s/g, "")}`}
            className="hover:border-primary/50 group flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors"
          >
            <Phone size={18} className="text-primary transition-transform group-hover:scale-110" />
            <span className="text-sm font-medium">{myTel}</span>
          </a>
          <a
            href={`mailto:${myEmail}`}
            className="hover:border-primary/50 group flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors"
          >
            <Mail size={18} className="text-primary transition-transform group-hover:scale-110" />
            <span className="text-sm font-medium">{myEmail}</span>
          </a>
        </div>

        <div className="relative mb-10 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <span className="relative bg-[#050816] px-4 text-xs tracking-widest text-white/30 uppercase">
            ou via formulaire
          </span>
        </div>

        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form
              key="contact-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 text-left"
              name="contact-portfolio"
              data-netlify="true"
              netlify-honeypot="username"
              noValidate
            >
              <input type="hidden" name="form-name" value="contact-portfolio" />
              <input {...register("username")} type="text" className="hidden" tabIndex={-1} />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="ml-1 text-sm font-medium text-white/70">
                    Nom complet
                  </label>
                  <input
                    {...register("name")}
                    id="name"
                    placeholder="John Doe"
                    className={`w-full rounded-2xl border-2 bg-white/5 p-4 transition-all outline-none ${errors.name ? "border-red-500/50 focus:border-red-500" : "focus:border-primary border-white/10"}`}
                  />
                  {errors.name && (
                    <p className="ml-1 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle size={12} /> {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="ml-1 text-sm font-medium text-white/70">
                    Email professionnel
                  </label>
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className={`w-full rounded-2xl border-2 bg-white/5 p-4 transition-all outline-none ${errors.email ? "border-red-500/50 focus:border-red-500" : "focus:border-primary border-white/10"}`}
                  />
                  {errors.email && (
                    <p className="ml-1 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle size={12} /> {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="ml-1 text-sm font-medium text-white/70">
                  Sujet
                </label>
                <input
                  {...register("subject")}
                  id="subject"
                  placeholder="Opportunité de projet..."
                  className={`w-full rounded-2xl border-2 bg-white/5 p-4 transition-all outline-none ${errors.subject ? "border-red-500/50 focus:border-red-500" : "focus:border-primary border-white/10"}`}
                />
                {errors.subject && (
                  <p className="ml-1 text-xs text-red-400">{errors.subject.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="ml-1 text-sm font-medium text-white/70">
                  Votre message
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={5}
                  placeholder="Décrivez votre besoin..."
                  className={`w-full resize-none rounded-2xl border-2 bg-white/5 p-4 transition-all outline-none ${errors.message ? "border-red-500/50 focus:border-red-500" : "focus:border-primary border-white/10"}`}
                />
                {errors.message && (
                  <p className="ml-1 text-xs text-red-400">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className={`flex w-full items-center justify-center gap-3 rounded-2xl py-4 font-bold tracking-widest uppercase transition-all ${isValid && !isSubmitting ? "bg-primary shadow-primary/20 text-white shadow-lg hover:scale-[1.02]" : "cursor-not-allowed bg-white/10 text-white/30"}`}
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    <Send size={18} /> Envoyer le message
                  </>
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success-message"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center space-y-6 py-12"
            >
              <div className="bg-primary/20 rounded-full p-6">
                <CheckCircle2 size={64} className="text-primary" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-3xl font-bold">Message reçu !</h3>
                <p className="text-white/60">Merci Amos reviendra vers vous rapidement.</p>
              </div>
              <button
                onClick={() => setIsSuccess(false)}
                className="text-primary text-sm font-bold hover:underline"
              >
                Renvoyer un message
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Exportation nommée pour corriger l'avertissement Fast Refresh (ESLint)
const Contact = SectionWrapper(ContactComponent, "contact");
export default Contact;
