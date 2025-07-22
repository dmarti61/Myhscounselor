import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    // Dynamically load the JotForm embed script
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-252018497652058']",
          "https://form.jotform.com/"
        );
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="contact-page">
      <h1>📬 Contact & Feedback</h1>
      <p>
        We’re building this for you—and we want to hear what’s working, what’s
        missing, and what you’d love to see next.
      </p>
      <script type="text/javascript" src="https://form.jotform.com/jsform/252018497652058"></script>
      <div className="contact-options"></div>
    </section>
  );
};

export default Contact;
