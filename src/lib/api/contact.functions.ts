import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactInputSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email.").max(180),
  service: z.string().trim().max(160).optional(),
  budget: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, "Please enter a short message.").max(3000),
});

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator(contactInputSchema)
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.RESEND_TO_EMAIL ?? "Piyushchandra2506@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

    if (!apiKey) {
      throw new Error("Missing RESEND_API_KEY.");
    }

    const service = data.service || "Not specified";
    const budget = data.budget || "Not specified";
    const subject = `New portfolio enquiry from ${data.name}`;
    const text = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Service: ${service}`,
      `Budget: ${budget}`,
      "",
      "Message:",
      data.message,
    ].join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
        <h2 style="margin:0 0 16px">New portfolio enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject,
        html,
        text,
        reply_to: data.email,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Resend failed: ${errorText}`);
    }

    return { ok: true };
  });
