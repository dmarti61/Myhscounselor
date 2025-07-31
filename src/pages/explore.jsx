// src/pages/ExploreCareers.js

import React from 'react';
import '../styles/explore.css';
import { MBTI_MAP } from '../components/quiz/mbtimap';

const groupCareersByPathway = () => {
  const pathwayMap = {};

  Object.values(MBTI_MAP).forEach(({ careers }) => {
    careers.forEach(career => {
      const key = career.pathway || 'Other';
      if (!pathwayMap[key]) {
        pathwayMap[key] = new Map(); // Use Map to avoid duplicates
      }
      pathwayMap[key].set(career.title, career); // Deduplicate by title
    });
  });

  // Convert Maps to arrays
  const result = {};
  Object.entries(pathwayMap).forEach(([pathway, careerMap]) => {
    result[pathway] = Array.from(careerMap.values());
  });

  return result;
};

const CareerCard = ({ title, salary, education, outlook }) => (
  <div className={styles.card}>
    <h4>{title}</h4>
    <p><strong>Salary:</strong> {salary}</p>
    <p><strong>Education:</strong> {education}</p>
    <p><strong>Job Outlook:</strong> {outlook}</p>
  </div>
);

const ExploreCareers = () => {
  const groupedCareers = groupCareersByPathway();

  return (
    <div className={styles.container}>
      <h1>Explore Careers by Pathway</h1>
      <p className={styles.intro}>Not ready for the quiz? Start by exploring real careers grouped by pathway.</p>

      {Object.entries(groupedCareers).map(([pathway, careers]) => (
        <section key={pathway} className={styles.section}>
          <h2 className={styles.pathway}>{pathway}</h2>
          <div className={styles.cardGrid}>
            {careers.map((career, index) => (
              <CareerCard key={index} {...career} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ExploreCareers;
