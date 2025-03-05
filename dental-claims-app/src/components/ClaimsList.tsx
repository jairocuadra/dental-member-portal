import React from 'react';
import { Claim } from '../types';
import ClaimCard from './ClaimCard';

interface ClaimsListProps {
  claims: Claim[];
}

const ClaimsList: React.FC<ClaimsListProps> = ({ claims }) => {
  return (
    <div className="claims-list">
      {claims.length === 0 ? (
        <div 
          className="no-claims" 
          style={{ 
            textAlign: 'center', 
            padding: '40px 0',
            color: '#666'
          }}
        >
          No claims found for this member.
        </div>
      ) : (
        claims.map((claim) => (
          <ClaimCard key={claim.id} claim={claim} />
        ))
      )}
    </div>
  );
};

export default ClaimsList; 