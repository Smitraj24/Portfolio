import { createEmailTransporter, getContactEmail } from "../config/email.config.js";

const transporter = createEmailTransporter();
const contactEmail = getContactEmail();

export const sendContactEmail = async ({ name, email, message }) => {
  if (!transporter || !contactEmail) {
    console.log("Email not configured - message stored locally only");
    return false;
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: contactEmail,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });
    return true;
  } catch (error) {
    throw error;
  }
};
