const COLORS: Record<string, number> = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

export function decodedResistorValue(colors: [string, string, string]): string {
  const [c1, c2, c3] = colors;

  const mainValue = COLORS[c1] * 10 + COLORS[c2];
  const multiplier = Math.pow(10, COLORS[c3]);
  let value = mainValue * multiplier

  let unit = "ohms";
  
  if (value >= 1_000_000_000 && value % 1_000_000_000 === 0) {
    value = value / 1_000_000_000;
    unit = "gigaohms";
  } else if (value >= 1_000_000 && value % 1_000_000 === 0) {
    value = value / 1_000_000;
    unit = "megaohms";
  } else if (value >= 1_000 && value % 1_000 === 0) {
    value = value / 1_000;
    unit = "kiloohms";
  }
  
  return `${value} ${unit}`
}
