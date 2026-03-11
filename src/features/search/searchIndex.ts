import { getResolvedPagesForPhase } from '../pages/pageResolver';
import type { ArgPage } from '../../types/page';
import { isSearchableInCurrentPhase } from '../phase/phaseGate';

export function getSearchTargetPages(pagesInput: ArgPage[], currentPhase: number): ArgPage[] {
  return pagesInput.filter((page) => isSearchableInCurrentPhase(page, currentPhase));
}

export function getSearchablePages(currentPhase: number): ArgPage[] {
  return getSearchTargetPages(getResolvedPagesForPhase(currentPhase), currentPhase);
}
