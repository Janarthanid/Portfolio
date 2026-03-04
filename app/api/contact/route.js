import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// In-memory store (demo purpose)
const submissions = []

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // 🔹 Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // 🔹 Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    // 🔹 Sanitize inputs
    const sanitized = {
      name: name.trim().slice(0, 100),
      email: email.trim().slice(0, 200),
      message: message.trim().slice(0, 2000),
      createdAt: new Date().toISOString(),
    }

    submissions.push(sanitized)

    // 🔹 Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // 🔹 Send email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // You receive message
      replyTo: sanitized.email,
      subject: `New Message from ${sanitized.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitized.name}</p>
        <p><strong>Email:</strong> ${sanitized.email}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitized.message}</p>
        <br/>
        <small>Sent at: ${sanitized.createdAt}</small>
      `,
    })

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    )

  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}