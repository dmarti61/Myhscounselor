// QuestionCard.js
import React from 'react';

const QuestionCard = ({ question, onAnswer, progress }) => {
  return (
    <div className="question-card">
      <h3>Question {progress} of 12</h3>
      <p>{question.prompt}</p>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="option-btn"
            onClick={() => onAnswer(`${['A','B','C','D'][index]}: ${option}`)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
