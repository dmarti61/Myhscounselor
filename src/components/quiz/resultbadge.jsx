import React, { useState, useEffect } from 'react';
import { MBTI_MAP } from './mbtimap'; // Make sure the path is correct
import { CAREER_STATS } from './careerstats'; // Make sure the path is correct

const ResultBadge = ({ mbtiType, quizResults }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Define preferredPathway (and other preferences) here,
  // so they are accessible throughout the component's render scope and useEffect.
  const preferredPathway = quizResults?.pathPreference?.toLowerCase();
  const preferredLearningStyle = quizResults?.learningStyle?.toLowerCase(); // Example: if you have this preference
  const preferredWorkEnvironment = quizResults?.workEnvironment?.toLowerCase(); // Example: if you have this preference

  useEffect(() => {
    if (mbtiType && MBTI_MAP[mbtiType]) {
      const mbtiData = MBTI_MAP[mbtiType];
      let careers = [...mbtiData.careers]; // Create a mutable copy to sort

      // Initialize arrays for matching and non-matching careers
      let matchingCareers = [];
      let nonMatchingCareers = [];

      careers.forEach(c => {
        // Use the new 'postSchoolPath' property for comparison
        // and ensure it's a string before calling toLowerCase
        if (c.postSchoolPath && typeof c.postSchoolPath === 'string' && c.postSchoolPath.toLowerCase() === preferredPathway) {
          matchingCareers.push(c);
        } else {
          nonMatchingCareers.push(c);
        }
      });

      // Combine matching careers first, then non-matching ones
      const sortedCareers = [...matchingCareers, ...nonMatchingCareers];

      setData({
        vibe: mbtiData.vibe,
        strengths: mbtiData.strengths,
        recommendedNextStep: mbtiData.recommendedNextStep,
        relevantMajors: mbtiData.relevantMajors,
        sortedCareers: sortedCareers,
      });
    } else {
      setData(null);
    }
    setLoading(false);
  }, [mbtiType, quizResults, preferredPathway]); // Add preferredPathway to dependencies if it's used in the effect's logic that triggers re-run

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
              const detailedStats = CAREER_STATS[c.title]; // Get detailed stats for this career

              return (
                <li key={c.title || idx} className="career-item">
                  <span className={`career-name ${c.postSchoolPath?.toLowerCase() === preferredPathway ? 'highlighted-career' : ''}`}>
                    {/* Use preferredPathway for the highlight star */}
                    {c.postSchoolPath?.toLowerCase() === preferredPathway ? '🌟 ' : ''}
                    {c.title}
                  </span>
                  {c.pathway && <span className="pathway"> ({c.pathway})</span>}
                  {c.description && (
                    <p className="career-description">{c.description}</p>
                  )}

                  {/* Display additional details from CAREER_STATS if available */}
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
    </div>
  );
};

export default ResultBadge;
