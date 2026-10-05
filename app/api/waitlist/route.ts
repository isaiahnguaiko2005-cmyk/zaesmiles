// Adds an email to the Mitch Protocol waitlist in MailerLite.
// Needs MAILERLITE_API_KEY in the environment; MAILERLITE_GROUP_ID is optional
// but recommended so waitlist signups land in their own group.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  try {
    const { email, website } = await request.json();

    // Honeypot: bots fill the hidden field. Pretend success, store nothing.
    if (typeof website === "string" && website.length > 0) {
      return Response.json({ ok: true });
    }

    if (typeof email !== "string" || !EMAIL_RE.test(email.trim()) || email.length > 254) {
      return Response.json({ error: "Enter a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "Server not configured." }, { status: 500 });
    }

    const groupId = process.env.MAILERLITE_GROUP_ID;
    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        ...(groupId ? { groups: [groupId] } : {}),
      }),
    });

    // 200 = existing subscriber updated, 201 = created. Both are success for the visitor.
    if (!res.ok) {
      const errBody = await res.text();
      console.error("MailerLite subscribe failed", res.status, errBody);
      return Response.json({ error: "Something went wrong. Try again." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("waitlist route error", err);
    return Response.json({ error: "Something went wrong. Try again." }, { status: 500 });
  }
}
