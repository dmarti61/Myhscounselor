import React, { useState, useEffect } from 'react';
import { MBTI_MAP } from './mbtimap'; // Make sure the path is correct
import { CAREER_STATS } from './careerstats'; // Make sure the path is correct

const ResultBadge = ({ mbtiType, quizResults }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const preferredPathway = quizResults?.pathPreference?.toLowerCase();

  useEffect(() => {
    // Convert mbtiType to uppercase before checking MBTI_MAP
    const standardizedMbtiType = mbtiType ? mbtiType.toUpperCase() : null;

    if (standardizedMbtiType && MBTI_MAP[standardizedMbtiType]) {
      const mbtiData = MBTI_MAP[standardizedMbtiType]; // Use the standardized type
      let careers = [...mbtiData.careers];

      let matchingCareers = [];
      let nonMatchingCareers = [];

      careers.forEach(c => {
        if (c.postSchoolPath && typeof c.postSchoolPath === 'string' && c.postSchoolPath.toLowerCase() === preferredPathway) {
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
    } else {
      setData(null);
    }
    setLoading(false);
  }, [mbtiType, quizResults, preferredPathway]); // mbtiType is still a dependency

  if (loading) {
    return <div className="loading">Loading your results...</div>;
  }

  if (!data) {
    return <div className="error-message">Could not load MBTI data. Please try again.</div>;
  }

  return (
    <div className="result-badge-container">
      <h2 className="mbti-type">{mbtiType}</h2> {/* Display the original mbtiType */}
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
    </div>
  );
};

export default ResultBadge;
