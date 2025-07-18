import React, { useState, useEffect } from 'react';
import questions from '../../data/questions';
import QuestionCard from './questioncard';
import ResultBadge from './resultbadge';
import ProgressBar from './progressbar';

const mbtiDimensions = ['EI', 'SN', 'TF', 'JP'];

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [counts, setCounts] = useState({
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0,
  });
  const [complete, setComplete] = useState(false);

  const handleAnswer = (dimension, letter) => {
    setCounts(prev => ({ ...prev, [letter]: prev[letter] + 1 }));

    if (step + 1 === questions.length) {
      setComplete(true);
    } else {
      setStep(prev => prev + 1);
    }
  };

  const buildType = () => {
    return mbtiDimensions
      .map(dim => {
        const [first, second] = dim.split('');
        return counts[first] >= counts[second] ? first : second;
      })
      .join('');
  };

  // Save MBTI result to localStorage on completion
  useEffect(() => {
    if (complete) {
      const result = buildType();
      localStorage.setItem('mbti_result', JSON.stringify({
        type: result,
        expires: new Date().getTime() + 24 * 60 * 60 * 1000 // expires in 24 hours
      }));
    }
  }, [complete]);

  if (complete) {
    return <ResultBadge mbtiType={buildType()} />;
  }

  const current = questions[step];

  return (
    <div>
      <ProgressBar currentStep={step + 1} totalSteps={questions.length} />
      <QuestionCard
        key={current.id}
        question={current}
        progress={step + 1}
        totalQuestions={questions.length}
        onAnswer={(value) => handleAnswer(current.dimension, value)}
      />
    </div>
  );
};

export default Quiz;
