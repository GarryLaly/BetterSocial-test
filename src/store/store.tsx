import {persistStore, persistReducer} from 'redux-persist';
import {createStore, combineReducers} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

import * as reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['feeds'],
};

const allReducers = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
