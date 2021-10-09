import React from 'react';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

import { saveItem, KEYS } from '../../utils/local-storage';

export const PublicRoute = ({ trackPath = true, component:Component, ...rest }) => {

  if (trackPath) {
    saveItem(KEYS.lastPath, rest.location.pathname);
  }

  return(
    <Route { ...rest }
      component={ (props) => (<Component { ...props } />) }
    />
  )
}

PublicRoute.propTypes = {
  trackPath: PropTypes.bool,
  component: PropTypes.func.isRequired
}
