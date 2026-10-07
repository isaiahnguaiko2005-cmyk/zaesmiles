// Single source of truth for the Mitch Protocol launch. Change values here and
// every countdown, price and "% off" label on the site follows.

/** Launch moment: Oct 19, 2026, 9:00 AM Eastern (EDT, UTC-4). */
export const LAUNCH_AT = "2026-10-19T09:00:00-04:00";
export const LAUNCH_LABEL = "Oct 19";

export const FOUNDING_PRICE = 24;
export const REGULAR_PRICE = 32;
export const FOUNDING_PERCENT_OFF = Math.round(
  ((REGULAR_PRICE - FOUNDING_PRICE) / REGULAR_PRICE) * 100
);

/** How long waitlist members have to claim the founding price after launch. */
export const FOUNDING_WINDOW_DAYS = 7;

export const WAITLIST_PATH = "/waitlist";
/** Deep link that opens the waitlist page with the email box focused. */
export const WAITLIST_JOIN_PATH = "/waitlist#join";

/** Short list for compact surfaces (Products card). */
export const PROTOCOL_INCLUDES = [
  "The moves: OPEN, HOLD, PIVOT, SPARK and BRIDGE",
  "Exact scenarios and full dialogues, including the ones that went badly",
  "Texting, first hangouts and growing the friendship",
  "A rep schedule, a custom scenario template and a phone cheat sheet",
  "How to stop needing the name",
];

/** Full breakdown for the waitlist page. */
export const PROTOCOL_PARTS: { title: string; items: string[] }[] = [
  {
    title: "The moves",
    items: [
      "OPEN, HOLD and PIVOT: the core moves for starting a conversation and keeping it going",
      "SPARK by subject, with a warmth dial and examples across six kinds of topics: siblings, hometown, music, skills, people you admire, recent wins",
      "BRIDGE, for turning a good conversation into a real connection, with romantic and friendship versions",
    ],
  },
  {
    title: "The rooms",
    items: [
      "Exact scenarios: someone you're attracted to, a group mid-conversation, a boss, a party where you know one person, a cold room, being watched",
      "Full dialogues, line by line, including the ones that went badly",
      "Calibration in depth, including nervous vs uninterested",
      "What to do after something lands wrong, how to take a no, and how to repair",
    ],
  },
  {
    title: "After the first conversation",
    items: [
      "Texting: your first text, keeping a thread alive, reviving a dead one",
      "First hangouts and growing a friendship, step by step",
      "Emotional listening: advice vs venting, and becoming someone people trust",
      "Maintenance, reading the decline, and a way out of it",
      "Reconnecting with friends you've drifted from",
    ],
  },
  {
    title: "The reps",
    items: [
      "A rep schedule that turns it into default behavior",
      "A custom scenario template for your real life",
      "A one-page phone cheat sheet",
      "How to stop needing the name",
    ],
  },
];
