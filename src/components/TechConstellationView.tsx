import { useRef, useEffect, useState, useCallback } from "react";
import type { TechCategory, TechArchitectureData } from "@/types";

interface TechConstellationViewProps {
  data: TechArchitectureData;
  activeCategory: TechCategory;
  activeCategoryIndex: number;
}

interface Node {
  x: number;
  y: number;
  r: number;
  label: string;
  sub: string;
  color: string;
  isCenter: boolean;
  angle: number;
  orbitR: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  skillIdx?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  color: string;
  life: number;
}

const TechConstellationView = ({
  activeCategory,
}: TechConstellationViewProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<{ show: boolean; x: number; y: number; name: string; sub: string; color: string }>({
    show: false,
    x: 0,
    y: 0,
    name: "",
    sub: "",
    color: "",
  });
  const nodesRef = useRef<Node[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const hoveredNodeRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const animRef = useRef<number>(0);
  const dprRef = useRef(1);

  const buildNodes = useCallback(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = dprRef.current || 1;
      const W = canvas.width;
      const H = canvas.height;
      const logicalW = W / dpr;
      const logicalH = H / dpr;
      const cx = logicalW / 2;
      const cy = logicalH / 2;
      const cat = activeCategory;

      const nodes: Node[] = [
        {
          x: cx,
          y: cy,
          r: 38,
          label: cat.label,
          sub: `${cat.skills.length} skills`,
          color: cat.color,
          isCenter: true,
          angle: 0,
          orbitR: 0,
          targetX: cx,
          targetY: cy,
          vx: 0,
          vy: 0,
        },
      ];

      const count = cat.skills.length;
      const ring1Count = Math.min(count, 6);
      const ring2Count = count - ring1Count;
      const orbit1 = Math.min(logicalW, logicalH) * 0.26;
      const orbit2 = Math.min(logicalW, logicalH) * 0.40;

      for (let i = 0; i < ring1Count; i++) {
        const angle = (i / ring1Count) * Math.PI * 2 - Math.PI / 2;
        nodes.push({
          x: cx + Math.cos(angle) * orbit1,
          y: cy + Math.sin(angle) * orbit1,
          r: 22,
          label: cat.skills[i].name,
          sub: cat.skills[i].sub,
          color: cat.color,
          isCenter: false,
          angle,
          orbitR: orbit1,
          targetX: cx + Math.cos(angle) * orbit1,
          targetY: cy + Math.sin(angle) * orbit1,
          vx: 0,
          vy: 0,
          skillIdx: i,
        });
      }

      for (let i = 0; i < ring2Count; i++) {
        const angle = (i / ring2Count) * Math.PI * 2 - Math.PI / 3;
        const si = ring1Count + i;
        nodes.push({
          x: cx + Math.cos(angle) * orbit2,
          y: cy + Math.sin(angle) * orbit2,
          r: 18,
          label: cat.skills[si].name,
          sub: cat.skills[si].sub,
          color: cat.color,
          isCenter: false,
          angle,
          orbitR: orbit2,
          targetX: cx + Math.cos(angle) * orbit2,
          targetY: cy + Math.sin(angle) * orbit2,
          vx: 0,
          vy: 0,
          skillIdx: si,
        });
      }

      nodesRef.current = nodes;
    },
    [activeCategory]
  );

  const spawnParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = dprRef.current || 1;
    const W = canvas.width;
    const H = canvas.height;
    const cx = (W / dpr) / 2;
    const cy = (H / dpr) / 2;
    const particles: Particle[] = [];
    for (let i = 0; i < 18; i++) {
      particles.push({
        x: cx + (Math.random() - 0.5) * 80,
        y: cy + (Math.random() - 0.5) * 80,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        r: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
        color: activeCategory.color,
        life: 1,
      });
    }
    particlesRef.current = particles;
  }, [activeCategory.color]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      dprRef.current = dpr;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
      spawnParticles();
    };

    resize();
    buildNodes();
    spawnParticles();
    window.addEventListener("resize", resize);

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      const dpr = dprRef.current || 1;
      const logicalW = W / dpr;
      const logicalH = H / dpr;
      const cx = logicalW / 2;
      const cy = logicalH / 2;
      ctx.clearRect(0, 0, W, H);

      const cat = activeCategory;
      const nodes = nodesRef.current;
      const hoveredNode = hoveredNodeRef.current;

      timeRef.current += 0.008;
      const time = timeRef.current;

      [0.26, 0.40].forEach((r) => {
        const orbitR = Math.min(logicalW, logicalH) * r;
        ctx.beginPath();
        ctx.arc(cx, cy, orbitR, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,255,255,0.04)";
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 8]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      nodes.forEach((n, i) => {
        if (i === 0) return;
        n.angle += 0.0015 * (n.orbitR > Math.min(logicalW, logicalH) * 0.33 ? 0.7 : 1);
        n.targetX = cx + Math.cos(n.angle) * n.orbitR;
        n.targetY = cy + Math.sin(n.angle) * n.orbitR;
        n.x += (n.targetX - n.x) * 0.1;
        n.y += (n.targetY - n.y) * 0.1;
      });

      nodes.forEach((n, i) => {
        if (i === 0) return;
        const center = nodes[0];
        const alpha = hoveredNode === i ? 0.35 : 0.1;
        ctx.beginPath();
        ctx.moveTo(center.x, center.y);
        ctx.lineTo(n.x, n.y);
        const grad = ctx.createLinearGradient(center.x, center.y, n.x, n.y);
        grad.addColorStop(0, cat.color + "00");
        grad.addColorStop(0.5, cat.color + Math.round(alpha * 255).toString(16).padStart(2, "0"));
        grad.addColorStop(1, cat.color + "00");
        ctx.strokeStyle = grad;
        ctx.lineWidth = hoveredNode === i ? 1.5 : 0.8;
        ctx.stroke();

        const t = ((time * 0.4 + i * 0.3) % 1);
        const tx = center.x + (n.x - center.x) * t;
        const ty = center.y + (n.y - center.y) * t;
        ctx.beginPath();
        ctx.arc(tx, ty, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = cat.color + "99";
        ctx.fill();
      });

      let particles = particlesRef.current;
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.012;
        p.vy -= 0.04;
        if (p.life > 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2);
          ctx.fillStyle =
            p.color + Math.round(p.alpha * p.life * 255).toString(16).padStart(2, "0");
          ctx.fill();
        }
      });
      particlesRef.current = particles.filter((p) => p.life > 0);

      nodes.forEach((n, i) => {
        const isHov = hoveredNode === i;
        const glow = isHov || n.isCenter;

        if (glow) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + (n.isCenter ? 16 : 10), 0, Math.PI * 2);
          const glowGrad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r + 16);
          glowGrad.addColorStop(0, cat.color + "22");
          glowGrad.addColorStop(1, cat.color + "00");
          ctx.fillStyle = glowGrad;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.strokeStyle = cat.color + (n.isCenter ? "cc" : isHov ? "aa" : "55");
        ctx.lineWidth = n.isCenter ? 1.5 : 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.isCenter ? cat.color + "22" : isHov ? cat.color + "1a" : "#0a0a0a";
        ctx.fill();

        if (n.isCenter) {
          const pulse = Math.sin(time * 2) * 0.5 + 0.5;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + 6 + pulse * 8, 0, Math.PI * 2);
          ctx.strokeStyle =
            cat.color + Math.round(pulse * 0.15 * 255).toString(16).padStart(2, "0");
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        ctx.fillStyle = n.isCenter ? cat.color : isHov ? "#f0ede8" : "rgba(240,237,232,0.7)";
        ctx.font = `${n.isCenter ? "500" : "400"} ${n.isCenter ? "13px" : "11px"} "Inter", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        if (n.isCenter) {
          ctx.fillText(n.label, n.x, n.y - 5);
          ctx.fillStyle = "rgba(240,237,232,0.35)";
          ctx.font = '300 10px "Inter", sans-serif';
          ctx.fillText(n.sub, n.x, n.y + 8);
        } else {
          const words = n.label.split(" ");
          if (words.length > 1 && n.label.length > 9) {
            const mid = Math.ceil(words.length / 2);
            ctx.fillText(words.slice(0, mid).join(" "), n.x, n.y - 5);
            ctx.fillText(words.slice(mid).join(" "), n.x, n.y + 6);
          } else {
            ctx.fillText(n.label, n.x, n.y);
          }
        }
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [activeCategory, buildNodes, spawnParticles]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    handlePointMove(e.clientX, e.clientY);
  };

  const handleMouseLeave = () => {
    hoveredNodeRef.current = null;
    setTooltip((t) => ({ ...t, show: false }));
  };

  const handlePointMove = (clientX: number, clientY: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const mx = clientX - rect.left;
    const my = clientY - rect.top;
    const nodes = nodesRef.current;
    let found: number | null = null;
    nodes.forEach((n, i) => {
      const dx = mx - n.x;
      const dy = my - n.y;
      if (Math.sqrt(dx * dx + dy * dy) < n.r + 8) found = i;
    });
    hoveredNodeRef.current = found;
    if (found !== null && !nodes[found].isCenter) {
      const n = nodes[found];
      setTooltip({
        show: true,
        x: clientX - rect.left + 14,
        y: clientY - rect.top - 36,
        name: n.label,
        sub: n.sub,
        color: n.color,
      });
    } else {
      setTooltip((t) => ({ ...t, show: false }));
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (touch) handlePointMove(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    hoveredNodeRef.current = null;
    setTooltip((t) => ({ ...t, show: false }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 md:gap-8 items-stretch">
      {/* Left: Details (40%) — on mobile shown after constellation via order */}
      <div className="flex flex-col min-w-0 order-2 md:order-1">
        <div className="flex gap-4 sm:gap-6">
          <span
            className="font-display text-4xl sm:text-5xl font-extrabold tracking-tighter flex-shrink-0 w-14 leading-none"
            style={{ color: `${activeCategory.color}26` }}
          >
            {activeCategory.num}
          </span>
          <div className="flex-1 pt-1 min-w-0">
            <h3
              className="font-display text-base sm:text-lg font-bold mb-1"
              style={{ color: activeCategory.color }}
            >
              {activeCategory.label}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
              {activeCategory.desc}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {activeCategory.skills.map((s) => (
                <span
                  key={s.name}
                  className="text-[11px] px-2.5 py-1 rounded border"
                  style={{
                    borderColor: `${activeCategory.color}38`,
                    color: `${activeCategory.color}cc`,
                    backgroundColor: `${activeCategory.color}0d`,
                  }}
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right: Constellation (60%) — on mobile shown first via order */}
      <div
        ref={containerRef}
        className="relative w-full rounded-xl overflow-hidden bg-[#0a0a0a] min-h-[400px] md:-ml-12 order-1 md:order-2"
        style={{ height: "min(680px, 88vmin)", minHeight: "400px" }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full cursor-default touch-none"
          style={{ width: "100%", height: "100%" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        />
        {tooltip.show && (
          <div
            className="pointer-events-none absolute z-10 rounded-lg border px-3 py-2 text-xs font-medium text-[#f0ede8] bg-[#161616] shadow-lg transition-opacity"
            style={{
              left: Math.min(tooltip.x, (containerRef.current?.offsetWidth ?? 300) - 160),
              top: tooltip.y,
              borderColor: `${tooltip.color}4d`,
            }}
          >
            <div>{tooltip.name}</div>
            <div className="text-[10px] text-[rgba(240,237,232,0.45)] font-light mt-0.5">
              {tooltip.sub}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechConstellationView;
