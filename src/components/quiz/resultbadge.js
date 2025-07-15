/* eslint react/prop-types: 0 */
import React, { useState, useEffect } from 'react';
import { CAREER_MAP } from './careermap'; // make sure the path is correct
import '../../styles/resultbadge.css';

const ResultBadge = ({ mbtiType }) => {
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!mbtiType) {
      setError('Missing personality type');
      return;
    }

    const key = mbtiType.toUpperCase();
    const found = CAREER_MAP[key];
    if (found) {
      setData(found);
    } else {
      setError('Oops, your personality type doesn’t exist');
    }
  }, [mbtiType]);

  if (error) return <p className="error">{error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div className="result-badge">
      <h2>{data.title} ({mbtiType.toUpperCase()})</h2>
      <h4>Strengths</h4>
      <ul>
        {data.strengths.map(s => <li key={s}>{s}</li>)}
      </ul>
      <h4>Suggested Careers</h4>
      <ul>
        {data.careers.map(c => <li key={c.name}>{c.name}</li>)}
      </ul>
    </div>
  );
};

export default ResultBadge;
