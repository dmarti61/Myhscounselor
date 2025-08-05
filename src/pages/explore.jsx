// src/pages/ExploreCareers.js

import React, { useMemo } from 'react';
import styles from '../styles/explore.module.css';
import { MBTI_MAP } from '../components/quiz/mbtimap';
import { CAREER_STATS } from '../components/quiz/careerstats';
import { BLS_MAP } from '../components/quiz/blsmap';

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
    // Check for `postSchoolPath` as the education level
    const educationLevel = career.postSchoolPath || 'Other';
    if (!acc[educationLevel]) {
      acc[educationLevel] = [];
    }
    acc[educationLevel].push(career);
    return acc;
  }, {});

  // Sort the keys (education levels) for consistent display order
  // A custom order is used to place them logically
  const customOrder = ["college", "community", "trade", "job", "other"];
  const sortedKeys = Object.keys(grouped).sort((a, b) => {
    return customOrder.indexOf(a.toLowerCase()) - customOrder.indexOf(b.toLowerCase());
  });

  // Create a new object with sorted keys
  const sortedGrouped = {};
  sortedKeys.forEach(key => {
    // Capitalize the first letter for display
    const displayKey = key.charAt(0).toUpperCase() + key.slice(1);
    sortedGrouped[displayKey] = grouped[key];
  });

  return sortedGrouped;
};

// **UPDATED** CareerCard to use new data structure
const CareerCard = ({ title, pathway, description, link }) => (
  <div className={styles.card}>
    <h4>{title}</h4>
    <p><strong>Career Pathway:</strong> {pathway}</p>
    <p>{description}</p>
      {detailedStats.soc_code && BLS_MAP[detailedStats.soc_code] && (
                        <p className="bls-link">
                        <a href={`https://www.bls.gov/ooh/${BLS_MAP[detailedStats.soc_code]}.htm`} target="_blank" rel="noopener noreferrer">
                        More info from BLS ({detailedStats.soc_code})
                        </a>
                        </p>
                      )}
  </div>
);

const ExploreCareers = () => {
  const uniqueCareers = useMemo(() => getUniqueCareers(), []);
  const groupedCareers = useMemo(() => groupCareersByEducation(uniqueCareers), [uniqueCareers]);

  return (
    <div className={styles.container}>
      <h1>Explore Careers by Educational Path</h1>
      <p className={styles.intro}>
        Not ready for the quiz? Start by exploring careers that share similar skills and interests. Careers are grouped by the most common educational path.
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
