import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, organization, industry, equipmentType, email, phone } = body

    // For now, just log the data
    // You can integrate with email services like:
    // - Resend (resend.com) - recommended for Vercel
    // - SendGrid
    // - Nodemailer with SMTP
    // - Formspree, FormSubmit, etc.
    
    console.log('Form submission:', {
      name,
      organization,
      industry,
      equipmentType,
      email,
      phone,
    })

    // Example: Send email using a service
    // You'll need to install and configure an email service
    // For Resend: npm install resend
    // Then uncomment and configure:
    /*
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'juatekltd@gmail.com',
      subject: `New Demo Request from ${name}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Equipment Type:</strong> ${equipmentType}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    })
    */

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing form:', error)
    return NextResponse.json(
      { message: 'Error processing form submission' },
      { status: 500 }
    )
  }
}
