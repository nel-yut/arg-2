import type { PropsWithChildren } from 'react';

export function BlogLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <div className="layout layout-blog">
      <header className="site-header blog-header">
        <p className="blog-kicker">個人ブログ</p>
        <h1>依乃の備忘録</h1>
        <p className="blog-description">考えごとと日々の記録</p>
      </header>

      <main className="blog-main">
        <section className="blog-content">{children}</section>

        <aside className="blog-sidebar" aria-label="サイドバー">
          <section className="blog-sidebar-section">
            <h2>プロフィール</h2>
            <p className="blog-sidebar-name">篠宮依乃</p>
            <p className="blog-sidebar-bio">日々の考えごとや記録をつけています。</p>
          </section>
          <section className="blog-sidebar-section">
            <h2>最近の投稿</h2>
            <ul className="blog-sidebar-recent">
              <li>
                <span className="blog-sidebar-recent-date">2024.11.10</span>
                澄のことを探している
              </li>
            </ul>
          </section>
          <section className="blog-sidebar-section">
            <h2>カテゴリ</h2>
            <ul>
              <li>日記</li>
              <li>友人のこと</li>
              <li>記録</li>
            </ul>
          </section>
        </aside>
      </main>
      <footer className="site-footer">
        <p>本サイトはフィクションです。実際の個人・団体とは一切関係ありません。©Nel_HIME</p>
      </footer>
    </div>
  );
}
