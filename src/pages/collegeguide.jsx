import React from 'react';
import '../styles/collegeGuide.css';

const CollegeGuide = () => (
  <div className="college-guide-container">
    <h2>🎓 How to Apply to College (U.S.)</h2>

    <p className="intro">
      Applying to college can feel overwhelming — but we’ve got you! Here’s a clear path with resources,
      checklists, and tips for every step of the journey.
    </p>

    <h3>Junior Year</h3>
    <ul>
      <li>Research colleges that interest you</li>
      <li>Take SAT/ACT prep courses or practice exams</li>
      <li>Attend virtual or in-person college fairs</li>
      <li>Start a résumé / brag sheet for your activities</li>
      <li>Ask teachers early about letters of recommendation</li>
    </ul>

    <h3>Senior Year</h3>
    <ul>
      <li>Create a Common App or Coalition App account</li>
      <li>Finalize your college list (safeties, targets, reaches)</li>
      <li>Write and edit your personal statement &amp; supplemental essays</li>
      <li>Complete FAFSA and scholarship applications (ASAP!)</li>
      <li>Submit your apps before deadlines (watch ED/EA dates)</li>
    </ul>

    <h3>🛠️ Tools & Resources</h3>
    <ul>
      <li><a href="https://www.commonapp.org" target="_blank" rel="noopener noreferrer">Common App</a> — apply to 1,000+ colleges</li>
      <li><a href="https://www.fafsa.gov" target="_blank" rel="noopener noreferrer">FAFSA</a> — apply for federal aid</li>
      <li><a href="https://www.fastweb.com" target="_blank" rel="noopener noreferrer">Fastweb</a> — search scholarships</li>
      <li><a href="https://www.collegeboard.org" target="_blank" rel="noopener noreferrer">College Board</a> — SAT resources</li>
      <li><a href="https://www.applytexas.org" target="_blank" rel="noopener noreferrer">ApplyTexas</a> — Texas state schools</li>
    </ul>

    <h3>✍️ Essay Pro Tips</h3>
    <ul>
      <li>Start early — don’t wait until the night before</li>
      <li>Be honest and authentic; your voice matters</li>
      <li>Avoid clichés and generic statements</li>
      <li>Have a teacher or counselor review your drafts</li>
      <li>Use specific stories to show — not just tell</li>
    </ul>

    <blockquote className="quote-block">
      “The future belongs to those who prepare for it today.” — Malcolm X
    </blockquote>
  </div>
);

export default CollegeGuide;
