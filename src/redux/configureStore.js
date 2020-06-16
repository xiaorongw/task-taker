import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Reducer} from './reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

export const ConfigureStore = () => {

    const persistConfig = {
        key: 'root',
        storage,
    };

    const persistedReducer = persistReducer(persistConfig, Reducer)

    let store = createStore(
        persistedReducer,
        applyMiddleware(thunk, logger)
    );

    let persistor = persistStore(store)

    return {store, persistor};
}