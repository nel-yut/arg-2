import { Link } from 'react-router-dom';
import type { SearchResult } from '../types/search';
import { writeSearchHistoryEntry } from '../utils/storage';

interface SearchResultsListProps {
  results: SearchResult[];
}

export function SearchResultsList({ results }: SearchResultsListProps): JSX.Element {
  return (
    <ul className="search-results-list">
      {results.map((result) => (
        <li key={result.path}>
          <Link
            className="search-result-link"
            to={result.path}
            onClick={() => writeSearchHistoryEntry({ path: result.path, title: result.title })}
          >
            {result.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
