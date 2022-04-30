import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { logoutUser } from '../actions/pizzaActions';


export default function Navbar() {

//creating object of our cartReducer
const cartstate=useSelector(state=>state.cartReducer)
const userstate=useSelector(state=>state.loginUserReducer)
const {currentUser} =userstate
const dispatch=useDispatch()

  return (
<nav className="navbar navbar-expand-md navbar-dark bg-primary shadow p-3 mb-5 bg-primary rounded">
  <a className="navbar-brand" href="/">PIZZA ZONE</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
    
    {currentUser ? (
    <div className="dropdown">
  <a style={{color:"white"}} className="dropdown-toggle nav-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   {currentUser.name}
  </a>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    {/* <a className="dropdown-item" href="#">Orders</a> */}
    <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></a>
  </div>
</div> ) : ( 
      <li className="nav-item">
        <a className="nav-link" href="/login">Login</a>
      </li>)}
     
    
      <li className="nav-item">
        <a className="nav-link" href="/cart">Cart {cartstate.cartItems.length}</a>
      </li>
     </ul>
  </div>
</nav>
  )
}

