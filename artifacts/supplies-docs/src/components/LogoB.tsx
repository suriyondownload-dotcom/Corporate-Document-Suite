const NAVY = "#1a2744";
const GOLD = "#c9a84c";

export function LogoB({ size = 56 }: { size?: number }) {
  const s = size / 56;
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="26" stroke={NAVY} strokeWidth="2.5" fill="none"/>
      <line x1="28" y1="10" x2="28" y2="46" stroke={NAVY} strokeWidth="2.5"/>
      <polygon points="6,28 20,20 20,36" fill={NAVY}/>
      <polygon points="50,28 36,20 36,36" fill={NAVY}/>
    </svg>
  );
}

export function LogoBHorizontal({ height = 40 }: { height?: number }) {
  return (
    <div className="flex items-center gap-3">
      <LogoB size={height} />
      <div style={{ width: 1, height: height * 0.8, background: GOLD, opacity: 0.7 }} />
      <div>
        <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontWeight: 700, fontSize: height * 0.45, letterSpacing: "0.12em", color: NAVY, lineHeight: 1.1 }}>
          THE SUPPLIES
        </div>
        <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", fontWeight: 300, fontSize: height * 0.22, letterSpacing: "0.25em", color: GOLD, lineHeight: 1.2, marginTop: 1 }}>
          ELEVATOR &amp; ESCALATOR
        </div>
      </div>
    </div>
  );
}
