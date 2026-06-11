import { company, docDate, docNo } from "../data/company";
import { LogoBHorizontal } from "../components/LogoB";

const NAVY = "#1a2744";
const GOLD = "#c9a84c";
const WH = "#fff";

export function ReceiptB() {
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
            <div style={{ fontSize: 24, fontWeight: 800, color: NAVY, letterSpacing: "0.06em" }}>RECEIPT</div>
            <div style={{ fontSize: 11, color: "#aaa", letterSpacing: "0.15em" }}>ใบเสร็จรับเงิน</div>
            <div style={{ width: 40, height: 2, background: GOLD, marginTop: 8 }} />
          </div>
          <div style={{ background: "#f5f7fc", border: `1px solid #e0e5f0`, padding: "12px 20px", fontSize: 10, lineHeight: 2.1 }}>
            <div><span style={{ color: "#aaa", width: 120, display: "inline-block" }}>เลขที่ / No.:</span><strong style={{ color: NAVY }}>{docNo}</strong></div>
            <div><span style={{ color: "#aaa", width: 120, display: "inline-block" }}>วันที่รับเงิน / Date:</span>{docDate}</div>
            <div><span style={{ color: "#aaa", width: 120, display: "inline-block" }}>อ้างอิง INV / Ref.:</span>TSE-INV-XXXX</div>
          </div>
        </div>

        <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
          {[["รับเงินจาก / RECEIVED FROM", ["ชื่อบริษัท / Company", "ที่อยู่ / Address", "เลขผู้เสียภาษี / Tax ID", "ผู้ติดต่อ / Contact"]], ["การชำระเงิน / PAYMENT METHOD", ["วิธีชำระ / Method", "เลขเช็ค / Cheque No.", "ธนาคาร / Bank", "วันที่ / Date"]]].map(([title, fields]) => (
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

        <div style={{ marginTop: 16 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10.5 }}>
            <thead>
              <tr style={{ background: NAVY, color: WH }}>
                {["#", "รายการ / Description", "จำนวนเงิน / Amount"].map((h, i) => (
                  <th key={h} style={{ padding: "8px 12px", textAlign: i === 2 ? "right" : i === 0 ? "center" : "left", fontWeight: 600, fontSize: 9 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[["01", "รับชำระตามใบแจ้งหนี้ / Payment per Invoice TSE-INV-XXXX", "฿ 0.00"], ["", "", ""], ["", "", ""], ["", "", ""]].map(([no, desc, amt], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? WH : "#f8f9fc", borderBottom: "1px solid #eef0f5" }}>
                  <td style={{ padding: "10px 12px", width: 32, textAlign: "center" }}>{no}</td>
                  <td style={{ padding: "10px 12px" }}>{desc}</td>
                  <td style={{ padding: "10px 12px", textAlign: "right" }}>{amt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
          <div style={{ width: 290 }}>
            {[["รวม / Subtotal", "฿ 0.00"], ["VAT 7%", "฿ 0.00"], ["WHT 3%", "(฿ 0.00)"]].map(([l, v]) => (
              <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "5px 14px", fontSize: 10.5, borderBottom: "1px solid #eee" }}>
                <span style={{ color: "#888" }}>{l}</span><span>{v}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "9px 14px", background: NAVY, color: WH, fontWeight: 700, fontSize: 12, marginTop: 4 }}>
              <span>ยอดรับสุทธิ / RECEIVED</span><span>฿ 0.00</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 14, padding: "14px 18px", border: `1px solid #e0e5f0`, borderLeft: `3px solid ${GOLD}`, background: "#f8f9fc" }}>
          <div style={{ fontSize: 8.5, color: "#aaa", letterSpacing: "0.12em", marginBottom: 4 }}>จำนวนเงิน (ตัวอักษร) / AMOUNT IN WORDS</div>
          <div style={{ fontSize: 11, color: NAVY }}>__________________________________________</div>
        </div>

        <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px" }}>
          {["ผู้รับเงิน / Received By", "ผู้อนุมัติ / Authorized By"].map(label => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ borderBottom: `2px solid ${NAVY}`, marginBottom: 6, marginTop: 36 }} />
              <div style={{ fontSize: 9.5, color: NAVY, fontWeight: 600 }}>{label}</div>
              <div style={{ fontSize: 9, color: "#bbb", marginTop: 4 }}>วันที่ / Date: ____________________</div>
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
