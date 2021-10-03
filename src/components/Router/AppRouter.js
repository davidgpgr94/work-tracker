import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import { PublicRoute } from './PublicRoute';

import { MainPage } from '../../pages/Main/MainPage';
import { NotFoundPage } from '../../pages/NotFound/NotFoundPage';

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <PublicRoute exact path="/" component={ MainPage } />

          <Route component={ NotFoundPage } />
        </Switch>
      </>
    </Router>
  )
}
