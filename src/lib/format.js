export function formatTime(date) {
  let h = date.getHours();
  const m = date.getMinutes().toString().padStart(2, "0");
  const ap = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${m} ${ap}`;
}

export function formatHourMin(date) {
  let h = date.getHours();
  const m = date.getMinutes().toString().padStart(2, "0");
  h = h % 12 || 12;
  return `${h}:${m}`;
}

export function formatAmPm(date) {
  return date.getHours() >= 12 ? "PM" : "AM";
}
