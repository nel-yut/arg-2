import type { ArgPage } from '../../types/page';

export function isSearchableInCurrentPhase(page: ArgPage, currentPhase: number): boolean {
  if (page.phaseOrder === 99) {
    return false;
  }

  if (page.phaseOrder <= currentPhase) {
    return true;
  }

  return page.phaseOrder === currentPhase + 1 && page.phaseIndex === 1;
}
