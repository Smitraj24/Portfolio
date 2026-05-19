import { sendContactEmail } from "../services/email.service.js";

// In-memory storage for messages (optional backup)
const messages = [];

export const submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: "Name, email and message are required" 
    });
  }

  const entry = { 
    name, 
    email, 
    message, 
    createdAt: new Date().toISOString() 
  };

  messages.push(entry);
  console.log("Contact form submission:", entry);

  try {
    const emailSent = await sendContactEmail({ name, email, message });
    
    if (emailSent) {
      return res.status(201).json({ 
        success: true, 
        id: messages.length 
      });
    }

    // No email config: still accept and store (dev mode)
    res.status(201).json({ 
      success: true, 
      id: messages.length 
    });
  } catch (error) {
    console.error("Email send failed:", error);
    return res.status(500).json({ 
      error: "Failed to send message. Please try again later." 
    });
  }
};

export const getMessages = (req, res) => {
  res.json(messages);
};
