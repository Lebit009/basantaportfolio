import React, { useState } from "react";
import "../css/Cards.css";

export default function Cards() {
  const [quantity, setQuantity] = useState(0);  

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <div className="card-container">
    <div className="card">
      <span className="card-image">
        <img src={"https://img.kwcdn.com/product/open/64fc285579a74e32b48ddca3456e2db1-goods.jpeg?imageView2/2/w/1300/q/80/format/webp"} alt="product" />
      </span>
      <div className="description">
        <p>Cool T-Shirt</p>
        <p>This is a great T-shirt for casual wear. Perfect for all occasions!</p>
      </div>
      <div className="price">
        <p>$19.99</p>
      </div>
      <div className="cb">
      <div className="btn">
        <button className="quantity-btn" onClick={handleDecrease}>-</button>
        <span className="quantity">{quantity}</span>
        <button className="quantity-btn" onClick={handleIncrease}>+</button>
      </div>
      <div className="add-to-cart">
        <button>Add to Cart</button>
      </div>
      </div>
    </div>
    </div>
  );
}
