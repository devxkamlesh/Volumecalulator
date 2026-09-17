/**
 * Generates clean, crisp Notion-styled SVGs with labeled dimension arrows
 */
export function getShapeSvg(shapeId: string): string {
  const stroke = '#1c1917';
  const fill = '#0075de';
  const guide = '#dd5b00';

  switch (shapeId) {
    case 'cube':
      return `
        <svg viewBox="0 0 200 160" class="w-full h-full max-h-[220px]">
          <!-- Faces -->
          <polygon points="40,110 110,140 170,105 100,75" fill="${fill}" fill-opacity="0.08" stroke="${stroke}" stroke-width="2"/>
          <polygon points="40,50 110,80 170,45 100,15" fill="${fill}" fill-opacity="0.18" stroke="${stroke}" stroke-width="2"/>
          <polygon points="40,50 110,80 110,140 40,110" fill="${fill}" fill-opacity="0.12" stroke="${stroke}" stroke-width="2"/>
          <polygon points="110,80 170,45 170,105 110,140" fill="${fill}" fill-opacity="0.25" stroke="${stroke}" stroke-width="2"/>
          <!-- Hidden lines -->
          <line x1="40" y1="50" x2="40" y2="110" stroke="${stroke}" stroke-width="2"/>
          <!-- Dimension guide a -->
          <line x1="32" y1="52" x2="32" y2="108" stroke="${guide}" stroke-width="2" stroke-dasharray="3,3"/>
          <text x="18" y="85" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">a</text>
          <line x1="40" y1="120" x2="110" y2="150" stroke="${guide}" stroke-width="2" stroke-dasharray="3,3"/>
          <text x="70" y="146" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">a</text>
        </svg>
      `;

    case 'rectangular_prism':
      return `
        <svg viewBox="0 0 220 160" class="w-full h-full max-h-[220px]">
          <!-- Faces -->
          <polygon points="25,55 125,95 200,60 100,20" fill="${fill}" fill-opacity="0.18" stroke="${stroke}" stroke-width="2"/>
          <polygon points="25,55 125,95 125,135 25,95" fill="${fill}" fill-opacity="0.12" stroke="${stroke}" stroke-width="2"/>
          <polygon points="125,95 200,60 200,100 125,135" fill="${fill}" fill-opacity="0.24" stroke="${stroke}" stroke-width="2"/>
          <!-- Dimension guides -->
          <line x1="20" y1="102" x2="120" y2="142" stroke="${guide}" stroke-width="2" stroke-dasharray="3,3"/>
          <text x="65" y="132" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">l</text>
          <line x1="132" y1="138" x2="204" y2="103" stroke="${guide}" stroke-width="2" stroke-dasharray="3,3"/>
          <text x="175" y="128" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">w</text>
          <line x1="16" y1="55" x2="16" y2="95" stroke="${guide}" stroke-width="2" stroke-dasharray="3,3"/>
          <text x="5" y="80" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">h</text>
        </svg>
      `;

    case 'cylinder':
      return `
        <svg viewBox="0 0 200 170" class="w-full h-full max-h-[220px]">
          <!-- Body -->
          <path d="M50,45 L50,125 C50,140 150,140 150,125 L150,45 Z" fill="${fill}" fill-opacity="0.12"/>
          <line x1="50" y1="45" x2="50" y2="125" stroke="${stroke}" stroke-width="2"/>
          <line x1="150" y1="45" x2="150" y2="125" stroke="${stroke}" stroke-width="2"/>
          <!-- Bottom ellipse arc -->
          <path d="M50,125 C50,142 150,142 150,125" stroke="${stroke}" stroke-width="2" fill="none"/>
          <path d="M50,125 C50,110 150,110 150,125" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="3,3" fill="none"/>
          <!-- Top ellipse -->
          <ellipse cx="100" cy="45" rx="50" ry="16" fill="${fill}" fill-opacity="0.25" stroke="${stroke}" stroke-width="2"/>
          <!-- Radius line -->
          <line x1="100" y1="45" x2="150" y2="45" stroke="${guide}" stroke-width="2"/>
          <circle cx="100" cy="45" r="2.5" fill="${guide}"/>
          <text x="120" y="40" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">r</text>
          <!-- Height guide -->
          <line x1="162" y1="45" x2="162" y2="125" stroke="${guide}" stroke-width="2" stroke-dasharray="3,3"/>
          <text x="170" y="90" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">h</text>
        </svg>
      `;

    case 'sphere':
      return `
        <svg viewBox="0 0 200 170" class="w-full h-full max-h-[220px]">
          <!-- Sphere outline & gradient -->
          <circle cx="100" cy="85" r="60" fill="${fill}" fill-opacity="0.12" stroke="${stroke}" stroke-width="2"/>
          <!-- Equator -->
          <ellipse cx="100" cy="85" rx="60" ry="20" fill="none" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="4,4"/>
          <!-- Radius line -->
          <line x1="100" y1="85" x2="160" y2="85" stroke="${guide}" stroke-width="2"/>
          <circle cx="100" cy="85" r="3" fill="${guide}"/>
          <text x="125" y="80" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">r</text>
        </svg>
      `;

    case 'cone':
      return `
        <svg viewBox="0 0 200 170" class="w-full h-full max-h-[220px]">
          <!-- Body -->
          <polygon points="100,20 45,130 155,130" fill="${fill}" fill-opacity="0.12"/>
          <line x1="100" y1="20" x2="45" y2="130" stroke="${stroke}" stroke-width="2"/>
          <line x1="100" y1="20" x2="155" y2="130" stroke="${stroke}" stroke-width="2"/>
          <!-- Base -->
          <ellipse cx="100" cy="130" rx="55" ry="18" fill="${fill}" fill-opacity="0.2" stroke="${stroke}" stroke-width="2"/>
          <!-- Height center line -->
          <line x1="100" y1="20" x2="100" y2="130" stroke="${guide}" stroke-width="2" stroke-dasharray="3,3"/>
          <text x="105" y="75" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">h</text>
          <!-- Radius line -->
          <line x1="100" y1="130" x2="155" y2="130" stroke="${guide}" stroke-width="2"/>
          <circle cx="100" cy="130" r="2.5" fill="${guide}"/>
          <text x="125" y="125" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">r</text>
        </svg>
      `;

    case 'capsule':
      return `
        <svg viewBox="0 0 220 160" class="w-full h-full max-h-[220px]">
          <!-- Left dome -->
          <path d="M60,40 C35,40 35,110 60,110" fill="${fill}" fill-opacity="0.18" stroke="${stroke}" stroke-width="2"/>
          <!-- Cylinder body -->
          <rect x="60" y="40" width="100" height="70" fill="${fill}" fill-opacity="0.12" stroke="none"/>
          <line x1="60" y1="40" x2="160" y2="40" stroke="${stroke}" stroke-width="2"/>
          <line x1="60" y1="110" x2="160" y2="110" stroke="${stroke}" stroke-width="2"/>
          <!-- Right dome -->
          <path d="M160,40 C185,40 185,110 160,110" fill="${fill}" fill-opacity="0.18" stroke="${stroke}" stroke-width="2"/>
          <!-- Divider dashes -->
          <line x1="60" y1="40" x2="60" y2="110" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="3,3"/>
          <line x1="160" y1="40" x2="160" y2="110" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="3,3"/>
          <!-- Guides -->
          <line x1="60" y1="122" x2="160" y2="122" stroke="${guide}" stroke-width="2"/>
          <text x="105" y="138" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">a</text>
          <line x1="60" y1="75" x2="60" y2="40" stroke="${guide}" stroke-width="2"/>
          <text x="66" y="62" fill="${guide}" font-weight="700" font-size="13" font-family="Inter, sans-serif">r</text>
        </svg>
      `;

    case 'spherical_cap':
      return `
        <svg viewBox="0 0 200 160" class="w-full h-full max-h-[220px]">
          <!-- Cap curved top -->
          <path d="M35,115 C35,45 165,45 165,115 Z" fill="${fill}" fill-opacity="0.15" stroke="${stroke}" stroke-width="2"/>
          <!-- Base rim -->
          <ellipse cx="100" cy="115" rx="65" ry="18" fill="${fill}" fill-opacity="0.25" stroke="${stroke}" stroke-width="2"/>
          <!-- Guides -->
          <line x1="100" y1="55" x2="100" y2="115" stroke="${guide}" stroke-width="2" stroke-dasharray="3,3"/>
          <text x="105" y="85" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">h</text>
          <line x1="100" y1="115" x2="165" y2="115" stroke="${guide}" stroke-width="2"/>
          <circle cx="100" cy="115" r="2.5" fill="${guide}"/>
          <text x="130" y="110" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">r</text>
        </svg>
      `;

    case 'conical_frustum':
      return `
        <svg viewBox="0 0 200 170" class="w-full h-full max-h-[220px]">
          <!-- Body -->
          <polygon points="70,45 130,45 160,135 40,135" fill="${fill}" fill-opacity="0.12"/>
          <line x1="70" y1="45" x2="40" y2="135" stroke="${stroke}" stroke-width="2"/>
          <line x1="130" y1="45" x2="160" y2="135" stroke="${stroke}" stroke-width="2"/>
          <!-- Top ellipse -->
          <ellipse cx="100" cy="45" rx="30" ry="10" fill="${fill}" fill-opacity="0.2" stroke="${stroke}" stroke-width="2"/>
          <line x1="100" y1="45" x2="130" y2="45" stroke="${guide}" stroke-width="2"/>
          <text x="110" y="40" fill="${guide}" font-weight="700" font-size="13" font-family="Inter, sans-serif">r₁</text>
          <!-- Bottom ellipse -->
          <ellipse cx="100" cy="135" rx="60" ry="18" fill="${fill}" fill-opacity="0.25" stroke="${stroke}" stroke-width="2"/>
          <line x1="100" y1="135" x2="160" y2="135" stroke="${guide}" stroke-width="2"/>
          <text x="125" y="130" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">r₂</text>
          <!-- Height -->
          <line x1="172" y1="45" x2="172" y2="135" stroke="${guide}" stroke-width="2" stroke-dasharray="3,3"/>
          <text x="180" y="95" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">h</text>
        </svg>
      `;

    case 'ellipsoid':
      return `
        <svg viewBox="0 0 220 160" class="w-full h-full max-h-[220px]">
          <ellipse cx="110" cy="80" rx="75" ry="45" fill="${fill}" fill-opacity="0.15" stroke="${stroke}" stroke-width="2"/>
          <ellipse cx="110" cy="80" rx="75" ry="20" fill="none" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="3,3"/>
          <!-- Axes a, b, c -->
          <line x1="110" y1="80" x2="185" y2="80" stroke="${guide}" stroke-width="2"/>
          <text x="145" y="75" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">a</text>
          <line x1="110" y1="80" x2="110" y2="35" stroke="${guide}" stroke-width="2"/>
          <text x="115" y="55" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">c</text>
          <line x1="110" y1="80" x2="80" y2="92" stroke="${guide}" stroke-width="2"/>
          <text x="88" y="98" fill="${guide}" font-weight="700" font-size="13" font-family="Inter, sans-serif">b</text>
        </svg>
      `;

    case 'square_pyramid':
      return `
        <svg viewBox="0 0 200 170" class="w-full h-full max-h-[220px]">
          <polygon points="100,20 40,125 105,145 160,115" fill="${fill}" fill-opacity="0.15" stroke="${stroke}" stroke-width="2"/>
          <line x1="100" y1="20" x2="105" y2="145" stroke="${stroke}" stroke-width="2"/>
          <!-- Guides -->
          <line x1="100" y1="20" x2="100" y2="128" stroke="${guide}" stroke-width="2" stroke-dasharray="3,3"/>
          <text x="105" y="70" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">h</text>
          <line x1="35" y1="135" x2="100" y2="155" stroke="${guide}" stroke-width="2"/>
          <text x="65" y="152" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">a</text>
        </svg>
      `;

    case 'triangular_prism':
      return `
        <svg viewBox="0 0 220 160" class="w-full h-full max-h-[220px]">
          <!-- Triangular faces -->
          <polygon points="35,120 75,40 115,120" fill="${fill}" fill-opacity="0.18" stroke="${stroke}" stroke-width="2"/>
          <polygon points="115,120 75,40 180,60 190,110" fill="${fill}" fill-opacity="0.12" stroke="${stroke}" stroke-width="2"/>
          <line x1="75" y1="40" x2="180" y2="60" stroke="${stroke}" stroke-width="2"/>
          <line x1="115" y1="120" x2="190" y2="110" stroke="${stroke}" stroke-width="2"/>
          <!-- Guides -->
          <line x1="75" y1="40" x2="75" y2="120" stroke="${guide}" stroke-width="2" stroke-dasharray="3,3"/>
          <text x="80" y="80" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">h</text>
          <line x1="35" y1="130" x2="115" y2="130" stroke="${guide}" stroke-width="2"/>
          <text x="70" y="145" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">b</text>
          <line x1="120" y1="125" x2="195" y2="115" stroke="${guide}" stroke-width="2"/>
          <text x="160" y="130" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">l</text>
        </svg>
      `;

    case 'hollow_cylinder':
      return `
        <svg viewBox="0 0 200 170" class="w-full h-full max-h-[220px]">
          <!-- Outer cylinder -->
          <path d="M40,45 L40,125 C40,140 160,140 160,125 L160,45 Z" fill="${fill}" fill-opacity="0.1"/>
          <line x1="40" y1="45" x2="40" y2="125" stroke="${stroke}" stroke-width="2"/>
          <line x1="160" y1="45" x2="160" y2="125" stroke="${stroke}" stroke-width="2"/>
          <!-- Outer ellipses -->
          <ellipse cx="100" cy="45" rx="60" ry="18" fill="${fill}" fill-opacity="0.2" stroke="${stroke}" stroke-width="2"/>
          <ellipse cx="100" cy="125" rx="60" ry="18" fill="none" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="3,3"/>
          <!-- Inner bore -->
          <ellipse cx="100" cy="45" rx="35" ry="10" fill="#f6f5f4" stroke="${stroke}" stroke-width="1.8"/>
          <!-- Radii guide -->
          <line x1="100" y1="45" x2="135" y2="45" stroke="${guide}" stroke-width="2"/>
          <text x="112" y="41" fill="${guide}" font-weight="700" font-size="13" font-family="Inter, sans-serif">r</text>
          <line x1="100" y1="45" x2="160" y2="45" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="2,2"/>
          <text x="145" y="41" fill="${stroke}" font-weight="700" font-size="13" font-family="Inter, sans-serif">R</text>
        </svg>
      `;

    case 'horizontal_tank_fill':
      return `
        <svg viewBox="0 0 220 160" class="w-full h-full max-h-[220px]">
          <!-- Tank body -->
          <ellipse cx="60" cy="80" rx="30" ry="50" fill="${fill}" fill-opacity="0.08" stroke="${stroke}" stroke-width="2"/>
          <path d="M60,30 L160,30 C175,30 190,52 190,80 C190,108 175,130 160,130 L60,130" fill="${fill}" fill-opacity="0.08" stroke="${stroke}" stroke-width="2"/>
          <!-- Wet liquid level fill (bottom half) -->
          <path d="M60,85 L160,85 C172,85 188,102 188,115 C185,125 172,130 160,130 L60,130 C45,130 35,115 35,100 C35,92 48,85 60,85 Z" fill="#0075de" fill-opacity="0.35"/>
          <line x1="35" y1="85" x2="185" y2="85" stroke="#0075de" stroke-width="2" stroke-dasharray="4,3"/>
          <text x="100" y="105" fill="#005bab" font-weight="700" font-size="13" font-family="Inter, sans-serif">LIQUID</text>
          <!-- Liquid depth d guide -->
          <line x1="25" y1="85" x2="25" y2="130" stroke="${guide}" stroke-width="2"/>
          <text x="12" y="112" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">d</text>
          <!-- Length L guide -->
          <line x1="60" y1="20" x2="160" y2="20" stroke="${guide}" stroke-width="2"/>
          <text x="105" y="15" fill="${guide}" font-weight="700" font-size="14" font-family="Inter, sans-serif">L</text>
        </svg>
      `;

    default:
      return `
        <svg viewBox="0 0 200 160" class="w-full h-full max-h-[220px]">
          <polygon points="50,110 110,140 170,105 100,75" fill="${fill}" fill-opacity="0.1" stroke="${stroke}" stroke-width="2"/>
          <polygon points="50,50 110,80 170,45 100,15" fill="${fill}" fill-opacity="0.2" stroke="${stroke}" stroke-width="2"/>
          <line x1="50" y1="50" x2="50" y2="110" stroke="${stroke}" stroke-width="2"/>
          <line x1="110" y1="80" x2="110" y2="140" stroke="${stroke}" stroke-width="2"/>
          <line x1="170" y1="45" x2="170" y2="105" stroke="${stroke}" stroke-width="2"/>
        </svg>
      `;
  }
}
