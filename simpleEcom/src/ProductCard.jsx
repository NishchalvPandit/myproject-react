import React from "react";
import nikeShoeImage from "./retronikeshoes.jpg";

export default function ProductCard({ size, setSize, setStep }) {
    const handleBuy = () => {
        if (!size) {
            alert("Please choose a size!");
            return;
        }
        setStep("payment");
    };


    return (
        <div className="product-card">
            <div className="product-header">
                <h2 className="product-title">Nike Retro Shoes</h2>
                <p className="product-price">Rs. 4,500</p>
            </div>

            <img
                src={nikeShoeImage}
                alt="Nike Retro Shoe"
                className="product-image"
            />

            <div className="form-group">
                <label className="form-label">Choose Size</label>
                <select
                    className="form-select"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}

                >
                    <option value="">Select size</option>
                    <option value="38">38</option>
                    <option value="40">40</option>
                    <option value="42">42</option>
                    <option value="44">44</option>
                </select>
            </div>

            <button className="btn btn-secondary">
                Add to Cart
            </button>

            <button
                onClick={handleBuy}
                className="btn btn-primary"
            >
                Buy Now
            </button>
        </div>
    );
}