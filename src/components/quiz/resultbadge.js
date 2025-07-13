import React from 'react';
import { CAREER_MAP } from './careermap'; // Your existing career map keyed by bucketType
import '../../styles/resultbadge.css';

const ResultBadge = ({ type, mbti }) => {
  const data = CAREER_MAP[type];

  if (!data) {
    return <p>Oops! No results found for this personality type.</p>;
  }

  return (
    <div className="result-badge" role="region">
      <h2 tabIndex="0">
        🎯 You're a {type} — <em>{data.title}</em>
      </h2>
      <p>
        <strong>MBTI Type:</strong> {mbti}
      </p>

      <section className="section-block" aria-labelledby="strengths-heading">
        <h3 id="strengths-heading">🧠 Your Strengths</h3>
        <ul>
          {data.strengths.map((trait, i) => (
            <li key={i} aria-label={`Strength ${i + 1}: ${trait}`}>
              {trait}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-block" aria-labelledby="careers-heading">
        <h3 id="careers-heading">💼 Career Matches</h3>
        {data.careers.map((career) => (
          <div key={career.name} className="career-card">
            <h4>{career.name}</h4>
            <p>💰 <strong>Salary:</strong> {career.salary || 'Data coming soon...'}</p>
            <p>📈 <strong>Outlook:</strong> {career.outlook || 'Data coming soon...'}</p>
            <p>🎓 <strong>Education:</strong> {career.education || 'Data coming soon...'}</p>
          </div>
        ))}
      </section>

      <section className="section-block" aria-labelledby="roadmap-heading">
        <h3 id="roadmap-heading">🚀 Your Roadmap</h3>
        <ol>
          {data.roadmap.map((step, i) => (
            <li key={i} aria-label={`Step ${i + 1}: ${step}`}>
              {step}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default ResultBadge;
