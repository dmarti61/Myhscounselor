// NotFound.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-sure-page">
      <h2>🚧 Page Not Found</h2>
      <p>
        Hmm... we couldn’t find that page. Try heading back to your homepage or restarting your journey.
      </p>
      <button onClick={() => navigate('/')}>
        🏠 Return to Home
      </button>
    </div>
  );
};

export default NotFound;
