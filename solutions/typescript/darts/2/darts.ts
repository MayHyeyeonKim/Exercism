  const inner = 1
  const mid = 5
  const outer = 10
export function score(x: number, y: number): number {
  const point = Math.hypot(x,y)
  const within = (ring: number) => point <= ring

  if(within(inner)) return 10
  if(within(mid)) return 5
  if(within(outer)) return 1
  
  return 0
}
