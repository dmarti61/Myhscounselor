// Quiz.js
import React, { useState } from 'react';
import questions from '../../data/questions';
import QuestionCard from './QuestionCard';
import ResultBadge from './ResultBadge';
import ProgressBar from './ProgressBar';

const Quiz = () => {
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5; // update based on your quiz
  const [personalityType, setPersonalityType] = useState('');

  const handleAnswer = (option) => {
    setAnswers((prev) => [...prev, option]);
    if (answers.length === questions.length - 1) {
      calculateResults([...answers, option]);
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
    setPersonalityType(typeMap[maxEntry[0]]);
    setShowResults(true);
  };

  return (
  <div className="quiz-container">
    {!showResults ? (
      <>
        <ProgressBar
          currentStep={answers.length + 1}
          totalSteps={questions.length}
        />
        <QuestionCard
          question={questions[answers.length]}
          onAnswer={handleAnswer}
          progress={answers.length + 1}
        />
      </>
    ) : (
      <ResultBadge type={personalityType} />
    )}
  </div>
);
);
export default Quiz;
