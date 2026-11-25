---
title: A resource-first dashboard
summary: A redesigned home page, shared resource pane, terminal page, Mermaid graph export, richer traces, and pinnable metric cards keep resources in view.
category: Dashboard
published: 2026-11-17
status: Redesigned dashboard
draft: false
featured: true
tags: [dashboard, telemetry, terminals]
sourceRefs:
  - sources/news/aspire-17/official-whats-new.md#L1-L75@sha256:1b55d8e18814f9f16bef991fb1b7caa5b244a1b8c6642443a761e7846eeac742
links:
  - label: Dashboard updates
    url: https://aspire.dev/whats-new/aspire-17/#-dashboard-updates
  - label: Explore dashboard features
    url: https://aspire.dev/dashboard/explore/
reveals:
  - "The dashboard opens to a full-width resource table."
  - "Search, filters, multi-selection, grouping, and shared resource context help investigation."
  - "Interactive terminals move to a dedicated Terminals page."
  - "The resource graph exports to Mermaid or through aspire describe."
speakerNotes:
  talkingPoints:
    - "The resource table, overview, and graph are complementary views of the same application."
    - "Users can switch to the previous dashboard from Settings when that version is available."
  technicalDetails:
    - "Mermaid export is also available from the CLI as aspire describe --format mermaid."
  transition: "Next, move from dashboard ergonomics to CLI and agent workflows."
image:
  src: /images/aspire17-dashboard-overview.webp
  alt: "Aspire 17 All resources overview showing health, activity, error rate, p95 latency, and busiest resources"
  credit: "Microsoft Aspire"
  sourceUrl: https://aspire.dev/whats-new/aspire-17/#all-resources
  licenseUrl: https://github.com/microsoft/aspire.dev/blob/main/LICENSE
---

The dashboard now opens with every resource in one table and keeps a shared resource pane available as developers move across logs, traces, and metrics. Resource details, health summaries, distributed traces, and metric cards support focused investigation.
