export function humanReadable(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds - hours * 3600) / 60);
  const secs = seconds - hours * 3600 - mins * 60;

  const hoursString = String(hours).padStart(2, "0");
  const minsString = String(mins).padStart(2, "0");
  const secsString = String(secs).padStart(2, "0");

  return `${hoursString}:${minsString}:${secsString}`;
}

console.log(humanReadable(61), "00:00:05");
