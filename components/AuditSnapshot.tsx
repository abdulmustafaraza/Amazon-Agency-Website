// Self-contained "audit report" card, restyled to the light design system.
// Styles stay inline so it renders correctly regardless of surrounding CSS.

import type { CSSProperties, ReactNode } from "react";

const card: CSSProperties = {
  position: "relative",
  background: "#ffffff",
  border: "1px solid #e4e6ea",
  borderRadius: 12,
  overflow: "hidden",
  maxWidth: 560,
  width: "100%",
};
const topRow: CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: 16,
  padding: "18px 20px 16px",
  borderBottom: "1px solid #e4e6ea",
};
const eyebrow: CSSProperties = {
  fontSize: 10,
  letterSpacing: "0.11em",
  textTransform: "uppercase",
  color: "#9aa0a8",
  marginBottom: 6,
  fontWeight: 500,
};
const title: CSSProperties = {
  fontSize: "0.94rem",
  fontWeight: 600,
  color: "#141519",
  letterSpacing: "-0.005em",
};
const pill: CSSProperties = {
  fontSize: 10,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#6b6f76",
  border: "1px solid #d9dce1",
  borderRadius: 999,
  padding: "5px 11px",
  whiteSpace: "nowrap",
};
const block: CSSProperties = {
  padding: "16px 20px",
  borderTop: "1px solid #e4e6ea",
};
const label: CSSProperties = {
  fontSize: 10,
  letterSpacing: "0.11em",
  textTransform: "uppercase",
  color: "#9aa0a8",
  fontWeight: 500,
  marginBottom: 10,
};
const row: CSSProperties = {
  display: "flex",
  gap: 9,
  alignItems: "flex-start",
  fontSize: "0.8rem",
  lineHeight: 1.6,
  color: "#6b6f76",
  padding: "4px 0",
};
const dot: CSSProperties = {
  flex: "0 0 auto",
  width: 4,
  height: 4,
  borderRadius: "50%",
  background: "#9aa0a8",
  marginTop: 8,
};
const bold: CSSProperties = { color: "#141519", fontWeight: 500 };

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
      <div style={topRow}>
        <div>
          <div style={eyebrow}>Anonymized marketplace audit</div>
          <div style={title}>1-page audit snapshot</div>
        </div>
        <span style={pill}>Sample data</span>
      </div>

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
