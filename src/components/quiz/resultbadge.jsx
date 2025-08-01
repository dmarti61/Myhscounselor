import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // **Import useNavigate**
import { MBTI_MAP } from './mbtimap'; // Make sure the path is correct
import { CAREER_STATS } from './careerstats'; // Make sure the path is correct
import Share_Card from './sharecard';
import '../../styles/resultbadge.css';

const ResultBadge = () => {
  const location = useLocation();
  const navigate = useNavigate(); // **Initialize useNavigate hook**

  const [mbtiType, setMbtiType] = useState(null);
  const [quizResults, setQuizResults] = useState(null);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const preferredPathway = quizResults?.pathPreference?.toLowerCase();

  useEffect(() => {
    if (location.state && location.state.mbtiType && location.state.preferences) {
      console.log('ResultBadge: Received mbtiType from location.state:', location.state.mbtiType);
      console.log('ResultBadge: Received preferences from location.state:', location.state.preferences);
      setMbtiType(location.state.mbtiType);
      setQuizResults(location.state.preferences);
    } else {
      console.warn('ResultBadge: mbtiType or preferences not found in location.state. Checking localStorage...');
      try {
        const storedMbti = localStorage.getItem('mbti_result');
        if (storedMbti) {
          const parsedMbti = JSON.parse(storedMbti);
          if (parsedMbti.type && new Date().getTime() < parsedMbti.expires) {
            setMbtiType(parsedMbti.type);
            setQuizResults(null);
            console.log('ResultBadge: Loaded mbtiType from localStorage:', parsedMbti.type);
          } else {
            console.warn('ResultBadge: Stored MBTI result expired or invalid.');
          }
        }
      } catch (e) {
        console.error('ResultBadge: Failed to parse MBTI result from localStorage:', e);
      }
    }
  }, [location.state]);

  useEffect(() => {
    if (!mbtiType || !quizResults) {
      setLoading(true);
      return;
    }

    console.log('Second useEffect triggered with mbtiType:', mbtiType);
    console.log('Second useEffect triggered with quizResults:', quizResults);

    const standardizedMbtiType = mbtiType.toUpperCase();

    console.log('Standardized MBTI Type:', standardizedMbtiType);
    console.log('Does standardizedMbtiType exist in MBTI_MAP?', !!MBTI_MAP[standardizedMbtiType]);
    if (!MBTI_MAP[standardizedMbtiType] && standardizedMbtiType) {
      console.error(`MBTI_MAP does not contain key: ${standardizedMbtiType}`);
    }

    if (MBTI_MAP[standardizedMbtiType]) {
      const mbtiData = MBTI_MAP[standardizedMbtiType];
      let careers = [...mbtiData.careers];

      const currentPreferredPathway = quizResults?.pathPreference?.toLowerCase();

      let matchingCareers = [];
      let nonMatchingCareers = [];

      careers.forEach(c => {
        if (c.postSchoolPath && typeof c.postSchoolPath === 'string' && c.postSchoolPath.toLowerCase() === currentPreferredPathway) {
          matchingCareers.push(c);
        } else {
          nonMatchingCareers.push(c);
        }
      });

      const sortedCareers = [...matchingCareers, ...nonMatchingCareers];

      setData({
        vibe: mbtiData.vibe,
        strengths: mbtiData.strengths,
        recommendedNextStep: mbtiData.recommendedNextStep,
        relevantMajors: mbtiData.relevantMajtiors,
        sortedCareers: sortedCareers,
      });
      setLoading(false);
    } else {
      setData(null);
      setLoading(false);
    }
  }, [mbtiType, quizResults]);

  // **New function to handle retake button click**
  const handleRetakeQuiz = () => {
    // 1. Remove the saved MBTI result from localStorage
    localStorage.removeItem('mbti_result');
    // If you also stored preferences in localStorage, remove them here:
    // localStorage.removeItem('user_preferences'); // Example if you add this later

    // 2. Redirect back to the homepage (or the start of your quiz)
    navigate('/');
  };

  if (loading) {
    return <div className="loading">Loading your results...</div>;
  }

  if (!data) {
    return <div className="error-message">Could not load MBTI data. Please try again.</div>;
  }

  return (
    <div className="result-badge-container">
      <h2 className="mbti-type">{mbtiType}</h2>
      <p className="vibe">{data.vibe}</p>

      <div className="section-block">
        <h3>Your Strengths:</h3>
        <ul className="strengths-list">
          {data.strengths.map((strength, index) => (
            <li key={index}>{strength}</li>
          ))}
        </ul>
      </div>

      <div className="section-block">
        <h3>Recommended Next Step:</h3>
        <p>{data.recommendedNextStep}</p>
      </div>

      {data.relevantMajors && data.relevantMajors.length > 0 && (
        <div className="section-block">
          <h3>Relevant College Majors:</h3>
          <ul className="majors-list">
            {data.relevantMajors.map((major, index) => (
              <li key={index}>{major}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="section-block">
        <h3>Suggested Careers:</h3>
        {data.sortedCareers.length > 0 ? (
          <ul className="career-list">
            {data.sortedCareers.map((c, idx) => {
              const detailedStats = CAREER_STATS[c.title];

              return (
                <li key={c.title || idx} className="career-item">
                  <span className={`career-name ${c.postSchoolPath?.toLowerCase() === preferredPathway ? 'highlighted-career' : ''}`}>
                    {c.postSchoolPath?.toLowerCase() === preferredPathway ? '🌟 ' : ''}
                    {c.title}
                  </span>
                  {c.pathway && <span className="pathway"> ({c.pathway})</span>}
                  {c.description && (
                    <p className="career-description">{c.description}</p>
                  )}

                  {detailedStats ? (
                    <div className="career-details">
                      <p><strong>Education:</strong> {detailedStats.education}</p>
                      <p><strong>Median Salary:</strong> {detailedStats.salary}</p>
                      <p><strong>Job Outlook (2022-2032):</strong> {detailedStats.outlook}</p>
                      {detailedStats.skills && detailedStats.skills.length > 0 && (
                        <p><strong>Key Skills:</strong> {detailedStats.skills.join(', ')}</p>
                      )}
                      {detailedStats.certifications && detailedStats.certifications.length > 0 && (
                        <p><strong>Certifications:</strong> {detailedStats.certifications.join(', ')}</p>
                      )}
                      {detailedStats.environment && (
                        <p><strong>Work Environment:</strong> {detailedStats.environment}</p>
                      )}
                      {detailedStats.soc_code && (
                        <p className="bls-link">
                          <a href={`https://www.bls.gov/ooh/standard-occupational-classification/${detailedStats.soc_code}.htm`} target="_blank" rel="noopener noreferrer">
                            More info from BLS ({detailedStats.soc_code})
                          </a>
                        </p>
                      )}
                    </div>
                  ) : (
                    <p className="no-detailed-stats">Detailed stats not available for this career.</p>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No specific career suggestions found for your type.</p>
        )}
      </div>

      <div className="share-section">
        <h3>Share Your Results!</h3>
        <Share_Card mbtiType={mbtiType} quizResults={quizResults} />
      </div>
      <div className="retake-quiz">
        <button onClick={handleRetakeQuiz} className="retake-btn">
          Retake Quiz
        </button>
      </div>
    </div>
  );
};

export default ResultBadge;
