import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DynamicPageRoute, RootRedirect } from './routes';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/:slugAndId" element={<DynamicPageRoute />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
