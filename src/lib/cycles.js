export const CYCLE_LENGTH = 90;
export const DEFAULT_LATENCY = 14;
export const MIN_CYCLES = 3;
export const MAX_CYCLES = 6;

export const AGE_GROUPS = [
  { value: "13-17", label: "Teen (13–17)", cyclesMin: 5, cyclesMax: 7 },
  { value: "18-60", label: "Adult (18–60)", cyclesMin: 4, cyclesMax: 6 },
  { value: "61-120", label: "Senior (61+)", cyclesMin: 4, cyclesMax: 5 },
];

export const CYCLE_QUALITY = [
  { cycles: 3, label: "Groggy", score: 2, color: "#cc785c" },
  { cycles: 4, label: "Okay", score: 3, color: "#ccb56e" },
  { cycles: 5, label: "Best", score: 5, color: "#5db872" },
  { cycles: 6, label: "Great", score: 4, color: "#8fc97b" },
  { cycles: 7, label: "Best", score: 5, color: "#5db872" },
];

const qualityMap = Object.fromEntries(CYCLE_QUALITY.map((q) => [q.cycles, q]));

export function getQuality(cycles) {
  return qualityMap[cycles] || { label: "Avoid", score: 1, color: "#c64545" };
}

export const QUICK_REF = [
  { cycles: 6, duration: "9h 00m", label: "Optimal", color: "#5db872" },
  { cycles: 5, duration: "7h 30m", label: "Recommended", color: "#8fc97b" },
  { cycles: 4, duration: "6h 00m", label: "Minimum", color: "#ccb56e" },
  { cycles: 3, duration: "4h 30m", label: "Emergency", color: "#cc785c" },
];
