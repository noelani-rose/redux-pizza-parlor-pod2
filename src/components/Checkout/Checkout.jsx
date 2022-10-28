import {useSelector} from 'react-redux';
import {React} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import '../Checkout/Checkout.css';

function Checkout({addOrder}){

    const dispatch = useDispatch();

    const history = useHistory();


    //Getting the newOrder from the redux store
    const newOrder = useSelector((store) => {
        return store.newOrder
    })
    
    //Gettin cart info from store to render price of individual pizzas
    const cart = useSelector((store) => {
        return store.cart
    })


    const handleCheckout = (newOrder) => {
        console.log('in handleCheckout');
  
        //Add a confirmation dialogue 
        //Had to npm install sweetalerts 
        swal("Finish Checkout?", {
            buttons: ["Cancel", "Yes!"],
          });
        
        //Post to database
        addOrder(newOrder);

        //Clearing new order on click
        dispatch({
          type: 'CLR_NEW_ORDER',
          payload: ''
        });

        //Navigating back to home page
        history.push('/');
    }


    return(
        <>
    
        <div className = "checkoutTitle">
            <h2>Step 3: Checkout</h2>
        </div>

        <div className = "flex-container">
        
        <div className = "deliveryType">
            <h3>{`${newOrder.type}`}</h3>
        </div>

        <div className ="customerInfo">
                <div>{`${newOrder.customer_name} `}</div>
                <div>{`${newOrder.street_address} `}</div>
                <div>{`${newOrder.city}, ${newOrder.zip}`}</div>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Name:</th>
                    <th>Cost:</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{`${newOrder.customer_name}`}</td>
                    <td>Return price from pizza table here</td>
                </tr>
            </tbody>
        </table>

        <div className = "total"><h1>Total:{newOrder.total}</h1></div>
        <button className="checkoutBtn" onClick = {handleCheckout}>Checkout</button>

        </div>
        
        </>
    );
}

export default Checkout;

