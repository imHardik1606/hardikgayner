// sendEmail.ts
"use server";

import { Resend } from "resend";
import EmailFormat from "../emails/EmailFormat";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  const senderEmail = formData.get("senderEmail");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (typeof senderEmail !== "string" || typeof message !== "string") {
    return { error: "Invalid form data" };
  }

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev", // replace with your verified sender
    to: "hardikgayner@gmail.com", // where you want to receive contact emails
    subject: `Portfolio message from ${senderEmail}`,
    react: <EmailFormat senderEmail={senderEmail} subject={subject} message={message} />,
  });

  if (error) {
    console.error("Error sending email:", error);
    return { error: "Failed to send email" };
  }

  return { success: true };
}
