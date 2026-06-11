import { company, docDate, docNo } from "../data/company";
import { LogoAHorizontal } from "../components/LogoA";

const BK = "#111";
const LG = "#f8f8f8";

const items = [
  { no: "01", desc: "อะไหล่ลิฟต์ BLT / BLT Elevator Parts", spec: "ตามรายการ", unit: "ชุด", qty: 1, price: "0.00" },
  { no: "02", desc: "น้ำมันหล่อลื่น / Lubrication Oil", spec: "Grade XX", unit: "ลิตร", qty: 10, price: "0.00" },
  { no: "03", desc: "อุปกรณ์ติดตั้ง / Installation Parts", spec: "ตามรายการ", unit: "ชุด", qty: 1, price: "0.00" },
  { no: "", desc: "", spec: "", unit: "", qty: null, price: "" },
  { no: "", desc: "", spec: "", unit: "", qty: null, price: "" },
];

export function PurchaseOrderA() {
  return (
    <div className="doc-page" style={{ background: "#fff", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <div style={{ padding: "28px 44px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <LogoAHorizontal height={40} />
          <div style={{ textAlign: "right", fontSize: 9, color: "#666", lineHeight: 1.8 }}>
            <div style={{ fontWeight: 700, fontSize: 10, color: BK }}>{company.nameFullEN}</div>
            <div>{company.nameFullTH}</div>
            <div>{company.addressEN}</div>
            <div>Tel: {company.tel} | {company.email}</div>
            <div style={{ color: "#999" }}>Tax ID: {company.taxId}</div>
          </div>
        </div>
        <div style={{ height: 2, background: BK, marginTop: 16 }} />
        <div style={{ height: 1, background: BK, marginTop: 2 }} />
      </div>

      <div style={{ padding: "16px 44px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: 800, color: BK, letterSpacing: "0.06em" }}>PURCHASE ORDER</div>
            <div style={{ fontSize: 10.5, color: "#888", letterSpacing: "0.15em" }}>ใบสั่งซื้อ</div>
          </div>
          <div style={{ background: LG, padding: "12px 20px", fontSize: 10, lineHeight: 2.1 }}>
            <div><span style={{ color: "#aaa", width: 110, display: "inline-block" }}>เลขที่ / PO No.:</span><strong>{docNo}</strong></div>
            <div><span style={{ color: "#aaa", width: 110, display: "inline-block" }}>วันที่ / Date:</span>{docDate}</div>
            <div><span style={{ color: "#aaa", width: 110, display: "inline-block" }}>กำหนดส่ง / Delivery:</span>______ วัน / Days</div>
            <div><span style={{ color: "#aaa", width: 110, display: "inline-block" }}>อ้างอิง / QT Ref.:</span>TSE-QT-XXXX</div>
          </div>
        </div>

        <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px" }}>
          <div style={{ background: LG, padding: "12px 16px" }}>
            <div style={{ fontSize: 8.5, letterSpacing: "0.15em", color: "#aaa", marginBottom: 8 }}>ผู้ขาย / VENDOR</div>
            {["ชื่อบริษัท / Company", "ที่อยู่ / Address", "เลขผู้เสียภาษี / Tax ID", "ผู้ติดต่อ / Contact", "โทร / Tel"].map(f => (
              <div key={f} style={{ borderBottom: "1px solid #e0e0e0", padding: "5px 0", fontSize: 10.5, display: "flex", gap: 6 }}>
                <span style={{ color: "#bbb", fontSize: 9, width: 110, flexShrink: 0 }}>{f}:</span>
                <span style={{ flex: 1 }}>&nbsp;</span>
              </div>
            ))}
          </div>
          <div style={{ background: LG, padding: "12px 16px" }}>
            <div style={{ fontSize: 8.5, letterSpacing: "0.15em", color: "#aaa", marginBottom: 8 }}>จัดส่งไปยัง / SHIP TO</div>
            {["ชื่อโครงการ / Project", "ที่อยู่จัดส่ง / Address", "ผู้รับ / Receiver", "โทร / Tel", "วันที่ต้องการ / Required Date"].map(f => (
              <div key={f} style={{ borderBottom: "1px solid #e0e0e0", padding: "5px 0", fontSize: 10.5, display: "flex", gap: 6 }}>
                <span style={{ color: "#bbb", fontSize: 9, width: 120, flexShrink: 0 }}>{f}:</span>
                <span style={{ flex: 1 }}>&nbsp;</span>
              </div>
            ))}
          </div>
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10.5, marginTop: 16 }}>
          <thead>
            <tr style={{ background: BK, color: "#fff" }}>
              {["#", "รายละเอียด / Description", "Spec/Model", "หน่วย", "จำนวน", "ราคา/หน่วย", "จำนวนเงิน"].map((h, i) => (
                <th key={h} style={{ padding: "8px 10px", textAlign: i < 2 ? "left" : "center", fontWeight: 600, letterSpacing: "0.05em", fontSize: 9 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : LG, borderBottom: "1px solid #ececec" }}>
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
              <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "5px 12px", fontSize: 10.5, borderBottom: "1px solid #ececec" }}>
                <span style={{ color: "#666" }}>{l}</span><span>{v}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: BK, color: "#fff", fontWeight: 700, fontSize: 12, marginTop: 4 }}>
              <span>ยอดรวม / TOTAL</span><span>฿ 0.00</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 14, padding: "12px 16px", background: LG, borderLeft: `3px solid ${BK}` }}>
          <div style={{ fontSize: 9, color: "#aaa", letterSpacing: "0.1em", marginBottom: 6 }}>เงื่อนไขและข้อกำหนด / TERMS & CONDITIONS</div>
          <div style={{ fontSize: 9.5, color: "#555", lineHeight: 1.9 }}>
            <div>1. สินค้าต้องตรงตามรายละเอียดและตัวอย่างที่ได้รับอนุมัติ / Goods must match approved specifications.</div>
            <div>2. กำหนดส่งตามที่ระบุในใบสั่งซื้อ / Delivery as specified in this PO.</div>
            <div>3. ผู้ขายต้องแจ้งล่วงหน้าหากไม่สามารถส่งตรงเวลา / Vendor must notify in advance of any delay.</div>
          </div>
        </div>

        <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0 16px" }}>
          {["ผู้จัดทำ / Prepared By", "ผู้อนุมัติ / Approved By", "ผู้รับสินค้า / Received By"].map(label => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ borderBottom: "1px solid #111", marginBottom: 6, marginTop: 28 }} />
              <div style={{ fontSize: 9, color: "#555" }}>{label}</div>
              <div style={{ fontSize: 8.5, color: "#bbb", marginTop: 3 }}>วันที่: __________</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <div style={{ height: 2, background: BK }} />
        <div style={{ background: BK, padding: "6px 44px", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 8, color: "#fff" }}>{company.nameFullEN} | Tax ID: {company.taxId}</span>
          <span style={{ fontSize: 8, color: "#fff" }}>{company.web}</span>
        </div>
      </div>
    </div>
  );
}
