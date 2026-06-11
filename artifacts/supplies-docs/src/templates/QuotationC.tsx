import { company, docDate, docNo } from "../data/company";
import { LogoCHorizontal } from "../components/LogoC";

const NAVY = "#1a2744";
const RED = "#cc1f1f";
const WH = "#fff";

const items = [
  { no: "01", desc: "ลิฟต์โดยสาร BLT / Passenger Elevator BLT", model: "BLT-XXX", unit: "เครื่อง", qty: 1, price: "0.00" },
  { no: "02", desc: "งานติดตั้ง / Installation Works", model: "-", unit: "งาน", qty: 1, price: "0.00" },
  { no: "03", desc: "อุปกรณ์เสริม / Accessories", model: "-", unit: "ชุด", qty: 1, price: "0.00" },
  { no: "", desc: "", model: "", unit: "", qty: null, price: "" },
  { no: "", desc: "", model: "", unit: "", qty: null, price: "" },
];

export function QuotationC() {
  return (
    <div className="doc-page" style={{ background: WH, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <div style={{ height: 6, background: `linear-gradient(90deg, ${NAVY} 60%, ${RED} 100%)` }} />
      <div style={{ padding: "20px 44px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <LogoCHorizontal height={40} />
          <div style={{ textAlign: "right", fontSize: 8.5, color: "#666", lineHeight: 1.85 }}>
            <div style={{ fontWeight: 700, color: NAVY }}>{company.nameFullEN}</div>
            <div style={{ color: RED }}>{company.nameFullTH}</div>
            <div>{company.addressEN}</div>
            <div>Tel: {company.tel} | {company.email}</div>
            <div>Tax ID: {company.taxId}</div>
          </div>
        </div>
        <div style={{ marginTop: 14, display: "flex" }}>
          <div style={{ flex: 1, height: 2, background: NAVY }} />
          <div style={{ width: 50, height: 2, background: RED }} />
        </div>
      </div>

      <div style={{ padding: "14px 44px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <div style={{ fontSize: 28, fontWeight: 900, color: NAVY, letterSpacing: "0.04em", lineHeight: 1 }}>QUOTATION</div>
            <div style={{ fontSize: 11, color: RED, letterSpacing: "0.2em", fontWeight: 600, marginTop: 4 }}>ใบเสนอราคา</div>
          </div>
          <div style={{ background: "#f9f9f9", border: `1px solid #eee`, borderTop: `3px solid ${RED}`, padding: "10px 18px", fontSize: 10, lineHeight: 2 }}>
            <div><span style={{ color: "#bbb", width: 90, display: "inline-block" }}>เลขที่ / No.:</span><strong style={{ color: NAVY }}>{docNo}</strong></div>
            <div><span style={{ color: "#bbb", width: 90, display: "inline-block" }}>วันที่ / Date:</span>{docDate}</div>
            <div><span style={{ color: "#bbb", width: 90, display: "inline-block" }}>อ้างอิง / Ref.:</span>TSE-REF-XXXX</div>
            <div><span style={{ color: "#bbb", width: 90, display: "inline-block" }}>อายุ / Valid:</span>30 วัน</div>
          </div>
        </div>

        <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
          {[["BILL TO / เรียน", ["ชื่อบริษัท / Company", "ที่อยู่ / Address", "เลขผู้เสียภาษี / Tax ID", "ผู้ติดต่อ / Contact"]], ["PROJECT / โครงการ", ["ชื่อโครงการ / Title", "สถานที่ / Location", "ผู้รับผิดชอบ / PIC", "โทร / Tel"]]].map(([title, fields]) => (
            <div key={title as string} style={{ borderLeft: `3px solid ${title === "BILL TO / เรียน" ? NAVY : RED}`, paddingLeft: 12 }}>
              <div style={{ fontSize: 8.5, fontWeight: 700, color: title === "BILL TO / เรียน" ? NAVY : RED, letterSpacing: "0.14em", marginBottom: 8 }}>{title as string}</div>
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
                <th key={h} style={{ padding: "8px 10px", textAlign: i < 2 ? "left" : "center", fontWeight: 700, letterSpacing: "0.05em", fontSize: 9 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? WH : "#fafafa", borderBottom: "1px solid #eee" }}>
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
            <div style={{ display: "flex", justifyContent: "space-between", padding: "9px 14px", fontWeight: 800, fontSize: 13, marginTop: 4, background: `linear-gradient(90deg, ${NAVY}, #0d1a36)`, color: WH }}>
              <span>ยอดสุทธิ / TOTAL</span><span>฿ 0.00</span>
            </div>
            <div style={{ height: 3, background: RED }} />
          </div>
        </div>

        <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
          <div style={{ borderLeft: `3px solid ${RED}`, paddingLeft: 12 }}>
            <div style={{ fontSize: 8.5, fontWeight: 700, color: RED, letterSpacing: "0.14em", marginBottom: 8 }}>เงื่อนไข / TERMS</div>
            {["งวดที่ 1: ____% เมื่อลงนามสัญญา", "งวดที่ 2: ____% ก่อนจัดส่งสินค้า", "งวดที่ 3: ____% หลังทดสอบเครื่อง"].map(t => (
              <div key={t} style={{ fontSize: 9.5, color: "#555", padding: "4px 0", borderBottom: "1px solid #f5f5f5" }}>{t}</div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 8.5, fontWeight: 700, color: "#aaa", letterSpacing: "0.14em", marginBottom: 14 }}>ลงนาม / AUTHORIZED</div>
            <div style={{ borderBottom: `2px solid ${NAVY}`, marginBottom: 6 }} />
            <div style={{ fontSize: 10, color: NAVY, fontWeight: 700 }}>ผู้มีอำนาจลงนาม / Authorized</div>
            <div style={{ fontSize: 9, color: "#aaa", marginTop: 8 }}>วันที่ / Date: ____________________</div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, height: 2, background: NAVY }} />
          <div style={{ width: 50, height: 2, background: RED }} />
        </div>
        <div style={{ background: NAVY, padding: "6px 44px", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 8, color: "rgba(255,255,255,0.4)" }}>{company.nameFullEN} | Tax ID: {company.taxId}</span>
          <span style={{ fontSize: 8, color: "rgba(204,31,31,0.7)" }}>{company.web}</span>
        </div>
        <div style={{ height: 3, background: RED }} />
      </div>
    </div>
  );
}
