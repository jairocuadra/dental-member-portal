import { Claim, Member } from '../types';

export const members: Member[] = [
  { id: '1', name: 'David Anderson' },
  { id: '2', name: 'Jane Smith' },
  { id: '3', name: 'Robert Johnson' },
];

export const claims: Claim[] = [
  {
    id: '987654321',
    dateRange: '12/01/24 - 12/07/24',
    status: 'Approved',
    subClaims: [
      {
        id: '987654321A',
        patientName: 'David Anderson',
        serviceDescription: 'Your plan paid Bright Smiles Family Dental and Orthodontics $350.00 on 12/21/2024 via EFT',
        providerName: 'Bright Smiles Family Dental and Orthodontics',
        details: {
          deductible: 25.00,
          coinsuranceYouPay: 50.00,
          planPaid: 150.00,
          treatmentStatus: 'Approved',
          doctorCharge: 200.00,
        }
      },
      {
        id: '987654321B',
        patientName: 'David Anderson',
        serviceDescription: 'Your plan paid Bright Smiles Family Dental and Orthodontics $250.00 on 12/21/2024 via EFT',
        providerName: 'Bright Smiles Family Dental and Orthodontics',
        details: {
          deductible: 25.00,
          coinsuranceYouPay: 50.00,
          planPaid: 150.00,
          treatmentStatus: 'Approved',
          doctorCharge: 200.00,
        }
      },
      {
        id: '987654321C',
        patientName: 'David Anderson',
        serviceDescription: 'Your plan paid Bright Smiles Family Dental and Orthodontics $150.00 on 12/21/2024 via EFT',
        providerName: 'Bright Smiles Family Dental and Orthodontics',
        details: {
          deductible: 25.00,
          coinsuranceYouPay: 50.00,
          planPaid: 150.00,
          treatmentStatus: 'Approved',
          doctorCharge: 200.00,
        }
      }
    ]
  },
  {
    id: '987654322',
    dateRange: '11/15/24 - 11/20/24',
    status: 'Pending',
    subClaims: [
      {
        id: '987654322A',
        patientName: 'David Anderson',
        serviceDescription: 'Pending review by insurance',
        providerName: 'Bright Smiles Family Dental and Orthodontics',
        details: {
          deductible: 25.00,
          coinsuranceYouPay: 50.00,
          planPaid: 0.00,
          treatmentStatus: 'Pending',
          doctorCharge: 200.00,
        }
      }
    ]
  },
  {
    id: '987654323',
    dateRange: '10/05/24 - 10/10/24',
    status: 'Denied',
    subClaims: [
      {
        id: '987654323A',
        patientName: 'David Anderson',
        serviceDescription: 'Service not covered by your plan',
        providerName: 'Bright Smiles Family Dental and Orthodontics',
        details: {
          deductible: 0.00,
          coinsuranceYouPay: 0.00,
          planPaid: 0.00,
          treatmentStatus: 'Denied',
          doctorCharge: 350.00,
        }
      }
    ]
  },
  {
    id: '987654324',
    dateRange: '09/15/24 - 09/20/24',
    status: 'Approved',
    subClaims: [
      {
        id: '987654324A',
        patientName: 'David Anderson',
        serviceDescription: 'Your plan paid Bright Smiles Family Dental and Orthodontics $450.00 on 09/30/2024 via EFT',
        providerName: 'Bright Smiles Family Dental and Orthodontics',
        details: {
          deductible: 25.00,
          coinsuranceYouPay: 50.00,
          planPaid: 150.00,
          treatmentStatus: 'Approved',
          doctorCharge: 200.00,
        }
      }
    ]
  }
]; 