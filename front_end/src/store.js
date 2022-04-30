import {combineReducers } from 'redux';
import { createStore,applyMiddleware} from 'redux';
import {getAllPizzasReducer} from './reducers/pizzaReducers'
import thunk from 'redux-thunk';
import {loginUserReducer, registerUserReducer } from './reducers/userReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

import { cartReducer } from './reducers/cartReducer';
import { placeOrderReducer } from './reducers/orderReducer';
const finalReducer=combineReducers({
getAllPizzasReducer : getAllPizzasReducer,
cartReducer:cartReducer,
registerUserReducer:registerUserReducer,
loginUserReducer:loginUserReducer,
placeOrderReducer:placeOrderReducer

})
//if we have any item by name cartItems in local Storage, we convert it into json object and assign to store
const cartItems=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]

 const currentUser=localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')):null

//creating initial state for cartReducer
const initialState={
cartReducer:{
cartItems:cartItems
},
loginUserReducer:{
currentUser:currentUser
}
}
const composeEnhancers= composeWithDevTools({})
const store =createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))

export default store;