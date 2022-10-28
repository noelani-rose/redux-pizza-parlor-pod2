import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Checkout from '../Checkout/Checkout';

// IMPORT COMPONENTS 




function App() {
  const dispatch = useDispatch();

// On page load, fetch Pizzas
  useEffect(() => {
    fetchPizzas();
  }, [])


// AXIOS REQUEST (GET) FOR ALL PIZZAS
const fetchPizzas = () => {
  console.log('in GET fetch pizzas function')
  axios({
    method: 'GET', 
    url: '/api/pizza'
  })
  .then((res) => {
    dispatch ({
      type: 'DISPLAY_PIZZAS',
      payload: res.data
    })
  })
    .catch((err) => {
      console.log ('error GETting display pizzas', err)
  })
}


// AXIOS REGUEST (GET) FOR ALL ORDERS
const fetchAllOrders = () => {
  console.log('in fetch all orders GET function')
  axios({
    method: 'GET', 
    url: '/api/order'
  })
  .then((res) => {
    dispatch({
      type: 'DISPLAY_ORDERS', 
      payload: res.data
    })
  })
  .catch((err) => {
    console.log ('error POSTing display orders', err)
  })
} 



// AXIOS REQUEST (POST) FOR CUSTOMER ORDERS 
                // pass in "order" object from handleSubmit funciton
const addOrder = (order) => {
  console.log('in add order POST function')
  axios({
    method: 'POST', 
    url: '/api/order',
    data: order
  })
  .then((res) => {
    console.log('successfully POSTed new order', res)
  })
  .catch((err) => {
    console.log('error POSTing new order', err)
  })
}


  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <Route exact path="/checkout">            
          <Checkout addOrder = {addOrder} />
      </Route>
  
      <Route exact path = '/'>
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p></Route>

  
    </div>
    </Router>
  );
}

export default App;
