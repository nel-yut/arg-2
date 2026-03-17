import type { PhaseState } from '../types/phase';
import { STORAGE_KEYS } from '../types/phase';

const DEFAULT_STATE: PhaseState = {
  currentPhase: 0,
  readPages: [],
};

export function readPhaseState(): PhaseState {
  try {
    const currentPhaseRaw = localStorage.getItem(STORAGE_KEYS.currentPhase);
    const readPagesRaw = localStorage.getItem(STORAGE_KEYS.readPages);

    const currentPhase = Number(currentPhaseRaw ?? 0);
    const readPages = readPagesRaw ? JSON.parse(readPagesRaw) : [];

    if (!Number.isFinite(currentPhase) || !Array.isArray(readPages)) {
      return DEFAULT_STATE;
    }

    return {
      currentPhase: Math.max(0, Math.floor(currentPhase)),
      readPages: readPages.filter((x): x is string => typeof x === 'string'),
    };
  } catch {
    return DEFAULT_STATE;
  }
}

export function writeCurrentPhase(phase: number): void {
  localStorage.setItem(STORAGE_KEYS.currentPhase, String(Math.max(0, Math.floor(phase))));
}

export function writeReadPages(readPages: string[]): void {
  localStorage.setItem(STORAGE_KEYS.readPages, JSON.stringify(Array.from(new Set(readPages))));
}

export function readBlogDeadFlag(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEYS.blogDead) === 'true';
  } catch {
    return false;
  }
}

export function writeBlogDeadFlag(): void {
  try {
    localStorage.setItem(STORAGE_KEYS.blogDead, 'true');
  } catch {
    // noop
  }
}

const BLOG_COMMENTS_KEY = 'blogComments';

export function readBlogComments(): string[] {
  try {
    const raw = localStorage.getItem(BLOG_COMMENTS_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

export function writeBlogComment(comment: string): void {
  try {
    const comments = readBlogComments();
    localStorage.setItem(BLOG_COMMENTS_KEY, JSON.stringify([...comments, comment]));
  } catch {
    // noop
  }
}
