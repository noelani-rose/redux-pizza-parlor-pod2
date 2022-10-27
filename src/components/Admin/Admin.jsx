import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


import './Admin.css';

function Admin ({ fetchAllOrders }) {
    const dispatch = useDispatch();
    const adminOrders = useSelector((store) => {
        return store.adminOrders
    })

    useEffect(() => {
        fetchAllOrders();
        console.log('admin orders are', adminOrders)

      }, [])
    

    return (
        <>
        <table className = "table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
            </thead>
            </table>
        </>
    )
}

export default Admin;




// TODO: 
    // - import function dispalyAllOrders
    // - send dispatch action type DISPLAY_ORDERS and payload of ORDERS 
    // - receive DISPLAY_ORDERS action on index.js
    // - map through the orders and render
            // - TABLE WITH : customer name, time order placed, type, cost 



