// src/utils/exportpdf.js

import jsPDF from 'jspdf';
import { CAREER_STATS } from '../components/quiz/careerstats';
import { MBTI_MAP } from '../components/quiz/mbtimap';

export const exportResultsAsPDF = ({ type, preference }) => {
  const doc = new jsPDF();
  const mbtiType = type.toUpperCase();
  const mbtiData = MBTI_MAP[mbtiType];

  if (!mbtiData) {
    console.error(`MBTI data not found for type: ${mbtiType}`);
    return;
  }

  let careersToDisplay = [...mbtiData.careers];
  if (preference) {
    const filtered = careersToDisplay.filter(c =>
      c.pathway.toLowerCase() === preference.toLowerCase()
    );
    careersToDisplay = filtered.length > 0 ? filtered : careersToDisplay;
  }

  const topCareer = careersToDisplay[0];
  const topCareerStats = topCareer?.blsCode ? CAREER_STATS[topCareer.blsCode] || {} : {};

  let majorsSection = '';
  if (mbtiData.recommendedNextStep === 'College' && mbtiData.relevantMajors && mbtiData.relevantMajors.length > 0) {
    majorsSection = `
---

Relevant College Majors:
${mbtiData.relevantMajors.map(m => `- ${m}`).join('\n')}
`;
  }

  const content = `
MyHSCounselor Quiz Results

Personality Type: ${mbtiType}

---

Strengths:
${mbtiData.strengths.map(s => `- ${s}`).join('\n')}

---

Suggested Careers:
${careersToDisplay.map(c => `- ${c.name} (${c.pathway})`).join('\n')}

---

Top Career Snapshot (${topCareer?.name || 'N/A'}):
- Salary: ${topCareerStats.salary || 'N/A'}
- Outlook: ${topCareerStats.outlook || 'N/A'}
- Education: ${topCareerStats.education || 'N/A'}

---

Recommended Next Step:
${mbtiData.recommendedNextStep}
${majorsSection}
`; // majorsSection is conditionally appended here

  doc.setFont('Helvetica');
  doc.setFontSize(12);
  const textLines = doc.splitTextToSize(content.trim(), 180);
  doc.text(textLines, 10, 20);

  doc.save(`${mbtiType}_Quiz_Results.pdf`);
};
