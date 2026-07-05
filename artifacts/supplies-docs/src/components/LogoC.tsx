const NAVY = "#1a2744";
const RED = "#cc1f1f";

export function LogoC({ size = 56 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="12,8 32,8 20,28 12,28" fill={NAVY} opacity="0.9"/>
      <polygon points="20,8 40,8 28,28 20,28" fill={RED} opacity="0.85"/>
      <polygon points="28,8 48,8 36,28 28,28" fill={NAVY} opacity="0.7"/>
      <polygon points="16,30 36,30 24,50 16,50" fill={NAVY} opacity="0.6"/>
      <polygon points="24,30 44,30 32,50 24,50" fill={RED} opacity="0.5"/>
    </svg>
  );
}

export function LogoCHorizontal({ height = 40 }: { height?: number }) {
  return (
    <div className="flex items-center gap-3">
      <LogoC size={height} />
      <div style={{ width: 1.5, height: height * 0.85, background: RED }} />
      <div>
        <div style={{ fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif", fontWeight: 700, fontSize: height * 0.42, letterSpacing: "0.14em", color: NAVY, lineHeight: 1.1 }}>
          THE SUPPLIES
        </div>
        <div style={{ fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif", fontWeight: 400, fontSize: height * 0.19, letterSpacing: "0.24em", color: RED, lineHeight: 1.2, marginTop: 2 }}>
          COMPANY LIMITED
        </div>
      </div>
    </div>
  );
}
