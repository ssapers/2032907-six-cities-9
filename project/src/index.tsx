import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';

const Setting = {
  AMOUNT_OFFERS: 6,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      amountOffers = {Setting.AMOUNT_OFFERS}
      offers = {offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
