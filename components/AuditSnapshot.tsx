// Self-contained dark "audit report" card. All styles are inline, so it renders
// correctly regardless of the surrounding CSS setup.

import type { CSSProperties, ReactNode } from "react";

/* ---------- inline styles (declared before `blocks` so they're initialized
   before the JSX in `blocks` references them) ---------- */
const card: CSSProperties = {
  position: "relative",
  background: "linear-gradient(180deg, rgba(20,20,46,0.9), rgba(10,10,26,0.9))",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 18,
  overflow: "hidden",
  maxWidth: 560,
  width: "100%",
};
const accent: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: 3,
  background: "linear-gradient(90deg,#10C8FF 0%,#8A3FFC 50%,#FF3CBF 100%)",
};
const topRow: CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: 16,
  padding: "24px 26px 18px",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
};
const eyebrow: CSSProperties = {
  fontSize: 11,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#6f7596",
  marginBottom: 8,
  fontWeight: 700,
};
const title: CSSProperties = {
  fontSize: 19,
  fontWeight: 800,
  color: "#fff",
  letterSpacing: "-0.01em",
};
const pill: CSSProperties = {
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
  fontSize: 10,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#10C8FF",
  border: "1px solid rgba(16,200,255,0.4)",
  borderRadius: 999,
  padding: "6px 12px",
  whiteSpace: "nowrap",
};
const block: CSSProperties = {
  padding: "18px 26px",
  borderTop: "1px solid rgba(255,255,255,0.05)",
};
const label: CSSProperties = {
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
  fontSize: 11,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#10C8FF",
  marginBottom: 12,
};
const row: CSSProperties = {
  display: "flex",
  gap: 10,
  alignItems: "flex-start",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
  fontSize: 13,
  lineHeight: 1.55,
  color: "#c2c7df",
  padding: "5px 0",
};
const dot: CSSProperties = {
  flex: "0 0 auto",
  width: 5,
  height: 5,
  borderRadius: "50%",
  background: "#6D35FF",
  marginTop: 8,
};
const bold: CSSProperties = { color: "#fff", fontWeight: 500 };

const blocks: { label: string; rows: ReactNode[] }[] = [
  {
    label: "Keyword opportunities",
    rows: [
      <>
        <b style={bold}>&quot;vitamin c serum amazon&quot;</b> — High search
        demand / moderate competition
      </>,
      <>
        <b style={bold}>&quot;organic face oil&quot;</b> — Medium demand /
        fragmented listings
      </>,
      <>
        <b style={bold}>&quot;hydrating toner&quot;</b> — Medium demand / weak
        branded presence
      </>,
    ],
  },
  {
    label: "Competitor snapshot",
    rows: [
      "3 competing listings with stronger review velocity",
      "2 generic sellers ranking on branded-adjacent terms",
      "Sponsored placement activity in top search results",
    ],
  },
  {
    label: "Brand registry status",
    rows: [
      "Official brand presence not clearly visible in results",
      "Brand Registry should be confirmed before expansion",
    ],
  },
  {
    label: "Recommended next step",
    rows: [
      "Confirm brand ownership status",
      "Map top 20 Amazon search terms",
      "Review unauthorized or generic listing activity",
      "Prepare controlled launch or cleanup plan",
    ],
  },
];

export default function AuditSnapshot() {
  return (
    <div style={card}>
      {/* gradient top accent */}
      <div style={accent} />

      {/* header */}
      <div style={topRow}>
        <div>
          <div style={eyebrow}>Anonymized marketplace audit</div>
          <div style={title}>1-page audit snapshot</div>
        </div>
        <span style={pill}>Sample data</span>
      </div>

      {/* blocks */}
      {blocks.map((b, i) => (
        <div
          key={b.label}
          style={{ ...block, borderTop: i === 0 ? "none" : block.borderTop }}
        >
          <div style={label}>{b.label}</div>
          {b.rows.map((r, j) => (
            <div key={j} style={row}>
              <span style={dot} />
              <span>{r}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
