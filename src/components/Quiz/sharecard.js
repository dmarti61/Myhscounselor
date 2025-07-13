// ShareCard.js
import React from 'react';
import jsPDF from 'jspdf';
import '../../styles/global.css';

const ShareCard = ({ type, title, topCareer }) => {
  const badgeMap = {
    Planner: '🗂️',
    Builder: '🧱',
    Connector: '🤝',
    Explorer: '🌍',
  };

  const createPDF = () => {
    const doc = new jsPDF();
    const text = `
      MyHSCounselor Quiz Results

      Personality Type: ${type} — ${title}
      Top Career Match: ${topCareer.name}

      Career Snapshot:
      - Salary: ${topCareer.salary || 'N/A'}
      - Outlook: ${topCareer.outlook || 'N/A'}
      - Education: ${topCareer.education || 'N/A'}
    `;

    doc.text(text, 10, 10);
    doc.save(`${type}_Quiz_Results.pdf`);
  };

  return (
    <div className="share-card">
      <h3>🔗 Share Your Results</h3>
      <div className="badge-display" aria-label={`Badge for ${type}`}>
        <span className="badge-icon">{badgeMap[type]}</span>
        <strong>{type}</strong> — <em>{title}</em>
      </div>
      <p>Top career match: <strong>{topCareer.name}</strong></p>

      <button onClick={createPDF}>
        Download Summary as PDF
      </button>
    </div>
  );
};

export default ShareCard;
