export interface Claim {
  id: string;
  dateRange: string;
  status: 'Approved' | 'Pending' | 'Denied';
  subClaims: SubClaim[];
  expanded?: boolean;
  denialReasons?: DenialReason[];
}

export interface SubClaim {
  id: string;
  patientName: string;
  serviceDescription?: string;
  providerName?: string;
  details?: ClaimDetails;
  expanded?: boolean;
  services?: Service[];
}

export interface Service {
  name: string;
  code: string;
  dentistCharge: number;
  deductible: number;
  coinsurance: number;
  planPaid: number;
  status: string;
  denialReasons?: DenialReason[];
}

export interface ClaimDetails {
  deductible?: number;
  coinsuranceYouPay?: number;
  planPaid?: number;
  treatmentStatus?: string;
  doctorCharge?: number;
}

export interface DenialReason {
  code: string;
  description: string;
  additionalInfo?: string;
}

export interface Member {
  id: string;
  name: string;
} 