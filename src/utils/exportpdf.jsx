import jsPDF from 'jspdf';
import { CAREER_STATS } from '../components/quiz/careerstats';
import { MBTI_MAP } from '../components/quiz/mbtimap';
import { GUIDES_TEXT_CONTENT } from './guidestext'; // Import the new guides content

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

  // --- Summary Page Content ---
  const summaryContent = `
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
`;

  doc.setFont('Helvetica');
  doc.setFontSize(12);
  const summaryTextLines = doc.splitTextToSize(summaryContent.trim(), 180);
  doc.text(summaryTextLines, 10, 20);

  // --- Append Full Guide as Appendix based on recommendedNextStep ---
  const guideKey = mbtiData.recommendedNextStep; // This is 'College', 'Trade School', or 'Direct Entry'
  const fullGuideContent = GUIDES_TEXT_CONTENT[guideKey];

  if (fullGuideContent) {
    doc.addPage(); // Add a new page for the appendix

    doc.setFontSize(16);
    doc.text(`Appendix: ${guideKey} Guide`, 10, 20); // Dynamic title for the guide
    doc.setFontSize(12);

    let yOffset = 30;
    const guideTextLines = doc.splitTextToSize(fullGuideContent.trim(), 180);

    guideTextLines.forEach(line => {
      // Check if new page is needed before adding the line
      // 10 units for bottom margin roughly
      if (yOffset > doc.internal.pageSize.height - 20) {
        doc.addPage();
        yOffset = 20; // Reset yOffset for new page
      }
      doc.text(line, 10, yOffset);
      yOffset += 7; // Adjust line height
    });
  }

  doc.save(`${mbtiType}_Quiz_Results.pdf`);
};
