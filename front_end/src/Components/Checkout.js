import React from 'react';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';

export default function Checkout({subtotal}) {

const dispatch=useDispatch();

function tokenHandler(token)
{
console.log(token);
dispatch(placeOrder(token,subtotal))
}
//Using 3rd party library StripeCheckout to build frontend for paymnet using Stripe
  return (
    <div>
    
    <StripeCheckout
    amount={subtotal*100}
    shippingAddress
    token={tokenHandler}
    stripeKey='pk_test_51KtHqfSJDqQCCUYZ48iQkhe2r9MKCFTmViycv4Iwt2FzeaNjrB2zmxyZXvq1085efL8wwoEUUgKPdpvyLDf8YxZ600leyysB3J'

 
    currency='INR'
    
    >
    <button className='btn'>Proceed to Pay</button>
    </StripeCheckout>
    
    </div>
  )
}
