// Quiz.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../../data/questions';
import QuestionCard from './QuestionCard';
import ResultBadge from './ResultBadge';
import ProgressBar from './ProgressBar';

const Quiz = () => {
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [personalityType, setPersonalityType] = useState('');
  const navigate = useNavigate();

  const handleAnswer = (option) => {
    const updatedAnswers = [...answers, option];
    setAnswers(updatedAnswers);

    if (updatedAnswers.length === questions.length) {
      calculateResults(updatedAnswers);
    }
  };

  const calculateResults = (finalAnswers) => {
    const tally = { A: 0, B: 0, C: 0, D: 0 };

    finalAnswers.forEach((answer) => {
      if (answer.startsWith('A')) tally.A++;
      else if (answer.startsWith('B')) tally.B++;
      else if (answer.startsWith('C')) tally.C++;
      else if (answer.startsWith('D')) tally.D++;
    });

    const maxEntry = Object.entries(tally).reduce((a, b) => (a[1] > b[1] ? a : b));
    const typeMap = { A: 'Planner', B: 'Builder', C: 'Connector', D: 'Explorer' };
    const finalType = typeMap[maxEntry[0]];

    setPersonalityType(finalType);
    setShowResults(true);
    localStorage.setItem('userType', finalType);
    // Optional navigation to results page:
    // navigate(`/results/${finalType}`);
  };

  const currentQuestion = questions[answers.length];

  return (
    <div className="quiz-container">
      {!showResults ? (
        <>
          <ProgressBar
            currentStep={answers.length + 1}
            totalSteps={questions.length}
          />
          {currentQuestion ? (
            <QuestionCard
              question={currentQuestion}
              onAnswer={handleAnswer}
              progress={answers.length + 1}
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
