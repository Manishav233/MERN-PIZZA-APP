import React, { useState,useEffect } from "react";
// import pizzas from "../Pizzadata";
import { useDispatch ,useSelector} from "react-redux";
import Pizza from "../Components/Pizza";
import { getAllPizzas } from "../actions/pizzaActions";
import Loading from "../Components/Loading";
import Error from "../Components/Error";

export default function Homepage() {
const dispatch=useDispatch()

const pizzasstate=useSelector(state=>state.getAllPizzasReducer)
const {pizzas,error,loading}=pizzasstate
useEffect(()=>{
dispatch(getAllPizzas())
},[])
  return (
    <div>
      <div className="row justify-content-center">
      
    {loading ? (<Loading/>):error ? (<Error error='Somethimg went wrong'/>):(
    pizzas.map((pizza) => {
      return (
        <div className="col-md-3 m-3" key={pizza._id}>
          <div>
            <Pizza pizza={pizza}/>
          </div>
        </div>
      );
    })
    )}
      
      </div>
    </div>
  );
}
