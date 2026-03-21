import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DynamicPageRoute, RootRedirect } from './routes';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { HistoryPage } from '../pages/HistoryPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { clearAllState } from '../utils/storage';
import { DocPreviewPage } from '../pages/DocPreviewPage';

function DebugResetBar(): JSX.Element {
  function handleReset(): void {
    clearAllState();
    window.location.href = '/';
  }

  return (
    <div className="debug-bar">
      <span className="debug-bar-label">DEBUG</span>
      <button className="debug-bar-reset" type="button" onClick={handleReset}>
        ステートをリセット
      </button>
    </div>
  );
}

export function AppRouter(): JSX.Element {
  return (
    <BrowserRouter>
      <DebugResetBar />
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/doc-preview/:slug" element={<DocPreviewPage />} />
<Route path="/:slugAndId" element={<DynamicPageRoute />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
