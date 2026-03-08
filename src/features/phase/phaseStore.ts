import type { ArgPage } from '../../types/page';
import type { PhaseState } from '../../types/phase';
import { readPhaseState, writeCurrentPhase, writeReadPages } from '../../utils/storage';

export function getPhaseState(): PhaseState {
  return readPhaseState();
}

export function markPageRead(page: ArgPage): PhaseState {
  const state = readPhaseState();
  const nextReadPages = state.readPages.includes(page.path) ? state.readPages : [...state.readPages, page.path];

  let nextCurrentPhase = state.currentPhase;
  if (page.phaseIndex === 1 && page.phaseOrder >= 0 && page.phaseOrder <= 5) {
    nextCurrentPhase = Math.max(state.currentPhase, page.phaseOrder);
  }

  writeReadPages(nextReadPages);
  writeCurrentPhase(nextCurrentPhase);

  return {
    currentPhase: nextCurrentPhase,
    readPages: nextReadPages,
  };
}
