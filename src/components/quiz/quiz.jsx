// src/components/quiz/quiz.jsx
import React, { useState } from 'react';
// ... other imports

const Quiz = () => {
  // ... other state
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const navigate = useNavigate();

  const handleAnswer = (dimension, letter) => {
    // 1. Immediately set the selected answer to show the highlight.
    // This triggers a re-render of QuestionCard with the new prop.
    setSelectedAnswer(letter);

    // 2. Delay the rest of the logic. This is for visual feedback.
    setTimeout(() => {
      // ... update counts

      if (step + 1 === questions.length) {
        // ... handle end of quiz
      } else {
        // 3. This is the crucial part. Reset the selectedAnswer *before*
        // you update the step to the next question.
        setSelectedAnswer(null);
        setStep(prev => prev + 1);
      }
    }, 250);
  };

  // ... other functions

  const current = questions[step];

  return (
    <div>
      <ProgressBar currentStep={step + 1} totalSteps={questions.length} />
      <QuestionCard
        // We removed the key prop in our last discussion, but it is not harmful to have.
        // The selectedAnswer prop is what's truly handling the reset.
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
