import { company, docDate, docNo } from "../data/company";
import { LogoAHorizontal } from "../components/LogoA";

const BK = "#111";
const LG = "#f8f8f8";

export function ReceiptA() {
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
            <div style={{ fontSize: 22, fontWeight: 800, color: BK, letterSpacing: "0.06em" }}>RECEIPT</div>
            <div style={{ fontSize: 10.5, color: "#888", letterSpacing: "0.15em" }}>ใบเสร็จรับเงิน</div>
          </div>
          <div style={{ background: LG, padding: "12px 20px", fontSize: 10, lineHeight: 2.1 }}>
            <div><span style={{ color: "#aaa", width: 120, display: "inline-block" }}>เลขที่ / No.:</span><strong>{docNo}</strong></div>
            <div><span style={{ color: "#aaa", width: 120, display: "inline-block" }}>วันที่รับเงิน / Date:</span>{docDate}</div>
            <div><span style={{ color: "#aaa", width: 120, display: "inline-block" }}>อ้างอิง INV / INV Ref.:</span>TSE-INV-XXXX</div>
          </div>
        </div>

        <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px" }}>
          <div style={{ background: LG, padding: "12px 16px" }}>
            <div style={{ fontSize: 8.5, letterSpacing: "0.15em", color: "#aaa", marginBottom: 8 }}>รับเงินจาก / RECEIVED FROM</div>
            {["ชื่อบริษัท / Company", "ที่อยู่ / Address", "เลขผู้เสียภาษี / Tax ID", "ผู้ติดต่อ / Contact"].map(f => (
              <div key={f} style={{ borderBottom: "1px solid #e0e0e0", padding: "5px 0", fontSize: 10.5, display: "flex", gap: 6 }}>
                <span style={{ color: "#bbb", fontSize: 9, width: 120, flexShrink: 0 }}>{f}:</span>
                <span style={{ flex: 1 }}>&nbsp;</span>
              </div>
            ))}
          </div>
          <div style={{ background: LG, padding: "12px 16px" }}>
            <div style={{ fontSize: 8.5, letterSpacing: "0.15em", color: "#aaa", marginBottom: 8 }}>ช่องทางการชำระ / PAYMENT METHOD</div>
            {[["วิธีชำระ / Method", "เงินสด / โอน / เช็ค"], ["เลขเช็ค / Cheque No.", ""], ["ธนาคาร / Bank", ""], ["วันที่ / Date", ""]].map(([l, v]) => (
              <div key={l} style={{ borderBottom: "1px solid #e0e0e0", padding: "5px 0", fontSize: 10.5, display: "flex", gap: 6 }}>
                <span style={{ color: "#bbb", fontSize: 9, width: 120, flexShrink: 0 }}>{l}:</span>
                <span style={{ flex: 1, fontSize: v ? 10.5 : 10.5 }}>{v || "\u00a0"}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 10.5 }}>
            <thead>
              <tr style={{ background: BK, color: "#fff" }}>
                {["#", "รายการ / Description", "จำนวนเงิน / Amount"].map((h, i) => (
                  <th key={h} style={{ padding: "8px 12px", textAlign: i === 2 ? "right" : i === 0 ? "center" : "left", fontWeight: 600, fontSize: 9, letterSpacing: "0.08em" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["01", "รับชำระตามใบแจ้งหนี้ / Payment per Invoice TSE-INV-XXXX", "฿ 0.00"],
                ["", "", ""],
                ["", "", ""],
                ["", "", ""],
              ].map(([no, desc, amt], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : LG, borderBottom: "1px solid #ececec" }}>
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
              <div key={l} style={{ display: "flex", justifyContent: "space-between", padding: "5px 12px", fontSize: 10.5, borderBottom: "1px solid #ececec" }}>
                <span style={{ color: "#666" }}>{l}</span><span>{v}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", background: BK, color: "#fff", fontWeight: 700, fontSize: 12, marginTop: 4 }}>
              <span>ยอดรับสุทธิ / AMOUNT RECEIVED</span><span>฿ 0.00</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 16, padding: "14px 18px", background: "#f5f5f5", borderLeft: `3px solid ${BK}` }}>
          <div style={{ fontSize: 9, color: "#aaa", letterSpacing: "0.12em", marginBottom: 4 }}>จำนวนเงิน (ตัวอักษร) / AMOUNT IN WORDS</div>
          <div style={{ fontSize: 11, color: BK }}>
            ______________________________________________________________________ บาทถ้วน
          </div>
        </div>

        <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ borderBottom: "1px solid #111", marginBottom: 6, marginTop: 36 }} />
            <div style={{ fontSize: 9.5, color: "#555" }}>ผู้รับเงิน / Received By</div>
            <div style={{ fontSize: 9, color: "#bbb", marginTop: 4 }}>วันที่ / Date: ____________________</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ borderBottom: "1px solid #111", marginBottom: 6, marginTop: 36 }} />
            <div style={{ fontSize: 9.5, color: "#555" }}>ผู้อนุมัติ / Authorized By</div>
            <div style={{ fontSize: 9, color: "#bbb", marginTop: 4 }}>วันที่ / Date: ____________________</div>
          </div>
        </div>
        <div style={{ marginTop: 16, padding: "8px 12px", background: "#f0f0f0", fontSize: 8.5, color: "#aaa", textAlign: "center", letterSpacing: "0.1em" }}>
          เอกสารนี้ใช้เป็นหลักฐานการรับชำระเงินเท่านั้น / This document serves as proof of payment only.
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
