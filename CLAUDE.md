# Zae Smiles / UNMONITORED — Project Handoff

This file is auto-loaded by Claude Code at the start of a new session in this
project. It summarizes everything done in the prior session so a fresh chat
can pick up without re-deriving context.

## Who this is for

**Isaiah "Mitch" Nguaiko**, 21, social psychology content creator.
- Instagram: `@zae.smiles` (5.9K followers)
- TikTok: `@zae.smiles0` (6.3K followers)
- Business email: `isaiahnguaiko6@gmail.com`
- Building **UNMONITORED** (book + 90-day recalibration system for social
  anxiety) and running **Project 300K**: a public 183-day challenge
  (June 30 – Dec 30, 2026) to hit 300K combined followers, $30K/mo revenue,
  and fund the "Jaguar Fund" (an $8,400 down payment on a 2018 Jaguar F-Type,
  treated as a public accountability device, not just a purchase).
- Core pitch (as of the latest hero copy): "I teach people how to make
  friends and be social using real, actionable human psychology, not vague
  confidence advice." Avoid reducing this to "I make things simple" — that
  framing was explicitly rejected once already.
- Direct design/structural reference throughout: **mavgpt.ai** (a creator
  named Maverick, AI-education niche). Multiple UI patterns on this site were
  extracted directly from his (hover animations, hero layout, media kit
  structure) — see "Design decisions" below for specifics already ported
  over, and re-check mavgpt.ai for anything else being requested "like his
  site."

## Tech stack & where things live

- **Local project folder**: `C:\Users\Admin\Desktop\ZaeSmiles`
- **Not a git repo.** No version control safety net — deploys go straight
  from local folder to Vercel. Worth suggesting `git init` + GitHub remote;
  raised once with the user, never followed through.
- **Next.js 14 (App Router)** + Tailwind CSS, TypeScript.
- **Deployed via Vercel CLI** (not GitHub-connected). Project:
  `unmonitored/zaesmiles`. Vercel account: `isaiahnguaiko2005-2428`.
  - `vercel deploy --yes` → preview URL
  - `vercel deploy --prod --yes` → production (**always confirm with the
    user before running this** — treated as a "publish" action every time,
    even mid-session; the auto-mode classifier will block it without a
    fresh confirmation regardless of earlier approvals)
  - If a deploy fails with `"Not authorized"`, just retry once before
    assuming auth is broken (happened once, was transient). Check with
    `vercel whoami` if it persists.
  - `$env:Path` needs the machine+user PATH pulled in manually via
    `[System.Environment]::GetEnvironmentVariable(...)` at the start of each
    PowerShell command — Node/npm/git/vercel were installed via `winget`
    mid-session and the shell doesn't auto-refresh PATH otherwise.
- **Google Sheet** backs the live stats tracker, fetched as public CSV in
  `app/api/stats/route.ts`:
  `https://docs.google.com/spreadsheets/d/1M0bcC-FM5gzoBbo4QRpI35zj7EPt3XbaAVKeDRLeQI0/export?format=csv&gid=1252941834`
  Columns: `week, IG_Followers, TikTok_Followers, Revenue, Jaguar_Fund` (+4
  unused delta columns). **Blank cells now correctly carry forward** the
  last filled value with a $0 delta instead of showing a fake negative drop
  — this was a real bug, fixed this session, verified against live sheet
  data.

## Design system

- Palette: `--ink:#0C0F14 --ink2:#141820 --cream:#F5F0E8 --cream2:#EDE8DC
  --gold:#C4A06A --sage:#8A9E8C` (defined in `app/globals.css`)
- Fonts: **Cormorant Garamond** (serif, most display headings) + **Outfit**
  (sans, body/UI). Exception: the Hero `<h1>` ("I'm Mitch.") deliberately
  uses **Outfit bold**, not Cormorant — matches mavgpt's sans-serif headline
  treatment, explicitly approved by the user over the serif version.
