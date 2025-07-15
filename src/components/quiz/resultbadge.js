/* eslint react/prop-types: 0 */
import React, { useState, useEffect } from 'react';
import { CAREER_MAP } from './careermap';
import ShareCard from './sharecard';
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

  const topCareer = data.careers?.[0] || { name: 'Career Not Found' };
  const shareType = data.bucketType || 'Planner'; // fallback if bucketType is undefined

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

      {/* ✅ ShareCard integration */}
      <ShareCard
        type={shareType}
        title={data.title}
        topCareer={topCareer}
      />
    </div>
  );
};

export default ResultBadge;
