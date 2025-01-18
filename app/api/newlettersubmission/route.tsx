import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Email configuration using nodemailer for newsletter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: ["aryanlohia2005@gmail.com", "aryan.lohia.shareiitkgp@gmail.com"],
      subject: "Newsletter Signup - New Subscriber",
      text: `
        A new user has signed up for the SHARE newsletter.
        
        Email: ${email}
      `,
      // Adding a unique Message-ID to prevent emails from grouping into the same thread
      headers: {
        "Message-ID": `<newsletter-${Date.now()}@share.com>`,
      },
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Newsletter signup submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error submitting newsletter form." },
      { status: 500 }
    );
  }
}
