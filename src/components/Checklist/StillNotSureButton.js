// StillNotSureButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const StillNotSureButton = () => {
  const navigate = useNavigate();

  return (
    <div className="still-not-sure">
      <p>🤔 Not quite ready to commit to a path?</p>
      <button className="explore-btn" onClick={() => navigate('/not-sure')}>
        🔍 Explore More Options
      </button>
    </div>
  );
};

export default StillNotSureButton;
