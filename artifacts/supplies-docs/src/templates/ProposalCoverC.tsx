import { company } from "../data/company";
import { LogoC } from "../components/LogoC";

const NAVY = "#1a2744";
const RED = "#cc1f1f";
const WH = "#fff";

export function ProposalCoverC() {
  return (
    <div className="doc-page" style={{ background: WH, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      {/* Top accent */}
      <div style={{ height: 8, background: `linear-gradient(90deg, ${NAVY} 60%, ${RED} 100%)` }} />

      {/* Header */}
      <div style={{ padding: "32px 48px 0", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <LogoC size={52} />
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: NAVY, letterSpacing: "0.12em" }}>THE SUPPLIES</div>
            <div style={{ fontSize: 9.5, color: RED, letterSpacing: "0.28em", fontWeight: 600 }}>ELEVATOR &amp; ESCALATOR</div>
          </div>
        </div>
        <div style={{ textAlign: "right", fontSize: 8.5, color: "#888", lineHeight: 1.9 }}>
          <div>{company.nameFullTH}</div>
          <div>{company.tel} | {company.email}</div>
          <div>{company.web}</div>
        </div>
      </div>

      {/* Title block */}
      <div style={{ padding: "36px 48px 28px", borderBottom: `1px solid #e8e8e8` }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 16 }}>
          <div>
            <div style={{ fontSize: 9.5, letterSpacing: "0.3em", color: "#aaa", marginBottom: 8 }}>PROPOSAL DOCUMENT</div>
            <div style={{ fontSize: 44, fontWeight: 900, color: NAVY, lineHeight: 0.95, letterSpacing: "-0.01em" }}>PROJECT<br/>PROPOSAL</div>
            <div style={{ fontSize: 13, color: "#888", fontWeight: 400, marginTop: 10, letterSpacing: "0.08em" }}>เอกสารนำเสนอโครงการ</div>
          </div>
          <div style={{ flex: 1 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
            {company.stats.map(s => (
              <div key={s} style={{ background: NAVY, color: WH, fontSize: 8.5, padding: "4px 10px", letterSpacing: "0.08em" }}>{s}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div style={{ padding: "28px 48px" }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 18 }}>
          <div style={{ width: 4, height: 18, background: RED }} />
          <div style={{ fontSize: 11, fontWeight: 700, color: NAVY, letterSpacing: "0.12em" }}>PROJECT DETAILS / ข้อมูลโครงการ</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 40px" }}>
          {[
            ["ชื่อโครงการ / Project Title"],
            ["ลูกค้า / Client"],
            ["เลขที่เอกสาร / Document No."],
            ["วันที่เสนอ / Date"],
            ["สถานที่ติดตั้ง / Installation Site"],
            ["จัดทำโดย / Prepared By"],
          ].map(([label], idx) => (
            <div key={label} style={{ borderBottom: `1.5px solid ${idx % 2 === 0 ? NAVY : "#ddd"}`, padding: "14px 0 8px" }}>
              <div style={{ fontSize: 8.5, color: "#aaa", letterSpacing: "0.12em", marginBottom: 4 }}>{label}</div>
              <div style={{ fontSize: 12, color: NAVY }}>&nbsp;</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scope */}
      <div style={{ padding: "0 48px 28px" }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 14 }}>
          <div style={{ width: 4, height: 18, background: RED }} />
          <div style={{ fontSize: 11, fontWeight: 700, color: NAVY, letterSpacing: "0.12em" }}>SCOPE OF WORK / ขอบเขตงาน</div>
        </div>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: RED, flexShrink: 0 }} />
            <div style={{ flex: 1, borderBottom: "1px solid #ececec", paddingBottom: 4 }}>&nbsp;</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, height: 3, background: NAVY }} />
          <div style={{ width: 60, height: 3, background: RED }} />
        </div>
        <div style={{ background: NAVY, padding: "8px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.45)" }}>{company.nameFullTH}</div>
          <div style={{ display: "flex", gap: 12 }}>
            {company.values.map(v => (
              <span key={v} style={{ fontSize: 7, color: "rgba(204,31,31,0.7)", letterSpacing: "0.1em" }}>{v}</span>
            ))}
          </div>
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.45)" }}>{company.web}</div>
        </div>
      </div>
    </div>
  );
}
