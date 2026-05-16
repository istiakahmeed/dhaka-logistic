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
  social: { platform: string; url: string }[];
  team: string;
  teamDescription: string;
  managementExperience: string;
  maxExperience: string;
}

export interface Stat {
  value: string;
  label: string;
  sublabel: string;
}

export interface Capability {
  title: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  subServices: string[];
  accentStat: string;
  partnerCallout?: string;
  partnerDescription?: string;
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
  collaboration: string;
}

export interface ContactPerson {
  name: string;
  designation: string;
  initials: string;
  phone: string;
  email: string;
}

export interface BusinessDataClient {
  name: string;
  revenue: number;
}

export interface BusinessAreaBreakdown {
  area: string;
  percentage: number;
}

export interface BusinessData {
  clients: BusinessDataClient[];
  areaBreakdown: BusinessAreaBreakdown[];
}

export interface FuturePlan {
  title: string;
  description: string;
  pillars: string[];
}

export interface MissionValue {
  id: string;
  title: string;
  description: string;
}

export interface OrgNode {
  title: string;
  children?: OrgNode[];
}

export interface AboutData {
  heroSubtitle: string;
  whoWeAre: string;
}

export interface DLSSData {
  company: CompanyData;
  about: AboutData;
  stats: Stat[];
  vision: string;
  visionAttribution: string;
  mission: string[];
  missionDetailed: MissionValue[];
  values: string[];
  capabilities: Capability[];
  whyDLSS: { heading: string; body: string };
  services: ServiceDetail[];
  clients: Client[];
  trustedClients: string[];
  resources: {
    total: number;
    breakdown: ResourceBreakdown[];
    highlights: ResourceHighlight[];
  };
  partners: Partner[];
  contacts: ContactPerson[];
  future: FuturePlan;
  businessData2025: BusinessData;
  orgChart: OrgNode[];
}
