import { useEffect, useState } from "react";
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
import { OverviewProfile } from "./templates/OverviewProfile";
import { LogoIcon } from "./components/Logo";
import { company } from "./data/company";

const SETS = [
  { id: "A", name: "Set A", label: "Monochrome Precision", labelTH: "ขาว-ดำ มินิมอล", accent: "#111111", bg: "#f5f5f5" },
  { id: "B", name: "Set B", label: "Corporate Navy", labelTH: "น้ำเงินองค์กร", accent: "#1a2744", bg: "#eef1f8" },
  { id: "C", name: "Set C", label: "Dynamic Bold", labelTH: "พลังแข็งแกร่ง", accent: "#cc1f1f", bg: "#fff0f0" },
];

const DOCS = [
  { id: "overview", label: "ภาพรวมองค์กร", labelEN: "Company Overview", dept: null },
  { id: "card", label: "นามบัตร", labelEN: "Business Card", dept: "sales" },
  { id: "proposal", label: "ปกแฟ้มโครงการ", labelEN: "Proposal Cover", dept: "sales" },
  { id: "quotation", label: "ใบเสนอราคา", labelEN: "Quotation", dept: "sales" },
  { id: "receipt", label: "ใบเสร็จรับเงิน", labelEN: "Receipt", dept: "service" },
  { id: "letterhead", label: "หัวจดหมาย", labelEN: "Letterhead", dept: "engineering" },
  { id: "invoice", label: "ใบกำกับภาษี", labelEN: "Tax Invoice", dept: "admin" },
  { id: "invoiceonly", label: "ใบแจ้งหนี้", labelEN: "Invoice", dept: "admin" },
  { id: "po", label: "ใบสั่งซื้อ", labelEN: "Purchase Order", dept: "procurement" },
];

function DocRenderer({ set, doc }: { set: string; doc: string }) {
  if (doc === "overview") return <OverviewProfile />;
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
  if (doc === "letterhead") return set === "A" ? <LetterheadA /> : set === "B" ? <LetterheadB /> : <LetterheadC />;
  if (doc === "proposal") return set === "A" ? <ProposalCoverA /> : set === "B" ? <ProposalCoverB /> : <ProposalCoverC />;
  if (doc === "quotation") return set === "A" ? <QuotationA /> : set === "B" ? <QuotationB /> : <QuotationC />;
  if (doc === "invoice") return set === "A" ? <InvoiceA type="TAX INVOICE" /> : set === "B" ? <InvoiceB type="TAX INVOICE" /> : <InvoiceC type="TAX INVOICE" />;
  if (doc === "invoiceonly") return set === "A" ? <InvoiceA type="INVOICE" /> : set === "B" ? <InvoiceB type="INVOICE" /> : <InvoiceC type="INVOICE" />;
  if (doc === "receipt") return set === "A" ? <ReceiptA /> : set === "B" ? <ReceiptB /> : <ReceiptC />;
  if (doc === "po") return set === "A" ? <PurchaseOrderA /> : set === "B" ? <PurchaseOrderB /> : <PurchaseOrderC />;
  return null;
}

