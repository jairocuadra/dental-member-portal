import React, { useState, useEffect } from 'react';
import { Claim, SubClaim, Service, DenialReason } from '../types';

// Component to display a single denial reason in an informational style
const SingleDenialReasonInfo: React.FC<{ denialReason: DenialReason }> = ({ denialReason }) => {
  return (
    <div className="denial-reason-info" style={{
      marginBottom: '8px',
      textAlign: 'left',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
    }}>
      <span style={{ marginTop: '2px' }}>ℹ️</span>
      <div>
        <span style={{ 
          fontWeight: 'bold',
          color: '#1565C0',
          marginRight: '4px'
        }}>
          Reason Code {denialReason.code}:
        </span>
        <span style={{ color: '#424242' }}>
          {denialReason.description}
          {denialReason.additionalInfo && (
            <span style={{ 
              display: 'block',
              marginTop: '4px',
              fontSize: '14px',
              color: '#616161'
            }}>
              {denialReason.additionalInfo}
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

// Desktop table view for services
const ServicesTable: React.FC<{ services: Service[] }> = ({ services }) => {
  // Collect all denial reasons
  const allDenialReasons = services.flatMap(service => 
    service.denialReasons || []
  );

  return (
    <div className="services-table-container" style={{ overflowX: 'auto' }}>
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse', 
        marginBottom: '20px',
        fontSize: '14px'
      }}>
        <thead>
          <tr style={{ 
            backgroundColor: '#f5f5f5', 
            borderBottom: '2px solid #e0e0e0',
            textAlign: 'left'
          }}>
            <th style={{ padding: '12px 8px' }}>Service</th>
            <th style={{ padding: '12px 8px' }}>Dentist Charge</th>
            <th style={{ padding: '12px 8px' }}>Deductible</th>
            <th style={{ padding: '12px 8px' }}>Coinsurance You Pay</th>
            <th style={{ padding: '12px 8px' }}>Plan Pay Amount</th>
            <th style={{ padding: '12px 8px' }}>Treatment Status</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #e0e0e0' }}>
              <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>{service.name}</td>
              <td style={{ padding: '12px 8px' }}>${service.dentistCharge.toFixed(2)}</td>
              <td style={{ padding: '12px 8px' }}>${service.deductible.toFixed(2)}</td>
              <td style={{ padding: '12px 8px' }}>${service.coinsurance.toFixed(2)}</td>
              <td style={{ padding: '12px 8px' }}>${service.planPaid.toFixed(2)}</td>
              <td style={{ padding: '12px 8px' }}>{service.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {allDenialReasons.length > 0 && (
        <div style={{ marginTop: '16px', marginBottom: '16px' }}>
          {allDenialReasons.map((reason, index) => (
            <SingleDenialReasonInfo key={index} denialReason={reason} />
          ))}
        </div>
      )}
    </div>
  );
};

// Mobile list view for services
const ServicesList: React.FC<{ services: Service[] }> = ({ services }) => {
  // Collect all denial reasons
  const allDenialReasons = services.flatMap(service => 
    service.denialReasons || []
  );

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
    <>
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

      {allDenialReasons.length > 0 && (
        <div style={{ marginTop: '16px', marginBottom: '16px' }}>
          {allDenialReasons.map((reason, index) => (
            <SingleDenialReasonInfo key={index} denialReason={reason} />
          ))}
        </div>
      )}
    </>
  );
};

// Enhanced SubClaimItem component with expandable functionality and detailed service information
const SubClaimItem: React.FC<{ subClaim: SubClaim }> = ({ subClaim }) => {
  const [expanded, setExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Handle window resize to determine if desktop or mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // Use services from the subClaim if available, otherwise use empty array
  const services = subClaim.services || [];

  // Calculate totals from actual services
  const totalDentistCharge = services.reduce((sum, service) => sum + service.dentistCharge, 0);
  const totalDeductible = services.reduce((sum, service) => sum + service.deductible, 0);
  const totalPlanPaid = services.reduce((sum, service) => sum + service.planPaid, 0);

  // Determine if this is a denied claim
  const isDenied = subClaim.details?.treatmentStatus === 'Denied';

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
          {/* Render table for desktop, list for mobile */}
          {isDesktop ? (
            <ServicesTable services={services} />
          ) : (
            <ServicesList services={services} />
          )}
          
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
  const isDenied = claim.status === 'Denied';

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
          {claim.subClaims.map((subClaim) => (
            <SubClaimItem key={subClaim.id} subClaim={subClaim} />
          ))}
          
          <button 
            onClick={handleDownload}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#f5f5f5',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              color: '#424242',
              padding: '8px 16px',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'all 0.2s ease',
              marginTop: '24px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#e0e0e0';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#f5f5f5';
            }}
          >
            <span style={{ marginRight: '8px' }}>⬇️</span>
            Download claim details
          </button>
          
          {downloadError && (
            <div 
              style={{ 
                marginTop: '8px',
                color: '#D32F2F',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>⚠️</span>
              <span>Download failed. Please try again later or contact support if the issue persists.</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ClaimCard; 