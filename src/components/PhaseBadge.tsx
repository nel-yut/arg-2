interface PhaseBadgeProps {
  phaseLabel: string;
  phaseIndex: number;
}

export function PhaseBadge({ phaseLabel, phaseIndex }: PhaseBadgeProps): JSX.Element {
  return <aside className="phase-badge">{`${phaseLabel} (${phaseIndex})`}</aside>;
}
