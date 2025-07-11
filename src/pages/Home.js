// Home.js
import React, { useEffect, useState } from 'react';
import OnboardingOverlay from '../components/OnboardingOverlay';
import StartButton from '../components/StartButton';

const Home = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowOnboarding(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleStart = () => {
    // Add logic to route to quiz page or unlock nav
    console.log('Start journey triggered');
  };

  return (
    <div className="home">
      {showOnboarding && <OnboardingOverlay />}
      <h1>Welcome to My HS Counselor</h1>
      <p>Your personalized roadmap starts here.</p>
      <StartButton onClick={handleStart} />
    </div>
  );
};

export default Home;
