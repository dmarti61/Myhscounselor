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

  // This function now creates a FormData object, which is easier to work with.
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

    // Honeypot check: If the bot-field is filled, it's a bot. Block the submission.
    if (formData['bot-field']) {
      console.log('Bot detected, submission blocked.');
      setSubmissionStatus('success'); // Still show success to the bot.
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

      {/* We're no longer relying on Netlify, so remove Netlify-specific attributes */}
      <form name="contact" onSubmit={handleSubmit} className="cloudflare-form">
        <input type="hidden" name="form-name" value="contact" />

        {/* Honeypot field */}
        <p style={{ display: 'none' }}>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" onChange={handleChange} value={formData['bot-field']} />
          </label>
        </p>

        {/* Required Fields */}
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
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </p>

        {/* Suggestions and Feedback (Required) */}
        <p>
          <label htmlFor="suggestionsFeedback">Suggestions and Feedback:</label>
          <textarea
            id="suggestionsFeedback"
            name="suggestionsFeedback"
            value={formData.suggestionsFeedback}
            onChange={handleChange}
            required
          ></textarea>
        </p>

        {/* NEW FIELD: How did you hear about us? (Optional) */}
        <p>
          <label htmlFor="howDidYouHear">How did you hear about us? (Optional)</label>
          <select
            id="howDidYouHear"
            name="howDidYouHear"
            value={formData.howDidYouHear}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="searchEngine">Search Engine (Google, Bing, etc.)</option>
            <option value="socialMedia">Social Media</option>
            <option value="friendFamily">Friend or Family</option>
            <option value="schoolCounselor">School Counselor</option>
            <option value="other">Other</option>
          </select>
        </p>

        {/* Rate this site (Optional) - Star Scale */}
        <fieldset>
          <legend>How Would You Rate This Site? (1-Poor, 5-Best):</legend>
          <p>
            <input
              type="radio"
              id="rating1"
              name="siteRating"
              value="1"
              checked={formData.siteRating === '1'}
              onChange={handleChange}
            />
            <label htmlFor="rating1">1 - Poor</label>
          </p>
          <p>
            <input
              type="radio"
              id="rating2"
              name="siteRating"
              value="2"
              checked={formData.siteRating === '2'}
              onChange={handleChange}
            />
            <label htmlFor="rating2">2</label>
          </p>
          <p>
            <input
              type="radio"
              id="rating3"
              name="siteRating"
              value="3"
              checked={formData.siteRating === '3'}
              onChange={handleChange}
            />
            <label htmlFor="rating3">3</label>
          </p>
          <p>
            <input
              type="radio"
              id="rating4"
              name="siteRating"
              value="4"
              checked={formData.siteRating === '4'}
              onChange={handleChange}
            />
            <label htmlFor="rating4">4</label>
          </p>
          <p>
            <input
              type="radio"
              id="rating5"
              name="siteRating"
              value="5"
              checked={formData.siteRating === '5'}
              onChange={handleChange}
            />
            <label htmlFor="rating5">5 - Best</label>
          </p>
        </fieldset>

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
