//rooot reducer represents overall reducer 
// here we use combineReducer from react library to combine them all together

import {combineReducers} from 'redux';
import {persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';  //local storage object on window


import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';


const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer =combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer
});


// remeber all state in reducers in a whole json state
export default persistReducer(persistConfig,rootReducer);  //modified root reducer for storage