//rooot reducer represents overall reducer 
// here we use combineReducer from react library to combine them all together

import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';


// remeber all state in reducers in a whole json state
export default combineReducers({
    user:userReducer
})