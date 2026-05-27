export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "literature-intelligence",
    "label": "Literature Intelligence",
    "description": "Open AIResearchLiteratureAgent workflows for literature reviews, citation tracking, paper summaries, and evidence tables.",
    "href": "/literature-review",
    "sourceProjects": [
      "AIResearchLiteratureAgent"
    ],
    "examples": [
      "AI literature review",
      "Citation graph",
      "Paper summarizer",
      "Evidence table"
    ],
    "count": 1
  },
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AIBuildingSafetyInspector",
      "AIDreamJournalAnalyzer",
      "AIDrugInteractionChecker",
      "AIEmployeeBenefitsOptimizer",
      "AIEmployeeSentimentAnalyzer",
      "AIEsportsPerformanceAnalyzer",
      "AIExamProctoringSystem",
      "AIGolfCourseOperationsManager",
      "AIModelCostOrchestrator",
      "AINotaryDocumentVerification",
      "AIOptometryAssistant",
      "AIResearchLiteratureAgent"
    ],
    "examples": [
      "backend/agents/citationTracker",
      "backend/agents/gapFinderAgent",
      "backend/agents/reviewGeneratorAgent",
      "backend/agents/searchAgent",
      "backend/agents/synthesizerAgent",
      "backend/middleware/parseAIJson"
    ],
    "count": 14
  },
  {
    "id": "source-workflows",
    "label": "Source Workflows",
    "description": "Open source-derived workflows and feature actions.",
    "href": "/features",
    "sourceProjects": [
      "AIEmployeeBenefitsOptimizer",
      "AIModelCostOrchestrator",
      "AIResearchLiteratureAgent",
      "linkedin"
    ],
    "examples": [
      "/language",
      "/learning",
      "/learning/[id]",
      "/login",
      "/marketing",
      "/messaging"
    ],
    "count": 4
  },
  {
    "id": "compliance",
    "label": "Compliance",
    "description": "Open compliance, audit, policy, privacy, and risk actions.",
    "href": "/features",
    "sourceProjects": [
      "linkedin"
    ],
    "examples": [
      "/privacy"
    ],
    "count": 1
  },
  {
    "id": "customers",
    "label": "Customers",
    "description": "Open customer, client, patient, member, or lead workflows.",
    "href": "/features",
    "sourceProjects": [
      "AIEmployeeBenefitsOptimizer"
    ],
    "examples": [
      "client/src/pages/Enrollment",
      "client/src/pages/OpenEnrollmentPeriods"
    ],
    "count": 1
  },
  {
    "id": "documents",
    "label": "Documents",
    "description": "Open document intake, upload, extraction, and review actions.",
    "href": "/documents",
    "sourceProjects": [
      "linkedin"
    ],
    "examples": [
      "/profile",
      "/profile/[id]"
    ],
    "count": 1
  }
];
