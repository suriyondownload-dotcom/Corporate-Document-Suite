import { company } from "../data/company";
import { LogoBHorizontal } from "../components/LogoB";

const NAVY = "#1a2744";
const GOLD = "#c9a84c";

export function LetterheadB() {
  return (
    <div className="doc-page" style={{ background: "#fff", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      {/* Header */}
      <div style={{ background: NAVY, padding: "28px 48px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <LogoBHorizontal height={44} />
          <div style={{ textAlign: "right", fontSize: 9, color: "rgba(255,255,255,0.65)", lineHeight: 2 }}>
            <div style={{ fontWeight: 600, fontSize: 10.5, color: "#fff", marginBottom: 2 }}>{company.nameFullEN}</div>
            <div style={{ color: GOLD }}>{company.nameFullTH}</div>
            <div>{company.addressEN}</div>
            <div>Tel: {company.tel} | Email: {company.email}</div>
            <div>{company.web}</div>
          </div>
        </div>
      </div>
      <div style={{ height: 4, background: GOLD }} />

      {/* Content Area */}
      <div style={{ padding: "32px 48px", minHeight: 870 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24, fontSize: 11 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ fontWeight: 600, color: NAVY }}>เลขที่:</span>
            <span style={{ borderBottom: `1px solid ${NAVY}`, display: "inline-block", width: 160 }}>&nbsp;</span>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ fontWeight: 600, color: NAVY }}>วันที่ / Date:</span>
            <span style={{ borderBottom: `1px solid ${NAVY}`, display: "inline-block", width: 140 }}>&nbsp;</span>
          </div>
        </div>
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: NAVY, marginBottom: 4 }}>เรื่อง / Subject:</div>
          <div style={{ borderBottom: `1px solid #ccc`, paddingBottom: 4 }}>&nbsp;</div>
        </div>
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: NAVY, marginBottom: 4 }}>เรียน / To:</div>
          <div style={{ borderBottom: `1px solid #ccc`, paddingBottom: 4 }}>&nbsp;</div>
        </div>
        <div style={{ marginTop: 32 }}>
          {Array.from({ length: 21 }).map((_, i) => (
            <div key={i} style={{ borderBottom: "1px solid #ececec", height: 34 }} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 44 }}>
          <div style={{ textAlign: "center", width: 220 }}>
            <div style={{ borderBottom: `2px solid ${NAVY}`, marginBottom: 6 }}>&nbsp;</div>
            <div style={{ fontSize: 10.5, color: NAVY, fontWeight: 600 }}>ลงชื่อ / Authorized Signature</div>
            <div style={{ marginTop: 18, borderBottom: "1px solid #ccc", paddingBottom: 2 }}>&nbsp;</div>
            <div style={{ fontSize: 10, color: "#666", marginTop: 3 }}>ตำแหน่ง / Position</div>
            <div style={{ marginTop: 12, borderBottom: "1px solid #ccc", paddingBottom: 2 }}>&nbsp;</div>
            <div style={{ fontSize: 10, color: "#666", marginTop: 3 }}>วันที่ / Date</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <div style={{ height: 4, background: GOLD }} />
        <div style={{ background: NAVY, padding: "7px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.5)" }}>Tax ID: {company.taxId}</div>
          <div style={{ display: "flex", gap: 12 }}>
            {company.values.map(v => (
              <span key={v} style={{ fontSize: 7, color: GOLD, letterSpacing: "0.1em", opacity: 0.8 }}>{v}</span>
            ))}
          </div>
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.5)" }}>{company.web}</div>
        </div>
      </div>
    </div>
  );
}
