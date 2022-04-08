import { combineReducers } from 'redux';
import city from './city-reducer';
import offers from './offer-reducer';

const reducer = combineReducers({
  city: city.reducer,
  offers: offers.reducer,
});

export default reducer;
