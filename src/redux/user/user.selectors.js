import {createSelector} from 'reselect';

const selectUser = state => state.user;

//both way is correct of writing syntax
//const selectCart = state=> state.cart;
// export const selectCurrrentUser = createSelector(
//     selectUser,selectCart,
//     (user,cart)=>user.currentUser
// )

export const selectCurrrentUser = createSelector(
    [selectUser],
    (user,cart)=>user.currentUser
)