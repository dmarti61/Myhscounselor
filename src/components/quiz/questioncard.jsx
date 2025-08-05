import React, { useState } from 'react';

// The QuestionCard component no longer needs the selectedAnswer prop
const QuestionCard = ({ question, onAnswer, progress, totalQuestions }) => {
  // NEW: A local state for the selected button
  const [localSelectedAnswer, setLocalSelectedAnswer] = useState(null);

  const handleButtonClick = (value, event) => {
    // Set the local state to highlight the button
    setLocalSelectedAnswer(value);
    
    // Blur the button to remove browser focus
    if (event && event.target) {
      event.target.blur();
    }
    
    // Call the parent's onAnswer function with the letter
    onAnswer(value);
  };

  return (
    <div className="question-card">
      <h3>
        Question {progress} of {totalQuestions}
      </h3>
      <p>{question.text}</p>
      <div className="options">
        {question.options.map((option) => {
          // Check against the local state for highlighting
          const isSelected = localSelectedAnswer === option.value;
          return (
            <button
              key={`${question.text}-${option.value}`}
              className={`option-btn ${isSelected ? 'selected' : ''}`}
              onClick={(e) => handleButtonClick(option.value, e)}
              // Disable buttons after one is selected to prevent multiple clicks
              disabled={!!localSelectedAnswer}
              aria-label={`Answer option: ${option.label}`}
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
