// DownloadPDFButton.js
import React from 'react';

const DownloadPDFButton = ({ fileName, label }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/pdfs/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="download-btn" onClick={handleDownload}>
      📄 {label}
    </button>
  );
};

export default DownloadPDFButton;
