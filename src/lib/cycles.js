export const CYCLE_LENGTH = 90;
export const DEFAULT_LATENCY = 14;
export const MIN_CYCLES = 3;
export const MAX_CYCLES = 6;

export const CYCLE_QUALITY = [
  { cycles: 6, label: "Great", score: 4, color: "#8fc97b" },
  { cycles: 5, label: "Best", score: 5, color: "#5db872" },
  { cycles: 4, label: "Okay", score: 3, color: "#ccb56e" },
  { cycles: 3, label: "Groggy", score: 2, color: "#cc785c" },
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

export const AGE_GROUPS = [
  { id: "infant", label: "0–3 months", range: [14, 17], cycles: [8, 11], cycleLen: 50 },
  { id: "baby", label: "4–12 months", range: [12, 16], cycles: [7, 10], cycleLen: 60 },
  { id: "toddler", label: "1–2 years", range: [11, 14], cycles: [6, 9], cycleLen: 70 },
  { id: "child", label: "3–5 years", range: [10, 13], cycles: [6, 8], cycleLen: 80 },
  { id: "preteen", label: "6–12 years", range: [9, 12], cycles: [5, 7], cycleLen: 85 },
  { id: "teen", label: "13–18 years", range: [8, 10], cycles: [5, 6], cycleLen: 90 },
  { id: "adult", label: "18–60 years", range: [7, 9], cycles: [4, 6], cycleLen: 90 },
  { id: "senior1", label: "61–64 years", range: [7, 9], cycles: [4, 6], cycleLen: 90 },
  { id: "senior2", label: "65+ years", range: [7, 8], cycles: [4, 5], cycleLen: 90 },
];

export function cycleRangeForAge(ageId) {
  const g = AGE_GROUPS.find((a) => a.id === ageId);
  return g ? g.cycles : [4, 6];
}

export function cycleLenForAge(ageId) {
  const g = AGE_GROUPS.find((a) => a.id === ageId);
  return g ? g.cycleLen : 90;
}

export const CHRONOTYPE_QUESTIONS = [
  {
    q: "On a free day, when do you naturally wake up?",
    options: [
      { label: "Before 7 AM", value: 2 },
      { label: "7–9 AM", value: 1 },
      { label: "After 9 AM", value: 0 },
    ],
  },
  {
    q: "When do you feel most alert and productive?",
    options: [
      { label: "Morning (8 AM–12 PM)", value: 2 },
      { label: "Afternoon (12–4 PM)", value: 1 },
      { label: "Evening/night (after 6 PM)", value: 0 },
    ],
  },
  {
    q: "If you could choose your ideal bedtime, it would be:",
    options: [
      { label: "Before 10 PM", value: 2 },
      { label: "10 PM – midnight", value: 1 },
      { label: "After midnight", value: 0 },
    ],
  },
  {
    q: "How easy is it for you to wake up early (6–7 AM)?",
    options: [
      { label: "Easy — I'm naturally awake", value: 2 },
      { label: "Manageable with an alarm", value: 1 },
      { label: "Very difficult", value: 0 },
    ],
  },
  {
    q: "On weekends, how much does your sleep schedule shift?",
    options: [
      { label: "Less than 1 hour", value: 2 },
      { label: "1–2 hours", value: 1 },
      { label: "More than 2 hours", value: 0 },
    ],
  },
];

export function chronotypeFromScore(score) {
  if (score >= 8) return { id: "lark", label: "Morning Lark", shift: -30 };
  if (score >= 4) return { id: "intermediate", label: "Intermediate", shift: 0 };
  return { id: "owl", label: "Night Owl", shift: 30 };
}
