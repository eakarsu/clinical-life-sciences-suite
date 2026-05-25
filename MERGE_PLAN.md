# Clinical Life Sciences Merge Plan

Objective:
- Merge clinical research and life-sciences source capabilities into one application with one login, one sidebar, one dashboard, and feature-first navigation.

Source candidates:
- `AIClinicalTrialMatching`
- `AIPharmaTrialDesigner`
- `AIDrugInteractionChecker`
- `AIResearchLiteratureAgent`
- `AIPathologySlideAnalyzer`
- `AILabSimulationPlatform`

Merged product model:
- Clinical research portfolio
- Trial operations
- Safety and pharmacovigilance
- Regulatory and GCP compliance
- Data management and biostatistics
- Medical writing
- AI assistant and AI tools
- Documents, notifications, profiles, and integrations

Implementation pattern:
- Next.js frontend
- PostgreSQL persistence
- seeded role-based users
- protected routes
- smoke test coverage

Source-project rule:
- source projects are read-only inputs
- no source project folder is modified

