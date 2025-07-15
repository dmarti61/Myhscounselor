/* eslint react/prop-types: 0 */
import React, { useState } from 'react';
import questions from '../../data/questions';
import QuestionCard from './questioncard';
import ResultBadge from './resultbadge';
import ProgressBar from './progressbar'; // ✅ Make sure file name matches

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
      setComplete(true);
    } else {
      nextQuestion();
    }
  };

  const buildType = () => {
    const type = mbtiDimensions
      .map(dim => {
        const [first, second] = dim.split('');
        return counts[first] >= counts[second] ? first : second;
      })
      .join('')
      .toUpperCase();

    console.log("Computed MBTI type:", type); // ✅ for debugging
    return type;
  };

  if (complete) {
    const resultType = buildType();
    return <ResultBadge mbtiType={resultType} />;
  }

  const current = questions[step];

  return (
    <div>
      <ProgressBar currentStep={step + 1} totalSteps={questions.length} /> {/* ✅ FIXED PROP NAMES */}
      <QuestionCard
        key={current.id}
        question={current}
        step={step}
        total={questions.length}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
