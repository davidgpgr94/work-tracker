import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import { DashboardRouter } from './DashboardRouter';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <Router>
      <div className="wrapper">
        <Switch>
          <PublicRoute trackPath={ false } path="/" component={ DashboardRouter } />
        </Switch>
      </div>
    </Router>
  )
}
