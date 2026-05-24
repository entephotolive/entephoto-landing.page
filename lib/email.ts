import nodemailer from "nodemailer";

interface EmailPayload {
  type: string;
  name: string;
  email: string;
  message: string;
}

export const sendNotificationEmail = async (data: EmailPayload) => {
  const { type, name, email, message } = data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER ,
      pass: process.env.EMAIL_PASS, 
    },
  });

  const mailOptions = {
    from: email ,
    to: process.env.EMAIL_USER,
    subject: `New ${type.toUpperCase()} from ${name}`,
    html: `
      <h2>New Submission via Entephoto</h2>
      <p><strong>Type:</strong> ${type}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #ccc; padding-left: 10px;">
        ${message.replace(/\n/g, "<br>")}
      </blockquote>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email notification sent successfully.");
  } catch (error) {
    console.error("Error sending email notification:", error);
    throw new Error("Could not send email notification.");
  }
};

export const sendAutoReplyEmail = async (data: EmailPayload) => {
  const { type, name, email } = data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let subject = "";
  let messageContent = "";

  if (type === "bug") {
    subject = "Thank you for reporting an issue - Entephoto";
    messageContent = `
      <p>Thank you for reporting this issue. We take bugs very seriously.</p>
      <p>Our development team has been notified and we are currently working on it to ensure you have the best experience possible.</p>
    `;
  } else {
    subject = "Thank you for your feedback - Entephoto";
    messageContent = `
      <p>Thank you for sharing your feedback with us!</p>
      <p>We highly value your input, as it helps us improve our platform and deliver a better experience for our community. We'll make sure the right team reviews your suggestions.</p>
    `;
  }

  const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7fa; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
    .header { background-color: #09090b; padding: 30px 20px; text-align: center; color: #ffffff; }
    .header h1 { margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 1px; }
    .content { padding: 40px 30px; color: #333333; line-height: 1.6; }
    .content h2 { color: #09090b; font-size: 20px; margin-top: 0; }
    .content p { margin: 0 0 15px; font-size: 16px; color: #555555; }
    .footer { background-color: #f9fafb; padding: 20px; text-align: center; font-size: 14px; color: #888888; border-top: 1px solid #eeeeee; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Entephoto</h1>
    </div>
    <div class="content">
      <h2>Hi ${name},</h2>
      ${messageContent}
      <p>If you have any further questions, feel free to reply directly to this email.</p>
      <p>Best regards,<br><strong>The Entephoto Team</strong></p>
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} Entephoto. All rights reserved.
    </div>
  </div>
</body>
</html>
  `;

  const mailOptions = {
    from: `"Entephoto Team" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: subject,
    html: htmlTemplate,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Auto-reply email sent successfully.");
  } catch (error) {
    console.error("Error sending auto-reply email:", error);
    throw new Error("Could not send auto-reply email.");
  }
};
