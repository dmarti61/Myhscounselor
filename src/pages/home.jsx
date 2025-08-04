import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

const Home = () => {
  const [hasResult, setHasResult] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      localStorage.setItem('hasVisited', 'true');
    }

    const stored = localStorage.getItem('mbti_result');
    if (stored) {
      const parsed = JSON.parse(stored);
      const now = new Date().getTime();
      // Ensure 'expires' property exists before comparing
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
    <main className="home" role="main">
      <h1 tabIndex="0" aria-label="Welcome to My High School Counselor">🎓 My HS Counselor</h1>

      <p>
        **Ready to map out your future?** You don't have to navigate it alone. Whether you're aiming for college, exploring trade school, or still considering your options, we're here to guide you every step of the way.
      </p>

      <p>
        Discover your unique strengths and interests! Our quick 24-question assessment reveals your personality type and preferences, helping you pinpoint the best next steps toward a career path that truly fits you.
      </p>

      <div className="button-group">
        <button onClick={handleStartQuiz} className="primary-btn">🚀 Start Your Journey</button>

        {hasResult && (
          <button onClick={handleViewResults} className="secondary-btn">✅ View My Results</button>
        )}

        <button onClick={handleExploreCareers} className="secondary-btn">✅ Explore Careers</button>
      </div>
    </main>
  );
};

export default Home;
