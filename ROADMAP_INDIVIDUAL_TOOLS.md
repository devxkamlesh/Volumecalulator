# Roadmap & Specification: Individual Tool Pages

> **Status**: COMPLETED & FULLY DEPLOYED (16 Standalone Tools)  
> **All 16 single pages created, tested, and cross-linked.**

---

## 1. Context & Architecture Overview
- **Homepage (`/`)**: Stays clean, mobile-first, and uncluttered for everyday users (5 core shapes: Box, Cylinder, Sphere, Cube, Cone) with a clean "Dedicated Single Page →" link on each tab.
- **Hub Directory (`/calculators`)**: Central directory featuring all 16 tools with instant search, category filtering (Basic 3D, Curved, Pyramids & Prisms, Tanks & Pipes), mathematical cheat-sheet table, and FAQs.
- **16 Dedicated Standalone Pages**: Built as individual `.astro` page files, adhering strictly to user guidelines:
  - **No Popular Real-World Presets**
  - **No Pre-filled Data** (`value=""`, `placeholder="0"`)
  - **Mobile-First Responsive Layout**
  - **Live Step-by-Step Arithmetic Substitution**
  - **Zero cheap emojis/icons**: 100% vector SVG artwork throughout

---

## 2. All 16 Dedicated Standalone Tool Pages

| Shape / Tool | Route / URL | Status |
|---|---|---|
| **Cube** | `/cube-volume-calculator` | Live |
| **Box (Rectangular Prism)** | `/box-volume-calculator` (alias: `/rectangular-prism-volume-calculator`) | Live |
| **Cylinder** | `/cylinder-volume-calculator` | Live |
| **Sphere** | `/sphere-volume-calculator` | Live |
| **Cone** | `/cone-volume-calculator` | Live |
| **Capsule / Pressure Tank** | `/capsule-volume-calculator` | Live |
| **Spherical Cap (Dome)** | `/spherical-cap-volume-calculator` | Live |
| **Conical Frustum (Bucket)** | `/conical-frustum-volume-calculator` | Live |
| **Ellipsoid / Spheroid** | `/ellipsoid-volume-calculator` | Live |
| **Square Pyramid** | `/square-pyramid-volume-calculator` | Live |
| **Rectangular Pyramid** | `/rectangular-pyramid-volume-calculator` | Live |
| **Triangular Prism** | `/triangular-prism-volume-calculator` | Live |
| **Pipe & Tube (Hollow Cylinder)** | `/pipe-volume-calculator` (alias: `/hollow-cylinder-volume-calculator`) | Live |
| **Torus (Donut / O-Ring)** | `/torus-volume-calculator` | Live |
| **Trapezoidal Prism (Trench)** | `/trapezoidal-prism-volume-calculator` | Live |
| **Horizontal Cylinder Tank (Fill Depth)** | `/horizontal-tank-volume-calculator` | Live |

---

## 3. Cross-Linking Structure
1. **Footer (`Footer.astro`)**:
   - **Important Calculators**: Direct links to primary high-traffic tools (Box, Cylinder, Cube, Sphere, Cone, Horizontal Tank, Pipe & Tube, Capsule).
   - **All 16 Tools Hub**: Direct link to the central directory at `/calculators` and specialized geometries.
2. **Hub Directory (`calculators.astro`)**:
   - Filterable 16-card grid with instant search and category tabs.
   - Comprehensive formula cheat-sheet table and general FAQs.
3. **Homepage (`SimpleCalculator.astro`)**:
   - Includes a responsive "Dedicated Single Page →" link in the card header that updates as the user clicks between tabs.
   - Bottom CTA leads directly to the 16 Tools Hub (`/calculators`).
4. **Dedicated Single Pages (`SingleToolLayout.astro`)**:
   - Breadcrumbs link to `Home / Calculators / [Shape]`.
   - Bottom related tools section with "View All 16 →" link to `/calculators`.
