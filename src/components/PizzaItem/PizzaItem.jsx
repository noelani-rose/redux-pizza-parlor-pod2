import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

function PizzaItem({ pizza }) {
    const [display, setDisplay] = useState(true);
    
    const dispatch = useDispatch;
    
    const addPizza = (evt) =>{
        evt.preventDefault();
        setDisplay(!display)
        dispatch({
            type: 'ADD_TOTAL',
            payload: pizza.price
        })
    }
    const removePizza = (evt) =>{
        evt.preventDefault();
        setDisplay(!display)
        console.log('in remove pizza',pizza)

        dispatch({
            type: 'SUB_TOTAL',
            payload: pizza.price
        })


    }

  return (
    <>
      <div key={pizza.id} className="container">
        <div className="menu">
        <div className="name">{pizza.name}</div>
        <div className="description">{pizza.description}</div>
        <div className="price">{pizza.price}</div>
        {display === true && (
            <button onClick={addPizza}>Add</button>
        )}
        {display === false && (
            <button onClick={removePizza}>Remove</button>
        )}
        </div>
      </div>
    </>
  );
}


export default PizzaItem;
