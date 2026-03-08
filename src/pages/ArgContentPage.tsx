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

function renderBodyLines(body: string): JSX.Element[] {
  return body.split(/\r?\n/).map((line, index) => <p key={`${index}-${line.slice(0, 8)}`}>{line}</p>);
}

export function ArgContentPage({ page }: ArgContentPageProps): JSX.Element {
  useEffect(() => {
    markPageRead(page);
  }, [page]);

  const phaseOneEntry = pages.find((p) => p.phaseOrder === 1 && p.phaseIndex === 1);
  const showPhaseOneEntryLink = page.phaseOrder === 0 && page.phaseIndex === 1 && Boolean(phaseOneEntry);

  const content = (
    <article className="arg-page-content">
      <h2>{page.title}</h2>
      <section className="body-section">{renderBodyLines(page.body)}</section>
      {showPhaseOneEntryLink ? (
        <p>
          <Link to={phaseOneEntry!.path}>トップページへ</Link>
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
    if (page.isSearchVisible) {
      return <ArchiveLayout>{content}</ArchiveLayout>;
    }

    return (
      <div className="layout layout-archive">
        <header className="site-header">
          <h1>資料室</h1>
        </header>
        <main>
          {content}
          <div className="search-fixed hidden" aria-hidden="true" />
        </main>
      </div>
    );
  }

  if (page.isSearchVisible) {
    return <MainSiteLayout>{content}</MainSiteLayout>;
  }

  return (
    <div className="layout layout-main">
      <header className="site-header">
        <h1>福音継承教育会</h1>
      </header>
      <main>
        {content}
        <div className="search-fixed hidden" aria-hidden="true" />
      </main>
    </div>
  );
}
