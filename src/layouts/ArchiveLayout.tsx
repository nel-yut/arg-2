import type { PropsWithChildren } from 'react';
import { SearchBox } from '../components/SearchBox';

interface ArchiveLayoutProps extends PropsWithChildren {
  showSearch?: boolean;
}

export function ArchiveLayout({ children, showSearch = true }: ArchiveLayoutProps): JSX.Element {
  return (
    <div className="layout layout-archive">
      <header className="site-header archive-header">
        <div className="header-top-row">
          <div className="title-group">
            <h1 className="site-title">資料室</h1>
            <p className="site-subcopy">内部記録閲覧用アーカイブ</p>
          </div>
          {showSearch ? (
            <div className="search-fixed search-in-header">
              <SearchBox />
            </div>
          ) : null}
        </div>
      </header>
      <main>
        <section className="archive-content-shell">{children}</section>
      </main>
    </div>
  );
}
