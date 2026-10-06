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

export const PROTOCOL_INCLUDES = [
  "Exact scenarios: someone you're attracted to, a group mid-conversation, a boss, a party where you know one person, a cold room, being watched",
  "Full dialogues, including the ones that went badly",
  "Bridge scripts by relationship type",
  "A rep schedule that turns it into default behavior",
  "How to stop needing the name",
];
