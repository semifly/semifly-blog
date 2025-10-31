export type { ColorMap, ColorTuple } from "./colors";

export {
  DARK_COLORS,
  DARK_COLORS_CSS,
  DARK_COLORS_RAW,
  LIGHT_COLORS,
  LIGHT_COLORS_CSS,
  LIGHT_COLORS_RAW,
} from "./colors";

export type ColorMode = "light" | "dark";

export const COLOR_THEME_COOKIE_NAME = "reboert-color-theme";
export const DEFAULT_COLOR_MODE: ColorMode = "light";

export const HEADER_WIDTH = 1280 / 16;
export const HEADER_HEIGHT = 80 / 16;
