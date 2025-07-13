// src/pages/personalitychecklistpages/plannerchecklist.jsx
import React from 'react';
import TradeVsCollegeTable from '../../components/checklist/tradevscollegetable';
import InterestScale from '../../components/checklist/interestscale';
import StillNotSureButton from '../../components/checklist/stillnotsurebutton';

const PlannerChecklist = () => {
  return (
    <main className="checklist-page" role="main">
      <h2>🗂️ Planner Path</h2>
      <p>
        You’re organized, detail-oriented, and love turning ideas into action. You thrive on planning, structure, and follow-through.
        Careers in business, logistics, project management, and accounting suit your mindset.
      </p>

      <ul className="checklist">
        <li>✅ Research associate or transfer degrees in business or management</li>
        <li>✅ Learn about programs in finance, supply chain, or HR</li>
        <li>✅ Create a budget and timeline for your top 2 career options</li>
        <li>✅ Explore certificates in office tech, Excel, or digital marketing</li>
        <li>✅ Compare ROI between college vs certification for these fields</li>
      </ul>

      <h3>🔄 Compare Paths</h3>
      <TradeVsCollegeTable type="Planner" />
      <InterestScale type="Planner" />
      <StillNotSureButton />
    </main>
  );
};

export default PlannerChecklist;
