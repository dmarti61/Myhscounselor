// Home.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingOverlay from '../components/OnboardingOverlay';
import StartButton from '../components/StartButton';
import '../styles/global.css'; // Optional: ensure responsive styles apply

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
    <main className="home" role="main">
      {showOnboarding && <OnboardingOverlay />}
      <h1 tabIndex="0" aria-label="Welcome to My High School Counselor">🎓 Welcome to My HS Counselor</h1>
      <p>
        You don’t have to figure out your future alone.
        Whether you’re thinking about college, trade school, or just exploring your options,
        this platform is designed to guide you—step by step, decision by decision.
      </p>
      <p>
        Answer a few quick questions, and we’ll help you discover your strengths, interests,
        and next steps toward a career path that fits who you are.
      </p>
      <StartButton onClick={handleStart} ariaLabel="Start quiz and discover your strengths" />
    </main>
  );
};

export default Home;
