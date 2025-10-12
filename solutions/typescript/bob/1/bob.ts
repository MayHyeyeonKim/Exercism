export function hey(message: string): string {
  const trimmed = message.trim();
  if(trimmed === ""){return "Fine. Be that way!"}
  const isQ = trimmed.endsWith("?")
  const hasL = /[A-Za-z]/.test(trimmed)
  const isY = hasL && trimmed === trimmed.toUpperCase();

  if(isY && isQ) return "Calm down, I know what I'm doing!"
  if(isY) return "Whoa, chill out!"
  if(isQ) return "Sure."
  return "Whatever."
}
