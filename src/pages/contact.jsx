// src/pages/contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    suggestionsFeedback: '',
    siteRating: '',
    howDidYouHear: '',
    'bot-field': '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  // This function now creates a FormData object.
  const encode = (data) => {
    const form = new FormData();
    for (const key in data) {
      form.append(key, data[key]);
    }
    return form;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'radio' ? value : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');

    // Honeypot check: If the bot-field is filled, it's a bot.
    if (formData['bot-field']) {
      console.log('Bot detected, submission blocked.');
      setSubmissionStatus('success');
      return;
    }

    try {
      // POST the data to the new Cloudflare Pages Function endpoint.
      const response = await fetch("/contact", {
        method: "POST",
        body: encode(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          suggestionsFeedback: '',
          siteRating: '',
          howDidYouHear: '',
          'bot-field': ''
        });
        alert('Thank you for your message! We will get back to you soon.');
      } else {
        setSubmissionStatus('error');
        alert('Oops! There was an issue submitting your form. Please try again.');
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Form submission error:', error);
      alert('Network error or problem with submission. Please try again.');
    }
  };

  return (
    <section className="contact-page">
      <h1>📬 Contact & Feedback</h1>
      <p>
        We’re building this for you—and we want to hear what’s working, what’s
        missing, and what you’d love to see next.
      </p>

      {/* No Netlify-specific attributes needed. */}
      <form name="contact" onSubmit={handleSubmit} className="cloudflare-form">
        <input type="hidden" name="form-name" value="contact" />

        {/* Honeypot field - Keep this as-is */}
        <p style={{ display: 'none' }}>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" onChange={handleChange} value={formData['bot-field']} />
          </label>
        </p>

        {/* The rest of your form fields are unchanged */}
        <p>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </p>
        {/* ... (all your other form fields) ... */}

        <p>
          <button type="submit" disabled={submissionStatus === 'submitting'}>
            {submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </p>

        {submissionStatus === 'error' && (
          <p className="form-error-message" style={{ color: 'red' }}>
            There was an error submitting your form. Please try again.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
