import { isSearchableInCurrentPhase } from '../phase/phaseGate';
import type { ArgPage } from '../../types/page';
import type { SearchResult } from '../../types/search';
import { hasWhitespace } from '../../utils/text';

export function searchPages(pages: ArgPage[], rawQuery: string, currentPhase: number): SearchResult[] {
  const query = rawQuery.trim();
  if (query.length === 0 || hasWhitespace(query)) {
    return [];
  }

  return pages
    .filter((page) => page.searchWords.includes(query))
    .filter((page) => isSearchableInCurrentPhase(page, currentPhase))
    .sort((a, b) => {
      if (a.phaseOrder !== b.phaseOrder) {
        return a.phaseOrder - b.phaseOrder;
      }
      if (a.phaseIndex !== b.phaseIndex) {
        return a.phaseIndex - b.phaseIndex;
      }
      return a.title.localeCompare(b.title, 'ja');
    })
    .map((page) => ({
      path: page.path,
      title: page.title,
      phaseOrder: page.phaseOrder,
      phaseIndex: page.phaseIndex,
    }));
}
