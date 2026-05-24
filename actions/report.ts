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

    // Send email notification silently in the background
    // We catch the error so it doesn't fail the user submission if email fails
    sendNotificationEmail(validatedData).catch((err) => {
      console.error("Failed to send email notification in background:", err);
    });

    // Send auto-reply to the user silently in the background
    sendAutoReplyEmail(validatedData).catch((err) => {
      console.error("Failed to send auto-reply email in background:", err);
    });

    return { success: true, message: "Thank you! Your submission has been received." };
  } catch (error: any) {
    console.error("Submission Error:", error);
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.flatten().fieldErrors, message: "Validation failed." };
    }
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}
