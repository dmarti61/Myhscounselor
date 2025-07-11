// ResultBadge.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResultBadge = ({ type }) => {
  const navigate = useNavigate();

  const handleNextSteps = () => {
    navigate(`/next-steps/${type.toLowerCase()}`);
  };

  const badgeMap = {
    Builder: '🛠️ Builder',
    Planner: '📋 Planner',
    Connector: '🤝 Connector',
    Explorer: '🧭 Explorer'
  };

  return (
    <div className="result-badge">
      <h2>Your Personality Type:</h2>
      <div className="badge">{badgeMap[type]}</div>
      <p>
        Based on your answers, you lean toward the <strong>{type}</strong> path.
        Let’s explore careers, timelines, and resources that match your style.
      </p>
      <button className="next-steps-btn" onClick={handleNextSteps}>
        📘 View Your Next Steps
      </button>
    </div>
  );
};

export default ResultBadge;
