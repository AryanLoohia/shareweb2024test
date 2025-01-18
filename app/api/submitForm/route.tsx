// app/api/submitForm/route.ts
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { first_name, last_name, email, phone, message } = await req.json();

    // Email configuration using nodemailer
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
      subject: "New Form Submission",
      text: `
        First Name: ${first_name}
        Last Name: ${last_name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Form submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error submitting form." },
      { status: 500 }
    );
  }
}
