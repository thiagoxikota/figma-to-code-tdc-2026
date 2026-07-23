# TDC onboarding UX redesign

Slug: `tdc-onboarding-ux`

## Files

- `source-audit.md` - source-of-truth scan before prompting or implementation.
- `design-intent-brief.md` - implementation brief to fill before work starts.
- `verification-report.md` - proof record before saying ready.
- `verification-commands.json` - optional command manifest executed by the task gate runner.

## Workflow

1. Fill `source-audit.md`.
2. Fill `design-intent-brief.md`.
3. Validate the brief:

```bash
node /Users/thiagoxikota/.agents/skills/design-engineer-ia/scripts/validate-design-brief.mjs design-intent-brief.md
```

4. Implement the smallest inspectable artifact.
5. Fill `verification-report.md` with actual evidence.
6. Run the full task gates:

```bash
node /Users/thiagoxikota/.agents/skills/design-engineer-ia/scripts/run-design-task-gates.mjs . --json
```

7. If there is no implementation/prototype, validate the packet structurally:

```bash
node /Users/thiagoxikota/.agents/skills/design-engineer-ia/scripts/validate-design-task.mjs .
```

8. Generate a bounded role prompt when delegating a pass:

```bash
node /Users/thiagoxikota/.agents/skills/design-engineer-ia/scripts/render-agent-role-prompt.mjs --role frontend-implementer --task-packet .
```

9. Or package the standard role prompts into the task packet:

```bash
node /Users/thiagoxikota/.agents/skills/design-engineer-ia/scripts/package-agent-passes.mjs --task-packet . --force
```

Do not treat this packet as complete until the design intent brief validates and the verification report contains real command, screenshot, route, source, or review evidence.
