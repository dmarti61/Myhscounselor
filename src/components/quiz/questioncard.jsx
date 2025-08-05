// src/components/quiz/questioncard.jsx
import React, { useState } from 'react';

const QuestionCard = ({ question, onAnswer, progress, totalQuestions }) => {
  // Add an internal state to track the selected answer
  const [selected, setSelected] = useState(null);

  const handleClick = (value) => {
    // Only allow selecting an answer once
    if (selected) return;
    
    setSelected(value); // Highlight the selected button
    onAnswer(value); // Pass the answer to the parent
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
              // The button is disabled once an answer is selected
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
