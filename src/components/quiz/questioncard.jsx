import React, { useState, useEffect } from 'react';

const QuestionCard = ({ question, onAnswer, progress, totalQuestions }) => {
  // NEW: A local state for the selected button
  const [localSelectedAnswer, setLocalSelectedAnswer] = useState(null);

  // LOG 1: This log shows the state on every render, including the initial mount.
  console.log('LOG 1 - QuestionCard rendered. localSelectedAnswer is:', localSelectedAnswer);

  // Use a useEffect hook to explicitly reset the state when the question changes.
  // This is the final and definitive fix for the persistent highlight bug.
  useEffect(() => {
    // We expect this to run when the question changes.
    setLocalSelectedAnswer(null);
    // LOG 2: This log confirms the state has been explicitly reset to null.
    console.log('LOG 2 - useEffect fired, state reset.');
  }, [question.text]);

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
