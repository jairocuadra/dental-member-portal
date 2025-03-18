import { Claim, Member, Service } from '../types';

export const members: Member[] = [
  { id: '1', name: 'David Anderson' },
  { id: '2', name: 'Jane Smith' },
  { id: '3', name: 'Robert Johnson' },
];

// Define some services with denial reasons
const deniedServices: Service[] = [
  {
    name: 'Tooth Whitening (D9975)',
    code: 'D9975',
    dentistCharge: 350.00,
    deductible: 0.00,
    coinsurance: 0.00,
    planPaid: 0.00,
    status: 'Denied',
    denialReasons: [
      {
        code: 'D104',
        description: 'Service not covered under your plan',
        additionalInfo: 'The procedure code submitted is for a cosmetic service which is excluded from your dental benefits.'
      }
    ]
  },
  {
    name: 'Dental Implant (D6010)',
    code: 'D6010',
    dentistCharge: 1200.00,
    deductible: 0.00,
    coinsurance: 0.00,
    planPaid: 0.00,
    status: 'Denied',
    denialReasons: [
      {
        code: 'D201',
        description: 'Annual maximum benefit reached',
        additionalInfo: 'You have reached your annual maximum benefit of $1,500 for the current benefit year.'
      },
      {
        code: 'D105',
        description: 'Waiting period not satisfied',
        additionalInfo: 'This procedure requires a 12-month waiting period which has not been satisfied.'
      }
    ]
  },
  {
    name: 'Porcelain Crown (D2740)',
    code: 'D2740',
    dentistCharge: 950.00,
    deductible: 0.00,
    coinsurance: 0.00,
    planPaid: 0.00,
    status: 'Denied',
    denialReasons: [
      {
        code: 'D301',
        description: 'Frequency limitation',
        additionalInfo: 'This procedure is limited to once every 5 years per tooth. Previous crown was placed on 03/15/2022.'
      }
    ]
  },
  {
    name: 'Orthodontic Treatment (D8080)',
    code: 'D8080',
    dentistCharge: 5500.00,
    deductible: 0.00,
    coinsurance: 0.00,
    planPaid: 0.00,
    status: 'Denied',
    denialReasons: [
      {
        code: 'D401',
        description: 'Age limitation',
        additionalInfo: 'Orthodontic coverage is limited to dependents under the age of 19.'
      }
    ]
  }
];

// Define approved services
const approvedServices: Service[] = [
  {
    name: 'Tooth Extraction (D7140)',
    code: 'D7140',
    dentistCharge: 200.00,
    deductible: 25.00,
    coinsurance: 50.00,
    planPaid: 150.00,
    status: 'Approved'
  },
  {
    name: 'Fluoride (D1206)',
    code: 'D1206',
    dentistCharge: 200.00,
    deductible: 25.00,
    coinsurance: 50.00,
    planPaid: 150.00,
    status: 'Approved'
  },
  {
    name: 'X-Rays (D0210)',
    code: 'D0210',
    dentistCharge: 200.00,
    deductible: 25.00,
    coinsurance: 50.00,
    planPaid: 150.00,
    status: 'Approved'
  }
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
        },
        services: [...approvedServices]
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
        },
        services: [...approvedServices]
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
        },
        services: []
      }
    ]
  },
  {
    id: '987654323',
    dateRange: '10/05/24 - 10/10/24',
    status: 'Denied',
    denialReasons: [
      {
        code: 'D104',
        description: 'Service not covered under your plan',
        additionalInfo: 'The procedure code submitted is for a cosmetic service which is excluded from your dental benefits.'
      }
    ],
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
        },
        services: [
          deniedServices[0], // Tooth whitening service
          deniedServices[2]  // Porcelain Crown service
        ]
      }
    ]
  },
  {
    id: '987654325',
    dateRange: '08/20/24 - 08/25/24',
    status: 'Denied',
    denialReasons: [
      {
        code: 'D201',
        description: 'Annual maximum benefit reached',
        additionalInfo: 'You have reached your annual maximum benefit of $1,500 for the current benefit year.'
      },
      {
        code: 'D105',
        description: 'Waiting period not satisfied',
        additionalInfo: 'This procedure requires a 12-month waiting period which has not been satisfied.'
      }
    ],
    subClaims: [
      {
        id: '987654325A',
        patientName: 'David Anderson',
        serviceDescription: 'Multiple reasons for denial',
        providerName: 'Bright Smiles Family Dental and Orthodontics',
        details: {
          deductible: 0.00,
          coinsuranceYouPay: 0.00,
          planPaid: 0.00,
          treatmentStatus: 'Denied',
          doctorCharge: 1200.00,
        },
        services: [
          deniedServices[1], // Dental implant service with multiple denial reasons
          deniedServices[3]  // Orthodontic Treatment service
        ]
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
        },
        services: [...approvedServices]
      }
    ]
  }
]; 