import React from 'react';
import "./Carts.css";

import cartIcon from '../assets/img/cart-icon.png'

type CartProps = {
  cartTotal: number;
};

const Cart = ({ cartTotal }: CartProps) => {
  return (
    <div className="cart">
      <img src={cartIcon} alt="Cart" className="cart-icon" />
      <span className="cart-total">${cartTotal}</span>
    </div>
  );
};

export default Cart;