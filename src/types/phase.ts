export interface PhaseState {
  currentPhase: number;
  readPages: string[];
}

export const STORAGE_KEYS = {
  currentPhase: 'currentPhase',
  readPages: 'readPages',
} as const;
