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
          <section>
            <h2>プロフィール</h2>
            <p>篠宮依乃</p>
          </section>
          <section>
            <h2>カテゴリ</h2>
            <ul>
              <li>日記</li>
              <li>友人のこと</li>
              <li>記録</li>
            </ul>
          </section>
        </aside>
      </main>
    </div>
  );
}
