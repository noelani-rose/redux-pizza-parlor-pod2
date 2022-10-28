import {useSelector} from 'react-redux';
import {React} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import '../Checkout/Checkout.css';
import swal from 'sweetalert2';

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
        //Had to npm install sweetalert2
        swal.fire({
            title:'Finish Checkout?',
            showCancelButton: true,
            confirmButtonText: 'Yes!',
            denyButtonText: `Cancel`,
          }).then((result) => {
            if (result.isConfirmed) {
              swal.fire('Checkout Complete!', '', 'success')
               //Post to database

                //Clearing new order on click
                dispatch({
                    type: 'CLR_NEW_ORDER',
                    payload: ''
                });


                //Clear the cart
                dispatch({
                    type: 'CLEAR_CART',
                });
                dispatch({
                    type: 'RESET_TOTAL'
                });

  
          //Navigating back to home page
          history.push('/');
            } else if (result.isDenied) {
              swal.fire('Checkout not complete!', '', 'info')
            }
          })
        
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
                {cart.map(pizza => (
                  <tr key={pizza.id}>
                    <td>
                        {pizza.name}
                    </td>
                    <td>
                        {pizza.price}
                    </td>
                  </tr>  
                ))}
            </tbody>
        </table>

        <div className = "total"><h1>Total:{newOrder.total}</h1></div>
        <button className="checkoutBtn" onClick = {handleCheckout}>Checkout</button>

        </div>
        
        </>
    );
}

export default Checkout;

