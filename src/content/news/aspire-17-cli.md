---
title: CLI and agent workflows
summary: Shell completion, environment-specific secrets, team template and integration sources, a preview tray, and richer VS Code agent tools sharpen local workflows.
category: Developer tools
published: 2026-11-17
status: CLI updates
draft: false
featured: false
tags: [cli, agents, vscode, team]
sourceRefs:
  - sources/news/aspire-17/official-whats-new.md#L1-L75@sha256:1b55d8e18814f9f16bef991fb1b7caa5b244a1b8c6642443a761e7846eeac742
  - sources/news/aspire-17/github-release.md#L1-L34@sha256:85a2526d541b443089f488746a7cec27f40e69d397d5fc874e84b311089697d0
links:
  - label: CLI updates
    url: https://aspire.dev/whats-new/aspire-17/#-cli-updates
  - label: VS Code tools
    url: https://aspire.dev/whats-new/aspire-17/#-visual-studio-code-extension
reveals:
  - "Shell completion supports Bash, Fish, PowerShell, and Zsh."
  - "Environment-specific secrets can be entered through a masked prompt or environment variable."
  - "Teams can configure template, integration, and skill sources explicitly."
  - "The preview tray keeps running AppHosts within reach."
speakerNotes:
  talkingPoints:
    - "Only register templates, integrations, and skills from sources the team trusts."
    - "VS Code can attach debuggers to already-running .NET and Go resources."
  technicalDetails:
    - "Agent setup asks which client and scope to configure instead of copying skill folders."
  transition: "Now expand the AppHost story across Go and deployed infrastructure."
image:
  src: /images/aspire17-metrics.webp
  alt: "Aspire 17 Metrics page with resource-filtered instrument cards and live sparklines"
  credit: "Microsoft Aspire"
  sourceUrl: https://aspire.dev/whats-new/aspire-17/#metrics
  licenseUrl: https://github.com/microsoft/aspire.dev/blob/main/LICENSE
---

Aspire 17 sharpens both interactive and agent-assisted workflows. The CLI gains completion, secret isolation, reusable team configuration, and a local tray companion; the VS Code extension gains debugger attachment and summarized language-model tools.
