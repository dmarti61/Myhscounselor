import React from 'react';
import { CAREER_MAP } from './careermap'; // Your existing career map keyed by bucketType
import '../../styles/resultbadge.css';
/* eslint react/prop-types: 0 */

const ResultBadge = ({ mbtiType }) => {
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    // **** key fix: normalise to upper-case before the lookup ****
    const key = (mbtiType || '').toUpperCase();
    const found = CAREER_MAP[key];
    if (found) {
      setData(found);
    } else {
      setError('Oops, your personality type doesn’t exist');
    }
  }, [mbtiType]);

  if (error) return <p className="error">{error}</p>;
  if (!data) return null; // still loading

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
