import { useState } from "react";
import { BusinessCardAFront, BusinessCardABack } from "./templates/BusinessCardA";
import { BusinessCardBFront, BusinessCardBBack } from "./templates/BusinessCardB";
import { BusinessCardCFront, BusinessCardCBack } from "./templates/BusinessCardC";
import { LetterheadA } from "./templates/LetterheadA";
import { LetterheadB } from "./templates/LetterheadB";
import { LetterheadC } from "./templates/LetterheadC";
import { ProposalCoverA } from "./templates/ProposalCoverA";
import { ProposalCoverB } from "./templates/ProposalCoverB";
import { ProposalCoverC } from "./templates/ProposalCoverC";
import { QuotationA } from "./templates/QuotationA";
import { QuotationB } from "./templates/QuotationB";
import { QuotationC } from "./templates/QuotationC";
import { InvoiceA } from "./templates/InvoiceA";
import { InvoiceB } from "./templates/InvoiceB";
import { InvoiceC } from "./templates/InvoiceC";
import { ReceiptA } from "./templates/ReceiptA";
import { ReceiptB } from "./templates/ReceiptB";
import { ReceiptC } from "./templates/ReceiptC";
import { PurchaseOrderA } from "./templates/PurchaseOrderA";
import { PurchaseOrderB } from "./templates/PurchaseOrderB";
import { PurchaseOrderC } from "./templates/PurchaseOrderC";

const SETS = [
  {
    id: "A",
    name: "Set A",
    label: "Monochrome Precision",
    labelTH: "ขาว-ดำ มินิมอล",
    accent: "#111111",
    bg: "#f5f5f5",
  },
  {
    id: "B",
    name: "Set B",
    label: "Corporate Navy",
    labelTH: "น้ำเงินองค์กร",
    accent: "#1a2744",
    bg: "#eef1f8",
  },
  {
    id: "C",
    name: "Set C",
    label: "Dynamic Bold",
    labelTH: "พลังแข็งแกร่ง",
    accent: "#cc1f1f",
    bg: "#fff0f0",
  },
];

const DOCS = [
  { id: "card", label: "นามบัตร", labelEN: "Business Card" },
  { id: "letterhead", label: "หัวจดหมาย", labelEN: "Letterhead" },
  { id: "proposal", label: "ปกแฟ้มโครงการ", labelEN: "Proposal Cover" },
  { id: "quotation", label: "ใบเสนอราคา", labelEN: "Quotation" },
  { id: "invoice", label: "ใบกำกับภาษี", labelEN: "Tax Invoice" },
  { id: "invoiceonly", label: "ใบแจ้งหนี้", labelEN: "Invoice" },
  { id: "receipt", label: "ใบเสร็จรับเงิน", labelEN: "Receipt" },
  { id: "po", label: "ใบสั่งซื้อ", labelEN: "Purchase Order" },
];

function DocRenderer({ set, doc }: { set: string; doc: string }) {
  if (doc === "card") {
    const Front = set === "A" ? BusinessCardAFront : set === "B" ? BusinessCardBFront : BusinessCardCFront;
    const Back = set === "A" ? BusinessCardABack : set === "B" ? BusinessCardBBack : BusinessCardCBack;
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 32, alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 11, color: "#999", letterSpacing: "0.12em", marginBottom: 10, textAlign: "center" }}>FRONT / หน้า</div>
          <Front />
        </div>
        <div>
          <div style={{ fontSize: 11, color: "#999", letterSpacing: "0.12em", marginBottom: 10, textAlign: "center" }}>BACK / หลัง</div>
          <Back />
        </div>
      </div>
    );
  }
  if (doc === "letterhead") {
    return set === "A" ? <LetterheadA /> : set === "B" ? <LetterheadB /> : <LetterheadC />;
  }
  if (doc === "proposal") {
    return set === "A" ? <ProposalCoverA /> : set === "B" ? <ProposalCoverB /> : <ProposalCoverC />;
  }
  if (doc === "quotation") {
    return set === "A" ? <QuotationA /> : set === "B" ? <QuotationB /> : <QuotationC />;
  }
  if (doc === "invoice") {
    return set === "A" ? <InvoiceA type="TAX INVOICE" /> : set === "B" ? <InvoiceB type="TAX INVOICE" /> : <InvoiceC type="TAX INVOICE" />;
  }
  if (doc === "invoiceonly") {
    return set === "A" ? <InvoiceA type="INVOICE" /> : set === "B" ? <InvoiceB type="INVOICE" /> : <InvoiceC type="INVOICE" />;
  }
  if (doc === "receipt") {
    return set === "A" ? <ReceiptA /> : set === "B" ? <ReceiptB /> : <ReceiptC />;
  }
  if (doc === "po") {
    return set === "A" ? <PurchaseOrderA /> : set === "B" ? <PurchaseOrderB /> : <PurchaseOrderC />;
  }
  return null;
}

