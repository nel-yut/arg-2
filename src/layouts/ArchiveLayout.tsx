import type { PropsWithChildren } from 'react';
import { SearchBox } from '../components/SearchBox';

export function ArchiveLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <div className="layout layout-archive">
      <header className="site-header">
        <h1>資料室</h1>
      </header>
      <div className="search-fixed">
        <SearchBox />
      </div>
      <main>{children}</main>
    </div>
  );
}
