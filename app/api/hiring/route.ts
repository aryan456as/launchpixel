import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const name = formData.get('name') as string
    const phone = formData.get('phone') as string
    const college = formData.get('college') as string
    const department = formData.get('department') as string
    const year = formData.get('year') as string
    const why = formData.get('why') as string

    // Process file attachments
    const files = formData.getAll('attachments') as File[]
    const attachments: { filename: string; content: Buffer }[] = []

    for (const file of files) {
      if (file && file.size > 0) {
        const arrayBuffer = await file.arrayBuffer()
        attachments.push({
          filename: file.name,
          content: Buffer.from(arrayBuffer),
        })
      }
    }

    // Build attachment list for the email body
    const attachmentListHtml = attachments.length > 0
      ? `
        <div style="margin-top: 20px; padding: 15px; background-color: #f0fdf4; border-left: 4px solid #22c55e; border-radius: 4px;">
          <p style="font-weight: bold; color: #166534; margin-bottom: 8px;">📎 Attachments (${attachments.length}):</p>
          <ul style="margin: 0; padding-left: 20px; color: #374151;">
            ${attachments.map(a => `<li style="padding: 2px 0;">${a.filename}</li>`).join('')}
          </ul>
        </div>
      `
      : ''

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
      subject: `Campus Ambassador Application - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">New Campus Ambassador Application</h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #374151; width: 180px;">Full Name:</td>
                <td style="padding: 10px; color: #1f2937;">${name}</td>
              </tr>
              <tr style="background-color: #f3f4f6;">
                <td style="padding: 10px; font-weight: bold; color: #374151;">Phone Number:</td>
                <td style="padding: 10px; color: #1f2937;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #374151;">College/University:</td>
                <td style="padding: 10px; color: #1f2937;">${college}</td>
              </tr>
              <tr style="background-color: #f3f4f6;">
                <td style="padding: 10px; font-weight: bold; color: #374151;">Department:</td>
                <td style="padding: 10px; color: #1f2937;">${department}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #374151;">Year of Study:</td>
                <td style="padding: 10px; color: #1f2937;">${year}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 6px;">
              <p style="font-weight: bold; color: #374151; margin-bottom: 10px;">Why Join as Campus Ambassador:</p>
              <p style="color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${why}</p>
            </div>

            ${attachmentListHtml}
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #ede9fe; border-left: 4px solid #7c3aed; border-radius: 4px;">
            <p style="margin: 0; color: #6b21a8; font-size: 14px;">
              <strong>Contact:</strong> ${phone}
            </p>
          </div>
          
          <p style="margin-top: 20px; color: #6b7280; font-size: 12px; text-align: center;">
            This email was sent from LaunchPixel Campus Ambassador Application Form
          </p>
        </div>
      `,
      attachments: attachments.map(a => ({
        filename: a.filename,
        content: a.content,
      }))
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Application sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send application' },
      { status: 500 }
    )
  }
}
