// Quiz.js
import React, { useState } from 'react';
import questions from '../../data/questions';
import QuestionCard from './QuestionCard';
import ResultBadge from './ResultBadge';

const questions = [
  {
    id: 1,
    prompt: 'When solving a problem, I prefer...',
    options: [
      'A clear step-by-step plan',
      'Jumping in hands-on',
      'Talking it out with others',
      'Exploring and adjusting as I go'
    ]
  },
  {
    id: 2,
    prompt: 'My ideal work environment is...',
    options: [
      'Organized and predictable',
      'Active and physical',
      'Collaborative and social',
      'Flexible and ever-changing'
    ]
  },
  {
    id: 3,
    prompt: 'I feel most confident when...',
    options: [
      'I’ve mapped out every detail',
      'I’m building or fixing something',
      'I’m helping someone directly',
      'I’m trying something new'
    ]
  },
  {
    id: 4,
    prompt: 'I prefer tasks that...',
    options: [
      'Have clear instructions',
      'Let me work with my hands',
      'Involve people and emotions',
      'Let me experiment and adapt'
    ]
  },
  {
    id: 5,
    prompt: 'When making decisions, I...',
    options: [
      'Weigh pros and cons carefully',
      'Trust my instincts and act',
      'Ask others for input',
      'Go with what feels exciting'
    ]
  },
  {
    id: 6,
    prompt: 'Success means...',
    options: [
      'Achieving long-term goals',
      'Getting things done efficiently',
      'Making a difference for others',
      'Exploring new possibilities'
    ]
  },
  {
    id: 7,
    prompt: 'I’m most energized by...',
    options: [
      'Planning and organizing',
      'Doing and building',
      'Connecting and communicating',
      'Discovering and exploring'
    ]
  },
  {
    id: 8,
    prompt: 'I handle stress by...',
    options: [
      'Creating a plan',
      'Fixing what’s broken',
      'Talking it out',
      'Changing my environment'
    ]
  },
  {
    id: 9,
    prompt: 'I learn best when...',
    options: [
      'I study and take notes',
      'I try it myself',
      'I discuss it with others',
      'I explore freely'
    ]
  },
  {
    id: 10,
    prompt: 'I’m most proud of...',
    options: [
      'My organization and discipline',
      'My ability to build or fix things',
      'My relationships and empathy',
      'My curiosity and adaptability'
    ]
  },
  {
    id: 11,
    prompt: 'I prefer projects that...',
    options: [
      'Have a clear timeline',
      'Involve tools or physical work',
      'Require teamwork',
      'Let me explore new ideas'
    ]
  },
  {
    id: 12,
    prompt: 'I’m most likely to say...',
    options: [
      '“Let’s make a plan”',
      '“Let’s get to work”',
      '“Let’s talk it through”',
      '“Let’s try something new”'
    ]
  }
];

const Quiz = () => {
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [personalityType, setPersonalityType] = useState('');

  const handleAnswer = (option) => {
    setAnswers((prev) => [...prev, option]);
    if (answers.length === questions.length - 1) {
      calculateResults([...answers, option]);
    }
  };

  const calculateResults = (finalAnswers) => {
    const tally = { A: 0, B: 0, C: 0, D: 0 };
    finalAnswers.forEach((answer) => {
      if (answer.startsWith('A')) tally.A++;
      if (answer.startsWith('B')) tally.B++;
      if (answer.startsWith('C')) tally.C++;
      if (answer.startsWith('D')) tally.D++;
    });

    const max = Object.entries(tally).reduce((a, b) => (a[1] > b[1] ? a : b));
    const typeMap = { A: 'Planner', B: 'Builder', C: 'Connector', D: 'Explorer' };
    setPersonalityType(typeMap[max[0]]);
    setShowResults(true);
  };

  return (
    <div className="quiz-container">
      {!showResults ? (
        <QuestionCard
          question={questions[answers.length]}
          onAnswer={handleAnswer}
          progress={answers.length + 1}
        />
      ) : (
        <ResultBadge type={personalityType} />
      )}
    </div>
  );
};

export default Quiz;
