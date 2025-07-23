import React from 'react';
import { exportResultsAsPDF } from '../../utils/exportpdf';
import '../../styles/sharecard.css';

const ShareCard = ({ 
  type,           // MBTI type string, e.g. "INTJ"
  title,          // MBTI title, e.g. "The Architect"
  topCareer,      // Career object { name, pathway }
  preference = null,     // Optional: user's preference result, e.g. "College", "Trade School", "Direct Entry"
  preferenceDesc = '',   // Optional: short description of the preference path
}) => {

  const handleDownload = () => {
    exportResultsAsPDF({
      type,
      title,
      career: topCareer,
      preference,
      preferenceDesc,
    });
  };

  return (
    <div className="share-card" role="region" aria-label="Share your quiz results">
      <h3>🔗 Share Your Results</h3>

      <div className="badge-display">
        <strong>{type}</strong> — <em>{title}</em>
      </div>

      <p>
        Top career match: <strong>{topCareer.name}</strong> <span className="pathway">({topCareer.pathway})</span>
      </p>

      {preference && (
        <p>
          Recommended Path: <strong>{preference}</strong><br />
          <em>{preferenceDesc}</em>
        </p>
      )}

      <button onClick={handleDownload}>
        Download Summary as PDF
      </button>
    </div>
  );
};

export default ShareCard;
