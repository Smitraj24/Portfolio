import nodemailer from "nodemailer";

export const createEmailTransporter = () => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("Email credentials not configured. Email functionality disabled.");
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export const getContactEmail = () => {
  return process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;
};
