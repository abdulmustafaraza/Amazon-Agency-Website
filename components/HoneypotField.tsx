const HONEYPOT_NAME = "company_url";

/**
 * Spam trap. Hidden from people and assistive tech, but naive bots fill it,
 * and /api/lead silently drops any submission where it is not empty.
 */
export default function HoneypotField() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label htmlFor={HONEYPOT_NAME}>Leave this field empty</label>
      <input autoComplete="off" id={HONEYPOT_NAME} name={HONEYPOT_NAME} tabIndex={-1} type="text" />
    </div>
  );
}

export function readHoneypot(form: HTMLFormElement) {
  return String(new FormData(form).get(HONEYPOT_NAME) ?? "");
}
