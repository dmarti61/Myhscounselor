// src/components/quiz/questioncard.jsx
import React, { useState, useEffect } from 'react';

const QuestionCard = ({ question, onAnswer, progress, totalQuestions }) => {
  const [selected, setSelected] = useState(null);

  // This useEffect will reset the 'selected' state every time the question changes.
  useEffect(() => {
    setSelected(null);
  }, [question]);

  const handleClick = (value) => {
    if (selected) return;
    
    setSelected(value); 
    onAnswer(value);
  };

  return (
    <div className="question-card">
      <h3>
        Question {progress} of {totalQuestions}
      </h3>
      <p>{question.text}</p>
      <div className="options">
        {question.options.map((option, index) => {
          const isSelected = selected === option.value;
          return (
            <button
              key={index}
              className={`option-btn ${isSelected ? 'selected' : ''}`}
              onClick={() => handleClick(option.value)}
              disabled={!!selected} 
              aria-label={`Answer option ${index + 1}: ${option.label}`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
