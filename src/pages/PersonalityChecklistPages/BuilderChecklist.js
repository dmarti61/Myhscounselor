// BuilderChecklist.js
import React from 'react';
import TradeVsCollegeTable from '../../components/Checklist/TradeVsCollegeTable';
import InterestScale from '../../components/Checklist/InterestScale';
import StillNotSureButton from '../../components/Checklist/StillNotSureButton';

const BuilderChecklist = () => {
  return (
    <div className="checklist-page">
      <h2>🛠️ Builder Path</h2>
      <p>
        You thrive by doing—tactile work, hands-on learning, real results. You prefer action over abstract discussion.
        Careers that build, repair, shape, and install speak to your strengths.
      </p>

      <ul className="checklist">
        <li>✅ Explore skilled trade certifications near you</li>
        <li>✅ Review community colleges with dual enrollment options</li>
        <li>✅ Identify career centers or apprenticeships in your zip code</li>
        <li>✅ Download our “Launch Kit: Trade Careers” PDF</li>
        <li>✅ Compare timeline vs cost between trade vs college</li>
      </ul>

      <h3>🔄 Compare Paths</h3>
      <TradeVsCollegeTable type="Builder" />
      <InterestScale type="Builder" />
      <StillNotSureButton />
    </div>
  );
};

export default BuilderChecklist;
