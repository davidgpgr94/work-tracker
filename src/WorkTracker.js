import React from 'react';
import { Provider } from 'react-redux';

import { AppRouter } from './components/Router/AppRouter';
import { store } from './store';

export const WorkTracker = () => {
  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  )
}
