// functions/contact.js

/**
 * Handles incoming contact form submissions.
 * This function only accepts POST requests, validates a honeypot field,
 * and sends an email via the Resend API using environment variables.
 */
export async function onRequest(context) {
  // Only allow POST requests.
  if (context.request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    // Parse the form data from the request.
    const formData = await context.request.formData();
    const formObject = Object.fromEntries(formData);

    // Honeypot check: If the 'bot-field' has a value, it's a bot.
    if (formObject['bot-field']) {
      console.log('Bot detected, submission blocked.');
      // Return a success response to avoid giving away that this is a honeypot.
      return new Response(JSON.stringify({ status: 'success' }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // Get the API key and recipient email from Cloudflare's environment variables.
    const { RESEND_API_KEY, CONTACT_EMAIL } = context.env;

    // Ensure environment variables are configured.
    if (!RESEND_API_KEY || !CONTACT_EMAIL) {
      console.error('API key or recipient email not configured. Check your Cloudflare Pages settings.');
      return new Response(JSON.stringify({ status: 'error', message: 'Server configuration error' }), {
        headers: { "Content-Type": "application/json" },
        status: 500,
      });
    }

    // Construct a human-readable email body from the form data.
    const emailBody = `
      New Contact Form Submission:
      ---------------------------
      First Name: ${formObject.firstName || 'N/A'}
      Last Name: ${formObject.lastName || 'N/A'}
      Email: ${formObject.email || 'N/A'}
      How did you hear about us?: ${formObject.howDidYouHear || 'N/A'}
      Site Rating: ${formObject.siteRating || 'N/A'}
      Suggestions/Feedback:
      ${formObject.suggestionsFeedback || 'N/A'}
    `;

    // Make the API call to Resend to send the email.
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: `onboarding@resend.dev`, // Resend's free tier requires this 'from' address.
        to: [CONTACT_EMAIL],
        subject: "New Contact Form Submission",
        html: `<pre>${emailBody}</pre>`,
      }),
    });

    // Handle the Resend API response.
    if (resendResponse.ok) {
      console.log('Email sent successfully via Resend.');
      return new Response(JSON.stringify({ status: 'success' }), {
        headers: { "Content-Type": "application/json" },
      });
    } else {
      const resendError = await resendResponse.json();
      console.error('Error sending email via Resend:', resendError);
      return new Response(JSON.stringify({ status: 'error', message: resendError.message }), {
        headers: { "Content-Type": "application/json" },
        status: resendResponse.status,
      });
    }

  } catch (error) {
    console.error('Form submission error:', error);
    return new Response(JSON.stringify({ status: 'error', message: 'Internal server error' }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
