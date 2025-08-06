import jsPDF from 'jspdf';
import { CAREER_STATS } from '../components/quiz/careerstats';
import { MBTI_MAP, generateNextStepPhrase } from '../components/quiz/mbtimap';
import { GUIDES_TEXT_CONTENT } from './guidestext';

// Import the logo image
import logo from '../../public/logo.png';
// Import the single custom font file you have
// IMPORTANT: Make sure `inter.js` is in the same directory as this file.
import { interRegular } from './inter.js';

export const exportResultsAsPDF = ({ type, preference }) => {
  const doc = new jsPDF('p', 'mm', 'a4');
  const mbtiType = type.toUpperCase();
  const mbtiData = MBTI_MAP[mbtiType];
  const pageHeight = doc.internal.pageSize.height;
  const websiteURL = 'https://www.myhscounselor.com';

  if (!mbtiData) {
    console.error(`MBTI data not found for type: ${mbtiType}`);
    return;
  }

  // --- Add the custom Inter font ---
  // Step 1: Add the Base64-encoded font file to the PDF's virtual file system (VFS)
  doc.addFileToVFS('Inter-Regular.ttf', interRegular);
  
  // Step 2: Add the font to the document so it can be used by name
  doc.addFont('Inter-Regular.ttf', 'Inter', 'normal');
  
  // Step 3: Set 'Inter' as the default font for the document
  doc.setFont('Inter');

  // Set up font styles that match the CSS
  const primaryColor = '#0056b3';
  const secondaryColor = '#28a745';
  const accentColor = '#007bff';
  const textColor = '#333';

  // --- Summary Page ---

  // Add a dark blue rectangle as the background for the logo
  doc.setFillColor(0, 86, 179);
  doc.rect(0, 0, doc.internal.pageSize.width, 30, 'F');

  // Add the logo on top of the background
  const logoWidth = 60;
  const logoHeight = 20;
  const logoX = (doc.internal.pageSize.width - logoWidth) / 2;
  const logoY = 6;
  doc.addImage(logo, 'PNG', logoX, logoY, logoWidth, logoHeight);

  // Add the title
  doc.setFont('Inter', 'normal'); // Set to normal as bold is not available
  doc.setFontSize(24);
  doc.setTextColor(primaryColor);
  doc.text('MyHSCounselor Quiz Results', 15, 45);
  doc.line(15, 47, 195, 47);

  // Personality Type Section
  let y = 58;
  doc.setFont('Inter', 'normal'); // Set to normal
  doc.setFontSize(16);
  doc.setTextColor(primaryColor);
  doc.text(`Personality Type: ${mbtiType}`, 15, y);

  // Preference Section
  y += 8;
  if (preference) {
    doc.setFont('Inter', 'normal');
    doc.setFontSize(12);
    doc.setTextColor(textColor);
    const found = mbtiData.careers.some(c => c.postSchoolPath?.toLowerCase() === preference.toLowerCase());
    doc.text(
      `Career Pathway Preference: ${found ? preference : `${preference} (no direct match found)`}`,
      15,
      y
    );
    y += 10;
  } else {
    y += 5;
  }

  // Strengths Section
  doc.setFont('Inter', 'normal'); // Set to normal
  doc.setFontSize(14);
  doc.setTextColor(secondaryColor);
  doc.text('Strengths', 15, y);
  doc.line(15, y + 2, 195, y + 2);
  y += 8;

  doc.setFont('Inter', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(textColor);
  mbtiData.strengths.forEach((s) => {
    doc.text(`• ${s}`, 20, y);
    y += 7;
  });

  y += 10;

  // Suggested Careers Section
  doc.setFont('Inter', 'normal'); // Set to normal
  doc.setFontSize(14);
  doc.setTextColor(secondaryColor);
  doc.text('Suggested Careers', 15, y);
  doc.line(15, y + 2, 195, y + 2);
  y += 8;

  doc.setFont('Inter', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(textColor);
  const allCareers = [...mbtiData.careers];
  const userPreference = preference ? preference.toLowerCase() : null;
  const starredCareers = userPreference ? allCareers.filter(c => c.postSchoolPath?.toLowerCase() === userPreference) : [];
  const nonStarredCareers = userPreference ? allCareers.filter(c => c.postSchoolPath?.toLowerCase() !== userPreference) : allCareers;
  const careersToDisplay = [...starredCareers, ...nonStarredCareers];

  careersToDisplay.forEach((c) => {
    const isStarred = userPreference && c.postSchoolPath?.toLowerCase() === userPreference;
    const line = `${isStarred ? '★ ' : '• '}${c.title} (${c.pathway})`;
    doc.text(line, 20, y);
    y += 7;
    if (y > pageHeight - 20) {
      doc.addPage();
      y = 20;
    }
  });

  y += 10;

  // Top Career Snapshot Section
  const topCareer = careersToDisplay[0];
  const topCareerStats = topCareer?.title && CAREER_STATS[topCareer.title] ? CAREER_STATS[topCareer.title] : {};

  doc.setFont('Inter', 'normal'); // Set to normal
  doc.setFontSize(14);
  doc.setTextColor(secondaryColor);
  doc.text(`Top Career Snapshot: ${topCareer?.title || 'N/A'}`, 15, y);
  doc.line(15, y + 2, 195, y + 2);
  y += 8;

  doc.setFont('Inter', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(textColor);
  doc.text(`• Salary: ${topCareerStats.salary || 'N/A'}`, 20, y);
  y += 7;
  doc.text(`• Outlook: ${topCareerStats.outlook || 'N/A'}`, 20, y);
  y += 7;
  doc.text(`• Education: ${topCareerStats.education || 'N/A'}`, 20, y);
  y += 10;

  // Recommended Next Step Section
  const nextStepText = generateNextStepPhrase(mbtiData, preference);
  const nextStepPlainText = nextStepText.replace(/<[^>]*>/g, '');
  const wrappedNextStepText = doc.splitTextToSize(nextStepPlainText, 175);

  doc.setFont('Inter', 'normal'); // Set to normal
  doc.setFontSize(14);
  doc.setTextColor(secondaryColor);
  doc.text('Recommended Next Step', 15, y);
  doc.line(15, y + 2, 195, y + 2);
  y += 8;

  doc.setFont('Inter', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(textColor);
  const bulletY = y;
  doc.text(`•`, 20, bulletY);
  doc.text(wrappedNextStepText.join('\n'), 25, bulletY);
  y += (wrappedNextStepText.length * 7) + 10;

  // --- Appendix: Guide ---
  const pathwayMap = {
    college: 'College',
    community: 'Community College',
    trade: 'Trade School',
    job: 'Direct Job Entry',
  };

  const pathwayToUse = preference || mbtiData.careers[0]?.postSchoolPath?.toLowerCase();
  const guideKey = pathwayMap[pathwayToUse] || null;
  const guideContent = guideKey ? GUIDES_TEXT_CONTENT[guideKey] : null;

  if (guideContent) {
    doc.addPage();
    let guideY = 20;

    // Add guide title
    doc.setFont('Inter', 'normal'); // Set to normal
    doc.setFontSize(24);
    doc.setTextColor(primaryColor);
    doc.text(`Appendix: ${guideKey} Guide`, 15, guideY);
    doc.line(15, guideY + 2, 195, guideY + 2);
    guideY += 15;

    const sections = guideContent.trim().split(/\n\s*##\s*/);

    sections.forEach((section, index) => {
      const lines = section.split('\n').filter(line => line.trim() !== '');
      if (lines.length === 0) return;

      let sectionTitle = lines[0].trim();
      let sectionContent = lines.slice(1).join('\n').trim();

      if (index === 0 && !sectionTitle.startsWith('#')) {
        sectionTitle = 'Introduction';
        sectionContent = section;
      } else {
        sectionTitle = sectionTitle.replace(/###\s*/, '').trim();
      }

      if (guideY > pageHeight - 40) {
        doc.addPage();
        guideY = 20;
      }

      // Add section heading
      doc.setFont('Inter', 'normal'); // Set to normal
      doc.setFontSize(16);
      doc.setTextColor(secondaryColor);
      doc.text(sectionTitle, 15, guideY);
      guideY += 8;

      // Add section content
      doc.setFont('Inter', 'normal');
      doc.setFontSize(12);
      doc.setTextColor(textColor);
      const wrappedText = doc.splitTextToSize(sectionContent, 175);
      wrappedText.forEach((line) => {
        if (guideY > pageHeight - 20) {
          doc.addPage();
          guideY = 20;
        }
        doc.text(line, 15, guideY);
        guideY += 7;
      });
      guideY += 10;
    });
  }

  // Loop through all pages to add the footer and page numbers
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    const currentPageNumber = i;

    // Add the website address to the footer
    doc.setFont('Inter', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(textColor);
    doc.text(websiteURL, 15, pageHeight - 10);

    // Add the page number to the bottom right
    const pageNumberText = `Page ${currentPageNumber} of ${totalPages}`;
    doc.text(pageNumberText, doc.internal.pageSize.width - 15, pageHeight - 10, { align: 'right' });
  }

  doc.save(`${mbtiType}_Quiz_Results.pdf`);
};