- A user request to explore a full light/cream theme (vs. current dark) was
  raised early on with two mockup directions shown, but **never decided** —
  may be superseded by the current dark "I'm Mitch" redesign, or may still
  be wanted. Ask before assuming either way.

## Site structure (multi-page, converted from a single long-scroll page)

- `/` — Home: `Hero` → `TrackerSection` → `AboutTeaser` → `ProductsTeaser` →
  `Socials`
- `/about` — `About` (bio) + `Project300K` (challenge explainer) +
  `JaguarFType` (car rationale + budget breakdown) — the "deep trust"
  content, deliberately kept off Home per an advisor-council review (see
  below)
- `/guides` — `FreeGuides` (search + sort by Newest/Most Popular, Popular
  badge, gold-highlighted "leads to a paid product" cards)
- `/products` — `Products` (UNMONITORED $27+, The Mitch Protocol $2.99)
- `/partnerships` — `MediaKit` (full media-kit page, replaced the old
  `WorkWithMe` component — see Analytics section)
- `/ask` — `Ask` (podcast Q&A intake, not live yet)
- `/coaching` — `Coaching` (Foundation/Elite tiers, not open yet)
- `Nav` + `Footer` live in `app/layout.tsx` (global, not per-page). Nav uses
  `next/link`, has an explicit "Home" link (added because there was no way
  back from sub-pages otherwise), desktop breakpoint is `lg:` not `md:`
  (bumped because there are 7 nav items now). Mobile menu shows photo + name
  + handle at top, then links, then Instagram/TikTok/Discord icons at the
  bottom.
- `components/WorkWithMe.tsx` is **dead code** now (superseded by
  `MediaKit.tsx`), still present but unused — safe to delete.

## Hero (current state, `components/Hero.tsx`)

- Kicker: "Social Psychology Creator & Educator"
- Headline: "I'm Mitch." (Outfit bold)
- Body paragraph is responsive: short version on `<lg` (`lg:hidden`), longer
  version on `lg:`+ (`hidden lg:inline`) — mirrors mavgpt's own
  full-screen-vs-half-screen copy behavior.
- Left column buttons: "Free Guides →" (`/guides`), "Join the Free Discord
  →", then "Have a question? Ask Mitch →" text link below (enlarged to
  `text-base` per request, was `text-sm`).
