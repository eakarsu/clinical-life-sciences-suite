import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Database,
  Bot,
  CalendarCheck,
  ClipboardCheck,
  ClipboardList,
  FileText,
  Files,
  FlaskConical,
  LayoutDashboard,
  LucideIcon,
  Microscope,
  Pill,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
} from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type FeatureDefinition = {
  title: string;
  href: string;
  category: string;
  summary: string;
  bullets: string[];
};

export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};

export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const features = [
  {
    slug: 'studies',
    title: 'Studies',
    href: '/studies',
    category: 'Clinical Research',
    icon: Microscope,
    summary: 'Study portfolio, phase, sponsor, therapeutic area, risk, and milestone tracking.',
    bullets: ['Study portfolio', 'Milestones', 'Risk tracking'],
    metrics: [
      { label: 'Active Studies', value: '42', note: 'Portfolio' },
      { label: 'At Risk', value: '8', note: 'Need review' },
      { label: 'Milestones Due', value: '17', note: 'Next 14 days' },
    ],
  },
  {
    slug: 'participants',
    title: 'Participants',
    href: '/participants',
    category: 'Clinical Research',
    icon: Users,
    summary: 'Participant registry, eligibility, consent, enrollment status, and retention signals.',
    bullets: ['Eligibility', 'Consent', 'Retention'],
    metrics: [
      { label: 'Participants', value: '3.1K', note: 'Tracked' },
      { label: 'Screening', value: '284', note: 'Open' },
      { label: 'Retention Risk', value: '61', note: 'Flagged' },
    ],
  },
  {
    slug: 'trial-matching',
    title: 'Trial Matching',
    href: '/trial-matching',
    category: 'Clinical Research',
    icon: Activity,
    summary: 'AI-assisted patient-to-trial matching, inclusion/exclusion review, and match rationale.',
    bullets: ['Eligibility matching', 'Criteria review', 'Match rationale'],
    metrics: [
      { label: 'Matches', value: '438', note: 'This week' },
      { label: 'High Fit', value: '96', note: 'Ready for review' },
      { label: 'Criteria Conflicts', value: '34', note: 'Need adjudication' },
    ],
  },
  {
    slug: 'protocols',
    title: 'Protocols',
    href: '/protocols',
    category: 'Clinical Research',
    icon: ClipboardList,
    summary: 'Protocol drafts, amendments, deviations, review status, and version history.',
    bullets: ['Protocol drafts', 'Amendments', 'Deviations'],
    metrics: [
      { label: 'Protocols', value: '58', note: 'Managed' },
      { label: 'Amendments', value: '12', note: 'Open' },
      { label: 'Deviations', value: '21', note: 'Review queue' },
    ],
  },
  {
    slug: 'sites',
    title: 'Sites',
    href: '/sites',
    category: 'Trial Operations',
    icon: Workflow,
    summary: 'Site activation, feasibility, monitoring readiness, contracts, and visit cadence.',
    bullets: ['Site activation', 'Feasibility', 'Monitoring'],
    metrics: [
      { label: 'Sites', value: '126', note: 'Active network' },
      { label: 'Activation Holds', value: '14', note: 'Blocked' },
      { label: 'Monitoring Due', value: '31', note: 'This month' },
    ],
  },
  {
    slug: 'enrollment',
    title: 'Enrollment',
    href: '/enrollment',
    category: 'Trial Operations',
    icon: CalendarCheck,
    summary: 'Enrollment plan, screen failures, recruitment channel performance, and target pacing.',
    bullets: ['Recruitment', 'Screen failures', 'Enrollment pacing'],
    metrics: [
      { label: 'Enrolled', value: '1,842', note: 'Across studies' },
      { label: 'Behind Plan', value: '9', note: 'Studies' },
      { label: 'Screen Failures', value: '73', note: 'This month' },
    ],
  },
  {
    slug: 'study-visits',
    title: 'Study Visits',
    href: '/study-visits',
    category: 'Trial Operations',
    icon: CalendarCheck,
    summary: 'Visit windows, missed visits, procedure readiness, and follow-up requirements.',
    bullets: ['Visit windows', 'Missed visits', 'Procedure readiness'],
    metrics: [
      { label: 'Visits', value: '612', note: 'Next 30 days' },
      { label: 'Window Risk', value: '44', note: 'Flagged' },
      { label: 'Missed', value: '13', note: 'Need action' },
    ],
  },
  {
    slug: 'labs-specimens',
    title: 'Labs & Specimens',
    href: '/labs-specimens',
    category: 'Trial Operations',
    icon: FlaskConical,
    summary: 'Lab orders, specimen chain-of-custody, result status, and exception handling.',
    bullets: ['Lab orders', 'Specimen custody', 'Result status'],
    metrics: [
      { label: 'Specimens', value: '5.7K', note: 'Tracked' },
      { label: 'Exceptions', value: '26', note: 'Need review' },
      { label: 'Pending Results', value: '183', note: 'Open' },
    ],
  },
  {
    slug: 'adverse-events',
    title: 'Adverse Events',
    href: '/adverse-events',
    category: 'Safety',
    icon: ShieldCheck,
    summary: 'AE and SAE intake, causality, seriousness, follow-up, and reporting deadlines.',
    bullets: ['AE intake', 'SAE reporting', 'Follow-up'],
    metrics: [
      { label: 'Open AEs', value: '49', note: 'Active' },
      { label: 'SAEs', value: '6', note: 'Expedited' },
      { label: 'Due Today', value: '11', note: 'Reports' },
    ],
  },
  {
    slug: 'drug-safety',
    title: 'Drug Safety',
    href: '/drug-safety',
    category: 'Safety',
    icon: Pill,
    summary: 'Signal detection, case processing, safety narratives, and medical review queue.',
    bullets: ['Signal detection', 'Case processing', 'Medical review'],
    metrics: [
      { label: 'Cases', value: '132', note: 'Open' },
      { label: 'Signals', value: '9', note: 'Under review' },
      { label: 'Narratives', value: '41', note: 'Drafts' },
    ],
  },
  {
    slug: 'regulatory',
    title: 'Regulatory',
    href: '/regulatory',
    category: 'Regulatory',
    icon: ClipboardCheck,
    summary: 'Submissions, IRB packets, essential documents, evidence, and response deadlines.',
    bullets: ['Submissions', 'IRB packets', 'Essential docs'],
    metrics: [
      { label: 'Submissions', value: '37', note: 'In progress' },
      { label: 'IRB Holds', value: '8', note: 'Blocked' },
      { label: 'Responses Due', value: '15', note: 'Next 10 days' },
    ],
  },
  {
    slug: 'compliance',
    title: 'Compliance',
    href: '/compliance',
    category: 'Regulatory',
    icon: ShieldCheck,
    summary: 'GCP controls, training, monitoring findings, CAPAs, and inspection readiness.',
    bullets: ['GCP controls', 'Training', 'CAPAs'],
    metrics: [
      { label: 'Controls', value: '91%', note: 'Passing' },
      { label: 'Training Due', value: '24', note: 'Staff' },
      { label: 'CAPAs', value: '16', note: 'Open' },
    ],
  },
  {
    slug: 'data-management',
    title: 'Data Management',
    href: '/data-management',
    category: 'Data & Analytics',
    icon: BarChart3,
    summary: 'EDC status, queries, source data verification, lock readiness, and data quality.',
    bullets: ['EDC status', 'Data queries', 'Lock readiness'],
    metrics: [
      { label: 'Open Queries', value: '418', note: 'Across studies' },
      { label: 'SDV Complete', value: '84%', note: 'Current' },
      { label: 'Lock Risk', value: '5', note: 'Studies' },
    ],
  },
  {
    slug: 'biostatistics',
    title: 'Biostatistics',
    href: '/biostatistics',
    category: 'Data & Analytics',
    icon: BarChart3,
    summary: 'Analysis plans, interim looks, datasets, tables, figures, listings, and reviews.',
    bullets: ['Analysis plans', 'Interim looks', 'TFL reviews'],
    metrics: [
      { label: 'Analyses', value: '74', note: 'Open' },
      { label: 'TFLs', value: '286', note: 'Drafted' },
      { label: 'Review Holds', value: '19', note: 'Need action' },
    ],
  },
  {
    slug: 'medical-writing',
    title: 'Medical Writing',
    href: '/medical-writing',
    category: 'Data & Analytics',
    icon: FileText,
    summary: 'CSR drafts, clinical summaries, literature support, and review workflows.',
    bullets: ['CSR drafts', 'Clinical summaries', 'Literature support'],
    metrics: [
      { label: 'Documents', value: '64', note: 'In progress' },
      { label: 'Reviews', value: '27', note: 'Open' },
      { label: 'Due Soon', value: '9', note: 'Next week' },
    ],
  },
  {
    slug: 'literature-review',
    title: 'Literature Review',
    href: '/literature-review',
    category: 'Literature Intelligence',
    icon: FileText,
    summary: 'AIResearchLiteratureAgent capability elevated into a first-class workflow for multi-paper reviews, clinical evidence summaries, and gap analysis.',
    bullets: ['Multi-paper synthesis', 'Evidence gaps', 'Clinical summaries'],
    metrics: [
      { label: 'Review Sets', value: '38', note: 'Active' },
      { label: 'Papers Queued', value: '412', note: 'Awaiting synthesis' },
      { label: 'Evidence Gaps', value: '27', note: 'Flagged' },
    ],
  },
  {
    slug: 'citation-tracker',
    title: 'Citation Tracker',
    href: '/citation-tracker',
    category: 'Literature Intelligence',
    icon: ClipboardList,
    summary: 'Citation graph, BibTeX/Zotero export, DOI follow-up, and source traceability for clinical literature work.',
    bullets: ['Citation graph', 'DOI traceability', 'BibTeX/Zotero export'],
    metrics: [
      { label: 'Citations', value: '1.8K', note: 'Indexed' },
      { label: 'Missing DOI', value: '43', note: 'Need cleanup' },
      { label: 'Exports', value: '19', note: 'This week' },
    ],
  },
  {
    slug: 'paper-summaries',
    title: 'Paper Summaries',
    href: '/paper-summaries',
    category: 'Literature Intelligence',
    icon: FileText,
    summary: 'Paper abstract, methods, key findings, limitations, quality, and clinical relevance summaries.',
    bullets: ['Abstract summaries', 'Methodology quality', 'Clinical relevance'],
    metrics: [
      { label: 'Summaries', value: '286', note: 'Generated' },
      { label: 'Quality Holds', value: '18', note: 'Need review' },
      { label: 'Reviewer Edits', value: '64', note: 'This week' },
    ],
  },
  {
    slug: 'evidence-tables',
    title: 'Evidence Tables',
    href: '/evidence-tables',
    category: 'Literature Intelligence',
    icon: BarChart3,
    summary: 'Structured evidence tables for populations, interventions, comparators, outcomes, methods, and confidence scoring.',
    bullets: ['PICO extraction', 'Evidence grading', 'Exportable tables'],
    metrics: [
      { label: 'Evidence Rows', value: '734', note: 'Structured' },
      { label: 'Low Confidence', value: '52', note: 'Need review' },
      { label: 'Ready Exports', value: '11', note: 'Reviewer approved' },
    ],
  },
  {
    slug: 'documents',
    title: 'Documents',
    href: '/documents',
    category: 'Core Platform',
    icon: Files,
    summary: 'Protocols, consent forms, IRB packets, safety reports, datasets, and clinical summaries.',
    bullets: ['Protocols', 'IRB packets', 'Safety reports'],
    metrics: [
      { label: 'Documents', value: '592', note: 'Tracked' },
      { label: 'In Review', value: '78', note: 'Open' },
      { label: 'Uploaded', value: '94', note: 'This month' },
    ],
  },
  {
    slug: 'notifications',
    title: 'Notifications',
    href: '/notifications',
    category: 'Core Platform',
    icon: Bell,
    summary: 'Study, site, safety, regulatory, data, and medical-writing alerts.',
    bullets: ['Study alerts', 'Safety alerts', 'Regulatory reminders'],
    metrics: [
      { label: 'Unread', value: '39', note: 'Needs review' },
      { label: 'Critical', value: '7', note: 'Escalated' },
      { label: 'Resolved', value: '226', note: 'This week' },
    ],
  },
  {
    slug: 'integrations',
    title: 'Integrations',
    href: '/integrations',
    category: 'Core Platform',
    icon: Plug,
    summary: 'EDC, eTMF, CTMS, safety database, lab, and document-system connector health.',
    bullets: ['EDC sync', 'eTMF documents', 'Safety database'],
    metrics: [
      { label: 'Connectors', value: '14', note: 'Configured' },
      { label: 'Warnings', value: '4', note: 'Need attention' },
      { label: 'Last Sync', value: '5m', note: 'CTMS data' },
    ],
  },
  {
    slug: 'profiles',
    title: 'Profiles',
    href: '/profiles',
    category: 'Core Platform',
    icon: UserRound,
    summary: 'Study team profiles, role permissions, site assignments, sponsor access, and coverage.',
    bullets: ['Study teams', 'Role permissions', 'Site assignments'],
    metrics: [
      { label: 'Users', value: '96', note: 'Active' },
      { label: 'Study Teams', value: '22', note: 'Configured' },
      { label: 'Access Reviews', value: '6', note: 'Open' },
    ],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: 'Clinical research assistant for protocol review, trial matching, safety narratives, and regulatory drafts.',
    bullets: ['Protocol review', 'Trial matching', 'Safety narratives'],
    metrics: [
      { label: 'Sessions', value: '134', note: 'Last 24 hours' },
      { label: 'Drafts', value: '206', note: 'Generated' },
      { label: 'Medical Reviews', value: '18', note: 'Escalated' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: 'Targeted AI tools for eligibility matching, protocol deviation review, safety signal triage, and literature support.',
    bullets: ['Eligibility matching', 'Deviation review', 'Literature support'],
    metrics: [
      { label: 'Runs', value: '342', note: 'Last 24 hours' },
      { label: 'Signals', value: '78', note: 'New alerts' },
      { label: 'Reviewed', value: '113', note: 'Accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({
  label: feature.title,
  href: feature.href,
  icon: feature.icon,
}));

export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({
  title: feature.title,
  href: feature.href,
  category: feature.category,
  summary: feature.summary,
  bullets: [...feature.bullets],
}));

export const featureFamilies = [
  { name: 'Clinical Research', features: ['Studies', 'Participants', 'Trial Matching', 'Protocols'] },
  { name: 'Trial Operations', features: ['Sites', 'Enrollment', 'Study Visits', 'Labs & Specimens'] },
  { name: 'Safety', features: ['Adverse Events', 'Drug Safety'] },
  { name: 'Regulatory', features: ['Regulatory', 'Compliance'] },
  { name: 'Data & Analytics', features: ['Data Management', 'Biostatistics', 'Medical Writing'] },
  { name: 'Literature Intelligence', features: ['Literature Review', 'Citation Tracker', 'Paper Summaries', 'Evidence Tables'] },
  { name: 'Intelligence Layer', features: ['AI Assistant', 'AI Tools'] },
  { name: 'Core Platform', features: ['Documents', 'Notifications', 'Integrations', 'Profiles'] },
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: `${feature.title} is normalized from the clinical and life-sciences source applications into one merged suite workflow.`,
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(
  features.map((feature) => [feature.slug, toPage(feature)]),
);

export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(
  aiFeatures.map((feature) => [feature.slug, toPage(feature)]),
);

export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: [
        feature.category === 'Safety'
          ? 'AIDrugInteractionChecker and AIPharmaTrialDesigner'
          : feature.category === 'Literature Intelligence'
            ? 'AIResearchLiteratureAgent'
            : 'Clinical trial source apps',
        feature.category === 'Intelligence Layer' ? 'AIClinicalTrialMatching and AIResearchLiteratureAgent' : 'Life-sciences operations apps',
      ],
      operatingQueues: [`${feature.title} records`, `${feature.title} approvals`, `${feature.title} exceptions`],
      outputs: [`${feature.title} dashboard`, `${feature.title} export`, `${feature.title} audit trail`],
      relatedRoutes: [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'All Features', href: '/features' },
        { label: 'Data Management', href: '/data-management' },
      ],
    },
  ]),
);
