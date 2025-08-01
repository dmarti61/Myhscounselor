import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MBTI_MAP } from './mbtimap'; // Assuming mbtimap.js is in the same directory
import ShareCard from './sharecard'; // Assuming sharecard.js is in the same directory
import '../../styles/resultbadge.css'; // Assuming your CSS is located here

const ResultBadge = ({ mbtiType: propMbtiType, preferences: propPreferences }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  // Determine MBTI type: priority from props, then location state, then localStorage
  let mbtiType = propMbtiType || location.state?.mbtiType;

  // Determine preferences: priority from props, then location state
  // We now receive the full 'preferences' object
  let preferences = propPreferences || location.state?.preferences;

  // Try to recover MBTI from localStorage if not found yet
  if (!mbtiType) {
    const stored = localStorage.getItem('mbti_result');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const now = new Date().getTime();
        // Check if stored data is still valid (e.g., not expired)
        if (parsed.expires && parsed.expires > now && parsed.type) {
          mbtiType = parsed.type;
        } else {
          localStorage.removeItem('mbti_result'); // Clear expired or malformed data
        }
      } catch (e) {
        console.error("Failed to parse MBTI from localStorage:", e);
        localStorage.removeItem('mbti_result'); // Clear invalid JSON
      }
    }
  }

  useEffect(() => {
    // Only proceed if we have an MBTI type
    if (!mbtiType) {
      setError('Oops! We couldn\'t find your personality type. Please retake the quiz.');
      return;
    }

    const key = mbtiType.toUpperCase();
    const found = MBTI_MAP[key];

    if (found) {
      let careers = [...(found.careers || [])]; // Ensure careers is an array, even if empty

      // --- Apply Preference-based Sorting/Highlighting ---
      // We will now primarily use 'pathPreference' for sorting careers,
      // but the structure is ready to expand for other preferences.
      const preferredPathway = preferences?.pathPreference?.toLowerCase();

      if (preferredPathway) {
        const matchingCareers = [];
        const otherCareers = [];

        careers.forEach(c => {
          // Ensure career pathway exists and is a string for comparison
          if (c.pathway && typeof c.pathway === 'string' && c.pathway.toLowerCase() === preferredPathway) {
            matchingCareers.push(c);
          } else {
            otherCareers.push(c);
          }
        });

        // Combine them, putting preferred careers first
        careers = [...matchingCareers, ...otherCareers];
      }
      // --- End Preference Logic ---

      setData({
        ...found,
        // Ensure strengths, relevantMajors are arrays
        strengths: found.strengths || [],
        relevantMajors: found.relevantMajors || [],
        sortedCareers: careers, // Contains careers potentially reordered by preference
      });
    } else {
      setError('Oops! We couldn\'t find your personality type. Please retake the quiz.');
    }
  }, [mbtiType, preferences]); // Depend on preferences as well, so re-sorts if they change

  const handleRetake = () => {
    localStorage.removeItem('mbti_result'); // Clear stored result on retake
    navigate('/'); // Navigate to the root path, presumably where the MBTI quiz starts
  };

  // --- Render Logic ---
  if (error) {
    return (
      <div className="result-badge error-container">
        <p className="error-message">{error}</p>
        <button className="retake-btn" onClick={handleRetake}>
          🔁 Retake the Quiz
        </button>
      </div>
    );
  }

  if (!data) {
    return <p className="loading-message">Loading your results...</p>;
  }

  // Ensure mbtiType is available for display (should be, given the checks above)
  const displayMbtiType = mbtiType ? mbtiType.toUpperCase() : 'UNKNOWN';

  return (
    <div className="result-badge">
      <h2 className="mbti-type-header">You're an <span className="mbti-type-bold">{displayMbtiType}</span>!</h2>
      <p className="mbti-vibe">{data.vibe}</p>

      <h4>My Superpowers (Strengths)</h4>
      {data.strengths.length > 0 ? (
        <ul className="strength-list">
          {data.strengths.map((s, idx) => (
            <li key={idx}>{s}</li> // Using index for key as strengths are simple strings
          ))}
        </ul>
      ) : (
        <p>No specific strengths listed for this type.</p>
      )}

      ---

      <h4>Suggested Careers for You</h4>
      {data.sortedCareers.length > 0 ? (
        <ul className="career-list">
          {data.sortedCareers.map((c, idx) => ( // Using idx as a fallback key; consider c.id if available
            <li key={c.name || idx} className="career-item"> {/* Fallback to idx if c.name is missing */}
              <span className={`career-name ${c.pathway?.toLowerCase() === preferredPathway ? 'highlighted-career' : ''}`}>
                {c.pathway?.toLowerCase() === preferredPathway ? '🌟 ' : ''}
                {c.name}
              </span>
              {c.pathway && <span className="pathway"> ({c.pathway})</span>}
              {c.description && (
                <p className="career-description">{c.description}</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No specific career suggestions found for your type.</p>
      )}


      {/* Display relevant majors only if they exist */}
      {data.relevantMajors.length > 0 && (
        <>
          <h4>Relevant College Majors</h4>
          <ul className="major-list">
            {data.relevantMajors.map((major, idx) => (
              <li key={idx}>{major}</li> // Using index for key as majors are simple strings
            ))}
          </ul>
        </>
      )}

      {/* ShareCard only if data is fully loaded and careers exist */}
      {data.sortedCareers.length > 0 && (
        <ShareCard
          type={displayMbtiType}
          title={`My MBTI Type: ${displayMbtiType}`}
          topCareer={data.sortedCareers[0]} // Pass the first (potentially highlighted) career
          preference={preferences?.pathPreference} // Pass the specific preference if needed by ShareCard
        />
      )}

      <button className="retake-btn" onClick={handleRetake}>
        🔁 Retake the Quiz
      </button>
    </div>
  );
};

export default ResultBadge;
