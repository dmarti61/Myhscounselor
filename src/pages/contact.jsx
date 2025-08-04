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

  // This function creates a FormData object.
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
      [name]: type === 'checkbox' ? checked : value
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

      <form name="contact" onSubmit={handleSubmit} className="cloudflare-form">
        <input type="hidden" name="form-name" value="contact" />

        {/* Honeypot field */}
        <p style={{ display: 'none' }}>
          <label>
            Don’t fill this out if you’re human:
            <input
              name="bot-field"
              onChange={handleChange}
              value={formData['bot-field']}
            />
          </label>
        </p>

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

        <p>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </p>

        <p>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </p>

        <p>
          <label htmlFor="suggestionsFeedback">Suggestions & Feedback:</label>
          <textarea
            id="suggestionsFeedback"
            name="suggestionsFeedback"
            value={formData.suggestionsFeedback}
            onChange={handleChange}
            rows="5"
            required
          />
        </p>

        <fieldset>
          <legend>How would you rate your experience on our site?</legend>
          <label>
            <input
              type="radio"
              name="siteRating"
              value="Excellent"
              checked={formData.siteRating === 'Excellent'}
              onChange={handleChange}
            />{' '}
            Excellent
          </label>
          <label>
            <input
              type="radio"
              name="siteRating"
              value="Good"
              checked={formData.siteRating === 'Good'}
              onChange={handleChange}
            />{' '}
            Good
          </label>
          <label>
            <input
              type="radio"
              name="siteRating"
              value="Fair"
              checked={formData.siteRating === 'Fair'}
              onChange={handleChange}
            />{' '}
            Fair
          </label>
          <label>
            <input
              type="radio"
              name="siteRating"
              value="Poor"
              checked={formData.siteRating === 'Poor'}
              onChange={handleChange}
            />{' '}
            Poor
          </label>
        </fieldset>

        <p>
          <label htmlFor="howDidYouHear">How did you hear about us?</label>
          <select
            id="howDidYouHear"
            name="howDidYouHear"
            value={formData.howDidYouHear}
            onChange={handleChange}
            required
          >
            <option value="">--Please choose an option--</option>
            <option value="Friend/Colleague">Friend/Colleague</option>
            <option value="Search Engine">Search Engine</option>
            <option value="Social Media">Social Media</option>
            <option value="Blog Post">Blog Post</option>
            <option value="Other">Other</option>
          </select>
        </p>

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
