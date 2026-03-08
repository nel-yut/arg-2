import { Link } from 'react-router-dom';
import type { SearchResult } from '../types/search';

interface SearchResultsListProps {
  results: SearchResult[];
}

export function SearchResultsList({ results }: SearchResultsListProps): JSX.Element {
  return (
    <ul className="search-results-list">
      {results.map((result) => (
        <li key={result.path}>
          <Link to={result.path}>{result.title}</Link>
        </li>
      ))}
    </ul>
  );
}
