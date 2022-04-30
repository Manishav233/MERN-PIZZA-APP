import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {addToCart} from "../actions/cartActions";
import {deleteFromCart} from "../actions/cartActions";
import Checkout from "../Components/Checkout";
function Cartscreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal=cartItems.reduce((x,item)=>x+item.price,0)
  
  const dispatch=useDispatch();
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ fontSize: "35px" }}>Review Order </h2>
          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div className="text-left" style={{textAlign:'left', margin:'10px',width:'100%'}}>
                  <h1>
                    {item.name} [{item.varient}]
                  </h1>
                  <h1>
                    Price: {item.quantity}*{item.prices[0][item.varient]} ={" "}
                    {item.price}
                  </h1>
                  <h1 style={{display:'inline'}}>Quantity: </h1>
                  <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.varient))}}></i>
                  <b>{item.quantity}</b>
                  <i className="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity+1,item.varient))}}></i>
               <hr/>
               </div>
               
                <div className="m-1 w-100">
                <img src={item.image} alt='pizza_image' style={{height:'90px',width:'90px'}}/>
                
                </div>
                <div className="m-1 w-100">
                {/* //after deleting in state , we have to delete in local storage also */}
                <i className="fa fa-trash mt-5" aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-md-4" style={{textAlign:"right"}}>
        <h2 style={{fontSize:'35px'}}>Amount: ₹ {subtotal}</h2>
        {/* <button className="btn">PROCEED TO PAY</button> */}
        <Checkout subtotal={subtotal}/>
        </div>
      </div>
    </div>
  );
}

export default Cartscreen;
