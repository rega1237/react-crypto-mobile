import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { cryptoReducer } from './reducer';

export default configureStore({
  reducer: { cryptoReducer },
  middleware: [logger, thunk],
});
