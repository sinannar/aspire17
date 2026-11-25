---
title: Upgrade with a migration plan
summary: Aspire 17 requires .NET 10 support for AppHosts, deprecates older project models, changes integrations, and introduces deployment-breaking defaults.
category: Migration
published: 2026-11-17
status: Upgrade guidance
draft: false
featured: true
tags: [upgrade, migration, net10, breaking changes]
sourceRefs:
  - sources/news/aspire-17/official-whats-new.md#L1-L75@sha256:1b55d8e18814f9f16bef991fb1b7caa5b244a1b8c6642443a761e7846eeac742
  - sources/news/aspire-17/github-release.md#L1-L34@sha256:85a2526d541b443089f488746a7cec27f40e69d397d5fc874e84b311089697d0
links:
  - label: Upgrade to Aspire 17
    url: https://aspire.dev/whats-new/aspire-17/#-upgrade-to-aspire-170
  - label: Breaking changes
    url: https://aspire.dev/whats-new/aspire-17/#breaking-changes
  - label: Migrate project registration
    url: https://aspire.dev/integrations/dotnet/migrate-dotnet-project-resource/
reveals:
  - "The minimum supported .NET version is now .NET 10."
  - "Aspire.AppHost.Sdk and older AddProject patterns are deprecated or obsolete."
  - "Legacy RabbitMQ v6 and MongoDB v2 client integrations are removed."
  - "Azure AI OpenAI and Inference packages are replaced."
  - "Helm 4 and AKS Standard-tier costs need explicit review."
speakerNotes:
  talkingPoints:
    - "Review package references, target frameworks, generated project registration, Kubernetes charts, and container compatibility."
    - "The .NET 10 requirement does not itself require every orchestrated workload to retarget."
  technicalDetails:
    - "Use aspire update --self and aspire update from the AppHost repository root."
  transition: "Return to the resource-first dashboard and run the app after migration."
image:
  src: /images/aspire17-traces.webp
  alt: "Aspire 17 distributed trace waterfall covering the frontend, catalog, basket, PostgreSQL, and Redis"
  credit: "Microsoft Aspire"
  sourceUrl: https://aspire.dev/whats-new/aspire-17/#distributed-traces
  licenseUrl: https://github.com/microsoft/aspire.dev/blob/main/LICENSE
---

Upgrade Aspire 17 deliberately. Start with the published breaking changes, update the CLI and package references, migrate C# AppHosts to the path-based Dotnet project model where appropriate, and validate Kubernetes, AKS, container image, and Azure AI integration changes.
