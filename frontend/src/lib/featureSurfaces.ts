export type FeatureSurfaceRow = {
  id: string;
  item: string;
  status: string;
  owner: string;
  nextStep: string;
};

export type FeatureSurface = {
  workItems: FeatureSurfaceRow[];
  quickActions: string[];
  controlChecks: Array<{ id: string; label: string; done: boolean }>;
  activityLog: Array<{ id: string; message: string; at: string }>;
};

const featureSeeds = [
  ['studies', 'Studies', 'At-risk study milestone review', 'Clinical Operations', 'Confirm owner and recovery plan'],
  ['participants', 'Participants', 'Screening and consent queue', 'Recruitment Lead', 'Verify eligibility and consent status'],
  ['trial-matching', 'Trial Matching', 'High-fit match review', 'Clinical Reviewer', 'Adjudicate criteria conflicts'],
  ['protocols', 'Protocols', 'Protocol amendment review', 'Medical Director', 'Route amendment for approval'],
  ['sites', 'Sites', 'Site activation hold queue', 'Site Operations', 'Resolve contract or training blocker'],
  ['enrollment', 'Enrollment', 'Behind-plan enrollment review', 'Trial Manager', 'Update recruitment actions'],
  ['study-visits', 'Study Visits', 'Visit-window risk queue', 'Study Coordinator', 'Contact site and reschedule'],
  ['labs-specimens', 'Labs & Specimens', 'Specimen exception review', 'Lab Operations', 'Resolve chain-of-custody exception'],
  ['adverse-events', 'Adverse Events', 'SAE reporting deadline', 'Safety Lead', 'Complete expedited report'],
  ['drug-safety', 'Drug Safety', 'Safety signal triage', 'Pharmacovigilance', 'Review case and signal evidence'],
  ['regulatory', 'Regulatory', 'IRB response queue', 'Regulatory Affairs', 'Submit response package'],
  ['compliance', 'Compliance', 'GCP control evidence review', 'Compliance Officer', 'Attach evidence and close control'],
  ['data-management', 'Data Management', 'Open query cleanup', 'Data Manager', 'Resolve EDC query backlog'],
  ['biostatistics', 'Biostatistics', 'TFL review package', 'Biostatistics Lead', 'Complete statistical review'],
  ['medical-writing', 'Medical Writing', 'CSR draft review', 'Medical Writer', 'Route for clinical signoff'],
  ['literature-review', 'Literature Review', 'Multi-paper evidence synthesis', 'Evidence Lead', 'Summarize findings, gaps, and clinical relevance'],
  ['citation-tracker', 'Citation Tracker', 'Citation graph and DOI cleanup', 'Evidence Librarian', 'Validate citation lineage and export references'],
  ['paper-summaries', 'Paper Summaries', 'Paper summary quality review', 'Medical Writer', 'Review methods, limitations, and key findings'],
  ['evidence-tables', 'Evidence Tables', 'PICO evidence table review', 'Clinical Reviewer', 'Confirm evidence grade and row confidence'],
  ['documents', 'Documents', 'Protocol and IRB packet review', 'Document Control', 'Attach final artifacts'],
  ['notifications', 'Notifications', 'Critical study alert cleanup', 'Clinical Operations', 'Resolve open alerts'],
  ['integrations', 'Integrations', 'CTMS and EDC connector health', 'Platform Ops', 'Resolve sync warnings'],
  ['profiles', 'Profiles', 'Study team access review', 'Admin', 'Confirm study and site coverage'],
  ['ai-assistant', 'AI Assistant', 'Protocol assistant session', 'Medical Director', 'Review AI-generated recommendation'],
  ['ai-tools', 'AI Tools', 'Eligibility matching model run', 'Clinical Reviewer', 'Apply reviewed match list'],
] as const;

function buildSurface(slug: string, title: string, item: string, owner: string, nextStep: string): FeatureSurface {
  return {
    workItems: [
      { id: `${slug}-1`, item, status: 'Open', owner, nextStep },
      { id: `${slug}-2`, item: `${title} exception review`, status: 'Review', owner: 'Operations', nextStep: 'Investigate exception and assign owner' },
      { id: `${slug}-3`, item: `${title} weekly operating queue`, status: 'Queued', owner: 'Team Lead', nextStep: 'Prioritize next actions' },
    ],
    quickActions: [`Create ${title} record`, `Export ${title} list`, `Review ${title} exceptions`],
    controlChecks: [
      { id: `${slug}-check-1`, label: `${title} owner assigned`, done: true },
      { id: `${slug}-check-2`, label: `${title} next step documented`, done: false },
      { id: `${slug}-check-3`, label: `${title} audit trail current`, done: true },
    ],
    activityLog: [
      { id: `${slug}-log-1`, message: `${title} queue refreshed`, at: '2026-05-24 09:00' },
      { id: `${slug}-log-2`, message: `${title} exception assigned`, at: '2026-05-24 11:30' },
    ],
  };
}

export const featureSurfaceBySlug: Record<string, FeatureSurface> = Object.fromEntries(
  featureSeeds.map(([slug, title, item, owner, nextStep]) => [
    slug,
    buildSurface(slug, title, item, owner, nextStep),
  ]),
);

export const featureSurfaces: Record<string, FeatureSurface> = Object.fromEntries(
  featureSeeds.map(([slug, title]) => [title, featureSurfaceBySlug[slug]]),
);
