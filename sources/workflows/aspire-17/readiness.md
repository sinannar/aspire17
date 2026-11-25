# Aspire 17 readiness

## Scope

Published locally in the existing keynote:

- Aspire 17.0 release overview
- resource-first dashboard
- CLI and agent workflows
- Go AppHosts and stable deployment
- upgrade and migration guidance

Official Aspire 17 screenshots are local raster assets with Microsoft Aspire credit and the aspire.dev repository MIT license.

## Validation

- `npm run validate:research -- sources/news/aspire-17 sources/workflows/aspire-17/research-references.json`: passed
- `npm run validate:sources`: passed
- `npm run validate:agents`: passed
- `npm run check`: passed
- `npm run build`: passed
- `npm test`: 47/47 passed
- `npm run test:production`: 7/7 passed

## Visual and host checks

Automated build and interaction tests passed. Browser screenshots and live deployment behavior remain to be reviewed by the PR reviewer.
