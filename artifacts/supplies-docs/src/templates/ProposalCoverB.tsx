import { company } from "../data/company";
import { LogoB } from "../components/LogoB";

const NAVY = "#1a2744";
const GOLD = "#c9a84c";
const WH = "#fff";

export function ProposalCoverB() {
  return (
    <div className="doc-page" style={{ background: WH, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      {/* Navy header */}
      <div style={{ background: NAVY, padding: "40px 48px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 260, height: 260, borderRadius: "50%", border: `1px solid rgba(201,168,76,0.15)` }} />
        <div style={{ position: "absolute", top: -30, right: -30, width: 160, height: 160, borderRadius: "50%", border: `1px solid rgba(201,168,76,0.1)` }} />
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <LogoB size={52} />
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: WH, letterSpacing: "0.14em" }}>THE SUPPLIES</div>
            <div style={{ fontSize: 10, color: GOLD, letterSpacing: "0.3em", marginTop: 2 }}>ELEVATOR &amp; ESCALATOR</div>
          </div>
        </div>
        <div style={{ width: 48, height: 2, background: GOLD, marginBottom: 18 }} />
        <div style={{ fontSize: 36, fontWeight: 800, color: WH, lineHeight: 1.1, letterSpacing: "0.02em" }}>
          PROJECT<br/>PROPOSAL
        </div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginTop: 8, letterSpacing: "0.1em" }}>เอกสารนำเสนอโครงการ</div>
        <div style={{ width: 48, height: 2, background: GOLD, marginTop: 20 }} />
      </div>

      {/* Gold accent bar */}
      <div style={{ height: 5, background: GOLD }} />

      {/* Project info */}
      <div style={{ padding: "36px 48px" }}>
        <div style={{ fontSize: 10, letterSpacing: "0.2em", color: "#aaa", marginBottom: 12 }}>PROJECT INFORMATION / ข้อมูลโครงการ</div>
        <div style={{ background: "#f8f9fc", border: `1px solid #e8ecf4`, borderRadius: 4, padding: "24px 28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 32px" }}>
            {[
              ["ชื่อโครงการ / Project Title", ""],
              ["ลูกค้า / Client", ""],
              ["เลขที่เอกสาร / Doc No.", ""],
              ["วันที่เสนอ / Proposal Date", ""],
              ["มูลค่าโครงการ / Project Value", ""],
              ["จัดทำโดย / Prepared By", ""],
            ].map(([label]) => (
              <div key={label}>
                <div style={{ fontSize: 8.5, color: "#aaa", letterSpacing: "0.12em", marginBottom: 4 }}>{label}</div>
                <div style={{ borderBottom: `1.5px solid ${NAVY}`, paddingBottom: 4, fontSize: 12, color: NAVY }}>&nbsp;</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div style={{ marginTop: 32 }}>
          <div style={{ fontSize: 10, letterSpacing: "0.2em", color: "#aaa", marginBottom: 14 }}>OUR CREDENTIALS / ความน่าเชื่อถือ</div>
          <div style={{ display: "flex", gap: 12 }}>
            {company.certifications.map(c => (
              <div key={c} style={{ flex: 1, background: NAVY, borderRadius: 3, padding: "12px 14px" }}>
                <div style={{ width: 24, height: 2, background: GOLD, marginBottom: 8 }} />
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{c}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <div style={{ height: 4, background: GOLD }} />
        <div style={{ background: NAVY, padding: "8px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)" }}>{company.nameFullTH}</div>
          <div style={{ fontSize: 8, color: GOLD }}>{company.web}</div>
        </div>
      </div>
    </div>
  );
}
