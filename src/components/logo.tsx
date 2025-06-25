export function UshaAppLogo() {
  return (
    <svg width="200" height="50" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8A2BE2" />
          <stop offset="1" stopColor="#4169E1" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="198" height="48" rx="24" fill="black" stroke="url(#logo-gradient)" strokeWidth="2" />
      <text
        x="100"
        y="25"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="24"
        fontFamily="system-ui, sans-serif"
        letterSpacing="1"
      >
        <tspan>ush</tspan>
        <tspan dy="-8" fontSize="16">a</tspan>
        <tspan dy="8">O</tspan>
        <tspan dy="-8" fontSize="16">a</tspan>
        <tspan dy="8">pp</tspan>
      </text>
    </svg>
  )
}
