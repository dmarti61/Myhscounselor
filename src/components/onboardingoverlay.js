// OnboardingOverlay.js
import React from 'react';
import '../styles/global.css'; // Optional for styling tweaks

const OnboardingOverlay = () => (
  <div className="onboarding-overlay" role="dialog" aria-labelledby="onboarding-title" aria-describedby="onboarding-desc">
    <div className="overlay-content">
      <h2 id="onboarding-title" tabIndex="0">Hey there, future leader!</h2>
      <div id="onboarding-desc">
        <p>
          Welcome! It's awesome to have you here. Thinking about what comes after high school can feel like a big puzzle, right? Whether you're picturing college, diving into a trade, or just exploring all your options, this is the place to figure out what truly sparks your interest and how it connects to real opportunities out in the world.
        </p>
        <p>
          Ready to unlock your potential? Take a quick 20-question assessment to discover your unique personality and what really makes you tick. After that, you'll get a personalized roadmap—complete with timelines, helpful resources, and clear next steps—to guide you toward a path that's perfect for *you*.
        </p>
      </div>
    </div>
  </div>
);

export default OnboardingOverlay;
