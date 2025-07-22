// Onboarding.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/quiz');
  };

  return (
    <div className="onboarding-overlay">
      <div className="overlay-content">
        <h2>🧭 Not Sure What Path to Take?</h2>
        <p>
          Whether you're thinking about college, trade school, or something in between—
          this quiz helps you discover your strengths and match them to real options.
        </p>
        <p>
          Answer 20 quick questions to find your personality type and get a personalized checklist
          with timelines, resources, and next steps.
        </p>
        <button className="start-btn" onClick={handleStart}>
          🚀 Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
