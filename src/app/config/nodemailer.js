import Mailgun from "mailgun.js";
import formData from "form-data";

const mg = new Mailgun(formData);

export function getMailgunClient() {
  const key = process.env.MAILGUN_API_KEY;
  if (!key) {
    throw new Error("MAILGUN_API_KEY is not configured");
  }
  return mg.client({
    username: "api",
    key,
    url: process.env.MAILGUN_API_URL || "https://api.mailgun.net",
  });
}

export const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || "";
export const MAILGUN_FROM =
  process.env.MAILGUN_FROM ||
  (MAILGUN_DOMAIN ? `GTCFX <postmaster@${MAILGUN_DOMAIN}>` : "");
