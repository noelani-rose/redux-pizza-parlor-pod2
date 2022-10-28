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
        default: return state;
    }
};

const adminOrders = (state= [], action) => {
    if(action.type === 'DISPLAY_ORDERS'){
        return [
            ...state,
            action.payload
        ]
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
            let newState = state + Number(action.payload);
            return newState;
        case 'REMOVE_TOTAL':
            let reducedState = state - Number(action.payload);
            return reducedState;
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
