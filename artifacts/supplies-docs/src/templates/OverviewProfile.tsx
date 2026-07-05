import { company } from "../data/company";
import { LogoHorizontal } from "../components/Logo";

export function OverviewProfile() {
  return (
    <div className="doc-page" style={{ background: "#fff", fontFamily: "'Montserrat','Noto Sans Thai',Arial,sans-serif", color: "#111" }}>
      <div style={{ padding: "40px 48px 0" }}>
        <LogoHorizontal height={48} />
        <div style={{ height: 1, background: "#111", marginTop: 22 }} />
        <div style={{ height: 3, background: "#111", marginTop: 2 }} />
      </div>

      <div style={{ padding: "28px 48px" }}>
        <div style={{ fontSize: 10, letterSpacing: "0.28em", color: "#999", marginBottom: 6 }}>
          COMPANY PROFILE / ภาพรวมองค์กร
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{company.nameFullEN}</div>
        <div style={{ fontSize: 13, color: "#555", marginBottom: 16 }}>{company.nameFullTH}</div>

        <div style={{ background: "#f5f5f5", borderLeft: "3px solid #111", padding: "14px 18px", marginBottom: 24 }}>
          <div style={{ fontSize: 11, lineHeight: 1.8, color: "#222", marginBottom: 6 }}>{company.missionTH}</div>
          <div style={{ fontSize: 10, lineHeight: 1.7, color: "#666", fontStyle: "italic" }}>{company.missionEN}</div>
        </div>

        {/* Departments */}
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", marginBottom: 10, borderBottom: "1px solid #ddd", paddingBottom: 4 }}>
          โครงสร้างฝ่ายงาน / DEPARTMENT STRUCTURE
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 20px", marginBottom: 22 }}>
          {company.departments.map((d, i) => (
            <div key={d.id} style={{ display: "flex", gap: 10, padding: "8px 10px", background: i % 2 === 0 ? "#fafafa" : "#fff", border: "1px solid #eee" }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#bbb", width: 18 }}>{String(i + 1).padStart(2, "0")}</div>
              <div>
                <div style={{ fontSize: 10.5, fontWeight: 700 }}>{d.nameTH} / {d.nameEN}</div>
                <div style={{ fontSize: 9, color: "#777", marginTop: 1 }}>{d.scopeTH} · {d.scopeEN}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow */}
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", marginBottom: 10, borderBottom: "1px solid #ddd", paddingBottom: 4 }}>
          กระบวนการมาตรฐาน / STANDARD WORKFLOW
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 22 }}>
          {company.workflow.map((w, i) => (
            <div key={w.en} style={{ display: "flex", alignItems: "center" }}>
              <div style={{ border: "1px solid #111", borderRadius: 3, padding: "5px 10px", fontSize: 9, textAlign: "center" }}>
                <div style={{ fontWeight: 700 }}>{w.th}</div>
                <div style={{ color: "#888", fontSize: 8 }}>{w.en}</div>
              </div>
              {i < company.workflow.length - 1 && <span style={{ margin: "0 4px", color: "#bbb" }}>→</span>}
            </div>
          ))}
        </div>

        {/* Standards */}
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", marginBottom: 10, borderBottom: "1px solid #ddd", paddingBottom: 4 }}>
          มาตรฐานองค์กร / ENTERPRISE STANDARDS
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 20px", marginBottom: 18, fontSize: 9.5 }}>
          {company.standards.map(s => (
            <div key={s.en} style={{ display: "flex", gap: 6, alignItems: "baseline" }}>
              <span style={{ width: 4, height: 4, background: "#111", display: "inline-block", flexShrink: 0 }} />
              <span><strong>{s.th}</strong> — {s.en}</span>
            </div>
          ))}
        </div>

        <div style={{ background: "#111", color: "#fff", padding: "10px 16px", fontSize: 9, lineHeight: 1.7 }}>
          {company.safetyProtocol}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <div style={{ height: 3, background: "#111" }} />
        <div style={{ background: "#111", padding: "8px 48px", display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontSize: 8, color: "#fff", letterSpacing: "0.14em" }}>{company.nameFullEN}</div>
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.6)" }}>Tax ID: {company.taxId}</div>
        </div>
      </div>
    </div>
  );
}
