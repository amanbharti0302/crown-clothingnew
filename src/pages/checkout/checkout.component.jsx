import React from 'react';
import './checkout.styles.scss';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({CartItems,total}) =>{
    const dt = new Date();
    return(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            CartItems.map(cartItem=>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
        }
        <div className='total'><span>TOTAL:${total}</span></div>
        <div className='test-warning'>*please use test credit card for payment*
        <br/>
        {
        `4242 4242 4242 4242 4242 - EXP: ${dt.getMonth()+1}/${dt.getFullYear()} - CVV : 123`}
        <br/>
        actually exp date is future date so above date will automatically update next month by using jabascript
        </div>
        
        <StripeCheckoutButton price={total}/>
    </div>
)}
const mapStateToProps = createStructuredSelector({
    CartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);