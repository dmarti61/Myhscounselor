// src/pages/ExploreCareers.js

import React, { useMemo } from 'react';
import styles from '../styles/explore.module.css';
import { MBTI_MAP } from '../components/quiz/mbtimap';

const getUniqueCareers = () => {
  const allCareers = new Map();
  Object.values(MBTI_MAP).forEach(({ careers }) => {
    careers.forEach(career => {
      // Use the career title as a unique key to prevent duplicates
      if (!allCareers.has(career.title)) {
        allCareers.set(career.title, career);
      }
    });
  });
  return Array.from(allCareers.values());
};

const groupCareersByEducation = (careers) => {
  const grouped = careers.reduce((acc, career) => {
    const educationLevel = career.education || 'Other';
    if (!acc[educationLevel]) {
      acc[educationLevel] = [];
    }
    acc[educationLevel].push(career);
    return acc;
  }, {});

  // Sort the keys (education levels) for consistent display order
  const sortedKeys = Object.keys(grouped).sort();

  // Create a new object with sorted keys
  const sortedGrouped = {};
  sortedKeys.forEach(key => {
    sortedGrouped[key] = grouped[key];
  });

  return sortedGrouped;
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
  const uniqueCareers = useMemo(() => getUniqueCareers(), []);
  const groupedCareers = useMemo(() => groupCareersByEducation(uniqueCareers), [uniqueCareers]);

  return (
    <div className={styles.container}>
      <h1>Explore Careers by Educational Path</h1>
      <p className={styles.intro}>
        Not ready for the quiz? Start by exploring careers that share similar skills and interests. Careers are grouped into "clusters" to help you find the right fit.
      </p>
      {Object.entries(groupedCareers).map(([educationLevel, careers]) => (
        <section key={educationLevel} className={styles.section}>
          <h2 className={styles.pathway}>{educationLevel}</h2>
          <div className={styles.cardGrid}>
            {careers.map(career => (
              <CareerCard key={career.title} {...career} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ExploreCareers;