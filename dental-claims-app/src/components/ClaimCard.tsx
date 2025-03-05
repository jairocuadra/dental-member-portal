import React, { useState } from 'react';
import { Claim, SubClaim } from '../types';

// Enhanced SubClaimItem component with expandable functionality and detailed service information
const SubClaimItem: React.FC<{ subClaim: SubClaim }> = ({ subClaim }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // Mock data for multiple services based on the requirements
  const services = [
    {
      name: 'Tooth Extraction (D1234)',
      dentistCharge: 200.00,
      deductible: 25.00,
      coinsurance: 50.00,
      planPaid: 150.00,
      status: 'Approved'
    },
    {
      name: 'Fluoride (D1234)',
      dentistCharge: 200.00,
      deductible: 25.00,
      coinsurance: 50.00,
      planPaid: 150.00,
      status: 'Approved'
    },
    {
      name: 'X-Rays (D1234)',
      dentistCharge: 200.00,
      deductible: 25.00,
      coinsurance: 50.00,
      planPaid: 150.00,
      status: 'Approved'
    }
  ];

  // Calculate totals
  const totalDentistCharge = services.reduce((sum, service) => sum + service.dentistCharge, 0);
  const totalDeductible = services.reduce((sum, service) => sum + service.deductible, 0);
  const totalPlanPaid = services.reduce((sum, service) => sum + service.planPaid, 0);

  // Label-value pair component with underline
  const LabelValuePair: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      marginBottom: '4px',
      paddingBottom: '4px',
      borderBottom: '1px solid #e0e0e0'
    }}>
      <span>{label}</span>
      <span>{typeof value === 'number' ? `$${value.toFixed(2)}` : value}</span>
    </div>
  );

  return (
    <div 
      className="subclaim-item"
      style={{
        borderBottom: '1px solid #e0e0e0',
        padding: '12px 0',
        backgroundColor: 'white',
      }}
    >
      <div 
        className="subclaim-header"
        onClick={toggleExpand}
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          padding: '8px 0',
        }}
      >
        <div className="expand-icon" style={{ marginRight: '8px', fontSize: '12px' }}>
          {expanded ? '⌄' : '›'}
        </div>
        <div className="subclaim-id" style={{ color: '#0066cc' }}>
          Claim {subClaim.id}
        </div>
      </div>
      
      {expanded && (
        <div className="subclaim-details" style={{ marginTop: '12px' }}>
          <div className="payment-info" style={{ 
            marginBottom: '16px', 
            fontSize: '14px',
            display: 'flex',
            alignItems: 'flex-start',
            textAlign: 'left',
          }}>
            <span style={{ marginRight: '8px', fontSize: '16px' }}>💰</span>
            <p>Your plan paid Bright Smiles Family Dental and Orthodontics $350.00 on 12/21/2024 via EFT</p>
          </div>
          
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-details" 
              style={{ 
                marginBottom: '24px',
                textAlign: 'left',
              }}
            >
              <div className="service-name" style={{ fontWeight: 'bold', marginBottom: '8px', textAlign: 'left' }}>
                {service.name}
              </div>
              
              <div className="service-breakdown">
                <LabelValuePair label="Dentist charge" value={service.dentistCharge} />
                <LabelValuePair label="Deductible" value={service.deductible} />
                <LabelValuePair label="Coinsurance you pay" value={service.coinsurance} />
                <LabelValuePair label="Plan pay amount" value={service.planPaid} />
                <LabelValuePair label="Treatment status" value={service.status} />
              </div>
            </div>
          ))}
          
          <div className="totals" style={{ 
            marginTop: '16px', 
            padding: '12px', 
            backgroundColor: '#f5f5f5', 
            borderRadius: '4px',
          }}>
            <div className="detail-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontWeight: 'bold' }}>
              <span>Dentist charge</span>
              <span>${totalDentistCharge.toFixed(2)}</span>
            </div>
            <div className="detail-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span>Deductible</span>
              <span>${totalDeductible.toFixed(2)}</span>
            </div>
            <div className="detail-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span>Plan pay amount</span>
              <span>${totalPlanPaid.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface ClaimCardProps {
  claim: Claim;
}

const ClaimCard: React.FC<ClaimCardProps> = ({ claim }) => {
  const [expanded, setExpanded] = useState(false);
  const [downloadError, setDownloadError] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleDownload = () => {
    // Only show error for the first claim (ID: 987654321)
    if (claim.id === '987654321') {
      setDownloadError(true);
      // Hide the error after 5 seconds
      setTimeout(() => {
        setDownloadError(false);
      }, 5000);
    } else {
      // For other claims, just show an alert
      alert('Download started for claim #' + claim.id);
    }
  };

  // Determine the color based on status
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return '#4CAF50'; // Green
      case 'Pending':
        return '#673AB7'; // Purple
      case 'Denied':
        return '#F44336'; // Red
      default:
        return '#9E9E9E'; // Grey
    }
  };

  const statusColor = getStatusColor(claim.status);

  return (
    <div 
      className="claim-card"
      style={{
        border: `1px solid #e0e0e0`,
        borderLeft: `4px solid ${statusColor}`,
        borderRadius: '4px',
        marginBottom: '12px',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
      }}
    >
      <div 
        className="claim-header"
        style={{
          padding: '12px 16px',
          backgroundColor: '#f9f9f9',
          position: 'relative',
        }}
      >
        <div className="claim-date" style={{ fontWeight: 'bold', marginBottom: '12px', textAlign: 'left' }}>
          {claim.dateRange}
        </div>
        
        <div className="claim-info" style={{ marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ marginRight: '8px' }}>👤</span>
            <span>For {claim.subClaims[0]?.patientName || 'Patient'}</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ marginRight: '8px' }}>📄</span>
            <span>Claim# {claim.id}</span>
          </div>
        </div>
        
        <div className="claim-actions">
          <button 
            onClick={toggleExpand}
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#0066cc',
              padding: '4px 0',
              cursor: 'pointer',
              fontSize: '14px',
              textAlign: 'left',
            }}
          >
            <span style={{ marginRight: '8px', fontSize: '16px' }}>{expanded ? '−' : '+'}</span>
            View details
          </button>
        </div>
        
        <div 
          className="claim-status-badge"
          style={{
            backgroundColor: statusColor,
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 'bold',
            display: 'inline-block',
            position: 'absolute',
            top: '12px',
            right: '16px',
          }}
        >
          {claim.status}
        </div>
      </div>
      
      {expanded && (
        <div className="claim-details" style={{ padding: '16px', backgroundColor: 'white' }}>
          <div style={{ marginBottom: '16px' }}>
            <button 
              onClick={handleDownload}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                color: '#0066cc',
                padding: '4px 0',
                cursor: 'pointer',
                fontSize: '14px',
                textAlign: 'left',
              }}
            >
              <span style={{ marginRight: '4px' }}>⬇️</span>
              Download claim details
            </button>
            
            {downloadError && (
              <div 
                style={{ 
                  marginTop: '8px',
                  padding: '8px 12px',
                  backgroundColor: '#FFEBEE',
                  color: '#D32F2F',
                  borderRadius: '4px',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span style={{ marginRight: '8px' }}>⚠️</span>
                <span>Download failed. Please try again later or contact support if the issue persists.</span>
              </div>
            )}
          </div>
          
          {claim.subClaims.map((subClaim) => (
            <SubClaimItem key={subClaim.id} subClaim={subClaim} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ClaimCard; 