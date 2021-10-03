import { Link } from 'react-router-dom';

import { KEYS, getItem } from '../../utils/local-storage';

export const NotFoundPage = () => {

  const backPath = getItem(KEYS.lastPath);

  return (
    <div className="not-found">
      <p className="not-found__text">404 Not Found</p>
      <Link className="not-found__go-back" to={ backPath }>Back</Link>
    </div>
  )
}
