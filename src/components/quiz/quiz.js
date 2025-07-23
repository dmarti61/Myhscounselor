import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../../data/questions';
import QuestionCard from './questioncard';
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
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [renderId, setRenderId] = useState(0); // Forces rerender

  const navigate = useNavigate();

  const handleAnswer = (dimension, letter) => {
    setSelectedAnswer(letter);
    setCounts(prev => ({ ...prev, [letter]: prev[letter] + 1 }));

    setTimeout(() => {
      if (step + 1 === questions.length) {
        const result = buildType();
        localStorage.setItem('mbti_result', JSON.stringify({
          type: result,
          expires: new Date().getTime() + 24 * 60 * 60 * 1000,
        }));

        // 🔁 Redirect to preference quiz
        navigate('/preferences', { state: { mbtiType: result } });
      } else {
        setStep(prev => prev + 1);
        setSelectedAnswer(null);
        setRenderId(prev => prev + 1); // Forces QuestionCard remount
      }
    }, 250); // Allow brief visual feedback
  };

  const buildType = () => {
    return mbtiDimensions
      .map(dim => {
        const [first, second] = dim.split('');
        return counts[first] >= counts[second] ? first : second;
      })
      .join('');
  };

  const current = questions[step];

  return (
    <div>
      <ProgressBar currentStep={step + 1} totalSteps={questions.length} />
      <QuestionCard
        key={renderId}
        question={current}
        progress={step + 1}
        totalQuestions={questions.length}
        selectedAnswer={selectedAnswer}
        onAnswer={(value) => handleAnswer(current.dimension, value)}
      />
    </div>
  );
};

export default Quiz;
