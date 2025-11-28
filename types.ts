export interface ParsedReport {
  catchUp: string;
  bigThree: BigThreeItem[];
  timeline: TimelineItem[];
  terminology: TerminologyItem[];
  outlook: string;
  raw: string;
  sources?: GroundingSource[];
}

export interface BigThreeItem {
  title: string;
  description: string;
}

export interface TimelineItem {
  date: string;
  event: string;
  impact: string;
}

export interface TerminologyItem {
  term: string;
  definition: string;
}

export interface GroundingSource {
  title?: string;
  uri?: string;
}

export interface GenerateRequest {
  topic: string;
  sinceDate: string;
}

export enum AppState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}