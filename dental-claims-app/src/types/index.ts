export interface Claim {
  id: string;
  dateRange: string;
  status: 'Approved' | 'Pending' | 'Denied';
  subClaims: SubClaim[];
  expanded?: boolean;
}

export interface SubClaim {
  id: string;
  patientName: string;
  serviceDescription?: string;
  providerName?: string;
  details?: ClaimDetails;
  expanded?: boolean;
}

export interface ClaimDetails {
  deductible?: number;
  coinsuranceYouPay?: number;
  planPaid?: number;
  treatmentStatus?: string;
  doctorCharge?: number;
}

export interface Member {
  id: string;
  name: string;
} 