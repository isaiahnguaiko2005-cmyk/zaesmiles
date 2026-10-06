import Link from "next/link";
import { LaunchCountdownInline } from "./LaunchCountdown";
import { FOUNDING_PERCENT_OFF, LAUNCH_LABEL, WAITLIST_JOIN_PATH } from "@/lib/launch";

/** Slim announcement strip for the top of the homepage, sitting just under the fixed nav. */
export default function WaitlistBanner() {
  return (
    <div
      className="absolute left-0 right-0 z-40"
      style={{ top: "73px", backgroundColor: "var(--gold)" }}
    >
      <Link
        href={WAITLIST_JOIN_PATH}
        className="flex items-center justify-center gap-x-3 gap-y-1 flex-wrap px-4 py-2 font-outfit text-xs sm:text-sm focus:outline-none focus-visible:underline"
        style={{ color: "var(--ink)", minHeight: "44px" }}
      >
        <span className="font-medium uppercase tracking-widest">Mitch Protocol waitlist open</span>
        <span className="hidden sm:inline" aria-hidden="true">
          &middot;
        </span>
        <span>
          {FOUNDING_PERCENT_OFF}% off founding price &middot; launches {LAUNCH_LABEL}{" "}
          <LaunchCountdownInline />
        </span>
        <span className="font-medium underline underline-offset-2">Join &rarr;</span>
      </Link>
    </div>
  );
}
