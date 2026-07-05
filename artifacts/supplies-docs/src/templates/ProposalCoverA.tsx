import { company } from "../data/company";
import { LogoA } from "../components/LogoA";

const BK = "#111";
const WH = "#fff";

export function ProposalCoverA() {
  return (
    <div className="doc-page" style={{ background: WH, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      {/* Left dark column */}
      <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 220, background: BK, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "48px 28px" }}>
        <LogoA size={52} color={WH} />
        <div>
          <div style={{ width: 36, height: 2, background: WH, marginBottom: 16 }} />
          <div style={{ fontSize: 9.5, color: "rgba(255,255,255,0.45)", lineHeight: 2, letterSpacing: "0.08em" }}>
            {company.values.map(v => <div key={v}>{v}</div>)}
          </div>
        </div>
        <div style={{ fontSize: 7.5, color: "rgba(255,255,255,0.3)", lineHeight: 1.9 }}>
          <div>{company.tel}</div>
          <div>{company.email}</div>
          <div>{company.web}</div>
        </div>
      </div>

      {/* Right content */}
      <div style={{ marginLeft: 220, padding: "60px 48px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: "0.28em", color: "#999", marginBottom: 16 }}>PROPOSAL DOCUMENT</div>
          <div style={{ fontSize: 10, letterSpacing: "0.28em", color: "#999", marginBottom: 2 }}>เอกสารนำเสนอโครงการ</div>
          <div style={{ width: 60, height: 1, background: "#ccc", margin: "16px 0" }} />
          <div style={{ fontSize: 32, fontWeight: 800, color: BK, lineHeight: 1.15, letterSpacing: "0.01em" }}>
            PROJECT<br/>PROPOSAL
          </div>
          <div style={{ fontSize: 14, color: "#888", fontWeight: 300, marginTop: 8, letterSpacing: "0.06em" }}>ข้อเสนอโครงการ</div>
        </div>

        <div>
          <div style={{ background: "#f7f7f7", padding: "20px 24px", borderLeft: `3px solid ${BK}` }}>
            <div style={{ fontSize: 11, color: "#999", letterSpacing: "0.12em", marginBottom: 6 }}>PROJECT / โครงการ</div>
            <div style={{ fontSize: 14, color: BK, fontWeight: 600, borderBottom: "1px solid #ddd", paddingBottom: 8, marginBottom: 14 }}>
              &nbsp;
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px" }}>
              {[
                ["CLIENT / ลูกค้า", ""],
                ["DATE / วันที่", ""],
                ["REF. / เลขที่", ""],
                ["PREPARED BY / จัดทำโดย", ""],
              ].map(([label, val]) => (
                <div key={label}>
                  <div style={{ fontSize: 8.5, color: "#aaa", letterSpacing: "0.12em" }}>{label}</div>
                  <div style={{ fontSize: 11, color: BK, borderBottom: "1px solid #ddd", paddingBottom: 3, marginTop: 2 }}>{val}&nbsp;</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div style={{ width: "100%", height: 1, background: "#e0e0e0", marginBottom: 12 }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: BK, letterSpacing: "0.1em" }}>THE SUPPLIES</div>
              <div style={{ fontSize: 8.5, color: "#aaa", letterSpacing: "0.2em" }}>COMPANY LIMITED</div>
            </div>
            <div style={{ textAlign: "right", fontSize: 8.5, color: "#aaa", lineHeight: 1.7 }}>
              <div>{company.nameFullTH}</div>
              <div>{company.addressTH}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
