import React, { useState, useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { loginUser } from "../actions/userActions";
import Loading from "../Components/Loading"
import Error from "../Components/Error"

export default function Loginscreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginstate=useSelector(state=>state.loginUserReducer)
  const {loading,error}=loginstate
  const dispatch=useDispatch();
  
  //if user already exists,we dont login again, directly go to home page
  useEffect(()=>{
  if(localStorage.getItem('currentUser'))
  {
  window.location.href='/';
  }
  },[])
  
  function login(){
 const user={email,password}
 dispatch(loginUser(user));
  }
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 shadow p-3 m-6 bg-white rounded" style={{ textAlign: "left" }}>
          <h2 className="text-center" style={{ fontSize: "40px" }}>
        Login
          </h2>
          {loading && (<Loading/>)}  
        {error && (<Error error='Invalid Credentials'/>)}
          
          <div>
            <input required
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input required
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button onClick={login} className="btn mb-3">LOGIN</button>
            <br/>
            <a style={{color:"blue", margin:"20px"}} href="/register">Click Here to Register</a>
          
          </div>
        </div>
      </div>
    </div>
  );
}
