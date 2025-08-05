import React, { useState, useRef } from 'react';
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
  const [questionKey, setQuestionKey] = useState(0);
  const timerRef = useRef(null); // NEW: Create a ref to store the timer ID

  const navigate = useNavigate();

  const handleAnswer = (dimension, letter, event) => {
    // Immediately set the selected answer to highlight the button
    setSelectedAnswer(letter);
    
    // Clear any existing timer to prevent a race condition from a quick click
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    // Use the event object to blur the button and remove browser focus
    if (event && event.target) {
      event.target.blur();
    }
    
    // Store the new timer ID in the ref
    timerRef.current = setTimeout(() => {
      // All the transition logic is now here
      setCounts(prev => ({ ...prev, [letter]: prev[letter] + 1 }));

      if (step + 1 === questions.length) {
        const result = buildType();
        localStorage.setItem('mbti_result', JSON.stringify({
          type: result,
          expires: new Date().getTime() + 24 * 60 * 60 * 1000,
        }));
        navigate('/preferences', { state: { mbtiType: result } });
      } else {
        setSelectedAnswer(null);
        setStep(prev => prev + 1);
        setQuestionKey(prev => prev + 1);
      }
      timerRef.current = null; // Clear the ref after the timer runs
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
        key={questionKey}
        question={current}
        progress={step + 1}
        totalQuestions={questions.length}
        selectedAnswer={selectedAnswer}
        onAnswer={(value, event) => handleAnswer(current.dimension, value, event)}
      />
    </div>
  );
};

export default Quiz;
