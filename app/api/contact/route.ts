import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #374151; width: 150px;">Name:</td>
                <td style="padding: 10px; color: #1f2937;">${name}</td>
              </tr>
              <tr style="background-color: #f3f4f6;">
                <td style="padding: 10px; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 10px; color: #1f2937;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #374151;">Phone:</td>
                <td style="padding: 10px; color: #1f2937;">${phone || 'Not provided'}</td>
              </tr>
              <tr style="background-color: #f3f4f6;">
                <td style="padding: 10px; font-weight: bold; color: #374151;">Subject:</td>
                <td style="padding: 10px; color: #1f2937;">${subject}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 6px;">
              <p style="font-weight: bold; color: #374151; margin-bottom: 10px;">Message:</p>
              <p style="color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #eef2ff; border-left: 4px solid #4f46e5; border-radius: 4px;">
            <p style="margin: 0; color: #4338ca; font-size: 14px;">
              <strong>Reply to:</strong> ${email}
            </p>
          </div>
          
          <p style="margin-top: 20px; color: #6b7280; font-size: 12px; text-align: center;">
            This email was sent from LaunchPixel Contact Form
          </p>
        </div>
      `
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    )
  }
}
