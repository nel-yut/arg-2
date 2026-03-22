import { Navigate, useLocation } from 'react-router-dom';
import { ArgContentPage } from '../pages/ArgContentPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { getPhaseState } from '../features/phase/phaseStore';
import { findStartPagePath, pages, resolvePageByPath } from '../features/pages/pageResolver';
import { readBlogDeadFlag, readDefenseVisitedFlag } from '../utils/storage';

export function RootRedirect(): JSX.Element {
  return <Navigate to={findStartPagePath()} replace />;
}

export function DynamicPageRoute(): JSX.Element {
  const location = useLocation();
  const { currentPhase } = getPhaseState();
  const page = resolvePageByPath(location.pathname, currentPhase);

  if (!page) {
    return <NotFoundPage />;
  }

  if (readBlogDeadFlag()) {
    if ((page.siteType === 'main' || page.siteType === 'archive') && location.pathname !== '/record-defense-67748') {
      return <Navigate to="/record-defense-67748" replace />;
    }
  }

  if (readDefenseVisitedFlag()) {
    if (page.siteType === 'blog' && page.slug !== '404') {
      const blog404 = pages.find((p) => p.siteType === 'blog' && p.slug === '404');
      if (blog404) return <ArgContentPage page={blog404} />;
    }
  }

  return <ArgContentPage page={page} />;
}
