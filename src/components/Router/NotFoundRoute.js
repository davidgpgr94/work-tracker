import { NotFoundPage } from '../../pages/NotFound/NotFoundPage';
import { PublicRoute } from './PublicRoute';

export const NotFoundRoute = () => {
  return (
    <PublicRoute path="*" trackPath={ false } component={ NotFoundPage } />
  )
}
