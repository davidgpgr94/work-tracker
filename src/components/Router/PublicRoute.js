import React from 'react';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

import { saveItem, KEYS } from '../../utils/local-storage';

export const PublicRoute = ({ component:Component, ...rest }) => {

  saveItem(KEYS.lastPath, rest.location.pathname);

  return(
    <Route { ...rest }
      component={ (props) => (<Component { ...props } />) }
    />
  )
}

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired
}
