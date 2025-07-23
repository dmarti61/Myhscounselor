import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MBTI_MAP } from './mbtimap'; // This path is correct for ResultBadge.js
import ShareCard from './sharecard';
import '../../styles/resultbadge.css';

const ResultBadge = ({ mbtiType: propType, preferenceResult: propPreference }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  let mbtiType = propType || location.state?.mbtiType;
  let preferenceResult = propPreference || location.state?.preferenceResult;

  // Try to recover MBTI from localStorage if not passed via props or state
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
      let careers = [...found.careers];

      if (preferenceResult) {
        const filtered = careers.filter(c =>
          c.pathway.toLowerCase() === preferenceResult.toLowerCase()
        );

        // Use filtered if available, otherwise fallback to all
        careers = filtered.length > 0 ? filtered : careers;
      }

      setData({
        ...found,
        filteredCareers: careers,
      });
    } else {
      setError('Oops, your personality type doesn’t exist');
    }
  }, [mbtiType, preferenceResult]);

  const handleRetake = () => {
    localStorage.removeItem('mbti_result');
    navigate('/');
  };

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="result-badge">
      <h2>{mbtiType.toUpperCase()}</h2>

      <h4>Strengths</h4>
      <ul>
        {data.strengths.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <h4>Suggested Careers</h4>
      <ul>
        {data.filteredCareers.map((c) => (
          <li key={c.name}>
            {c.name} <span className="pathway">({c.pathway})</span>
          </li>
        ))}
      </ul>

      <h4>Next Recommended Step</h4>
      <p className="next-step">{data.recommendedNextStep}</p>

      {/* NEW SECTION: Relevant College Majors (Conditional Display) */}
      {data.recommendedNextStep === 'College' && data.relevantMajors && data.relevantMajors.length > 0 && (
        <>
          <h4>Relevant College Majors</h4>
          <ul>
            {data.relevantMajors.map((major) => (
              <li key={major}>{major}</li>
            ))}
          </ul>
        </>
      )}

      <ShareCard
        type={mbtiType.toUpperCase()}
        title={mbtiType.toUpperCase()}
        topCareer={data.filteredCareers[0]} // uses filtered result
        preference={preferenceResult}
      />

      <button className="retake-btn" onClick={handleRetake}>
        🔁 Retake the Quiz
      </button>
    </div>
  );
};

export default ResultBadge;
