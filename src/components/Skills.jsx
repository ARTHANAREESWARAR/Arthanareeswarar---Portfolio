import { motion } from "framer-motion";
import { fadeUp, viewportSettings } from "../animations/variants";

const row1Skills = [
  { label: "Python", color: "#3776ab", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3C9 3 7 5 7 8v2h5v1H6C4.5 11 3 12.5 3 14v3c0 1.5 1.5 3 3 3h1v-2H6c-.5 0-1-.5-1-1v-3c0-.5.5-1 1-1h6v-2H7V8c0-1 .5-2 2-2h1.5c1.5 0 2 1 2 2v.5h2V8c0-2-1.5-5-3-5H12Z" stroke="#3776ab" stroke-width="1.2"/><circle cx="9.5" cy="5.5" r=".8" fill="#ffca28"/></svg>` },
  { label: "Java", color: "#f89820", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#f89820"/><text x="12" y="15" font-family="monospace" font-weight="900" font-size="6" fill="white" text-anchor="middle">JAVA</text></svg>` },
  { label: "Machine Learning", color: "#ff4b4b", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#ff4b4b"/><text x="12" y="15" font-family="monospace" font-weight="900" font-size="7" fill="white" text-anchor="middle">ML</text></svg>` },
  { label: "Deep Learning", color: "#7148fc", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#7148fc"/><text x="12" y="15" font-family="monospace" font-weight="900" font-size="7" fill="white" text-anchor="middle">DL</text></svg>` },
  { label: "NLP", color: "#1d4ed8", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#1d4ed8"/><text x="12" y="15" font-family="monospace" font-weight="900" font-size="7" fill="white" text-anchor="middle">NLP</text></svg>` },
  { label: "Gen AI & LLM", color: "#f43f5e", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#f43f5e"/><text x="12" y="15" font-family="monospace" font-weight="900" font-size="6" fill="white" text-anchor="middle">GEN AI</text></svg>` },
  { label: "Prompt Eng", color: "#eab308", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#eab308"/><text x="12" y="15" font-family="monospace" font-weight="900" font-size="6" fill="white" text-anchor="middle">PRMPT</text></svg>` },
  { label: "RAG", color: "#22c55e", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#22c55e"/><text x="12" y="15" font-family="monospace" font-weight="900" font-size="7" fill="white" text-anchor="middle">RAG</text></svg>` },
  { label: "AI Agents", color: "#14b8a6", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#14b8a6"/><text x="12" y="15" font-family="monospace" font-weight="900" font-size="6" fill="white" text-anchor="middle">AGENT</text></svg>` },
  { label: "LangChain", color: "#22d3ee", svg: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 8l4 4-4 4M21 8l-4 4 4 4M8 3l4 4-4 4m8-8l-4 4 4 4" stroke="#22d3ee" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="2" stroke="#22d3ee" stroke-width="1.4"/></svg>` },
  { label: "LangGraph", color: "#22d3ee", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#22d3ee"/><text x="12" y="15" font-family="monospace" font-weight="900" font-size="5" fill="black" text-anchor="middle">L-GRAPH</text></svg>` },
];

const row2Skills = [
  { label: "OpenAI API", color: "#10a37f", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#10a37f"/><text x="12" y="15" font-family="monospace" font-weight="900" font-size="6" fill="white" text-anchor="middle">OPENAI</text></svg>` },
  { label: "Embeddings", color: "#8b5cf6", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#8b5cf6"/><text x="12" y="15" font-family="monospace" font-weight="900" font-size="6" fill="white" text-anchor="middle">EMBED</text></svg>` },
  { label: "Feature Eng", color: "#f97316", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#f97316"/><text x="12" y="15" font-family="monospace" font-weight="900" font-size="6" fill="white" text-anchor="middle">FEAT</text></svg>` },
  { label: "Model Train", color: "#ec4899", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#ec4899"/><text x="12" y="15" font-family="monospace" font-weight="900" font-size="6" fill="white" text-anchor="middle">TRAIN</text></svg>` },
  { label: "Comp Vision", color: "#3b82f6", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#3b82f6"/><text x="12" y="15" font-family="monospace" font-weight="900" font-size="7" fill="white" text-anchor="middle">CV</text></svg>` },
  { label: "Streamlit", color: "#ff4b4b", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#ff4b4b"/><text x="12" y="15" font-family="monospace" font-weight="900" font-size="6" fill="white" text-anchor="middle">ST</text></svg>` },
  { label: "Pandas/NumPy", color: "#150458", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#150458"/><text x="12" y="15" font-family="monospace" font-weight="900" font-size="6" fill="white" text-anchor="middle">PD/NP</text></svg>` },
  { label: "Git & GitHub", color: "#f05032", svg: `<svg viewBox="0 0 24 24" fill="none"><circle cx="18" cy="6" r="2.5" stroke="#f05032" stroke-width="1.4"/><circle cx="6" cy="18" r="2.5" stroke="#f05032" stroke-width="1.4"/><circle cx="6" cy="9" r="2.5" stroke="#f05032" stroke-width="1.4"/><path d="M8.5 9H15a3 3 0 0 1 3 3v1M6 11.5v4" stroke="#f05032" stroke-width="1.4" stroke-linecap="round"/></svg>` },
  { label: "Azure Blob", color: "#0078d4", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#0078d4"/><text x="12" y="15" font-family="monospace" font-weight="900" font-size="6" fill="white" text-anchor="middle">AZURE</text></svg>` },
  { label: "Deployment", color: "#4ade80", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#4ade80"/><text x="12" y="15" font-family="monospace" font-weight="900" font-size="6" fill="black" text-anchor="middle">DEPLOY</text></svg>` },
];

function SkillPill({ label, color, svg }) {
  return (
    <div className="skill-pill-item flex-shrink-0 flex flex-col items-center gap-3 cursor-default group mx-4">
      <div
        className="w-[72px] h-[72px] rounded-full flex items-center justify-center border transition-all duration-300 relative"
        style={{
          background: "rgba(255,255,255,0.03)",
          borderColor: "rgba(255,255,255,0.07)",
        }}
      >
        <span dangerouslySetInnerHTML={{ __html: svg }} className="w-9 h-9 flex items-center justify-center [&_svg]:w-full [&_svg]:h-full" />
      </div>
      <span
        className="font-mono text-[11px] tracking-wider whitespace-nowrap transition-colors duration-300"
        style={{ color: "rgba(232,234,240,0.35)", letterSpacing: "0.06em" }}
      >
        {label}
      </span>
      <style>{`
        .skill-pill-item:hover > div:first-child {
          border-color: rgba(34,211,238,0.45) !important;
          background: rgba(34,211,238,0.07) !important;
          box-shadow: 0 0 28px rgba(34,211,238,0.18), inset 0 0 14px rgba(34,211,238,0.05);
        }
        .skill-pill-item:hover span {
          color: #22d3ee !important;
        }
        .skill-pill-item {
          transform: translateY(0);
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .skill-pill-item:hover {
          transform: translateY(-6px);
        }
      `}</style>
    </div>
  );
}

function MarqueeRow({ skills, direction = "left", speed = 40 }) {
  const doubled = [...skills, ...skills];
  const animX = direction === "left"
    ? { x: ["0%", "-50%"] }
    : { x: ["-50%", "0%"] };

  return (
    <div className="overflow-hidden py-2 relative">
      <motion.div
        className="flex w-max"
        animate={animX}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {doubled.map((skill, i) => (
          <SkillPill key={`${skill.label}-${i}`} {...skill} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-8 mb-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp}
        >
          <h2
            style={{
              margin: 0,
              lineHeight: 0.88,
              letterSpacing: "-0.05em",
              display: "flex",
              alignItems: "baseline",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
                fontWeight: 900,
                color: "#e8eaf0",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              My
            </span>
            <span
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
                fontWeight: 800,
                fontStyle: "italic",
                color: "transparent",
                WebkitTextStroke: "1px rgba(232,234,240,0.2)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Skills.
            </span>
          </h2>
          {/* Divider */}
          <div
            style={{
              marginTop: "1.5rem",
              height: 1,
              background: "linear-gradient(to right, rgba(129,140,248,0.35), rgba(34,211,238,0.15), transparent)",
            }}
          />
        </motion.div>
      </div>

      {/* Full-bleed marquee wrapper */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={fadeUp}
        className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #07080c 30%, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
          style={{ background: "linear-gradient(270deg, #07080c 30%, transparent)" }} />

        {/* Row 1 — Left */}
        <MarqueeRow skills={row1Skills} direction="left" speed={45} />

        {/* Row 2 — Right */}
        <MarqueeRow skills={row2Skills} direction="right" speed={50} />
      </motion.div>
    </section>
  );
}