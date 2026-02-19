import { z } from "zod";

export const contactSchema = z.object({
  username: z.string().max(0, { message: "Bot detected" }).optional(),
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Format d'email invalide"),
  // Ajout du téléphone : optionnel ou avec format spécifique
  phone: z
    .string()
    .regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, "Numéro de téléphone invalide")
    .optional()
    .or(z.literal("")),
  subject: z.string().min(5, "Le sujet doit contenir au moins 5 caractères"),
  message: z.string().min(20, "Le message doit contenir au moins 20 caractères"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
