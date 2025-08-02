import jsPDF from 'jspdf';
import { CAREER_STATS } from '../components/quiz/careerstats';
import { MBTI_MAP, generateNextStepPhrase } from '../components/quiz/mbtimap';
import { GUIDES_TEXT_CONTENT } from './guidestext';

export const exportResultsAsPDF = ({ type, preference }) => {
  const doc = new jsPDF();
  const mbtiType = type.toUpperCase();
  const mbtiData = MBTI_MAP[mbtiType];

  if (!mbtiData) {
    console.error(`MBTI data not found for type: ${mbtiType}`);
    return;
  }

  const allCareers = [...mbtiData.careers];
  let starredCareers = [];
  let nonStarredCareers = [];

  const userPreference = preference ? preference.toLowerCase() : null;

  if (userPreference) {
    starredCareers = allCareers.filter(
      (c) => c.postSchoolPath?.toLowerCase() === userPreference
    );
    nonStarredCareers = allCareers.filter(
      (c) => c.postSchoolPath?.toLowerCase() !== userPreference
    );
  } else {
    nonStarredCareers = allCareers;
  }

  const careersToDisplay = [...starredCareers, ...nonStarredCareers];
  const topCareer = careersToDisplay[0];
  const topCareerStats = topCareer?.title && CAREER_STATS[topCareer.title]
    ? CAREER_STATS[topCareer.title]
    : {};

  // === Summary Page ===
  doc.setFont('Helvetica');
  doc.setFontSize(18);
  doc.text(`MyHSCounselor Quiz Results`, 10, 20);

  doc.setFontSize(14);
  doc.text(`Personality Type: ${mbtiType}`, 10, 30);

  if (userPreference) {
    doc.setFontSize(12);
    const found = starredCareers.length > 0;
    doc.text(
      `Career Pathway Preference: ${found ? preference : `${preference} (no direct match found)`}`,
      10,
      38
    );
  }

  let y = userPreference ? 48 : 42;
  doc.setFontSize(12);
  doc.text('Strengths:', 10, y);
  y += 8;
  mbtiData.strengths.forEach((s) => {
    doc.text(`- ${s}`, 14, y);
    y += 7;
  });

  y += 5;
  doc.text('Suggested Careers:', 10, y);
  y += 8;

  careersToDisplay.forEach((c) => {
    const isStarred = userPreference && c.postSchoolPath?.toLowerCase() === userPreference;
    const line = `${isStarred ? '★ ' : ''}- ${c.title} (${c.pathway})`;
    doc.text(line, 14, y);
    y += 7;
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
  });

  y += 5;
  doc.text(`Top Career Snapshot: ${topCareer?.title || 'N/A'}`, 10, y);
  y += 8;
  doc.text(`- Salary: ${topCareerStats.salary || 'N/A'}`, 14, y);
  y += 7;
  doc.text(`- Outlook: ${topCareerStats.outlook || 'N/A'}`, 14, y);
  y += 7;
  doc.text(`- Education: ${topCareerStats.education || 'N/A'}`, 14, y);
  y += 10;

  // Use the new function to generate the text
  const nextStepText = generateNextStepPhrase(mbtiData);
  doc.text('Recommended Next Step:', 10, y);
  y += 8;
  // This will include HTML tags, which jsPDF doesn't render. 
  // You might want to strip them or handle them separately.
  // For simplicity, let's just use the plain text.
  doc.text(`- ${nextStepText.replace(/<[^>]*>/g, '')}`, 14, y); 
  y += 10;

  if (
    mbtiData.recommendedNextStep === 'College' &&
    mbtiData.relevantMajors?.length
  ) {
    doc.text('Relevant College Majors:', 10, y);
    y += 8;
    mbtiData.relevantMajors.forEach((m) => {
      doc.text(`- ${m}`, 14, y);
      y += 7;
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    });
  }

  const guideKey = mbtiData.recommendedNextStep;
  const fullGuideContent = GUIDES_TEXT_CONTENT[guideKey];

  if (fullGuideContent) {
    doc.addPage();
    doc.setFontSize(16);
    doc.text(`Appendix: ${guideKey} Guide`, 10, 20);
    doc.setFontSize(12);

    let yOffset = 30;
    const guideTextLines = doc.splitTextToSize(
      fullGuideContent.trim(),
      180
    );

    guideTextLines.forEach((line) => {
      if (yOffset > doc.internal.pageSize.height - 20) {
        doc.addPage();
        yOffset = 20;
      }
      doc.text(line, 10, yOffset);
      yOffset += 7;
    });
  }

  doc.save(`${mbtiType}_Quiz_Results.pdf`);
};
