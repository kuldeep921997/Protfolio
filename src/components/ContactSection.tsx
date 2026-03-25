import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-card border border-border p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/10 blur-[100px] rounded-full" />

          <div className="relative z-10 text-center">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Get in touch
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Let&apos;s build
              <br />
              something great.
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-4">
              Available for Full-Stack development, Frontend Architecture, and Enterprise Application
              projects.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {["Full-stack development", "Frontend architecture", "Enterprise applications"].map(
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

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="mailto:kuldeep921997@gmail.com"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity touch-manipulation"
              >
                <Mail size={16} />
                Contact Me
                <ArrowUpRight size={16} />
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Resume_Kuldeep_V12_5.pdf`}
                download="Resume_Kuldeep_V12_5.pdf"
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

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Kuldeep. Built with precision.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
