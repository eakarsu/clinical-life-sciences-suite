# Clinical Life Sciences Suite

Wave:
- Wave 02 - Healthcare, Care, and Life Sciences

Source candidates represented:
- `AIClinicalTrialMatching`
- `AIPharmaTrialDesigner`
- `AIDrugInteractionChecker`
- `AIResearchLiteratureAgent`
- `AIPathologySlideAnalyzer`
- `AIClinicalTrialMatching`
- `AILabSimulationPlatform`

This suite merges clinical research and life-sciences capabilities into one feature-first application:
- one login
- one combined dashboard
- one sidebar with all clinical research features
- PostgreSQL-backed feature state, entity records, documents, notifications, and audit log
- role behavior for admin, manager, and analyst users

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/clinical-life-sciences-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:3610`

Seeded users:
- `admin@clinical-life.local / admin123`
- `manager@clinical-life.local / manager123`
- `analyst@clinical-life.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/clinical-life-sciences-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:3610 npm run smoke
```

## Completion Scope

Implemented feature groups:
- Clinical Research
- Trial Operations
- Safety
- Regulatory
- Data & Analytics
- Intelligence Layer
- Core Platform

This is a Wave 02 suite created without modifying any original source project.

