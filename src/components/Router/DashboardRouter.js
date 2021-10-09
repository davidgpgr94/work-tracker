import {
  Switch
} from 'react-router-dom';

import { PublicRoute } from './PublicRoute';

import { MainPage } from '../../pages/Main/MainPage';

import { Navbar } from '../Navbar/Navbar';
import { NotFoundRoute } from './NotFoundRoute';

export const DashboardRouter = () => {
  return (
    <div className="dashboard">
      <aside className="dashboard__navbar">
        <Navbar />
      </aside>
      <main className="dashboard__content">
        <Switch>
          <PublicRoute path='/summary' component={ MainPage } />

          <NotFoundRoute />
        </Switch>
      </main>
    </div>
  )
}
