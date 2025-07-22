import React from 'react';

const Careers = () => {
  return (
    <section className="direct-entry-careers">
      <h1>Careers You Can Start Without a College Degree</h1>
      <p>
        You don’t need a diploma to build a strong future. These careers are open to you—with determination, skills, and a smart game plan.
      </p>

      <div className="career-section">
        <h2>🚚 Delivery & Logistics</h2>
        <ul>
          <li>Start as: Package driver or warehouse associate</li>
          <li>Skills: Time management, basic tech, customer service</li>
          <li>Certs: CDL (for driving), forklift training (optional)</li>
          <li>Explore: UPS, Amazon, FedEx career portals</li>
        </ul>
      </div>

      <div className="career-section">
        <h2>🔧 Skilled Trades (Entry-Level)</h2>
        <ul>
          <li>Start as: Helper or apprentice in plumbing, welding, HVAC</li>
          <li>Skills: Reliability, tool handling, problem-solving</li>
          <li>Certs: Usually earned <em>on the job</em> or through trade programs</li>
          <li>Explore: Local apprenticeships or workforce centers</li>
        </ul>
      </div>

      <div className="career-section">
        <h2>💻 Tech & Freelance Paths</h2>
        <ul>
          <li>Start as: Freelance web designer, social media manager</li>
          <li>Skills: Creativity, basic software fluency, client communication</li>
          <li>Training: Free courses from Coursera, YouTube, Skillshare</li>
          <li>Explore: Fiverr, Upwork, local coding bootcamps</li>
        </ul>
      </div>
    </section>
  );
};

export default Careers;
