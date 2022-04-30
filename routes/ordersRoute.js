const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const Order=require('../models/orderModel')
const stripe = require("stripe")("sk_test_51KtHqfSJDqQCCUYZsiKtLDaZErYdIcIRp07jfOZWT3E51Omn2EUtSEk6itzYRIRIbSA0ERcZalB82Gee3Y5lGFJL00dkGiCLj1"
);



router.post("/placeorder", async (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    
    const payment = await stripe.charges.create({
      amount: subtotal * 100,
      currency: "inr",
      customer: customer.id,
      receipt_email: token.email,
     
    },{
    idempotencyKey:uuidv4()
    });
    
    if(payment)
    {
    
    const neworder=new Order({
    name:currentUser.name,
    email:currentUser.email,
    userid:currentUser.userid,
    orderItems:cartItems,
    orderAmount:subtotal,
    shippingAddress:{
    street:token.card.address_line1,
    city:token.card.address_city,
    country:token.card.address_country,
    pincode:token.card.address_zip
    },
    transactionId:payment.source.id
    })
    neworder.save()
    res.send('Order Placed Successfully')}
    else{
    res.send('Payment failed')}
  }
  catch (error) {
    return res.status(400).json({ message: 'Something went wrong'+ error});
  }
});

module.exports = router;
