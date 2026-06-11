import { company } from "../data/company";
import { LogoCHorizontal } from "../components/LogoC";

const NAVY = "#1a2744";
const RED = "#cc1f1f";

export function LetterheadC() {
  return (
    <div className="doc-page" style={{ background: "#fff", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      {/* Header bar */}
      <div style={{ height: 6, background: `linear-gradient(90deg, ${NAVY} 60%, ${RED} 100%)` }} />
      <div style={{ padding: "24px 48px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <LogoCHorizontal height={44} />
          <div style={{ textAlign: "right", fontSize: 9, color: "#555", lineHeight: 1.9 }}>
            <div style={{ fontWeight: 700, fontSize: 11, color: NAVY }}>{company.nameFullEN}</div>
            <div style={{ color: RED, fontWeight: 500 }}>{company.nameFullTH}</div>
            <div>{company.addressEN}</div>
            <div>Tel: {company.tel} | Email: {company.email}</div>
            <div>{company.web}</div>
          </div>
        </div>
        <div style={{ marginTop: 18, display: "flex", gap: 0 }}>
          <div style={{ flex: 1, height: 2, background: NAVY }} />
          <div style={{ width: 40, height: 2, background: RED }} />
        </div>
      </div>

      <div style={{ padding: "28px 48px", minHeight: 875 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 22, fontSize: 11 }}>
          <div>
            <span style={{ fontWeight: 700, color: NAVY }}>เลขที่ Doc No.: </span>
            <span style={{ borderBottom: `2px solid ${NAVY}`, display: "inline-block", width: 160 }}>&nbsp;</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, color: NAVY }}>วันที่ Date: </span>
            <span style={{ borderBottom: `2px solid ${NAVY}`, display: "inline-block", width: 140 }}>&nbsp;</span>
          </div>
        </div>
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div style={{ width: 4, height: 14, background: RED }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: NAVY }}>เรื่อง / Subject</span>
          </div>
          <div style={{ borderBottom: "1px solid #ccc", paddingBottom: 4 }}>&nbsp;</div>
        </div>
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div style={{ width: 4, height: 14, background: RED }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: NAVY }}>เรียน / To</span>
          </div>
          <div style={{ borderBottom: "1px solid #ccc", paddingBottom: 4 }}>&nbsp;</div>
        </div>
        <div style={{ marginTop: 28 }}>
          {Array.from({ length: 21 }).map((_, i) => (
            <div key={i} style={{ borderBottom: "1px solid #eee", height: 34 }} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 44 }}>
          <div style={{ textAlign: "center", width: 220 }}>
            <div style={{ borderBottom: `2px solid ${NAVY}`, marginBottom: 6 }}>&nbsp;</div>
            <div style={{ fontSize: 10.5, color: NAVY, fontWeight: 700 }}>ลงชื่อ / Authorized Signature</div>
            <div style={{ marginTop: 16, borderBottom: "1px solid #ccc" }}>&nbsp;</div>
            <div style={{ fontSize: 10, color: "#666", marginTop: 3 }}>ตำแหน่ง / Position</div>
            <div style={{ marginTop: 12, borderBottom: "1px solid #ccc" }}>&nbsp;</div>
            <div style={{ fontSize: 10, color: "#666", marginTop: 3 }}>วันที่ / Date</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, height: 2, background: NAVY }} />
          <div style={{ width: 60, height: 2, background: RED }} />
        </div>
        <div style={{ background: NAVY, padding: "7px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.5)" }}>Tax ID: {company.taxId}</div>
          <div style={{ display: "flex", gap: 10 }}>
            {company.values.map(v => (
              <span key={v} style={{ fontSize: 7, color: "rgba(204,31,31,0.8)", letterSpacing: "0.12em" }}>{v}</span>
            ))}
          </div>
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.5)" }}>{company.web}</div>
        </div>
        <div style={{ height: 3, background: RED }} />
      </div>
    </div>
  );
}
