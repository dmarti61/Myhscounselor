// src/components/quiz/questioncard.jsx
import React, { useState } from 'react';

const QuestionCard = ({ question, onAnswer, progress, totalQuestions }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (value) => {
    // Only allow selecting an answer once
    if (selected) return;

    // Apply the highlight immediately
    setSelected(value);

    // Call the parent's onAnswer function after a slight delay
    // This gives the visual feedback a moment to render before the next question loads
    setTimeout(() => {
      onAnswer(value);
    }, 100); // A short delay (e.g., 100ms) is often sufficient
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
