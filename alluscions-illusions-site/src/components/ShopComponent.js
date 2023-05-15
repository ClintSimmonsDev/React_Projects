//import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartComponent from './CartComponent';

function ShopComponent(props) {

  const { paintings, addToCart} = props;
  const location = useLocation();
  function handleAddToCart(item) {
  addToCart(item);
  }
  return (
    <div className="painting-grid">
      <div id="shop-header">
        <h2>Shop</h2>
        <p>Click on a painting to add it to your cart.</p>
      </div>
      {paintings.map((painting) => {
        const anchorId = `painting-${painting.id}`;
        return (
          <Link to={`${location.pathname}#${anchorId}`} key={painting.id}>
            <div
              id={anchorId}
              className="painting"
              onClick={() => handleAddToCart(painting)}
            >
              <img
                className="shop-preview"
                src={painting.image}
                alt={painting.title}
              />
              <h3>{painting.title}</h3>
              <p className="painting-price">${painting.price}.00</p>
            </div>
          </Link>
        );
      })}
      <CartComponent paintings = {paintings} />
    </div>
  );
}

export default ShopComponent;
