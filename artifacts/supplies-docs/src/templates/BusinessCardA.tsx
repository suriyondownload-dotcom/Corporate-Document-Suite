import { company } from "../data/company";
import { LogoAHorizontal, LogoA } from "../components/LogoA";

const BK = "#111111";
const WH = "#ffffff";
const LG = "#f5f5f5";

export function BusinessCardAFront({ name = "ชื่อ-นามสกุล / Full Name", title = "ตำแหน่ง / Position", phone = "+66 8X XXX XXXX" }) {
  return (
    <div className="card-page" style={{ background: WH, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, padding: "24px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <LogoAHorizontal height={36} />
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: BK, letterSpacing: "0.03em" }}>{name}</div>
          <div style={{ fontSize: 10.5, color: "#555", letterSpacing: "0.06em", marginTop: 2 }}>{title}</div>
          <div style={{ width: 32, height: 1, background: BK, margin: "8px 0" }} />
          <div style={{ fontSize: 9.5, color: "#333", lineHeight: 1.7 }}>
            <div>{phone}</div>
            <div>{company.email}</div>
            <div>{company.web}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BusinessCardABack() {
  return (
    <div className="card-page" style={{ background: BK, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 10 }}>
        <LogoA size={52} color={WH} />
        <div style={{ textAlign: "center", marginTop: 6 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: WH, letterSpacing: "0.16em" }}>THE SUPPLIES</div>
          <div style={{ fontSize: 8.5, color: "rgba(255,255,255,0.55)", letterSpacing: "0.28em", marginTop: 2 }}>ELEVATOR &amp; ESCALATOR</div>
        </div>
        <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
          {["SAFETY","RELIABILITY","EXCELLENCE"].map(v => (
            <span key={v} style={{ fontSize: 6, color: "rgba(255,255,255,0.4)", letterSpacing: "0.18em" }}>{v}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
