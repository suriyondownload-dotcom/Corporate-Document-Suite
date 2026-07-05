export const company = {
  nameEN: "THE SUPPLIES",
  nameFullEN: "THE SUPPLIES COMPANY LIMITED",
  nameTH: "เดอะ ซัพพลายส์",
  nameFullTH: "บริษัท เดอะ ซัพพลายส์ จำกัด",
  taglineEN: "Comprehensive Elevator & Escalator Maintenance Services",
  taglineTH: "ผู้ให้บริการด้านงานติดตั้ง ซ่อมแซม บำรุงรักษา และปรับปรุงลิฟต์และบันไดเลื่อนแบบครบวงจร",
  missionEN: "We deliver installation, repair, maintenance and modernization of elevators and escalators to international standards — built on safety, reliability, transparency and continuous improvement.",
  missionTH: "ดำเนินธุรกิจติดตั้ง ซ่อมแซม บำรุงรักษา และปรับปรุงลิฟต์และบันไดเลื่อนแบบครบวงจร ตามมาตรฐานสากล ยึดหลักความปลอดภัย ความน่าเชื่อถือ ความโปร่งใส และการพัฒนาอย่างต่อเนื่อง",
  tel: "+66 (0) 86-677-9215",
  fax: "+66 (0) 2-030-1039",
  email: "info@thesupplies.co.th",
  web: "www.thesupplies.co.th",
  addressEN: "195/87 City Sense Village, Nonthaburi 6 Rd., Bang Krasor, Mueang Nonthaburi, Nonthaburi 11000, Thailand",
  addressTH: "195/87 หมู่บ้านซิตี้เซนส์วิลเลจ ถนนนนทบุรี 6 ตำบลบางกระสอ อำเภอเมืองนนทบุรี จังหวัดนนทบุรี 11000",
  taxId: "0125563012345",
  values: ["SAFETY", "RELIABILITY", "TRANSPARENCY", "CONTINUOUS IMPROVEMENT", "EXCELLENCE"],
  valuesTH: ["ความปลอดภัย", "ความน่าเชื่อถือ", "ความโปร่งใส", "การพัฒนาอย่างต่อเนื่อง", "ความเป็นเลิศ"],
  certifications: [
    "Official BLT Distributor",
    "Certified EN81 Compliance",
    "106+ Elevator Load Test Certifications",
    "ISO 9001 Quality Management (in progress)",
  ],
  stats: ["200+ Installations", "Certified EN81", "24/7 Emergency Service", "Official BLT Distributor"],

  // Department / division structure — matches operational workflow
  departments: [
    {
      id: "sales",
      nameTH: "ฝ่ายขาย",
      nameEN: "Sales Department",
      scopeTH: "งานทั่วไป",
      scopeEN: "General Business & Client Relations",
      docs: ["quotation", "proposal", "card"],
    },
    {
      id: "service",
      nameTH: "ฝ่ายบริการตลอด 24 ชั่วโมง",
      nameEN: "24-Hour Service Department",
      scopeTH: "งานฉุกเฉิน",
      scopeEN: "Emergency Response & Breakdown Service",
      docs: ["receipt"],
    },
    {
      id: "engineering",
      nameTH: "ฝ่ายวิศวกรรม",
      nameEN: "Engineering Department",
      scopeTH: "งานติดตั้งและปรับปรุง",
      scopeEN: "Installation, Modernization & Technical Works",
      docs: ["letterhead"],
    },
    {
      id: "admin",
      nameTH: "ฝ่ายบริหาร",
      nameEN: "Administration Department",
      scopeTH: "การเงินและสัญญา",
      scopeEN: "Finance & Contracts",
      docs: ["invoice", "invoiceonly"],
    },
    {
      id: "procurement",
      nameTH: "ฝ่ายจัดซื้อ",
      nameEN: "Procurement Department",
      scopeTH: "วัสดุและสินค้าคงคลัง",
      scopeEN: "Materials & Inventory",
      docs: ["po"],
    },
  ],

  // Standard operating process, in sequence
  workflow: [
    { th: "รับข้อมูล", en: "Receive Request" },
    { th: "สร้างรหัสงาน", en: "Create Job Code" },
    { th: "ตรวจสอบ", en: "Inspect" },
    { th: "วางแผน", en: "Plan" },
    { th: "ดำเนินงาน", en: "Execute" },
    { th: "ทดสอบ", en: "Test" },
    { th: "จัดทำรายงาน", en: "Report" },
    { th: "จัดเก็บเอกสาร", en: "Archive Documents" },
    { th: "ติดตามผล", en: "Follow Up" },
  ],

  // Enterprise standards / governing principles
  standards: [
    { th: "มินิมอลระดับองค์กร", en: "Corporate-Grade Minimalism" },
    { th: "มาตรฐานสากล", en: "International Standard" },
    { th: "ระบบอัตโนมัติครบวงจร", en: "End-to-End Automation" },
    { th: "ขับเคลื่อนด้วยข้อมูล", en: "Data-Driven Operations" },
    { th: "ปลอดภัยเป็นอันดับหนึ่ง", en: "Safety First — Always" },
    { th: "ควบคุมคุณภาพทุกขั้นตอน", en: "Quality Control at Every Stage" },
    { th: "รองรับดิจิทัล พร้อมพิมพ์", en: "Digital-Ready, Print-Ready" },
  ],

  safetyProtocol: "หยุดกระบวนการทันทีหากพบความผิดปกติหรือไม่ปลอดภัย / Immediately halt any process upon detecting abnormality or unsafe condition.",

  colors: {
    primary: "#000000",
    secondary: "#E5E5E5",
    neutral: "#FFFFFF",
    navy: "#0B1F3A",
  }
};

export const docDate = "24 มิถุนายน 2569 / 24 June 2026";
export const docNo = "TSE-2026-0001";
