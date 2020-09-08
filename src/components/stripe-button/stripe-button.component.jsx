import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token=>{
    console.log(token);
    alert('PAYMENT SUCCESSFULL');
}

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51HPB6iKmNqAJtXyTnduesDlYTzhKXesXVrumyp7vv1fFPoudQLp7sooBU5CCc0pE52LjYTWUt8U7d03kmkyJd6Vr00uuzGIKzk';

    return(
        <StripeCheckout
        label='Pay Now'
        name = 'My Startup'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total amount is RS${price}`}
        amount ={priceForStripe}
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;