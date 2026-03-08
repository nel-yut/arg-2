export type SiteType = 'blog' | 'main' | 'archive' | 'ending';

export interface ArgPage {
  id: string;
  slug: string;
  path: string;
  title: string;
  body: string;
  pageType: string;
  siteType: SiteType;
  overview?: string;
  phaseLabel: string;
  phaseOrder: number;
  phaseIndex: number;
  pageIdRaw?: string;
  searchWords: string[];
  imagePrompts: string[];
  isSearchVisible: boolean;
  isPhaseBadgeVisible: boolean;
}
