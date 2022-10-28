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
            <h2>Step 1: Select Your Pizza</h2>
            <h3>Total:${total}</h3>
            <ul>
            {pizzaList.map((pizza) =>(
                <PizzaItem 
                key={pizza.id} 
                pizza ={pizza}

                />
            ))}
            </ul>
            <button className="nextBtn" onClick={changePage}>NEXT</button>

        </>

    )
}

export default SelectPizza;