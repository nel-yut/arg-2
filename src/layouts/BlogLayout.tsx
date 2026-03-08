import type { PropsWithChildren } from 'react';

export function BlogLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <div className="layout layout-blog">
      <header className="site-header blog-header">
        <p className="blog-kicker">個人メモ</p>
        <h1>依乃の備忘録</h1>
        <p className="blog-description">日々の記録と気になったことのメモ</p>
      </header>
      <main className="blog-main">
        <section className="blog-post-card">{children}</section>
      </main>
    </div>
  );
}
