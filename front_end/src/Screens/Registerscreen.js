import React, { useState, useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { registerUser } from "../actions/userActions";
import Loading from "../Components/Loading"
import Success from "../Components/Success"
import Error from "../Components/Error"

function Registerscreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const registerstate=useSelector(state=>state.registerUserReducer)
  const {error,loading,success}=registerstate
  const dispatch=useDispatch();
  
  function register(){
  if(password!==cpassword)
  {
  alert("Passwords not matched")
  }
  else{
  const user={
  name,
  email,
  password
  
}
console.log(user);
dispatch(registerUser(user));
  }
  }
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 shadow p-3 m-6 bg-white rounded" style={{ textAlign: "left" }}>
          
        {loading && (<Loading/>)}  
        {success && (<Success success='User Registered Successfully'/>)}
        {error && (<Error error='Email already Registered'/>)}
          
          <h2 className="text-center" style={{ fontSize: "40px" }}>
            Register
          </h2>
          <div>
            <input required
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
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
            <input required
              type="text"
              placeholder="confirm password"
              className="form-control"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />
            <button onClick={register} className="btn mt-3 mb-3">REGISTER</button>
        <br/>
        <a style={{color:"blue", margin:"20px"}} href="/login">Click Here to Login</a>
          
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerscreen;
