import { useSearchParams } from 'react-router-dom';
import { SearchResultsList } from '../components/SearchResultsList';
import { pages } from '../features/pages/pageResolver';
import { searchPages } from '../features/search/searchService';
import { getPhaseState } from '../features/phase/phaseStore';
import { MainSiteLayout } from '../layouts/MainSiteLayout';
import { PhaseBadge } from '../components/PhaseBadge';

export function SearchResultsPage(): JSX.Element {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get('q') ?? '').trim();
  const { currentPhase } = getPhaseState();
  const results = searchPages(pages, query, currentPhase);

  return (
    <MainSiteLayout>
      <section className="search-page">
        <h2>検索結果</h2>
        {query.length > 0 ? <p className="search-query">検索ワード: {query}</p> : null}
        {results.length > 0 ? (
          <SearchResultsList results={results} />
        ) : (
          <div className="search-empty">
            <p>検索結果が見つかりません。</p>
            <p>複数ワード検索はできない。</p>
            <p>人名は空白を入れず検索する。</p>
          </div>
        )}
      </section>
      <PhaseBadge phaseLabel={`Phase${currentPhase}`} phaseIndex={0} />
    </MainSiteLayout>
  );
}
