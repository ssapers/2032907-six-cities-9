import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { store } from './store';
import { Provider } from 'react-redux';

const Setting = {
  AMOUNT_OFFERS: 6,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App amountOffers = {Setting.AMOUNT_OFFERS} offers={offers} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
