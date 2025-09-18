// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { z } from "zod";

// Email regex kept simple (RFC-complete is impractical)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Schema validation with Zod
const ContactSchema = z.object({
  name: z.string().trim().max(200).optional(),
  email: z.string().trim().regex(emailRegex, "Invalid email format"),
  projectIdea: z.string().trim().min(1, "Project idea is required").max(300),
  description: z.string().trim().min(1, "Description is required").max(8000),
  nda: z.boolean().optional().default(false),
});

// Simple sanitization for angle brackets to discourage HTML injection in plain fields
const sanitize = (str: string) => str.replace(/[<>]/g, "");

export async function OPTIONS() {
  // Enable CORS per route if needed
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Max-Age": "86400",
    },
  });
}

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => null);
    if (!json || typeof json !== "object") {
      return NextResponse.json(
        { error: "Invalid JSON body." },
        { status: 400 }
      );
    }

    // Parse and validate
    const parsed = ContactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // Sanitize human-entered fields
    let { name, email, projectIdea, description } = parsed.data;
    name = name ? sanitize(name) : undefined;
    email = sanitize(email);
    projectIdea = sanitize(projectIdea);
    // description can contain line breaks; sanitize angle brackets only
    description = sanitize(description);

    // Map to email library contract:
    // projectIdea -> company, description -> message
    await sendEmail({
      name,
      email,
      projectIdea,
      description,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    // Log server-side; return generic message to client
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Server error — could not send message." },
      { status: 500 }
    );
  }
}
