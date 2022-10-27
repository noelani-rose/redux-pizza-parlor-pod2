import React from "react";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


import './Admin.css';

function Admin ({ fetchAllOrders }) {
    const adminOrders = useSelector((store) => {
        return store.adminOrders
    })

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

                <tr>
                    <td>name</td>
                    <td>time</td>
                    <td>type</td>
                    <td>cost</td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>time</td>
                    <td>type</td>
                    <td>cost</td>
                </tr>

            </thead>
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



