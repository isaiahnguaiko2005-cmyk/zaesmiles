const AIRTABLE_BASE_ID = "appNVnlaCTuZzeOSu";
const AIRTABLE_TABLE_ID = "tblOSvu4X5OQibjJv";

export async function POST(request: Request) {
  try {
    const { question, name, type } = await request.json();

    if (typeof question !== "string" || question.trim().length < 3) {
      return Response.json({ error: "Question is required." }, { status: 400 });
    }

    const token = process.env.AIRTABLE_TOKEN;
    if (!token) {
      return Response.json({ error: "Server not configured." }, { status: 500 });
    }

    const submissionType = type === "Advice" ? "Advice" : "Podcast";

    const res = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Question: question.trim().slice(0, 2000),
            Name: typeof name === "string" ? name.trim().slice(0, 100) : "",
            Type: submissionType,
            "Submitted At": new Date().toISOString(),
          },
        }),
      }
    );

    if (!res.ok) {
      const errBody = await res.text();
      console.error("Airtable write failed", res.status, errBody);
      throw new Error(`Airtable ${res.status}: ${errBody}`);
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("podcast-questions route error", err);
    return Response.json({ error: "Something went wrong. Try again." }, { status: 500 });
  }
}
