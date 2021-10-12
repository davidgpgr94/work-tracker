import {
  Switch
} from 'react-router-dom';

import { PublicRoute } from './PublicRoute';

import { MainPage } from '../../pages/Main/MainPage';

import { Navbar } from '../Navbar/Navbar';
import { NotFoundRoute } from './NotFoundRoute';
import { CurrentWork } from '../CurrentWork/CurrentWork';

export const DashboardRouter = () => {
  return (
    <div className="dashboard">
      <aside className="dashboard__navbar">
        <Navbar />
      </aside>
      <main className="dashboard__content">
        <CurrentWork />
        <div className="dashboard__wrapper">
          <Switch>
            <PublicRoute path='/summary' component={ MainPage } />

            <NotFoundRoute />
          </Switch>
        </div>
      </main>
    </div>
  )
}
