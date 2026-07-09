import { NextResponse } from "next/server";

type ContactPayload = {
  athleteName: string;
  parentName?: string;
  email: string;
  phone?: string;
  graduationYear: string;
  highSchool: string;
  primaryPosition: string;
  clubTeam?: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const formId = process.env.FORMSPREE_FORM_ID;

  if (!formId || formId.includes("paste_your")) {
    return NextResponse.json(
      {
        error:
          "Email is not configured yet. Add your Formspree form ID to .env.local.",
      },
      { status: 500 }
    );
  }

  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const {
    athleteName,
    parentName,
    email,
    phone,
    graduationYear,
    highSchool,
    primaryPosition,
    clubTeam,
    message,
  } = body;

  if (
    !athleteName?.trim() ||
    !email?.trim() ||
    !isValidEmail(email) ||
    !graduationYear ||
    !highSchool?.trim() ||
    !primaryPosition ||
    !message?.trim()
  ) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: `TrailCheck Inquiry — ${athleteName}`,
      email,
      "Athlete Name": athleteName,
      "Parent/Guardian": parentName || "Not provided",
      Phone: phone || "Not provided",
      "Graduation Year": graduationYear,
      "High School": highSchool,
      "Primary Position": primaryPosition,
      "Club Team": clubTeam || "Not provided",
      Message: message,
    }),
  });

  let result: { ok?: boolean; error?: string } = {};

  try {
    result = await response.json();
  } catch {
    return NextResponse.json(
      { error: "Unable to send your message. Please try again later." },
      { status: 500 }
    );
  }

  if (!response.ok || !result.ok) {
    return NextResponse.json(
      {
        error:
          result.error ??
          "Unable to send your message. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
