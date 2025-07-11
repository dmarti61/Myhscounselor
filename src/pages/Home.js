// Home.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingOverlay from '../components/OnboardingOverlay';
import StartButton from '../components/StartButton';

const Home = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowOnboarding(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleStart = () => {
    navigate('/quiz');
  };

  return (
    <div className="home">
      {showOnboarding && <OnboardingOverlay />}
      <h1>🎓 Welcome to My HS Counselor</h1>
      <p>
      You don’t have to figure out your future alone.
      Whether you’re thinking about college, trade school, or just exploring your options,
      this platform is designed to guide you—step by step, decision by decision.
    </p></br>
    <p>
      Answer a few quick questions, and we’ll help you discover your strengths, interests,
      and next steps toward a career path that fits who you are.
    </p>
      <StartButton onClick={handleStart} />
    </div>
  );
};

export default Home;
