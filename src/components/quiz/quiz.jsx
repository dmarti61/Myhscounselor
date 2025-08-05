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
  const timerRef = useRef(null);

  const navigate = useNavigate();

  const handleAnswer = (dimension, letter, event) => {
    // 1. Instantly update the selected state to show the highlight
    setSelectedAnswer(letter);

    // 2. Clear any pending transitions to prevent a race condition
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    // 3. Blur the button
    if (event && event.target) {
      event.target.blur();
    }
    
    // 4. Update the counts immediately (no delay for this)
    setCounts(prev => ({ ...prev, [letter]: prev[letter] + 1 }));

    // 5. Use the timer ONLY for the visual transition
    timerRef.current = setTimeout(() => {
      if (step + 1 === questions.length) {
        const result = buildType();
        localStorage.setItem('mbti_result', JSON.stringify({
          type: result,
          expires: new Date().getTime() + 24 * 60 * 60 * 1000,
        }));
        navigate('/preferences', { state: { mbtiType: result } });
      } else {
        // CRITICAL FIX: Reset the state BEFORE moving to the next step
        setSelectedAnswer(null);
        setStep(prev => prev + 1);
        setQuestionKey(prev => prev + 1);
      }
      timerRef.current = null;
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
