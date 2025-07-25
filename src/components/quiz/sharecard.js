import React from 'react';
import { exportResultsAsPDF } from '../../utils/exportpdf';
import '../../styles/sharecard.css';

const ShareCard = ({
  type,              // MBTI type string, e.g. "INTJ"
  title,             // MBTI title, e.g. "The Architect" (from ResultBadge, but not directly used in PDF export)
  topCareer,         // Career object: { name, pathway } (passed to PDF, though PDF uses MBTI_MAP careers)
  preference = null, // Optional: user's path preference, e.g. "College", "Trade School"
  preferenceDesc = ''// Optional: description of the preferred path (not currently used in PDF export)
}) => {
  const handleDownload = () => {
    // The exportResultsAsPDF function only needs 'type' and 'preference'
    // to generate the correct PDF content based on MBTI_MAP and CAREER_STATS.
    exportResultsAsPDF({
      type,
      preference,
    });
  };

  return (
    <div className="share-card" role="region" aria-label="Share your quiz results">
      <h3>🚀 Your Personalized Career Packet Awaits!</h3>
      <p>Download your full results, strengths, and a custom guide to your next step.</p>
      <button onClick={handleDownload} className="share-card-button">
        Download My Career Packet
      </button>
      <p className="share-card-message">Share your unique journey with friends!</p>
    </div>
  );
};

export default ShareCard;
