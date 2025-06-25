export function UshaAppLogo() {
  return (
    <svg width="200" height="50" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8A2BE2" />
          <stop offset="1" stopColor="#4169E1" />
        </linearGradient>
        <linearGradient id="logo-gradient-animated" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="200" y2="0">
            <stop stopColor="#00FFA3" />
            <stop offset="0.5" stopColor="#00D1FF" />
            <stop offset="1" stopColor="#FF00F5" />
            <animateTransform
                attributeName="gradientTransform"
                type="rotate"
                from="0 100 25"
                to="360 100 25"
                dur="4s"
                repeatCount="indefinite"
            />
        </linearGradient>
      </defs>
      <g className="logo-group">
        <rect className="logo-rect-normal" x="1" y="1" width="198" height="48" rx="24" fill="black" stroke="url(#logo-gradient)" strokeWidth="2" />
        <rect className="logo-rect-hover" x="1" y="1" width="198" height="48" rx="24" fill="black" stroke="url(#logo-gradient-animated)" strokeWidth="2" />
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
      </g>
    </svg>
  )
}
