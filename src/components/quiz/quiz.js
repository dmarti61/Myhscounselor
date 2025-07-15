import React, { useState } from 'react';
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

  const nextQuestion = () => setStep(prev => prev + 1);

  const handleAnswer = (dimension, letter) => {
    setCounts(prev => ({ ...prev, [letter]: prev[letter] + 1 }));

    if (step + 1 === questions.length) {
      const resultType = buildType();
      const expiresAt = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hrs
      localStorage.setItem('mbti_result', JSON.stringify({ type: resultType, expires: expiresAt }));
      setComplete(true);
    } else {
      nextQuestion();
    }
  };

  const buildType = () => {
    return mbtiDimensions
      .map(dim => {
        const [first, second] = dim.split('');
        return counts[first] >= counts[second] ? first : second;
      })
      .join('')
      .toUpperCase();
  };

  if (complete) {
    const result = buildType();
    return <ResultBadge mbtiType={result} />;
  }

  const current = questions[step];

  return (
    <div>
      <ProgressBar current={step + 1} total={questions.length} />
      <QuestionCard
        key={current.id}
        question={current}
        step={step + 1}
        total={questions.length}
        onAnswer={(letter) => handleAnswer(current.dimension, letter)}
      />
    </div>
  );
};

export default Quiz;
