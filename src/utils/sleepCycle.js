const CYCLE_LENGTH = 90;
const DEFAULT_LATENCY = 14;

export function calculateBedtimes(wakeTime, latency = DEFAULT_LATENCY) {
  const wake = new Date(wakeTime);
  const results = [];

  for (let cycles = 3; cycles <= 6; cycles++) {
    const totalSleepMinutes = cycles * CYCLE_LENGTH;
    const bedtime = new Date(wake.getTime() - (totalSleepMinutes + latency) * 60000);
    const sleepDuration = totalSleepMinutes / 60;

    results.push({
      cycles,
      bedtime,
      sleepDuration,
      quality: getQuality(cycles),
    });
  }

  return results;
}

export function calculateWakeTimes(bedTime, latency = DEFAULT_LATENCY) {
  const bed = new Date(bedTime);
  const results = [];

  for (let cycles = 3; cycles <= 6; cycles++) {
    const totalSleepMinutes = cycles * CYCLE_LENGTH;
    const wakeTime = new Date(bed.getTime() + (latency + totalSleepMinutes) * 60000);
    const sleepDuration = totalSleepMinutes / 60;

    results.push({
      cycles,
      wakeTime,
      sleepDuration,
      quality: getQuality(cycles),
    });
  }

  return results;
}

export function calculateNapTimes() {
  const now = new Date();
  return [
    { label: "Power Nap", duration: 20, description: "Stage 2 nap — alertness boost", wakeTime: new Date(now.getTime() + 20 * 60000) },
    { label: "Coffee Nap", duration: 15, description: "Nap + caffeine synergy", wakeTime: new Date(now.getTime() + 15 * 60000) },
    { label: "Full Cycle", duration: 90, description: "Complete REM cycle", wakeTime: new Date(now.getTime() + 90 * 60000) },
  ];
}

function getQuality(cycles) {
  switch (cycles) {
    case 5: return { label: "Best", score: 5, color: "feel-best" };
    case 6: return { label: "Great", score: 4, color: "feel-good" };
    case 4: return { label: "Okay", score: 3, color: "feel-okay" };
    case 3: return { label: "Groggy", score: 2, color: "feel-groggy" };
    default: return { label: "Avoid", score: 1, color: "feel-avoid" };
  }
}

export function getStageTimeline(totalCycles) {
  const stages = [];
  const stageMinutes = {
    N1: 5,
    N2: 20,
    N3: 30,
    REM: 35,
  };

  for (let cycle = 0; cycle < totalCycles; cycle++) {
    const cycleStart = cycle * CYCLE_LENGTH;
    if (cycle < 2) {
      stages.push({
        cycle,
        stage: "N3",
        label: "Deep Sleep",
        startMin: cycleStart,
        duration: stageMinutes.N3,
        color: "indigo-400",
        icon: "🌙",
      });
      stages.push({
        cycle,
        stage: "N2",
        label: "Light Sleep",
        startMin: cycleStart + stageMinutes.N3,
        duration: stageMinutes.N2,
        color: "blue-300",
        icon: "🌊",
      });
      stages.push({
        cycle,
        stage: "N1",
        label: "Falling Asleep",
        startMin: cycleStart + stageMinutes.N3 + stageMinutes.N2,
        duration: stageMinutes.N1,
        color: "sky-200",
        icon: "✨",
      });
      stages.push({
        cycle,
        stage: "REM",
        label: "REM (Dreaming)",
        startMin: cycleStart + stageMinutes.N3 + stageMinutes.N2 + stageMinutes.N1,
        duration: stageMinutes.REM,
        color: "amber-300",
        icon: "💭",
      });
    } else {
      stages.push({
        cycle,
        stage: "N2",
        label: "Light Sleep",
        startMin: cycleStart,
        duration: stageMinutes.N2,
        color: "blue-300",
        icon: "🌊",
      });
      stages.push({
        cycle,
        stage: "N1",
        label: "Falling Asleep",
        startMin: cycleStart + stageMinutes.N2,
        duration: stageMinutes.N1,
        color: "sky-200",
        icon: "✨",
      });
      stages.push({
        cycle,
        stage: "REM",
        label: "REM (Dreaming)",
        startMin: cycleStart + stageMinutes.N2 + stageMinutes.N1,
        duration: stageMinutes.REM,
        color: "amber-300",
        icon: "💭",
      });
      stages.push({
        cycle,
        stage: "N3",
        label: "Deep Sleep",
        startMin: cycleStart + stageMinutes.N2 + stageMinutes.N1 + stageMinutes.REM,
        duration: N3Duration(cycle),
        color: "indigo-400",
        icon: "🌙",
      });
    }
  }

  return stages;
}

function N3Duration(cycle) {
  return Math.max(5, 30 - (cycle - 2) * 8);
}

export function formatTime(date) {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) return "--:--";
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${ampm}`;
}

export function formatHourMin(date) {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) return "--:--";
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes}`;
}

export function formatAmPm(date) {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) return "";
  return date.getHours() >= 12 ? "PM" : "AM";
}

export function getMinutesSinceMidnight(date) {
  return date.getHours() * 60 + date.getMinutes();
}

export function cycleColor(cycles) {
  switch (cycles) {
    case 5: return "#5db872";
    case 6: return "#8fc97b";
    case 4: return "#ccb56e";
    case 3: return "#cc785c";
    default: return "#c64545";
  }
}

export function createTimePickerOptions() {
  const options = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 15) {
      const date = new Date();
      date.setHours(h, m, 0, 0);
      const label = formatTime(date);
      const value = `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
      options.push({ label, value });
    }
  }
  return options;
}
