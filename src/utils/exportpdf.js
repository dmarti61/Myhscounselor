import jsPDF from 'jspdf';
import { CAREER_STATS } from '../components/quiz/careerstats';

export const exportResultsAsPDF = ({ type, title, career }) => {
  const stats = career?.blsCode ? CAREER_STATS[career.blsCode] || {} : {};

  const doc = new jsPDF();
  const content = `
MyHSCounselor Quiz Results

Personality Type: ${type} — ${title}
Top Career Match: ${career.name}

Career Snapshot:
- Salary: ${stats.salary || 'N/A'}
- Outlook: ${stats.outlook || 'N/A'}
- Education: ${stats.education || 'N/A'}
`;

  doc.setFont('Helvetica');
  doc.setFontSize(12);
  doc.text(content.trim(), 10, 20);

  // 🔧  FIXED: plain template literal, no escaping
  doc.save(`${type}_Quiz_Results.pdf`);
};
