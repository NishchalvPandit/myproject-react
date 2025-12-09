function PriceCalculator({ size, topping, extraToppings }) {
    const sizePrices = {
        small: 500,
        medium: 700,
        large: 900,
        extraLarge: 1100
    };

    const toppingPrice = 150;

    const extraToppingPrice = 100;

    const sizePrice = sizePrices[size] || 0;
    const mainToppingPrice = topping ? toppingPrice : 0;
    const extraToppingsPrice = extraToppings.length * extraToppingPrice;
    const totalPrice = sizePrice + mainToppingPrice + extraToppingsPrice;

    return (
        <div>
            <h2>Price Breakdown</h2>
            <div>
                <p><strong>Pizza Size ({size || 'Not selected'}):</strong> NPR {sizePrice}</p>
                <p><strong>Main Topping ({topping || 'Not selected'}):</strong> NPR {mainToppingPrice}</p>
                <p><strong>Extra Toppings ({extraToppings.length} items):</strong> NPR {extraToppingsPrice}</p>
                <hr />
                <p>
                    <button><strong>Total Price: NPR {totalPrice}</strong></button>
                </p>
            </div>
        </div>
    );
}

export default PriceCalculator;
