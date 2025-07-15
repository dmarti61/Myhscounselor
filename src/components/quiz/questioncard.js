import React from 'react';

const QuestionCard = ({ question, onAnswer, progress, totalQuestions }) => {
  return (
    <div className="question-card">
      <h3>
        Question {progress} of {totalQuestions}
      </h3>
      <p>{question.text}</p>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="option-btn"
            onClick={() => onAnswer(option.value)}
            aria-label={`Answer option ${index + 1}: ${option.label}`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
