import React, { useState } from 'react';

function CartComponent(props) {
const [cart] = useState([]);
const { Checkout, removeFromCart } = props;
function handleremoveFromCart(item) {
removeFromCart(item);
}
function handleCheckout(item) {
Checkout(item);
}
 return (
      <div className="cart">
        <h3>Cart</h3>
        {cart.length === 0 ? <p>Your cart is empty.</p> : null}
        {cart.map(painting => (
          <div key={painting.id} className="cart-item">
            <h4>{painting.title}</h4>
            <img className="cart-thumb" src={painting.image} alt={painting.title} />
            <p className="cart-item-price">${painting.price}.00</p>
            <button onClick={() => handleremoveFromCart(painting)}>Remove</button>
          </div>
        ))}
        {cart.length > 0 ? (
          <>
            <br/><br/><br/>
            <p>Total: ${cart.reduce((total, painting) => total + painting.price, 0)}.00</p>
            <button type="remove-item-button" onClick={handleCheckout}>Checkout</button>
          </>
        ) : null}
      </div>
);
};

export default CartComponent;

