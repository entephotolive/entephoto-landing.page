"use server";

import connectToDatabase from "@/lib/mongodb";
import Report from "@/models/Report";
import { sendNotificationEmail, sendAutoReplyEmail } from "@/lib/email";
import { z } from "zod";

const formSchema = z.object({
  type: z.enum(["bug", "feedback"]),
  name: z.string().min(2, "Name must be at least 2 characters.").max(100),
  email: z.string().email("Please provide a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(2000),
});

export async function submitReport(prevState: any, formData: FormData) {
  try {
    const data = {
      type: formData.get("type"),
      name: formData.get("name"), 
      email: formData.get("email"),
      message: formData.get("message"),
    };
    

    const validatedData = formSchema.parse(data);

    await connectToDatabase();

    const newReport = await Report.create(validatedData);

    // In Vercel Serverless Functions, we MUST await async tasks before returning,
    // otherwise the execution environment freezes and kills the network connections,
    // causing "Unexpected socket close" or "ETIMEDOUT".
    // We use Promise.allSettled so that if an email fails, it still returns success to the user.
    await Promise.allSettled([
      sendNotificationEmail(validatedData).catch((err) => {
        console.error("Failed to send email notification:", err);
      }),
      sendAutoReplyEmail(validatedData).catch((err) => {
        console.error("Failed to send auto-reply email:", err);
      })
    ]);

    return { success: true, message: "Thank you! Your submission has been received." };
  } catch (error: any) {
    console.error("Submission Error:", error);
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.flatten().fieldErrors, message: "Validation failed." };
    }
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}
