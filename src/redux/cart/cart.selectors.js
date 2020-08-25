import {createSelector} from 'reselect';   //it prevent to rerender any thing whoose state has not been changed
const selectCart = state=>state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart=>cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems=>
    cartItems.reduce((accumalatedQuantity,cartItem)=>accumalatedQuantity+cartItem.quantity,0)
);