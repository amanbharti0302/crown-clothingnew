import React from 'react'
import {connect} from 'react-redux';
import  {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';


import {selectCartItems}from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems,history,dispatch})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length?
                cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem}></CartItem>)
                : <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={()=>
            {history.push('/checkout');
            dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
    </div>
)

// const mapStateToProps =state=>({
//     cartItems:selectCartItems(state)
// })

//using createStructuredSelector
const mapStateToProps =createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown)); 
//the reason we can do this is because all of our higher order components return component but also take component 
//.here with router is taKING  component. here order in which we are wrapping ,matters.