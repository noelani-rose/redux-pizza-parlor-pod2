import {useSelector} from 'react-redux';
import {React} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Checkout(){

    const dispatch = useDispatch();

    const history = useHistory();


    //Getting the newOrder from the redux store
    const newOrder = useSelector(store => store.newOrder);

    //Getting adminOrders from the redux store

    const adminOrder = useSelector(store => store.adminOrder);

    


    return(
        <>
        </>
    );
}

export default Checkout;

