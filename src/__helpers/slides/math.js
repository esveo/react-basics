export function round(n, decimals) {
  const factor = 10 ** decimals;
  return Math.round(n * factor) / factor;
}

export function clamp(lower, upper, num) {
  return Math.max(Math.min(upper, num), lower);
}
