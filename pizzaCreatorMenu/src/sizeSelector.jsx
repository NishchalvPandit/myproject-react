function SizeSelector({ size, setSize }) {
    const handleSizeChange = (event) => {
        setSize(event.target.value);
    }

    return (
        <div>
            <h2>Choose the Size of the pizza</h2>

            <ul>
                <li>
                    <input type="radio" onChange={handleSizeChange} id="small" name="size" value="small" />
                    <label htmlFor="small">Small - NPR 500</label>
                </li>

                <li>
                    <input type="radio" onChange={handleSizeChange} id="medium" name="size" value="medium" />
                    <label htmlFor="medium">Medium - NPR 700</label>
                </li>

                <li>
                    <input type="radio" onChange={handleSizeChange} id="large" name="size" value="large" />
                    <label htmlFor="large">Large - NPR 900</label>
                </li>

                <li>
                    <input type="radio" onChange={handleSizeChange} id="extraLarge" name="size" value="extraLarge" />
                    <label htmlFor="extraLarge">Extra Large - NPR 1100</label>
                </li>
            </ul>

            <p>Selected Size: {size}</p>

        </div>
    );
}
export default SizeSelector