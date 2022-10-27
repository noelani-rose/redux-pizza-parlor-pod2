import {useDispatch, useSelector} from 'react-redux';
import {useHistory } from 'react-router-dom';
import React, {useState} from 'react';

function CustomerForm({addOrder}) {

    const [order, setOrder] = useState({customer_name: '' , street_address: '', city: '', zip: 0, type: '', total: 0.00, pizzas: [{}]})

    let storedTotal = useSelector(store => store.total);

    let history = useHistory();

    const dispatch = useDispatch();

    const submitForm = (evt) => {
        evt.preventDefault();
        console.log('storedTotal', storedTotal);
        console.log('submitting form!');
        addOrder({...order, total: storedTotal});
        dispatch({
            type: 'SUB_NEW_ORDER',
            payload: {...order, total: storedTotal}
        })
        setOrder({customer_name: '', street_address: '', city: '', zip: 0,type: ''})
        history.push('/checkout')
    }
    console.log('newOrder total is', order.total);

    return (
        <>
            <header>
                <h1>Customer Form!</h1>
            </header>

            <form onSubmit={submitForm}>
                <input type='text' 
                placeholder='Customer Name' 
                onChange={(evt)=>{
                    setOrder({...order, customer_name: evt.target.value})
                }}
                value={order.customer_name}></input>
                <br/>
                <input
                type='text'
                placeholder='Address'
                onChange={(evt)=>{
                    setOrder({...order, street_address:evt.target.value})
                }}
                value={order.street_address}></input>
                <br/>
                <input
                type='text'
                placeholder='City'
                onChange={(evt)=>{
                    setOrder({...order, city: evt.target.value})
                }}
                value={order.city}></input>
                <br/>
                <input
                type='number'
                placeholder='Zip Code'
                onChange={(evt)=>{
                    setOrder({...order, zip: evt.target.value})
                }}
                value={order.zip}></input>
                <br/>
                <label for="delivery">Delivery:</label>
                <input
                type='radio'
                id="delivery"
                value="Delivery"
                onClick={()=>{
                    setOrder({...order, type: 'Delivery'});
                }}
                name='delivery_type'></input>
                <label for="pickup">Pickup:</label>
                <input type='radio' 
                id="pickup"
                value="Pickup"
                onClick={()=>{
                    setOrder({...order, type: 'Pickup'})
                }}
                name='delivery_type'></input>
                <button type="submit">Next</button>
            </form>
        </>
    )
}

export default CustomerForm;