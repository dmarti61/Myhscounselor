// src/pages/personalitychecklistpages/connectorchecklist.jsx
import React from 'react';
import TradeVsCollegeTable from '../../components/checklist/tradevscollegetable';
import InterestScale from '../../components/checklist/interestscale';
import StillNotSureButton from '../../components/checklist/stillnotsurebutton';

const ConnectorChecklist = () => {
  return (
    <div className="checklist-page">
      <h2>🤝 Connector Path</h2>
      <p>
        You’re a communicator. You build bridges, foster relationships, and thrive when helping others succeed.
        Careers in education, healthcare, hospitality, and social services align with your strengths.
      </p>

      <ul className="checklist">
        <li>✅ Explore people-facing careers like nursing, teaching, or counseling</li>
        <li>✅ Look into community college programs with strong internship support</li>
        <li>✅ Volunteer or job shadow in service-based roles</li>
        <li>✅ Download our “Helping Careers Launch Kit” PDF</li>
        <li>✅ Compare trade vs college paths for people-centered professions</li>
      </ul>

      <h3>🔄 Compare Paths</h3>
      <TradeVsCollegeTable type="Connector" />
      <InterestScale type="Connector" />
      <StillNotSureButton />
    </div>
  );
};

export default ConnectorChecklist;