export default function App() {
  const [activeSet, setActiveSet] = useState("A");
  const [activeDoc, setActiveDoc] = useState("overview");
  const [dark, setDark] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const currentSet = SETS.find(s => s.id === activeSet)!;

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setCollapsed(window.innerWidth < 1100);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const bg = dark ? "#141414" : "#f0f0f0";
  const panelBg = dark ? "#1c1c1c" : "#fff";
  const border = dark ? "#333" : "#e8e8e8";
  const textMain = dark ? "#eee" : "#111";
  const textSub = dark ? "#888" : "#999";
  const sidebarWidth = isMobile ? 0 : collapsed ? 56 : 220;

  return (
    <div style={{ minHeight: "100vh", background: bg, fontFamily: "'Montserrat','Noto Sans Thai',Arial,sans-serif", transition: "background 0.2s" }}>
      {/* Top bar */}
      <div style={{ background: "#111", padding: isMobile ? "0 14px" : "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 52, position: "sticky", top: 0, zIndex: 100, flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {!isMobile && (
            <button
              onClick={() => setCollapsed(c => !c)}
              aria-label="Toggle sidebar"
              style={{ background: "transparent", border: "none", color: "#fff", cursor: "pointer", fontSize: 16, padding: 4, lineHeight: 1 }}
            >
              ☰
            </button>
          )}
          <LogoIcon size={22} color="#fff" />
          {!isMobile && (
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", letterSpacing: "0.1em" }}>THE SUPPLIES</div>
              <div style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", letterSpacing: "0.18em" }}>ENTERPRISE DOCUMENT SYSTEM</div>
            </div>
          )}
        </div>
        <div style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
          {SETS.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSet(s.id)}
              style={{
                padding: "6px 12px", borderRadius: 3, border: "none", cursor: "pointer", fontWeight: 700,
                fontSize: 10.5, letterSpacing: "0.06em", transition: "all 0.15s",
                background: activeSet === s.id ? s.accent : "rgba(255,255,255,0.08)",
                color: activeSet === s.id ? "#fff" : "rgba(255,255,255,0.55)",
              }}
            >
              {s.name}
            </button>
          ))}
          <button
            onClick={() => setDark(d => !d)}
            aria-label="Toggle dark mode"
            style={{ padding: "6px 10px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 3, color: "#fff", cursor: "pointer", fontSize: 12 }}
          >
            {dark ? "☀" : "☾"}
          </button>
          <button
            onClick={() => window.print()}
            style={{ padding: "6px 14px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 3, color: "#fff", cursor: "pointer", fontSize: 10.5, letterSpacing: "0.06em" }}
          >
            PRINT
          </button>
        </div>
      </div>

      {/* Set header */}
      <div style={{ background: currentSet.accent, padding: isMobile ? "10px 14px" : "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 4 }}>
        <div>
          <span style={{ fontSize: isMobile ? 13 : 18, fontWeight: 800, color: "#fff", letterSpacing: "0.06em" }}>{currentSet.name} — {currentSet.label}</span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", marginLeft: 10, letterSpacing: "0.1em" }}>{currentSet.labelTH}</span>
        </div>
        {!isMobile && <div style={{ fontSize: 9.5, color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em" }}>{company.nameFullEN}</div>}
      </div>

      <div style={{ display: "flex", minHeight: "calc(100vh - 104px)", flexDirection: isMobile ? "column" : "row" }}>
        {/* Sidebar */}
        <div style={{
          width: isMobile ? "100%" : sidebarWidth,
          background: panelBg, borderRight: isMobile ? "none" : `1px solid ${border}`,
          borderBottom: isMobile ? `1px solid ${border}` : "none",
          flexShrink: 0, paddingTop: 12, transition: "width 0.2s", overflow: "hidden",
        }}>
          {isMobile ? (
            <div style={{ display: "flex", overflowX: "auto", gap: 4, padding: "0 10px 10px" }}>
              {DOCS.map(d => (
                <button
                  key={d.id}
                  onClick={() => setActiveDoc(d.id)}
                  style={{
                    flexShrink: 0, padding: "8px 12px", border: "none", borderRadius: 4, cursor: "pointer",
                    background: activeDoc === d.id ? currentSet.accent : (dark ? "#2a2a2a" : "#f0f0f0"),
                    color: activeDoc === d.id ? "#fff" : textMain, fontSize: 10.5, fontWeight: 600, whiteSpace: "nowrap",
                  }}
                >
                  {d.label}
                </button>
              ))}
            </div>
          ) : (
            <>
              {!collapsed && (
                <div style={{ padding: "0 14px 8px", fontSize: 8.5, color: textSub, letterSpacing: "0.14em", fontWeight: 600 }}>เอกสาร / DOCUMENTS</div>
              )}
              {DOCS.map(d => {
                const dept = company.departments.find(dp => dp.id === d.dept);
                return (
                  <button
                    key={d.id}
                    onClick={() => setActiveDoc(d.id)}
                    title={collapsed ? `${d.label} / ${d.labelEN}` : undefined}
                    style={{
                      width: "100%", textAlign: "left", padding: collapsed ? "10px 0" : "9px 14px",
                      display: "flex", justifyContent: collapsed ? "center" : "flex-start",
                      border: "none", cursor: "pointer",
                      background: activeDoc === d.id ? currentSet.bg : "transparent",
                      borderLeft: activeDoc === d.id ? `3px solid ${currentSet.accent}` : "3px solid transparent",
                      transition: "all 0.12s",
                    }}
                  >
                    {collapsed ? (
                      <div style={{ fontSize: 9, fontWeight: 700, color: activeDoc === d.id ? currentSet.accent : textSub }}>
                        {d.labelEN.slice(0, 2).toUpperCase()}
                      </div>
                    ) : (
                      <div>
                        <div style={{ fontSize: 11, fontWeight: activeDoc === d.id ? 700 : 400, color: activeDoc === d.id ? currentSet.accent : textMain, letterSpacing: "0.03em" }}>{d.label}</div>
                        <div style={{ fontSize: 9, color: textSub, marginTop: 1 }}>{d.labelEN}{dept ? ` · ${dept.nameEN}` : ""}</div>
                      </div>
                    )}
                  </button>
                );
              })}

              {!collapsed && (
                <>
                  <div style={{ padding: "18px 14px 8px", fontSize: 8.5, color: textSub, letterSpacing: "0.14em", fontWeight: 600 }}>ฝ่ายงาน / DEPARTMENTS</div>
                  {company.departments.map(d => (
                    <div key={d.id} style={{ padding: "6px 14px" }}>
                      <div style={{ fontSize: 9.5, color: textMain, fontWeight: 600 }}>{d.nameTH}</div>
                      <div style={{ fontSize: 8, color: textSub }}>{d.nameEN}</div>
                    </div>
                  ))}

                  <div style={{ padding: "18px 14px 8px", fontSize: 8.5, color: textSub, letterSpacing: "0.14em", fontWeight: 600 }}>ALL SETS</div>
                  {SETS.map(s => (
                    <div
                      key={s.id}
                      onClick={() => setActiveSet(s.id)}
                      style={{
                        padding: "7px 14px", cursor: "pointer",
                        background: activeSet === s.id ? s.bg : "transparent",
                        borderLeft: activeSet === s.id ? `3px solid ${s.accent}` : "3px solid transparent",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 9, height: 9, borderRadius: 2, background: s.accent, flexShrink: 0 }} />
                        <div style={{ fontSize: 10, color: activeSet === s.id ? s.accent : textMain, fontWeight: activeSet === s.id ? 700 : 400 }}>{s.name}</div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </>
          )}
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: isMobile ? "18px 12px" : "36px", overflow: "auto", background: dark ? "#1a1a1a" : "#e8e8e8" }}>
          <div style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 4, height: 20, background: currentSet.accent }} />
            <div>
              <div style={{ fontSize: isMobile ? 13 : 16, fontWeight: 700, color: textMain }}>
                {DOCS.find(d => d.id === activeDoc)?.label}
              </div>
              <div style={{ fontSize: 10.5, color: textSub }}>
                {DOCS.find(d => d.id === activeDoc)?.labelEN} · {currentSet.name} · {currentSet.label}
              </div>
            </div>
          </div>

          <div className="no-print" style={{ display: "flex", justifyContent: "center", overflowX: "auto" }}>
            <div style={{ transform: isMobile ? "scale(0.4)" : "scale(0.85)", transformOrigin: "top center" }}>
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
