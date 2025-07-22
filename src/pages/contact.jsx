import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    // Dynamically load the JotForm embed script
    const script = document.createElement('script');
    script.src = 'https://form.jotform.com/jsform/252018497652058';
    script.async = true;
    document.getElementById('jotform-container').appendChild(script);

    return () => {
      // Clean up the script if the component unmounts
      const container = document.getElementById('jotform-container');
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <section className="contact-page">
      <h1>📬 Contact & Feedback</h1>
      <p>
        We’re building this for you—and we want to hear what’s working, what’s
        missing, and what you’d love to see next.
      </p>
      <div id="jotform-container" />
    </section>
  );
};

export default Contact;
