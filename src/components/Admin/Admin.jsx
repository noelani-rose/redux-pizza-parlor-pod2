import React from "react";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


import './Admin.css';

function Admin ({ fetchAllOrders }) {
    const adminOrders = useSelector(store => store.adminOrders
)

    useEffect(() => {
        fetchAllOrders();
        console.log('admin orders are', adminOrders)

      }, [])


    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
            </thead>
                <tbody>
                {adminOrders.map((order) => (
                    <tr key = {order.id}>
                        <td>{order.customer_name}</td>
                        <td>{order.time}</td>
                        <td>{order.type}</td>
                        <td>{order.total}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default Admin;



// TODO: 
    // - import function dispalyAllOrders [✅]
    // - receive DISPLAY_ORDERS action on index.js [✅]

    // - map through the orders and render
            // - TABLE WITH : customer name, time order placed, type, cost 



