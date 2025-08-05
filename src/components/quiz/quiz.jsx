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
  const [questionKey, setQuestionKey] = useState(0);

  const navigate = useNavigate();

  const handleAnswer = (dimension, letter, event) => {
    // 1. Immediately set the selected answer to trigger the highlight
    setSelectedAnswer(letter);

    // 2. Disable the button and remove browser focus to prevent multiple clicks
    if (event && event.target) {
      event.target.blur();
    }

    // 3. Use a setTimeout to handle all other logic AFTER the highlight is visible.
    // This removes the race condition.
    setTimeout(() => {
      // Update MBTI letter count
      setCounts(prev => ({ ...prev, [letter]: prev[letter] + 1 }));

      // Check if it's the final question
      if (step + 1 === questions.length) {
        // Build and save the result
        const result = buildType();
        localStorage.setItem('mbti_result', JSON.stringify({
          type: result,
          expires: new Date().getTime() + 24 * 60 * 60 * 1000,
        }));
        navigate('/preferences', { state: { mbtiType: result } });
      } else {
        // Move to the next question
        setSelectedAnswer(null);          // Clear the selection for the next question
        setStep(prev => prev + 1);        // Go to the next step
        setQuestionKey(prev => prev + 1); // Force a new component render
      }
    }, 250); // This delay is now for the *transition*, not the entire logic.
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
