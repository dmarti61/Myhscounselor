// src/pages/personalitychecklistpages/explorerchecklist.jsx
import React from 'react';
import TradeVsCollegeTable from '../../components/checklist/tradevscollegetable';
import InterestScale from '../../components/checklist/interestscale';
import StillNotSureButton from '../../components/checklist/stillnotsurebutton';

const ExplorerChecklist = () => {
  return (
    <main className="checklist-page" role="main">
      <h2>🧭 Explorer Path</h2>
      <p>
        You’re curious and creative—drawn to variety, challenge, and innovation.
        Careers in technology, design, marketing, or entrepreneurship let you explore and adapt.
      </p>

      <ul className="checklist">
        <li>✅ Research certifications or associate degrees in coding, design, or marketing</li>
        <li>✅ Identify programs that allow flexible or online learning</li>
        <li>✅ Interview or shadow people in your areas of interest</li>
        <li>✅ Explore freelancing, internships, or personal projects to build skills</li>
        <li>✅ Compare college vs bootcamp vs self-teaching for your field</li>
      </ul>

      <h3>🔄 Compare Paths</h3>
      <TradeVsCollegeTable type="Explorer" />
      <InterestScale type="Explorer" />
      <StillNotSureButton />
    </main>
  );
};

export default ExplorerChecklist;
