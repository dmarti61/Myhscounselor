// src/components/quiz/quiz.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import questions from '../../data/questions';
import QuestionCard from './questioncard';
import ResultBadge from './resultbadge';
import ProgressBar from './progressbar';

const Quiz = () => {
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [personalityType, setPersonalityType] = useState('');
  const navigate = useNavigate();

  // record each answer and, when done, calculate the result
  const handleAnswer = (option) => {
    const updatedAnswers = [...answers, option];
    setAnswers(updatedAnswers);

    if (updatedAnswers.length === questions.length) {
      calculateResults(updatedAnswers);
    }
  };

  // tally answers → determine dominant personality type
  const calculateResults = (finalAnswers) => {
    const tally = { A: 0, B: 0, C: 0, D: 0 };

    finalAnswers.forEach((ans) => {
      const key = ans[0];           // first letter: A / B / C / D
      if (tally[key] !== undefined) tally[key] += 1;
    });

    const [topKey] = Object.entries(tally).reduce((a, b) =>
      a[1] > b[1] ? a : b
    );

    const typeMap = {
      A: 'planner',
      B: 'builder',
      C: 'connector',
      D: 'explorer',
    };

    const finalType = typeMap[topKey];
    setPersonalityType(finalType);
    setShowResults(true);
    localStorage.setItem('userType', finalType);
    // navigate(`/results/${finalType}`); // enable if you have a results route
  };

  const currentIdx = answers.length;
  const currentQuestion = questions[currentIdx];
  const totalQuestions = questions.length;

  return (
    <div className="quiz-container">
      {!showResults ? (
        <>
          <ProgressBar currentStep={currentIdx + 1} totalSteps={totalQuestions} />

          {currentQuestion ? (
            <QuestionCard
              question={currentQuestion}
              onAnswer={handleAnswer}
              progress={currentIdx + 1}
              totalQuestions={totalQuestions}
            />
          ) : (
            <p>Loading next question...</p>
          )}
        </>
      ) : (
        <ResultBadge type={personalityType} />
      )}
    </div>
  );
};

export default Quiz;
