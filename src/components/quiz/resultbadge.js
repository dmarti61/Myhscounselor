import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MBTI_MAP } from './mbtimap';
import ShareCard from './sharecard';
import '../../styles/resultbadge.css';

const ResultBadge = ({ mbtiType: propType }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [data, setData] = useState(null);
  const [finalStep, setFinalStep] = useState('');

  let mbtiType = propType || location.state?.mbtiType;
  const preferences = location.state?.preferences;

  if (!mbtiType) {
    const stored = localStorage.getItem('mbti_result');
    if (stored) {
      const parsed = JSON.parse(stored);
      const now = new Date().getTime();
      if (parsed.expires && parsed.expires > now) {
        mbtiType = parsed.type;
      } else {
        localStorage.removeItem('mbti_result');
      }
    }
  }

  useEffect(() => {
    const key = (mbtiType || '').toUpperCase();
    const found = MBTI_MAP[key];
    if (found) {
      setData(found);

      // Combine personality + preferences to suggest a path
      const path = determinePathway(found, preferences);
      setFinalStep(path);
    } else {
      setError('Oops, your personality type doesn’t exist');
    }
  }, [mbtiType, preferences]);

  const determinePathway = (personality, prefs) => {
    if (!prefs) return personality.recommendedNextStep;

    const { pathPreference, learningStyle, workEnvironment } = prefs;

    if (pathPreference === 'college') {
      return '🎓 College or university would be a strong fit based on your goals and learning preferences.';
    }

    if (pathPreference === 'trade' || learningStyle === 'hands-on' || workEnvironment === 'manual') {
      return '🔧 A trade school or apprenticeship might match your hands-on strengths.';
    }

    if (pathPreference === 'job' || learningStyle === 'independent') {
      return '💼 You could succeed by entering the workforce directly and learning on the job.';
    }

    if (pathPreference === 'community') {
      return '🏫 A two-year community college is a great starting point that can lead anywhere.';
    }

    // Fallback
    return personality.recommendedNextStep;
  };

  const handleRetake = () => {
    localStorage.removeItem('mbti_result');
    navigate('/');
  };

  if (error) return <p className="error">{error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div className="result-badge">
      <h2>{mbtiType.toUpperCase()}</h2>

      <h4>Strengths</h4>
      <ul>
        {data.strengths.map(s => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <h4>Suggested Careers</h4>
      <ul>
        {data.careers.map(c => (
          <li key={c.name}>
            {c.name} <span className="pathway">({c.pathway})</span>
          </li>
        ))}
      </ul>

      <h4>Next Recommended Step</h4>
      <p className="next-step">{finalStep}</p>

      <ShareCard
        type={mbtiType.toUpperCase()}
        title={mbtiType.toUpperCase()}
        topCareer={data.careers[0]}
      />

      <button className="retake-btn" onClick={handleRetake}>
        🔁 Retake the Quiz
      </button>
    </div>
  );
};

export default ResultBadge;
