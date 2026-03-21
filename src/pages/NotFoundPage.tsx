import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function NotFoundPage(): JSX.Element {
  useEffect(() => {
    document.title = '404 Not Found';
    return () => { document.title = 'ARG'; };
  }, []);
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>ページが見つかりません。</p>
      <Link to="/">トップへ戻る</Link>
    </div>
  );
}
