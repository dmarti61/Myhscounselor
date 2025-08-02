import jsPDF from 'jspdf';
import { CAREER_STATS } from '../components/quiz/careerstats';
import { MBTI_MAP, generateNextStepPhrase } from '../components/quiz/mbtimap';
import { GUIDES_TEXT_CONTENT } from './guidestext'; // Assuming this file exists and is keyed by "College", "Community College", etc.

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

  // **UPDATED**: Pass userPreference to generateNextStepPhrase
  const nextStepText = generateNextStepPhrase(mbtiData, userPreference);
  doc.text('Recommended Next Step:', 10, y);
  y += 8;
  // This will include HTML tags, which jsPDF doesn't render. 
  // We'll strip them for the PDF to prevent literal tag display.
  const nextStepPlainText = nextStepText.replace(/<[^>]*>/g, '');
  const wrappedNextStepText = doc.splitTextToSize(nextStepPlainText, 180);
  doc.text(`- ${wrappedNextStepText.join('\n- ')}`, 14, y);
  y += wrappedNextStepText.length * 7; // Adjust y based on the number of lines
  y += 10;

  // **UPDATED**: Logic to find the correct guide key based on user preference
  let guideKey = null;
  if (userPreference) {
    // Attempt to match the guide key with the user's preference
    const formattedPreference = preference.charAt(0).toUpperCase() + preference.slice(1);
    if (formattedPreference === "Community") {
        guideKey = "Community College"; // Special case for "community"
    } else if (formattedPreference === "Trade") {
        guideKey = "Trade School"; // Special case for "trade"
    } else if (formattedPreference === "Job") {
        guideKey = "Direct Job Entry"; // Special case for "job"
    } else {
        guideKey = formattedPreference; // e.g., "College"
    }
  }

  // Fallback if the user's preference doesn't match a guide
  if (!guideKey && mbtiData.careers.length > 0) {
    const primaryPath = mbtiData.careers[0].postSchoolPath;
    if (primaryPath) {
      const formattedPrimary = primaryPath.charAt(0).toUpperCase() + primaryPath.slice(1);
      if (formattedPrimary === "Community") {
          guideKey = "Community College";
      } else if (formattedPrimary === "Trade") {
          guideKey = "Trade School";
      } else if (formattedPrimary === "Job") {
          guideKey = "Direct Job Entry";
      } else {
          guideKey = formattedPrimary;
      }
    }
  }

  const fullGuideContent = guideKey ? GUIDES_TEXT_CONTENT[guideKey] : null;

  if (fullGuideContent) {
    doc.addPage();
    doc.setFontSize(16);
    doc.text(`Appendix: ${guideKey} Guide`, 10, 20);
    doc.setFontSize(12);

    let yOffset = 30;
    const guideTextLines = doc.splitTextToSize(fullGuideContent.trim(), 180);

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
