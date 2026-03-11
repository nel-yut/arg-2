import { pages } from '../../data/pages';
import type { ArgPage } from '../../types/page';
import { isPageAccessibleInCurrentPhase } from '../phase/phaseGate';

function byPhaseOrderAndIndexDesc(a: ArgPage, b: ArgPage): number {
  if (a.phaseOrder !== b.phaseOrder) {
    return b.phaseOrder - a.phaseOrder;
  }

  if (a.phaseIndex !== b.phaseIndex) {
    return b.phaseIndex - a.phaseIndex;
  }

  return b.title.localeCompare(a.title, 'ja');
}

const pagesByPath = new Map<string, ArgPage[]>();

for (const page of pages) {
  const variants = pagesByPath.get(page.path) ?? [];
  variants.push(page);
  variants.sort(byPhaseOrderAndIndexDesc);
  pagesByPath.set(page.path, variants);
}

export function resolvePageByPath(pathname: string, currentPhase: number): ArgPage | null {
  const variants = pagesByPath.get(pathname) ?? [];
  return variants.find((page) => isPageAccessibleInCurrentPhase(page, currentPhase)) ?? null;
}

export function getResolvedPagesForPhase(currentPhase: number): ArgPage[] {
  return Array.from(pagesByPath.values())
    .map((variants) => variants.find((page) => isPageAccessibleInCurrentPhase(page, currentPhase)) ?? null)
    .filter((page): page is ArgPage => page !== null);
}

export function findStartPagePath(): string {
  const phaseZeroEntry = pages.find((page) => page.phaseLabel === 'Phase0' && page.phaseIndex === 1);
  return phaseZeroEntry?.path ?? '/404';
}

export { pages };
