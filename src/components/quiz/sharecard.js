// ShareCard.js
import React from 'react';
import { exportResultsAsPDF } from '../../utils/exportpdf';
import '../../styles/sharecard.css';

const ShareCard = ({ type, title, topCareer }) => {
  const badgeMap = {
    Planner: '🗂️',
    Builder: '🧱',
    Connector: '🤝',
    Explorer: '🌍',
  };

  const handleDownload = () => {
    exportResultsAsPDF({
      type,
      title,
      career: topCareer
    });
  };

  return (
    <div className="share-card" role="region" aria-label="Share your quiz results">
      <h3>🔗 Share Your Results</h3>

      <div className="badge-display">
        <span className="badge-icon" aria-hidden="true">
          {badgeMap[type] || '📘'}
        </span>
        <strong>{type}</strong> — <em>{title}</em>
      </div>

      <p>Top career match: <strong>{topCareer.name}</strong></p>

      <button onClick={handleDownload}>
        Download Summary as PDF
      </button>
    </div>
  );
};

export default ShareCard;
