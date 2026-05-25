export type EntityRecord = {
  id: string;
  name: string;
  status: string;
  owner: string;
  amount?: string;
  dueDate?: string;
  priority?: string;
};

export type FeatureEntitySet = {
  title: string;
  columns: string[];
  rows: EntityRecord[];
};

const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];

const entitySeeds = [
  ['studies', 'Study Records', 'Oncology Phase II milestone review', 'At risk', 'Cardiology device follow-up', 'Clinical Operations', '$0'],
  ['participants', 'Participant Records', 'Screening cohort A', 'Open', 'Retention risk cohort', 'Recruitment Lead', '$0'],
  ['trial-matching', 'Trial Matching Records', 'High-fit oncology matches', 'Review', 'Criteria conflict queue', 'Clinical Reviewer', '$0'],
  ['protocols', 'Protocol Records', 'Protocol amendment 4', 'Approval pending', 'Deviation review bundle', 'Medical Director', '$0'],
  ['sites', 'Site Records', 'Northwest site activation', 'Blocked', 'Monitoring visit queue', 'Site Operations', '$0'],
  ['enrollment', 'Enrollment Records', 'Behind-plan recruitment list', 'Action needed', 'Screen failure review', 'Trial Manager', '$0'],
  ['study-visits', 'Study Visit Records', 'Visit-window risk list', 'Open', 'Missed visit follow-up', 'Study Coordinator', '$0'],
  ['labs-specimens', 'Lab and Specimen Records', 'Specimen exception batch', 'Review', 'Pending results queue', 'Lab Operations', '$0'],
  ['adverse-events', 'Adverse Event Records', 'SAE expedited report', 'Due today', 'AE follow-up queue', 'Safety Lead', '$0'],
  ['drug-safety', 'Drug Safety Records', 'Safety signal packet', 'Review', 'Narrative draft list', 'Pharmacovigilance', '$0'],
  ['regulatory', 'Regulatory Records', 'IRB response package', 'Open', 'Submission readiness list', 'Regulatory Affairs', '$0'],
  ['compliance', 'Compliance Records', 'GCP evidence packet', 'Review', 'Training attestation queue', 'Compliance Officer', '$0'],
  ['data-management', 'Data Management Records', 'Open EDC query batch', 'Action needed', 'Database lock readiness', 'Data Manager', '$0'],
  ['biostatistics', 'Biostatistics Records', 'Interim analysis package', 'Review', 'TFL quality check', 'Biostatistics Lead', '$0'],
  ['medical-writing', 'Medical Writing Records', 'CSR draft package', 'In review', 'Clinical summary update', 'Medical Writer', '$0'],
  ['documents', 'Document Records', 'Protocol document packet', 'In review', 'IRB submission bundle', 'Document Control', '$0'],
  ['notifications', 'Notification Records', 'Critical study alert', 'Open', 'Regulatory deadline reminder', 'Clinical Operations', '$0'],
  ['integrations', 'Integration Records', 'CTMS nightly sync', 'Healthy', 'EDC connector warning', 'Platform Ops', '$0'],
  ['profiles', 'Profile Records', 'Study team role review', 'Active', 'Site assignment map', 'Admin', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'Protocol review session', 'Open', 'Safety narrative draft', 'Medical Director', '$0'],
  ['ai-tools', 'AI Tool Records', 'Eligibility matching batch', 'Completed', 'Safety signal model run', 'Clinical Reviewer', '$0'],
] as const;

function buildSet(
  slug: string,
  title: string,
  firstName: string,
  firstStatus: string,
  secondName: string,
  owner: string,
  amount: string,
): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(
  entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [
    slug,
    buildSet(slug, title, firstName, firstStatus, secondName, owner, amount),
  ]),
);
