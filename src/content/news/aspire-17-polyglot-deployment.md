---
title: Go AppHosts and stable deployment
summary: Go AppHosts enter preview while Kubernetes and Azure Kubernetes hosting packages graduate to stable releases.
category: Platform
published: 2026-11-17
status: Polyglot preview and stable deployment
draft: false
featured: true
tags: [go, kubernetes, aks, helm]
sourceRefs:
  - sources/news/aspire-17/official-whats-new.md#L1-L75@sha256:1b55d8e18814f9f16bef991fb1b7caa5b244a1b8c6642443a761e7846eeac742
  - sources/news/aspire-17/github-release.md#L1-L34@sha256:85a2526d541b443089f488746a7cec27f40e69d397d5fc874e84b311089697d0
links:
  - label: Go AppHosts
    url: https://aspire.dev/whats-new/aspire-17/#-go-apphost-support
  - label: Kubernetes deployment
    url: https://aspire.dev/whats-new/aspire-17/#-deployment-updates
reveals:
  - "Go AppHosts use templates, debugging, doctor checks, and SDK export in preview."
  - "Kubernetes and AKS hosting packages are stable."
  - "Helm 4.0.0 or later is required."
  - "Persistent-volume APIs remain experimental."
speakerNotes:
  talkingPoints:
    - "Preview Go support does not mean every polyglot workflow is production-ready."
    - "Stable Kubernetes packages still include experimental APIs."
  technicalDetails:
    - "AKS now defaults to the paid Standard control-plane tier and separate identities."
  transition: "Finish with the upgrade checks that teams should run before adoption."
image:
  src: /images/aspire17-resource-graph.webp
  alt: "TestShop services and infrastructure shown in the Aspire 17 resource graph"
  credit: "Microsoft Aspire"
  sourceUrl: https://aspire.dev/whats-new/aspire-17/#resource-graph
  licenseUrl: https://github.com/microsoft/aspire.dev/blob/main/LICENSE
---

Aspire 17 continues to widen its polyglot surface. Go AppHosts gain preview templates and tooling, and Kubernetes and Azure Kubernetes hosting packages become stable with Helm 4 and AKS-specific controls.