- Right column: circular photo (`public/mitch.png`, `rounded-full
  overflow-hidden`, has a hover shimmer sweep via a `group`/`group-hover`
  diagonal gradient overlay) → plain "200M+ Total Views / 10K+ Followers"
  stat pair (arrow-annotated version was tried and **explicitly rejected** —
  don't reintroduce hand-drawn arrow callouts) → "Free Conversation Formula
  (Mitch Effect)" button + "My Story →" link, paired side-by-side (mirrors
  mavgpt's "Browse guides + My story" pairing exactly).
- `.story-link` hover-underline effect is in `app/globals.css` — a `::after`
  pseudo-element that sweeps in from the left on hover and recedes to the
  right on hover-out. This is the **exact CSS extracted from mavgpt.ai's own
  stylesheet** (confirmed via devtools), just recolored to gold. Reuse this
  class for any future "text link with a cool underline" ask instead of
  reinventing it.
- `TrackerSection.tsx` (the Project 300K live stats card) used to live
  inside Hero, was moved to its own section below Hero on Home — don't put
  it back inside Hero's grid.

## Analytics gathered this session (real data — do not fabricate more)

Source: user-uploaded Instagram PDF export (Aug 12–Sep 11, 2026) and 4
TikTok Excel exports (Overview/Content/Viewers/Followers, Aug 15–Sep 11,
2026). Full numbers are in the `/partnerships` MediaKit page. Headline
figures:
- Combined followers ~12.2K (5.9K IG + 6.3K TikTok)
- IG engagement rate: **13%** (engagement ÷ views — chose the least
  generous honest formula on purpose)
- TikTok engagement rate: **25%*** — flagged with an asterisk because ~76%
  of the 28-day view total came from one viral 3-day spike (Aug 18–20).
  Don't quote 25% as "typical" without that caveat.
- Audience skews male (82% IG / 72% TikTok), mostly 18–34, ~55% US.
- Content insight surfaced to the user: comment-to-like ratio is very low on
  both platforms (~0.3–0.4%) despite huge share/save counts — "high reach,
  low direct community engagement." `#zaetalks #selfimprovement` tagged
  videos are evergreen (still gaining views months later); prank/meme
  content spikes and dies fast.
- "What I Offer" section on the Media Kit page lists **service categories
  only, no pricing** — user never gave rates, so it says "reach out for a
  quote" rather than inventing numbers. Fill this in for real if the user
  provides pricing.
- Brand partners listed (OLOV Trimmer, Based Bodyworks, Crispy Halal,
  Rimbério) were **never explicitly reconfirmed** as current — worth asking.

## Known issues / gotchas

1. **Preview-deployment images can render blank.** `*.vercel.app` preview
   URLs (not production) sometimes fail to serve embedded `<img>`/`next/image`
   sub-resources due to a Vercel deployment-protection cookie/cache race —
   the file itself is fine (confirmed by navigating to the image URL
   directly, which always works). `unoptimized` is set on all `mitch.png`
   `<Image>` usages as a partial mitigation. **Don't panic-debug a blank
   photo on preview** — check production, or navigate to the image URL
   directly to confirm the file is really fine before assuming a code bug.
2. **Never trust an unauthenticated check** (PowerShell `Invoke-WebRequest`,
   curl, etc.) **against a preview `*.vercel.app` URL** — deployment
   protection returns a 200 with an HTML challenge/shell page instead of
   real content or a clear error. Always verify preview deployments through
   the user's already-authenticated Chrome.
3. **Screenshot tool flakiness** in claude-in-chrome: a long-lived tab's
   `computer` screenshot action can time out or return 0-width. Opening a
   fresh tab (`tabs_create_mcp`) reliably fixes it.
4. **`resize_window` doesn't reliably change the real rendered viewport** in
   this environment. To test a specific Tailwind breakpoint (e.g. the `lg:`
   1024px cutoff), inject a temporary `<style>` override via
   `javascript_tool` forcing the relevant classes, rather than trusting the
   resize.
5. **`/plugin` slash command is unavailable in this desktop-app
   environment** — can't install marketplace skills/plugins (e.g. the user
   tried `ui-ux-pro-max-skill` from GitHub) from within this session.

## Current deployment status

**Everything described in this document is live in production** as of this
writing — the full multi-page split, new profile photo, "I'm Mitch" hero
redesign, hover/motion polish, `TrackerSection`/`AboutTeaser`/
`ProductsTeaser`, the `/partnerships` Media Kit page, the enlarged Ask Mitch
link, and the photo hover shimmer were all promoted to production and
verified working at **https://zaesmiles.vercel.app** (photo confirmed
rendering correctly on the real domain, not just preview).

There is no pending preview batch waiting on approval. Any new preview URL
from `vercel deploy` in a future session is for whatever gets built *next*,
not a backlog from this handoff.

## Immediate next step

No specific pending action — check in with the user for what they want to
work on next. See "Other open items" below for things that were raised but
never resolved, in case one of those is where they want to pick back up.

## Other open items (lower priority, no action needed unless asked)

- Light/cream theme exploration — never resolved, may or may not still be
  wanted.
- A "guide-finder quiz" idea — user's own suggestion, hedged as "I don't
  know," not scoped or built.
- Per-guide cover images on Free Guides cards — blocked on the user
  producing real image assets, don't fabricate placeholder art.
- Getting the project into git/GitHub for version safety.
- Real pricing for the Media Kit "What I Offer" section.
