import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Routes from './Routes';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.objectOf(React.PropTypes.any).isRequired,
  history: PropTypes.objectOf(React.PropTypes.any).isRequired,
};

export default Root;
