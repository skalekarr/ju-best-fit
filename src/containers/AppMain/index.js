import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import CSSModules from 'react-css-modules';

import Modal from '../../components/Modal';
import ProductDetails from '../ProductDetails';

import styles from './styles.scss';

const AppMain = ({ match: { path } }) => (
  <div className={styles.mainContainer}>
    <Modal />
    <Switch>
      {/* <Route exact path={path} component={Login} /> */}
      <Route path={`${path}`} component={ProductDetails} />
    </Switch>
  </div>
);

AppMain.propTypes = {
  match: PropTypes.object.isRequired,
};

export default CSSModules(AppMain, styles);
