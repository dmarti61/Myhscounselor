// OnboardingOverlay.js
import React from 'react';
import '../styles/OnboardingOverlay.css'; // Optional for styling tweaks

const OnboardingOverlay = () => (
  <div className="onboarding-overlay" role="dialog" aria-labelledby="onboarding-title" aria-describedby="onboarding-desc">
    <div className="overlay-content">
      <h2 id="onboarding-title" tabIndex="0">🧭 Not Sure What Path to Take?</h2>
      <div id="onboarding-desc">
        <p>
          Whether you're thinking about college, trade school, or something in between—
          this quiz helps you discover your strengths and match them to real options.
        </p>
        <p>
          Answer 12 quick questions to find your personality type and get a personalized checklist
          with timelines, resources, and next steps.
        </p>
      </div>
    </div>
  </div>
);

export default OnboardingOverlay;
