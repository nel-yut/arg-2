import { Link } from 'react-router-dom';
import { MainSiteLayout } from '../layouts/MainSiteLayout';
import { readSearchHistory } from '../utils/storage';

export function HistoryPage(): JSX.Element {
  const history = readSearchHistory();

  return (
    <MainSiteLayout>
      <section className="search-page">
        <h2>履歴</h2>
        {history.length > 0 ? (
          <ul className="search-results-list">
            {history.map((entry) => (
              <li key={entry.path}>
                <Link className="search-result-link" to={entry.path}>
                  {entry.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="search-empty">
            <p>検索から遷移したページの履歴はありません。</p>
          </div>
        )}
      </section>
    </MainSiteLayout>
  );
}
