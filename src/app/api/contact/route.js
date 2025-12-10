import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Load credentials from environment variables set in .env.local
const USER_EMAIL = process.env.NODEMAILER_USER
const USER_PASS = process.env.NODEMAILER_PASS

// The email address that receives the submission
const TARGET_EMAIL = 'arkokayal@gmail.com' 

// Configure the Nodemailer transporter for Gmail
// *** UPDATED CONFIGURATION FOR BETTER RELIABILITY WITH APP PASSWORDS ***
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Explicitly use the host
  port: 465, // Secure port
  secure: true, // Use SSL/TLS
  auth: {
    user: USER_EMAIL,
    pass: USER_PASS, // This MUST be a Google App Password, not your regular account password
  },
})

// POST handler for /api/contact
export async function POST(request) {
  // Check for configuration errors (e.g., if env vars failed to load)
  if (!USER_EMAIL || !USER_PASS) {
      // This error means .env.local wasn't loaded
      console.error('SERVER CONFIG ERROR: NODEMAILER_USER or NODEMAILER_PASS are not set. Did you restart the server?');
      return NextResponse.json({ error: 'Server configuration error: Credentials missing' }, { status: 500 });
  }

  try {
    const data = await request.json()

    // Construct the email content
    const mailOptions = {
      from: `Website Contact Form <${data.email}>`, // Use user's email as from for replies
      replyTo: data.email, // Ensure replies go to the user
      to: TARGET_EMAIL, 
      subject: `New Project Lead: ${data.firstName} ${data.lastName}`,
      html: `
        <p>You have a new contact form submission:</p>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
        <p><strong>Estimated Budget:</strong> ${data.budget || 'N/A'}</p>
        
        <h3>Project Details:</h3>
        <p>${data.projectDetails}</p>

        <hr>
        <p style="font-size: 12px; color: #888;">Agreed to Privacy Policy: ${data.agreement ? 'Yes' : 'No'}</p>
      `,
    }

    // Attempt to send the email
    await transporter.sendMail(mailOptions)

    // Respond with success status (200)
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    // Nodemailer failure error logging
    console.error('SERVER-SIDE EMAIL SENDING ERROR (Nodemailer failure):', error)
    return NextResponse.json({ error: 'Failed to send email due to server logic error' }, { status: 500 })
  }
}
