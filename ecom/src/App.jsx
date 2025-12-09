import { useState } from 'react'
import './App.css'

function App() {
  const [selectedSize, setSelectedSize] = useState('');
  const [showPayment, setShowPayment] = useState(false);

  const product = {
    name: 'Premium Running Shoes',
    price: 8999,
    description: 'High-performance running shoes with advanced cushioning and breathable mesh upper.',
    sizes: ['7', '8', '9', '10', '11', '12'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80'
  };

  const handleSelectSize = (size) => {
    setSelectedSize(size);
  };

  const handleBuyNow = () => {
    if (selectedSize) {
      setShowPayment(true);
    } else {
      alert('Please select a size first!');
    }
  };

  const handlePayment = () => {
    alert(`Payment successful! You purchased ${product.name} - Size ${selectedSize} for NPR ${product.price}`);
    setShowPayment(false);
    setSelectedSize('');
  };

  return (
    <div className="app">
      <header>
        <h1>🛒 Shoe Store</h1>
      </header>

      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-details">
          <h2>{product.name}</h2>
          <p className="description">{product.description}</p>
          <p className="price">NPR {product.price.toLocaleString()}</p>

          <div className="size-selector">
            <h3>Select Size:</h3>
            <div className="sizes">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => handleSelectSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {selectedSize && (
            <p className="selected-info">Selected Size: <strong>{selectedSize}</strong></p>
          )}

          <button className="buy-btn" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>

      {showPayment && (
        <div className="payment-modal">
          <div className="modal-content">
            <h2>Payment</h2>
            <div className="order-summary">
              <p><strong>Product:</strong> {product.name}</p>
              <p><strong>Size:</strong> {selectedSize}</p>
              <p><strong>Total:</strong> NPR {product.price.toLocaleString()}</p>
            </div>
            <button className="pay-btn" onClick={handlePayment}>
              Pay NPR {product.price.toLocaleString()}
            </button>
            <button className="cancel-btn" onClick={() => setShowPayment(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
