// src/components/quiz/questioncard.jsx
import React from 'react';

// Now a pure presentational component that receives selectedAnswer as a prop
const QuestionCard = ({ question, onAnswer, progress, totalQuestions, selectedAnswer }) => {
  return (
    <div className="question-card">
      <h3>
        Question {progress} of {totalQuestions}
      </h3>
      <p>{question.text}</p>
      <div className="options">
        {question.options.map((option, index) => {
          // The isSelected logic now depends on the prop from the parent
          const isSelected = selectedAnswer === option.value;
          return (
            <button
              key={index}
              className={`option-btn ${isSelected ? 'selected' : ''}`}
              onClick={() => onAnswer(option.value)}
              // Disable the button if an answer has been selected
              disabled={!!selectedAnswer}
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
