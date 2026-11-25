import type { PresentationConfig } from './src/lib/deck';

interface SiteConfig {
  title: string;
  description: string;
  author: string;
  tagline: string;
  primaryLink: { label: string; href: string };
  sections: readonly { id: string; label: string; href: string }[];
  presentation?: PresentationConfig;
}

export const siteConfig: SiteConfig = {
  title: 'Aspire 17.0',
  description: 'What changed in Aspire 17, the migration work to expect, and the developer workflows moving forward.',
  author: 'Aspire release briefing',
  tagline: 'A resource-first release for dashboard, CLI, polyglot, and deployment workflows.',
  primaryLink: {
    label: 'Read the official release',
    href: 'https://aspire.dev/whats-new/aspire-17/',
  },
  sections: [
    { id: 'docs', label: 'Docs', href: '/docs/' },
    { id: 'news', label: 'News', href: '/news/' },
  ],
  presentation: {
    sections: [
      { name: 'Release overview', items: ['news/aspire-17-release'] },
      { name: 'What changed', items: ['news/aspire-17-dashboard', 'news/aspire-17-cli'] },
      { name: 'Platforms', items: ['news/aspire-17-polyglot-deployment'] },
      { name: 'Upgrade', items: ['news/aspire-17-migration'] },
    ],
  },
} as const;
