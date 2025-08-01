import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { MBTI_MAP } from './mbtimap'; // Make sure the path is correct
import { CAREER_STATS } from './careerstats'; // Make sure the path is correct
import Share_Card from './sharecard';

// ResultBadge no longer receives mbtiType and quizResults as direct props
// It will now extract them from location.state
const ResultBadge = () => { // Removed { mbtiType, quizResults } from props
  const location = useLocation(); // Get the location object

  // State to store the extracted data
  const [mbtiType, setMbtiType] = useState(null);
  const [quizResults, setQuizResults] = useState(null);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Derive preferredPathway from quizResults state
  const preferredPathway = quizResults?.pathPreference?.toLowerCase();

  useEffect(() => {
    // First, extract mbtiType and preferences from location.state
    if (location.state && location.state.mbtiType && location.state.preferences) {
      console.log('ResultBadge: Received mbtiType from location.state:', location.state.mbtiType);
      console.log('ResultBadge: Received preferences from location.state:', location.state.preferences);
      setMbtiType(location.state.mbtiType);
      setQuizResults(location.state.preferences); // Set quizResults from preferences
    } else {
      // Fallback if directly accessing /results or state is lost
      console.warn('ResultBadge: mbtiType or preferences not found in location.state. Checking localStorage...');
      try {
        const storedMbti = localStorage.getItem('mbti_result');
        // You would also need to store and retrieve preferences in localStorage if this is a common entry point
        // For now, let's just focus on getting MBTI type
        if (storedMbti) {
          const parsedMbti = JSON.parse(storedMbti);
          if (parsedMbti.type && new Date().getTime() < parsedMbti.expires) {
            setMbtiType(parsedMbti.type);
            // If preferences aren't in state, and you want to use them from localStorage as fallback,
            // you'd need to ensure they were stored by the quiz or preference quiz.
            // For now, setting quizResults to null here might mean no preference-based sorting
            // unless you also store preferences in localStorage.
            setQuizResults(null); // Or load from localStorage if available
            console.log('ResultBadge: Loaded mbtiType from localStorage:', parsedMbti.type);
          } else {
            console.warn('ResultBadge: Stored MBTI result expired or invalid.');
          }
        }
      } catch (e) {
        console.error('ResultBadge: Failed to parse MBTI result from localStorage:', e);
      }
    }
  }, [location.state]); // Dependency on location.state for initial data extraction

  // Second useEffect: This one depends on the mbtiType and quizResults *states*
  // which are set by the first useEffect
  useEffect(() => {
    // Only proceed if mbtiType and quizResults are set from location.state (or localStorage fallback)
    if (!mbtiType || !quizResults) {
        setLoading(true); // Still loading if data isn't here yet
        return; // Don't try to process if mbtiType or quizResults are still null
    }

    console.log('Second useEffect triggered with mbtiType:', mbtiType);
    console.log('Second useEffect triggered with quizResults:', quizResults);

    // Convert mbtiType to uppercase before checking MBTI_MAP
    const standardizedMbtiType = mbtiType.toUpperCase(); // mbtiType is now guaranteed to be a string here

    console.log('Standardized MBTI Type:', standardizedMbtiType);
    console.log('Does standardizedMbtiType exist in MBTI_MAP?', !!MBTI_MAP[standardizedMbtiType]);
    if (!MBTI_MAP[standardizedMbtiType] && standardizedMbtiType) {
        console.error(`MBTI_MAP does not contain key: ${standardizedMbtiType}`);
    }

    if (MBTI_MAP[standardizedMbtiType]) { // mbtiType is guaranteed to be present and uppercase
      const mbtiData = MBTI_MAP[standardizedMbtiType];
      let careers = [...mbtiData.careers];

      let matchingCareers = [];
      let nonMatchingCareers = [];

      // Ensure preferredPathway is derived from the *state* `quizResults` that was set
      const currentPreferredPathway = quizResults?.pathPreference?.toLowerCase();

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
        relevantMajors: mbtiData.relevantMajors,
        sortedCareers: sortedCareers,
      });
      setLoading(false); // Only set loading to false when data is successfully processed
    } else {
      setData(null);
      setLoading(false); // Also set loading to false if data could not be loaded
    }
  }, [mbtiType, quizResults]); // Dependencies: the states that hold the extracted data


  if (loading) {
    return <div className="loading">Loading your results...</div>;
  }

  // If loading is false but data is null, it means there was an error loading MBTI data
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
    </div>
  );
};

export default ResultBadge;
