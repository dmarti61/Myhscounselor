// OnboardingOverlay.js
import React from 'react';
import '../styles/global.css'; // Uses shared styles

const OnboardingOverlay = () => {
  return (
    <div className="onboarding-overlay">
      <div className="overlay-content">
        <h2>🎓 Ready to Discover Your Path?</h2>
        <p>
          This quick quiz helps reveal your personality fit—so you can choose
          a future with clarity, not pressure. It takes less than 2 minutes.
        </p>
        <p><strong>Your journey begins here.</strong></p>
      </div>
    </div>
  );
};

export default OnboardingOverlay;
