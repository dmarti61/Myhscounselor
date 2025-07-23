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

      <button onClick={handleDownload}>
        Download Summary as PDF
      </button>
    </div>
  );
};

export default ShareCard;
