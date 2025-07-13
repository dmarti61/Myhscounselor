// src/pages/personalitychecklistpages/builderchecklist.jsx
import React from 'react';
import TradeVsCollegeTable from '../../components/checklist/tradevscollegetable';
import InterestScale from '../../components/checklist/interestscale';
import StillNotSureButton from '../../components/checklist/stillnotsurebutton';

const BuilderChecklist = () => {
  return (
    <main className="checklist-page" role="main">
      <h2>🛠️ Builder Path</h2>
      <p>
        You thrive by doing—tactile work, hands-on learning, real results. You prefer action over abstract discussion.
        Careers that build, repair, shape, and install speak to your strengths.
      </p>

      <section>
        <ul className="checklist">
          <li>✅ Explore skilled trade certifications near you</li>
          <li>✅ Review community colleges with dual enrollment options</li>
          <li>✅ Identify career centers or apprenticeships in your zip code</li>
          <li>
            ✅ <a href="#" target="_blank" rel="noopener noreferrer">Download our “Launch Kit: Trade Careers” PDF</a>
          </li>
          <li>✅ Compare timeline vs cost between trade vs college</li>
        </ul>
      </section>

      <section>
        <h3>🔄 Compare Paths</h3>
        <TradeVsCollegeTable type="Builder" />
        <InterestScale type="Builder" />
      </section>

      <StillNotSureButton />
    </main>
  );
};

export default BuilderChecklist;
