/**
 * Receives contact and audit-request submissions and appends them to the
 * leads Google Sheet through its Apps Script web app. The script URL and
 * shared secret live in env vars so neither ships in the public bundle.
 */

const FORM_TYPES = ["contact", "audit-request"] as const;
const FIELDS = [
  "name",
  "workEmail",
  "brandName",
  "website",
  "serviceInterest",
  "message",
] as const;
const MAX_FIELD_LENGTH = 5000;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormType = (typeof FORM_TYPES)[number];

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  const secret = process.env.LEAD_WEBHOOK_SECRET;

  if (!webhookUrl || !secret) {
    console.error("Lead form: GOOGLE_SHEET_WEBHOOK_URL or LEAD_WEBHOOK_SECRET is not set.");
    return Response.json({ ok: false }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (typeof body.company_url === "string" && body.company_url !== "") {
    return Response.json({ ok: true });
  }

  const formType = body.formType as FormType;
  if (!FORM_TYPES.includes(formType)) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const fields = Object.fromEntries(
    FIELDS.map((field) => [
      field,
      typeof body[field] === "string"
        ? (body[field] as string).trim().slice(0, MAX_FIELD_LENGTH)
        : "",
    ]),
  ) as Record<(typeof FIELDS)[number], string>;

  if (!fields.name || !emailPattern.test(fields.workEmail) || !fields.brandName) {
    return Response.json({ ok: false }, { status: 400 });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...fields,
        formType,
        page: request.headers.get("referer") ?? "",
        submittedAt: new Date().toISOString(),
        secret,
      }),
    });
    const result = (await response.json().catch(() => null)) as { ok?: boolean } | null;

    if (!response.ok || !result?.ok) {
      console.error("Lead form: sheet rejected the submission.", response.status, result);
      return Response.json({ ok: false }, { status: 502 });
    }
  } catch (error) {
    console.error("Lead form: could not reach the sheet.", error);
    return Response.json({ ok: false }, { status: 502 });
  }

  return Response.json({ ok: true });
}
