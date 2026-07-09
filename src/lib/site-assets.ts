import fs from "fs";
import path from "path";

const LOGO_CANDIDATES = [
  "images/logo/trailcheck-logo-transparent.png",
  "images/logo/trailcheck-logo.png",
  "images/logo/trailcheck-logo.svg",
  "images/logo/trailcheck-logo.webp",
] as const;

const HERO_CANDIDATES = [
  "images/hero/hero-main.jpg",
  "images/hero/hero-main.jpeg",
  "images/hero/hero-main.webp",
  "images/hero/hero-main.png",
] as const;

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function toPublicSrc(relativePath: string) {
  return `/${relativePath.split("/").map(encodeURIComponent).join("/")}`;
}

function findPublicAsset(candidates: readonly string[]) {
  for (const relativePath of candidates) {
    const fullPath = path.join(process.cwd(), "public", relativePath);
    if (fs.existsSync(fullPath)) {
      return toPublicSrc(relativePath);
    }
  }
  return null;
}

function findHeroInFolder() {
  const heroDir = path.join(process.cwd(), "public", "images", "hero");

  if (!fs.existsSync(heroDir)) {
    return null;
  }

  const files = fs
    .readdirSync(heroDir)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort();

  if (files.length === 0) {
    return null;
  }

  return toPublicSrc(`images/hero/${files[0]}`);
}

export function getLogoSrc() {
  return findPublicAsset(LOGO_CANDIDATES);
}

export function getHeroSrc() {
  return findPublicAsset(HERO_CANDIDATES) ?? findHeroInFolder();
}
