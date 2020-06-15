import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Reducer} from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        applyMiddleware(thunk, logger)
    );

    return store;
}