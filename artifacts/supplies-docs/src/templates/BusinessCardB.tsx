import { company } from "../data/company";
import { LogoBHorizontal, LogoB } from "../components/LogoB";

const NAVY = "#1a2744";
const GOLD = "#c9a84c";
const WH = "#ffffff";

export function BusinessCardBFront({ name = "ชื่อ-นามสกุล / Full Name", title = "ตำแหน่ง / Position", phone = "+66 8X XXX XXXX" }) {
  return (
    <div className="card-page" style={{ background: WH, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 6, background: NAVY }} />
      <div style={{ position: "absolute", left: 6, top: 0, bottom: 0, width: 2, background: GOLD }} />
      <div style={{ position: "absolute", inset: 0, paddingLeft: 22, paddingRight: 22, paddingTop: 18, paddingBottom: 18, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <LogoBHorizontal height={34} />
        <div>
          <div style={{ width: 36, height: 1.5, background: GOLD, marginBottom: 8 }} />
          <div style={{ fontSize: 13.5, fontWeight: 700, color: NAVY, letterSpacing: "0.03em" }}>{name}</div>
          <div style={{ fontSize: 10, color: GOLD, letterSpacing: "0.1em", fontWeight: 500, marginTop: 2 }}>{title}</div>
          <div style={{ marginTop: 10, fontSize: 9.5, color: "#444", lineHeight: 1.8 }}>
            <div><span style={{ color: NAVY, fontWeight: 600 }}>T </span>{phone}</div>
            <div><span style={{ color: NAVY, fontWeight: 600 }}>E </span>{company.email}</div>
            <div><span style={{ color: NAVY, fontWeight: 600 }}>W </span>{company.web}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BusinessCardBBack() {
  return (
    <div className="card-page" style={{ background: NAVY, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 6, background: GOLD }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <LogoB size={50} />
        <div style={{ marginTop: 12, textAlign: "center" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: WH, letterSpacing: "0.16em" }}>THE SUPPLIES</div>
          <div style={{ width: 40, height: 1.5, background: GOLD, margin: "6px auto" }} />
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.5)", letterSpacing: "0.28em" }}>COMPANY LIMITED</div>
        </div>
        <div style={{ marginTop: 14, display: "flex", gap: 12 }}>
          {["SAFETY","RELIABILITY","EXCELLENCE"].map(v => (
            <span key={v} style={{ fontSize: 6, color: GOLD, letterSpacing: "0.15em", opacity: 0.8 }}>{v}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
