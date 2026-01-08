import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { authReducer } from './slices/auth';
import persistedReducers from './reduxPersist';
import { persistStore } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducers({
    auth: authReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export default store;
