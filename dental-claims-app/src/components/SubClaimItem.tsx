import React, { useState } from 'react';
import { SubClaim } from '../types';

interface SubClaimItemProps {
  subClaim: SubClaim;
}

const SubClaimItem: React.FC<SubClaimItemProps> = ({ subClaim }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // Mock data for multiple services based on the image
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

  return (
    <div 
      className="subclaim-item"
      style={{
        borderBottom: '1px solid #e0e0e0',
        padding: '12px 0',
      }}
    >
      <div 
        className="subclaim-header"
        onClick={toggleExpand}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          padding: '8px 0',
        }}
      >
        <div className="subclaim-id" style={{ fontWeight: 'bold', color: '#0066cc' }}>
          Claim {subClaim.id}
        </div>
        <div className="expand-icon">
          {expanded ? '▼' : '▶'}
        </div>
      </div>
      
      {expanded && (
        <div className="subclaim-details" style={{ marginTop: '12px' }}>
          <div className="payment-info" style={{ marginBottom: '16px', fontSize: '14px' }}>
            <p>Your plan paid Bright Smiles Family Dental and Orthodontics $350.00 on 12/21/2024 via EFT</p>
          </div>
          
          {services.map((service, index) => (
            <div key={index} className="service-details" style={{ marginBottom: '24px' }}>
              <div className="service-name" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
                {service.name}
              </div>
              
              <div className="service-breakdown">
                <div className="detail-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>Dentist charge</span>
                  <span>${service.dentistCharge.toFixed(2)}</span>
                </div>
                <div className="detail-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>Deductible</span>
                  <span>${service.deductible.toFixed(2)}</span>
                </div>
                <div className="detail-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>Coinsurance you pay</span>
                  <span>${service.coinsurance.toFixed(2)}</span>
                </div>
                <div className="detail-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>Plan pay amount</span>
                  <span>${service.planPaid.toFixed(2)}</span>
                </div>
                <div className="detail-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span>Treatment status</span>
                  <span>{service.status}</span>
                </div>
              </div>
            </div>
          ))}
          
          <div className="totals" style={{ 
            marginTop: '16px', 
            padding: '12px', 
            backgroundColor: '#f5f5f5', 
            borderRadius: '4px' 
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

export default SubClaimItem; 