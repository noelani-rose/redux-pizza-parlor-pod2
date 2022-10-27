import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

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
      type: 'DISPALY_PIZZAS',
      payload: res.data
    })
  })
    .catch((err) => {
      console.log ('error GETting display pizzas', err)
  })
}


// AXIOS REGUEST (GET) FOR ALL ORDERS 





// AXIOS REQUEST (POST) FOR CUSTOMER ORDERS 



  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
