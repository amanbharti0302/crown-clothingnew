import {createStore ,applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';  //for session storage and local storage

import logger from 'redux-logger';     //to monitor redux state

import rootreducer from './root-reducer';

const middlewares = [];     //here we stored logger in array ths method is used when we have to use more than one middleware

if(process.env.NODE_ENV==='development'){
    middlewares.push(logger);
}

//in applyMiddleware we can send directly logger here as we have only one middleware
//...middleware is used to destructure all middlewares
export const store = createStore(rootreducer,applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// use this store in provider of index js as global state
//export default {store,persistor};