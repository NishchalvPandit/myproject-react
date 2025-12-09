function Toppings({ topping, setTopping }) {
    const handleToppingsChange = (event) => {
        setTopping(event.target.value);
    }
    return (
        <div>
            <h2>Choose the Toppings</h2>
            <select onChange={handleToppingsChange}>
                <option value="pepperoni">Pepperoni - NPR 150</option>
                <option value="mushroom">Mushroom - NPR 150</option>
                <option value="olive">Olive - NPR 150</option>
                <option value="chicken">Chicken - NPR 150</option>
                <option value="bacon">Bacon - NPR 150</option>
                <option value="sausage">Sausage - NPR 150</option>
                <option value="pineapple">Pineapple - NPR 150</option>
            </select>
            <p>Selected Toppings: {topping}</p>
        </div>
    );



}

export default Toppings;