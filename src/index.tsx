import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import ReactIconsSampler from './Labs/Lab2/ReactIconSampler';
import ScreenSizeLabel from './Labs/Lab2/ScreenSizeLabel';
import store from './Kanbas/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ReactIconsSampler />
    <ScreenSizeLabel />
  </Provider>,
  document.getElementById('root')
);





