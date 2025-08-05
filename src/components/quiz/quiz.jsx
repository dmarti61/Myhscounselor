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
  // Add a state to manage the selected answer for the *current* question
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const navigate = useNavigate();

  const handleAnswer = (dimension, letter) => {
    // 1. Immediately set the selected answer to show the highlight
    setSelectedAnswer(letter);

    // 2. Schedule the rest of the logic after a brief delay
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
        // 3. Before moving to the next question, reset the selected answer state
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
        // We can remove the key={step} prop here because the selectedAnswer prop will handle the reset
        // The key is still a valid approach, but with this change, it's no longer necessary
        question={current}
        progress={step + 1}
        totalQuestions={questions.length}
        selectedAnswer={selectedAnswer} // Pass the selected answer state to the child
        onAnswer={(value) => handleAnswer(current.dimension, value)}
      />
    </div>
  );
};

export default Quiz;
