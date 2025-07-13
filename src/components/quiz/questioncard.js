// QuestionCard.js
import React from 'react';

const LETTERS = ['A', 'B', 'C', 'D'];

const QuestionCard = ({ question, onAnswer, progress, totalQuestions }) => {
  return (
    <div className="question-card">
      <h3>Question {progress} of {totalQuestions}</h3>
      <p>{question.text}</p> {/* Use `text`, not `prompt`, based on your questions.js */}

      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="option-btn"
            onClick={() => onAnswer(`${LETTERS[index]}:${option.value}`)}
            aria-label={`Answer option ${LETTERS[index]}: ${option.label}`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
