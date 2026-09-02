import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight, MapPin } from "lucide-react";
import { useAppSelector } from "@/app/hooks";

/**
 * Hero.
 *
 * Rebuilt around three problems in the previous version:
 *   1. The h1 was a job title, so a visitor read "FULL-STACK MERN ENGINEER"
 *      before they read the name. On a personal site the name is the brand.
 *   2. A ~120px headline plus `min-h-screen` pushed every piece of evidence
 *      below the fold. The headline is now fluid and capped, and the section
 *      sizes to its content.
 *   3. The right half of the most valuable screen on the site was empty. It
 *      now holds a status panel that demonstrates the real-time work being
 *      claimed -- static values, no backend, but it reads as a product.
 */

const PROOF_IDS = ["users", "performance", "transactions"] as const;

const CREDENTIALS = [
  "React · TypeScript · Redux",
  "Kafka · SSE · PostgreSQL",
  "Design systems & performance",
];

const SOCIALS = [
  { icon: Github, href: "https://github.com/kuldeep921997", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kuldeep-lodhi-1b17b9118/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:kuldeep921997@gmail.com", label: "Email" },
];

const PANEL_ROWS = [
  { label: "Stores reporting", value: "1,900+" },
  { label: "Daily active users", value: "12,000+" },
  { label: "Kafka topics consumed", value: "15" },
  { label: "API success rate", value: "99.68%", tone: "accent" as const },
];

const HeroSection = () => {
  const metrics = useAppSelector((state) => state.profile.metrics);

  const proof = PROOF_IDS.map((id) => metrics.find((m) => m.id === id)).filter(
    (m): m is NonNullable<typeof m> => Boolean(m)
  );

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24"
    >
      <div className="absolute inset-0 hero-grid pointer-events-none" aria-hidden />
      <div
        className="absolute -top-40 -left-32 w-[38rem] h-[38rem] rounded-full bg-primary/10 blur-[140px] pointer-events-none"
        aria-hidden
      />

      <div className="relative shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ---------------- Left: identity ---------------- */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-soft mb-4"
            >
              Kuldeep Lodhi
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-display font-extrabold tracking-tight leading-[1.04] mb-5
                         text-[2.25rem] sm:text-5xl lg:text-[3.5rem]"
            >
              <span className="text-foreground">Senior Frontend Engineer building </span>
              <span className="text-gradient-hero">real-time systems</span>
              <span className="text-foreground"> at retail scale.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-[15px] sm:text-base text-muted-foreground leading-relaxed measure mb-7"
            >
              Seven years building data-intensive enterprise platforms across retail, logistics and
              fintech. Currently SDE-2 at Reliance Jio, owning the frontend architecture of an
              inventory platform that serves 12,000+ daily users across 1,900+ stores.
            </motion.p>

            {/* Proof, above the fold */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="flex flex-wrap gap-x-10 gap-y-5 mb-8"
            >
              {proof.map((m) => (
                <div key={m.id}>
                  <p className="num font-display text-2xl sm:text-[1.75rem] font-bold text-foreground leading-none">
                    {m.value}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.09em] text-muted-foreground mt-1.5">
                    {m.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-wrap items-center gap-3 mb-7"
            >
              <a
                href="#projects"
                className="group min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-full
                           bg-primary text-primary-foreground font-medium text-sm
                           hover:opacity-90 transition-opacity touch-manipulation"
              >
                View work
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Resume_Kuldeep_03_09.pdf`}
                download="Resume_Kuldeep_03_09.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3 rounded-full
                           border border-border text-foreground font-medium text-sm
                           hover:bg-secondary hover:border-border/80 transition-colors touch-manipulation"
              >
                <Download size={16} />
                Résumé
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.34 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-3"
            >
              <span className="inline-flex items-center gap-2 text-[13px] text-muted-foreground">
                <MapPin size={14} className="text-primary-soft shrink-0" />
                Mumbai · open to Bengaluru / Hyderabad
              </span>
              <span className="hidden sm:block w-px h-4 bg-border" aria-hidden />
              <div className="flex items-center gap-2">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full
                               border border-border text-muted-foreground
                               hover:text-foreground hover:border-primary/50 transition-colors touch-manipulation"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ---------------- Right: status panel ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="card-elevated overflow-hidden shadow-[0_24px_60px_-24px_rgb(0_0_0/0.6)]">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card">
                <span className="w-2.5 h-2.5 rounded-full bg-border" aria-hidden />
                <span className="w-2.5 h-2.5 rounded-full bg-border" aria-hidden />
                <span className="w-2.5 h-2.5 rounded-full bg-border" aria-hidden />
                <span className="ml-2 text-[11px] font-medium text-muted-foreground tracking-wide">
                  Inventory platform · overview
                </span>
                <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-accent">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden />
                  Live
                </span>
              </div>

              <div className="p-4 sm:p-5">
                <dl className="space-y-0">
                  {PANEL_ROWS.map((row, i) => (
                    <div
                      key={row.label}
                      className={`flex items-center justify-between py-3 ${
                        i !== PANEL_ROWS.length - 1 ? "border-b border-border/60" : ""
                      }`}
                    >
                      <dt className="text-[13px] text-muted-foreground">{row.label}</dt>
                      <dd
                        className={`num text-sm font-semibold ${
                          row.tone === "accent" ? "text-accent" : "text-foreground"
                        }`}
                      >
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 pt-5 border-t border-border/60 space-y-4">
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-[11px] uppercase tracking-[0.09em] text-muted-foreground">
                        Dashboard time-to-interactive
                      </span>
                      <span className="num text-[13px] font-semibold text-accent">8s → 3s</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: "100%" }}
                        animate={{ width: "37.5%" }}
                        transition={{ duration: 1.1, delay: 0.9, ease: "easeOut" }}
                        className="h-full rounded-full bg-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-[11px] uppercase tracking-[0.09em] text-muted-foreground">
                        Stock movement visibility
                      </span>
                      <span className="num text-[13px] font-semibold text-foreground">
                        15 min → &lt;5s
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: "100%" }}
                        animate={{ width: "8%" }}
                        transition={{ duration: 1.1, delay: 1.05, ease: "easeOut" }}
                        className="h-full rounded-full bg-primary"
                      />
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-[11px] leading-relaxed text-muted-foreground/80">
                  Figures from the Reliance Jio inventory platform. Illustrative panel — not a live
                  data feed.
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {CREDENTIALS.map((c) => (
                <span
                  key={c}
                  className="px-3 py-1.5 text-[11.5px] rounded-full border border-border text-muted-foreground bg-card/60"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