export default function App() {
  const [activeSet, setActiveSet] = useState("A");
  const [activeDoc, setActiveDoc] = useState("card");
  const currentSet = SETS.find(s => s.id === activeSet)!;

  return (
    <div style={{ minHeight: "100vh", background: "#f0f0f0", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      {/* Top bar */}
      <div style={{ background: "#111", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 52, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <svg width="24" height="24" viewBox="0 0 56 56" fill="none">
            <circle cx="28" cy="28" r="26" stroke="white" strokeWidth="2.5"/>
            <line x1="28" y1="10" x2="28" y2="46" stroke="white" strokeWidth="2.5"/>
            <polygon points="6,28 20,20 20,36" fill="white"/>
            <polygon points="50,28 36,20 36,36" fill="white"/>
          </svg>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: "0.12em" }}>THE SUPPLIES</div>
            <div style={{ fontSize: 8.5, color: "rgba(255,255,255,0.4)", letterSpacing: "0.22em" }}>DOCUMENT TEMPLATE SYSTEM</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {SETS.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSet(s.id)}
              style={{
                padding: "6px 18px",
                borderRadius: 3,
                border: "none",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.08em",
                transition: "all 0.15s",
                background: activeSet === s.id ? s.accent : "rgba(255,255,255,0.08)",
                color: activeSet === s.id ? "#fff" : "rgba(255,255,255,0.55)",
              }}
            >
              {s.name}
            </button>
          ))}
        </div>
        <button
          onClick={() => window.print()}
          style={{ padding: "6px 18px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 3, color: "#fff", cursor: "pointer", fontSize: 11, letterSpacing: "0.08em" }}
        >
          PRINT
        </button>
      </div>

      {/* Set header */}
      <div style={{ background: currentSet.accent, padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <span style={{ fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: "0.06em" }}>{currentSet.name} — {currentSet.label}</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginLeft: 12, letterSpacing: "0.12em" }}>{currentSet.labelTH}</span>
        </div>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em" }}>
          THE SUPPLIES ELEVATOR &amp; ESCALATOR
        </div>
      </div>

      <div style={{ display: "flex", minHeight: "calc(100vh - 104px)" }}>
        {/* Sidebar */}
        <div style={{ width: 200, background: "#fff", borderRight: "1px solid #e8e8e8", flexShrink: 0, paddingTop: 16 }}>
          <div style={{ padding: "0 16px 10px", fontSize: 8.5, color: "#bbb", letterSpacing: "0.16em", fontWeight: 600 }}>เอกสาร / DOCUMENTS</div>
          {DOCS.map(d => (
            <button
              key={d.id}
              onClick={() => setActiveDoc(d.id)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "10px 16px",
                border: "none",
                cursor: "pointer",
                background: activeDoc === d.id ? currentSet.bg : "transparent",
                borderLeft: activeDoc === d.id ? `3px solid ${currentSet.accent}` : "3px solid transparent",
                transition: "all 0.12s",
              }}
            >
              <div style={{ fontSize: 11, fontWeight: activeDoc === d.id ? 700 : 400, color: activeDoc === d.id ? currentSet.accent : "#555", letterSpacing: "0.04em" }}>{d.label}</div>
              <div style={{ fontSize: 9.5, color: "#aaa", marginTop: 1 }}>{d.labelEN}</div>
            </button>
          ))}

          <div style={{ padding: "20px 16px 10px", fontSize: 8.5, color: "#bbb", letterSpacing: "0.16em", fontWeight: 600 }}>ALL SETS</div>
          {SETS.map(s => (
            <div
              key={s.id}
              onClick={() => setActiveSet(s.id)}
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                background: activeSet === s.id ? s.bg : "transparent",
                borderLeft: activeSet === s.id ? `3px solid ${s.accent}` : "3px solid transparent",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 10, height: 10, borderRadius: 2, background: s.accent, flexShrink: 0 }} />
                <div style={{ fontSize: 10.5, color: activeSet === s.id ? s.accent : "#666", fontWeight: activeSet === s.id ? 700 : 400 }}>{s.name}</div>
              </div>
              <div style={{ fontSize: 8.5, color: "#bbb", marginLeft: 18 }}>{s.labelTH}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: "36px", overflow: "auto", background: "#e8e8e8" }}>
          <div style={{ marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 4, height: 20, background: currentSet.accent }} />
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#111" }}>
                {DOCS.find(d => d.id === activeDoc)?.label}
              </div>
              <div style={{ fontSize: 11, color: "#999" }}>
                {DOCS.find(d => d.id === activeDoc)?.labelEN} · {currentSet.name} · {currentSet.label}
              </div>
            </div>
          </div>

          <div className="no-print" style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ transform: "scale(0.85)", transformOrigin: "top center" }}>
              <DocRenderer set={activeSet} doc={activeDoc} />
            </div>
          </div>
          <div className="print-page" style={{ display: "none" }}>
            <DocRenderer set={activeSet} doc={activeDoc} />
          </div>
        </div>
      </div>
    </div>
  );
}
