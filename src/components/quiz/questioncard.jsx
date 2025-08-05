// src/components/quiz/questioncard.jsx
import React from 'react';

const QuestionCard = ({ question, onAnswer, progress, totalQuestions, selectedAnswer }) => {
  return (
    <div className="question-card">
      <h3>
        Question {progress} of {totalQuestions}
      </h3>
      <p>{question.text}</p>
      <div className="options">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option.value;
          return (
            <button
              key={`${question.text}-${option.value}`} // Unique key per question & answer
              className={`option-btn ${isSelected ? 'selected' : ''}`}
              onClick={() => onAnswer(option.value)}
              disabled={!!selectedAnswer}
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