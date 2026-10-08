// Adds an email to the Mitch Protocol waitlist form in Kit (formerly ConvertKit).
// Env vars (set in Vercel for Production and Preview):
//   KIT_API_KEY  - Kit API key (Settings > Developer)
//   KIT_FORM_ID  - numeric ID of the Kit form that collects the waitlist

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const KIT_BASE = "https://api.kit.com/v4";

export async function POST(request: Request) {
  try {
    const { email, website } = await request.json();

    // Honeypot: bots fill the hidden field. Pretend success, store nothing.
    if (typeof website === "string" && website.length > 0) {
      return Response.json({ ok: true });
    }

    if (typeof email !== "string" || email.length > 254 || !EMAIL_RE.test(email.trim())) {
      return Response.json({ error: "Enter a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.KIT_API_KEY;
    const formId = process.env.KIT_FORM_ID;
    if (!apiKey || !formId) {
      return Response.json({ error: "Server not configured." }, { status: 500 });
    }

    const headers = {
      "X-Kit-Api-Key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const email_address = email.trim().toLowerCase();

    // 1) Create (or find) the subscriber. Kit requires they exist before joining a form.
    const created = await fetch(`${KIT_BASE}/subscribers`, {
      method: "POST",
      headers,
      body: JSON.stringify({ email_address }),
    });
    if (!created.ok) {
      console.error("Kit create subscriber failed", created.status, await created.text());
      return Response.json({ error: "Something went wrong. Try again." }, { status: 502 });
    }

    // 2) Add them to the waitlist form.
    const added = await fetch(`${KIT_BASE}/forms/${encodeURIComponent(formId)}/subscribers`, {
      method: "POST",
      headers,
      body: JSON.stringify({ email_address }),
    });
    if (!added.ok) {
      console.error("Kit add to form failed", added.status, await added.text());
      return Response.json({ error: "Something went wrong. Try again." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("waitlist route error", err);
    return Response.json({ error: "Something went wrong. Try again." }, { status: 500 });
  }
}
