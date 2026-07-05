export function LogoA({ size = 56, color = "#111" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="26" stroke={color} strokeWidth="2.5" fill="none"/>
      <line x1="28" y1="10" x2="28" y2="46" stroke={color} strokeWidth="2.5"/>
      <polygon points="6,28 20,20 20,36" fill={color}/>
      <polygon points="50,28 36,20 36,36" fill={color}/>
    </svg>
  );
}

export function LogoAHorizontal({ height = 40, color = "#111" }: { height?: number; color?: string }) {
  const scale = height / 56;
  const w = Math.round(56 * scale);
  return (
    <div className="flex items-center gap-3">
      <LogoA size={height} color={color} />
      <div style={{ width: 1, height: height * 0.8, background: color, opacity: 0.3 }} />
      <div>
        <div style={{ fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif", fontWeight: 600, fontSize: height * 0.42, letterSpacing: "0.16em", color, lineHeight: 1.1 }}>
          THE SUPPLIES
        </div>
        <div style={{ fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif", fontWeight: 400, fontSize: height * 0.19, letterSpacing: "0.26em", color, opacity: 0.6, lineHeight: 1.2, marginTop: 2 }}>
          COMPANY LIMITED
        </div>
      </div>
    </div>
  );
}
