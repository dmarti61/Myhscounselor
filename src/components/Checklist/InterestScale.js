// InterestScale.js
import React from 'react';

const InterestScale = ({ type }) => {
  const scaleTilt = {
    Builder: 'Trade-leaning',
    Planner: 'College-leaning',
    Connector: 'Balanced',
    Explorer: 'Exploratory tilt'
  };

  const tiltLabel = scaleTilt[type] || 'Balanced';

  return (
    <div className="interest-scale">
      <h4>Interest Tilt: {tiltLabel}</h4>
      <div className="scale-graphic">
        <div className={`scale-bar ${tiltLabel.toLowerCase().replace(' ', '-')}`}>
          <span>💼 Trade</span>
          <span>⚖️</span>
          <span>🎓 College</span>
        </div>
      </div>
      <p>
        Based on your responses, your interests tilt toward <strong>{tiltLabel}</strong>. This helps guide your next steps and resource choices.
      </p>
    </div>
  );
};

export default InterestScale;
