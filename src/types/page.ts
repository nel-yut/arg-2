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

export interface ArgPagePhaseVariant extends Partial<ArgPage> {
  phaseOrder: number;
  phaseIndex: number;
}

export interface ArgPageSource extends ArgPage {
  phaseVariants?: ArgPagePhaseVariant[];
}
