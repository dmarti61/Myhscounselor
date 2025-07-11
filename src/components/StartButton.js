// StartButton.js
import React from 'react';

const StartButton = ({ onClick }) => {
  return (
    <button className="start-btn" onClick={onClick}>
      🚀 Start Your Journey
    </button>
  );
};

export default StartButton;
