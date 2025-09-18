import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
if (!RESEND_API_KEY) {
  console.warn("RESEND_API_KEY not set. Email will fail.");
}

const FROM_EMAIL = "Personal Portfolio <no-reply@rahul-kapoor.in>";
export const LIB_EMAIL_TO = ["rahulkpr1972@gmail.com"];

export const resend = new Resend(RESEND_API_KEY || "");

export async function sendEmail({
  name,
  email,
  projectIdea,
  description,
}: {
  name?: string;
  email?: string;
  projectIdea?: string;
  description?: string;
}) {
  if (!RESEND_API_KEY) throw new Error("Missing RESEND_API_KEY");

  // Already sanitized in route.ts, so no need to double escape
  const safeName = name || "—";
  const safeEmail = email || "—";
  const safeProjectIdea = projectIdea || "—";
  const safeDescription = description?.replace(/\n/g, "<br/>") || "—";

  const subject = `New message from ${
    safeName === "—" ? "Website Visitor" : safeName
  }`;

  // --- Admin Notification Email ---
  const adminBody = `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif; background:#f3f4f6; padding:32px;">
    <div style="max-width:640px; margin:0 auto; background:white; border-radius:12px; box-shadow:0 4px 14px rgba(0,0,0,0.08); overflow:hidden;">

      <div style="background:#0f172a; color:#f9fafb; padding:20px 28px; display:flex; align-items:center;">
        <span style="font-size:22px; margin-right:10px;">📨</span>
        <h2 style="margin:0; font-size:18px; font-weight:600;">New Portfolio Contact</h2>
      </div>

      <div style="padding:28px; color:#111827; font-size:15px; line-height:1.6;">
        <table style="width:100%; border-collapse:separate; border-spacing:0 10px;">
          <tr><td style="font-weight:600; width:160px;">👤 Name:</td><td>${safeName}</td></tr>
          <tr><td style="font-weight:600;">📧 Email:</td><td><a href="mailto:${safeEmail}" style="color:#2563eb;">${safeEmail}</a></td></tr>
          <tr><td style="font-weight:600;">🏢 Project Idea:</td><td>${safeProjectIdea}</td></tr>
          <tr><td style="font-weight:600; vertical-align:top;">💬 Description:</td><td>${safeDescription}</td></tr>
        </table>
      </div>

      <div style="background:#f9fafb; padding:16px 28px; text-align:center; font-size:13px; color:#6b7280;">
        Sent via <a href="https://rahul-kapoor.in" style="color:#2563eb;">rahul-kapoor.in</a>
      </div>
    </div>
  </div>
  `;

  // --- User Confirmation Email ---
  const userBody = `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif; background:#f9fafb; padding:32px;">
    <div style="max-width:600px; margin:0 auto; background:white; border-radius:12px; box-shadow:0 2px 10px rgba(0,0,0,0.08); overflow:hidden;">

      <div style="background:#4f46e5; color:#f9fafb; padding:20px 28px;">
        <h2 style="margin:0; font-size:18px; font-weight:600;">Thanks for reaching out 🚀</h2>
      </div>

      <div style="padding:28px; color:#111827; font-size:15px; line-height:1.6;">
        <p>Hi ${safeName !== "—" ? safeName : "there"},</p>
        <p>We’ve received your message and will get back to you soon. Here’s a copy for your records:</p>
        <hr style="margin:20px 0; border:none; border-top:1px solid #e5e7eb;" />
        <p><strong>Your message:</strong></p>
        <p style="color:#374151;">${safeProjectIdea} - ${safeDescription}</p>
        <p style="margin-top:20px;">Best regards,<br/>Rahul Kapoor</p>
      </div>

      <div style="background:#f9fafb; padding:16px 28px; text-align:center; font-size:12px; color:#6b7280;">
        Sent from <a href="https://rahul-kapoor.in" style="color:#4f46e5;">rahul-kapoor.in</a>
      </div>
    </div>
  </div>
  `;

  // Send to admins
  await resend.emails.send({
    from: FROM_EMAIL,
    to: LIB_EMAIL_TO,
    subject,
    html: adminBody,
  });

  // Send confirmation to user
  if (email) {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "✅ Thanks for contacting me",
      html: userBody,
    });
  }

  return { success: true };
}
