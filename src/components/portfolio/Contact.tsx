import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { useServerFn } from "@tanstack/react-start";
import { sendContactEmail } from "@/lib/api/contact.functions";
import { WhatsAppIcon } from "./WhatsAppIcon";

const ease = [0.22, 1, 0.36, 1] as const;

const socials = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/piyush-chandra-digitalmarketer/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/piyush77.___?igsh=Nmd4MndpaXVyeWl4",
    label: "Instagram",
  },
  { icon: WhatsAppIcon, href: "https://wa.me/919811970043", label: "WhatsApp" },
  { icon: Mail, href: "mailto:Piyushchandra2506@gmail.com", label: "Email" },
];

const contactDetails = [
  { icon: Mail, label: "Email", value: "Piyushchandra2506@gmail.com" },
  { icon: MapPin, label: "Location", value: "Vikaspuri, New Delhi" },
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const sendEmail = useServerFn(sendContactEmail);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);

    try {
      await sendEmail({
        data: {
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          service: String(formData.get("service") ?? ""),
          budget: String(formData.get("budget") ?? ""),
          message: String(formData.get("message") ?? ""),
        },
      });

      toast.success("Thanks! Your message has been sent.");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Sorry, the message could not be sent. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-lime focus:bg-white/[0.09]";

  return (
    <section id="contact" className="relative mx-auto max-w-[1600px] px-4 py-28">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col justify-between rounded-[1.8rem] border border-border bg-card/45 p-6 md:p-8"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-lime">Contact</p>
            <h2 className="mt-5 font-display text-5xl font-black uppercase leading-none md:text-7xl">
              Let's Work Together
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
              Share your idea, campaign, or creative requirement. I will get back with the next
              steps and a clear plan.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-lime">
                  <detail.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {detail.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{detail.value}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-colors hover:bg-lime hover:text-lime-foreground"
                >
                  <social.icon className={social.label === "WhatsApp" ? "h-6 w-6" : "h-5 w-5"} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="rounded-[1.8rem] border border-border bg-card/60 p-5 shadow-2xl md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Name
              </span>
              <input required name="name" placeholder="Your name" className={field} />
            </label>
            <label className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Email
              </span>
              <input
                required
                type="email"
                name="email"
                placeholder="you@example.com"
                className={field}
              />
            </label>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Service
              </span>
              <input name="service" placeholder="AI content, branding..." className={field} />
            </label>
            <label className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Budget
              </span>
              <input name="budget" placeholder="Project budget" className={field} />
            </label>
          </div>

          <label className="mt-4 block space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Message
            </span>
            <textarea
              required
              name="message"
              placeholder="Tell me about the project..."
              rows={7}
              className={field}
            />
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="group relative mt-5 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-lime px-6 py-4 text-sm font-semibold text-foreground transition-colors disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span className="absolute inset-0 -z-0 origin-left scale-x-0 bg-lime transition-transform duration-300 group-hover:scale-x-100" />
            <span className="relative z-10 transition-colors group-hover:text-lime-foreground">
              {submitting ? "Sending..." : "Send Message"}
            </span>
            <Send className="relative z-10 h-4 w-4 transition-colors group-hover:text-lime-foreground" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
