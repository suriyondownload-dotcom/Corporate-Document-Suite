export function LogoIcon({ size = 56, color = "#000" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="26" stroke={color} strokeWidth="2" fill="none"/>
      <line x1="28" y1="10" x2="28" y2="46" stroke={color} strokeWidth="2.5"/>
      <polygon points="6,28 20,20 20,36" fill={color}/>
      <polygon points="50,28 36,20 36,36" fill={color}/>
    </svg>
  );
}

export function LogoHorizontal({ height = 44, color = "#000", showThai = true }: { height?: number; color?: string; showThai?: boolean }) {
  const scale = height / 56;
  const iconSize = Math.round(44 * scale);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <LogoIcon size={iconSize} color={color} />
      <div style={{ width: 1, height: height * 0.75, background: color, opacity: 0.25 }} />
      <div>
        <div style={{
          fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
          fontWeight: 600,
          fontSize: height * 0.42,
          letterSpacing: "0.18em",
          color,
          lineHeight: 1.05,
          textTransform: "uppercase"
        }}>
          THE SUPPLIES
        </div>
        <div style={{
          fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
          fontWeight: 400,
          fontSize: height * 0.18,
          letterSpacing: "0.28em",
          color,
          opacity: 0.65,
          lineHeight: 1.2,
          marginTop: 2
        }}>
          COMPANY LIMITED
        </div>
        {showThai && (
          <div style={{
            fontFamily: "'Noto Sans Thai', 'Sukhumvit Set', sans-serif",
            fontWeight: 400,
            fontSize: height * 0.16,
            letterSpacing: "0.06em",
            color,
            opacity: 0.5,
            lineHeight: 1.3,
            marginTop: 3
          }}>
            บริษัท เดอะ ซัพพลายส์ จำกัด
          </div>
        )}
      </div>
    </div>
  );
}

export function LogoVertical({ size = 56, color = "#000" }: { size?: number; color?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
      <LogoIcon size={size} color={color} />
      <div style={{ textAlign: "center" }}>
        <div style={{
          fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
          fontWeight: 600,
          fontSize: size * 0.32,
          letterSpacing: "0.18em",
          color,
          lineHeight: 1.1,
          textTransform: "uppercase"
        }}>
          THE SUPPLIES
        </div>
        <div style={{
          fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
          fontWeight: 400,
          fontSize: size * 0.14,
          letterSpacing: "0.28em",
          color,
          opacity: 0.6,
          lineHeight: 1.2,
          marginTop: 2
        }}>
          COMPANY LIMITED
        </div>
      </div>
    </div>
  );
}
