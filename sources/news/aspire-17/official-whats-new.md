---
id: official-whats-new
topic: aspire-17
title: What's new in Aspire 17.0
publisher: Aspire
url: https://aspire.dev/whats-new/aspire-17/
published: 2026-11-17
retrieved: 2026-11-25T05:28:21Z
review: reviewed
claims:
  - text: Aspire 17.0 adds a redesigned, resource-first dashboard with a full-width resource table, shared resource pane, terminal page, and Mermaid graph export.
    sources:
      - https://aspire.dev/whats-new/aspire-17/#-dashboard-updates
  - text: Go AppHosts are in preview, with templates, debugging, doctor checks, SDK export, and no experimental feature flag.
    sources:
      - https://aspire.dev/whats-new/aspire-17/#-go-apphost-support
  - text: Aspire 17.0 raises the minimum supported .NET version to .NET 10 while workloads may continue to target other supported frameworks.
    sources:
      - https://aspire.dev/whats-new/aspire-17/#-apphost-updates
  - text: Kubernetes and Azure Kubernetes hosting packages graduate to stable, while persistent-volume APIs remain experimental.
    sources:
      - https://aspire.dev/whats-new/aspire-17/#-deployment-updates
  - text: The release replaces deprecated Azure AI OpenAI and Azure AI Inference packages with two preview or updated client integration packages.
    sources:
      - https://aspire.dev/whats-new/aspire-17/#-new-integrations
images:
  - source: https://aspire.dev/_astro/dashboard-home.DpnZBDoN_ZT63Im.webp
    creator: Microsoft Aspire
    credit: Microsoft Aspire
    alt: The Aspire 17 dashboard home page showing AspireShop PostgreSQL, Redis, and project resources
    permission: https://github.com/microsoft/aspire.dev/blob/main/LICENSE
    approved: true
  - source: https://aspire.dev/_astro/dashboard-overview.DKrrZhya_17p8xM.webp
    creator: Microsoft Aspire
    credit: Microsoft Aspire
    alt: Aspire 17 All resources overview showing health, activity, error rate, p95 latency, and busiest resources
    permission: https://github.com/microsoft/aspire.dev/blob/main/LICENSE
    approved: true
  - source: https://aspire.dev/_astro/testshop-dashboard.LcnpUpQn_Z2gke5e.webp
    creator: Microsoft Aspire
    credit: Microsoft Aspire
    alt: TestShop services and infrastructure in the Aspire 17 resource graph
    permission: https://github.com/microsoft/aspire.dev/blob/main/LICENSE
    approved: true
  - source: https://aspire.dev/_astro/testshop-resource.4JqUOnBj_Z2dBtUC.webp
    creator: Microsoft Aspire
    credit: Microsoft Aspire
    alt: TestShop frontend resource details in the Aspire 17 dashboard
    permission: https://github.com/microsoft/aspire.dev/blob/main/LICENSE
    approved: true
  - source: https://aspire.dev/_astro/testshop-traces.2wyY0h1-_Z15tsaI.webp
    creator: Microsoft Aspire
    credit: Microsoft Aspire
    alt: Aspire 17 distributed trace waterfall covering frontend, catalog, basket, PostgreSQL, and Redis
    permission: https://github.com/microsoft/aspire.dev/blob/main/LICENSE
    approved: true
  - source: https://aspire.dev/_astro/dashboard-metrics.DJ_m9krg_ZqFBk8.webp
    creator: Microsoft Aspire
    credit: Microsoft Aspire
    alt: Aspire 17 Metrics page with resource-filtered instrument cards and live sparklines
    permission: https://github.com/microsoft/aspire.dev/blob/main/LICENSE
    approved: true
---

## Summary

The official release page presents Aspire 17.0 as a resource-first release: the dashboard is rebuilt around service resources, Go AppHosts move into preview, Kubernetes deployment reaches stable status, and team and agent workflows become more configurable.

The migration portion is important: Aspire 17.0 requires .NET 10 for the Aspire AppHost baseline, deprecates the Aspire.AppHost.Sdk and older project registration patterns, and changes a set of experimental APIs into stable APIs.

## Gaps and conflicts

The official page links several follow-on documentation pages but does not provide a single migration checklist for every integration. Exact package compatibility must be checked against each project's package references and target frameworks.

Six official screenshots were authorized for reuse and downloaded locally for the Aspire 17 presentation. Attribution points to Microsoft Aspire and the aspire.dev repository MIT license.
