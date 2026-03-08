import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SearchBox(): JSX.Element {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const next = query.trim();
    navigate(`/search?q=${encodeURIComponent(next)}`);
  };

  return (
    <form className="search-box" onSubmit={onSubmit} role="search" aria-label="サイト内検索">
      <input
        className="search-input"
        aria-label="検索ワード"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="検索"
        required
      />
      <button className="search-button" type="submit">
        検索
      </button>
    </form>
  );
}
