export interface TextSegment {
  text: string;
  isRedacted: boolean;
  revealPhase: number;
}

// [R:N:テキスト] 形式のマーカー。N以上のフェーズで表示される。
const REDACT_RE = /\[R:(\d+):([^\]]*)\]/g;

export function parseRedactSegments(text: string): TextSegment[] {
  const segments: TextSegment[] = [];
  let lastIndex = 0;
  REDACT_RE.lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = REDACT_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ text: text.slice(lastIndex, match.index), isRedacted: false, revealPhase: 0 });
    }
    segments.push({ text: match[2], isRedacted: true, revealPhase: parseInt(match[1], 10) });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    segments.push({ text: text.slice(lastIndex), isRedacted: false, revealPhase: 0 });
  }

  return segments;
}

export function hasRedactions(text: string): boolean {
  REDACT_RE.lastIndex = 0;
  return REDACT_RE.test(text);
}
