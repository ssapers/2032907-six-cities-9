import {configureStore} from '@reduxjs/toolkit';
import reducer from './main-reducer';

export const store = configureStore({reducer});
