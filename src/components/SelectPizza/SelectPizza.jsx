import PizzaItem from "../PizzaItem/PizzaItem"
import { useSelector } from "react-redux";

function SelectPizza(){
    let pizzaList = useSelector(store => 
                    store.pizzas)
    
    let total= useSelector(store => store.total)
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
            <button>NEXT</button>

        </>

    )
}

export default SelectPizza;