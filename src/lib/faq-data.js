export const faqs = [
  {
    id: "90-minute-rule",
    question: "What is the 90-minute sleep cycle rule?",
    answer: "Human sleep is not a uniform state of rest; instead, your brain progresses through distinct, predictable stages that collectively form a sleep cycle. A single complete cycle\u2014moving from light sleep (N1, N2) to deep slow-wave sleep (N3), and finally into Rapid Eye Movement (REM) sleep\u2014takes an average of 90 minutes (typically ranging from 80 to 110 minutes). Waking up at the end of a full 90-minute cycle, when your brain is naturally returning to a state of light sleep, allows you to wake up feeling clean, alert, and refreshed.",
  },
  {
    id: "tired-after-8-hours",
    question: "Why do I still feel incredibly tired after sleeping for 8 hours?",
    answer: "Sleep quality and timing matter just as much as sleep duration. If you sleep for a full 8 hours but your alarm forcefully wakes you up in the middle of a deep N3 or REM sleep phase, you disrupt your sleep architecture. This triggers a biological phenomenon known as sleep inertia\u2014the heavy, disoriented grogginess caused by high levels of adenosine remaining in the brain. ZzzCalc optimizes your bedtime to ensure your alarm rings right as you naturally complete a cycle.",
  },
  {
    id: "how-calculates-bedtime",
    question: "How does ZzzCalc calculate my ideal bedtime?",
    answer: "The calculator uses a clean backward-and-forward tracking algorithm based on your inputs. If you need to wake up at 7:00 AM, the tool counts backward in 90-minute increments (7.5 hours, 9 hours, etc.) to find your optimal sleep windows. Critically, ZzzCalc factors in a default 14-minute sleep latency window\u2014the average time it takes a healthy human to transition from fully awake to biologically asleep\u2014so you do not miss your cycle target.",
  },
  {
    id: "customize-latency",
    question: "Can I customize how long it takes me to fall asleep?",
    answer: "Yes. Unlike standard calculators that lock you into a rigid fallback number, ZzzCalc includes a Snooze/Delay Latency slider. If you typically read in bed and take 25 minutes to drift off, or if you consistently fall asleep within 5 minutes, you can adjust this setting. The entire calculation timeline recalibrates instantly.",
  },
  {
    id: "6-vs-7-hours",
    question: "Is it better to get 6 hours of sleep or 7 hours?",
    answer: "In theory, 6 hours (4 cycles) puts your wake time at a cleaner cycle boundary than 7 hours (4.67 cycles). However, the 90-minute model is an average, not a law. By cycle 5, deep N3 sleep is minimal and REM dominates, so the grogginess penalty of waking at 7 hours is often less severe than the math suggests. For most adults, 7.5 hours (5 cycles) or 9 hours (6 cycles) remains the healthiest target. The calculator helps you make this trade-off consciously rather than at random.",
  },
  {
    id: "power-nap-length",
    question: "How long should an effective power nap be?",
    answer: "To avoid sleep inertia during the day, you should aim for one of two distinct windows: The 20-Minute Power Nap keeps you strictly within light N2 sleep to boost alertness, motor memory, and energy without any grogginess. The 90-Minute Full Nap allows your body to complete one full uninterrupted cycle, providing deep muscle recovery and creative problem-solving benefits. Avoid 45-to-60-minute naps, as they trap you in slow-wave deep sleep.",
  },
  {
    id: "sleep-cycle-age",
    question: "Does my sleep cycle change as I get older?",
    answer: "Yes. As humans age, the production of growth hormones and melatonin drops naturally. This results in a significant reduction in deep N3 slow-wave sleep and causes sleep to become more fragmented. While infants require up to 17 hours of sleep to facilitate rapid neurological development, healthy adults require 7 to 9 hours, and seniors typically settle into 7 to 8 hours.",
  },
  {
    id: "do-we-sleep-90-min-cycles",
    question: "Do we sleep in 90 minute cycles?",
    answer: "Yes, humans sleep in approximately 90-minute cycles (ranging from 80 to 110 minutes). Each cycle progresses through light sleep (N1 and N2), deep slow-wave sleep (N3), and REM (dream) sleep before your brain briefly rouses near wakefulness and begins the next cycle. A healthy adult repeats this pattern 4 to 6 times per night. This is why ZzzCalc uses 90-minute increments to calculate your optimal bedtime\u2014waking at the natural end of a cycle leaves you feeling refreshed rather than groggy.",
  },
  {
    id: "is-3-hours-a-sleep-cycle",
    question: "Is 3 hours a sleep cycle?",
    answer: "No, 3 hours is not a single sleep cycle\u2014it is roughly two complete cycles. Since a full sleep cycle averages 90 minutes, sleeping for 3 hours allows your brain to complete two full cycles (180 minutes). Waking after exactly 3 hours could place you at the end of a REM phase or potentially in the middle of deep N3 sleep, depending on your individual sleep onset latency. For the best results, aim for an odd multiple of 90 minutes (1.5, 3, 4.5, 6, 7.5, or 9 hours) to maximize your chance of waking at a cycle boundary.",
  },
  {
    id: "5-stages-of-sleep-cycle",
    question: "What are the 5 stages of the sleep cycle?",
    answer: "The traditional 5-stage sleep cycle model consists of Wake, N1 (light sleep / falling asleep), N2 (stable light sleep / core rest), N3 (deep slow-wave sleep / physical restoration), and REM (rapid eye movement / dreaming and memory consolidation). More recent classifications merge N3 with N4 into a single deep-sleep stage, giving the modern 4-stage model: N1, N2, N3, and REM. Regardless of the naming convention, your brain cycles through these stages every 90 minutes throughout the night. ZzzCalc helps you schedule sleep so you wake during a light-sleep transition rather than during deep N3 or REM.",
  },
  {
    id: "4-cycles-of-sleep-calculate",
    question: "What are the 4 cycles of sleep? How do I calculate my sleep cycle?",
    answer: "The 4 cycles of sleep refer to the modern classification: N1 (light sleep), N2 (stable sleep), N3 (deep slow-wave sleep), and REM (dreaming). To calculate your sleep cycle, count backward in 90-minute increments from your desired wake time. For example, if you need to wake at 7:00 AM, your optimal bedtimes are 9:30 PM (6 cycles / 9 hours), 11:00 PM (5 cycles / 7.5 hours), or 12:30 AM (4 cycles / 6 hours). ZzzCalc automates this calculation and factors in your personal sleep latency so you get a bedtime tailored to exactly when you actually fall asleep.",
  },
  {
    id: "3-3-3-rule-sleep",
    question: "What is the 3-3-3 rule for sleep?",
    answer: "The 3-3-3 rule is a behavioral technique used to help people fall asleep faster, particularly those with insomnia or anxiety. It involves three steps: (1) Lie in bed and focus on where your body meets the mattress for 3 minutes\u2014notice the pressure, temperature, and texture without judgment. (2) Gently shift your attention to your breathing for 3 minutes\u2014inhale, pause, exhale slowly without forcing a rhythm. (3) Spend the final 3 minutes doing a body scan from your forehead down to your toes, relaxing each muscle group in turn. By the end of 9 minutes, most people\u2019s parasympathetic nervous system has engaged enough to drift into N1 sleep naturally.",
  },
  {
    id: "good-sleep-cycle-time",
    question: "What is a good sleep cycle time?",
    answer: "A good sleep cycle time is any duration that is an odd multiple of 90 minutes: 1.5 hours (1 cycle), 3 hours (2 cycles), 4.5 hours (3 cycles), 6 hours (4 cycles), 7.5 hours (5 cycles), or 9 hours (6 cycles). For most adults, 7.5 hours (5 cycles) or 9 hours (6 cycles) are the healthiest targets, as they provide sufficient deep N3 sleep for physical recovery and enough REM for cognitive function and emotional processing. Shorter durations like 4.5 or 6 hours can work occasionally but are not sustainable for long-term health. Use ZzzCalc to align your bedtime with a complete cycle count rather than waking mid-cycle.",
  },
  {
    id: "is-930-to-430-enough-sleep",
    question: "Is 9:30 PM to 4:30 AM enough sleep?",
    answer: "9:30 PM to 4:30 AM is 7 hours in bed, which typically yields about 6 hours and 46 minutes of actual sleep after accounting for average sleep latency (14 minutes) and brief nighttime awakenings. That falls roughly between 4 cycles (6 hours) and 5 cycles (7.5 hours), so your body may be waking mid-REM or late in a deep-sleep phase depending on the night. For most adults, 7.5 hours (5 cycles) is a healthier baseline. Pushing your bedtime to 10:00 PM (for a 7.5-hour target) or shifting your wake time to 5:00 AM would land you at a cleaner cycle boundary and likely leave you feeling more rested.",
  },
  {
    id: "what-time-should-i-wake-up",
    question: "What time should I wake up?",
    answer: "The best time to wake up depends on when you go to bed and how many 90-minute sleep cycles your body will complete. If you go to bed at 10:00 PM, ideal wake times are 5:30 AM (5 cycles), 7:00 AM (6 cycles), or 8:30 AM (7 cycles). If you go to bed at 11:00 PM, aim for 6:30 AM (5 cycles) or 8:00 AM (6 cycles). The key is waking at the end of a full cycle rather than in the middle of deep sleep. Use a bedtime calculator like ZzzCalc to enter your specific bedtime and get a personalized wake-up time that leaves you refreshed rather than groggy.",
  },
  {
    id: "what-time-should-i-go-to-sleep",
    question: "What time should I go to sleep?",
    answer: "What time you should go to sleep depends on when you need to wake up. Working backward in 90-minute sleep cycles, if you need to wake at 6:00 AM, your optimal bedtimes are 8:30 PM (6 cycles / 9 hours), 10:00 PM (5 cycles / 7.5 hours), or 11:30 PM (4 cycles / 6 hours). For a 7:00 AM wake-up, go to bed at 9:30 PM (6 cycles), 11:00 PM (5 cycles), or 12:30 AM (4 cycles). A sleep calculator like ZzzCalc factors in your age and how long it takes you to fall asleep, giving you a bedtime tailored to your biology rather than a generic recommendation.",
  },
];

