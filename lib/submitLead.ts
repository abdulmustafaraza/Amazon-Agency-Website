export type LeadFormType = "contact" | "audit-request";

/**
 * Posts a form submission to /api/lead. Resolves only once the row is saved
 * in the leads sheet; throws otherwise so the form can show an error instead
 * of a false "received" message.
 */
export async function submitLead(
  formType: LeadFormType,
  fields: Record<string, string>,
) {
  const response = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...fields, formType }),
  });

  if (!response.ok) {
    throw new Error("Lead submission failed.");
  }
}
