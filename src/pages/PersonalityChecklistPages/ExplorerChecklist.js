// ExplorerChecklist.js
import React from 'react';
import TradeVsCollegeTable from '../../components/Checklist/TradeVsCollegeTable';
import InterestScale from '../../components/Checklist/InterestScale';
import StillNotSureButton from '../../components/Checklist/StillNotSureButton';

const ExplorerChecklist = () => {
  return (
    <div className="checklist-page">
      <h2>🧭 Explorer Path</h2>
      <p>
        You’re a discoverer. You learn by trying, pivoting, and following your curiosity.
        You thrive in environments that offer freedom, variety, and room to grow.
        Careers that allow exploration, creativity, and adaptability are a great fit.
      </p>

      <ul className="checklist">
        <li>✅ Explore gap year programs or travel-based learning options</li>
        <li>✅ Research interdisciplinary majors or flexible trade programs</li>
        <li>✅ Try short-term certifications to test interests</li>
        <li>✅ Download our “Explorer Launch Kit” PDF</li>
        <li>✅ Compare trade vs college paths with flexibility in mind</li>
      </ul>

      <h3>🔄 Compare Paths</h3>
      <TradeVsCollegeTable type="Explorer" />
      <InterestScale type="Explorer" />
      <StillNotSureButton />
    </div>
  );
};

export default ExplorerChecklist;
