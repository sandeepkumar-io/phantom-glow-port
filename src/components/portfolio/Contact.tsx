import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { toast } from "sonner";
import heroPortrait from "@/assets/image copy.png";

const ease = [0.22, 1, 0.36, 1] as const;

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "#", label: "Email" },
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks! Your message has been sent.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  const field =
    "w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm outline-none transition-colors focus:border-lime";

  return (
    <section id="contact" className="relative mx-auto max-w-[1600px] px-4 py-28">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="font-display text-stretch text-[13vw] font-black uppercase leading-none md:text-[6.5vw]"
      >
        Let's Work Together
      </motion.h2>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="overflow-hidden rounded-[2rem] border border-border"
        >
          <img
            src={heroPortrait}
            alt="PIYUSH CHANDRA"
            loading="lazy"
            width={700}
            height={800}
            className="h-full  w-full object-cover"
          />
        </motion.div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input required name="name" placeholder="Name" className={field} />
              <input required type="email" name="email" placeholder="Email" className={field} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="service" placeholder="Service Interested" className={field} />
              <input name="budget" placeholder="Budget" className={field} />
            </div>
            <textarea required name="message" placeholder="Message" rows={5} className={field} />
            <button
              type="submit"
              disabled={submitting}
              className="group relative w-full overflow-hidden rounded-xl border-2 border-lime px-6 py-3.5 text-sm font-semibold text-foreground transition-colors disabled:opacity-60"
            >
              <span className="absolute inset-0 -z-0 origin-left scale-x-0 bg-lime transition-transform duration-300 group-hover:scale-x-100" />
              <span className="relative z-10 transition-colors group-hover:text-lime-foreground">
                {submitting ? "Sending..." : "Send Message"}
              </span>
            </button>
          </form>

          <div className="mt-8 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary transition-colors hover:bg-lime hover:text-lime-foreground"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
