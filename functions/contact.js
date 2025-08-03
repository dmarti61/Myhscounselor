// functions/contact.js

export async function onRequest(context) {
  // Only allow POST requests.
  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  // Parse the form data from the request.
  const formData = await context.request.formData();
  const formObject = Object.fromEntries(formData);

  // Honeypot check: If this field has a value, it's a bot.
  if (formObject['bot-field']) {
    console.log('Bot detected, submission blocked.');
    return new Response(JSON.stringify({ status: 'success' }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Get the API key and recipient email from Cloudflare's environment variables.
    const resendApiKey = context.env.RESEND_API_KEY;
    const recipientEmail = context.env.CONTACT_EMAIL;

    // Check that our secrets are configured.
    if (!resendApiKey || !recipientEmail) {
      console.error('API key or recipient email not configured. Check your Cloudflare Pages settings.');
      return new Response(JSON.stringify({ status: 'error', message: 'Server configuration error' }), {
        headers: { "Content-Type": "application/json" },
        status: 500,
      });
    }

    // Construct the email body from the form data.
    const emailBody = `
      New Contact Form Submission:
      ---------------------------
      First Name: ${formObject.firstName}
      Last Name: ${formObject.lastName}
      Email: ${formObject.email}
      How did you hear about us?: ${formObject.howDidYouHear}
      Site Rating: ${formObject.siteRating}
      Suggestions/Feedback:
      ${formObject.suggestionsFeedback}
    `;

    // Make the API call to Resend to send the email.
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: `onboarding@resend.dev`, // Resend's free tier requires this 'from' address
        to: [recipientEmail],
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
    return new Response(JSON.stringify({ status: 'error', message: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
