import type { HsvaColor, RgbaColor } from "../types";
import { OpaqueBlack, OpaqueWhite } from "../constants/color.constants";

export function clampColorValue(
  value: number,
  min: number,
  max: number,
): number {
  return Math.min(max, Math.max(min, Number.isFinite(value) ? value : min));
}

export function parseHexColor(value: string): RgbaColor | undefined {
  let hex = value.trim().replace(/^#/, "");

  if (!/^(?:[\da-f]{3}|[\da-f]{4}|[\da-f]{6}|[\da-f]{8})$/i.test(hex)) {
    return undefined;
  }

  if (hex.length <= 4) {
    hex = Array.from(hex, (character) => character + character).join("");
  }

  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
    a: hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1,
  };
}

export function rgbaToHex(color: RgbaColor): string {
  const channels = [color.r, color.g, color.b];

  if (color.a < 1) {
    channels.push(color.a * 255);
  }

  return (
    "#" +
    channels
      .map((channel) =>
        Math.round(clampColorValue(channel, 0, 255))
          .toString(16)
          .padStart(2, "0"),
      )
      .join("")
      .toUpperCase()
  );
}

export function rgbaToHsva(color: RgbaColor): HsvaColor {
  const r = color.r / 255;
  const g = color.g / 255;
  const b = color.b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let hue = 0;

  if (delta > 0) {
    if (max === r) {
      hue = ((g - b) / delta) % 6;
    } else if (max === g) {
      hue = (b - r) / delta + 2;
    } else {
      hue = (r - g) / delta + 4;
    }
  }

  return {
    h: (hue * 60 + 360) % 360,
    s: max === 0 ? 0 : delta / max,
    v: max,
    a: color.a,
  };
}

export function hsvaToRgba(color: HsvaColor): RgbaColor {
  const h = ((color.h % 360) + 360) % 360;
  const s = clampColorValue(color.s, 0, 1);
  const v = clampColorValue(color.v, 0, 1);
  const chroma = v * s;
  const x = chroma * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - chroma;
  const sectors: readonly (readonly [number, number, number])[] = [
    [chroma, x, 0],
    [x, chroma, 0],
    [0, chroma, x],
    [0, x, chroma],
    [x, 0, chroma],
    [chroma, 0, x],
  ];
  const [r, g, b] = sectors[Math.floor(h / 60)] ?? [0, 0, 0];

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
    a: clampColorValue(color.a, 0, 1),
  };
}

export function hsvaToHex(color: HsvaColor): string {
  return rgbaToHex(hsvaToRgba(color));
}

export function getColorContrast(color: RgbaColor): string {
  const luminance = (0.299 * color.r + 0.587 * color.g + 0.114 * color.b) / 255;

  return luminance > 0.6 ? OpaqueBlack : OpaqueWhite;
}

export function parseColorChannel(value: string): number | undefined {
  if (!/^\d{1,3}$/.test(value.trim())) {
    return undefined;
  }

  const channel = Number(value);

  return channel <= 255 ? channel : undefined;
}

export function parseColorPercentage(value: string): number | undefined {
  const percentage = parseColorChannel(value);

  return percentage !== undefined && percentage <= 100 ? percentage : undefined;
}
