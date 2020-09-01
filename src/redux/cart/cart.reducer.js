import CartActionTypes from './cart.types';
import {addItemToCart,removeItemFromCart} from './cart.utils';

const INITIAL_STATE ={
    hidden:true,
    cartItems: []    //initially taken empty array
};


const cartReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload)              //here we will return cart items after upgrading it according to payload
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(cartItem=>cartItem.id!==action.payload.id)
            }
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems,action.payload)
            }
    default:
        return state;
    }
}

export default cartReducer;