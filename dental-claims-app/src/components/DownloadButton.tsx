import React from 'react';

const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    // In a real app, this would trigger a download of claim statements
    alert('Downloading claim statements...');
  };

  return (
    <button
      onClick={handleDownload}
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        border: 'none',
        color: '#0066cc',
        fontSize: '14px',
        padding: '8px 16px',
        cursor: 'pointer',
        marginLeft: 'auto',
      }}
    >
      <span style={{ marginRight: '6px' }}>⬇️</span>
      Download claim statements
    </button>
  );
};

export default DownloadButton; 