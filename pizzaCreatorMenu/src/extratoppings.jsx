import { useState } from "react";

function ExtraToppings({ extraToppings, setExtraToppings }) {
    const handleExtraToppingsChange = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {

            setExtraToppings([...extraToppings, value]);
        } else {

            setExtraToppings(extraToppings.filter(topping => topping !== value));
        }
    }

    return (
        <div>
            <h2>Choose the Extra Toppings</h2>
            <ul>
                <li>
                    <input type="checkbox" onChange={handleExtraToppingsChange} id="pepperoni" name="pepperoni" value="pepperoni" />
                    <label htmlFor="pepperoni">Pepperoni - NPR 100</label>
                </li>
                <li>
                    <input type="checkbox" onChange={handleExtraToppingsChange} id="olive" name="olive" value="olive" />
                    <label htmlFor="olive">Olive - NPR 100</label>
                </li>
                <li>
                    <input type="checkbox" onChange={handleExtraToppingsChange} id="chicken" name="chicken" value="chicken" />
                    <label htmlFor="chicken">Chicken - NPR 100</label>
                </li>
                <li>
                    <input type="checkbox" onChange={handleExtraToppingsChange} id="bacon" name="bacon" value="bacon" />
                    <label htmlFor="bacon">Bacon - NPR 100</label>
                </li>
                <li>
                    <input type="checkbox" onChange={handleExtraToppingsChange} id="sausage" name="sausage" value="sausage" />
                    <label htmlFor="sausage">Sausage - NPR 100</label>
                </li>
                <li>
                    <input type="checkbox" onChange={handleExtraToppingsChange} id="bellPepper" name="bellPepper" value="bellPepper" />
                    <label htmlFor="bellPepper">Bell Pepper - NPR 100</label>
                </li>
                <li>
                    <input type="checkbox" onChange={handleExtraToppingsChange} id="extraCheese" name="extraCheese" value="extraCheese" />
                    <label htmlFor="extraCheese">Extra Cheese - NPR 100</label>
                </li>
            </ul>

            <p>Selected Toppings: {extraToppings.join(', ')}</p>
        </div>
    );
}

export default ExtraToppings;
