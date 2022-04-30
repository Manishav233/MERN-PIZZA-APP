export const addToCart = (pizza, quantity, varient) => (dispatch,getState) => {
  //By getState , we can get all reducers and variables 
  var cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varient: varient,
    quantity: Number(quantity),
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
  };
  
  if(cartItem.quantity>10)
  {
  alert('Sorry, Maximum item range reached')
  }
  else{
  if(cartItem.quantity<1)
  {
    dispatch({type:'DELETE_FROM_CART',payload:pizza})
    }
    else{
  //disptaching the action
  dispatch({type:'ADD_TO_CART',payload:cartItem})
  }
}
  //updating
  const cartItems=getState().cartReducer.cartItems
  
  localStorage.setItem('cartItems',JSON.stringify(cartItems))
}
export const deleteFromCart=(pizza)=>(dispatch,getState)=>{
dispatch({type:'DELETE_FROM_CART',payload:pizza})
const cartItems=getState().cartReducer.cartItems
localStorage.setItem('cartItems',JSON.stringify(cartItems))
}
