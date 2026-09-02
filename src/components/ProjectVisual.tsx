import { motion } from "framer-motion";

/**
 * Stand-in for a real product screenshot.
 *
 * The previous right-hand panel was a dashed empty box with a generic icon and
 * three words. On a frontend portfolio that is the most damaging element on the
 * page: it sits exactly where a hiring manager expects to see something you
 * built, and reads as "nothing to show".
 *
 * This renders a credible interface skeleton per project type -- a dense data
 * grid, a camera/zone board, a workflow queue -- so the panel communicates
 * shape and density rather than emptiness.
 *
 * REPLACE THIS. A redacted screenshot of the real portal beats it by a mile.
 * Drop images in public/shots/ and swap the `shot` prop for an <img>. Keep the
 * browser chrome wrapper -- it is what makes a screenshot read as a product.
 */

type Variant = "grid" | "zones" | "queue" | "chart";

const bar = "rounded-[3px]";

function GridShot() {
  const rows = [
    ["w-full", "w-3/4", "accent", "w-1/2"],
    ["w-5/6", "w-full", "", "w-2/3"],
    ["w-full", "w-1/2", "accent", "w-3/4"],
    ["w-2/3", "w-5/6", "primary", "w-1/2"],
    ["w-full", "w-3/4", "", "w-5/6"],
    ["w-4/5", "w-full", "accent", "w-1/2"],
  ];
  return (
    <div className="space-y-2.5">
      <div className="grid grid-cols-[1.7fr_1fr_.9fr_.8fr] gap-2.5">
        {["w-full", "w-full", "w-full", "w-full"].map((w, i) => (
          <span key={i} className={`h-2 ${bar} bg-muted-foreground/25 ${w}`} />
        ))}
      </div>
      {rows.map((row, r) => (
        <div key={r} className="grid grid-cols-[1.7fr_1fr_.9fr_.8fr] gap-2.5 items-center">
          {row.map((cell, c) => {
            const tone =
              cell === "accent"
                ? "bg-accent/55"
                : cell === "primary"
                ? "bg-primary/55"
                : "bg-muted-foreground/[0.12]";
            const width = cell === "accent" || cell === "primary" ? "w-2/3" : cell;
            return <span key={c} className={`h-2 ${bar} ${tone} ${width}`} />;
          })}
        </div>
      ))}
    </div>
  );
}

function ZonesShot() {
  const cells = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const active = new Set([1, 4, 7, 10]);
  const alert = new Set([5]);
  return (
    <div className="grid grid-cols-4 gap-2.5">
      {cells.map((c) => (
        <div
          key={c}
          className={`aspect-[4/3] rounded-md border ${
            alert.has(c)
              ? "border-destructive/60 bg-destructive/15"
              : active.has(c)
              ? "border-accent/50 bg-accent/[0.12]"
              : "border-border bg-muted-foreground/[0.06]"
          }`}
        >
          <div className="h-full w-full flex items-end p-1.5">
            <span
              className={`h-1 ${bar} ${
                alert.has(c)
                  ? "w-3/4 bg-destructive/70"
                  : active.has(c)
                  ? "w-1/2 bg-accent/70"
                  : "w-1/3 bg-muted-foreground/25"
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function QueueShot() {
  const rows = [
    { w: "w-full", state: "accent" },
    { w: "w-5/6", state: "primary" },
    { w: "w-full", state: "" },
    { w: "w-3/4", state: "accent" },
    { w: "w-full", state: "" },
  ];
  return (
    <div className="space-y-2.5">
      {rows.map((r, i) => (
        <div key={i} className="flex items-center gap-3">
          <span
            className={`w-6 h-6 rounded-md shrink-0 ${
              r.state === "accent"
                ? "bg-accent/25"
                : r.state === "primary"
                ? "bg-primary/25"
                : "bg-muted-foreground/10"
            }`}
          />
          <div className="flex-1 space-y-1.5">
            <span className={`block h-2 ${bar} bg-muted-foreground/20 ${r.w}`} />
            <span className={`block h-1.5 ${bar} bg-muted-foreground/10 w-1/2`} />
          </div>
          <span
            className={`h-2 w-10 ${bar} shrink-0 ${
              r.state === "accent"
                ? "bg-accent/50"
                : r.state === "primary"
                ? "bg-primary/50"
                : "bg-muted-foreground/[0.12]"
            }`}
          />
        </div>
      ))}
    </div>
  );
}

function ChartShot() {
  const bars = [42, 68, 55, 82, 61, 94, 73, 88, 66, 79];
  return (
    <div className="flex items-end gap-2 h-[132px]">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.045, ease: "easeOut" }}
          className={`flex-1 rounded-t-[3px] ${
            i === 5 ? "bg-primary/70" : "bg-muted-foreground/[0.18]"
          }`}
        />
      ))}
    </div>
  );
}

const VARIANTS: Record<Variant, () => JSX.Element> = {
  grid: GridShot,
  zones: ZonesShot,
  queue: QueueShot,
  chart: ChartShot,
};

export default function ProjectVisual({
  variant = "grid",
  caption,
}: {
  variant?: Variant;
  caption?: string;
}) {
  const Shot = VARIANTS[variant] ?? GridShot;

  return (
    // Purely decorative: a pile of empty spans has nothing to announce.
    <div className="card-elevated overflow-hidden" aria-hidden="true">
      <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-border bg-card">
        <span className="w-2 h-2 rounded-full bg-border" aria-hidden />
        <span className="w-2 h-2 rounded-full bg-border" aria-hidden />
        <span className="w-2 h-2 rounded-full bg-border" aria-hidden />
        {caption && (
          <span className="ml-2 text-[10.5px] font-medium text-muted-foreground truncate">
            {caption}
          </span>
        )}
      </div>
      <div className="p-4">
        <Shot />
      </div>
    </div>
  );
}
