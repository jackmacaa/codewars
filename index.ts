export function past(h: number, m: number, s: number): number {
  const minutes = 60;
  const seconds = 60;
  const milliSeconds = 1000;

  const hourInMs = h * minutes * minutes * milliSeconds;
  const minInMs = m * seconds * milliSeconds;
  const secInMs = s * milliSeconds;

  return hourInMs + minInMs + secInMs;
}
console.log(past(0, 1, 1)); // 61000
console.log(past(1, 1, 1)); // 3661000
