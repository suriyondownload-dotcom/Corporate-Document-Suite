import { company } from "../data/company";
import { LogoCHorizontal, LogoC } from "../components/LogoC";

const NAVY = "#1a2744";
const RED = "#cc1f1f";
const WH = "#ffffff";

export function BusinessCardCFront({ name = "ชื่อ-นามสกุล / Full Name", title = "ตำแหน่ง / Position", phone = "+66 8X XXX XXXX" }) {
  return (
    <div className="card-page" style={{ background: WH, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: `linear-gradient(90deg, ${NAVY} 60%, ${RED} 100%)` }} />
      <div style={{ position: "absolute", inset: 0, padding: "18px 24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <LogoCHorizontal height={34} />
        <div>
          <div style={{ fontSize: 13.5, fontWeight: 800, color: NAVY, letterSpacing: "0.02em" }}>{name}</div>
          <div style={{ fontSize: 10, color: RED, fontWeight: 600, letterSpacing: "0.08em", marginTop: 2 }}>{title}</div>
          <div style={{ display: "flex", gap: 10, marginTop: 8, fontSize: 9.5, color: "#444", lineHeight: 1.8 }}>
            <div>
              <div>Tel: {phone}</div>
              <div>Email: {company.email}</div>
            </div>
            <div>
              <div>Web: {company.web}</div>
              <div style={{ color: "#888" }}>{company.addressTH.split(",")[0]}</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: RED }} />
    </div>
  );
}

export function BusinessCardCBack() {
  return (
    <div className="card-page" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0d1a36 100%)`, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: RED }} />
      <div style={{ position: "absolute", bottom: "30%", right: -30, width: 180, height: 180, borderRadius: "50%", border: `2px solid rgba(255,255,255,0.05)` }} />
      <div style={{ position: "absolute", bottom: "10%", right: 20, width: 100, height: 100, borderRadius: "50%", border: `2px solid rgba(255,255,255,0.04)` }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <LogoC size={50} />
        <div style={{ marginTop: 10, textAlign: "center" }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: WH, letterSpacing: "0.14em" }}>THE SUPPLIES</div>
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.5)", letterSpacing: "0.26em", marginTop: 3 }}>ELEVATOR &amp; ESCALATOR</div>
        </div>
        <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
          {["SAFETY","RELIABILITY","EXCELLENCE"].map(v => (
            <span key={v} style={{ fontSize: 6, color: "rgba(204,31,31,0.8)", letterSpacing: "0.12em" }}>{v}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
