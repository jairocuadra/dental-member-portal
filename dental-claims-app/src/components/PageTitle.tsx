import React from 'react';

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div 
      className="page-title"
      style={{
        margin: '16px 0 24px',
        padding: '0 16px',
        textAlign: 'left',
      }}
    >
      <h1 
        style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#333',
          margin: 0,
          fontFamily: 'Georgia, "Times New Roman", Times, serif',
          borderBottom: '2px solid #8B0000',
          paddingBottom: '8px',
          display: 'inline-block',
        }}
      >
        {title}
      </h1>
    </div>
  );
};

export default PageTitle; 