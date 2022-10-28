import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';


const cart = (state = [], action) => {
    switch (action.type){
        case 'ADD_TO_CART':
            return [
                ...state,
                action.payload
            ];
        case 'REMOVE_FROM_CART':
            let result = state.filter(pizza => pizza.id !== action.payload);
            return result;
        case 'CLEAR_CART':
            return [];
        default: return state;
    }
};

const adminOrders = (state = [], action) => {
    if(action.type === 'DISPLAY_ORDERS'){

        return action.payload;
       
   }
    return state;
}

const newOrder = (state = {}, action) => {
    switch(action.type){
        case 'SUB_NEW_ORDER':
            return action.payload;
        case 'CLR_NEW_ORDER':
            return {};
        default: return state;
    }
}

const total = (state = 0, action) =>{
    switch (action.type){
        case 'ADD_TOTAL':
            let newTotal =state + Number(action.payload);
            return Math.ceil(newTotal*100)/100;
        case 'REMOVE_TOTAL':
             let reducedTotal =state - Number(action.payload);
            return Math.ceil(reducedTotal*100)/100;
        case 'RESET_TOTAL':
            return 0;
        default: return state;
    }
    return state;
    
}

const pizzas = (state = [], action) => {
    if (action.type === 'DISPLAY_PIZZAS'){
        return action.payload;
    }
    return state;
}



const storeInstace = createStore(
    combineReducers({
        cart,
        adminOrders,
        newOrder,
        total,
        pizzas
    }),
    applyMiddleware(logger)
);
ReactDOM.render(<Provider store={storeInstace}><App /></Provider>, document.getElementById('root'));
