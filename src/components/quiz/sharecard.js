import React from 'react';
import { exportResultsAsPDF } from '../../utils/exportpdf';
import '../../styles/sharecard.css';

const ShareCard = ({ 
  type,              // MBTI type string, e.g. "INTJ"
  title,             // MBTI title, e.g. "The Architect"
  topCareer,         // Career object: { name, pathway }
  preference = null, // Optional: user's path preference, e.g. "College", "Trade School"
  preferenceDesc = ''// Optional: description of the preferred path
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
        Top career match: <strong>{topCareer.name}</strong> 
        {topCareer.pathway && (
          <> <span className="pathway">({topCareer.pathway})</span></>
        )}
      </p>

      {preference && (
        <div className="preference-summary">
          <p>
            <strong>Recommended Path:</strong> {preference}
          </p>
          {preferenceDesc && <p><em>{preferenceDesc}</em></p>}
        </div>
      )}

      <button onClick={handleDownload}>
        Download Summary as PDF
      </button>
    </div>
  );
};

export default ShareCard;
