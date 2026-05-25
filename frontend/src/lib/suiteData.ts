export type Metric = {
  label: string;
  value: string;
  note: string;
};

export const sourceSystems = [
  {
    name: 'AIClinicalTrialMatching',
    ownership: 'Trial matching, eligibility review, participant fit, and match rationale',
    coverage: ['Trial matching', 'Eligibility', 'Participant matching', 'Criteria review'],
  },
  {
    name: 'AIPharmaTrialDesigner',
    ownership: 'Protocol design, study planning, trial feasibility, and review workflows',
    coverage: ['Protocols', 'Study planning', 'Feasibility', 'Trial design'],
  },
  {
    name: 'AIResearchLiteratureAgent',
    ownership: 'Literature support, medical writing, clinical summaries, and evidence review',
    coverage: ['Literature review', 'Medical writing', 'Evidence support', 'CSR drafts'],
  },
  {
    name: 'AIDrugInteractionChecker',
    ownership: 'Drug safety support, signal review, and safety case context',
    coverage: ['Drug safety', 'Safety signals', 'Case context', 'Medical review'],
  },
];

export const dashboardMetrics: Metric[] = [
  { label: 'Active Studies', value: '42', note: 'Portfolio' },
  { label: 'Participants', value: '3.1K', note: 'Tracked' },
  { label: 'Open AEs', value: '49', note: 'Safety queue' },
  { label: 'Open Queries', value: '418', note: 'EDC backlog' },
];

export const healthMetrics: Metric[] = [
  { label: 'At Risk Studies', value: '8', note: 'Need review' },
  { label: 'SAEs', value: '6', note: 'Expedited' },
  { label: 'IRB Holds', value: '8', note: 'Blocked' },
  { label: 'AI Tool Runs', value: '342', note: 'Last 24 hours' },
];

export const dashboardModules = [
  'Study portfolio and milestone risk',
  'Participant eligibility and retention',
  'Trial matching and criteria review',
  'Site activation and enrollment pacing',
  'Adverse events and drug safety',
  'Regulatory submissions and GCP controls',
  'EDC queries, SDV, and lock readiness',
  'Medical writing and AI assistant review',
];

export const workflowHighlights = [
  'Study activation and milestone recovery',
  'Participant screening, consent, and matching',
  'AE/SAE intake, review, and reporting',
  'Regulatory submission and inspection-readiness workflow',
  'Data query cleanup, biostatistics review, and CSR drafting',
];
