import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingOverlay from '../components/onboardingoverlay';
import '../styles/global.css';
import Navbar from '../components/navbar';

const Home = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [hasResult, setHasResult] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowOnboarding(true);
      localStorage.setItem('hasVisited', 'true');
    }

    const stored = localStorage.getItem('mbti_result');
    if (stored) {
      const parsed = JSON.parse(stored);
      const now = new Date().getTime();
      if (parsed.expires && parsed.expires > now) {
        setHasResult(true);
      } else {
        localStorage.removeItem('mbti_result');
      }
    }
  }, []);

  const handleStartQuiz = () => navigate('/quiz');
  const handleViewResults = () => navigate('/results');
  const handleExploreCareers = () => navigate('/explore-careers');

  return (
  <>
  <Navbar />
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

      <div className="button-group">
        <button onClick={handleStartQuiz} className="primary-btn">🚀 Start Your Journey</button>

        {hasResult && (
          <button onClick={handleViewResults} className="secondary-btn">✅ View My Results</button>
        )}

        <button onClick={handleExploreCareers} className="secondary-btn">✅ Explore Careers</button>
      </div>
    </main>
   </>
  );
};

export default Home;
