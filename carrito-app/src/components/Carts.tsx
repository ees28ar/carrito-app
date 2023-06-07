import React from 'react';
import "./Carts.css";

const cartIconUrl = 'https://i.postimg.cc/ZB7QJY93/pngwing.png';

type CartProps = {
  cartTotal: number;
};

const Cart = ({ cartTotal }: CartProps) => {
  return (
    <div className="cart">
      <img src={cartIconUrl} alt="Cart" className="cart-icon" />
      <span className="cart-total">${cartTotal}</span>
    </div>
  );
};

export default Cart;

