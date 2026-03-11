import type { ArgPage, ArgPagePhaseVariant, ArgPageSource } from '../../types/page';

function toPhaseLabel(phaseOrder: number): string {
  if (phaseOrder === 99) {
    return 'Phase-End';
  }

  return `Phase${phaseOrder}`;
}

function toPageIdRaw(phaseLabel: string, phaseIndex: number): string {
  if (phaseLabel === 'Phase-End' && phaseIndex === 1) {
    return 'Phase-End';
  }

  return `${phaseLabel}(${phaseIndex})`;
}

function normalizeVariant(basePage: ArgPage, variant: ArgPagePhaseVariant): ArgPage {
  const merged = { ...basePage, ...variant };
  const phaseLabel = variant.phaseLabel ?? toPhaseLabel(variant.phaseOrder);

  return {
    ...merged,
    phaseLabel,
    pageIdRaw: variant.pageIdRaw ?? toPageIdRaw(phaseLabel, variant.phaseIndex),
    searchWords: variant.searchWords ?? basePage.searchWords,
    imagePrompts: variant.imagePrompts ?? basePage.imagePrompts,
  };
}

export function expandPageSources(pageSources: ArgPageSource[]): ArgPage[] {
  return pageSources.flatMap((pageSource) => {
    const variants = pageSource.phaseVariants ?? [];
    const { phaseVariants: _phaseVariants, ...basePage } = pageSource;

    return [basePage, ...variants.map((variant) => normalizeVariant(basePage, variant))];
  });
}
