import React from 'react';
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router-dom';

export const OnlyAnonymousRoute = ({ isAuthenticated, component:Component, redirectTo = '/', ...rest }) => {
  return (
    <Route
      { ...rest }
      component={ (props) => (
        (!isAuthenticated)
          ? ( <Component {...props} /> )
          : ( <Redirect to={ redirectTo } /> )
      )}
    />
  )
}

OnlyAnonymousRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  redirectTo: PropTypes.string
}
