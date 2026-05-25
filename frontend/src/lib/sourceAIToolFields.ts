export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "ai-native-discovery-engines-discovery-agent-y7ds2s-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Discovery Agent source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DiscoveryAgent.tsx"
    }
  ],
  "ai-native-discovery-engines-ai-5cuwes-exact-ai": [
    {
      "name": "abstract",
      "label": "Abstract",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "applicant_focus",
      "label": "Applicant Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "conclusion",
      "label": "Conclusion",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_summary",
      "label": "Data Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dataset_name",
      "label": "Dataset Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "depth",
      "label": "Depth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "design",
      "label": "Design",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "domain",
      "label": "Domain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "expected_range",
      "label": "Expected Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "experiment_id",
      "label": "Experiment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "focus_area",
      "label": "Focus Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hypothesis",
      "label": "Hypothesis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "intended_use",
      "label": "Intended Use",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdictions",
      "label": "Jurisdictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "methodology",
      "label": "Methodology",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "methods",
      "label": "Methods",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "outcome",
      "label": "Outcome",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "prior_results",
      "label": "Prior Results",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_id",
      "label": "Project Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "result_data",
      "label": "Result Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "result_id",
      "label": "Result Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "schema_summary",
      "label": "Schema Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "seed_papers",
      "label": "Seed Papers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "significance_pct",
      "label": "Significance Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "size",
      "label": "Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "study_type",
      "label": "Study Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "technology",
      "label": "Technology",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "time_window",
      "label": "Time Window",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "units",
      "label": "Units",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-native-discovery-engines-discovery-agent-14ebov-exact-ai": [
    {
      "name": "auto_run = true",
      "label": "Auto Run = True",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/discovery-agent.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/discovery-agent.js"
    },
    {
      "name": "iterations_planned = 3",
      "label": "Iterations Planned = 3",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/discovery-agent.js"
    },
    {
      "name": "project_id = null",
      "label": "Project Id = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/discovery-agent.js"
    }
  ],
  "ai-native-discovery-engines-gap-ai-auto-iterate-loop-1crm02-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Auto Iterate Loop source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-auto-iterate-loop.js"
    }
  ],
  "ai-native-discovery-engines-gap-ai-citation-impact-predictor-odgxwj-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Citation Impact Predictor source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-citation-impact-predictor.js"
    }
  ],
  "ai-native-discovery-engines-gap-ai-protocol-optimizer-kopxwy-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Protocol Optimizer source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-protocol-optimizer.js"
    }
  ],
  "ai-native-discovery-engines-gap-ai-result-significance-test-1sf7s5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Result Significance Test source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-result-significance-test.js"
    }
  ],
  "ai-native-discovery-engines-gap-ai-team-composition-optimizer-umyr70-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Team Composition Optimizer source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-team-composition-optimizer.js"
    }
  ],
  "ai-native-discovery-engines-gap-nonai-doi-connector-1i031x-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Nonai Doi Connector source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-nonai-doi-connector.js"
    }
  ],
  "ai-native-discovery-engines-gap-nonai-hypothesis-comments-1o6vou-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Nonai Hypothesis Comments source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-nonai-hypothesis-comments.js"
    }
  ],
  "ai-native-discovery-engines-gap-nonai-lab-equipment-1d1zz4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Nonai Lab Equipment source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-nonai-lab-equipment.js"
    }
  ],
  "ai-native-discovery-engines-gap-nonai-protocol-versioning-1h22d7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Nonai Protocol Versioning source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-nonai-protocol-versioning.js"
    }
  ],
  "ai-native-discovery-engines-gap-nonai-raw-data-uploads-9ovhm1-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Nonai Raw Data Uploads source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-nonai-raw-data-uploads.js"
    }
  ],
  "ai-native-discovery-engines-gap-nonai-reproducibility-package-r6yr88-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Nonai Reproducibility Package source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-nonai-reproducibility-package.js"
    }
  ],
  "ai-native-discovery-engines-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Discovery Agent source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DiscoveryAgent.tsx"
    },
    {
      "name": "abstract",
      "label": "Abstract",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "applicant_focus",
      "label": "Applicant Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "conclusion",
      "label": "Conclusion",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_summary",
      "label": "Data Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dataset_name",
      "label": "Dataset Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "depth",
      "label": "Depth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "design",
      "label": "Design",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "domain",
      "label": "Domain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "expected_range",
      "label": "Expected Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "experiment_id",
      "label": "Experiment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "focus_area",
      "label": "Focus Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hypothesis",
      "label": "Hypothesis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "intended_use",
      "label": "Intended Use",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdictions",
      "label": "Jurisdictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "methodology",
      "label": "Methodology",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "methods",
      "label": "Methods",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "outcome",
      "label": "Outcome",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "prior_results",
      "label": "Prior Results",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_id",
      "label": "Project Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "result_data",
      "label": "Result Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "result_id",
      "label": "Result Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "schema_summary",
      "label": "Schema Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "seed_papers",
      "label": "Seed Papers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "significance_pct",
      "label": "Significance Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "size",
      "label": "Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "study_type",
      "label": "Study Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "technology",
      "label": "Technology",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "time_window",
      "label": "Time Window",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "units",
      "label": "Units",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "auto_run = true",
      "label": "Auto Run = True",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/discovery-agent.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/discovery-agent.js"
    },
    {
      "name": "iterations_planned = 3",
      "label": "Iterations Planned = 3",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/discovery-agent.js"
    },
    {
      "name": "project_id = null",
      "label": "Project Id = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/discovery-agent.js"
    }
  ],
  "ai-native-discovery-engines-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Discovery Agent source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DiscoveryAgent.tsx"
    },
    {
      "name": "abstract",
      "label": "Abstract",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "applicant_focus",
      "label": "Applicant Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "conclusion",
      "label": "Conclusion",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_summary",
      "label": "Data Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dataset_name",
      "label": "Dataset Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "depth",
      "label": "Depth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "design",
      "label": "Design",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "domain",
      "label": "Domain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "expected_range",
      "label": "Expected Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "experiment_id",
      "label": "Experiment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "focus_area",
      "label": "Focus Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hypothesis",
      "label": "Hypothesis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "intended_use",
      "label": "Intended Use",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdictions",
      "label": "Jurisdictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "methodology",
      "label": "Methodology",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "methods",
      "label": "Methods",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "outcome",
      "label": "Outcome",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "prior_results",
      "label": "Prior Results",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "project_id",
      "label": "Project Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "result_data",
      "label": "Result Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "result_id",
      "label": "Result Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "schema_summary",
      "label": "Schema Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "seed_papers",
      "label": "Seed Papers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "significance_pct",
      "label": "Significance Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "size",
      "label": "Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "study_type",
      "label": "Study Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "technology",
      "label": "Technology",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "time_window",
      "label": "Time Window",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "units",
      "label": "Units",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "auto_run = true",
      "label": "Auto Run = True",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/discovery-agent.js"
    },
    {
      "name": "goal",
      "label": "Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/discovery-agent.js"
    },
    {
      "name": "iterations_planned = 3",
      "label": "Iterations Planned = 3",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/discovery-agent.js"
    },
    {
      "name": "project_id = null",
      "label": "Project Id = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/discovery-agent.js"
    }
  ],
  "ai-building-safety-inspector-agentic-safety-inspector-orchestrating-site-walk-p-page-rfsoiv-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Safety Inspector Orchestrating Site Walk P Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgenticSafetyInspectorOrchestratingSiteWalkPPage.jsx"
    }
  ],
  "ai-building-safety-inspector-no-ai-checklist-generator-from-local-building-code-page-b8xag4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Checklist Generator From Local Building Code Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiChecklistGeneratorFromLocalBuildingCodePage.jsx"
    }
  ],
  "ai-building-safety-inspector-no-ai-training-content-generator-from-incidents-page-14u0ha-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Training Content Generator From Incidents Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NoAiTrainingContentGeneratorFromIncidentsPage.jsx"
    }
  ],
  "ai-building-safety-inspector-agentic-safety-inspector-p62cfs-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Safety Inspector source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticSafetyInspector.js"
    }
  ],
  "ai-building-safety-inspector-agents-bn6792-exact-ai": [
    {
      "name": "personas",
      "label": "Personas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "site_name",
      "label": "Site Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "task",
      "label": "Task",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    }
  ],
  "ai-building-safety-inspector-ai-5cuwes-exact-ai": [
    {
      "name": "air_quality_index",
      "label": "Air Quality Index",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "anchor_points",
      "label": "Anchor Points",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "behavioral_observations",
      "label": "Behavioral Observations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contractor_name",
      "label": "Contractor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "crew_size",
      "label": "Crew Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "days_lost",
      "label": "Days Lost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "duration_min",
      "label": "Duration Min",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "energy_sources",
      "label": "Energy Sources",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "equipment_damage",
      "label": "Equipment Damage",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "equipment_description",
      "label": "Equipment Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "equipment_id",
      "label": "Equipment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "equipment_used",
      "label": "Equipment Used",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "heat_index_f",
      "label": "Heat Index F",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "height_ft",
      "label": "Height Ft",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "humidity_pct",
      "label": "Humidity Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident_history",
      "label": "Incident History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident_id",
      "label": "Incident Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident_type",
      "label": "Incident Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "insurance_summary",
      "label": "Insurance Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "intervention_cost",
      "label": "Intervention Cost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "medical_cost",
      "label": "Medical Cost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "near_misses",
      "label": "Near Misses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "noise_db",
      "label": "Noise Db",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "period = 'weekly'",
      "label": "Period = 'Weekly'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "ppe_available",
      "label": "Ppe Available",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "references",
      "label": "References",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "report_type",
      "label": "Report Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "reporting_rate",
      "label": "Reporting Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "required_certifications",
      "label": "Required Certifications",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "rescue_resources",
      "label": "Rescue Resources",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "safety_meetings_count",
      "label": "Safety Meetings Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "scope_of_work",
      "label": "Scope Of Work",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "shade_available",
      "label": "Shade Available",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "site_name",
      "label": "Site Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "task",
      "label": "Task",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "task_description",
      "label": "Task Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "temperature_f",
      "label": "Temperature F",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "water_supply",
      "label": "Water Supply",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "weather_forecast",
      "label": "Weather Forecast",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "work_description",
      "label": "Work Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "work_intensity",
      "label": "Work Intensity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-building-safety-inspector-gap-no-ai-checklist-generator-from-local-building-code-177mum-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Checklist Generator From Local Building Code source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_checklist_generator_from_local_building_code.js"
    }
  ],
  "ai-building-safety-inspector-gap-no-ai-training-content-generator-from-incidents-1rnmv8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Training Content Generator From Incidents source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_training_content_generator_from_incidents.js"
    }
  ],
  "ai-building-safety-inspector-training-1iusxl-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Training source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    }
  ],
  "ai-building-safety-inspector-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Safety Inspector Orchestrating Site Walk P Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgenticSafetyInspectorOrchestratingSiteWalkPPage.jsx"
    },
    {
      "name": "personas",
      "label": "Personas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "site_name",
      "label": "Site Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "task",
      "label": "Task",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "air_quality_index",
      "label": "Air Quality Index",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "anchor_points",
      "label": "Anchor Points",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "behavioral_observations",
      "label": "Behavioral Observations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contractor_name",
      "label": "Contractor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "crew_size",
      "label": "Crew Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "days_lost",
      "label": "Days Lost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "duration_min",
      "label": "Duration Min",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "energy_sources",
      "label": "Energy Sources",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "equipment_damage",
      "label": "Equipment Damage",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "equipment_description",
      "label": "Equipment Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "equipment_id",
      "label": "Equipment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "equipment_used",
      "label": "Equipment Used",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "heat_index_f",
      "label": "Heat Index F",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "height_ft",
      "label": "Height Ft",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "humidity_pct",
      "label": "Humidity Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident_history",
      "label": "Incident History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident_id",
      "label": "Incident Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident_type",
      "label": "Incident Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "insurance_summary",
      "label": "Insurance Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "intervention_cost",
      "label": "Intervention Cost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "medical_cost",
      "label": "Medical Cost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "near_misses",
      "label": "Near Misses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "noise_db",
      "label": "Noise Db",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "period = 'weekly'",
      "label": "Period = 'Weekly'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "ppe_available",
      "label": "Ppe Available",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "references",
      "label": "References",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "report_type",
      "label": "Report Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "reporting_rate",
      "label": "Reporting Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "required_certifications",
      "label": "Required Certifications",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "rescue_resources",
      "label": "Rescue Resources",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "safety_meetings_count",
      "label": "Safety Meetings Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "scope_of_work",
      "label": "Scope Of Work",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "shade_available",
      "label": "Shade Available",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "task_description",
      "label": "Task Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "temperature_f",
      "label": "Temperature F",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "water_supply",
      "label": "Water Supply",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "weather_forecast",
      "label": "Weather Forecast",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "work_description",
      "label": "Work Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "work_intensity",
      "label": "Work Intensity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-building-safety-inspector-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Safety Inspector Orchestrating Site Walk P Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgenticSafetyInspectorOrchestratingSiteWalkPPage.jsx"
    },
    {
      "name": "personas",
      "label": "Personas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "site_name",
      "label": "Site Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "task",
      "label": "Task",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    },
    {
      "name": "air_quality_index",
      "label": "Air Quality Index",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "anchor_points",
      "label": "Anchor Points",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "behavioral_observations",
      "label": "Behavioral Observations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "contractor_name",
      "label": "Contractor Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "crew_size",
      "label": "Crew Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "days_lost",
      "label": "Days Lost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "duration_min",
      "label": "Duration Min",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "energy_sources",
      "label": "Energy Sources",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "equipment_damage",
      "label": "Equipment Damage",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "equipment_description",
      "label": "Equipment Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "equipment_id",
      "label": "Equipment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "equipment_used",
      "label": "Equipment Used",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "heat_index_f",
      "label": "Heat Index F",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "height_ft",
      "label": "Height Ft",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "humidity_pct",
      "label": "Humidity Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident_history",
      "label": "Incident History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident_id",
      "label": "Incident Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "incident_type",
      "label": "Incident Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "insurance_summary",
      "label": "Insurance Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "intervention_cost",
      "label": "Intervention Cost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "medical_cost",
      "label": "Medical Cost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "near_misses",
      "label": "Near Misses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "noise_db",
      "label": "Noise Db",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "period = 'weekly'",
      "label": "Period = 'Weekly'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "ppe_available",
      "label": "Ppe Available",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "references",
      "label": "References",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "report_type",
      "label": "Report Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "reporting_rate",
      "label": "Reporting Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "required_certifications",
      "label": "Required Certifications",
      "type": "checkbox",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "rescue_resources",
      "label": "Rescue Resources",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "safety_meetings_count",
      "label": "Safety Meetings Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "scope_of_work",
      "label": "Scope Of Work",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "shade_available",
      "label": "Shade Available",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "task_description",
      "label": "Task Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "temperature_f",
      "label": "Temperature F",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "water_supply",
      "label": "Water Supply",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "weather_forecast",
      "label": "Weather Forecast",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "work_description",
      "label": "Work Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "work_intensity",
      "label": "Work Intensity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-dream-journal-analyzer-ai-analysis-7j31eb-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Analysis source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAnalysis.jsx"
    }
  ],
  "ai-dream-journal-analyzer-ai-5cuwes-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dreamContent",
      "label": "Dream Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "experience_level",
      "label": "Experience Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "symbol",
      "label": "Symbol",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-dream-journal-analyzer-ai-new-7q6oy0-exact-ai": [
    {
      "name": "alcohol_units",
      "label": "Alcohol Units",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "caffeine_mg",
      "label": "Caffeine Mg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "days",
      "label": "Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "dream_id",
      "label": "Dream Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "exercise_minutes",
      "label": "Exercise Minutes",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "log_date",
      "label": "Log Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "meditation_minutes",
      "label": "Meditation Minutes",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "recurring_dream_id",
      "label": "Recurring Dream Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "screen_time_minutes",
      "label": "Screen Time Minutes",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "week_start_date",
      "label": "Week Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-dream-journal-analyzer-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Analysis source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAnalysis.jsx"
    },
    {
      "name": "dreamContent",
      "label": "Dream Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "experience_level",
      "label": "Experience Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "symbol",
      "label": "Symbol",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "alcohol_units",
      "label": "Alcohol Units",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "caffeine_mg",
      "label": "Caffeine Mg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "days",
      "label": "Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "dream_id",
      "label": "Dream Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "exercise_minutes",
      "label": "Exercise Minutes",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "log_date",
      "label": "Log Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "meditation_minutes",
      "label": "Meditation Minutes",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "recurring_dream_id",
      "label": "Recurring Dream Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "screen_time_minutes",
      "label": "Screen Time Minutes",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "week_start_date",
      "label": "Week Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-dream-journal-analyzer-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Analysis source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAnalysis.jsx"
    },
    {
      "name": "dreamContent",
      "label": "Dream Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "experience_level",
      "label": "Experience Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "symbol",
      "label": "Symbol",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "alcohol_units",
      "label": "Alcohol Units",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "caffeine_mg",
      "label": "Caffeine Mg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "days",
      "label": "Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "dream_id",
      "label": "Dream Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "exercise_minutes",
      "label": "Exercise Minutes",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "log_date",
      "label": "Log Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "meditation_minutes",
      "label": "Meditation Minutes",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "recurring_dream_id",
      "label": "Recurring Dream Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "screen_time_minutes",
      "label": "Screen Time Minutes",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "week_start_date",
      "label": "Week Start Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-drug-interaction-checker-audit-ai-summary-page-1ijklh-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Audit AI Summary Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AuditAISummaryPage.js"
    }
  ],
  "ai-drug-interaction-checker-contraindications-page-h2m3pc-exact-ai": [
    {
      "name": "drug_id",
      "label": "Drug Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ContraindicationsPage.js"
    },
    {
      "name": "patient_conditions",
      "label": "Patient Conditions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ContraindicationsPage.js"
    }
  ],
  "ai-drug-interaction-checker-agentic-pharmacist-1hby9u-exact-ai": [
    {
      "name": "drug_ids = []",
      "label": "Drug Ids = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticPharmacist.js"
    },
    {
      "name": "messages = []",
      "label": "Messages = []",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticPharmacist.js"
    },
    {
      "name": "patient_id",
      "label": "Patient Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticPharmacist.js"
    }
  ],
  "ai-drug-interaction-checker-ai-expanded-v8ebz2-exact-ai": [
    {
      "name": "condition",
      "label": "Condition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpanded.js"
    },
    {
      "name": "drug_id",
      "label": "Drug Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpanded.js"
    },
    {
      "name": "drug_ids",
      "label": "Drug Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpanded.js"
    },
    {
      "name": "patient_age_years",
      "label": "Patient Age Years",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpanded.js"
    },
    {
      "name": "patient_id",
      "label": "Patient Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpanded.js"
    },
    {
      "name": "patient_weight_kg",
      "label": "Patient Weight Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpanded.js"
    },
    {
      "name": "reason",
      "label": "Reason",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpanded.js"
    },
    {
      "name": "renal_function",
      "label": "Renal Function",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpanded.js"
    }
  ],
  "ai-drug-interaction-checker-contraindications-1ltmpw-exact-ai": [
    {
      "name": "condition",
      "label": "Condition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/contraindications.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/contraindications.js"
    },
    {
      "name": "drug_id",
      "label": "Drug Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/contraindications.js"
    },
    {
      "name": "evidence_level",
      "label": "Evidence Level",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/contraindications.js"
    },
    {
      "name": "patient_conditions",
      "label": "Patient Conditions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/contraindications.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/contraindications.js"
    }
  ],
  "ai-drug-interaction-checker-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Audit AI Summary Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AuditAISummaryPage.js"
    },
    {
      "name": "drug_id",
      "label": "Drug Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ContraindicationsPage.js"
    },
    {
      "name": "patient_conditions",
      "label": "Patient Conditions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ContraindicationsPage.js"
    },
    {
      "name": "drug_ids = []",
      "label": "Drug Ids = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticPharmacist.js"
    },
    {
      "name": "messages = []",
      "label": "Messages = []",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticPharmacist.js"
    },
    {
      "name": "patient_id",
      "label": "Patient Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticPharmacist.js"
    },
    {
      "name": "condition",
      "label": "Condition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpanded.js"
    },
    {
      "name": "drug_ids",
      "label": "Drug Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpanded.js"
    },
    {
      "name": "patient_age_years",
      "label": "Patient Age Years",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpanded.js"
    },
    {
      "name": "patient_weight_kg",
      "label": "Patient Weight Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpanded.js"
    },
    {
      "name": "reason",
      "label": "Reason",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpanded.js"
    },
    {
      "name": "renal_function",
      "label": "Renal Function",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpanded.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/contraindications.js"
    },
    {
      "name": "evidence_level",
      "label": "Evidence Level",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/contraindications.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/contraindications.js"
    }
  ],
  "ai-drug-interaction-checker-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Audit AI Summary Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AuditAISummaryPage.js"
    },
    {
      "name": "drug_id",
      "label": "Drug Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ContraindicationsPage.js"
    },
    {
      "name": "patient_conditions",
      "label": "Patient Conditions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ContraindicationsPage.js"
    },
    {
      "name": "drug_ids = []",
      "label": "Drug Ids = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticPharmacist.js"
    },
    {
      "name": "messages = []",
      "label": "Messages = []",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticPharmacist.js"
    },
    {
      "name": "patient_id",
      "label": "Patient Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticPharmacist.js"
    },
    {
      "name": "condition",
      "label": "Condition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpanded.js"
    },
    {
      "name": "drug_ids",
      "label": "Drug Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpanded.js"
    },
    {
      "name": "patient_age_years",
      "label": "Patient Age Years",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpanded.js"
    },
    {
      "name": "patient_weight_kg",
      "label": "Patient Weight Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpanded.js"
    },
    {
      "name": "reason",
      "label": "Reason",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpanded.js"
    },
    {
      "name": "renal_function",
      "label": "Renal Function",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExpanded.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/contraindications.js"
    },
    {
      "name": "evidence_level",
      "label": "Evidence Level",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/contraindications.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/contraindications.js"
    }
  ],
  "ai-employee-benefits-optimizer-agentic-enrollment-19ju9e-exact-ai": [
    {
      "name": "brief",
      "label": "Brief",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticEnrollment.js"
    },
    {
      "name": "budget_monthly",
      "label": "Budget Monthly",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticEnrollment.js"
    },
    {
      "name": "employer_id",
      "label": "Employer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticEnrollment.js"
    },
    {
      "name": "family_size",
      "label": "Family Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticEnrollment.js"
    }
  ],
  "ai-employee-benefits-optimizer-ai-j615h1-exact-ai": [
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "availablePlans",
      "label": "Available Plans",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "benchmarkData",
      "label": "Benchmark Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "billingData",
      "label": "Billing Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "carrierData",
      "label": "Carrier Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "claimsData",
      "label": "Claims Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "complianceData",
      "label": "Compliance Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "contentType",
      "label": "Content Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "costData",
      "label": "Cost Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "criteria",
      "label": "Criteria",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dependentData",
      "label": "Dependent Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "documentData",
      "label": "Document Data",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "employeeProfile",
      "label": "Employee Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "enrollmentData",
      "label": "Enrollment Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "fsaHsaData",
      "label": "Fsa Hsa Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "lifeEventsData",
      "label": "Life Events Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "plans",
      "label": "Plans",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "scenario",
      "label": "Scenario",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "wellnessData",
      "label": "Wellness Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-employee-benefits-optimizer-ai-analyses-m7wkp7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Analyses source input context",
      "options": [],
      "required": false,
      "source": "server/routes/aiAnalyses.js"
    }
  ],
  "ai-employee-benefits-optimizer-ai-new-1l6olc-exact-ai": [
    {
      "name": "age_out_years",
      "label": "Age Out Years",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "age_out_years = 26",
      "label": "Age Out Years = 26",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "carrier_id",
      "label": "Carrier Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "carrier_name",
      "label": "Carrier Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "employee_id",
      "label": "Employee Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "focus_area",
      "label": "Focus Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "horizon_years = 3",
      "label": "Horizon Years = 3",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "lookahead_days = 365",
      "label": "Lookahead Days = 365",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "lookback_months = 12",
      "label": "Lookback Months = 12",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "metric = 'all'",
      "label": "Metric = 'All'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "plan_id",
      "label": "Plan Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "program_id",
      "label": "Program Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "qualifying_event = 'termination'",
      "label": "Qualifying Event = 'Termination'",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "regulatory_regime",
      "label": "Regulatory Regime",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "regulatory_regime = 'federal'",
      "label": "Regulatory Regime = 'Federal'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "scenario_assumptions",
      "label": "Scenario Assumptions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "years_back = 3",
      "label": "Years Back = 3",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    }
  ],
  "ai-employee-benefits-optimizer-claims-mbyvno-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Claims source input context",
      "options": [],
      "required": false,
      "source": "server/routes/claims.js"
    }
  ],
  "ai-employee-benefits-optimizer-ai-tools-1977ko-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Tools source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    }
  ],
  "ai-employee-benefits-optimizer-claims-ukjbkv-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Claims source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/Claims.js"
    }
  ],
  "ai-employee-benefits-optimizer-source-workflow": [
    {
      "name": "brief",
      "label": "Brief",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticEnrollment.js"
    },
    {
      "name": "budget_monthly",
      "label": "Budget Monthly",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticEnrollment.js"
    },
    {
      "name": "employer_id",
      "label": "Employer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticEnrollment.js"
    },
    {
      "name": "family_size",
      "label": "Family Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticEnrollment.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "availablePlans",
      "label": "Available Plans",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "benchmarkData",
      "label": "Benchmark Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "billingData",
      "label": "Billing Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "carrierData",
      "label": "Carrier Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "claimsData",
      "label": "Claims Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "complianceData",
      "label": "Compliance Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "contentType",
      "label": "Content Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Analyses source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "costData",
      "label": "Cost Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "criteria",
      "label": "Criteria",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dependentData",
      "label": "Dependent Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "documentData",
      "label": "Document Data",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "employeeProfile",
      "label": "Employee Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "enrollmentData",
      "label": "Enrollment Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "fsaHsaData",
      "label": "Fsa Hsa Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "lifeEventsData",
      "label": "Life Events Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "plans",
      "label": "Plans",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "scenario",
      "label": "Scenario",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "wellnessData",
      "label": "Wellness Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "age_out_years",
      "label": "Age Out Years",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "age_out_years = 26",
      "label": "Age Out Years = 26",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "carrier_id",
      "label": "Carrier Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "carrier_name",
      "label": "Carrier Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "employee_id",
      "label": "Employee Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "focus_area",
      "label": "Focus Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "horizon_years = 3",
      "label": "Horizon Years = 3",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "lookahead_days = 365",
      "label": "Lookahead Days = 365",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "lookback_months = 12",
      "label": "Lookback Months = 12",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "metric = 'all'",
      "label": "Metric = 'All'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "plan_id",
      "label": "Plan Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "program_id",
      "label": "Program Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "qualifying_event = 'termination'",
      "label": "Qualifying Event = 'Termination'",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "regulatory_regime",
      "label": "Regulatory Regime",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "regulatory_regime = 'federal'",
      "label": "Regulatory Regime = 'Federal'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "scenario_assumptions",
      "label": "Scenario Assumptions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "years_back = 3",
      "label": "Years Back = 3",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    }
  ],
  "ai-employee-benefits-optimizer-ai-tools": [
    {
      "name": "brief",
      "label": "Brief",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticEnrollment.js"
    },
    {
      "name": "budget_monthly",
      "label": "Budget Monthly",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticEnrollment.js"
    },
    {
      "name": "employer_id",
      "label": "Employer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticEnrollment.js"
    },
    {
      "name": "family_size",
      "label": "Family Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticEnrollment.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "availablePlans",
      "label": "Available Plans",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "benchmarkData",
      "label": "Benchmark Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "billingData",
      "label": "Billing Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "carrierData",
      "label": "Carrier Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "claimsData",
      "label": "Claims Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "complianceData",
      "label": "Compliance Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "contentType",
      "label": "Content Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Analyses source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "costData",
      "label": "Cost Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "criteria",
      "label": "Criteria",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "dependentData",
      "label": "Dependent Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "documentData",
      "label": "Document Data",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "employeeProfile",
      "label": "Employee Profile",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "enrollmentData",
      "label": "Enrollment Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "fsaHsaData",
      "label": "Fsa Hsa Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "lifeEventsData",
      "label": "Life Events Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "plans",
      "label": "Plans",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "scenario",
      "label": "Scenario",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "wellnessData",
      "label": "Wellness Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "age_out_years",
      "label": "Age Out Years",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "age_out_years = 26",
      "label": "Age Out Years = 26",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "carrier_id",
      "label": "Carrier Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "carrier_name",
      "label": "Carrier Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "employee_id",
      "label": "Employee Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "focus_area",
      "label": "Focus Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "horizon_years = 3",
      "label": "Horizon Years = 3",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "lookahead_days = 365",
      "label": "Lookahead Days = 365",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "lookback_months = 12",
      "label": "Lookback Months = 12",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "metric = 'all'",
      "label": "Metric = 'All'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "plan_id",
      "label": "Plan Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "program_id",
      "label": "Program Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "qualifying_event = 'termination'",
      "label": "Qualifying Event = 'Termination'",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "regulatory_regime",
      "label": "Regulatory Regime",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "regulatory_regime = 'federal'",
      "label": "Regulatory Regime = 'Federal'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "scenario_assumptions",
      "label": "Scenario Assumptions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "years_back = 3",
      "label": "Years Back = 3",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    }
  ],
  "ai-employee-sentiment-analyzer-agentic-hr-partner-1sljgb-exact-ai": [
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticHrPartner.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticHrPartner.js"
    }
  ],
  "ai-employee-sentiment-analyzer-ai-new-7q6oy0-exact-ai": [
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "identified_issues",
      "label": "Identified Issues",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "leader_name",
      "label": "Leader Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "lookback_days",
      "label": "Lookback Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "metric_type",
      "label": "Metric Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "texts",
      "label": "Texts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-employee-sentiment-analyzer-source-workflow": [
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticHrPartner.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticHrPartner.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "identified_issues",
      "label": "Identified Issues",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "leader_name",
      "label": "Leader Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "lookback_days",
      "label": "Lookback Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "metric_type",
      "label": "Metric Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "texts",
      "label": "Texts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-employee-sentiment-analyzer-ai-tools": [
    {
      "name": "department",
      "label": "Department",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticHrPartner.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticHrPartner.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "identified_issues",
      "label": "Identified Issues",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "leader_name",
      "label": "Leader Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "lookback_days",
      "label": "Lookback Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "metric_type",
      "label": "Metric Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "texts",
      "label": "Texts",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-esports-performance-analyzer-match-detail-14y9qd-exact-ai": [
    {
      "name": "match_date",
      "label": "Match Date",
      "type": "datetime-local",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": true,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "team1_id",
      "label": "Team 1",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": true,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "team2_id",
      "label": "Team 2",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": true,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "duration_minutes",
      "label": "Map",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "map",
      "label": "Score Team 2",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "score_team1",
      "label": "Match Date",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "score_team2",
      "label": "Score Team 1",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "tournament_id",
      "label": "Tournament",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "winner_id",
      "label": "Duration (minutes)",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/MatchDetail.js"
    }
  ],
  "ai-esports-performance-analyzer-player-detail-1b0ako-exact-ai": [
    {
      "name": "game",
      "label": "Real Name",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "League of Legends",
        "CS2",
        "Valorant",
        "Dota 2",
        "Overwatch 2",
        "{g}"
      ],
      "required": true,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "username",
      "label": "Username",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "League of Legends",
        "CS2",
        "Valorant",
        "Dota 2",
        "Overwatch 2",
        "{g}"
      ],
      "required": true,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "accuracy",
      "label": "APM",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "apm",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "bio",
      "label": "Win Rate (%)",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "kda",
      "label": "Positioning Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "positioning_score",
      "label": "Accuracy (%)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "real_name",
      "label": "Username",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "League of Legends",
        "CS2",
        "Valorant",
        "Dota 2",
        "Overwatch 2",
        "{g}"
      ],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "role",
      "label": "Game",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "League of Legends",
        "CS2",
        "Valorant",
        "Dota 2",
        "Overwatch 2",
        "{g}",
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "team_id",
      "label": "Role",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{g}",
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "winrate",
      "label": "KDA",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    }
  ],
  "ai-esports-performance-analyzer-team-detail-18h4a8-exact-ai": [
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": true,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "coach",
      "label": "Losses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "description",
      "label": "Founded Year",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "founded_year",
      "label": "Coach",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "game",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "losses",
      "label": "Wins",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "ranking",
      "label": "Region",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "region",
      "label": "Game",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "wins",
      "label": "Ranking",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    }
  ],
  "ai-esports-performance-analyzer-tournament-detail-1h2ci8-exact-ai": [
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Upcoming",
        "Ongoing",
        "Completed"
      ],
      "required": true,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "description",
      "label": "Format",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "end_date",
      "label": "Start Date",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "format",
      "label": "Organizer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "game",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Upcoming",
        "Ongoing",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "location",
      "label": "Max Teams",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "max_teams",
      "label": "Prize Pool ($)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "organizer",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "prize_pool",
      "label": "End Date",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "start_date",
      "label": "Start Date",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Upcoming",
        "Ongoing",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "status",
      "label": "Game",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Upcoming",
        "Ongoing",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    }
  ],
  "ai-esports-performance-analyzer-training-detail-1ugcg6-exact-ai": [
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{p.ign || p.first_name + ' ' + p.last_name}"
      ],
      "required": true,
      "source": "frontend/src/pages/TrainingDetail.js"
    },
    {
      "name": "coach_notes",
      "label": "Coach Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Planned",
        "In Progress",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingDetail.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{p.ign || p.first_name + ' ' + p.last_name}"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingDetail.js"
    },
    {
      "name": "duration_minutes",
      "label": "Scheduled Date",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Aim Training",
        "Map Knowledge",
        "Game Sense",
        "Team Communication",
        "Mechanical Skills",
        "Mental Fortitude",
        "VOD Review",
        "Positioning",
        "{area}",
        "Low",
        "Medium"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingDetail.js"
    },
    {
      "name": "focus_area",
      "label": "Duration (minutes)",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Aim Training",
        "Map Knowledge",
        "Game Sense",
        "Team Communication",
        "Mechanical Skills",
        "Mental Fortitude",
        "VOD Review",
        "Positioning",
        "{area}",
        "Low",
        "Medium",
        "High"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingDetail.js"
    },
    {
      "name": "intensity",
      "label": "Intensity",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Aim Training",
        "Map Knowledge",
        "Game Sense",
        "Team Communication",
        "Mechanical Skills",
        "Mental Fortitude",
        "VOD Review",
        "Positioning",
        "{area}",
        "Low",
        "Medium",
        "High",
        "Planned",
        "In Progress",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingDetail.js"
    },
    {
      "name": "player_id",
      "label": "Title",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{p.ign || p.first_name + ' ' + p.last_name}"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingDetail.js"
    },
    {
      "name": "scheduled_date",
      "label": "Description",
      "type": "datetime-local",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Aim Training",
        "Map Knowledge",
        "Game Sense",
        "Team Communication",
        "Mechanical Skills",
        "Mental Fortitude",
        "VOD Review",
        "Positioning",
        "{area}"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingDetail.js"
    },
    {
      "name": "status",
      "label": "Intensity",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Low",
        "Medium",
        "High",
        "Planned",
        "In Progress",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingDetail.js"
    }
  ],
  "ai-esports-performance-analyzer-training-plan-generator-1njerq-exact-ai": [
    {
      "name": "duration-select",
      "label": "Duration",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "1 Week",
        "2 Weeks",
        "1 Month",
        "3 Months",
        "{opt.label}"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingPlanGenerator.js"
    },
    {
      "name": "player-select",
      "label": "Select Player",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{player.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingPlanGenerator.js"
    }
  ],
  "ai-esports-performance-analyzer-training-schedules-4fra2v-exact-ai": [
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Training session title",
      "options": [
        "{p.ign || p.first_name + ' ' + p.last_name}"
      ],
      "required": true,
      "source": "frontend/src/pages/TrainingSchedules.js"
    },
    {
      "name": "coach_notes",
      "label": "Coach Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Notes from coach...",
      "options": [
        "Planned",
        "In Progress",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingSchedules.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Session description...",
      "options": [
        "{p.ign || p.first_name + ' ' + p.last_name}"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingSchedules.js"
    },
    {
      "name": "duration_minutes",
      "label": "Scheduled Date",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Aim Training",
        "Map Knowledge",
        "Game Sense",
        "Team Communication",
        "Mechanical Skills",
        "Mental Fortitude",
        "VOD Review",
        "Positioning",
        "{area}",
        "Low"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingSchedules.js"
    },
    {
      "name": "focus_area",
      "label": "Duration (minutes)",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Aim Training",
        "Map Knowledge",
        "Game Sense",
        "Team Communication",
        "Mechanical Skills",
        "Mental Fortitude",
        "VOD Review",
        "Positioning",
        "{area}",
        "Low",
        "Medium",
        "High"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingSchedules.js"
    },
    {
      "name": "intensity",
      "label": "Intensity",
      "type": "select",
      "defaultValue": "medium",
      "placeholder": "",
      "options": [
        "Aim Training",
        "Map Knowledge",
        "Game Sense",
        "Team Communication",
        "Mechanical Skills",
        "Mental Fortitude",
        "VOD Review",
        "Positioning",
        "{area}",
        "Low",
        "Medium",
        "High",
        "Planned",
        "In Progress",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingSchedules.js"
    },
    {
      "name": "player_id",
      "label": "Title",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{p.ign || p.first_name + ' ' + p.last_name}"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingSchedules.js"
    },
    {
      "name": "scheduled_date",
      "label": "Scheduled Date",
      "type": "datetime-local",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Aim Training",
        "Map Knowledge",
        "Game Sense",
        "Team Communication",
        "Mechanical Skills",
        "Mental Fortitude",
        "VOD Review",
        "Positioning",
        "{area}"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingSchedules.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "select",
      "defaultValue": "planned",
      "placeholder": "",
      "options": [
        "Low",
        "Medium",
        "High",
        "Planned",
        "In Progress",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingSchedules.js"
    }
  ],
  "ai-esports-performance-analyzer-agentic-coach-1pwtkq-exact-ai": [
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticCoach.js"
    },
    {
      "name": "team_id",
      "label": "Team Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticCoach.js"
    }
  ],
  "ai-esports-performance-analyzer-ai-5cuwes-exact-ai": [
    {
      "name": "duration",
      "label": "Duration",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "focusAreas",
      "label": "Focus Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "game",
      "label": "Game",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "opponentTeamId",
      "label": "Opponent Team Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "playerId",
      "label": "Player Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team1Id",
      "label": "Team1 Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team2Id",
      "label": "Team2 Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "teamId",
      "label": "Team Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tournamentId",
      "label": "Tournament Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-esports-performance-analyzer-ai-new-7q6oy0-exact-ai": [
    {
      "name": "audience_demographics",
      "label": "Audience Demographics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "channel_handles",
      "label": "Channel Handles",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "days",
      "label": "Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "entity_id",
      "label": "Entity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "entity_type",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "game",
      "label": "Game",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "lookback_days",
      "label": "Lookback Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "market",
      "label": "Market",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "match_id",
      "label": "Match Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "max_clips",
      "label": "Max Clips",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "mood",
      "label": "Mood",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "player_id",
      "label": "Player Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "round",
      "label": "Round",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "sleep_hours",
      "label": "Sleep Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "stress_level",
      "label": "Stress Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "target_industries",
      "label": "Target Industries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "team_id",
      "label": "Team Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "tournament_id",
      "label": "Tournament Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-esports-performance-analyzer-training-1iusxl-exact-ai": [
    {
      "name": "coach_notes",
      "label": "Coach Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "duration_minutes",
      "label": "Duration Minutes",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "focus_area",
      "label": "Focus Area",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "intensity",
      "label": "Intensity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "player_id",
      "label": "Player Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "scheduled_date",
      "label": "Scheduled Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/training.js"
    }
  ],
  "ai-esports-performance-analyzer-source-workflow": [
    {
      "name": "match_date",
      "label": "Match Date",
      "type": "datetime-local",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": true,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "team1_id",
      "label": "Team 1",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": true,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "team2_id",
      "label": "Team 2",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": true,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "duration_minutes",
      "label": "Map",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "map",
      "label": "Score Team 2",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "score_team1",
      "label": "Match Date",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "score_team2",
      "label": "Score Team 1",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "tournament_id",
      "label": "Tournament",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "winner_id",
      "label": "Duration (minutes)",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "game",
      "label": "Real Name",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "League of Legends",
        "CS2",
        "Valorant",
        "Dota 2",
        "Overwatch 2",
        "{g}"
      ],
      "required": true,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "username",
      "label": "Username",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "League of Legends",
        "CS2",
        "Valorant",
        "Dota 2",
        "Overwatch 2",
        "{g}"
      ],
      "required": true,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "accuracy",
      "label": "APM",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "apm",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "bio",
      "label": "Win Rate (%)",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "kda",
      "label": "Positioning Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "positioning_score",
      "label": "Accuracy (%)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "real_name",
      "label": "Username",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "League of Legends",
        "CS2",
        "Valorant",
        "Dota 2",
        "Overwatch 2",
        "{g}"
      ],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "role",
      "label": "Game",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "League of Legends",
        "CS2",
        "Valorant",
        "Dota 2",
        "Overwatch 2",
        "{g}",
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "team_id",
      "label": "Role",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{g}",
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "winrate",
      "label": "KDA",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Upcoming",
        "Ongoing",
        "Completed"
      ],
      "required": true,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "coach",
      "label": "Losses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "description",
      "label": "Founded Year",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Session description...",
      "options": [
        "{p.ign || p.first_name + ' ' + p.last_name}"
      ],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "founded_year",
      "label": "Coach",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "losses",
      "label": "Wins",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "ranking",
      "label": "Region",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "region",
      "label": "Game",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "wins",
      "label": "Ranking",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "end_date",
      "label": "Start Date",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "format",
      "label": "Organizer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "location",
      "label": "Max Teams",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "max_teams",
      "label": "Prize Pool ($)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "organizer",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "prize_pool",
      "label": "End Date",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "start_date",
      "label": "Start Date",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Upcoming",
        "Ongoing",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "status",
      "label": "Game",
      "type": "select",
      "defaultValue": "planned",
      "placeholder": "",
      "options": [
        "Upcoming",
        "Ongoing",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Training session title",
      "options": [
        "{p.ign || p.first_name + ' ' + p.last_name}"
      ],
      "required": true,
      "source": "frontend/src/pages/TrainingDetail.js"
    },
    {
      "name": "coach_notes",
      "label": "Coach Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Notes from coach...",
      "options": [
        "Planned",
        "In Progress",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingDetail.js"
    },
    {
      "name": "focus_area",
      "label": "Duration (minutes)",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Aim Training",
        "Map Knowledge",
        "Game Sense",
        "Team Communication",
        "Mechanical Skills",
        "Mental Fortitude",
        "VOD Review",
        "Positioning",
        "{area}",
        "Low",
        "Medium",
        "High"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingDetail.js"
    },
    {
      "name": "intensity",
      "label": "Intensity",
      "type": "select",
      "defaultValue": "medium",
      "placeholder": "",
      "options": [
        "Aim Training",
        "Map Knowledge",
        "Game Sense",
        "Team Communication",
        "Mechanical Skills",
        "Mental Fortitude",
        "VOD Review",
        "Positioning",
        "{area}",
        "Low",
        "Medium",
        "High",
        "Planned",
        "In Progress",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingDetail.js"
    },
    {
      "name": "player_id",
      "label": "Title",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{p.ign || p.first_name + ' ' + p.last_name}"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingDetail.js"
    },
    {
      "name": "scheduled_date",
      "label": "Description",
      "type": "datetime-local",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Aim Training",
        "Map Knowledge",
        "Game Sense",
        "Team Communication",
        "Mechanical Skills",
        "Mental Fortitude",
        "VOD Review",
        "Positioning",
        "{area}"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingDetail.js"
    },
    {
      "name": "duration-select",
      "label": "Duration",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "1 Week",
        "2 Weeks",
        "1 Month",
        "3 Months",
        "{opt.label}"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingPlanGenerator.js"
    },
    {
      "name": "player-select",
      "label": "Select Player",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{player.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingPlanGenerator.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticCoach.js"
    },
    {
      "name": "duration",
      "label": "Duration",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "focusAreas",
      "label": "Focus Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "opponentTeamId",
      "label": "Opponent Team Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "playerId",
      "label": "Player Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team1Id",
      "label": "Team1 Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team2Id",
      "label": "Team2 Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "teamId",
      "label": "Team Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tournamentId",
      "label": "Tournament Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "audience_demographics",
      "label": "Audience Demographics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "channel_handles",
      "label": "Channel Handles",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "days",
      "label": "Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "entity_id",
      "label": "Entity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "entity_type",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "lookback_days",
      "label": "Lookback Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "market",
      "label": "Market",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "match_id",
      "label": "Match Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "max_clips",
      "label": "Max Clips",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "mood",
      "label": "Mood",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "round",
      "label": "Round",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "sleep_hours",
      "label": "Sleep Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "stress_level",
      "label": "Stress Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "target_industries",
      "label": "Target Industries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-esports-performance-analyzer-ai-tools": [
    {
      "name": "match_date",
      "label": "Match Date",
      "type": "datetime-local",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": true,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "team1_id",
      "label": "Team 1",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": true,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "team2_id",
      "label": "Team 2",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": true,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "duration_minutes",
      "label": "Map",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "map",
      "label": "Score Team 2",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "score_team1",
      "label": "Match Date",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "score_team2",
      "label": "Score Team 1",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "tournament_id",
      "label": "Tournament",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "winner_id",
      "label": "Duration (minutes)",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/MatchDetail.js"
    },
    {
      "name": "game",
      "label": "Real Name",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "League of Legends",
        "CS2",
        "Valorant",
        "Dota 2",
        "Overwatch 2",
        "{g}"
      ],
      "required": true,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "username",
      "label": "Username",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "League of Legends",
        "CS2",
        "Valorant",
        "Dota 2",
        "Overwatch 2",
        "{g}"
      ],
      "required": true,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "accuracy",
      "label": "APM",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "apm",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "bio",
      "label": "Win Rate (%)",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "kda",
      "label": "Positioning Score",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "positioning_score",
      "label": "Accuracy (%)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "real_name",
      "label": "Username",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "League of Legends",
        "CS2",
        "Valorant",
        "Dota 2",
        "Overwatch 2",
        "{g}"
      ],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "role",
      "label": "Game",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "League of Legends",
        "CS2",
        "Valorant",
        "Dota 2",
        "Overwatch 2",
        "{g}",
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "team_id",
      "label": "Role",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{g}",
        "{t.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "winrate",
      "label": "KDA",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/PlayerDetail.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Upcoming",
        "Ongoing",
        "Completed"
      ],
      "required": true,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "coach",
      "label": "Losses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "description",
      "label": "Founded Year",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Session description...",
      "options": [
        "{p.ign || p.first_name + ' ' + p.last_name}"
      ],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "founded_year",
      "label": "Coach",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "losses",
      "label": "Wins",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "ranking",
      "label": "Region",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "region",
      "label": "Game",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "wins",
      "label": "Ranking",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TeamDetail.js"
    },
    {
      "name": "end_date",
      "label": "Start Date",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "format",
      "label": "Organizer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "location",
      "label": "Max Teams",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "max_teams",
      "label": "Prize Pool ($)",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "organizer",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "prize_pool",
      "label": "End Date",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "start_date",
      "label": "Start Date",
      "type": "date",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Upcoming",
        "Ongoing",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "status",
      "label": "Game",
      "type": "select",
      "defaultValue": "planned",
      "placeholder": "",
      "options": [
        "Upcoming",
        "Ongoing",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TournamentDetail.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Training session title",
      "options": [
        "{p.ign || p.first_name + ' ' + p.last_name}"
      ],
      "required": true,
      "source": "frontend/src/pages/TrainingDetail.js"
    },
    {
      "name": "coach_notes",
      "label": "Coach Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Notes from coach...",
      "options": [
        "Planned",
        "In Progress",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingDetail.js"
    },
    {
      "name": "focus_area",
      "label": "Duration (minutes)",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Aim Training",
        "Map Knowledge",
        "Game Sense",
        "Team Communication",
        "Mechanical Skills",
        "Mental Fortitude",
        "VOD Review",
        "Positioning",
        "{area}",
        "Low",
        "Medium",
        "High"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingDetail.js"
    },
    {
      "name": "intensity",
      "label": "Intensity",
      "type": "select",
      "defaultValue": "medium",
      "placeholder": "",
      "options": [
        "Aim Training",
        "Map Knowledge",
        "Game Sense",
        "Team Communication",
        "Mechanical Skills",
        "Mental Fortitude",
        "VOD Review",
        "Positioning",
        "{area}",
        "Low",
        "Medium",
        "High",
        "Planned",
        "In Progress",
        "Completed"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingDetail.js"
    },
    {
      "name": "player_id",
      "label": "Title",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{p.ign || p.first_name + ' ' + p.last_name}"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingDetail.js"
    },
    {
      "name": "scheduled_date",
      "label": "Description",
      "type": "datetime-local",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Aim Training",
        "Map Knowledge",
        "Game Sense",
        "Team Communication",
        "Mechanical Skills",
        "Mental Fortitude",
        "VOD Review",
        "Positioning",
        "{area}"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingDetail.js"
    },
    {
      "name": "duration-select",
      "label": "Duration",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "1 Week",
        "2 Weeks",
        "1 Month",
        "3 Months",
        "{opt.label}"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingPlanGenerator.js"
    },
    {
      "name": "player-select",
      "label": "Select Player",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "{player.name}"
      ],
      "required": false,
      "source": "frontend/src/pages/TrainingPlanGenerator.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/agenticCoach.js"
    },
    {
      "name": "duration",
      "label": "Duration",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "focusAreas",
      "label": "Focus Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "opponentTeamId",
      "label": "Opponent Team Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "playerId",
      "label": "Player Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team1Id",
      "label": "Team1 Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "team2Id",
      "label": "Team2 Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "teamId",
      "label": "Team Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "tournamentId",
      "label": "Tournament Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "audience_demographics",
      "label": "Audience Demographics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "channel_handles",
      "label": "Channel Handles",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "days",
      "label": "Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "entity_id",
      "label": "Entity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "entity_type",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "lookback_days",
      "label": "Lookback Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "market",
      "label": "Market",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "match_id",
      "label": "Match Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "max_clips",
      "label": "Max Clips",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "mood",
      "label": "Mood",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "round",
      "label": "Round",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "sleep_hours",
      "label": "Sleep Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "stress_level",
      "label": "Stress Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    },
    {
      "name": "target_industries",
      "label": "Target Industries",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiNew.js"
    }
  ],
  "ai-exam-proctoring-system-ai-insights-page-1xd9fc-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Insights Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIInsightsPage.js"
    }
  ],
  "ai-exam-proctoring-system-agentic-proctor-4yddwl-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Proctor source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticProctor.js"
    }
  ],
  "ai-exam-proctoring-system-ai-audio-monitoring-1cwooe-exact-ai": [
    {
      "name": "audio_description",
      "label": "Audio Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiAudioMonitoring.js"
    },
    {
      "name": "session_id",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiAudioMonitoring.js"
    }
  ],
  "ai-exam-proctoring-system-ai-behavior-analysis-1ig521-exact-ai": [
    {
      "name": "behavior_data",
      "label": "Behavior Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiBehaviorAnalysis.js"
    },
    {
      "name": "session_id",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiBehaviorAnalysis.js"
    }
  ],
  "ai-exam-proctoring-system-ai-face-verification-1axc1r-exact-ai": [
    {
      "name": "face_description",
      "label": "Face Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiFaceVerification.js"
    },
    {
      "name": "session_id",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiFaceVerification.js"
    }
  ],
  "ai-exam-proctoring-system-ai-new-46ven9-exact-ai": [
    {
      "name": "exam_id",
      "label": "Exam Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "session_id",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    }
  ],
  "ai-exam-proctoring-system-ai-plagiarism-detection-qt1iv5-exact-ai": [
    {
      "name": "original_text",
      "label": "Original Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPlagiarismDetection.js"
    },
    {
      "name": "student_answer",
      "label": "Student Answer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPlagiarismDetection.js"
    }
  ],
  "ai-exam-proctoring-system-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Insights Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIInsightsPage.js"
    },
    {
      "name": "audio_description",
      "label": "Audio Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiAudioMonitoring.js"
    },
    {
      "name": "session_id",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiAudioMonitoring.js"
    },
    {
      "name": "behavior_data",
      "label": "Behavior Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiBehaviorAnalysis.js"
    },
    {
      "name": "face_description",
      "label": "Face Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiFaceVerification.js"
    },
    {
      "name": "exam_id",
      "label": "Exam Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "original_text",
      "label": "Original Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPlagiarismDetection.js"
    },
    {
      "name": "student_answer",
      "label": "Student Answer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPlagiarismDetection.js"
    }
  ],
  "ai-exam-proctoring-system-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Insights Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIInsightsPage.js"
    },
    {
      "name": "audio_description",
      "label": "Audio Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiAudioMonitoring.js"
    },
    {
      "name": "session_id",
      "label": "Session Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiAudioMonitoring.js"
    },
    {
      "name": "behavior_data",
      "label": "Behavior Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiBehaviorAnalysis.js"
    },
    {
      "name": "face_description",
      "label": "Face Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiFaceVerification.js"
    },
    {
      "name": "exam_id",
      "label": "Exam Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "original_text",
      "label": "Original Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPlagiarismDetection.js"
    },
    {
      "name": "student_answer",
      "label": "Student Answer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPlagiarismDetection.js"
    }
  ],
  "ai-golf-course-operations-manager-agentic-marshal-1gdrw3-exact-ai": [
    {
      "name": "course_id",
      "label": "Course Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticMarshal.js"
    },
    {
      "name": "target_pace_minutes = 14",
      "label": "Target Pace Minutes = 14",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticMarshal.js"
    }
  ],
  "ai-golf-course-operations-manager-ai-j615h1-exact-ai": [
    {
      "name": "'driving_range'",
      "label": "'Driving Range'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "'pro_shop']",
      "label": "'Pro Shop']",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "communication_type",
      "label": "Communication Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "course_areas",
      "label": "Course Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "course_rating",
      "label": "Course Rating",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "current_rate",
      "label": "Current Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "current_tasks",
      "label": "Current Tasks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "day_of_week",
      "label": "Day Of Week",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "demand",
      "label": "Demand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "duration_hours",
      "label": "Duration Hours",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "equipment_availability",
      "label": "Equipment Availability",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "event_details",
      "label": "Event Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "event_name",
      "label": "Event Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "facilities = ['tee_time'",
      "label": "Facilities = ['Tee Time'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "field_size",
      "label": "Field Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "handicap_data",
      "label": "Handicap Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "historical_data",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "horizon_days = 14",
      "label": "Horizon Days = 14",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "humidity",
      "label": "Humidity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "inventory",
      "label": "Inventory",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "key_points",
      "label": "Key Points",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "maintenance_history",
      "label": "Maintenance History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "member_demographics",
      "label": "Member Demographics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "member_id",
      "label": "Member Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "member_name",
      "label": "Member Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "pace_target_minutes = 240",
      "label": "Pace Target Minutes = 240",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "player_name",
      "label": "Player Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "players",
      "label": "Players",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "players = []",
      "label": "Players = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "preferred_formats",
      "label": "Preferred Formats",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "recent_rainfall",
      "label": "Recent Rainfall",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sales_history",
      "label": "Sales History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "scores_by_hole",
      "label": "Scores By Hole",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "slope_rating",
      "label": "Slope Rating",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "staff_schedule",
      "label": "Staff Schedule",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tee_played",
      "label": "Tee Played",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tee_time",
      "label": "Tee Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "temperature",
      "label": "Temperature",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "time",
      "label": "Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tournament_format",
      "label": "Tournament Format",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "trending_brands",
      "label": "Trending Brands",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weather",
      "label": "Weather",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weather_data",
      "label": "Weather Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weather_forecast",
      "label": "Weather Forecast",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-golf-course-operations-manager-gap-no-member-retention-intervention-ai-1d9o1e-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-member-retention-intervention-ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-member-retention-intervention-ai.js"
    }
  ],
  "ai-golf-course-operations-manager-gap-no-round-pairing-optimization-for-fourso-p9xc16-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-round-pairing-optimization-for-fourso.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-round-pairing-optimization-for-fourso.js"
    }
  ],
  "ai-golf-course-operations-manager-gap-no-swing-analysis-vision-ai-1779n3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-swing-analysis-vision-ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-swing-analysis-vision-ai.js"
    }
  ],
  "ai-golf-course-operations-manager-ai-feature-page-rultnt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Feature Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIFeaturePage.js"
    }
  ],
  "ai-golf-course-operations-manager-cf-agentic-course-marshal-monitoring-pace-a-6tv0hz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Agentic Course Marshal Monitoring Pace A source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/CfAgenticCourseMarshalMonitoringPaceA.jsx"
    }
  ],
  "ai-golf-course-operations-manager-gap-no-member-retention-intervention-ai-eb4cqo-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Member Retention Intervention AI source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoMemberRetentionInterventionAi.jsx"
    }
  ],
  "ai-golf-course-operations-manager-gap-no-round-pairing-optimization-for-fourso-7wseo9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Round Pairing Optimization For Fourso source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoRoundPairingOptimizationForFourso.jsx"
    }
  ],
  "ai-golf-course-operations-manager-gap-no-swing-analysis-vision-ai-1lk12z-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Swing Analysis Vision AI source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapNoSwingAnalysisVisionAi.jsx"
    }
  ],
  "ai-golf-course-operations-manager-source-workflow": [
    {
      "name": "course_id",
      "label": "Course Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticMarshal.js"
    },
    {
      "name": "target_pace_minutes = 14",
      "label": "Target Pace Minutes = 14",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticMarshal.js"
    },
    {
      "name": "'driving_range'",
      "label": "'Driving Range'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "'pro_shop']",
      "label": "'Pro Shop']",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "communication_type",
      "label": "Communication Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "course_areas",
      "label": "Course Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "course_rating",
      "label": "Course Rating",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "current_rate",
      "label": "Current Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "current_tasks",
      "label": "Current Tasks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "day_of_week",
      "label": "Day Of Week",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "demand",
      "label": "Demand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "duration_hours",
      "label": "Duration Hours",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "equipment_availability",
      "label": "Equipment Availability",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "event_details",
      "label": "Event Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "event_name",
      "label": "Event Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "facilities = ['tee_time'",
      "label": "Facilities = ['Tee Time'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "field_size",
      "label": "Field Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "handicap_data",
      "label": "Handicap Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "historical_data",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "horizon_days = 14",
      "label": "Horizon Days = 14",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "humidity",
      "label": "Humidity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "inventory",
      "label": "Inventory",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "key_points",
      "label": "Key Points",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "maintenance_history",
      "label": "Maintenance History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "member_demographics",
      "label": "Member Demographics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "member_id",
      "label": "Member Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "member_name",
      "label": "Member Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "pace_target_minutes = 240",
      "label": "Pace Target Minutes = 240",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "player_name",
      "label": "Player Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "players",
      "label": "Players",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "players = []",
      "label": "Players = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "preferred_formats",
      "label": "Preferred Formats",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "recent_rainfall",
      "label": "Recent Rainfall",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sales_history",
      "label": "Sales History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "scores_by_hole",
      "label": "Scores By Hole",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "slope_rating",
      "label": "Slope Rating",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "staff_schedule",
      "label": "Staff Schedule",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tee_played",
      "label": "Tee Played",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tee_time",
      "label": "Tee Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "temperature",
      "label": "Temperature",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "time",
      "label": "Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tournament_format",
      "label": "Tournament Format",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "trending_brands",
      "label": "Trending Brands",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weather",
      "label": "Weather",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weather_data",
      "label": "Weather Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weather_forecast",
      "label": "Weather Forecast",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Feature Page source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-member-retention-intervention-ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-member-retention-intervention-ai.js"
    }
  ],
  "ai-golf-course-operations-manager-ai-tools": [
    {
      "name": "course_id",
      "label": "Course Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticMarshal.js"
    },
    {
      "name": "target_pace_minutes = 14",
      "label": "Target Pace Minutes = 14",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/agenticMarshal.js"
    },
    {
      "name": "'driving_range'",
      "label": "'Driving Range'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "'pro_shop']",
      "label": "'Pro Shop']",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "communication_type",
      "label": "Communication Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "course_areas",
      "label": "Course Areas",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "course_rating",
      "label": "Course Rating",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "current_rate",
      "label": "Current Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "current_tasks",
      "label": "Current Tasks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "date",
      "label": "Date",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "day_of_week",
      "label": "Day Of Week",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "demand",
      "label": "Demand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "duration_hours",
      "label": "Duration Hours",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "equipment_availability",
      "label": "Equipment Availability",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "event_details",
      "label": "Event Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "event_name",
      "label": "Event Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "facilities = ['tee_time'",
      "label": "Facilities = ['Tee Time'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "field_size",
      "label": "Field Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "handicap_data",
      "label": "Handicap Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "historical_data",
      "label": "Historical Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "horizon_days = 14",
      "label": "Horizon Days = 14",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "humidity",
      "label": "Humidity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "inventory",
      "label": "Inventory",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "key_points",
      "label": "Key Points",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "maintenance_history",
      "label": "Maintenance History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "member_demographics",
      "label": "Member Demographics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "member_id",
      "label": "Member Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "member_name",
      "label": "Member Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "pace_target_minutes = 240",
      "label": "Pace Target Minutes = 240",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "player_name",
      "label": "Player Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "players",
      "label": "Players",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "players = []",
      "label": "Players = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "preferred_formats",
      "label": "Preferred Formats",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "recent_rainfall",
      "label": "Recent Rainfall",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "sales_history",
      "label": "Sales History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "scores_by_hole",
      "label": "Scores By Hole",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "season",
      "label": "Season",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "slope_rating",
      "label": "Slope Rating",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "staff_schedule",
      "label": "Staff Schedule",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tee_played",
      "label": "Tee Played",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tee_time",
      "label": "Tee Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "temperature",
      "label": "Temperature",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "time",
      "label": "Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "tournament_format",
      "label": "Tournament Format",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "trending_brands",
      "label": "Trending Brands",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weather",
      "label": "Weather",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weather_data",
      "label": "Weather Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "weather_forecast",
      "label": "Weather Forecast",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Feature Page source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-member-retention-intervention-ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-no-member-retention-intervention-ai.js"
    }
  ],
  "ai-model-cost-orchestrator-prompt-optimization-pibuwl-exact-ai": [
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "model_used",
      "label": "Model Used",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "optimized_prompt",
      "label": "Optimized Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "optimized_tokens",
      "label": "Optimized Tokens",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "original_prompt",
      "label": "Original Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "original_tokens",
      "label": "Original Tokens",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "quality_maintained",
      "label": "Quality Maintained",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "token_reduction_pct",
      "label": "Token Reduction Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    }
  ],
  "ai-model-cost-orchestrator-agentic-model-router-18uuui-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Model Router source input context",
      "options": [],
      "required": false,
      "source": "server/routes/agentic-model-router.js"
    }
  ],
  "ai-model-cost-orchestrator-ai-results-1xhz3f-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Results source input context",
      "options": [],
      "required": false,
      "source": "server/routes/ai-results.js"
    }
  ],
  "ai-model-cost-orchestrator-ai-j615h1-exact-ai": [
    {
      "name": "allowedProviders",
      "label": "Allowed Providers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "budgetPerCall",
      "label": "Budget Per Call",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "cost_per_1k_input = 0",
      "label": "Cost Per 1k Input = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "cost_per_1k_output = 0",
      "label": "Cost Per 1k Output = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "currentModel",
      "label": "Current Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "kind",
      "label": "Kind",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "latency_ms",
      "label": "Latency Ms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "latencyTarget",
      "label": "Latency Target",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "lookbackDays = 14",
      "label": "Lookback Days = 14",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "model",
      "label": "Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "model = null",
      "label": "Model = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "period = 'monthly'",
      "label": "Period = 'Monthly'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "priorities",
      "label": "Priorities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "qualityTarget",
      "label": "Quality Target",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "task",
      "label": "Task",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "taskDescription",
      "label": "Task Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "threshold = 0",
      "label": "Threshold = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "totalBudget",
      "label": "Total Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "webhook_url",
      "label": "Webhook Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-model-cost-orchestrator-gap-ai-agentic-cost-governor-xapee9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-agentic-cost-governor.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-agentic-cost-governor.js"
    }
  ],
  "ai-model-cost-orchestrator-gap-ai-dataset-leakage-detector-1xmy5u-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-dataset-leakage-detector.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-dataset-leakage-detector.js"
    }
  ],
  "ai-model-cost-orchestrator-gap-ai-fine-tune-roi-analyzer-1rix42-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-fine-tune-roi-analyzer.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-fine-tune-roi-analyzer.js"
    }
  ],
  "ai-model-cost-orchestrator-gap-ai-quality-vs-cost-pareto-d37chc-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-quality-vs-cost-pareto.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-quality-vs-cost-pareto.js"
    }
  ],
  "ai-model-cost-orchestrator-sla-cost-guardrail-1j9wbz-exact-ai": [
    {
      "name": "avgTokens = 0",
      "label": "Avg Tokens = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sla-cost-guardrail.js"
    },
    {
      "name": "latencyP95Ms = 0",
      "label": "Latency P95 Ms = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sla-cost-guardrail.js"
    },
    {
      "name": "modelCostPer1k = 0.002",
      "label": "Model Cost Per1k = 0.002",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sla-cost-guardrail.js"
    },
    {
      "name": "monthlyBudget = 1000",
      "label": "Monthly Budget = 1000",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sla-cost-guardrail.js"
    },
    {
      "name": "requestsPerMinute = 0",
      "label": "Requests Per Minute = 0",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sla-cost-guardrail.js"
    },
    {
      "name": "slaMs = 2000",
      "label": "Sla Ms = 2000",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sla-cost-guardrail.js"
    }
  ],
  "ai-model-cost-orchestrator-ai-tools-page-hm1a26-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Tools Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIToolsPage.jsx"
    }
  ],
  "ai-model-cost-orchestrator-feature-detail-3mq0t7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Feature Detail source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/FeatureDetail.jsx"
    }
  ],
  "ai-model-cost-orchestrator-gap-agentic-amr2uz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Agentic source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAgentic.jsx"
    }
  ],
  "ai-model-cost-orchestrator-gap-ai-agentic-cost-governor-1j766x-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Agentic Cost Governor source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAiAgenticCostGovernor.jsx"
    }
  ],
  "ai-model-cost-orchestrator-gap-ai-dataset-leakage-detector-100eo4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Dataset Leakage Detector source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAiDatasetLeakageDetector.jsx"
    }
  ],
  "ai-model-cost-orchestrator-gap-ai-fine-tune-roi-analyzer-1s5f01-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Fine Tune Roi Analyzer source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAiFineTuneRoiAnalyzer.jsx"
    }
  ],
  "ai-model-cost-orchestrator-gap-ai-quality-vs-cost-pareto-1aath3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Quality Vs Cost Pareto source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAiQualityVsCostPareto.jsx"
    }
  ],
  "ai-model-cost-orchestrator-sla-cost-guardrail-page-njb5aj-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the SLA Cost Guardrail Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/SLACostGuardrailPage.jsx"
    }
  ],
  "ai-model-cost-orchestrator-source-workflow": [
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "model_used",
      "label": "Model Used",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "optimized_prompt",
      "label": "Optimized Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "optimized_tokens",
      "label": "Optimized Tokens",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "original_prompt",
      "label": "Original Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "original_tokens",
      "label": "Original Tokens",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "quality_maintained",
      "label": "Quality Maintained",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "token_reduction_pct",
      "label": "Token Reduction Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Model Router source input context",
      "options": [],
      "required": false,
      "source": "server/routes/agentic-model-router.js"
    },
    {
      "name": "allowedProviders",
      "label": "Allowed Providers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "budgetPerCall",
      "label": "Budget Per Call",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "cost_per_1k_input = 0",
      "label": "Cost Per 1k Input = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "cost_per_1k_output = 0",
      "label": "Cost Per 1k Output = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "currentModel",
      "label": "Current Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "kind",
      "label": "Kind",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "latency_ms",
      "label": "Latency Ms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "latencyTarget",
      "label": "Latency Target",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "lookbackDays = 14",
      "label": "Lookback Days = 14",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "model",
      "label": "Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "model = null",
      "label": "Model = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "period = 'monthly'",
      "label": "Period = 'Monthly'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "priorities",
      "label": "Priorities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "qualityTarget",
      "label": "Quality Target",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "task",
      "label": "Task",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "taskDescription",
      "label": "Task Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "threshold = 0",
      "label": "Threshold = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "totalBudget",
      "label": "Total Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "webhook_url",
      "label": "Webhook Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-agentic-cost-governor.js"
    },
    {
      "name": "avgTokens = 0",
      "label": "Avg Tokens = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sla-cost-guardrail.js"
    },
    {
      "name": "latencyP95Ms = 0",
      "label": "Latency P95 Ms = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sla-cost-guardrail.js"
    },
    {
      "name": "modelCostPer1k = 0.002",
      "label": "Model Cost Per1k = 0.002",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sla-cost-guardrail.js"
    },
    {
      "name": "monthlyBudget = 1000",
      "label": "Monthly Budget = 1000",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sla-cost-guardrail.js"
    },
    {
      "name": "requestsPerMinute = 0",
      "label": "Requests Per Minute = 0",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sla-cost-guardrail.js"
    },
    {
      "name": "slaMs = 2000",
      "label": "Sla Ms = 2000",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sla-cost-guardrail.js"
    }
  ],
  "ai-model-cost-orchestrator-ai-tools": [
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "model_used",
      "label": "Model Used",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "optimized_prompt",
      "label": "Optimized Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "optimized_tokens",
      "label": "Optimized Tokens",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "original_prompt",
      "label": "Original Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "original_tokens",
      "label": "Original Tokens",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "prompt",
      "label": "Prompt",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "quality_maintained",
      "label": "Quality Maintained",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "token_reduction_pct",
      "label": "Token Reduction Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/prompt-optimization.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Model Router source input context",
      "options": [],
      "required": false,
      "source": "server/routes/agentic-model-router.js"
    },
    {
      "name": "allowedProviders",
      "label": "Allowed Providers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "budgetPerCall",
      "label": "Budget Per Call",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "cost_per_1k_input = 0",
      "label": "Cost Per 1k Input = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "cost_per_1k_output = 0",
      "label": "Cost Per 1k Output = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "currentModel",
      "label": "Current Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "goals",
      "label": "Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "kind",
      "label": "Kind",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "latency_ms",
      "label": "Latency Ms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "latencyTarget",
      "label": "Latency Target",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "lookbackDays = 14",
      "label": "Lookback Days = 14",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "model",
      "label": "Model",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "model = null",
      "label": "Model = Null",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "period = 'monthly'",
      "label": "Period = 'Monthly'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "priorities",
      "label": "Priorities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "qualityTarget",
      "label": "Quality Target",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "task",
      "label": "Task",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "taskDescription",
      "label": "Task Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "threshold = 0",
      "label": "Threshold = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "totalBudget",
      "label": "Total Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "webhook_url",
      "label": "Webhook Url",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-agentic-cost-governor.js"
    },
    {
      "name": "avgTokens = 0",
      "label": "Avg Tokens = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sla-cost-guardrail.js"
    },
    {
      "name": "latencyP95Ms = 0",
      "label": "Latency P95 Ms = 0",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sla-cost-guardrail.js"
    },
    {
      "name": "modelCostPer1k = 0.002",
      "label": "Model Cost Per1k = 0.002",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sla-cost-guardrail.js"
    },
    {
      "name": "monthlyBudget = 1000",
      "label": "Monthly Budget = 1000",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sla-cost-guardrail.js"
    },
    {
      "name": "requestsPerMinute = 0",
      "label": "Requests Per Minute = 0",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sla-cost-guardrail.js"
    },
    {
      "name": "slaMs = 2000",
      "label": "Sla Ms = 2000",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/sla-cost-guardrail.js"
    }
  ],
  "ai-notary-document-verification-ai-analyses-1yt3io-exact-ai": [
    {
      "name": "document_id",
      "label": "Document ID",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAnalyses.jsx"
    },
    {
      "name": "document_title",
      "label": "Document Title",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAnalyses.jsx"
    }
  ],
  "ai-notary-document-verification-ai-history-67q48z-exact-ai": [
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "defaultValue": "20",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHistory.jsx"
    },
    {
      "name": "page",
      "label": "Page",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHistory.jsx"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHistory.jsx"
    },
    {
      "name": "totalPages",
      "label": "Total Pages",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHistory.jsx"
    }
  ],
  "ai-notary-document-verification-ai-risk-analysis-wo7ic0-exact-ai": [
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "complexity",
      "label": "Complexity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "document_purpose",
      "label": "Document Purpose",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "document_type",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "flags",
      "label": "Flags",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "full_name",
      "label": "Full Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "history_summary",
      "label": "History Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "id_number",
      "label": "Id Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "id_type",
      "label": "Id Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "parties",
      "label": "Parties",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "relationship_to_signer",
      "label": "Relationship To Signer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "requirements",
      "label": "Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "target_margin",
      "label": "Target Margin",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "transaction_value",
      "label": "Transaction Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    }
  ],
  "ai-notary-document-verification-audit-trail-1agcbw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Audit Trail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AuditTrail.jsx"
    }
  ],
  "ai-notary-document-verification-cf-agentic-compliance-monitoring-page-8ed33x-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the CF Agentic Compliance Monitoring Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CFAgenticComplianceMonitoringPage.jsx"
    }
  ],
  "ai-notary-document-verification-ai-5cuwes-exact-ai": [
    {
      "name": "analysis_type",
      "label": "Analysis Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "batch_label",
      "label": "Batch Label",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "complexity",
      "label": "Complexity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "document_id",
      "label": "Document Id",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "document_number",
      "label": "Document Number",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "document_type",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "file_count",
      "label": "File Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hourly_rate",
      "label": "Hourly Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "identification",
      "label": "Identification",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdictions",
      "label": "Jurisdictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notary_id",
      "label": "Notary Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "parties_count",
      "label": "Parties Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "prior_appearances",
      "label": "Prior Appearances",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "relationship_to_party",
      "label": "Relationship To Party",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "services",
      "label": "Services",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "signer_email",
      "label": "Signer Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "special_clauses",
      "label": "Special Clauses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "state",
      "label": "State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target_margin",
      "label": "Target Margin",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "witness_id",
      "label": "Witness Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "witness_name",
      "label": "Witness Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-notary-document-verification-ai-analyses-1g7vew-exact-ai": [
    {
      "name": "analysis_type",
      "label": "Analysis Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAnalyses.js"
    },
    {
      "name": "confidence",
      "label": "Confidence",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAnalyses.js"
    },
    {
      "name": "document_id",
      "label": "Document Id",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAnalyses.js"
    },
    {
      "name": "model_used",
      "label": "Model Used",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAnalyses.js"
    },
    {
      "name": "processing_time",
      "label": "Processing Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAnalyses.js"
    },
    {
      "name": "result",
      "label": "Result",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAnalyses.js"
    },
    {
      "name": "tokens_used",
      "label": "Tokens Used",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAnalyses.js"
    }
  ],
  "ai-notary-document-verification-audit-trail-1hmrdo-exact-ai": [
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/auditTrail.js"
    },
    {
      "name": "details",
      "label": "Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/auditTrail.js"
    },
    {
      "name": "entity_id",
      "label": "Entity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/auditTrail.js"
    },
    {
      "name": "entity_type",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/auditTrail.js"
    },
    {
      "name": "ip_address",
      "label": "Ip Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/auditTrail.js"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/auditTrail.js"
    }
  ],
  "ai-notary-document-verification-custom-feat01-agentic-compliance-monitoring-hz6s2t-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Custom Feat01 Agentic Compliance Monitoring source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/customFeat01_AgenticComplianceMonitoring.js"
    }
  ],
  "ai-notary-document-verification-source-workflow": [
    {
      "name": "document_id",
      "label": "Document ID",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAnalyses.jsx"
    },
    {
      "name": "document_title",
      "label": "Document Title",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAnalyses.jsx"
    },
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "defaultValue": "20",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHistory.jsx"
    },
    {
      "name": "page",
      "label": "Page",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHistory.jsx"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHistory.jsx"
    },
    {
      "name": "totalPages",
      "label": "Total Pages",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHistory.jsx"
    },
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "complexity",
      "label": "Complexity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "document_purpose",
      "label": "Document Purpose",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "document_type",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "flags",
      "label": "Flags",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "full_name",
      "label": "Full Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "history_summary",
      "label": "History Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "id_number",
      "label": "Id Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "id_type",
      "label": "Id Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "parties",
      "label": "Parties",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "relationship_to_signer",
      "label": "Relationship To Signer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "requirements",
      "label": "Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "target_margin",
      "label": "Target Margin",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "transaction_value",
      "label": "Transaction Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Audit Trail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AuditTrail.jsx"
    },
    {
      "name": "analysis_type",
      "label": "Analysis Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "batch_label",
      "label": "Batch Label",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "document_number",
      "label": "Document Number",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "file_count",
      "label": "File Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hourly_rate",
      "label": "Hourly Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "identification",
      "label": "Identification",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdictions",
      "label": "Jurisdictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notary_id",
      "label": "Notary Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "parties_count",
      "label": "Parties Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "prior_appearances",
      "label": "Prior Appearances",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "relationship_to_party",
      "label": "Relationship To Party",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "services",
      "label": "Services",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "signer_email",
      "label": "Signer Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "special_clauses",
      "label": "Special Clauses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "state",
      "label": "State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "witness_id",
      "label": "Witness Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "witness_name",
      "label": "Witness Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "confidence",
      "label": "Confidence",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAnalyses.js"
    },
    {
      "name": "model_used",
      "label": "Model Used",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAnalyses.js"
    },
    {
      "name": "processing_time",
      "label": "Processing Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAnalyses.js"
    },
    {
      "name": "result",
      "label": "Result",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAnalyses.js"
    },
    {
      "name": "tokens_used",
      "label": "Tokens Used",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAnalyses.js"
    },
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/auditTrail.js"
    },
    {
      "name": "details",
      "label": "Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/auditTrail.js"
    },
    {
      "name": "entity_id",
      "label": "Entity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/auditTrail.js"
    },
    {
      "name": "entity_type",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/auditTrail.js"
    },
    {
      "name": "ip_address",
      "label": "Ip Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/auditTrail.js"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/auditTrail.js"
    }
  ],
  "ai-notary-document-verification-ai-tools": [
    {
      "name": "document_id",
      "label": "Document ID",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAnalyses.jsx"
    },
    {
      "name": "document_title",
      "label": "Document Title",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAnalyses.jsx"
    },
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "defaultValue": "20",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHistory.jsx"
    },
    {
      "name": "page",
      "label": "Page",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHistory.jsx"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHistory.jsx"
    },
    {
      "name": "totalPages",
      "label": "Total Pages",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIHistory.jsx"
    },
    {
      "name": "client_id",
      "label": "Client Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "complexity",
      "label": "Complexity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "document_purpose",
      "label": "Document Purpose",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "document_type",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "flags",
      "label": "Flags",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "full_name",
      "label": "Full Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "history_summary",
      "label": "History Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "id_number",
      "label": "Id Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "id_type",
      "label": "Id Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "parties",
      "label": "Parties",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "relationship_to_signer",
      "label": "Relationship To Signer",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "requirements",
      "label": "Requirements",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "target_margin",
      "label": "Target Margin",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "transaction_value",
      "label": "Transaction Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRiskAnalysis.jsx"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Audit Trail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AuditTrail.jsx"
    },
    {
      "name": "analysis_type",
      "label": "Analysis Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "batch_label",
      "label": "Batch Label",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "document_number",
      "label": "Document Number",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "file_count",
      "label": "File Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hourly_rate",
      "label": "Hourly Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "identification",
      "label": "Identification",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "jurisdictions",
      "label": "Jurisdictions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notary_id",
      "label": "Notary Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "parties_count",
      "label": "Parties Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "prior_appearances",
      "label": "Prior Appearances",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "relationship_to_party",
      "label": "Relationship To Party",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "services",
      "label": "Services",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "signer_email",
      "label": "Signer Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "special_clauses",
      "label": "Special Clauses",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "state",
      "label": "State",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "witness_id",
      "label": "Witness Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "witness_name",
      "label": "Witness Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "confidence",
      "label": "Confidence",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAnalyses.js"
    },
    {
      "name": "model_used",
      "label": "Model Used",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAnalyses.js"
    },
    {
      "name": "processing_time",
      "label": "Processing Time",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAnalyses.js"
    },
    {
      "name": "result",
      "label": "Result",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAnalyses.js"
    },
    {
      "name": "tokens_used",
      "label": "Tokens Used",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/aiAnalyses.js"
    },
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/auditTrail.js"
    },
    {
      "name": "details",
      "label": "Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/auditTrail.js"
    },
    {
      "name": "entity_id",
      "label": "Entity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/auditTrail.js"
    },
    {
      "name": "entity_type",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/auditTrail.js"
    },
    {
      "name": "ip_address",
      "label": "Ip Address",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/auditTrail.js"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/auditTrail.js"
    }
  ],
  "ai-optometry-assistant-cf-agentic-patient-follow-up-page-v0s39n-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the CF Agentic Patient Follow Up Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CFAgenticPatientFollowUpPage.jsx"
    }
  ],
  "ai-optometry-assistant-ai-1lp99l-exact-ai": [
    {
      "name": "acuity_records",
      "label": "Acuity Records",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "age_band",
      "label": "Age Band",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "allergies",
      "label": "Allergies",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "appointments",
      "label": "Appointments",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "capacity_constraints",
      "label": "Capacity Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "channels",
      "label": "Channels",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "chief_complaint",
      "label": "Chief Complaint",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "color_palette",
      "label": "Color Palette",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "comorbidities",
      "label": "Comorbidities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "conditions",
      "label": "Conditions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "copay",
      "label": "Copay",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "coverage_type",
      "label": "Coverage Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "deductible",
      "label": "Deductible",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "examination_findings",
      "label": "Examination Findings",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "eye",
      "label": "Eye",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "eye_conditions",
      "label": "Eye Conditions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "eye_drops",
      "label": "Eye Drops",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "face_shape",
      "label": "Face Shape",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "family_history",
      "label": "Family History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "findings",
      "label": "Findings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "gender",
      "label": "Gender",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "inventory_data",
      "label": "Inventory Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "invoices",
      "label": "Invoices",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "lifestyle",
      "label": "Lifestyle",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "medical_history",
      "label": "Medical History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "medications",
      "label": "Medications",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "occasion",
      "label": "Occasion",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "patient_age",
      "label": "Patient Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "patient_history",
      "label": "Patient History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "patient_id",
      "label": "Patient Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "patient_name",
      "label": "Patient Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "policy_details",
      "label": "Policy Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "practice_hours",
      "label": "Practice Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "practice_size",
      "label": "Practice Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "preferences",
      "label": "Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "prescription",
      "label": "Prescription",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "prescription_history",
      "label": "Prescription History",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "prescription_type",
      "label": "Prescription Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "prescriptions",
      "label": "Prescriptions",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "product_identifiers",
      "label": "Product Identifiers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "providers",
      "label": "Providers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "reason",
      "label": "Reason",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "recall_notice",
      "label": "Recall Notice",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "risk_level",
      "label": "Risk Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "scan_id",
      "label": "Scan Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "send",
      "label": "Send",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "services_needed",
      "label": "Services Needed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "skin_tone",
      "label": "Skin Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "staff_count",
      "label": "Staff Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "style_persona",
      "label": "Style Persona",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "symptoms",
      "label": "Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "time_period",
      "label": "Time Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "wear_preference",
      "label": "Wear Preference",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    }
  ],
  "ai-optometry-assistant-custom-feat01-agentic-patient-follow-up-taxi72-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Custom Feat01 Agentic Patient Follow Up source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/customFeat01_AgenticPatientFollowUp.js"
    }
  ],
  "ai-optometry-assistant-patient-ai-1zp9l6-exact-ai": [
    {
      "name": "additional_context",
      "label": "Additional Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "auto_create",
      "label": "Auto Create",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "condition",
      "label": "Condition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "conditions",
      "label": "Conditions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "current_complaint",
      "label": "Current Complaint",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "diagnosis",
      "label": "Diagnosis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "face_shape",
      "label": "Face Shape",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "insurance_plan_name",
      "label": "Insurance Plan Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "lifestyle",
      "label": "Lifestyle",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "preferences",
      "label": "Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "reading_level",
      "label": "Reading Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "services_requested",
      "label": "Services Requested",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    }
  ],
  "ai-optometry-assistant-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the CF Agentic Patient Follow Up Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CFAgenticPatientFollowUpPage.jsx"
    },
    {
      "name": "acuity_records",
      "label": "Acuity Records",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "age_band",
      "label": "Age Band",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "allergies",
      "label": "Allergies",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "appointments",
      "label": "Appointments",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "capacity_constraints",
      "label": "Capacity Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "channels",
      "label": "Channels",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "chief_complaint",
      "label": "Chief Complaint",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "color_palette",
      "label": "Color Palette",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "comorbidities",
      "label": "Comorbidities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "conditions",
      "label": "Conditions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "copay",
      "label": "Copay",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "coverage_type",
      "label": "Coverage Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "deductible",
      "label": "Deductible",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "examination_findings",
      "label": "Examination Findings",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "eye",
      "label": "Eye",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "eye_conditions",
      "label": "Eye Conditions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "eye_drops",
      "label": "Eye Drops",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "face_shape",
      "label": "Face Shape",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "family_history",
      "label": "Family History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "findings",
      "label": "Findings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "gender",
      "label": "Gender",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "inventory_data",
      "label": "Inventory Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "invoices",
      "label": "Invoices",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "lifestyle",
      "label": "Lifestyle",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "medical_history",
      "label": "Medical History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "medications",
      "label": "Medications",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "occasion",
      "label": "Occasion",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "patient_age",
      "label": "Patient Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "patient_history",
      "label": "Patient History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "patient_id",
      "label": "Patient Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "patient_name",
      "label": "Patient Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "policy_details",
      "label": "Policy Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "practice_hours",
      "label": "Practice Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "practice_size",
      "label": "Practice Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "preferences",
      "label": "Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "prescription",
      "label": "Prescription",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "prescription_history",
      "label": "Prescription History",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "prescription_type",
      "label": "Prescription Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "prescriptions",
      "label": "Prescriptions",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "product_identifiers",
      "label": "Product Identifiers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "providers",
      "label": "Providers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "reason",
      "label": "Reason",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "recall_notice",
      "label": "Recall Notice",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "risk_level",
      "label": "Risk Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "scan_id",
      "label": "Scan Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "send",
      "label": "Send",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "services_needed",
      "label": "Services Needed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "skin_tone",
      "label": "Skin Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "staff_count",
      "label": "Staff Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "style_persona",
      "label": "Style Persona",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "symptoms",
      "label": "Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "time_period",
      "label": "Time Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "wear_preference",
      "label": "Wear Preference",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "additional_context",
      "label": "Additional Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "auto_create",
      "label": "Auto Create",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "condition",
      "label": "Condition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "current_complaint",
      "label": "Current Complaint",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "diagnosis",
      "label": "Diagnosis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "insurance_plan_name",
      "label": "Insurance Plan Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "reading_level",
      "label": "Reading Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "services_requested",
      "label": "Services Requested",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    }
  ],
  "ai-optometry-assistant-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the CF Agentic Patient Follow Up Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CFAgenticPatientFollowUpPage.jsx"
    },
    {
      "name": "acuity_records",
      "label": "Acuity Records",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "age_band",
      "label": "Age Band",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "allergies",
      "label": "Allergies",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "appointments",
      "label": "Appointments",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "capacity_constraints",
      "label": "Capacity Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "channels",
      "label": "Channels",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "chief_complaint",
      "label": "Chief Complaint",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "color_palette",
      "label": "Color Palette",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "comorbidities",
      "label": "Comorbidities",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "conditions",
      "label": "Conditions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "copay",
      "label": "Copay",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "coverage_type",
      "label": "Coverage Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "deductible",
      "label": "Deductible",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "examination_findings",
      "label": "Examination Findings",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "eye",
      "label": "Eye",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "eye_conditions",
      "label": "Eye Conditions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "eye_drops",
      "label": "Eye Drops",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "face_shape",
      "label": "Face Shape",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "family_history",
      "label": "Family History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "findings",
      "label": "Findings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "gender",
      "label": "Gender",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "inventory_data",
      "label": "Inventory Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "invoices",
      "label": "Invoices",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "lifestyle",
      "label": "Lifestyle",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "medical_history",
      "label": "Medical History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "medications",
      "label": "Medications",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "occasion",
      "label": "Occasion",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "patient_age",
      "label": "Patient Age",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "patient_history",
      "label": "Patient History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "patient_id",
      "label": "Patient Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "patient_name",
      "label": "Patient Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "policy_details",
      "label": "Policy Details",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "practice_hours",
      "label": "Practice Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "practice_size",
      "label": "Practice Size",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "preferences",
      "label": "Preferences",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "prescription",
      "label": "Prescription",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "prescription_history",
      "label": "Prescription History",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "prescription_type",
      "label": "Prescription Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "prescriptions",
      "label": "Prescriptions",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "product_identifiers",
      "label": "Product Identifiers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "providers",
      "label": "Providers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "reason",
      "label": "Reason",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "recall_notice",
      "label": "Recall Notice",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "risk_level",
      "label": "Risk Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "scan_id",
      "label": "Scan Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "send",
      "label": "Send",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "services_needed",
      "label": "Services Needed",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "skin_tone",
      "label": "Skin Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "staff_count",
      "label": "Staff Count",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "style_persona",
      "label": "Style Persona",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "symptoms",
      "label": "Symptoms",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "time_period",
      "label": "Time Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "wear_preference",
      "label": "Wear Preference",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "additional_context",
      "label": "Additional Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "auto_create",
      "label": "Auto Create",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "condition",
      "label": "Condition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "current_complaint",
      "label": "Current Complaint",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "diagnosis",
      "label": "Diagnosis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "insurance_plan_name",
      "label": "Insurance Plan Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "reading_level",
      "label": "Reading Level",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    },
    {
      "name": "services_requested",
      "label": "Services Requested",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/patientAI.js"
    }
  ],
  "ai-research-literature-agent-agents-page-z7c154-exact-ai": [
    {
      "name": "doi",
      "label": "Doi",
      "type": "text",
      "defaultValue": "10.48550/arXiv.1706.03762",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "existing",
      "label": "Existing",
      "type": "text",
      "defaultValue": "Current research covers in-context learning, chain-of-thought, RLHF.",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "field",
      "label": "Field",
      "type": "text",
      "defaultValue": "Large Language Models",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "paper_title",
      "label": "Paper Title",
      "type": "text",
      "defaultValue": "Attention Is All You Need",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "papers_summary",
      "label": "Papers Summary",
      "type": "text",
      "defaultValue": "LoRA, QLoRA, Adapter layers, Prefix tuning - 15 papers",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "review_topic",
      "label": "Review Topic",
      "type": "text",
      "defaultValue": "Efficient Fine-tuning for LLMs",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "comprehensive",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "synth_topic",
      "label": "Synth Topic",
      "type": "text",
      "defaultValue": "Attention Mechanisms",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "Evolution of Transformer-based Language Models",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    }
  ],
  "ai-research-literature-agent-new-agents-page-yegsqc-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the New Agents Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NewAgentsPage.js"
    }
  ],
  "ai-research-literature-agent-agents-bn6792-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agents source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/agents.js"
    }
  ],
  "ai-research-literature-agent-ai-citation-graph-u02ymz-exact-ai": [
    {
      "name": "paper_id",
      "label": "Paper Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-citation-graph.js"
    },
    {
      "name": "papers",
      "label": "Papers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-citation-graph.js"
    }
  ],
  "ai-research-literature-agent-ai-literature-review-zj0zdr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Literature Review source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-literature-review.js"
    }
  ],
  "ai-research-literature-agent-source-workflow": [
    {
      "name": "doi",
      "label": "Doi",
      "type": "text",
      "defaultValue": "10.48550/arXiv.1706.03762",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "existing",
      "label": "Existing",
      "type": "text",
      "defaultValue": "Current research covers in-context learning, chain-of-thought, RLHF.",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "field",
      "label": "Field",
      "type": "text",
      "defaultValue": "Large Language Models",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "paper_title",
      "label": "Paper Title",
      "type": "text",
      "defaultValue": "Attention Is All You Need",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "papers_summary",
      "label": "Papers Summary",
      "type": "text",
      "defaultValue": "LoRA, QLoRA, Adapter layers, Prefix tuning - 15 papers",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "review_topic",
      "label": "Review Topic",
      "type": "text",
      "defaultValue": "Efficient Fine-tuning for LLMs",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "comprehensive",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "synth_topic",
      "label": "Synth Topic",
      "type": "text",
      "defaultValue": "Attention Mechanisms",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "Evolution of Transformer-based Language Models",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the New Agents Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NewAgentsPage.js"
    },
    {
      "name": "paper_id",
      "label": "Paper Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-citation-graph.js"
    },
    {
      "name": "papers",
      "label": "Papers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-citation-graph.js"
    }
  ],
  "ai-research-literature-agent-ai-tools": [
    {
      "name": "doi",
      "label": "Doi",
      "type": "text",
      "defaultValue": "10.48550/arXiv.1706.03762",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "existing",
      "label": "Existing",
      "type": "text",
      "defaultValue": "Current research covers in-context learning, chain-of-thought, RLHF.",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "field",
      "label": "Field",
      "type": "text",
      "defaultValue": "Large Language Models",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "paper_title",
      "label": "Paper Title",
      "type": "text",
      "defaultValue": "Attention Is All You Need",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "papers_summary",
      "label": "Papers Summary",
      "type": "text",
      "defaultValue": "LoRA, QLoRA, Adapter layers, Prefix tuning - 15 papers",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "review_topic",
      "label": "Review Topic",
      "type": "text",
      "defaultValue": "Efficient Fine-tuning for LLMs",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "scope",
      "label": "Scope",
      "type": "text",
      "defaultValue": "comprehensive",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "synth_topic",
      "label": "Synth Topic",
      "type": "text",
      "defaultValue": "Attention Mechanisms",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "topic",
      "label": "Topic",
      "type": "text",
      "defaultValue": "Evolution of Transformer-based Language Models",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgentsPage.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the New Agents Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/NewAgentsPage.js"
    },
    {
      "name": "paper_id",
      "label": "Paper Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-citation-graph.js"
    },
    {
      "name": "papers",
      "label": "Papers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai-citation-graph.js"
    }
  ],
  "dynamic-software-interfaces-gap-agent-customizer-1hs6qx-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Agent Customizer source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAgentCustomizer.tsx"
    }
  ],
  "dynamic-software-interfaces-ai-5cuwes-exact-ai": [
    {
      "name": "current_layout",
      "label": "Current Layout",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_source",
      "label": "Data Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "session_data",
      "label": "Session Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "usage_patterns",
      "label": "Usage Patterns",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "use_case",
      "label": "Use Case",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "user_behavior",
      "label": "User Behavior",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "user_role",
      "label": "User Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "dynamic-software-interfaces-ai-extra-10q8zo-exact-ai": [
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "baseColor",
      "label": "Base Color",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "brand",
      "label": "Brand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "component",
      "label": "Component",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "framework",
      "label": "Framework",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "hypothesis",
      "label": "Hypothesis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "mood",
      "label": "Mood",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "spec",
      "label": "Spec",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    }
  ],
  "dynamic-software-interfaces-gap-ai-agent-customizer-a3j535-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Agent Customizer source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-agent-customizer.js"
    }
  ],
  "dynamic-software-interfaces-gap-ai-feedback-clustering-98szfw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Feedback Clustering source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-feedback-clustering.js"
    }
  ],
  "dynamic-software-interfaces-gap-ai-i18n-translator-13w0a3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI I18n Translator source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-i18n-translator.js"
    }
  ],
  "dynamic-software-interfaces-gap-ai-screenshot-extractor-d2vssz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Screenshot Extractor source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-screenshot-extractor.js"
    }
  ],
  "dynamic-software-interfaces-gap-ai-session-replay-summarizer-1xxfdh-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Session Replay Summarizer source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-ai-session-replay-summarizer.js"
    }
  ],
  "dynamic-software-interfaces-gap-nonai-analytics-events-1tlzly-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Nonai Analytics Events source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-nonai-analytics-events.js"
    }
  ],
  "dynamic-software-interfaces-gap-nonai-customization-versioning-mi8gfb-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Nonai Customization Versioning source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-nonai-customization-versioning.js"
    }
  ],
  "dynamic-software-interfaces-gap-nonai-render-endpoint-1gsx5u-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Nonai Render Endpoint source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-nonai-render-endpoint.js"
    }
  ],
  "dynamic-software-interfaces-gap-nonai-theme-toggle-1e929u-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Nonai Theme Toggle source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-nonai-theme-toggle.js"
    }
  ],
  "dynamic-software-interfaces-gap-nonai-widget-marketplace-1xrt79-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Nonai Widget Marketplace source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap-nonai-widget-marketplace.js"
    }
  ],
  "dynamic-software-interfaces-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Agent Customizer source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAgentCustomizer.tsx"
    },
    {
      "name": "current_layout",
      "label": "Current Layout",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_source",
      "label": "Data Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "session_data",
      "label": "Session Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "usage_patterns",
      "label": "Usage Patterns",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "use_case",
      "label": "Use Case",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "user_behavior",
      "label": "User Behavior",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "user_role",
      "label": "User Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "baseColor",
      "label": "Base Color",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "brand",
      "label": "Brand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "component",
      "label": "Component",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "framework",
      "label": "Framework",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "hypothesis",
      "label": "Hypothesis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "mood",
      "label": "Mood",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "spec",
      "label": "Spec",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    }
  ],
  "dynamic-software-interfaces-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Agent Customizer source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapAgentCustomizer.tsx"
    },
    {
      "name": "current_layout",
      "label": "Current Layout",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_source",
      "label": "Data Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "session_data",
      "label": "Session Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "usage_patterns",
      "label": "Usage Patterns",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "use_case",
      "label": "Use Case",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "user_behavior",
      "label": "User Behavior",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "user_role",
      "label": "User Role",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "baseColor",
      "label": "Base Color",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "brand",
      "label": "Brand",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "component",
      "label": "Component",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "framework",
      "label": "Framework",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "hypothesis",
      "label": "Hypothesis",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "mood",
      "label": "Mood",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "spec",
      "label": "Spec",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "text",
      "label": "Text",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai_extra.js"
    }
  ],
  "linkedin-route-1bo20b-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/salary-insights/route.ts"
    }
  ],
  "linkedin-route-1vyjtp-exact-ai": [
    {
      "name": "jobDescription",
      "label": "Job Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/resume-builder/route.ts"
    },
    {
      "name": "mode = 'build'",
      "label": "Mode = 'Build'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/resume-builder/route.ts"
    }
  ],
  "linkedin-route-58bdt4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/moderation/route.ts"
    }
  ],
  "linkedin-route-1fvdor-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/live-messaging/route.ts"
    }
  ],
  "linkedin-route-x0jujh-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/feed-ranking/route.ts"
    }
  ],
  "linkedin-route-7dd0n7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/creator-analytics/route.ts"
    }
  ],
  "linkedin-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/salary-insights/route.ts"
    },
    {
      "name": "jobDescription",
      "label": "Job Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/resume-builder/route.ts"
    },
    {
      "name": "mode = 'build'",
      "label": "Mode = 'Build'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/resume-builder/route.ts"
    }
  ],
  "linkedin-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "app/api/ai/salary-insights/route.ts"
    },
    {
      "name": "jobDescription",
      "label": "Job Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/resume-builder/route.ts"
    },
    {
      "name": "mode = 'build'",
      "label": "Mode = 'Build'",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "app/api/ai/resume-builder/route.ts"
    }
  ]
};
