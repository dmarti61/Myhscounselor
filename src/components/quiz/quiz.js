import React, { useState } from 'react';
import questions from '../../data/questions';
import QuestionCard from './questioncard';
import ResultBadge from './resultbadge';

const mbtiDimensions = ['EI', 'SN', 'TF', 'JP'];

const mbtiToBucket = {
  // Map 16 MBTI types to your 4 buckets
  // Planner: ISTJ, ISFJ, ESTJ, ESFJ
  ISTJ: 'Planner',
  ISFJ: 'Planner',
  ESTJ: 'Planner',
  ESFJ: 'Planner',

  // Builder: ISTP, ISFP, ESTP, ESFP
  ISTP: 'Builder',
  ISFP: 'Builder',
  ESTP: 'Builder',
  ESFP: 'Builder',

  // Connector: INFJ, INFP, ENFJ, ENFP
  INFJ: 'Connector',
  INFP: 'Connector',
  ENFJ: 'Connector',
  ENFP: 'Connector',

  // Explorer: INTJ, INTP, ENTJ, ENTP
  INTJ: 'Explorer',
  INTP: 'Explorer',
  ENTJ: 'Explorer',
  ENTP: 'Explorer',
};

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [mbtiType, setMbtiType] = useState('');
  const [bucketType, setBucketType] = useState('');

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => {
      const updated = { ...prev, [questionId]: value };

      // If all questions answered
      if (Object.keys(updated).length === questions.length) {
        calculateResults(updated);
        setShowResults(true);
      }

      return updated;
    });
  };

  const calculateResults = (answersObj) => {
    // Tally counts for each dimension pair
    const dimensionScores = {
      EI: { E: 0, I: 0 },
      SN: { S: 0, N: 0 },
      TF: { T: 0, F: 0 },
      JP: { J: 0, P: 0 },
    };

    // Sum up each answer value per dimension
    questions.forEach(({ id, dimension }) => {
      const answer = answersObj[id];
      if (answer && dimensionScores[dimension]) {
        dimensionScores[dimension][answer]++;
      }
    });

    // Build MBTI string by picking the side with more points for each dimension
    let mbti = '';
    mbtiDimensions.forEach((dim) => {
      const scores = dimensionScores[dim];
      mbti += scores[Object.keys(scores).reduce((a, b) => (scores[a] >= scores[b] ? a : b))];
    });

    // The above creates something like 'EI' + 'SN' + 'TF' + 'JP' => need to convert to letter
    // Instead, better to pick the letter with higher count in dimension directly
    mbti = mbtiDimensions
      .map((dim) => {
        const scores = dimensionScores[dim];
        return scores[Object.keys(scores).reduce((a, b) => (scores[a] >= scores[b] ? a : b))];
      })
      .map((val, idx) => {
        // Actually, the above logic is wrong; fix below

        // Fix: use this to get the letter with highest count for dimension:
        const scores = dimensionScores[mbtiDimensions[idx]];
        return scores.E !== undefined
          ? scores.E > scores.I
            ? 'E'
            : 'I'
          : scores.S !== undefined
          ? scores.S > scores.N
            ? 'S'
            : 'N'
          : scores.T !== undefined
          ? scores.T > scores.F
            ? 'T'
            : 'F'
          : scores.J !== undefined
          ? scores.J > scores.P
            ? 'J'
            : 'P'
          : '';
      })
      .join('');

    setMbtiType(mbti);

    // Map MBTI to bucket
    const bucket = mbtiToBucket[mbti] || 'Explorer'; // fallback
    setBucketType(bucket);

    // Store bucket in localStorage
    localStorage.setItem('userType', bucket);
  };

  if (showResults) {
    return <ResultBadge type={bucketType} mbti={mbtiType} />;
  }

  // Current question index by number of answers
  const currentQuestion = questions[Object.keys(answers).length];

  return (
    <div className="quiz-container">
      {currentQuestion ? (
        <QuestionCard
          question={currentQuestion}
          onAnswer={(value) => handleAnswer(currentQuestion.id, value)}
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
