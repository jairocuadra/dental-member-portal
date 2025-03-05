import React from 'react';
import { Member } from '../types';

interface MemberSelectorProps {
  members: Member[];
  selectedMemberId: string;
  onSelectMember: (memberId: string) => void;
}

const MemberSelector: React.FC<MemberSelectorProps> = ({ 
  members, 
  selectedMemberId, 
  onSelectMember 
}) => {
  return (
    <div className="member-selector" style={{ marginBottom: '20px' }}>
      <label 
        htmlFor="member-select" 
        style={{ 
          display: 'block', 
          marginBottom: '8px',
          fontWeight: 'bold',
          color: '#333',
          textAlign: 'left',
          fontFamily: 'Georgia, "Times New Roman", Times, serif',
        }}
      >
        Select a member
      </label>
      <div style={{ position: 'relative' }}>
        <select
          id="member-select"
          value={selectedMemberId}
          onChange={(e) => onSelectMember(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: 'white',
            fontSize: '16px',
            appearance: 'none',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
          }}
        >
          {members.map((member) => (
            <option key={member.id} value={member.id}>
              {member.name}
            </option>
          ))}
        </select>
        <div 
          style={{ 
            position: 'absolute', 
            right: '12px', 
            top: '50%', 
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
          }}
        >
          ▼
        </div>
      </div>
    </div>
  );
};

export default MemberSelector; 