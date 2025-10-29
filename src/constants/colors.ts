import kebab from "lodash.kebabcase";

import { transformObject } from "@/utils";

export type ColorTuple = [number, number, number, number?];
type ColorMapRaw = Record<string, ColorTuple>;

export interface ColorMap {
  [key: `--${string}`]: string;
}

export const LIGHT_COLORS_RAW: ColorMapRaw = {
  colorText: [222, 22, 5],
};

export const DARK_COLORS_RAW: ColorMapRaw = {
  colorText: [210, 10, 90],
};

export const LIGHT_COLORS = createStyleObject(LIGHT_COLORS_RAW);
export const DARK_COLORS = createStyleObject(DARK_COLORS_RAW);

export const LIGHT_COLORS_CSS = createCssString(LIGHT_COLORS);
export const DARK_COLORS_CSS = createCssString(DARK_COLORS);

function createStyleObject(colors: ColorMapRaw): ColorMap {
  return transformObject(colors, (key, value) => {
    if (typeof value === "string") {
      value = colors[value];
    }

    const [h, s, l, a = 1] = value;

    const newKey = `--${kebab(key)}`;
    const newValue =
      a === 1
        ? `hsl(${h}deg ${s}% ${l}%)`
        : `hsl(${h}deg ${s}% ${l}% / ${a})`;

    return [newKey, newValue];
  });
}

function createCssString(colorMap: ColorMap): string {
  return Object.entries(colorMap)
    .map(([key, value]) => `${key}:${value}`)
    .join("\n");
}
