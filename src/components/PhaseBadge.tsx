interface PhaseBadgeProps {
  phaseLabel: string;
  phaseIndex: number;
}

export function PhaseBadge({ phaseLabel, phaseIndex }: PhaseBadgeProps): JSX.Element {
  return <div className="phase-badge">{`${phaseLabel} (${phaseIndex})`}</div>;
}
