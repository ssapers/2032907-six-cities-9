import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  AMOUNT_OFFERS: 6,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      amountOffers = {Setting.AMOUNT_OFFERS}
    />
  </React.StrictMode>,
  document.getElementById('root'));
