import React from 'react';
import { CAREER_MAP } from './careerMap';
import { CAREER_STATS } from './careerStats';
import ShareCard from './ShareCard';
import './resultPage.css';

const ResultPage = ({ personalityType }) => {
  const data = CAREER_MAP[personalityType];

  if (!data) {
    return <p>Oops! We couldn't find results for this type.</p>;
  }

  return (
    <div className="result-page">
      <h2>🎯 You're a {personalityType} — <em>{data.title}</em></h2>

      <section className="section-block">
        <h3>🧠 Your Strengths</h3>
        <ul>
          {data.strengths.map((trait, i) => (
            <li key={i}>{trait}</li>
          ))}
        </ul>
      </section>

      <section className="section-block">
        <h3>💼 Career Matches</h3>
        {data.careers.map((career, i) => {
          const stats = CAREER_STATS[career.blsCode];
          return (
            <div className="career-card" key={i}>
              <h4>{career.name}</h4>
              {stats ? (
                <>
                  <p>💰 <strong>Salary:</strong> {stats.salary}</p>
                  <p>📈 <strong>Outlook:</strong> {stats.outlook}</p>
                  <p>🎓 <strong>Education:</strong> {stats.education}</p>
                </>
              ) : (
                <p>Data coming soon...</p>
              )}
            </div>
          );
        })}
      </section>

      <section className="section-block">
        <h3>🚀 Your Roadmap</h3>
        <ol>
          {data.roadmap.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      <ShareCard
        type={personalityType}
        title={data.title}
        topCareer={data.careers[0]}
      />
    </div>
  );
};

export default ResultPage;
