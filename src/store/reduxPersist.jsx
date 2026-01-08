import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

export default function reducersPersister(reducers) {
  const rootReducer = combineReducers(reducers);
  const persistedReducers = persistReducer(
    {
      key: 'FIRST_PROJECT',
      storage,
      whitelist: ['auth'],
    },
    rootReducer
  );
  return persistedReducers;
}
