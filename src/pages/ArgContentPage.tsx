import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { ArgPage } from '../types/page';
import { MainSiteLayout } from '../layouts/MainSiteLayout';
import { ArchiveLayout } from '../layouts/ArchiveLayout';
import { BlogLayout } from '../layouts/BlogLayout';
import { PhaseBadge } from '../components/PhaseBadge';
import { markPageRead, getPhaseState } from '../features/phase/phaseStore';
import { pages, getResolvedPagesForPhase } from '../features/pages/pageResolver';
import { readBlogComments, writeBlogComment, writeBlogDeadFlag, writeDefenseVisitedFlag } from '../utils/storage';
import { parseRedactSegments } from '../utils/redact';

interface ArgContentPageProps {
  page: ArgPage;
}

const aboutSectionHeadings = new Set(['団体理念', '設立目的', '活動内容', '教育方針']);

const BLOG_COMMENT_TRIGGER = '/2019-04-05-77578';
const BLOG_DEAD_REDIRECT = '/record-defense-67748';

const BLOG_POST_META: Record<string, { date: string; category: string }> = {
  'inquiry': { date: '2021年11月10日', category: '友人のこと' },
};

const COMMENTS_PER_PAGE = 3;

function BlogCommentSection({ currentPhase }: { currentPhase: number }): JSX.Element {
  const [draft, setDraft] = useState('');
  const [comments, setComments] = useState<string[]>(() => readBlogComments());
  const [commentPage, setCommentPage] = useState(1);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const trimmed = draft.trim();
    if (!trimmed) return;

    if (currentPhase >= 4 && trimmed.includes(BLOG_COMMENT_TRIGGER)) {
      writeBlogDeadFlag();
      return;
    }

    writeBlogComment(trimmed);
    const updated = readBlogComments();
    setComments(updated);
    setCommentPage(1);
    setDraft('');
  }

  const totalPages = Math.max(1, Math.ceil(comments.length / COMMENTS_PER_PAGE));
  const pagedComments = comments.slice((commentPage - 1) * COMMENTS_PER_PAGE, commentPage * COMMENTS_PER_PAGE);

  return (
    <section className="blog-comments">
      <h3 className="blog-comments-heading">コメント（{comments.length}件）</h3>
      {comments.length > 0 ? (
        <>
          <ul className="blog-comment-list">
            {pagedComments.map((comment, i) => (
              <li key={i} className="blog-comment-item">
                <p className="blog-comment-body">{comment}</p>
              </li>
            ))}
          </ul>
          {totalPages > 1 && (
            <div className="blog-comment-pagination">
              <button disabled={commentPage <= 1} onClick={() => setCommentPage(commentPage - 1)}>‹</button>
              <span>{commentPage} / {totalPages}</span>
              <button disabled={commentPage >= totalPages} onClick={() => setCommentPage(commentPage + 1)}>›</button>
            </div>
          )}
        </>
      ) : (
        <p className="blog-comments-empty">まだコメントはありません。</p>
      )}
      <form className="blog-comment-form" onSubmit={handleSubmit}>
        <textarea
          className="blog-comment-textarea"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="コメントを入力..."
          rows={4}
        />
        <button className="blog-comment-submit" type="submit" disabled={!draft.trim()}>
          投稿する
        </button>
      </form>
    </section>
  );
}

const topNews = [
  { no: 1, date: '2022.03.10', text: '春の学び会（第二回）のご案内', path: '/news-1-82310' },
  { no: 2, date: '2022.02.20', text: '施設メンテナンスに伴う一時休館のお知らせ（2月28日）', path: '/news-2-47291' },
  { no: 3, date: '2022.01.15', text: '新年合同集会・懇親の会 開催報告', path: '/news-3-63047' },
  { no: 4, date: '2021.12.05', text: '冬季休会期間のご案内（12月26日〜1月5日）', path: '/news-4-95182' },
  { no: 5, date: '2021.11.18', text: '子ども向け「ことばと学び」ワークショップ 参加者募集', path: '/news-5-31876' },
];

const topCards = [
  {
    heading: '福音継承教育会とは',
    body: '私たちの理念や活動についてご紹介します。地域とともに歩む共同体の姿をぜひご覧ください。',
    overviewKey: '福音継承教育会とは',
    titleFallback: ['福音継承教育会とは'],
  },
  {
    heading: '定例行事のご案内',
    body: '月ごとの集会・学び会・季節行事の詳細はこちらをご覧ください。どなたでも参加いただけます。',
    overviewKey: '定例行事のご案内',
    titleFallback: ['定例行事のご案内'],
  },
  {
    heading: '入会のご案内',
    body: '会への参加をお考えの方へ。手続きや費用についても丁寧にご説明しています。',
    overviewKey: '入会の案内',
    titleFallback: ['入会の案内', '入会のご案内'],
  },
];

