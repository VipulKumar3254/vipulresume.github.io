export const colors = {
  light: {
    canvas: "#f7f7f5",
    surface: "#ffffff",
    surfaceMuted: "#f4f4f5",
    surfaceSubtle: "#fafaf9",
    text: "#18181b",
    textMuted: "#52525b",
    textFaded: "#71717a",
    border: "#e4e4e7",
    accent: "#65a30d",
    accentHover: "#4d7c0f",
    accentSoft: "#f2f8e9",
    accentBright: "#84cc16",
    gridLine: "rgba(24, 24, 27, 0.035)",
    shadow: "rgba(24, 24, 27, 0.09)",
  },
  dark: {
    canvas: "#141512",
    surface: "#1c1d19",
    surfaceMuted: "#252620",
    surfaceSubtle: "#20211d",
    text: "#f3f3ed",
    textMuted: "#c1c2b8",
    textFaded: "#96988d",
    border: "#383a32",
    accent: "#a7c967",
    accentHover: "#c0df7c",
    accentSoft: "#28311d",
    accentBright: "#c0df7c",
    gridLine: "rgba(243, 243, 237, 0.035)",
    shadow: "rgba(0, 0, 0, 0.26)",
  },
};

const cssNames = {
  canvas: "--canvas",
  surface: "--surface",
  surfaceMuted: "--surface-muted",
  surfaceSubtle: "--surface-subtle",
  text: "--text",
  textMuted: "--text-muted",
  textFaded: "--text-faded",
  border: "--border",
  accent: "--accent",
  accentHover: "--accent-hover",
  accentSoft: "--accent-soft",
  accentBright: "--accent-bright",
  gridLine: "--grid-line",
  shadow: "--shadow",
};

export function applyTheme(theme, element = document.documentElement) {
  const palette = colors[theme] ?? colors.light;
  element.dataset.theme = theme in colors ? theme : "light";
  for (const [token, value] of Object.entries(palette)) {
    element.style.setProperty(cssNames[token], value);
  }
}
