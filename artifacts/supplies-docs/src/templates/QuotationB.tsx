import { company, docDate, docNo } from "../data/company";
import { LogoBHorizontal } from "../components/LogoB";

const NAVY = "#1a2744";
const GOLD = "#c9a84c";
const WH = "#fff";

const items = [
  { no: "01", desc: "ลิฟต์โดยสาร BLT / Passenger Elevator BLT", model: "BLT-XXX", unit: "เครื่อง", qty: 1, price: "0.00" },
  { no: "02", desc: "งานติดตั้ง / Installation Works", model: "-", unit: "งาน", qty: 1, price: "0.00" },
  { no: "03", desc: "อุปกรณ์เสริม / Accessories", model: "-", unit: "ชุด", qty: 1, price: "0.00" },
  { no: "", desc: "", model: "", unit: "", qty: null, price: "" },
  { no: "", desc: "", model: "", unit: "", qty: null, price: "" },
];

export function QuotationB() {
  return (
    <div className="doc-page" style={{ background: WH, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      {/* Header */}
      <div style={{ background: NAVY, padding: "24px 44px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <LogoBHorizontal height={40} />
          <div style={{ textAlign: "right", fontSize: 8.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.9 }}>
            <div style={{ fontWeight: 600, color: WH }}>{company.nameFullEN}</div>
            <div style={{ color: GOLD }}>{company.nameFullTH}</div>
            <div>{company.addressEN}</div>
            <div>Tel: {company.tel} | {company.email}</div>
            <div>Tax ID: {company.taxId}</div>
          </div>
        </div>
      </div>
      <div style={{ height: 4, background: GOLD }} />

      {/* Title & Meta */}
      <div style={{ padding: "18px 44px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 26, fontWeight: 800, color: NAVY, letterSpacing: "0.06em" }}>QUOTATION</div>
            <div style={{ fontSize: 12, color: "#999", letterSpacing: "0.18em" }}>ใบเสนอราคา</div>
            <div style={{ width: 40, height: 2, background: GOLD, marginTop: 8 }} />
          </div>
          <div style={{ background: "#f5f7fc", border: `1px solid #e0e5f0`, padding: "12px 20px", fontSize: 10, lineHeight: 2.1 }}>
            <div><span style={{ color: "#aaa", width: 100, display: "inline-block" }}>เลขที่ / No.:</span><strong style={{ color: NAVY }}>{docNo}</strong></div>
            <div><span style={{ color: "#aaa", width: 100, display: "inline-block" }}>วันที่ / Date:</span>{docDate}</div>
            <div><span style={{ color: "#aaa", width: 100, display: "inline-block" }}>อ้างอิง / Ref.:</span>TSE-REF-XXXX</div>
            <div><span style={{ color: "#aaa", width: 100, display: "inline-block" }}>อายุ / Valid:</span>30 วัน / Days</div>
          </div>
        </div>

        <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
          {[["เรียน / BILL TO", ["ชื่อบริษัท / Company", "ที่อยู่ / Address", "เลขผู้เสียภาษี / Tax ID", "ผู้ติดต่อ / Contact"]], ["ข้อมูลโครงการ / PROJECT", ["ชื่อโครงการ / Project", "สถานที่ / Site", "ผู้รับผิดชอบ / PIC", "โทร / Tel"]]].map(([title, fields]) => (
            <div key={title as string} style={{ border: `1px solid #e8ecf4`, borderTop: `3px solid ${NAVY}`, padding: "12px 14px" }}>
              <div style={{ fontSize: 8.5, letterSpacing: "0.16em", color: GOLD, fontWeight: 600, marginBottom: 10 }}>{title as string}</div>
              {(fields as string[]).map(f => (
                <div key={f} style={{ display: "flex", gap: 6, borderBottom: "1px solid #f0f0f0", padding: "4px 0" }}>
                  <span style={{ color: "#bbb", fontSize: 8.5, width: 100, flexShrink: 0 }}>{f}:</span>
                  <span style={{ flex: 1, fontSize: 10.5 }}>&nbsp;</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10.5, marginTop: 16 }}>
          <thead>
            <tr style={{ background: NAVY, color: WH }}>
              {["#", "รายละเอียด / Description", "รุ่น/Model", "หน่วย", "จำนวน", "ราคา/หน่วย", "จำนวนเงิน"].map((h, i) => (
                <th key={h} style={{ padding: "8px 10px", textAlign: i < 2 ? "left" : "center", fontWeight: 600, letterSpacing: "0.05em", fontSize: 9 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? WH : "#f8f9fc", borderBottom: "1px solid #eef0f5" }}>
                <td style={{ padding: "8px 10px", width: 28 }}>{item.no}</td>
                <td style={{ padding: "8px 10px" }}>{item.desc}</td>
                <td style={{ padding: "8px 10px", textAlign: "center" }}>{item.model}</td>
                <td style={{ padding: "8px 10px", textAlign: "center" }}>{item.unit}</td>
                <td style={{ padding: "8px 10px", textAlign: "center" }}>{item.qty ?? ""}</td>
                <td style={{ padding: "8px 10px", textAlign: "right" }}>{item.price ? `฿ ${item.price}` : ""}</td>
                <td style={{ padding: "8px 10px", textAlign: "right" }}>{item.price ? `฿ ${item.price}` : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
          <div style={{ width: 290 }}>
            {[["รวม / Subtotal", "฿ 0.00"], ["VAT 7%", "฿ 0.00"], ["WHT 3%", "(฿ 0.00)"]].map(([l, v]) => (
              <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "5px 14px", fontSize: 10.5, borderBottom: "1px solid #eee" }}>
                <span style={{ color: "#888" }}>{l}</span><span>{v}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "9px 14px", background: NAVY, color: WH, fontWeight: 700, fontSize: 13, marginTop: 4 }}>
              <span>ยอดสุทธิ / TOTAL</span><span>฿ 0.00</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
          <div style={{ border: `1px solid #e0e5f0`, borderTop: `3px solid ${GOLD}`, padding: "12px 14px" }}>
            <div style={{ fontSize: 8.5, letterSpacing: "0.16em", color: GOLD, fontWeight: 600, marginBottom: 8 }}>เงื่อนไข / PAYMENT TERMS</div>
            {["งวดที่ 1: ____% เมื่อลงนาม", "งวดที่ 2: ____% ก่อนส่งมอบ", "งวดที่ 3: ____% หลังทดสอบ"].map(t => (
              <div key={t} style={{ fontSize: 9.5, color: "#555", padding: "3px 0" }}>{t}</div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 8.5, letterSpacing: "0.16em", color: "#aaa", marginBottom: 10 }}>ลงนาม / AUTHORIZED</div>
            <div style={{ width: "100%", borderBottom: `2px solid ${NAVY}`, marginBottom: 6 }} />
            <div style={{ fontSize: 9.5, color: NAVY, fontWeight: 600 }}>ผู้มีอำนาจลงนาม</div>
            <div style={{ fontSize: 9, color: "#bbb", marginTop: 6 }}>วันที่: ____________________</div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <div style={{ height: 4, background: GOLD }} />
        <div style={{ background: NAVY, padding: "6px 44px", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 8, color: "rgba(255,255,255,0.45)" }}>{company.nameFullEN} | Tax ID: {company.taxId}</span>
          <span style={{ fontSize: 8, color: GOLD }}>{company.web}</span>
        </div>
      </div>
    </div>
  );
}
