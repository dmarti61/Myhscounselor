import React, { useState, useEffect } from 'react';
import Navbar from '../navbar'; // ✅ path from src/components/quiz
import ShareCard from './sharecard';
import { CAREER_MAP } from './careermap';
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

  if (error) {
    return (
      <>
        <Navbar />
        <p className="error">{error}</p>
      </>
    );
  }

  if (!data) {
    return (
      <>
        <Navbar />
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <Navbar /> {/* ✅ Show navbar only on result screen */}
      <div className="result-badge">
        <h2>{data.title} ({mbtiType.toUpperCase()})</h2>
        <h4>Strengths</h4>
        <ul>
          {data.strengths.map((s) => <li key={s}>{s}</li>)}
        </ul>
        <h4>Suggested Careers</h4>
        <ul>
          {data.careers.map((c) => <li key={c.name}>{c.name}</li>)}
        </ul>

        <ShareCard
          type={mbtiType.toUpperCase()}
          title={data.title}
          topCareer={data.careers[0]}
        />
      </div>
    </>
  );
};

export default ResultBadge;
