import PizzaItem from "../PizzaItem/PizzaItem"
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function SelectPizza(){
    let pizzaList = useSelector(store => 
                    store.pizzas)
    
    let total= useSelector(store => store.total)
    const history = useHistory()
    const changePage = () => {
    history.push('/customer_form')
    }
    return(
        <>
            <h3>Step 1: Select Your Pizza</h3>
            <h4>total:{total}</h4>
            <ul>
            {pizzaList.map((pizza) =>(
                <PizzaItem 
                key={pizza.id} 
                pizza ={pizza}

                />
            ))}
            </ul>
            <button onClick={changePage}>NEXT</button>

        </>

    )
}

export default SelectPizza;