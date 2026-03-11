import { Navigate, useLocation } from 'react-router-dom';
import { ArgContentPage } from '../pages/ArgContentPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { getPhaseState } from '../features/phase/phaseStore';
import { findStartPagePath, resolvePageByPath } from '../features/pages/pageResolver';

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

  return <ArgContentPage page={page} />;
}
