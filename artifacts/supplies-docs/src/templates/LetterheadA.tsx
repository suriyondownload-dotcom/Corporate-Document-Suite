import { company } from "../data/company";
import { LogoAHorizontal } from "../components/LogoA";

export function LetterheadA() {
  return (
    <div className="doc-page" style={{ background: "#fff", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      {/* Header */}
      <div style={{ padding: "32px 48px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <LogoAHorizontal height={44} />
          <div style={{ textAlign: "right", fontSize: 9, color: "#666", lineHeight: 1.9 }}>
            <div style={{ fontWeight: 600, fontSize: 10, color: "#111", marginBottom: 2 }}>{company.nameFullEN}</div>
            <div>{company.nameFullTH}</div>
            <div>{company.addressEN}</div>
            <div>Tel: {company.tel} | Fax: {company.fax}</div>
            <div>Email: {company.email} | Web: {company.web}</div>
          </div>
        </div>
        <div style={{ height: 1, background: "#111", marginTop: 20 }} />
        <div style={{ height: 3, background: "#111", marginTop: 2 }} />
      </div>

      {/* Content Area */}
      <div style={{ padding: "32px 48px", minHeight: 900 }}>
        {/* Date & Ref */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 28, fontSize: 11 }}>
          <div>
            <span style={{ color: "#666" }}>เลขที่เอกสาร / Doc No.: </span>
            <span style={{ borderBottom: "1px solid #ccc", display: "inline-block", width: 180 }}>&nbsp;</span>
          </div>
          <div>
            <span style={{ color: "#666" }}>วันที่ / Date: </span>
            <span style={{ borderBottom: "1px solid #ccc", display: "inline-block", width: 140 }}>&nbsp;</span>
          </div>
        </div>

        {/* Subject Line */}
        <div style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 11, color: "#666", marginBottom: 4 }}>เรื่อง / Subject:</div>
          <div style={{ borderBottom: "1px solid #ccc", paddingBottom: 4 }}>&nbsp;</div>
        </div>

        {/* To */}
        <div style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 11, color: "#666", marginBottom: 4 }}>เรียน / To:</div>
          <div style={{ borderBottom: "1px solid #ccc", paddingBottom: 4 }}>&nbsp;</div>
        </div>

        {/* Body Lines */}
        <div style={{ marginTop: 36 }}>
          {Array.from({ length: 22 }).map((_, i) => (
            <div key={i} style={{ borderBottom: "1px solid #e8e8e8", height: 34 }} />
          ))}
        </div>

        {/* Signature */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 48 }}>
          <div style={{ textAlign: "center", width: 200 }}>
            <div style={{ borderBottom: "1px solid #111", marginBottom: 6 }}>&nbsp;</div>
            <div style={{ fontSize: 10, color: "#444" }}>ลงชื่อ / Signature</div>
            <div style={{ fontSize: 10, color: "#444", marginTop: 14, borderBottom: "1px solid #ccc" }}>&nbsp;</div>
            <div style={{ fontSize: 10, color: "#444", marginTop: 4 }}>ตำแหน่ง / Position</div>
            <div style={{ fontSize: 10, color: "#444", marginTop: 14, borderBottom: "1px solid #ccc" }}>&nbsp;</div>
            <div style={{ fontSize: 10, color: "#444", marginTop: 4 }}>วันที่ / Date</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <div style={{ height: 3, background: "#111" }} />
        <div style={{ height: 1, background: "#111", marginTop: 2 }} />
        <div style={{ background: "#111", padding: "8px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 8, color: "#fff", letterSpacing: "0.2em" }}>{company.nameFullEN}</div>
          <div style={{ display: "flex", gap: 16 }}>
            {company.values.map(v => (
              <span key={v} style={{ fontSize: 7, color: "rgba(255,255,255,0.55)", letterSpacing: "0.14em" }}>{v}</span>
            ))}
          </div>
          <div style={{ fontSize: 8, color: "#fff", letterSpacing: "0.06em" }}>{company.web}</div>
        </div>
      </div>
    </div>
  );
}
