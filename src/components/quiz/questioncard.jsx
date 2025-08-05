// src/components/quiz/questioncard.jsx
import React from 'react';

// The key is now handled by the parent component (Quiz.jsx)
const QuestionCard = ({ question, onAnswer, progress, totalQuestions }) => {

  const handleClick = (value) => {
    // Call the parent's onAnswer function immediately
    onAnswer(value);
  };

  return (
    // Apply a key to the top-level element as an extra safeguard
    <div key={question.id} className="question-card">
      <h3>
        Question {progress} of {totalQuestions}
      </h3>
      <p>{question.text}</p>
      <div className="options">
        {question.options.map((option, index) => {
          // No internal state needed for highlighting
          return (
            <button
              key={index}
              className={`option-btn`} // No 'selected' class initially
              onClick={() => handleClick(option.value)}
              // The button should not be disabled here
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
