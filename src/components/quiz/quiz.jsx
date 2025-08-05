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
    // LOG 1: Fired on every click.
    console.log(`-- Click Event --`);
    console.log(`Answering Q${step + 1} with value: ${letter}`);

    // Check for and clear any existing timer
    if (timerRef.current) {
      console.log('LOG 2: Clearing previous timer to prevent race condition.');
      clearTimeout(timerRef.current);
    }
    
    setSelectedAnswer(letter);

    if (event && event.target) {
      event.target.blur();
    }
    
    // LOG 3: The timer is set. Look for this before the transition.
    console.log('LOG 3: Setting a new timer for the transition.');
    timerRef.current = setTimeout(() => {
      // All the transition logic is inside here.
      console.log(`LOG 4: Timer for Q${step + 1} has executed.`);
      
      setCounts(prev => {
        const newCounts = { ...prev, [letter]: prev[letter] + 1 };
        console.log('LOG 5: Updated counts:', newCounts);
        return newCounts;
      });

      if (step + 1 === questions.length) {
        // Final question logic
        const result = buildType();
        localStorage.setItem('mbti_result', JSON.stringify({
          type: result,
          expires: new Date().getTime() + 24 * 60 * 60 * 1000,
        }));
        navigate('/preferences', { state: { mbtiType: result } });
      } else {
        // LOG 6: Transitioning to the next question.
        console.log(`LOG 6: Transitioning to Q${step + 2}.`);
        setSelectedAnswer(null);
        setStep(prev => prev + 1);
        setQuestionKey(prev => prev + 1);
      }
      timerRef.current = null;
      console.log('LOG 7: Timer has finished and is cleared.');
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
