import React from 'react';

const TalkTemplates = () => {
  return (
    <section className="talk-templates">
      <h1>🗣️ Templates for Asking for Recommendations or References</h1>
      <p>
        Not sure how to ask for a reference or recommendation? Use these templates to help you start the conversation—whether you're applying to college, trade school, or your first job.
      </p>

      <div className="template-section">
        <h2>🎓 College Recommendation</h2>
        <p>
          <strong>Hi [Teacher/Counselor Name],</strong><br />
          I hope you're doing well! I'm applying to [College Name] and I was wondering if you'd be willing to write me a recommendation letter. Your class really helped me grow, and I think your perspective would mean a lot. I’d be happy to share more details if you need them. Thank you so much for considering!
        </p>
      </div>

      <div className="template-section">
        <h2>🔧 Trade School Reference</h2>
        <p>
          <strong>Hi [Mentor/Instructor Name],</strong><br />
          I’m planning to apply to [Trade School Name] to study [Field], and I’d really appreciate a reference from you. Working with you gave me a lot of confidence in this path, and I think your insight would help my application stand out. Let me know if you need any info from me!
        </p>
      </div>

      <div className="template-section">
        <h2>💼 Job Reference</h2>
        <p>
          <strong>Hi [Supervisor/Coach Name],</strong><br />
          I’m applying for a job at [Company Name] and I was wondering if you’d be comfortable serving as a reference. I really valued our time working together and I think you could speak to my strengths. I’d be happy to provide any details you need. Thanks again!
        </p>
      </div>
    </section>
  );
};

export default TalkTemplates;
