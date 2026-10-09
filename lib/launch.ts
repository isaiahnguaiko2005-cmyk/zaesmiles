// Single source of truth for the Mitch Protocol launch. Change values here and
// every countdown, price and "% off" label on the site follows.

/** Launch moment: Oct 19, 2026, 9:00 AM Eastern (EDT, UTC-4). */
export const LAUNCH_AT = "2026-10-19T09:00:00-04:00";
export const LAUNCH_LABEL = "Oct 19";
export const LAUNCH_TIME_LABEL = "9:00 AM Eastern";

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

/** Plain-language explanations of the Protocol's own terms. Also used for the welcome email. */
export const PROTOCOL_TERMS: { name: string; tagline: string; what: string; teaches: string }[] = [
  {
    name: "Mitch",
    tagline: "The version of you that isn't checking himself.",
    what: "Mitch is a name for you with the review step turned off: the you that talks easily around your cousin or at 1am with two people you trust. It's a switch, not a costume. The name gives you permission to move before the self-editing finishes.",
    teaches: "How to step into that version of you on purpose, then rely on the name less until Mitch is just you.",
  },
  {
    name: "OPEN",
    tagline: "Say the first thing.",
    what: "Point out something you can both see and add one small opinion. An opener isn't supposed to be impressive. It's supposed to be easy to answer.",
    teaches: "How to start a conversation without waiting for a perfect line.",
  },
  {
    name: "HOLD",
    tagline: "Don't quit after one flat answer.",
    what: "A short answer isn't a verdict. Stay one more beat: react, add a sentence, or ask one follow-up. Then read what comes back.",
    teaches: "How to tell a person who's busy from a person who isn't interested, so you stop walking away too early.",
  },
  {
    name: "PIVOT",
    tagline: "Move from the room to the person.",
    what: "Once they hand you anything real, read it playfully and ask a question only they can answer. It's the exit from talking about the line, the party or the weather.",
    teaches: "How to avoid sounding like an interview and make it a real conversation.",
  },
  {
    name: "SPARK",
    tagline: "Follow their energy.",
    what: "SPARK is a five-step loop you run while a topic has life in it: spot where their energy lifts, play their detail back, ask one layer deeper, relate in a sentence or two, and keep the thread alive.",
    teaches: "How to turn small talk into a conversation people actually enjoy, and what to do when the energy drops.",
  },
  {
    name: "Warmth dial",
    tagline: "How warm and personal you go, and how fast.",
    what: "You turn it up when the other person opens up and turn it down when they pull back, so you stay matched to them instead of too cold or too much.",
    teaches: "How to set the right level of warmth for a friend, a crush, a coworker or a stranger.",
  },
  {
    name: "BRIDGE",
    tagline: "Turn a good conversation into a real connection.",
    what: "Three parts, in order: a callback to something specific they said, a plan with an actual time attached, and an easy way for them to say no. Good conversations end, and nothing happens after them unless you make something happen.",
    teaches: "How to leave with a number, a plan or a reason to talk again, for friendships and for romance.",
  },
  {
    name: "Reading the room",
    tagline: "Open, unclear or closed.",
    what: "Every response falls into one of three groups. Open means extra detail, warmth or a question back. Unclear is brief but polite. Closed is repeated short answers and turning away.",
    teaches: "How to stop guessing: keep going, hold one more beat, or leave politely.",
  },
];