export const napFaqs = [
  {
    id: "power-nap-length",
    question: "How long should an effective power nap be?",
    answer: "To avoid sleep inertia during the day, you should aim for one of two distinct windows: The 20-Minute Power Nap keeps you strictly within light N2 sleep to boost alertness, motor memory, and energy without any grogginess. The 90-Minute Full Nap allows your body to complete one full uninterrupted cycle, providing deep muscle recovery and creative problem-solving benefits. Avoid 45-to-60-minute naps, as they trap you in slow-wave deep sleep.",
  },
  {
    id: "coffee-nap-science",
    question: "Does a coffee nap really work?",
    answer: "Yes, coffee naps are backed by sleep research. Drinking caffeine (roughly 200mg, or one cup of coffee) immediately before a 15-20 minute nap takes advantage of adenosine receptor blocking. Caffeine takes about 20 minutes to reach peak levels in your bloodstream. By napping during that window, you wake up as the caffeine kicks in, giving you a double boost: the restorative effect of light N2 sleep plus the stimulant effect of caffeine arriving precisely as you open your eyes. Studies show coffee naps improve alertness more than caffeine or napping alone.",
  },
  {
    id: "nasa-power-nap",
    question: "What is the NASA power nap protocol?",
    answer: "NASA's power nap research, conducted on sleep-deprived military pilots and astronauts, found that a 26-minute nap improved performance by 34% and alertness by 54% compared to no nap. The NASA protocol recommends napping for 25-30 minutes at most (short enough to avoid deep N3 sleep), in a quiet, dark, cool environment, with an alarm set before you fall asleep. NASA's findings are the scientific basis for the modern 20-minute power nap recommendation used by companies like Google and The Huffington Post.",
  },
  {
    id: "sleep-inertia-nap",
    question: "Why do I feel worse after napping sometimes?",
    answer: "Feeling worse after a nap is called sleep inertia\u2014the groggy, disoriented state caused by waking from deep N3 slow-wave sleep. This happens when your nap length traps you in the middle of a sleep cycle rather than at the natural end. Naps of 30-60 minutes are the most dangerous zone: long enough to enter deep sleep but not long enough to complete a full cycle. To avoid sleep inertia, either nap for 20 minutes (stay in light N2) or 90 minutes (complete a full cycle including REM). Anything in between will likely leave you more tired than before.",
  },
  {
    id: "best-time-of-day-nap",
    question: "What is the best time of day to take a power nap?",
    answer: "The ideal time for a power nap aligns with your body's natural circadian dip, which occurs roughly 6-8 hours after waking for most people. For someone who wakes at 7:00 AM, the optimal nap window is between 1:00 PM and 3:00 PM. Napping too late (after 4:00 PM) can interfere with your night-time sleep drive, making it harder to fall asleep at your regular bedtime. Early afternoon naps work with your biology rather than against it.",
  },
  {
    id: "power-nap-vs-full-cycle",
    question: "Should I take a power nap or a full sleep cycle nap?",
    answer: "Choose based on your goal. A 20-minute power nap is best for a quick alertness boost, improved motor performance, and reduced fatigue\u2014ideal during a workday when you need to get back to a task quickly. A 90-minute full-cycle nap is better when you have more time and want deeper benefits: creativity, emotional processing, memory consolidation, and physical recovery. Power naps are for tactical performance. Full-cycle naps are for strategic restoration. Both are valid; use the one that fits your available time and intended outcome.",
  },
];

export const napFaqStructuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": napFaqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
});

const topFaqs = faqs.slice(0, 10);

export const faqStructuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": topFaqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
});
