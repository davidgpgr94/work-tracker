import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { LoginPage } from '../../pages/Login/LoginPage';

import { DashboardRouter } from './DashboardRouter';
import { OnlyAnonymousRoute } from './OnlyAnonymousRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <Router>
      <div className="wrapper">
        <Switch>
          <OnlyAnonymousRoute exact path="/login" isAuthenticated={ false } component={ LoginPage } />

          <PublicRoute trackPath={ false } path="/" component={ DashboardRouter } />
        </Switch>
      </div>
    </Router>
  )
}
