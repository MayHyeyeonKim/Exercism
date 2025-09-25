export function score(x: unknown, y: unknown): number {
  const X = Number(x);
  const Y = Number(y);
  const d2 = X*X+Y*Y;
  if(d2 <= 1) return 10;
  if(d2 <= 25) return 5;
  if(d2 <= 100) return 1;
  return 0
}
