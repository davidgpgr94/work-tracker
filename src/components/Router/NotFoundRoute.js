import { NotFoundPage } from '../../pages/NotFound/NotFoundPage';
import { PublicRoute } from './PublicRoute';

export const NotFoundRoute = () => {
  return (
    <PublicRoute trackPath={ false } component={ NotFoundPage } />
  )
}
