// DownloadPDFButton.js
import React from 'react';

const DownloadPDFButton = ({ fileName, label }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/pdfs/${fileName}`;
    link.download = fileName;

    // Optional: ensure it's not already in the DOM
    if (!document.body.contains(link)) {
      document.body.appendChild(link);
    }

    link.click();
    link.remove();
  };

  return (
    <button
      className="download-btn"
      onClick={handleDownload}
      aria-label={`Download ${label} PDF`}
    >
      📄 {label}
    </button>
  );
};

export default DownloadPDFButton;
