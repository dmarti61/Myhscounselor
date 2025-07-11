// Quiz.js
import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import ResultBadge from './ResultBadge';

const questions = [
  {
    id: 1,
    prompt: 'When solving a problem, I prefer...',
    options: ['A clear step-by-step plan', 'Jumping in hands-on', 'Talking it out with others', 'Exploring and adjusting as I go']
  },
  // Add 11 more questions here with similar structure
];

const Quiz = () => {
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [personalityType, setPersonalityType] = useState('');

  const handleAnswer = (option) => {
    setAnswers((prev) => [...prev, option]);
    if (answers.length === questions.length - 1) {
      calculateResults([...answers, option]);
    }
  };

  const calculateResults = (finalAnswers) => {
    // Simple logic: tally answer types (A, B, C, D) → match to Builder, Planner, Connector, Explorer
    const tally = { A: 0, B: 0, C: 0, D: 0 };
    finalAnswers.forEach((answer) => {
      if (answer.startsWith('A')) tally.A++;
      if (answer.startsWith('B')) tally.B++;
      if (answer.startsWith('C')) tally.C++;
      if (answer.startsWith('D')) tally.D++;
    });

    const max = Object.entries(tally).reduce((a, b) => (a[1] > b[1] ? a : b));
    const typeMap = { A: 'Planner', B: 'Builder', C: 'Connector', D: 'Explorer' };
    setPersonalityType(typeMap[max[0]]);
    setShowResults(true);
  };

  return (
    <div className="quiz-container">
      {!showResults ? (
        <QuestionCard
          question={questions[answers.length]}
          onAnswer={handleAnswer}
          progress={answers.length + 1}
        />
      ) : (
        <ResultBadge type={personalityType} />
      )}
    </div>
  );
};

export default Quiz;
