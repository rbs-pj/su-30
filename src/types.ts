export interface ProjectMeta {
  name: string;
  theme: string;
  exhibitTitle: string;
  organization: string;
}

export interface AircraftInfo {
  designation: string;
  fullName: string;
  natoReportingName?: string;
  role: string;
  originCountry: string;
  designBureau: string;
  manufacturer: string;
  crew: string;
  engines: string;
  introSummary: string;
  nameEtymology: {
    su: string;
    number: string;
    mk2: string;
    variantsDistinction: string;
  };
}

export interface TimelineEvent {
  id: string;
  period: string;
  title: string;
  scope: 'world' | 'vietnam';
  summary: string;
  details: string;
  keyTakeaway?: string;
}

export interface RoleMission {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}

export interface AnatomyHotspot {
  id: string;
  name: string;
  vietnameseName: string;
  xPercent: number; // For SVG hotspot positioning
  yPercent: number;
  shortDesc: string;
  detailedFunction: string;
  tacticalSignificance: string;
}

export interface TechnicalSpecItem {
  parameter: string;
  value: string;
  meaning: string;
}

export interface VietnamServiceUnit {
  regiment: string;
  division?: string;
  location?: string;
  mission: string;
  trainingRole: string;
  referenceDoc: string;
}

export interface ReferenceItem {
  id: number;
  title: string;
  authorOrPublisher: string;
  date: string;
  description: string;
  url: string;
  linkText: string;
}

export interface Su30ExhibitData {
  project: ProjectMeta;
  aircraft: AircraftInfo;
  timeline: TimelineEvent[];
  roles: RoleMission[];
  anatomyParts: AnatomyHotspot[];
  specs: TechnicalSpecItem[];
  vietnamService: {
    overview: string;
    inductionProcess: string;
    humanFactor: string;
    units: VietnamServiceUnit[];
  };
  conclusion: {
    historicalSignificance: string;
    defenseValue: string;
    closingStatement: string;
  };
  references: ReferenceItem[];
}
