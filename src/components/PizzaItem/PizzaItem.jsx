import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

import App from "../App/App";

function PizzaItem({ pizza }) {
  const [display, setDisplay] = useState(true);

  const dispatch = useDispatch();

  const addPizza = (evt) => {
    evt.preventDefault();
    setDisplay(!display);
    dispatch({
      type: "ADD_TOTAL",
      payload: pizza.price,
    });
    dispatch({
      type:'ADD_TO_CART',
      payload: pizza
    })
  };
  const removePizza = (evt) => {
    evt.preventDefault();
    setDisplay(!display);
    console.log("in remove pizza", pizza);

    dispatch({
      type: "REMOVE_TOTAL",
      payload: pizza.price,
    });
    dispatch({
      type:'REMOVE_FROM_CART',
      payload: pizza
    })
  };

  return (
    <>
      <div key={pizza.id} className="container">
        <div className="row">
          <div className="name">{pizza.name}</div>
          <div className="description">
            {pizza.description}
            <div className="price">${pizza.price}</div>
            <br />
            {display === true && (
              <button className="button" onClick={addPizza}>
                Add
              </button>
            )}
            {display === false && (
              <button className="button" onClick={removePizza}>
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PizzaItem;
