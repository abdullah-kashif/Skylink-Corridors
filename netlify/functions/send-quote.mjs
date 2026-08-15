import nodemailer from "nodemailer";

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store"
  }
});

const clean = (value, maxLength) => String(value ?? "").trim().slice(0, maxLength);

export default async (request) => {
  if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Bots commonly fill hidden fields. Return success without sending anything.
  if (clean(payload.website, 200)) return json({ ok: true });

  const fullName = clean(payload.fullName, 100);
  const company = clean(payload.company, 120);
  const email = clean(payload.email, 254);
  const phone = clean(payload.phone, 50);
  const service = clean(payload.service, 120);
  const message = clean(payload.message, 4000);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!fullName || !company || !emailPattern.test(email) || !phone || !service || !message) {
    return json({ error: "Please complete all required fields correctly." }, 400);
  }

  const requiredVariables = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASSWORD", "QUOTE_RECIPIENT"];
  if (requiredVariables.some((name) => !process.env[name])) {
    console.error("Missing SMTP environment configuration.");
    return json({ error: "Email service is not configured yet." }, 500);
  }

  const port = Number(process.env.SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

  const text = [
    "New quote request received from the Skylink Corridor website.",
    "",
    `Full Name: ${fullName}`,
    `Company: ${company}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Service Required: ${service}`,
    "",
    "Message / Requirements:",
    message
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `Skylink Website <${process.env.SMTP_USER}>`,
      to: process.env.QUOTE_RECIPIENT,
      replyTo: email,
      subject: `New Quote Request - ${company}`,
      text
    });
    return json({ ok: true });
  } catch (error) {
    console.error("Quote email failed:", error?.message || error);
    return json({ error: "Your request could not be sent. Please try again." }, 502);
  }
};

export const config = { path: "/api/send-quote" };
