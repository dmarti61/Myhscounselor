import React, { useState } from 'react';
import questions from '../../data/questions';
import QuestionCard from './questioncard';
import ResultBadge from './resultbadge';

// Order matters: these four indices drive MBTI construction
const mbtiDimensions = ['EI', 'SN', 'TF', 'JP'];

// Map each of the 16 MBTI types to a broader career-mapping bucket
const mbtiToBucket = {
  /* Planner  */ ISTJ: 'Planner', ISFJ: 'Planner', ESTJ: 'Planner', ESFJ: 'Planner',
  /* Builder  */ ISTP: 'Builder', ISFP: 'Builder', ESTP: 'Builder', ESFP: 'Builder',
  /* Connector*/ INFJ: 'Connector', INFP: 'Connector', ENFJ: 'Connector', ENFP: 'Connector',
  /* Explorer */ INTJ: 'Explorer', INTP: 'Explorer', ENTJ: 'Explorer', ENTP: 'Explorer',
};

const Quiz = () => {
  const [answers,      setAnswers]      = useState({});   // { [id]: "E" | "I" | ... }
  const [showResults,  setShowResults]  = useState(false);
  const [mbtiType,     setMbtiType]     = useState('');   // e.g. "INTJ"
  const [bucketType,   setBucketType]   = useState('');   // e.g. "Explorer"

  /* ------------------------------------------------------------------ */
  /*                   HANDLE ANSWER SELECTION                           */
  /* ------------------------------------------------------------------ */
  const handleAnswer = (questionId, value) => {
    setAnswers(prev => {
      const updated = { ...prev, [questionId]: value };

      // All questions answered? → calculate results once then flip the view
      if (Object.keys(updated).length === questions.length) {
        calculateResults(updated);
        setShowResults(true);
      }
      return updated;
    });
  };

  /* ------------------------------------------------------------------ */
  /*                    CALCULATE MBTI & BUCKET                          */
  /* ------------------------------------------------------------------ */
  const calculateResults = (answersObj) => {
    // 1. Initialize tallies for each dimension
    const dimensionScores = {
      EI: { E: 0, I: 0 },
      SN: { S: 0, N: 0 },
      TF: { T: 0, F: 0 },
      JP: { J: 0, P: 0 },
    };

    // 2. Count answers
    questions.forEach(({ id, dimension }) => {
      const letter = answersObj[id];              // "E" | "I" | ...
      if (letter) dimensionScores[dimension][letter] += 1;
    });

    // 3. Build the 4-letter MBTI string
    const mbti = mbtiDimensions
      .map(dim => {
        const [[l1, c1], [l2, c2]] = Object.entries(dimensionScores[dim]);
        return c1 >= c2 ? l1 : l2;                // tie → first letter wins
      })
      .join('');

    setMbtiType(mbti);

    // 4. Map MBTI → bucket (fallback to Explorer just in case)
    const bucket = mbtiToBucket[mbti] || 'Explorer';
    setBucketType(bucket);

    // 5. Persist for later pages / refreshes
    localStorage.setItem('userType', bucket);
  };

  /* ------------------------------------------------------------------ */
  /*                                UI                                   */
  /* ------------------------------------------------------------------ */
  if (showResults) {
    return <ResultBadge type={bucketType} mbti={mbtiType} />;
  }

  // Current question = nth unanswered question
  const currentQuestion = questions[Object.keys(answers).length];

  return (
    <div className="quiz-container">
      {currentQuestion ? (
        <QuestionCard
          question={currentQuestion}
          onAnswer={value => handleAnswer(currentQuestion.id, value)}
          progress={Object.keys(answers).length + 1}
          totalQuestions={questions.length}
        />
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default Quiz;
