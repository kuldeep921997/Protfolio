import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-tight">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="card-base p-6 sm:p-9 lg:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[180px] bg-primary/10 blur-[100px] rounded-full" />

          <div className="relative z-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-soft mb-3">
              Get in touch
            </p>
            <h2 className="font-display text-[1.875rem] sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Let&apos;s build something great.
            </h2>
            <p className="text-[15px] text-muted-foreground max-w-lg mx-auto mb-5 leading-relaxed">
              Open to Senior Frontend Engineer roles — frontend architecture, real-time systems and
              performance work on data-intensive platforms.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-7">
              {["Frontend architecture", "Real-time systems", "Performance engineering"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs rounded-full bg-secondary text-muted-foreground border border-border"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-7">
              <a
                href="mailto:kuldeep921997@gmail.com"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity touch-manipulation"
              >
                <Mail size={16} />
                Contact Me
                <ArrowUpRight size={16} />
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Resume_Kuldeep_03_09.pdf`}
                download="Resume_Kuldeep_03_09.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors touch-manipulation"
              >
                Download Resume
              </a>
            </div>

            <div className="flex items-center justify-center gap-4">
              {[
                { icon: Github, href: "https://github.com/kuldeep921997", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/kuldeep-lodhi-1b17b9118/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:kuldeep921997@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center p-3 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all touch-manipulation"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* `.divider` sets height:1px, so it needs its own element -- applied
            to the <footer> it painted a solid band and collapsed the content
            box to 1px. */}
        <footer className="mt-8">
          <div className="divider" aria-hidden />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6 text-[12.5px] text-muted-foreground">
            <p>© {new Date().getFullYear()} Kuldeep Lodhi</p>
            <p className="text-muted-foreground/70">
              Built with React, TypeScript, Tailwind and Framer Motion
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
