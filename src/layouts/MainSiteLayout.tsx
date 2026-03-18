import { useEffect, useState, type FocusEvent, type PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SearchBox } from '../components/SearchBox';
import { getPhaseState } from '../features/phase/phaseStore';
import { getResolvedPagesForPhase } from '../features/pages/pageResolver';
import type { ArgPage } from '../types/page';

interface MainSiteLayoutProps extends PropsWithChildren {
  showSearch?: boolean;
}

interface MenuDef {
  label: string;
  overviewKey: string;
  titleFallback: string[];
}

const menuDefs: MenuDef[] = [
  { label: 'TOPページ', overviewKey: 'TOPページ', titleFallback: ['TOP'] },
  { label: '福音継承教育会とは', overviewKey: '福音継承教育会とは', titleFallback: ['福音継承教育会とは'] },
  { label: '定例行事のご案内', overviewKey: '定例行事のご案内', titleFallback: ['定例行事のご案内'] },
  { label: '施設について', overviewKey: '施設について', titleFallback: ['施設について'] },
  { label: '入会のご案内', overviewKey: '入会の案内', titleFallback: ['入会の案内', '入会のご案内'] },
  { label: 'よくある質問', overviewKey: 'よくある質問', titleFallback: ['よくある質問'] },
];

function byPhaseOrderAndIndex(a: ArgPage, b: ArgPage): number {
  if (a.phaseOrder !== b.phaseOrder) {
    return a.phaseOrder - b.phaseOrder;
  }

  return a.phaseIndex - b.phaseIndex;
}

function findByTitles(pagesInput: ArgPage[], titles: string[]): ArgPage[] {
  return pagesInput.filter((page) => page.siteType === 'main' && titles.includes(page.title)).sort(byPhaseOrderAndIndex);
}

function findMenuChildren(pagesInput: ArgPage[], overviewKey: string, titleFallback: string[]): ArgPage[] {
  const fromOverview = pagesInput
    .filter((page) => page.siteType === 'main' && (page.overview ?? '').includes(`メニュー「${overviewKey}」`))
    .sort(byPhaseOrderAndIndex);

  if (fromOverview.length > 0) {
    return fromOverview;
  }

  return findByTitles(pagesInput, titleFallback);
}

export function MainSiteLayout({ children, showSearch = true }: MainSiteLayoutProps): JSX.Element {
  const location = useLocation();
  const [openMenuLabel, setOpenMenuLabel] = useState<string | null>(null);
  const { currentPhase } = getPhaseState();
  const visiblePages = getResolvedPagesForPhase(currentPhase);
  const topPath = findByTitles(visiblePages, ['TOP'])[0]?.path ?? '/404';

  useEffect(() => {
    setOpenMenuLabel(null);
    const active = document.activeElement;
    if (active instanceof HTMLElement) {
      active.blur();
    }
  }, [location.pathname, location.search]);

  const handleMenuBlur = (event: FocusEvent<HTMLLIElement>): void => {
    const next = event.relatedTarget;
    if (!(next instanceof Node) || !event.currentTarget.contains(next)) {
      setOpenMenuLabel(null);
    }
  };

  return (
    <div className="layout layout-main">
      <header className="site-header main-header">
        <div className="header-top-row">
          <div className="title-group">
            <h1 className="site-title">
              <Link to={topPath}>福音継承教育会</Link>
            </h1>
            <p className="site-subcopy">地域に根ざした学びと継承のための教育共同体</p>
          </div>
          {showSearch ? (
            <div className="search-fixed search-in-header">
              <SearchBox />
            </div>
          ) : null}
        </div>

        <nav className="global-nav" aria-label="グローバルメニュー">
          <ul className="global-nav-root">
            {menuDefs.map((menu) => {
              const childrenPages = findMenuChildren(visiblePages, menu.overviewKey, menu.titleFallback);
              const isTop = menu.label === 'TOPページ';
              const topPathForMenu = childrenPages[0]?.path ?? '/404';
              const isOpen = openMenuLabel === menu.label;

              return (
                <li
                  key={menu.label}
                  className={`global-nav-item${isOpen ? ' is-open' : ''}`}
                  onMouseEnter={() => setOpenMenuLabel(menu.label)}
                  onMouseLeave={() => setOpenMenuLabel(null)}
                  onFocus={() => setOpenMenuLabel(menu.label)}
                  onBlur={handleMenuBlur}
                >
                  {isTop ? (
                    <Link className="global-nav-link" to={topPathForMenu} onClick={() => setOpenMenuLabel(null)}>
                      {menu.label}
                    </Link>
                  ) : (
                    <button className="global-nav-link global-nav-link-toggle" type="button" onClick={() => setOpenMenuLabel(isOpen ? null : menu.label)}>
                      {menu.label}
                    </button>
                  )}
                  <ul className="global-nav-menu">
                    {childrenPages.map((child) => (
                      <li key={child.path}>
                        <Link to={child.path} onClick={() => setOpenMenuLabel(null)}>
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
            <li className="global-nav-item">
              <Link className="global-nav-link" to="/history" onClick={() => setOpenMenuLabel(null)}>
                履歴
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="main-content-shell">{children}</section>
      </main>
    </div>
  );
}
