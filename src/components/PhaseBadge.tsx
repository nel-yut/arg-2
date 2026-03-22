interface PhaseBadgeProps {
  phaseLabel: string;
  phaseIndex: number;
}

export function PhaseBadge({ phaseLabel, phaseIndex }: PhaseBadgeProps): JSX.Element {
  const label = phaseLabel === 'Phase-End' ? phaseLabel : `${phaseLabel} (${phaseIndex})`;
  return <aside className="phase-badge">{label}</aside>;
}
