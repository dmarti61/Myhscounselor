/* eslint react/prop-types: 0 */
import React, { useState } from 'react';
import questions from '../../data/questions';
import QuestionCard from './questioncard';
import ResultBadge from './resultbadge';

const mbtiDimensions = ['EI', 'SN', 'TF', 'JP']; // keep this order!

const Quiz = () => {
  const [step, setStep] = useState(0);                 // index of current question
  const [counts, setCounts] = useState({               // tally of answers per letter
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0,
  });
  const [complete, setComplete] = useState(false);

  // helpers ---------------------------------------------------------------
  const nextQuestion = () => setStep(prev => prev + 1);

  const handleAnswer = (dimension, letter) => {
    setCounts(prev => ({ ...prev, [letter]: prev[letter] + 1 }));
    if (step + 1 === questions.length) {
      setComplete(true);
    } else {
      nextQuestion();
    }
  };

  const buildType = () => {
    // build a 4-letter type by picking the higher count in each dimension
    return mbtiDimensions
      .map(dim => {
        const [first, second] = dim.split('');
        return counts[first] >= counts[second] ? first : second;
      })
      .join('')
      .toUpperCase();               // **** key fix ****
  };

  // render ---------------------------------------------------------------
  if (complete) {
    return <ResultBadge mbtiType={buildType()} />;
  }

  const current = questions[step];
  return (
    <QuestionCard
      key={current.id}
      question={current}
      step={step}
      total={questions.length}
      onAnswer={handleAnswer}
    />
  );
};

export default Quiz;
