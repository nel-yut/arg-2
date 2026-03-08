import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { ArgPage } from '../types/page';
import { MainSiteLayout } from '../layouts/MainSiteLayout';
import { ArchiveLayout } from '../layouts/ArchiveLayout';
import { BlogLayout } from '../layouts/BlogLayout';
import { PhaseBadge } from '../components/PhaseBadge';
import { markPageRead } from '../features/phase/phaseStore';
import { pages } from '../features/pages/pageResolver';

interface ArgContentPageProps {
  page: ArgPage;
}

const aboutSectionHeadings = new Set(['団体理念', '設立目的', '活動内容', '教育方針']);

function renderParagraphWithBreaks(text: string, key: string): JSX.Element {
  const lines = text.split(/\r?\n/);
  return (
    <p key={key}>
      {lines.map((line, index) => (
        <span key={`${key}-line-${index}`}>
          {index > 0 ? <br /> : null}
          {line}
        </span>
      ))}
    </p>
  );
}

function renderDefaultBody(body: string): JSX.Element[] {
  return body
    .split(/\r?\n\r?\n/)
    .map((block) => block.trim())
    .filter((block) => block.length > 0)
    .map((block, index) => renderParagraphWithBreaks(block, `body-${index}`));
}

function renderAboutBody(body: string): JSX.Element[] {
  return body
    .split(/\r?\n\r?\n/)
    .map((block) => block.trim())
    .filter((block) => block.length > 0)
    .map((block, index) => {
      if (aboutSectionHeadings.has(block)) {
        return (
          <h3 key={`about-heading-${index}`} className="body-subheading">
            {block}
          </h3>
        );
      }
      return renderParagraphWithBreaks(block, `about-body-${index}`);
    });
}

function renderFaqBody(body: string): JSX.Element[] {
  return body
    .split(/\r?\n\r?\n/)
    .map((block) => block.trim())
    .filter((block) => block.length > 0)
    .map((block, index) => {
      const lines = block.split(/\r?\n/).map((line) => line.trim());
      const questionLine = lines.find((line) => line.startsWith('Q.'));
      const answerLine = lines.find((line) => line.startsWith('A.'));
      if (!questionLine || !answerLine) {
        return renderParagraphWithBreaks(block, `faq-fallback-${index}`);
      }

      return (
        <article key={`faq-${index}`} className="faq-item">
          <p className="faq-question">
            <strong>Q.</strong> {questionLine.replace(/^Q\.\s*/, '')}
          </p>
          <p className="faq-answer">
            <strong>A.</strong> {answerLine.replace(/^A\.\s*/, '')}
          </p>
        </article>
      );
    });
}

function renderBodyByPage(page: ArgPage): JSX.Element[] {
  if (page.title === '福音継承教育会とは') {
    return renderAboutBody(page.body);
  }
  if (page.title === 'よくある質問') {
    return renderFaqBody(page.body);
  }
  return renderDefaultBody(page.body);
}

export function ArgContentPage({ page }: ArgContentPageProps): JSX.Element {
  useEffect(() => {
    markPageRead(page);
  }, [page]);

  const phaseOneEntryPath = pages.find((p) => p.phaseOrder === 1 && p.phaseIndex === 1)?.path;
  const showPhaseOneEntryLink = page.phaseOrder === 0 && page.phaseIndex === 1 && Boolean(phaseOneEntryPath);

  const isPhase4Page31 = page.phaseOrder === 4 && page.phaseIndex === 31;
  const showSearch = page.isSearchVisible && page.siteType !== 'blog' && !isPhase4Page31;

  const content = (
    <article className={`arg-page-content page-${page.siteType}`}>
      <h2>{page.title}</h2>
      <section className="body-section">{renderBodyByPage(page)}</section>
      {showPhaseOneEntryLink ? (
        <p className="body-note-link">
          <Link to={phaseOneEntryPath!}>トップページへ</Link>
        </p>
      ) : null}
      {page.imagePrompts.length > 0 ? (
        <section className="image-prompts">
          {page.imagePrompts.map((prompt, index) => (
            <figure key={`${page.id}-img-${index}`} className="image-prompt-block">
              <figcaption>画像プロンプト {index + 1}</figcaption>
              <p>{prompt}</p>
            </figure>
          ))}
        </section>
      ) : null}
      <PhaseBadge phaseLabel={page.phaseLabel} phaseIndex={page.phaseIndex} />
    </article>
  );

  if (page.siteType === 'blog') {
    return <BlogLayout>{content}</BlogLayout>;
  }

  if (page.siteType === 'archive') {
    return <ArchiveLayout showSearch={showSearch}>{content}</ArchiveLayout>;
  }

  return <MainSiteLayout showSearch={showSearch}>{content}</MainSiteLayout>;
}
