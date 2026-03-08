import { Navigate, useLocation } from 'react-router-dom';
import { ArgContentPage } from '../pages/ArgContentPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { findStartPagePath, resolvePageByPath } from '../features/pages/pageResolver';

export function RootRedirect(): JSX.Element {
  return <Navigate to={findStartPagePath()} replace />;
}

export function DynamicPageRoute(): JSX.Element {
  const location = useLocation();
  const page = resolvePageByPath(location.pathname);

  if (!page) {
    return <NotFoundPage />;
  }

  return <ArgContentPage page={page} />;
}
