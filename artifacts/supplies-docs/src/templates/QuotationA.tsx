import { company, docDate, docNo } from "../data/company";
import { LogoAHorizontal } from "../components/LogoA";

const BK = "#111";
const LG = "#f8f8f8";

const items = [
  { no: "01", desc: "ลิฟต์โดยสาร BLT / Passenger Elevator BLT", model: "BLT-XXX", unit: "เครื่อง", qty: 1, price: "0.00" },
  { no: "02", desc: "งานติดตั้ง / Installation Works", model: "-", unit: "งาน", qty: 1, price: "0.00" },
  { no: "03", desc: "อุปกรณ์เสริม / Accessories", model: "-", unit: "ชุด", qty: 1, price: "0.00" },
  { no: "", desc: "", model: "", unit: "", qty: null, price: "" },
  { no: "", desc: "", model: "", unit: "", qty: null, price: "" },
];

export function QuotationA() {
  return (
    <div className="doc-page" style={{ background: "#fff", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      {/* Header */}
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

      {/* Title & Meta */}
      <div style={{ padding: "16px 44px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: 800, color: BK, letterSpacing: "0.08em" }}>QUOTATION</div>
            <div style={{ fontSize: 12, color: "#888", letterSpacing: "0.15em" }}>ใบเสนอราคา</div>
          </div>
          <div style={{ background: LG, padding: "12px 20px", fontSize: 10, lineHeight: 2 }}>
            <div><span style={{ color: "#aaa", width: 90, display: "inline-block" }}>เลขที่ / No.:</span><strong>{docNo}</strong></div>
            <div><span style={{ color: "#aaa", width: 90, display: "inline-block" }}>วันที่ / Date:</span>{docDate}</div>
            <div><span style={{ color: "#aaa", width: 90, display: "inline-block" }}>อ้างอิง / Ref.:</span>TSE-REF-XXXX</div>
            <div><span style={{ color: "#aaa", width: 90, display: "inline-block" }}>อายุ / Valid:</span>30 วัน / Days</div>
          </div>
        </div>

        {/* Client info */}
        <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px" }}>
          <div style={{ background: LG, padding: "12px 16px" }}>
            <div style={{ fontSize: 8.5, letterSpacing: "0.15em", color: "#aaa", marginBottom: 8 }}>เรียน / BILL TO</div>
            {["ชื่อบริษัท / Company", "ที่อยู่ / Address", "เลขผู้เสียภาษี / Tax ID", "ติดต่อ / Contact"].map(l => (
              <div key={l} style={{ borderBottom: "1px solid #e0e0e0", padding: "5px 0", fontSize: 10.5, display: "flex", gap: 6 }}>
                <span style={{ color: "#bbb", fontSize: 9, width: 100, flexShrink: 0 }}>{l}:</span>
                <span style={{ flex: 1 }}>&nbsp;</span>
              </div>
            ))}
          </div>
          <div style={{ background: LG, padding: "12px 16px" }}>
            <div style={{ fontSize: 8.5, letterSpacing: "0.15em", color: "#aaa", marginBottom: 8 }}>สถานที่ / SITE INFO</div>
            {["ชื่อโครงการ / Project", "สถานที่ติดตั้ง / Site", "ผู้ดูแลโครงการ / PM", "โทรศัพท์ / Tel"].map(l => (
              <div key={l} style={{ borderBottom: "1px solid #e0e0e0", padding: "5px 0", fontSize: 10.5, display: "flex", gap: 6 }}>
                <span style={{ color: "#bbb", fontSize: 9, width: 100, flexShrink: 0 }}>{l}:</span>
                <span style={{ flex: 1 }}>&nbsp;</span>
              </div>
            ))}
          </div>
        </div>

        {/* Table */}
        <div style={{ marginTop: 18 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10.5 }}>
            <thead>
              <tr style={{ background: BK, color: "#fff" }}>
                {["#", "รายละเอียด / Description", "รุ่น/Model", "หน่วย", "จำนวน", "ราคาต่อหน่วย", "จำนวนเงิน"].map((h, i) => (
                  <th key={h} style={{ padding: "7px 10px", textAlign: i < 2 ? "left" : "center", fontWeight: 600, letterSpacing: "0.06em", fontSize: 9 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : LG, borderBottom: "1px solid #ececec" }}>
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
        </div>

        {/* Totals */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}>
          <div style={{ width: 280 }}>
            {[["รวมเงิน / Subtotal", "฿ 0.00"], ["ภาษีมูลค่าเพิ่ม 7% / VAT 7%", "฿ 0.00"], ["หัก ณ ที่จ่าย 3% / WHT 3%", "(฿ 0.00)"]].map(([l, v]) => (
              <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "5px 12px", fontSize: 10.5, borderBottom: "1px solid #ececec" }}>
                <span style={{ color: "#666" }}>{l}</span><span>{v}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: BK, color: "#fff", fontWeight: 700, fontSize: 12, marginTop: 4 }}>
              <span>ยอดรวมสุทธิ / TOTAL</span><span>฿ 0.00</span>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
          <div>
            <div style={{ fontSize: 9, letterSpacing: "0.12em", color: "#aaa", marginBottom: 6 }}>เงื่อนไขการชำระเงิน / PAYMENT TERMS</div>
            {["งวดที่ 1 / Payment 1: ____% เมื่อลงนาม", "งวดที่ 2 / Payment 2: ____% ก่อนส่งมอบ", "งวดที่ 3 / Payment 3: ____% หลังทดสอบ"].map(t => (
              <div key={t} style={{ fontSize: 9.5, color: "#555", padding: "3px 0", borderBottom: "1px solid #f0f0f0" }}>{t}</div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <div style={{ fontSize: 9, letterSpacing: "0.12em", color: "#aaa", marginBottom: 10 }}>ลงนาม / AUTHORIZED SIGNATURE</div>
            <div style={{ flex: 1, borderBottom: "1px solid #111", marginBottom: 4 }} />
            <div style={{ fontSize: 9.5, color: "#666" }}>ผู้มีอำนาจลงนาม / Authorized Signatory</div>
            <div style={{ fontSize: 9, color: "#bbb", marginTop: 6 }}>วันที่ / Date: ____________________</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <div style={{ height: 2, background: BK }} />
        <div style={{ background: BK, padding: "6px 44px", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 8, color: "#fff" }}>{company.nameFullEN} | Tax ID: {company.taxId}</span>
          <span style={{ fontSize: 8, color: "#fff" }}>{company.web} | {company.email}</span>
        </div>
      </div>
    </div>
  );
}