function TopPageContent({ page }: { page: ArgPage }): JSX.Element {
  const { currentPhase } = getPhaseState();
  const visiblePages = getResolvedPagesForPhase(currentPhase);

  function findPath(overviewKey: string, titleFallback: string[]): string {
    const byOverview = visiblePages.find(
      (p) => p.siteType === 'main' && (p.overview ?? '').includes(`メニュー「${overviewKey}」`),
    );
    if (byOverview) return byOverview.path;
    return visiblePages.find((p) => p.siteType === 'main' && titleFallback.includes(p.title))?.path ?? '/404';
  }

  return (
    <article className="arg-page-content page-main">
      <section className="top-hero">
        <img src="/images/top-hero.png" alt="" className="top-hero-img" />
        <p className="top-hero-catch">共に学び、共に歩む</p>
        <p className="top-hero-sub">
          福音継承教育会は、地域に根ざした教育共同体として、子どもたちの健やかな成長と
          世代を超えた学びの継承を大切にしています。どうかお気軽にお声がけください。
        </p>
      </section>

      <section className="top-section">
        <h3 className="top-section-heading">お知らせ</h3>
        <ul className="top-news-list">
          {topNews.map((item) => (
            <li key={item.date} className="top-news-item">
              <span className="top-news-date">{item.date}</span>
              <Link className="top-news-link" to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="top-section">
        <div className="top-cards">
          {topCards.map((card) => (
            <div key={card.heading} className="top-card">
              <h3 className="top-card-heading">{card.heading}</h3>
              <p className="top-card-body">{card.body}</p>
              <Link className="top-card-link" to={findPath(card.overviewKey, card.titleFallback)}>
                詳しく見る →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="top-section">
        <h3 className="top-section-heading">会長ご挨拶</h3>
        <div className="top-message">
          <img src="/images/top-president.png" alt="" className="top-president-img" />
          <p className="top-message-text">
            日々の学びの積み重ねが、人を育て、地域をつなぎます。当会では、一人ひとりが安心して集い、ともに歩める場を、これからも丁寧に整えてまいります。ご縁がありましたら、どうかお気軽にお声がけください。
          </p>
          <p className="top-message-author">会長　高津 誠一</p>
        </div>
      </section>

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
}

function renderTextWithRedactions(text: string, keyPrefix: string, currentPhase: number): React.ReactNode {
  const segments = parseRedactSegments(text);
  if (segments.length === 1 && !segments[0].isRedacted) {
    return text;
  }
  return segments.map((seg, i) => {
    if (!seg.isRedacted || currentPhase >= seg.revealPhase) {
      return <span key={`${keyPrefix}-seg-${i}`}>{seg.text}</span>;
    }
    return (
      <span key={`${keyPrefix}-seg-${i}`} className="text-redacted" title="[黒塗り]">
        {'■'.repeat(seg.text.length)}
      </span>
    );
  });
}

function renderParagraphWithBreaks(text: string, key: string, currentPhase: number): JSX.Element {
  const lines = text.split(/\r?\n/);
  return (
    <p key={key}>
      {lines.map((line, index) => (
        <span key={`${key}-line-${index}`}>
          {index > 0 ? <br /> : null}
          {renderTextWithRedactions(line, `${key}-line-${index}`, currentPhase)}
        </span>
      ))}
    </p>
  );
}

function renderDefaultBody(body: string, currentPhase: number): JSX.Element[] {
  return body
    .split(/\r?\n\r?\n/)
    .map((block) => block.trim())
    .filter((block) => block.length > 0)
    .map((block, index) => {
      if (block.startsWith('## ')) {
        return (
          <h3 key={`body-h-${index}`} className="body-subheading">
            {block.slice(3)}
          </h3>
        );
      }
      return renderParagraphWithBreaks(block, `body-${index}`, currentPhase);
    });
}

function renderAboutBody(body: string, currentPhase: number): JSX.Element[] {
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
      return renderParagraphWithBreaks(block, `about-body-${index}`, currentPhase);
    });
}

function renderFaqBody(body: string, currentPhase: number): JSX.Element[] {
  return body
    .split(/\r?\n\r?\n/)
    .map((block) => block.trim())
    .filter((block) => block.length > 0)
    .map((block, index) => {
      const lines = block.split(/\r?\n/).map((line) => line.trim());
      const questionLine = lines.find((line) => line.startsWith('Q.'));
      const answerLine = lines.find((line) => line.startsWith('A.'));
      if (!questionLine || !answerLine) {
        return renderParagraphWithBreaks(block, `faq-fallback-${index}`, currentPhase);
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

function renderBodyByPage(page: ArgPage, currentPhase: number): JSX.Element[] {
  if (page.title === '福音継承教育会とは') {
    return renderAboutBody(page.body, currentPhase);
  }
  if (page.title === 'よくある質問') {
    return renderFaqBody(page.body, currentPhase);
  }
  return renderDefaultBody(page.body, currentPhase);
}

export function ArgContentPage({ page }: ArgContentPageProps): JSX.Element {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    markPageRead(page);
    if (page.path === '/record-defense-67748') {
      writeDefenseVisitedFlag();
    }
    if (page.siteType === 'blog' && page.slug === '404') {
      document.title = '404 Not Found';
    } else if (page.siteType === 'blog') {
      document.title = '依乃の備忘録';
    } else if (page.siteType === 'main') {
      document.title = '福音継承教育会';
    } else if (page.siteType === 'archive') {
      document.title = '資料室';
    } else {
      document.title = 'ARG';
    }
    return () => { document.title = 'ARG'; };
  }, [page]);

  const phaseOneEntryPath = pages.find((p) => p.phaseOrder === 1 && p.phaseIndex === 1)?.path;
  const showPhaseOneEntryLink = page.phaseOrder === 0 && page.phaseIndex === 1 && Boolean(phaseOneEntryPath);

  const isPhase4Page31 = page.phaseOrder === 4 && page.phaseIndex === 31;
  const showSearch = page.isSearchVisible && page.siteType !== 'blog' && !isPhase4Page31;
  const { currentPhase } = getPhaseState();

  if (page.slug === 'top') {
    return (
      <MainSiteLayout showSearch={showSearch}>
        <TopPageContent page={page} />
      </MainSiteLayout>
    );
  }

  const content = (
    <article className={`arg-page-content page-${page.siteType}`}>
      <h2>{page.title}</h2>
      {(page.images ?? []).length > 0 ? (
        <div className="record-photos">
          {(page.images ?? []).map((src, i) => (
            <img key={i} src={src} alt="" className="record-photo record-photo-zoomable" onClick={() => setLightboxSrc(src)} />
          ))}
        </div>
      ) : null}
      <section className="body-section">{renderBodyByPage(page, currentPhase)}</section>
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
      {(page.pdfs ?? []).length > 0 ? (
        <section className="pdf-downloads">
          {(page.pdfs ?? []).map((src, i) => {
            const filename = src.split('/').pop() ?? src;
            return (
              <a key={i} href={src} download className="pdf-download-link">
                📄 {filename}
              </a>
            );
          })}
        </section>
      ) : null}
      <PhaseBadge phaseLabel={page.phaseLabel} phaseIndex={page.phaseIndex} />
    </article>
  );

  if (page.siteType === 'blog') {
    const isBlog404 = page.slug === '404';
    const meta = BLOG_POST_META[page.slug];
    const blogArticle = (
      <article className="arg-page-content page-blog">
        {isBlog404 ? (
          <section className="blog-404-content">
            <p className="blog-404-code">404 Not Found</p>
            <p className="blog-404-message">このページは見つかりませんでした。</p>
            <PhaseBadge phaseLabel={page.phaseLabel} phaseIndex={page.phaseIndex} />
          </section>
        ) : (
          <>
            <h2>{page.title}</h2>
            {meta ? (
              <div className="blog-post-meta">
                <time className="blog-post-date">{meta.date}</time>
                <span className="blog-post-category">{meta.category}</span>
              </div>
            ) : null}
            <details className="blog-game-info">
              <summary>このゲームについて</summary>
              <div className="blog-game-info-body">
                <p>このゲームの目的はPhase-Endに到達することです。ページを読み進め、本文中のキーワードで検索しながら次の手がかりを辿ってください。すべての記録を読み解いた先に、Phase-Endが待っています。</p>
              </div>
            </details>
            <section className="body-section">{renderBodyByPage(page, currentPhase)}</section>
            {(page.images ?? []).length > 0 ? (
              <section className="blog-images">
                {(page.images ?? []).map((src, i) => (
                  <figure key={i} className="blog-image-figure">
                    <img src={src} alt="" className="blog-image" />
                  </figure>
                ))}
              </section>
            ) : null}
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
          </>
        )}
      </article>
    );
    return (
      <BlogLayout>
        {blogArticle}
        {!isBlog404 ? <BlogCommentSection currentPhase={currentPhase} /> : null}
      </BlogLayout>
    );
  }

  const lightbox = lightboxSrc ? (
    <div className="lightbox-backdrop" onClick={() => setLightboxSrc(null)}>
      <img src={lightboxSrc} alt="" className="lightbox-img" />
    </div>
  ) : null;

  if (page.siteType === 'archive') {
    return <><ArchiveLayout showSearch={showSearch}>{content}</ArchiveLayout>{lightbox}</>;
  }

  return <><MainSiteLayout showSearch={showSearch}>{content}</MainSiteLayout>{lightbox}</>;
}
