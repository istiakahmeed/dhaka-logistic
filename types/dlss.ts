export interface CompanyData {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  established: number;
  website: string;
  phone: string;
  emails: string[];
  offices: Record<string, { label: string; address: string }>;
  regions: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Capability {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  subServices: string[];
}

export interface Client {
  name: string;
  shortName: string;
  sector: string;
}

export interface ResourceHighlight {
  value: string;
  label: string;
}

export interface ResourceBreakdown {
  role: string;
  count: number;
  outsourced: boolean;
}

export interface Partner {
  name: string;
  domain: string;
  description: string;
}

export interface ContactPerson {
  name: string;
  designation: string;
  initials: string;
  phone: string;
  email: string;
}

export interface DLSSData {
  company: CompanyData;
  stats: Stat[];
  vision: string;
  mission: string[];
  values: string[];
  capabilities: Capability[];
  services: Service[];
  clients: Client[];
  resources: {
    total: number;
    breakdown: ResourceBreakdown[];
    highlights: ResourceHighlight[];
  };
  partners: Partner[];
  contacts: ContactPerson[];
  future: {
    title: string;
    description: string;
    pillars: string[];
  };
}
