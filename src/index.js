import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './router';
import './assets/styles/styles.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
