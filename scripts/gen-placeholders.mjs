// One-off script to generate elegant abstract placeholder images (SVG) in
// the brand palette, used until real venue photography is supplied.
// Run: node scripts/gen-placeholders.mjs
import fs from "node:fs";
import path from "node:path";

const palettes = [
  ["#2A2521", "#4A3F33", "#8A6A45"], // deep charcoal -> bronze
  ["#3C3530", "#6E5437", "#C9AD7C"], // charcoal -> champagne
  ["#211D1A", "#523E29", "#B6935B"], // near-black -> bronze light
  ["#EAE1D0", "#D9C39A", "#8A6A45"], // ivory -> bronze (light variant)
  ["#28231F", "#8A6A45", "#E6D6B5"], // dark -> champagne
];

function arcPattern(seed, w, h) {
  let paths = "";
  const rings = 5;
  for (let i = 0; i < rings; i++) {
    const r = (Math.max(w, h) / rings) * (i + 1) * 0.7;
    const cx = w * (0.2 + 0.15 * ((seed + i) % 3));
    const cy = h * (0.75 - 0.1 * i);
    paths += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>`;
  }
  return paths;
}

function linePattern(seed, w, h) {
  let lines = "";
  for (let i = 0; i < 10; i++) {
    const y = (h / 10) * i + (seed % 20);
    lines += `<line x1="0" y1="${y}" x2="${w}" y2="${y - 60}" stroke="rgba(255,255,255,0.035)" stroke-width="1"/>`;
  }
  return lines;
}

function buildSvg({ w, h, seed, name }) {
  const palette = palettes[seed % palettes.length];
  const [c1, c2, c3] = palette;
  const angle = 45 + (seed % 4) * 20;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g${seed}" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(${angle} 0.5 0.5)">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="55%" stop-color="${c2}"/>
      <stop offset="100%" stop-color="${c3}"/>
    </linearGradient>
    <filter id="grain${seed}">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise"/>
      <feColorMatrix in="noise" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.02 0"/>
      <feComposite operator="over" in2="SourceGraphic"/>
    </filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g${seed})"/>
  ${arcPattern(seed, w, h)}
  ${linePattern(seed, w, h)}
  <rect width="${w}" height="${h}" filter="url(#grain${seed})" opacity="0.5"/>
</svg>`;
}

const targets = [
  // Hero / wide cinematic
  { name: "hero-main.svg", w: 1920, h: 1200, seed: 0 },
  { name: "hero-venue.svg", w: 1920, h: 1080, seed: 1 },
  { name: "wide-1.svg", w: 1600, h: 1000, seed: 2 },
  { name: "wide-2.svg", w: 1600, h: 1000, seed: 3 },
  { name: "wide-3.svg", w: 1600, h: 1000, seed: 4 },
  { name: "wide-4.svg", w: 1600, h: 1000, seed: 0 },
  { name: "wide-5.svg", w: 1600, h: 1000, seed: 1 },
  { name: "wide-6.svg", w: 1600, h: 1000, seed: 2 },
  // Portrait / tall
  { name: "tall-1.svg", w: 1000, h: 1400, seed: 3 },
  { name: "tall-2.svg", w: 1000, h: 1400, seed: 4 },
  { name: "tall-3.svg", w: 1000, h: 1400, seed: 0 },
  { name: "tall-4.svg", w: 1000, h: 1400, seed: 1 },
  // Square-ish
  { name: "square-1.svg", w: 1200, h: 1200, seed: 2 },
  { name: "square-2.svg", w: 1200, h: 1200, seed: 3 },
  { name: "square-3.svg", w: 1200, h: 1200, seed: 4 },
  { name: "square-4.svg", w: 1200, h: 1200, seed: 0 },
  { name: "square-5.svg", w: 1200, h: 1200, seed: 1 },
  { name: "square-6.svg", w: 1200, h: 1200, seed: 2 },
  { name: "square-7.svg", w: 1200, h: 1200, seed: 3 },
  { name: "square-8.svg", w: 1200, h: 1200, seed: 4 },
  { name: "square-9.svg", w: 1200, h: 1200, seed: 0 },
  { name: "square-10.svg", w: 1200, h: 1200, seed: 1 },
  { name: "square-11.svg", w: 1200, h: 1200, seed: 2 },
  { name: "square-12.svg", w: 1200, h: 1200, seed: 3 },
  // Standard landscape (4:3 / 3:2)
  { name: "landscape-1.svg", w: 1400, h: 1000, seed: 4 },
  { name: "landscape-2.svg", w: 1400, h: 1000, seed: 0 },
  { name: "landscape-3.svg", w: 1400, h: 1000, seed: 1 },
  { name: "landscape-4.svg", w: 1400, h: 1000, seed: 2 },
  { name: "landscape-5.svg", w: 1400, h: 1000, seed: 3 },
  { name: "landscape-6.svg", w: 1400, h: 1000, seed: 4 },
  // OG image
  { name: "og-default.svg", w: 1200, h: 630, seed: 1 },
];

const outDir = path.resolve("public/images/placeholders");
fs.mkdirSync(outDir, { recursive: true });
for (const t of targets) {
  fs.writeFileSync(path.join(outDir, t.name), buildSvg(t));
}
console.log(`Generated ${targets.length} placeholder images in ${outDir}`);
