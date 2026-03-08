import pagesJson from '../../data/pages.json';
import type { ArgPage } from '../../types/page';

export const pages: ArgPage[] = pagesJson as ArgPage[];

const pageByPath = new Map(pages.map((p) => [p.path, p]));

export function resolvePageByPath(pathname: string): ArgPage | null {
  return pageByPath.get(pathname) ?? null;
}

export function findStartPagePath(): string {
  const phaseZeroEntry = pages.find((p) => p.phaseLabel === 'Phase0' && p.phaseIndex === 1);
  return phaseZeroEntry?.path ?? '/404';
}
