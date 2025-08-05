// src/components/quiz/quiz.jsx
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
  // Use a state to store the currently selected answer
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const navigate = useNavigate();

  const handleAnswer = (dimension, letter) => {
    // Immediately set the selected answer to trigger the highlight
    setSelectedAnswer(letter);

    // Delay the rest of the logic to allow visual feedback
    setTimeout(() => {
      setCounts(prev => ({ ...prev, [letter]: prev[letter] + 1 }));

      if (step + 1 === questions.length) {
        const result = buildType();
        localStorage.setItem('mbti_result', JSON.stringify({
          type: result,
          expires: new Date().getTime() + 24 * 60 * 60 * 1000,
        }));
        navigate('/preferences', { state: { mbtiType: result } });
      } else {
        // Explicitly reset the selected answer before moving to the next question
        setSelectedAnswer(null);
        setStep(prev => prev + 1);
      }
    }, 250);
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
        // We can still use the key as a safeguard, but it's not strictly necessary with this approach
        key={step}
        question={current}
        progress={step + 1}
        totalQuestions={questions.length}
        // Pass the selectedAnswer state down as a prop
        selectedAnswer={selectedAnswer}
        onAnswer={(value) => handleAnswer(current.dimension, value)}
      />
    </div>
  );
};

export default Quiz;
