import {createStore ,applyMiddleware} from 'redux';

import logger from 'redux-logger';     //to monitor redux state

import rootreducer from './root-reducer';

const middlewares = [logger];     //here we stored logger in array ths method is used when we have to use more than one middleware


//in applyMiddleware we can send directly logger here as we have only one middleware
//...middleware is used to destructure all middlewares
const store = createStore(rootreducer,applyMiddleware(...middlewares));



// use this store in provider of index js as global state
export default store;