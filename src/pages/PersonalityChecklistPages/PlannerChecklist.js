// PlannerChecklist.js
import React from 'react';
import TradeVsCollegeTable from '../Checklist/TradeVsCollegeTable';
import InterestScale from '../Checklist/InterestScale';
import StillNotSureButton from '../Checklist/StillNotSureButton';

const PlannerChecklist = () => {
  return (
    <div className="checklist-page">
      <h2>📋 Planner Path</h2>
      <p>
        You’re a strategist. You think ahead, value preparation, and excel when you have a goal and a roadmap to get there.
        Careers that involve organizing, analyzing, and leading projects play to your strengths.
      </p>

      <ul className="checklist">
        <li>✅ Explore college programs aligned with your interests</li>
        <li>✅ Create a multi-year high school course plan</li>
        <li>✅ Review career guides and growth projections</li>
        <li>✅ Look into dual credit, AP, or IB options</li>
        <li>✅ Download our “College Planning Toolkit” PDF</li>
      </ul>

      <h3>🔄 Compare Paths</h3>
      <TradeVsCollegeTable type="Planner" />
      <InterestScale type="Planner" />
      <StillNotSureButton />
    </div>
  );
};

export default PlannerChecklist;
