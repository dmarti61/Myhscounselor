import React from 'react';

const About = () => {
  return (
    <section className="about-page">
      <h1>🎓 Why Create MyHSCounselor.com</h1>
      <p>
        Getting through high school is hard enough—but what comes after can feel like a mystery. 
        MyHSCounselor.com offers clear, step-by-step guidance for students who need direction after graduation.
      </p>
      <p>
        Too often, support ends at the diploma. This platform is here to bridge that gap and help students confidently take their next steps.
      </p>

      <div className="about-section">
        <h2>👥 Who It's For</h2>
        <ul>
          <li>High school students unsure of what comes next</li>
          <li>Counselors looking for tools to better support their students</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>🧠 What Makes It Different</h2>
        <ul>
          <li>Personalized guidance based on a personality quiz</li>
          <li>Step-by-step action plans tailored to each student</li>
          <li>Focus on real-world readiness—not just college prep</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
