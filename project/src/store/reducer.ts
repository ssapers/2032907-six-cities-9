import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { changeCity, fillListCard } from './action';

const initialState = {
  offers: offers,
  city: offers[0].city,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillListCard,(state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
