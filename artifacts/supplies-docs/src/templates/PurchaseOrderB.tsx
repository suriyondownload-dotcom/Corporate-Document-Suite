import { company, docDate, docNo } from "../data/company";
import { LogoBHorizontal } from "../components/LogoB";

const NAVY = "#1a2744";
const GOLD = "#c9a84c";
const WH = "#fff";

const items = [
  { no: "01", desc: "อะไหล่ลิฟต์ BLT / BLT Elevator Parts", spec: "ตามรายการ", unit: "ชุด", qty: 1, price: "0.00" },
  { no: "02", desc: "น้ำมันหล่อลื่น / Lubrication Oil", spec: "Grade XX", unit: "ลิตร", qty: 10, price: "0.00" },
  { no: "03", desc: "อุปกรณ์ติดตั้ง / Installation Parts", spec: "ตามรายการ", unit: "ชุด", qty: 1, price: "0.00" },
  { no: "", desc: "", spec: "", unit: "", qty: null, price: "" },
  { no: "", desc: "", spec: "", unit: "", qty: null, price: "" },
];

export function PurchaseOrderB() {
  return (
    <div className="doc-page" style={{ background: WH, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
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

      <div style={{ padding: "16px 44px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 800, color: NAVY, letterSpacing: "0.06em" }}>PURCHASE ORDER</div>
            <div style={{ fontSize: 11, color: "#aaa", letterSpacing: "0.15em" }}>ใบสั่งซื้อ</div>
            <div style={{ width: 40, height: 2, background: GOLD, marginTop: 8 }} />
          </div>
          <div style={{ background: "#f5f7fc", border: `1px solid #e0e5f0`, padding: "12px 20px", fontSize: 10, lineHeight: 2.1 }}>
            <div><span style={{ color: "#aaa", width: 110, display: "inline-block" }}>PO No.:</span><strong style={{ color: NAVY }}>{docNo}</strong></div>
            <div><span style={{ color: "#aaa", width: 110, display: "inline-block" }}>วันที่ / Date:</span>{docDate}</div>
            <div><span style={{ color: "#aaa", width: 110, display: "inline-block" }}>กำหนดส่ง / Delivery:</span>______ วัน</div>
            <div><span style={{ color: "#aaa", width: 110, display: "inline-block" }}>QT Ref.:</span>TSE-QT-XXXX</div>
          </div>
        </div>

        <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
          {[["ผู้ขาย / VENDOR", ["ชื่อบริษัท / Company", "ที่อยู่ / Address", "เลขผู้เสียภาษี / Tax ID", "ผู้ติดต่อ / Contact", "โทร / Tel"]], ["จัดส่งไปยัง / SHIP TO", ["ชื่อโครงการ / Project", "ที่อยู่จัดส่ง / Address", "ผู้รับ / Receiver", "โทร / Tel", "วันที่ต้องการ / Required"]]].map(([title, fields]) => (
            <div key={title as string} style={{ border: `1px solid #e8ecf4`, borderTop: `3px solid ${NAVY}`, padding: "12px 14px" }}>
              <div style={{ fontSize: 8.5, letterSpacing: "0.16em", color: GOLD, fontWeight: 600, marginBottom: 10 }}>{title as string}</div>
              {(fields as string[]).map(f => (
                <div key={f} style={{ display: "flex", gap: 6, borderBottom: "1px solid #f0f0f0", padding: "4px 0" }}>
                  <span style={{ color: "#bbb", fontSize: 8.5, width: 120, flexShrink: 0 }}>{f}:</span>
                  <span style={{ flex: 1, fontSize: 10.5 }}>&nbsp;</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10.5, marginTop: 16 }}>
          <thead>
            <tr style={{ background: NAVY, color: WH }}>
              {["#", "รายละเอียด / Description", "Spec/Model", "หน่วย", "จำนวน", "ราคา/หน่วย", "จำนวนเงิน"].map((h, i) => (
                <th key={h} style={{ padding: "8px 10px", textAlign: i < 2 ? "left" : "center", fontWeight: 600, fontSize: 9 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? WH : "#f8f9fc", borderBottom: "1px solid #eef0f5" }}>
                <td style={{ padding: "8px 10px", width: 28 }}>{item.no}</td>
                <td style={{ padding: "8px 10px" }}>{item.desc}</td>
                <td style={{ padding: "8px 10px", textAlign: "center" }}>{item.spec}</td>
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
            {[["รวม / Subtotal", "฿ 0.00"], ["VAT 7%", "฿ 0.00"]].map(([l, v]) => (
              <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "5px 14px", fontSize: 10.5, borderBottom: "1px solid #eee" }}>
                <span style={{ color: "#888" }}>{l}</span><span>{v}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "9px 14px", background: NAVY, color: WH, fontWeight: 700, fontSize: 12, marginTop: 4 }}>
              <span>ยอดรวม / TOTAL</span><span>฿ 0.00</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 14, border: `1px solid #e0e5f0`, borderTop: `3px solid ${GOLD}`, padding: "12px 16px" }}>
          <div style={{ fontSize: 9, letterSpacing: "0.16em", color: GOLD, fontWeight: 600, marginBottom: 8 }}>เงื่อนไขและข้อกำหนด / TERMS & CONDITIONS</div>
          <div style={{ fontSize: 9.5, color: "#555", lineHeight: 1.9 }}>
            <div>1. สินค้าต้องตรงตามรายละเอียดและตัวอย่างที่ได้รับอนุมัติ / Goods must match approved specifications.</div>
            <div>2. กำหนดส่งตามที่ระบุในใบสั่งซื้อ / Delivery as specified in this PO.</div>
            <div>3. ผู้ขายต้องแจ้งล่วงหน้าหากไม่สามารถส่งตรงเวลา / Vendor must notify in advance of any delay.</div>
          </div>
        </div>

        <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0 16px" }}>
          {["ผู้จัดทำ / Prepared By", "ผู้อนุมัติ / Approved By", "ผู้รับสินค้า / Received By"].map(label => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ borderBottom: `2px solid ${NAVY}`, marginBottom: 6, marginTop: 28 }} />
              <div style={{ fontSize: 9, color: NAVY, fontWeight: 600 }}>{label}</div>
              <div style={{ fontSize: 8.5, color: "#bbb", marginTop: 3 }}>วันที่: __________</div>
            </div>
          ))}
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
