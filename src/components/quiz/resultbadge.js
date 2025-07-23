import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MBTI_MAP } from './mbtimap';
import ShareCard from './sharecard';
import '../../styles/resultbadge.css';

const ResultBadge = ({ mbtiType: propType, preferenceResult: propPreference }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  let mbtiType = propType || location.state?.mbtiType;
  let preferenceResult = propPreference || location.state?.preferences?.pathPreference; // Access specific preference ID

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
      let careers = [...found.careers]; // Start with all careers for the MBTI type

      // Prioritize/highlight careers based on preferenceResult
      if (preferenceResult) {
        const preferredPathway = preferenceResult.toLowerCase();
        const matchingCareers = [];
        const otherCareers = [];

        careers.forEach(c => {
          if (c.pathway.toLowerCase() === preferredPathway) {
            matchingCareers.push(c);
          } else {
            otherCareers.push(c);
          }
        });

        // Combine them, putting preferred careers first
        careers = [...matchingCareers, ...otherCareers];
      }

      setData({
        ...found,
        sortedCareers: careers, // Renamed from filteredCareers for clarity
      });
    } else {
      setError('Oops! We couldn\'t find your personality type. Please retake the quiz.');
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
    return <p>Loading your results...</p>;
  }

  // Determine a punchy description for the MBTI type
  const getTypeVibe = (type) => {
    // This is a placeholder; you'd ideally add a 'vibe' property to your MBTI_MAP
    switch (type.toUpperCase()) {
      case 'ENFJ': return "You're a natural leader who loves helping others and building connections.";
      case 'ISTP': return "You're a practical problem-solver who enjoys hands-on experience and figuring out how things work.";
      // Add more cases for other types or pull from MBTI_MAP.vibe
      default: return "You have a unique set of strengths that make you stand out!";
    }
  };

  return (
    <div className="result-badge">
      {/* The MBTI Part: "Yeah, that's me!" */}
      <h2 className="mbti-type-header">You're an <span className="mbti-type-bold">{mbtiType.toUpperCase()}</span>!</h2>
      <p className="mbti-vibe">{getTypeVibe(mbtiType)}</p>

      <h4>My Superpowers (Strengths)</h4>
      <ul className="strength-list">
        {data.strengths.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      ---

      {/* The Career Recommendations: "What can I actually DO?" */}
      <h4>Suggested Careers for You</h4>
      <ul className="career-list">
        {data.sortedCareers.map((c) => (
          <li key={c.name} className="career-item">
            <span className={`career-name ${c.pathway.toLowerCase() === preferenceResult?.toLowerCase() ? 'highlighted-career' : ''}`}>
              {c.pathway.toLowerCase() === preferenceResult?.toLowerCase() ? '🌟 ' : ''}
              {c.name}
            </span>
            <span className="pathway"> ({c.pathway})</span>
            {c.description && (
              <p className="career-description">{c.description}</p>
            )}
          </li>
        ))}
      </ul>

      {/* Simplified Relevant College Majors (Conditional Display) */}
      {data.relevantMajors && data.relevantMajors.length > 0 && (
        <>
          <h4>Relevant College Majors</h4>
          <ul className="major-list">
            {data.relevantMajors.map((major) => (
              <li key={major}>{major}</li>
            ))}
          </ul>
        </>
      )}

      <ShareCard
        type={mbtiType.toUpperCase()}
        title={mbtiType.toUpperCase()}
        topCareer={data.sortedCareers[0]} // uses sorted result
        preference={preferenceResult}
      />

      <button className="retake-btn" onClick={handleRetake}>
        🔁 Retake the Quiz
      </button>
    </div>
  );
};

export default ResultBadge;
