// exportpdf.js
import jsPDF from 'jspdf';

export const exportResultsAsPDF = ({ type, title, career }) => {
  const doc = new jsPDF();

  const content = `
MyHSCounselor Quiz Results

Personality Type: ${type} — ${title}
Top Career Match: ${career.name}

Career Snapshot:
- Salary: ${career.salary || 'N/A'}
- Outlook: ${career.outlook || 'N/A'}
- Education: ${career.education || 'N/A'}
`;

  doc.setFont('Helvetica');
  doc.setFontSize(12);
  doc.text(content.trim(), 10, 20);
  doc.save(`${type}_Quiz_Results.pdf`);
};
