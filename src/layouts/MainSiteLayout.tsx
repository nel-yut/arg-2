import type { PropsWithChildren } from 'react';
import { SearchBox } from '../components/SearchBox';

export function MainSiteLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <div className="layout layout-main">
      <header className="site-header">
        <h1>福音継承教育会</h1>
      </header>
      <div className="search-fixed">
        <SearchBox />
      </div>
      <main>{children}</main>
    </div>
  );
}
