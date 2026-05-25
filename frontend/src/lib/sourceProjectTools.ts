export const sourceProjectTools = [
  {
    "id": "ai-native-discovery-engines-source-workflow",
    "title": "AI Native Discovery Engines Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from ai-native-discovery-engines.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from ai-native-discovery-engines to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Native Discovery Engines source context",
    "outputLabel": "AI Native Discovery Engines source analysis",
    "signals": [
      "frontend/tailwind.config",
      "frontend/src/main",
      "frontend/src/pages/DiscoveryAgent",
      "frontend/src/components/AICenter",
      "frontend/src/components/AIResponse",
      "frontend/src/components/Results/ResultDetail",
      "frontend/src/components/Researchers/ResearcherDetail",
      "frontend/src/components/Publications/PublicationDetail"
    ]
  },
  {
    "id": "ai-native-discovery-engines-ai-tools",
    "title": "AI Native Discovery Engines AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from ai-native-discovery-engines.",
    "defaultPrompt": "Review ai-native-discovery-engines AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Native Discovery Engines AI prompt or tool context",
    "outputLabel": "AI Native Discovery Engines AI tool response",
    "signals": [
      "frontend/tailwind.config.js",
      "frontend/src/main.tsx",
      "frontend/src/pages/DiscoveryAgent.tsx",
      "frontend/src/components/AICenter.tsx",
      "frontend/src/components/AIResponse.tsx",
      "frontend/src/components/Results/ResultDetail.tsx",
      "frontend/src/components/Researchers/ResearcherDetail.tsx",
      "frontend/src/components/Publications/PublicationDetail.tsx"
    ]
  },
  {
    "id": "ai-native-discovery-engines-discovery-agent-y7ds2s-exact-ai",
    "title": "AI Native Discovery Engines: Discovery Agent",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/DiscoveryAgent.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Discovery Agent\" from ai-native-discovery-engines. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Discovery Agent donor inputs",
    "outputLabel": "Discovery Agent AI response",
    "signals": [
      "frontend/src/pages/DiscoveryAgent.tsx"
    ]
  },
  {
    "id": "ai-native-discovery-engines-ai-5cuwes-exact-ai",
    "title": "AI Native Discovery Engines: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from ai-native-discovery-engines. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Abstract",
      "Applicant Focus",
      "Conclusion",
      "Data Summary",
      "Dataset Name",
      "Depth",
      "Description",
      "Design"
    ]
  },
  {
    "id": "ai-native-discovery-engines-discovery-agent-14ebov-exact-ai",
    "title": "AI Native Discovery Engines: Discovery Agent",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/discovery-agent.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Discovery Agent\" from ai-native-discovery-engines. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Discovery Agent donor inputs",
    "outputLabel": "Discovery Agent AI response",
    "signals": [
      "Auto Run = True",
      "Goal",
      "Iterations Planned = 3",
      "Project Id = Null"
    ]
  },
  {
    "id": "ai-native-discovery-engines-gap-ai-auto-iterate-loop-1crm02-exact-ai",
    "title": "AI Native Discovery Engines: Gap AI Auto Iterate Loop",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-ai-auto-iterate-loop.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Auto Iterate Loop\" from ai-native-discovery-engines. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Auto Iterate Loop donor inputs",
    "outputLabel": "Gap AI Auto Iterate Loop AI response",
    "signals": [
      "backend/routes/gap-ai-auto-iterate-loop.js"
    ]
  },
  {
    "id": "ai-native-discovery-engines-gap-ai-citation-impact-predictor-odgxwj-exact-ai",
    "title": "AI Native Discovery Engines: Gap AI Citation Impact Predictor",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-ai-citation-impact-predictor.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Citation Impact Predictor\" from ai-native-discovery-engines. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Citation Impact Predictor donor inputs",
    "outputLabel": "Gap AI Citation Impact Predictor AI response",
    "signals": [
      "backend/routes/gap-ai-citation-impact-predictor.js"
    ]
  },
  {
    "id": "ai-native-discovery-engines-gap-ai-protocol-optimizer-kopxwy-exact-ai",
    "title": "AI Native Discovery Engines: Gap AI Protocol Optimizer",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-ai-protocol-optimizer.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Protocol Optimizer\" from ai-native-discovery-engines. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Protocol Optimizer donor inputs",
    "outputLabel": "Gap AI Protocol Optimizer AI response",
    "signals": [
      "backend/routes/gap-ai-protocol-optimizer.js"
    ]
  },
  {
    "id": "ai-native-discovery-engines-gap-ai-result-significance-test-1sf7s5-exact-ai",
    "title": "AI Native Discovery Engines: Gap AI Result Significance Test",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-ai-result-significance-test.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Result Significance Test\" from ai-native-discovery-engines. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Result Significance Test donor inputs",
    "outputLabel": "Gap AI Result Significance Test AI response",
    "signals": [
      "backend/routes/gap-ai-result-significance-test.js"
    ]
  },
  {
    "id": "ai-native-discovery-engines-gap-ai-team-composition-optimizer-umyr70-exact-ai",
    "title": "AI Native Discovery Engines: Gap AI Team Composition Optimizer",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-ai-team-composition-optimizer.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Team Composition Optimizer\" from ai-native-discovery-engines. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Team Composition Optimizer donor inputs",
    "outputLabel": "Gap AI Team Composition Optimizer AI response",
    "signals": [
      "backend/routes/gap-ai-team-composition-optimizer.js"
    ]
  },
  {
    "id": "ai-native-discovery-engines-gap-nonai-doi-connector-1i031x-exact-ai",
    "title": "AI Native Discovery Engines: Gap Nonai Doi Connector",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-nonai-doi-connector.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Nonai Doi Connector\" from ai-native-discovery-engines. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Nonai Doi Connector donor inputs",
    "outputLabel": "Gap Nonai Doi Connector AI response",
    "signals": [
      "backend/routes/gap-nonai-doi-connector.js"
    ]
  },
  {
    "id": "ai-native-discovery-engines-gap-nonai-hypothesis-comments-1o6vou-exact-ai",
    "title": "AI Native Discovery Engines: Gap Nonai Hypothesis Comments",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-nonai-hypothesis-comments.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Nonai Hypothesis Comments\" from ai-native-discovery-engines. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Nonai Hypothesis Comments donor inputs",
    "outputLabel": "Gap Nonai Hypothesis Comments AI response",
    "signals": [
      "backend/routes/gap-nonai-hypothesis-comments.js"
    ]
  },
  {
    "id": "ai-native-discovery-engines-gap-nonai-lab-equipment-1d1zz4-exact-ai",
    "title": "AI Native Discovery Engines: Gap Nonai Lab Equipment",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-nonai-lab-equipment.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Nonai Lab Equipment\" from ai-native-discovery-engines. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Nonai Lab Equipment donor inputs",
    "outputLabel": "Gap Nonai Lab Equipment AI response",
    "signals": [
      "backend/routes/gap-nonai-lab-equipment.js"
    ]
  },
  {
    "id": "ai-native-discovery-engines-gap-nonai-protocol-versioning-1h22d7-exact-ai",
    "title": "AI Native Discovery Engines: Gap Nonai Protocol Versioning",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-nonai-protocol-versioning.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Nonai Protocol Versioning\" from ai-native-discovery-engines. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Nonai Protocol Versioning donor inputs",
    "outputLabel": "Gap Nonai Protocol Versioning AI response",
    "signals": [
      "backend/routes/gap-nonai-protocol-versioning.js"
    ]
  },
  {
    "id": "ai-native-discovery-engines-gap-nonai-raw-data-uploads-9ovhm1-exact-ai",
    "title": "AI Native Discovery Engines: Gap Nonai Raw Data Uploads",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-nonai-raw-data-uploads.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Nonai Raw Data Uploads\" from ai-native-discovery-engines. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Nonai Raw Data Uploads donor inputs",
    "outputLabel": "Gap Nonai Raw Data Uploads AI response",
    "signals": [
      "backend/routes/gap-nonai-raw-data-uploads.js"
    ]
  },
  {
    "id": "ai-native-discovery-engines-gap-nonai-reproducibility-package-r6yr88-exact-ai",
    "title": "AI Native Discovery Engines: Gap Nonai Reproducibility Package",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-nonai-reproducibility-package.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Nonai Reproducibility Package\" from ai-native-discovery-engines. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Nonai Reproducibility Package donor inputs",
    "outputLabel": "Gap Nonai Reproducibility Package AI response",
    "signals": [
      "backend/routes/gap-nonai-reproducibility-package.js"
    ]
  },
  {
    "id": "ai-building-safety-inspector-source-workflow",
    "title": "AI Building Safety Inspector Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIBuildingSafetyInspector.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIBuildingSafetyInspector to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Building Safety Inspector source context",
    "outputLabel": "AI Building Safety Inspector source analysis",
    "signals": [
      "frontend/src/pages/AgenticSafetyInspectorOrchestratingSiteWalkPPage",
      "frontend/src/pages/NoAiChecklistGeneratorFromLocalBuildingCodePage",
      "frontend/src/pages/NoAiTrainingContentGeneratorFromIncidentsPage",
      "frontend/src/components/AIAnalysis",
      "backend/routes/agenticSafetyInspector",
      "backend/routes/agents",
      "backend/routes/ai",
      "backend/routes/gap_no_ai_checklist_generator_from_local_building_code"
    ]
  },
  {
    "id": "ai-building-safety-inspector-ai-tools",
    "title": "AI Building Safety Inspector AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIBuildingSafetyInspector.",
    "defaultPrompt": "Review AIBuildingSafetyInspector AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Building Safety Inspector AI prompt or tool context",
    "outputLabel": "AI Building Safety Inspector AI tool response",
    "signals": [
      "frontend/src/pages/AgenticSafetyInspectorOrchestratingSiteWalkPPage.jsx",
      "frontend/src/pages/NoAiChecklistGeneratorFromLocalBuildingCodePage.jsx",
      "frontend/src/pages/NoAiTrainingContentGeneratorFromIncidentsPage.jsx",
      "frontend/src/components/AIAnalysis.js",
      "backend/routes/agenticSafetyInspector.js",
      "backend/routes/agents.js",
      "backend/routes/ai.js",
      "backend/routes/gap_no_ai_checklist_generator_from_local_building_code.js"
    ]
  },
  {
    "id": "ai-building-safety-inspector-agentic-safety-inspector-orchestrating-site-walk-p-page-rfsoiv-exact-ai",
    "title": "AI Building Safety Inspector: Agentic Safety Inspector Orchestrating Site Walk P Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AgenticSafetyInspectorOrchestratingSiteWalkPPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Safety Inspector Orchestrating Site Walk P Page\" from AIBuildingSafetyInspector. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Safety Inspector Orchestrating Site Walk P Page donor inputs",
    "outputLabel": "Agentic Safety Inspector Orchestrating Site Walk P Page AI response",
    "signals": [
      "frontend/src/pages/AgenticSafetyInspectorOrchestratingSiteWalkPPage.jsx"
    ]
  },
  {
    "id": "ai-building-safety-inspector-no-ai-checklist-generator-from-local-building-code-page-b8xag4-exact-ai",
    "title": "AI Building Safety Inspector: No AI Checklist Generator From Local Building Code Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/NoAiChecklistGeneratorFromLocalBuildingCodePage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"No AI Checklist Generator From Local Building Code Page\" from AIBuildingSafetyInspector. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "No AI Checklist Generator From Local Building Code Page donor inputs",
    "outputLabel": "No AI Checklist Generator From Local Building Code Page AI response",
    "signals": [
      "frontend/src/pages/NoAiChecklistGeneratorFromLocalBuildingCodePage.jsx"
    ]
  },
  {
    "id": "ai-building-safety-inspector-no-ai-training-content-generator-from-incidents-page-14u0ha-exact-ai",
    "title": "AI Building Safety Inspector: No AI Training Content Generator From Incidents Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/NoAiTrainingContentGeneratorFromIncidentsPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"No AI Training Content Generator From Incidents Page\" from AIBuildingSafetyInspector. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "No AI Training Content Generator From Incidents Page donor inputs",
    "outputLabel": "No AI Training Content Generator From Incidents Page AI response",
    "signals": [
      "frontend/src/pages/NoAiTrainingContentGeneratorFromIncidentsPage.jsx"
    ]
  },
  {
    "id": "ai-building-safety-inspector-agentic-safety-inspector-p62cfs-exact-ai",
    "title": "AI Building Safety Inspector: Agentic Safety Inspector",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/agenticSafetyInspector.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Safety Inspector\" from AIBuildingSafetyInspector. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Safety Inspector donor inputs",
    "outputLabel": "Agentic Safety Inspector AI response",
    "signals": [
      "backend/routes/agenticSafetyInspector.js"
    ]
  },
  {
    "id": "ai-building-safety-inspector-agents-bn6792-exact-ai",
    "title": "AI Building Safety Inspector: Agents",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/agents.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agents\" from AIBuildingSafetyInspector. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agents donor inputs",
    "outputLabel": "Agents AI response",
    "signals": [
      "Personas",
      "Site Name",
      "Task"
    ]
  },
  {
    "id": "ai-building-safety-inspector-ai-5cuwes-exact-ai",
    "title": "AI Building Safety Inspector: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIBuildingSafetyInspector. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Air Quality Index",
      "Anchor Points",
      "Audience",
      "Behavioral Observations",
      "Contractor Name",
      "Crew Size",
      "Days Lost",
      "Description"
    ]
  },
  {
    "id": "ai-building-safety-inspector-gap-no-ai-checklist-generator-from-local-building-code-177mum-exact-ai",
    "title": "AI Building Safety Inspector: Gap No AI Checklist Generator From Local Building Code",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_no_ai_checklist_generator_from_local_building_code.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Checklist Generator From Local Building Code\" from AIBuildingSafetyInspector. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Checklist Generator From Local Building Code donor inputs",
    "outputLabel": "Gap No AI Checklist Generator From Local Building Code AI response",
    "signals": [
      "backend/routes/gap_no_ai_checklist_generator_from_local_building_code.js"
    ]
  },
  {
    "id": "ai-building-safety-inspector-gap-no-ai-training-content-generator-from-incidents-1rnmv8-exact-ai",
    "title": "AI Building Safety Inspector: Gap No AI Training Content Generator From Incidents",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap_no_ai_training_content_generator_from_incidents.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No AI Training Content Generator From Incidents\" from AIBuildingSafetyInspector. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No AI Training Content Generator From Incidents donor inputs",
    "outputLabel": "Gap No AI Training Content Generator From Incidents AI response",
    "signals": [
      "backend/routes/gap_no_ai_training_content_generator_from_incidents.js"
    ]
  },
  {
    "id": "ai-building-safety-inspector-training-1iusxl-exact-ai",
    "title": "AI Building Safety Inspector: Training",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/training.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Training\" from AIBuildingSafetyInspector. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Training donor inputs",
    "outputLabel": "Training AI response",
    "signals": [
      "backend/routes/training.js"
    ]
  },
  {
    "id": "ai-dream-journal-analyzer-source-workflow",
    "title": "AI Dream Journal Analyzer Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIDreamJournalAnalyzer.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIDreamJournalAnalyzer to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Dream Journal Analyzer source context",
    "outputLabel": "AI Dream Journal Analyzer source analysis",
    "signals": [
      "frontend/src/main",
      "frontend/src/pages/AIAnalysis",
      "frontend/src/components/AIOutput",
      "frontend/src/components/DetailModal",
      "backend/routes/ai",
      "backend/routes/aiNew",
      "backend/middleware/parseAIJson"
    ]
  },
  {
    "id": "ai-dream-journal-analyzer-ai-tools",
    "title": "AI Dream Journal Analyzer AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIDreamJournalAnalyzer.",
    "defaultPrompt": "Review AIDreamJournalAnalyzer AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Dream Journal Analyzer AI prompt or tool context",
    "outputLabel": "AI Dream Journal Analyzer AI tool response",
    "signals": [
      "frontend/src/main.jsx",
      "frontend/src/pages/AIAnalysis.jsx",
      "frontend/src/components/AIOutput.jsx",
      "frontend/src/components/DetailModal.jsx",
      "backend/routes/ai.js",
      "backend/routes/aiNew.js",
      "backend/middleware/parseAIJson.js"
    ]
  },
  {
    "id": "ai-dream-journal-analyzer-ai-analysis-7j31eb-exact-ai",
    "title": "AI Dream Journal Analyzer: AI Analysis",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIAnalysis.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Analysis\" from AIDreamJournalAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Analysis donor inputs",
    "outputLabel": "AI Analysis AI response",
    "signals": [
      "frontend/src/pages/AIAnalysis.jsx"
    ]
  },
  {
    "id": "ai-dream-journal-analyzer-ai-5cuwes-exact-ai",
    "title": "AI Dream Journal Analyzer: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIDreamJournalAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Context",
      "Dream Content",
      "Experience Level",
      "Goals",
      "Period",
      "Symbol",
      "Title"
    ]
  },
  {
    "id": "ai-dream-journal-analyzer-ai-new-7q6oy0-exact-ai",
    "title": "AI Dream Journal Analyzer: AI New",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/aiNew.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI New\" from AIDreamJournalAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI New donor inputs",
    "outputLabel": "AI New AI response",
    "signals": [
      "Alcohol Units",
      "Caffeine Mg",
      "Days",
      "Dream Id",
      "Exercise Minutes",
      "Log Date",
      "Meditation Minutes",
      "Notes"
    ]
  },
  {
    "id": "ai-drug-interaction-checker-source-workflow",
    "title": "AI Drug Interaction Checker Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIDrugInteractionChecker.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIDrugInteractionChecker to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Drug Interaction Checker source context",
    "outputLabel": "AI Drug Interaction Checker source analysis",
    "signals": [
      "backend/src/middleware/openrouter",
      "frontend/src/pages/AuditAISummaryPage",
      "frontend/src/pages/ContraindicationsPage",
      "frontend/src/components/AIAnalysis",
      "backend/src/routes/agenticPharmacist",
      "backend/src/routes/aiExpanded",
      "backend/src/routes/contraindications",
      "backend/src/middleware/parseAIJson"
    ]
  },
  {
    "id": "ai-drug-interaction-checker-ai-tools",
    "title": "AI Drug Interaction Checker AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIDrugInteractionChecker.",
    "defaultPrompt": "Review AIDrugInteractionChecker AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Drug Interaction Checker AI prompt or tool context",
    "outputLabel": "AI Drug Interaction Checker AI tool response",
    "signals": [
      "backend/src/middleware/openrouter.js",
      "frontend/src/pages/AuditAISummaryPage.js",
      "frontend/src/pages/ContraindicationsPage.js",
      "frontend/src/components/AIAnalysis.js",
      "backend/src/routes/agenticPharmacist.js",
      "backend/src/routes/aiExpanded.js",
      "backend/src/routes/contraindications.js",
      "backend/src/middleware/parseAIJson.js"
    ]
  },
  {
    "id": "ai-drug-interaction-checker-audit-ai-summary-page-1ijklh-exact-ai",
    "title": "AI Drug Interaction Checker: Audit AI Summary Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AuditAISummaryPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Audit AI Summary Page\" from AIDrugInteractionChecker. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Audit AI Summary Page donor inputs",
    "outputLabel": "Audit AI Summary Page AI response",
    "signals": [
      "frontend/src/pages/AuditAISummaryPage.js"
    ]
  },
  {
    "id": "ai-drug-interaction-checker-contraindications-page-h2m3pc-exact-ai",
    "title": "AI Drug Interaction Checker: Contraindications Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ContraindicationsPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Contraindications Page\" from AIDrugInteractionChecker. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Contraindications Page donor inputs",
    "outputLabel": "Contraindications Page AI response",
    "signals": [
      "Drug Id",
      "Patient Conditions"
    ]
  },
  {
    "id": "ai-drug-interaction-checker-agentic-pharmacist-1hby9u-exact-ai",
    "title": "AI Drug Interaction Checker: Agentic Pharmacist",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/agenticPharmacist.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Pharmacist\" from AIDrugInteractionChecker. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Pharmacist donor inputs",
    "outputLabel": "Agentic Pharmacist AI response",
    "signals": [
      "Drug Ids = []",
      "Messages = []",
      "Patient Id"
    ]
  },
  {
    "id": "ai-drug-interaction-checker-ai-expanded-v8ebz2-exact-ai",
    "title": "AI Drug Interaction Checker: AI Expanded",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/aiExpanded.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Expanded\" from AIDrugInteractionChecker. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Expanded donor inputs",
    "outputLabel": "AI Expanded AI response",
    "signals": [
      "Condition",
      "Drug Id",
      "Drug Ids",
      "Patient Age Years",
      "Patient Id",
      "Patient Weight Kg",
      "Reason",
      "Renal Function"
    ]
  },
  {
    "id": "ai-drug-interaction-checker-contraindications-1ltmpw-exact-ai",
    "title": "AI Drug Interaction Checker: Contraindications",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/contraindications.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Contraindications\" from AIDrugInteractionChecker. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Contraindications donor inputs",
    "outputLabel": "Contraindications AI response",
    "signals": [
      "Condition",
      "Description",
      "Drug Id",
      "Evidence Level",
      "Patient Conditions",
      "Severity"
    ]
  },
  {
    "id": "ai-employee-benefits-optimizer-source-workflow",
    "title": "AI Employee Benefits Optimizer Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIEmployeeBenefitsOptimizer.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIEmployeeBenefitsOptimizer to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Employee Benefits Optimizer source context",
    "outputLabel": "AI Employee Benefits Optimizer source analysis",
    "signals": [
      "server/routes/agenticEnrollment",
      "server/routes/enrollment",
      "server/routes/openEnrollment",
      "client/src/pages/Enrollment",
      "client/src/pages/OpenEnrollmentPeriods",
      "server/routes/agenticEnrollment",
      "server/routes/ai",
      "server/routes/aiAnalyses"
    ]
  },
  {
    "id": "ai-employee-benefits-optimizer-ai-tools",
    "title": "AI Employee Benefits Optimizer AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIEmployeeBenefitsOptimizer.",
    "defaultPrompt": "Review AIEmployeeBenefitsOptimizer AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Employee Benefits Optimizer AI prompt or tool context",
    "outputLabel": "AI Employee Benefits Optimizer AI tool response",
    "signals": [
      "server/routes/agenticEnrollment.js",
      "server/routes/enrollment.js",
      "server/routes/openEnrollment.js",
      "client/src/pages/Enrollment.js",
      "client/src/pages/OpenEnrollmentPeriods.js",
      "server/routes/agenticEnrollment.js",
      "server/routes/ai.js",
      "server/routes/aiAnalyses.js"
    ]
  },
  {
    "id": "ai-employee-benefits-optimizer-agentic-enrollment-19ju9e-exact-ai",
    "title": "AI Employee Benefits Optimizer: Agentic Enrollment",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/agenticEnrollment.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Enrollment\" from AIEmployeeBenefitsOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Enrollment donor inputs",
    "outputLabel": "Agentic Enrollment AI response",
    "signals": [
      "Brief",
      "Budget Monthly",
      "Employer Id",
      "Family Size"
    ]
  },
  {
    "id": "ai-employee-benefits-optimizer-ai-j615h1-exact-ai",
    "title": "AI Employee Benefits Optimizer: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIEmployeeBenefitsOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Audience",
      "Available Plans",
      "Benchmark Data",
      "Billing Data",
      "Carrier Data",
      "Claims Data",
      "Compliance Data",
      "Content Type"
    ]
  },
  {
    "id": "ai-employee-benefits-optimizer-ai-analyses-m7wkp7-exact-ai",
    "title": "AI Employee Benefits Optimizer: AI Analyses",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/aiAnalyses.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Analyses\" from AIEmployeeBenefitsOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Analyses donor inputs",
    "outputLabel": "AI Analyses AI response",
    "signals": [
      "server/routes/aiAnalyses.js"
    ]
  },
  {
    "id": "ai-employee-benefits-optimizer-ai-new-1l6olc-exact-ai",
    "title": "AI Employee Benefits Optimizer: AI New",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/aiNew.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI New\" from AIEmployeeBenefitsOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI New donor inputs",
    "outputLabel": "AI New AI response",
    "signals": [
      "Age Out Years",
      "Age Out Years = 26",
      "Carrier Id",
      "Carrier Name",
      "Date Range",
      "Employee Id",
      "Focus Area",
      "Horizon Years = 3"
    ]
  },
  {
    "id": "ai-employee-benefits-optimizer-claims-mbyvno-exact-ai",
    "title": "AI Employee Benefits Optimizer: Claims",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/claims.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Claims\" from AIEmployeeBenefitsOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Claims donor inputs",
    "outputLabel": "Claims AI response",
    "signals": [
      "server/routes/claims.js"
    ]
  },
  {
    "id": "ai-employee-benefits-optimizer-ai-tools-1977ko-exact-ai",
    "title": "AI Employee Benefits Optimizer: AI Tools",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AITools.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Tools\" from AIEmployeeBenefitsOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Tools donor inputs",
    "outputLabel": "AI Tools AI response",
    "signals": [
      "client/src/pages/AITools.js"
    ]
  },
  {
    "id": "ai-employee-benefits-optimizer-claims-ukjbkv-exact-ai",
    "title": "AI Employee Benefits Optimizer: Claims",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/Claims.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Claims\" from AIEmployeeBenefitsOptimizer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Claims donor inputs",
    "outputLabel": "Claims AI response",
    "signals": [
      "client/src/pages/Claims.js"
    ]
  },
  {
    "id": "ai-employee-sentiment-analyzer-source-workflow",
    "title": "AI Employee Sentiment Analyzer Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIEmployeeSentimentAnalyzer.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIEmployeeSentimentAnalyzer to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Employee Sentiment Analyzer source context",
    "outputLabel": "AI Employee Sentiment Analyzer source analysis",
    "signals": [
      "backend/services/openrouter",
      "frontend/src/main",
      "frontend/src/components/AIAnalysisDisplay",
      "backend/routes/agenticHrPartner",
      "backend/routes/aiNew"
    ]
  },
  {
    "id": "ai-employee-sentiment-analyzer-ai-tools",
    "title": "AI Employee Sentiment Analyzer AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIEmployeeSentimentAnalyzer.",
    "defaultPrompt": "Review AIEmployeeSentimentAnalyzer AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Employee Sentiment Analyzer AI prompt or tool context",
    "outputLabel": "AI Employee Sentiment Analyzer AI tool response",
    "signals": [
      "backend/services/openrouter.js",
      "frontend/src/main.jsx",
      "frontend/src/components/AIAnalysisDisplay.jsx",
      "backend/routes/agenticHrPartner.js",
      "backend/routes/aiNew.js"
    ]
  },
  {
    "id": "ai-employee-sentiment-analyzer-agentic-hr-partner-1sljgb-exact-ai",
    "title": "AI Employee Sentiment Analyzer: Agentic Hr Partner",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/agenticHrPartner.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Hr Partner\" from AIEmployeeSentimentAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Hr Partner donor inputs",
    "outputLabel": "Agentic Hr Partner AI response",
    "signals": [
      "Department",
      "Question"
    ]
  },
  {
    "id": "ai-employee-sentiment-analyzer-ai-new-7q6oy0-exact-ai",
    "title": "AI Employee Sentiment Analyzer: AI New",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/aiNew.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI New\" from AIEmployeeSentimentAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI New donor inputs",
    "outputLabel": "AI New AI response",
    "signals": [
      "Date Range",
      "Department",
      "Identified Issues",
      "Leader Name",
      "Lookback Days",
      "Metric Type",
      "Texts"
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-source-workflow",
    "title": "AI Esports Performance Analyzer Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIEsportsPerformanceAnalyzer.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIEsportsPerformanceAnalyzer to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Esports Performance Analyzer source context",
    "outputLabel": "AI Esports Performance Analyzer source analysis",
    "signals": [
      "frontend/src/pages/MatchDetail",
      "frontend/src/pages/PlayerDetail",
      "frontend/src/pages/TeamDetail",
      "frontend/src/pages/TournamentDetail",
      "frontend/src/pages/TrainingDetail",
      "frontend/src/pages/TrainingPlanGenerator",
      "frontend/src/pages/TrainingSchedules",
      "frontend/src/components/AIResultDisplay"
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-ai-tools",
    "title": "AI Esports Performance Analyzer AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIEsportsPerformanceAnalyzer.",
    "defaultPrompt": "Review AIEsportsPerformanceAnalyzer AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Esports Performance Analyzer AI prompt or tool context",
    "outputLabel": "AI Esports Performance Analyzer AI tool response",
    "signals": [
      "frontend/src/pages/MatchDetail.js",
      "frontend/src/pages/PlayerDetail.js",
      "frontend/src/pages/TeamDetail.js",
      "frontend/src/pages/TournamentDetail.js",
      "frontend/src/pages/TrainingDetail.js",
      "frontend/src/pages/TrainingPlanGenerator.js",
      "frontend/src/pages/TrainingSchedules.js",
      "frontend/src/components/AIResultDisplay.js"
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-match-detail-14y9qd-exact-ai",
    "title": "AI Esports Performance Analyzer: Match Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/MatchDetail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Match Detail\" from AIEsportsPerformanceAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Match Detail donor inputs",
    "outputLabel": "Match Detail AI response",
    "signals": [
      "Match Date *",
      "Team 1 *",
      "Team 2 *",
      "Map",
      "Score Team 2",
      "Notes",
      "Match Date",
      "Score Team 1"
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-player-detail-1b0ako-exact-ai",
    "title": "AI Esports Performance Analyzer: Player Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/PlayerDetail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Player Detail\" from AIEsportsPerformanceAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Player Detail donor inputs",
    "outputLabel": "Player Detail AI response",
    "signals": [
      "Real Name *",
      "Username *",
      "APM",
      "Country",
      "Win Rate (%)",
      "Country",
      "Positioning Score",
      "Accuracy (%)"
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-team-detail-18h4a8-exact-ai",
    "title": "AI Esports Performance Analyzer: Team Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/TeamDetail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Team Detail\" from AIEsportsPerformanceAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Team Detail donor inputs",
    "outputLabel": "Team Detail AI response",
    "signals": [
      "Name *",
      "Losses",
      "Founded Year",
      "Coach",
      "Name",
      "Wins",
      "Region",
      "Game"
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-tournament-detail-1h2ci8-exact-ai",
    "title": "AI Esports Performance Analyzer: Tournament Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/TournamentDetail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Tournament Detail\" from AIEsportsPerformanceAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Tournament Detail donor inputs",
    "outputLabel": "Tournament Detail AI response",
    "signals": [
      "Name *",
      "Format",
      "Start Date",
      "Organizer",
      "Name",
      "Max Teams",
      "Prize Pool ($)",
      "Location"
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-training-detail-1ugcg6-exact-ai",
    "title": "AI Esports Performance Analyzer: Training Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/TrainingDetail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Training Detail\" from AIEsportsPerformanceAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Training Detail donor inputs",
    "outputLabel": "Training Detail AI response",
    "signals": [
      "Title *",
      "Coach Notes",
      "Description",
      "Scheduled Date",
      "Duration (minutes)",
      "Intensity",
      "Title",
      "Description"
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-training-plan-generator-1njerq-exact-ai",
    "title": "AI Esports Performance Analyzer: Training Plan Generator",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/TrainingPlanGenerator.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Training Plan Generator\" from AIEsportsPerformanceAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Training Plan Generator donor inputs",
    "outputLabel": "Training Plan Generator AI response",
    "signals": [
      "Duration",
      "Select Player"
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-training-schedules-4fra2v-exact-ai",
    "title": "AI Esports Performance Analyzer: Training Schedules",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/TrainingSchedules.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Training Schedules\" from AIEsportsPerformanceAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Training Schedules donor inputs",
    "outputLabel": "Training Schedules AI response",
    "signals": [
      "Title *",
      "Coach Notes",
      "Description",
      "Scheduled Date",
      "Duration (minutes)",
      "Intensity",
      "Title",
      "Scheduled Date"
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-agentic-coach-1pwtkq-exact-ai",
    "title": "AI Esports Performance Analyzer: Agentic Coach",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/agenticCoach.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Coach\" from AIEsportsPerformanceAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Coach donor inputs",
    "outputLabel": "Agentic Coach AI response",
    "signals": [
      "Question",
      "Team Id"
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-ai-5cuwes-exact-ai",
    "title": "AI Esports Performance Analyzer: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIEsportsPerformanceAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Duration",
      "Focus Areas",
      "Game",
      "Opponent Team Id",
      "Player Id",
      "Team1 Id",
      "Team2 Id",
      "Team Id"
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-ai-new-7q6oy0-exact-ai",
    "title": "AI Esports Performance Analyzer: AI New",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/aiNew.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI New\" from AIEsportsPerformanceAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI New donor inputs",
    "outputLabel": "AI New AI response",
    "signals": [
      "Audience Demographics",
      "Channel Handles",
      "Days",
      "Entity Id",
      "Entity Type",
      "Game",
      "Lookback Days",
      "Market"
    ]
  },
  {
    "id": "ai-esports-performance-analyzer-training-1iusxl-exact-ai",
    "title": "AI Esports Performance Analyzer: Training",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/training.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Training\" from AIEsportsPerformanceAnalyzer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Training donor inputs",
    "outputLabel": "Training AI response",
    "signals": [
      "Coach Notes",
      "Description",
      "Duration Minutes",
      "Focus Area",
      "Intensity",
      "Player Id",
      "Scheduled Date",
      "Status"
    ]
  },
  {
    "id": "ai-exam-proctoring-system-source-workflow",
    "title": "AI Exam Proctoring System Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIExamProctoringSystem.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIExamProctoringSystem to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Exam Proctoring System source context",
    "outputLabel": "AI Exam Proctoring System source analysis",
    "signals": [
      "frontend/src/pages/AIInsightsPage",
      "backend/src/services/aiService",
      "backend/src/routes/agenticProctor",
      "backend/src/routes/aiAudioMonitoring",
      "backend/src/routes/aiBehaviorAnalysis",
      "backend/src/routes/aiFaceVerification",
      "backend/src/routes/aiNew",
      "backend/src/routes/aiPlagiarismDetection"
    ]
  },
  {
    "id": "ai-exam-proctoring-system-ai-tools",
    "title": "AI Exam Proctoring System AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIExamProctoringSystem.",
    "defaultPrompt": "Review AIExamProctoringSystem AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Exam Proctoring System AI prompt or tool context",
    "outputLabel": "AI Exam Proctoring System AI tool response",
    "signals": [
      "frontend/src/pages/AIInsightsPage.js",
      "backend/src/services/aiService.js",
      "backend/src/routes/agenticProctor.js",
      "backend/src/routes/aiAudioMonitoring.js",
      "backend/src/routes/aiBehaviorAnalysis.js",
      "backend/src/routes/aiFaceVerification.js",
      "backend/src/routes/aiNew.js",
      "backend/src/routes/aiPlagiarismDetection.js"
    ]
  },
  {
    "id": "ai-exam-proctoring-system-ai-insights-page-1xd9fc-exact-ai",
    "title": "AI Exam Proctoring System: AI Insights Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIInsightsPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Insights Page\" from AIExamProctoringSystem. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Insights Page donor inputs",
    "outputLabel": "AI Insights Page AI response",
    "signals": [
      "frontend/src/pages/AIInsightsPage.js"
    ]
  },
  {
    "id": "ai-exam-proctoring-system-agentic-proctor-4yddwl-exact-ai",
    "title": "AI Exam Proctoring System: Agentic Proctor",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/agenticProctor.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Proctor\" from AIExamProctoringSystem. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Proctor donor inputs",
    "outputLabel": "Agentic Proctor AI response",
    "signals": [
      "backend/src/routes/agenticProctor.js"
    ]
  },
  {
    "id": "ai-exam-proctoring-system-ai-audio-monitoring-1cwooe-exact-ai",
    "title": "AI Exam Proctoring System: AI Audio Monitoring",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/aiAudioMonitoring.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Audio Monitoring\" from AIExamProctoringSystem. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Audio Monitoring donor inputs",
    "outputLabel": "AI Audio Monitoring AI response",
    "signals": [
      "Audio Description",
      "Session Id"
    ]
  },
  {
    "id": "ai-exam-proctoring-system-ai-behavior-analysis-1ig521-exact-ai",
    "title": "AI Exam Proctoring System: AI Behavior Analysis",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/aiBehaviorAnalysis.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Behavior Analysis\" from AIExamProctoringSystem. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Behavior Analysis donor inputs",
    "outputLabel": "AI Behavior Analysis AI response",
    "signals": [
      "Behavior Data",
      "Session Id"
    ]
  },
  {
    "id": "ai-exam-proctoring-system-ai-face-verification-1axc1r-exact-ai",
    "title": "AI Exam Proctoring System: AI Face Verification",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/aiFaceVerification.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Face Verification\" from AIExamProctoringSystem. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Face Verification donor inputs",
    "outputLabel": "AI Face Verification AI response",
    "signals": [
      "Face Description",
      "Session Id"
    ]
  },
  {
    "id": "ai-exam-proctoring-system-ai-new-46ven9-exact-ai",
    "title": "AI Exam Proctoring System: AI New",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/aiNew.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI New\" from AIExamProctoringSystem. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI New donor inputs",
    "outputLabel": "AI New AI response",
    "signals": [
      "Exam Id",
      "Session Id"
    ]
  },
  {
    "id": "ai-exam-proctoring-system-ai-plagiarism-detection-qt1iv5-exact-ai",
    "title": "AI Exam Proctoring System: AI Plagiarism Detection",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/aiPlagiarismDetection.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Plagiarism Detection\" from AIExamProctoringSystem. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Plagiarism Detection donor inputs",
    "outputLabel": "AI Plagiarism Detection AI response",
    "signals": [
      "Original Text",
      "Student Answer"
    ]
  },
  {
    "id": "ai-golf-course-operations-manager-source-workflow",
    "title": "AI Golf Course Operations Manager Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIGolfCourseOperationsManager.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIGolfCourseOperationsManager to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Golf Course Operations Manager source context",
    "outputLabel": "AI Golf Course Operations Manager source analysis",
    "signals": [
      "server/routes/agenticMarshal",
      "server/routes/ai",
      "server/routes/gap-no-member-retention-intervention-ai",
      "server/routes/gap-no-round-pairing-optimization-for-fourso",
      "server/routes/gap-no-swing-analysis-vision-ai",
      "server/routes/maintenance",
      "client/src/pages/AIFeaturePage",
      "client/src/pages/CfAgenticCourseMarshalMonitoringPaceA"
    ]
  },
  {
    "id": "ai-golf-course-operations-manager-ai-tools",
    "title": "AI Golf Course Operations Manager AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIGolfCourseOperationsManager.",
    "defaultPrompt": "Review AIGolfCourseOperationsManager AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Golf Course Operations Manager AI prompt or tool context",
    "outputLabel": "AI Golf Course Operations Manager AI tool response",
    "signals": [
      "server/routes/agenticMarshal.js",
      "server/routes/ai.js",
      "server/routes/gap-no-member-retention-intervention-ai.js",
      "server/routes/gap-no-round-pairing-optimization-for-fourso.js",
      "server/routes/gap-no-swing-analysis-vision-ai.js",
      "server/routes/maintenance.js",
      "client/src/pages/AIFeaturePage.js",
      "client/src/pages/CfAgenticCourseMarshalMonitoringPaceA.jsx"
    ]
  },
  {
    "id": "ai-golf-course-operations-manager-agentic-marshal-1gdrw3-exact-ai",
    "title": "AI Golf Course Operations Manager: Agentic Marshal",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/agenticMarshal.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Marshal\" from AIGolfCourseOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Marshal donor inputs",
    "outputLabel": "Agentic Marshal AI response",
    "signals": [
      "Course Id",
      "Target Pace Minutes = 14"
    ]
  },
  {
    "id": "ai-golf-course-operations-manager-ai-j615h1-exact-ai",
    "title": "AI Golf Course Operations Manager: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIGolfCourseOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "'Driving Range'",
      "'Pro Shop']",
      "Audience",
      "Budget",
      "Communication Type",
      "Course Areas",
      "Course Rating",
      "Current Rate"
    ]
  },
  {
    "id": "ai-golf-course-operations-manager-gap-no-member-retention-intervention-ai-1d9o1e-exact-ai",
    "title": "AI Golf Course Operations Manager: Gap No Member Retention Intervention AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-no-member-retention-intervention-ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Member Retention Intervention AI\" from AIGolfCourseOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Member Retention Intervention AI donor inputs",
    "outputLabel": "Gap No Member Retention Intervention AI AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-golf-course-operations-manager-gap-no-round-pairing-optimization-for-fourso-p9xc16-exact-ai",
    "title": "AI Golf Course Operations Manager: Gap No Round Pairing Optimization For Fourso",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-no-round-pairing-optimization-for-fourso.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Round Pairing Optimization For Fourso\" from AIGolfCourseOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Round Pairing Optimization For Fourso donor inputs",
    "outputLabel": "Gap No Round Pairing Optimization For Fourso AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-golf-course-operations-manager-gap-no-swing-analysis-vision-ai-1779n3-exact-ai",
    "title": "AI Golf Course Operations Manager: Gap No Swing Analysis Vision AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-no-swing-analysis-vision-ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Swing Analysis Vision AI\" from AIGolfCourseOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Swing Analysis Vision AI donor inputs",
    "outputLabel": "Gap No Swing Analysis Vision AI AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-golf-course-operations-manager-ai-feature-page-rultnt-exact-ai",
    "title": "AI Golf Course Operations Manager: AI Feature Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIFeaturePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Feature Page\" from AIGolfCourseOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Feature Page donor inputs",
    "outputLabel": "AI Feature Page AI response",
    "signals": [
      "client/src/pages/AIFeaturePage.js"
    ]
  },
  {
    "id": "ai-golf-course-operations-manager-cf-agentic-course-marshal-monitoring-pace-a-6tv0hz-exact-ai",
    "title": "AI Golf Course Operations Manager: Cf Agentic Course Marshal Monitoring Pace A",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/CfAgenticCourseMarshalMonitoringPaceA.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Agentic Course Marshal Monitoring Pace A\" from AIGolfCourseOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Agentic Course Marshal Monitoring Pace A donor inputs",
    "outputLabel": "Cf Agentic Course Marshal Monitoring Pace A AI response",
    "signals": [
      "client/src/pages/CfAgenticCourseMarshalMonitoringPaceA.jsx"
    ]
  },
  {
    "id": "ai-golf-course-operations-manager-gap-no-member-retention-intervention-ai-eb4cqo-exact-ai",
    "title": "AI Golf Course Operations Manager: Gap No Member Retention Intervention AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapNoMemberRetentionInterventionAi.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Member Retention Intervention AI\" from AIGolfCourseOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Member Retention Intervention AI donor inputs",
    "outputLabel": "Gap No Member Retention Intervention AI AI response",
    "signals": [
      "client/src/pages/GapNoMemberRetentionInterventionAi.jsx"
    ]
  },
  {
    "id": "ai-golf-course-operations-manager-gap-no-round-pairing-optimization-for-fourso-7wseo9-exact-ai",
    "title": "AI Golf Course Operations Manager: Gap No Round Pairing Optimization For Fourso",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapNoRoundPairingOptimizationForFourso.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Round Pairing Optimization For Fourso\" from AIGolfCourseOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Round Pairing Optimization For Fourso donor inputs",
    "outputLabel": "Gap No Round Pairing Optimization For Fourso AI response",
    "signals": [
      "client/src/pages/GapNoRoundPairingOptimizationForFourso.jsx"
    ]
  },
  {
    "id": "ai-golf-course-operations-manager-gap-no-swing-analysis-vision-ai-1lk12z-exact-ai",
    "title": "AI Golf Course Operations Manager: Gap No Swing Analysis Vision AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapNoSwingAnalysisVisionAi.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Swing Analysis Vision AI\" from AIGolfCourseOperationsManager. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Swing Analysis Vision AI donor inputs",
    "outputLabel": "Gap No Swing Analysis Vision AI AI response",
    "signals": [
      "client/src/pages/GapNoSwingAnalysisVisionAi.jsx"
    ]
  },
  {
    "id": "ai-model-cost-orchestrator-source-workflow",
    "title": "AI Model Cost Orchestrator Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIModelCostOrchestrator.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIModelCostOrchestrator to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Model Cost Orchestrator source context",
    "outputLabel": "AI Model Cost Orchestrator source analysis",
    "signals": [
      "server/routes/prompt-optimization",
      "server/routes/agentic-model-router",
      "server/routes/ai-results",
      "server/routes/ai",
      "server/routes/gap-ai-agentic-cost-governor",
      "server/routes/gap-ai-dataset-leakage-detector",
      "server/routes/gap-ai-fine-tune-roi-analyzer",
      "server/routes/gap-ai-quality-vs-cost-pareto"
    ]
  },
  {
    "id": "ai-model-cost-orchestrator-ai-tools",
    "title": "AI Model Cost Orchestrator AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIModelCostOrchestrator.",
    "defaultPrompt": "Review AIModelCostOrchestrator AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Model Cost Orchestrator AI prompt or tool context",
    "outputLabel": "AI Model Cost Orchestrator AI tool response",
    "signals": [
      "server/routes/prompt-optimization.js",
      "server/routes/agentic-model-router.js",
      "server/routes/ai-results.js",
      "server/routes/ai.js",
      "server/routes/gap-ai-agentic-cost-governor.js",
      "server/routes/gap-ai-dataset-leakage-detector.js",
      "server/routes/gap-ai-fine-tune-roi-analyzer.js",
      "server/routes/gap-ai-quality-vs-cost-pareto.js"
    ]
  },
  {
    "id": "ai-model-cost-orchestrator-prompt-optimization-pibuwl-exact-ai",
    "title": "AI Model Cost Orchestrator: Prompt Optimization",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/prompt-optimization.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Prompt Optimization\" from AIModelCostOrchestrator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Prompt Optimization donor inputs",
    "outputLabel": "Prompt Optimization AI response",
    "signals": [
      "Category",
      "Model Used",
      "Name",
      "Optimized Prompt",
      "Optimized Tokens",
      "Original Prompt",
      "Original Tokens",
      "Prompt"
    ]
  },
  {
    "id": "ai-model-cost-orchestrator-agentic-model-router-18uuui-exact-ai",
    "title": "AI Model Cost Orchestrator: Agentic Model Router",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/agentic-model-router.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agentic Model Router\" from AIModelCostOrchestrator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agentic Model Router donor inputs",
    "outputLabel": "Agentic Model Router AI response",
    "signals": [
      "server/routes/agentic-model-router.js"
    ]
  },
  {
    "id": "ai-model-cost-orchestrator-ai-results-1xhz3f-exact-ai",
    "title": "AI Model Cost Orchestrator: AI Results",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai-results.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Results\" from AIModelCostOrchestrator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Results donor inputs",
    "outputLabel": "AI Results AI response",
    "signals": [
      "server/routes/ai-results.js"
    ]
  },
  {
    "id": "ai-model-cost-orchestrator-ai-j615h1-exact-ai",
    "title": "AI Model Cost Orchestrator: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIModelCostOrchestrator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Allowed Providers",
      "Budget Per Call",
      "Constraints",
      "Cost Per 1k Input = 0",
      "Cost Per 1k Output = 0",
      "Current Model",
      "Customer Id",
      "Goals"
    ]
  },
  {
    "id": "ai-model-cost-orchestrator-gap-ai-agentic-cost-governor-xapee9-exact-ai",
    "title": "AI Model Cost Orchestrator: Gap AI Agentic Cost Governor",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-ai-agentic-cost-governor.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Agentic Cost Governor\" from AIModelCostOrchestrator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Agentic Cost Governor donor inputs",
    "outputLabel": "Gap AI Agentic Cost Governor AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-model-cost-orchestrator-gap-ai-dataset-leakage-detector-1xmy5u-exact-ai",
    "title": "AI Model Cost Orchestrator: Gap AI Dataset Leakage Detector",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-ai-dataset-leakage-detector.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Dataset Leakage Detector\" from AIModelCostOrchestrator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Dataset Leakage Detector donor inputs",
    "outputLabel": "Gap AI Dataset Leakage Detector AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-model-cost-orchestrator-gap-ai-fine-tune-roi-analyzer-1rix42-exact-ai",
    "title": "AI Model Cost Orchestrator: Gap AI Fine Tune Roi Analyzer",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-ai-fine-tune-roi-analyzer.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Fine Tune Roi Analyzer\" from AIModelCostOrchestrator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Fine Tune Roi Analyzer donor inputs",
    "outputLabel": "Gap AI Fine Tune Roi Analyzer AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-model-cost-orchestrator-gap-ai-quality-vs-cost-pareto-d37chc-exact-ai",
    "title": "AI Model Cost Orchestrator: Gap AI Quality Vs Cost Pareto",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap-ai-quality-vs-cost-pareto.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Quality Vs Cost Pareto\" from AIModelCostOrchestrator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Quality Vs Cost Pareto donor inputs",
    "outputLabel": "Gap AI Quality Vs Cost Pareto AI response",
    "signals": [
      "Context",
      "Input"
    ]
  },
  {
    "id": "ai-model-cost-orchestrator-sla-cost-guardrail-1j9wbz-exact-ai",
    "title": "AI Model Cost Orchestrator: Sla Cost Guardrail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/sla-cost-guardrail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Sla Cost Guardrail\" from AIModelCostOrchestrator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Sla Cost Guardrail donor inputs",
    "outputLabel": "Sla Cost Guardrail AI response",
    "signals": [
      "Avg Tokens = 0",
      "Latency P95 Ms = 0",
      "Model Cost Per1k = 0.002",
      "Monthly Budget = 1000",
      "Requests Per Minute = 0",
      "Sla Ms = 2000"
    ]
  },
  {
    "id": "ai-model-cost-orchestrator-ai-tools-page-hm1a26-exact-ai",
    "title": "AI Model Cost Orchestrator: AI Tools Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AIToolsPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Tools Page\" from AIModelCostOrchestrator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Tools Page donor inputs",
    "outputLabel": "AI Tools Page AI response",
    "signals": [
      "client/src/pages/AIToolsPage.jsx"
    ]
  },
  {
    "id": "ai-model-cost-orchestrator-feature-detail-3mq0t7-exact-ai",
    "title": "AI Model Cost Orchestrator: Feature Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/FeatureDetail.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Feature Detail\" from AIModelCostOrchestrator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Feature Detail donor inputs",
    "outputLabel": "Feature Detail AI response",
    "signals": [
      "client/src/pages/FeatureDetail.jsx"
    ]
  },
  {
    "id": "ai-model-cost-orchestrator-gap-agentic-amr2uz-exact-ai",
    "title": "AI Model Cost Orchestrator: Gap Agentic",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAgentic.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Agentic\" from AIModelCostOrchestrator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Agentic donor inputs",
    "outputLabel": "Gap Agentic AI response",
    "signals": [
      "client/src/pages/GapAgentic.jsx"
    ]
  },
  {
    "id": "ai-model-cost-orchestrator-gap-ai-agentic-cost-governor-1j766x-exact-ai",
    "title": "AI Model Cost Orchestrator: Gap AI Agentic Cost Governor",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAiAgenticCostGovernor.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Agentic Cost Governor\" from AIModelCostOrchestrator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Agentic Cost Governor donor inputs",
    "outputLabel": "Gap AI Agentic Cost Governor AI response",
    "signals": [
      "client/src/pages/GapAiAgenticCostGovernor.jsx"
    ]
  },
  {
    "id": "ai-model-cost-orchestrator-gap-ai-dataset-leakage-detector-100eo4-exact-ai",
    "title": "AI Model Cost Orchestrator: Gap AI Dataset Leakage Detector",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAiDatasetLeakageDetector.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Dataset Leakage Detector\" from AIModelCostOrchestrator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Dataset Leakage Detector donor inputs",
    "outputLabel": "Gap AI Dataset Leakage Detector AI response",
    "signals": [
      "client/src/pages/GapAiDatasetLeakageDetector.jsx"
    ]
  },
  {
    "id": "ai-model-cost-orchestrator-gap-ai-fine-tune-roi-analyzer-1s5f01-exact-ai",
    "title": "AI Model Cost Orchestrator: Gap AI Fine Tune Roi Analyzer",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAiFineTuneRoiAnalyzer.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Fine Tune Roi Analyzer\" from AIModelCostOrchestrator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Fine Tune Roi Analyzer donor inputs",
    "outputLabel": "Gap AI Fine Tune Roi Analyzer AI response",
    "signals": [
      "client/src/pages/GapAiFineTuneRoiAnalyzer.jsx"
    ]
  },
  {
    "id": "ai-model-cost-orchestrator-gap-ai-quality-vs-cost-pareto-1aath3-exact-ai",
    "title": "AI Model Cost Orchestrator: Gap AI Quality Vs Cost Pareto",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAiQualityVsCostPareto.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Quality Vs Cost Pareto\" from AIModelCostOrchestrator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Quality Vs Cost Pareto donor inputs",
    "outputLabel": "Gap AI Quality Vs Cost Pareto AI response",
    "signals": [
      "client/src/pages/GapAiQualityVsCostPareto.jsx"
    ]
  },
  {
    "id": "ai-model-cost-orchestrator-sla-cost-guardrail-page-njb5aj-exact-ai",
    "title": "AI Model Cost Orchestrator: SLA Cost Guardrail Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/SLACostGuardrailPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"SLA Cost Guardrail Page\" from AIModelCostOrchestrator. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "SLA Cost Guardrail Page donor inputs",
    "outputLabel": "SLA Cost Guardrail Page AI response",
    "signals": [
      "client/src/pages/SLACostGuardrailPage.jsx"
    ]
  },
  {
    "id": "ai-notary-document-verification-source-workflow",
    "title": "AI Notary Document Verification Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AINotaryDocumentVerification.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AINotaryDocumentVerification to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Notary Document Verification source context",
    "outputLabel": "AI Notary Document Verification source analysis",
    "signals": [
      "frontend/src/main",
      "frontend/src/pages/AIAnalyses",
      "frontend/src/pages/AIHistory",
      "frontend/src/pages/AIRiskAnalysis",
      "frontend/src/pages/AuditTrail",
      "frontend/src/pages/CFAgenticComplianceMonitoringPage",
      "frontend/src/components/AIResultDisplay",
      "frontend/src/components/DetailModal"
    ]
  },
  {
    "id": "ai-notary-document-verification-ai-tools",
    "title": "AI Notary Document Verification AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AINotaryDocumentVerification.",
    "defaultPrompt": "Review AINotaryDocumentVerification AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Notary Document Verification AI prompt or tool context",
    "outputLabel": "AI Notary Document Verification AI tool response",
    "signals": [
      "frontend/src/main.jsx",
      "frontend/src/pages/AIAnalyses.jsx",
      "frontend/src/pages/AIHistory.jsx",
      "frontend/src/pages/AIRiskAnalysis.jsx",
      "frontend/src/pages/AuditTrail.jsx",
      "frontend/src/pages/CFAgenticComplianceMonitoringPage.jsx",
      "frontend/src/components/AIResultDisplay.jsx",
      "frontend/src/components/DetailModal.jsx"
    ]
  },
  {
    "id": "ai-notary-document-verification-ai-analyses-1yt3io-exact-ai",
    "title": "AI Notary Document Verification: AI Analyses",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIAnalyses.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Analyses\" from AINotaryDocumentVerification. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Analyses donor inputs",
    "outputLabel": "AI Analyses AI response",
    "signals": [
      "Document ID",
      "Document Title"
    ]
  },
  {
    "id": "ai-notary-document-verification-ai-history-67q48z-exact-ai",
    "title": "AI Notary Document Verification: AI History",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIHistory.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI History\" from AINotaryDocumentVerification. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI History donor inputs",
    "outputLabel": "AI History AI response",
    "signals": [
      "Limit",
      "Page",
      "Total",
      "Total Pages"
    ]
  },
  {
    "id": "ai-notary-document-verification-ai-risk-analysis-wo7ic0-exact-ai",
    "title": "AI Notary Document Verification: AI Risk Analysis",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIRiskAnalysis.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Risk Analysis\" from AINotaryDocumentVerification. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Risk Analysis donor inputs",
    "outputLabel": "AI Risk Analysis AI response",
    "signals": [
      "Client Id",
      "Complexity",
      "Document Purpose",
      "Document Type",
      "Flags",
      "Full Name",
      "History Summary",
      "Id Number"
    ]
  },
  {
    "id": "ai-notary-document-verification-audit-trail-1agcbw-exact-ai",
    "title": "AI Notary Document Verification: Audit Trail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AuditTrail.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Audit Trail\" from AINotaryDocumentVerification. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Audit Trail donor inputs",
    "outputLabel": "Audit Trail AI response",
    "signals": [
      "frontend/src/pages/AuditTrail.jsx"
    ]
  },
  {
    "id": "ai-notary-document-verification-cf-agentic-compliance-monitoring-page-8ed33x-exact-ai",
    "title": "AI Notary Document Verification: CF Agentic Compliance Monitoring Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CFAgenticComplianceMonitoringPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"CF Agentic Compliance Monitoring Page\" from AINotaryDocumentVerification. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "CF Agentic Compliance Monitoring Page donor inputs",
    "outputLabel": "CF Agentic Compliance Monitoring Page AI response",
    "signals": [
      "frontend/src/pages/CFAgenticComplianceMonitoringPage.jsx"
    ]
  },
  {
    "id": "ai-notary-document-verification-ai-5cuwes-exact-ai",
    "title": "AI Notary Document Verification: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AINotaryDocumentVerification. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Analysis Type",
      "Batch Label",
      "Client Id",
      "Complexity",
      "Content",
      "Document Id",
      "Document Number",
      "Document Type"
    ]
  },
  {
    "id": "ai-notary-document-verification-ai-analyses-1g7vew-exact-ai",
    "title": "AI Notary Document Verification: AI Analyses",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/aiAnalyses.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Analyses\" from AINotaryDocumentVerification. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Analyses donor inputs",
    "outputLabel": "AI Analyses AI response",
    "signals": [
      "Analysis Type",
      "Confidence",
      "Document Id",
      "Model Used",
      "Processing Time",
      "Result",
      "Tokens Used"
    ]
  },
  {
    "id": "ai-notary-document-verification-audit-trail-1hmrdo-exact-ai",
    "title": "AI Notary Document Verification: Audit Trail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/auditTrail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Audit Trail\" from AINotaryDocumentVerification. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Audit Trail donor inputs",
    "outputLabel": "Audit Trail AI response",
    "signals": [
      "Action",
      "Details",
      "Entity Id",
      "Entity Type",
      "Ip Address",
      "User Id"
    ]
  },
  {
    "id": "ai-notary-document-verification-custom-feat01-agentic-compliance-monitoring-hz6s2t-exact-ai",
    "title": "AI Notary Document Verification: Custom Feat01 Agentic Compliance Monitoring",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/customFeat01_AgenticComplianceMonitoring.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Custom Feat01 Agentic Compliance Monitoring\" from AINotaryDocumentVerification. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Custom Feat01 Agentic Compliance Monitoring donor inputs",
    "outputLabel": "Custom Feat01 Agentic Compliance Monitoring AI response",
    "signals": [
      "backend/routes/customFeat01_AgenticComplianceMonitoring.js"
    ]
  },
  {
    "id": "ai-optometry-assistant-source-workflow",
    "title": "AI Optometry Assistant Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIOptometryAssistant.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIOptometryAssistant to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Optometry Assistant source context",
    "outputLabel": "AI Optometry Assistant source analysis",
    "signals": [
      "frontend/src/main",
      "frontend/src/pages/CFAgenticPatientFollowUpPage",
      "backend/src/routes/ai",
      "backend/src/routes/customFeat01_AgenticPatientFollowUp",
      "backend/src/routes/patientAI"
    ]
  },
  {
    "id": "ai-optometry-assistant-ai-tools",
    "title": "AI Optometry Assistant AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIOptometryAssistant.",
    "defaultPrompt": "Review AIOptometryAssistant AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Optometry Assistant AI prompt or tool context",
    "outputLabel": "AI Optometry Assistant AI tool response",
    "signals": [
      "frontend/src/main.jsx",
      "frontend/src/pages/CFAgenticPatientFollowUpPage.jsx",
      "backend/src/routes/ai.js",
      "backend/src/routes/customFeat01_AgenticPatientFollowUp.js",
      "backend/src/routes/patientAI.js"
    ]
  },
  {
    "id": "ai-optometry-assistant-cf-agentic-patient-follow-up-page-v0s39n-exact-ai",
    "title": "AI Optometry Assistant: CF Agentic Patient Follow Up Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CFAgenticPatientFollowUpPage.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"CF Agentic Patient Follow Up Page\" from AIOptometryAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "CF Agentic Patient Follow Up Page donor inputs",
    "outputLabel": "CF Agentic Patient Follow Up Page AI response",
    "signals": [
      "frontend/src/pages/CFAgenticPatientFollowUpPage.jsx"
    ]
  },
  {
    "id": "ai-optometry-assistant-ai-1lp99l-exact-ai",
    "title": "AI Optometry Assistant: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIOptometryAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Acuity Records",
      "Age Band",
      "Allergies",
      "Appointments",
      "Budget",
      "Capacity Constraints",
      "Channels",
      "Chief Complaint"
    ]
  },
  {
    "id": "ai-optometry-assistant-custom-feat01-agentic-patient-follow-up-taxi72-exact-ai",
    "title": "AI Optometry Assistant: Custom Feat01 Agentic Patient Follow Up",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/customFeat01_AgenticPatientFollowUp.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Custom Feat01 Agentic Patient Follow Up\" from AIOptometryAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Custom Feat01 Agentic Patient Follow Up donor inputs",
    "outputLabel": "Custom Feat01 Agentic Patient Follow Up AI response",
    "signals": [
      "backend/src/routes/customFeat01_AgenticPatientFollowUp.js"
    ]
  },
  {
    "id": "ai-optometry-assistant-patient-ai-1zp9l6-exact-ai",
    "title": "AI Optometry Assistant: Patient AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/patientAI.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Patient AI\" from AIOptometryAssistant. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Patient AI donor inputs",
    "outputLabel": "Patient AI AI response",
    "signals": [
      "Additional Context",
      "Auto Create",
      "Budget",
      "Condition",
      "Conditions",
      "Current Complaint",
      "Diagnosis",
      "Face Shape"
    ]
  },
  {
    "id": "ai-research-literature-agent-source-workflow",
    "title": "AI Research Literature Agent Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIResearchLiteratureAgent.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIResearchLiteratureAgent to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Research Literature Agent source context",
    "outputLabel": "AI Research Literature Agent source analysis",
    "signals": [
      "frontend/src/pages/AgentsPage",
      "frontend/src/pages/GapNoHighlightannotationTool",
      "frontend/src/pages/NewAgentsPage",
      "frontend/src/components/DetailPanel",
      "backend/routes/agents",
      "backend/routes/ai-citation-graph",
      "backend/routes/ai-literature-review",
      "backend/routes/gap-no-highlightannotation-tool"
    ]
  },
  {
    "id": "ai-research-literature-agent-ai-tools",
    "title": "AI Research Literature Agent AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIResearchLiteratureAgent.",
    "defaultPrompt": "Review AIResearchLiteratureAgent AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Research Literature Agent AI prompt or tool context",
    "outputLabel": "AI Research Literature Agent AI tool response",
    "signals": [
      "frontend/src/pages/AgentsPage.js",
      "frontend/src/pages/GapNoHighlightannotationTool.jsx",
      "frontend/src/pages/NewAgentsPage.js",
      "frontend/src/components/DetailPanel.js",
      "backend/routes/agents.js",
      "backend/routes/ai-citation-graph.js",
      "backend/routes/ai-literature-review.js",
      "backend/routes/gap-no-highlightannotation-tool.js"
    ]
  },
  {
    "id": "ai-research-literature-agent-agents-page-z7c154-exact-ai",
    "title": "AI Research Literature Agent: Agents Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AgentsPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agents Page\" from AIResearchLiteratureAgent. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agents Page donor inputs",
    "outputLabel": "Agents Page AI response",
    "signals": [
      "Doi",
      "Existing",
      "Field",
      "Paper Title",
      "Papers Summary",
      "Review Topic",
      "Scope",
      "Synth Topic"
    ]
  },
  {
    "id": "ai-research-literature-agent-new-agents-page-yegsqc-exact-ai",
    "title": "AI Research Literature Agent: New Agents Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/NewAgentsPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"New Agents Page\" from AIResearchLiteratureAgent. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "New Agents Page donor inputs",
    "outputLabel": "New Agents Page AI response",
    "signals": [
      "frontend/src/pages/NewAgentsPage.js"
    ]
  },
  {
    "id": "ai-research-literature-agent-agents-bn6792-exact-ai",
    "title": "AI Research Literature Agent: Agents",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/agents.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Agents\" from AIResearchLiteratureAgent. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Agents donor inputs",
    "outputLabel": "Agents AI response",
    "signals": [
      "backend/routes/agents.js"
    ]
  },
  {
    "id": "ai-research-literature-agent-ai-citation-graph-u02ymz-exact-ai",
    "title": "AI Research Literature Agent: AI Citation Graph",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai-citation-graph.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Citation Graph\" from AIResearchLiteratureAgent. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Citation Graph donor inputs",
    "outputLabel": "AI Citation Graph AI response",
    "signals": [
      "Paper Id",
      "Papers"
    ]
  },
  {
    "id": "ai-research-literature-agent-ai-literature-review-zj0zdr-exact-ai",
    "title": "AI Research Literature Agent: AI Literature Review",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai-literature-review.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Literature Review\" from AIResearchLiteratureAgent. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Literature Review donor inputs",
    "outputLabel": "AI Literature Review AI response",
    "signals": [
      "backend/routes/ai-literature-review.js"
    ]
  },
  {
    "id": "dynamic-software-interfaces-source-workflow",
    "title": "Dynamic Software Interfaces Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from dynamic-software-interfaces.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from dynamic-software-interfaces to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "Dynamic Software Interfaces source context",
    "outputLabel": "Dynamic Software Interfaces source analysis",
    "signals": [
      "tailwind.config",
      "src/main",
      "frontend/tailwind.config",
      "frontend/src/main",
      "frontend/src/pages/GapAgentCustomizer",
      "frontend/src/data/mockEmails",
      "frontend/src/components/AICenter",
      "frontend/src/components/AIResponse"
    ]
  },
  {
    "id": "dynamic-software-interfaces-ai-tools",
    "title": "Dynamic Software Interfaces AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from dynamic-software-interfaces.",
    "defaultPrompt": "Review dynamic-software-interfaces AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "Dynamic Software Interfaces AI prompt or tool context",
    "outputLabel": "Dynamic Software Interfaces AI tool response",
    "signals": [
      "tailwind.config.js",
      "src/main.tsx",
      "frontend/tailwind.config.js",
      "frontend/src/main.tsx",
      "frontend/src/pages/GapAgentCustomizer.tsx",
      "frontend/src/data/mockEmails.ts",
      "frontend/src/components/AICenter.tsx",
      "frontend/src/components/AIResponse.tsx"
    ]
  },
  {
    "id": "dynamic-software-interfaces-gap-agent-customizer-1hs6qx-exact-ai",
    "title": "Dynamic Software Interfaces: Gap Agent Customizer",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapAgentCustomizer.tsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Agent Customizer\" from dynamic-software-interfaces. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Agent Customizer donor inputs",
    "outputLabel": "Gap Agent Customizer AI response",
    "signals": [
      "frontend/src/pages/GapAgentCustomizer.tsx"
    ]
  },
  {
    "id": "dynamic-software-interfaces-ai-5cuwes-exact-ai",
    "title": "Dynamic Software Interfaces: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from dynamic-software-interfaces. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Current Layout",
      "Data Source",
      "Session Data",
      "Usage Patterns",
      "Use Case",
      "User Behavior",
      "User Id",
      "User Role"
    ]
  },
  {
    "id": "dynamic-software-interfaces-ai-extra-10q8zo-exact-ai",
    "title": "Dynamic Software Interfaces: AI Extra",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai_extra.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Extra\" from dynamic-software-interfaces. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Extra donor inputs",
    "outputLabel": "AI Extra AI response",
    "signals": [
      "Audience",
      "Base Color",
      "Brand",
      "Component",
      "Description",
      "Framework",
      "Hypothesis",
      "Mood"
    ]
  },
  {
    "id": "dynamic-software-interfaces-gap-ai-agent-customizer-a3j535-exact-ai",
    "title": "Dynamic Software Interfaces: Gap AI Agent Customizer",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-ai-agent-customizer.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Agent Customizer\" from dynamic-software-interfaces. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Agent Customizer donor inputs",
    "outputLabel": "Gap AI Agent Customizer AI response",
    "signals": [
      "backend/routes/gap-ai-agent-customizer.js"
    ]
  },
  {
    "id": "dynamic-software-interfaces-gap-ai-feedback-clustering-98szfw-exact-ai",
    "title": "Dynamic Software Interfaces: Gap AI Feedback Clustering",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-ai-feedback-clustering.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Feedback Clustering\" from dynamic-software-interfaces. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Feedback Clustering donor inputs",
    "outputLabel": "Gap AI Feedback Clustering AI response",
    "signals": [
      "backend/routes/gap-ai-feedback-clustering.js"
    ]
  },
  {
    "id": "dynamic-software-interfaces-gap-ai-i18n-translator-13w0a3-exact-ai",
    "title": "Dynamic Software Interfaces: Gap AI I18n Translator",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-ai-i18n-translator.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI I18n Translator\" from dynamic-software-interfaces. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI I18n Translator donor inputs",
    "outputLabel": "Gap AI I18n Translator AI response",
    "signals": [
      "backend/routes/gap-ai-i18n-translator.js"
    ]
  },
  {
    "id": "dynamic-software-interfaces-gap-ai-screenshot-extractor-d2vssz-exact-ai",
    "title": "Dynamic Software Interfaces: Gap AI Screenshot Extractor",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-ai-screenshot-extractor.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Screenshot Extractor\" from dynamic-software-interfaces. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Screenshot Extractor donor inputs",
    "outputLabel": "Gap AI Screenshot Extractor AI response",
    "signals": [
      "backend/routes/gap-ai-screenshot-extractor.js"
    ]
  },
  {
    "id": "dynamic-software-interfaces-gap-ai-session-replay-summarizer-1xxfdh-exact-ai",
    "title": "Dynamic Software Interfaces: Gap AI Session Replay Summarizer",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-ai-session-replay-summarizer.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Session Replay Summarizer\" from dynamic-software-interfaces. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Session Replay Summarizer donor inputs",
    "outputLabel": "Gap AI Session Replay Summarizer AI response",
    "signals": [
      "backend/routes/gap-ai-session-replay-summarizer.js"
    ]
  },
  {
    "id": "dynamic-software-interfaces-gap-nonai-analytics-events-1tlzly-exact-ai",
    "title": "Dynamic Software Interfaces: Gap Nonai Analytics Events",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-nonai-analytics-events.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Nonai Analytics Events\" from dynamic-software-interfaces. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Nonai Analytics Events donor inputs",
    "outputLabel": "Gap Nonai Analytics Events AI response",
    "signals": [
      "backend/routes/gap-nonai-analytics-events.js"
    ]
  },
  {
    "id": "dynamic-software-interfaces-gap-nonai-customization-versioning-mi8gfb-exact-ai",
    "title": "Dynamic Software Interfaces: Gap Nonai Customization Versioning",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-nonai-customization-versioning.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Nonai Customization Versioning\" from dynamic-software-interfaces. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Nonai Customization Versioning donor inputs",
    "outputLabel": "Gap Nonai Customization Versioning AI response",
    "signals": [
      "backend/routes/gap-nonai-customization-versioning.js"
    ]
  },
  {
    "id": "dynamic-software-interfaces-gap-nonai-render-endpoint-1gsx5u-exact-ai",
    "title": "Dynamic Software Interfaces: Gap Nonai Render Endpoint",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-nonai-render-endpoint.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Nonai Render Endpoint\" from dynamic-software-interfaces. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Nonai Render Endpoint donor inputs",
    "outputLabel": "Gap Nonai Render Endpoint AI response",
    "signals": [
      "backend/routes/gap-nonai-render-endpoint.js"
    ]
  },
  {
    "id": "dynamic-software-interfaces-gap-nonai-theme-toggle-1e929u-exact-ai",
    "title": "Dynamic Software Interfaces: Gap Nonai Theme Toggle",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-nonai-theme-toggle.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Nonai Theme Toggle\" from dynamic-software-interfaces. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Nonai Theme Toggle donor inputs",
    "outputLabel": "Gap Nonai Theme Toggle AI response",
    "signals": [
      "backend/routes/gap-nonai-theme-toggle.js"
    ]
  },
  {
    "id": "dynamic-software-interfaces-gap-nonai-widget-marketplace-1xrt79-exact-ai",
    "title": "Dynamic Software Interfaces: Gap Nonai Widget Marketplace",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/gap-nonai-widget-marketplace.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Nonai Widget Marketplace\" from dynamic-software-interfaces. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Nonai Widget Marketplace donor inputs",
    "outputLabel": "Gap Nonai Widget Marketplace AI response",
    "signals": [
      "backend/routes/gap-nonai-widget-marketplace.js"
    ]
  },
  {
    "id": "linkedin-source-workflow",
    "title": "Linkedin Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from linkedin.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from linkedin to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "Linkedin source context",
    "outputLabel": "Linkedin source analysis",
    "signals": [
      "/terms",
      "/talent",
      "/signup",
      "/settings",
      "/search",
      "/sales",
      "/safety",
      "/profile"
    ]
  },
  {
    "id": "linkedin-ai-tools",
    "title": "Linkedin AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from linkedin.",
    "defaultPrompt": "Review linkedin AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "Linkedin AI prompt or tool context",
    "outputLabel": "Linkedin AI tool response",
    "signals": [
      "app/api/ai/salary-insights/route.ts",
      "app/api/ai/resume-builder/route.ts",
      "app/api/ai/moderation/route.ts",
      "app/api/ai/live-messaging/route.ts",
      "app/api/ai/feed-ranking/route.ts",
      "app/api/ai/creator-analytics/route.ts",
      "/api/users/[id]",
      "/api/stories"
    ]
  },
  {
    "id": "linkedin-route-1bo20b-exact-ai",
    "title": "Linkedin: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/salary-insights/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from linkedin. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/ai/salary-insights/route.ts"
    ]
  },
  {
    "id": "linkedin-route-1vyjtp-exact-ai",
    "title": "Linkedin: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/resume-builder/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from linkedin. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "Job Description",
      "Mode = 'Build'"
    ]
  },
  {
    "id": "linkedin-route-58bdt4-exact-ai",
    "title": "Linkedin: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/moderation/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from linkedin. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/ai/moderation/route.ts"
    ]
  },
  {
    "id": "linkedin-route-1fvdor-exact-ai",
    "title": "Linkedin: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/live-messaging/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from linkedin. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/ai/live-messaging/route.ts"
    ]
  },
  {
    "id": "linkedin-route-x0jujh-exact-ai",
    "title": "Linkedin: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/feed-ranking/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from linkedin. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/ai/feed-ranking/route.ts"
    ]
  },
  {
    "id": "linkedin-route-7dd0n7-exact-ai",
    "title": "Linkedin: Route",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from app/api/ai/creator-analytics/route.ts. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Route\" from linkedin. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Route donor inputs",
    "outputLabel": "Route AI response",
    "signals": [
      "app/api/ai/creator-analytics/route.ts"
    ]
  }
];
