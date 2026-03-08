import { pages } from '../pages/pageResolver';
import type { ArgPage } from '../../types/page';

export function getSearchTargetPages(pagesInput: ArgPage[], currentPhase: number): ArgPage[] {
  return pagesInput.filter((page) => {
    if (page.phaseOrder === 99) {
      return false;
    }

    if (page.phaseOrder <= currentPhase) {
      return true;
    }

    return page.phaseOrder === currentPhase + 1 && page.phaseIndex === 1;
  });
}

export function getSearchablePages(currentPhase: number): ArgPage[] {
  return getSearchTargetPages(pages, currentPhase);
}
