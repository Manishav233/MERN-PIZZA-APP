import React, { useState } from "react";
import {Modal} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {addToCart} from '../actions/cartActions';
export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const dispatch=useDispatch()
  function addtocart()
  {
  dispatch(addToCart(pizza,quantity,varient))
  }
  return (
    <div
      className="shadow-lg p-3 mb-5 bg-white rounded"
      // style={{ margin: "60px" }}
    >
      <h1>{pizza.name}</h1>
     <div onClick={handleShow} >
     <img
        src={pizza.image}
        className="pizza-img"
        style={{ height: "200px", width: "200px" }}
      ></img>
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setVarient(e.target.value);
            }}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <h1 className=" Price mt-1" style={{ fontSize: "20px" }}>
            Price: ₹ {pizza.prices[0][varient] * quantity}
          </h1>
        </div>

        <div className="w-100 m-1">
          <button className="btn" onClick={addtocart}>ADD TO CART</button>
        </div>
      </div>

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div style={{textAlign:'center'}}>
       <img src={pizza.image} alt='pizza_image' style={{height:"300px", width:"300px", }}/>
       </div>
       <p className="m-3"><b>{pizza.description}</b></p>
       </Modal.Body>

        <Modal.Footer>
          <button className='btn' onClick={handleClose}>Close</button>
        
        </Modal.Footer>
      </Modal>
    </div>
  );
}
