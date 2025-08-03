// functions/contact.js

// This is the endpoint that will receive your form submission.
export async function onRequest(context) {
  // Only allow POST requests to this function.
  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  // Get the form data from the request.
  const formData = await context.request.formData();
  const formObject = Object.fromEntries(formData);

  // Honeypot check: If the 'bot-field' has a value, it's a bot.
  // We'll return a success response to trick the bot.
  if (formObject['bot-field']) {
    console.log('Bot detected, submission blocked.');
    return new Response(JSON.stringify({ status: 'success' }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
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

    // Access the email service and recipient email from the environment variables.
    const mailchannels = context.env.MAILCHANNELS_EMAIL;
    const recipient = context.env.CONTACT_EMAIL;

    // Check if the necessary environment variables are set.
    if (!mailchannels || !recipient) {
      console.error('Email service or recipient not configured. Check your Cloudflare settings.');
      return new Response(JSON.stringify({ status: 'error' }), {
        headers: { "Content-Type": "application/json" },
        status: 500,
      });
    }
    
    // Send the email using the Mailchannels binding.
    await mailchannels.send({
      from: "no-reply@yourdomain.com", // Replace with an email on your domain
      to: [recipient],
      subject: "New Contact Form Submission",
      content: [
        {
          type: "text/plain",
          value: emailBody,
        },
      ],
    });

    console.log('Email sent successfully.');
    return new Response(JSON.stringify({ status: 'success' }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ status: 'error', message: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
