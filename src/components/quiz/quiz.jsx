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
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questionKey, setQuestionKey] = useState(0); // NEW: force re-render

  const navigate = useNavigate();

  const handleAnswer = (dimension, letter) => {
    setSelectedAnswer(letter); // trigger highlight

    setTimeout(() => {
      // update MBTI letter count
      setCounts(prev => ({ ...prev, [letter]: prev[letter] + 1 }));

      if (step + 1 === questions.length) {
        // final question — build result and save
        const result = buildType();
        localStorage.setItem('mbti_result', JSON.stringify({
          type: result,
          expires: new Date().getTime() + 24 * 60 * 60 * 1000,
        }));
        navigate('/preferences', { state: { mbtiType: result } });
      } else {
        // move to next question
        setSelectedAnswer(null);             // clear selection
        setStep(prev => prev + 1);           // go to next step
        setQuestionKey(prev => prev + 1);    // force new component render
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
        key={questionKey} // 🔑 ensures re-render of each question
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