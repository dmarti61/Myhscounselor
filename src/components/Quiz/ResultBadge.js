import React, { useEffect, useState } from 'react';
import { CAREER_MAP } from './careermap';
//import { CAREER_STATS } from './careerstats';
//import ShareCard from './ShareCard';
import './resultBadge.css';

const ResultBadge = ({ type }) => {
  const [showFullNav, setShowFullNav] = useState(false);
  const data = CAREER_MAP[type];

  useEffect(() => {
    if (type) {
      localStorage.setItem('userType', type);
    }

    const unlockNav = localStorage.getItem('userType');
    setShowFullNav(!!unlockNav);
  }, [type]);

  if (!data) {
    return <p>Oops! We couldn't find results for this personality type.</p>;
  }

  return (
    <div className="result-badge" role="region">
      <h2 tabIndex="0">🎯 You're a {type} — <em>{data.title}</em></h2>

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

      <p className="disclaimer">
        Career data is based on information from the U.S. Bureau of Labor Statistics. Current as of June 2025. This site is not affiliated with BLS.
      </p>

      <ShareCard
        type={type}
        title={data.title}
        topCareer={data.careers[0]}
      />
    </div>
  );
};

export default ResultBadge;
