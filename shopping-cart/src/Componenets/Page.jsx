import React from 'react';
import ShoppingBag from '../Images/shopping-bag.png';

function Navbar() {
  return (
    
    <div className="container">
      <div className='nav'>
      <h1>Shopping Cart</h1>
      <img className="ShoppingBag" src={ShoppingBag} alt="" />
      <div className="ellipse">3</div>
      <div className="productQuantity">Items</div>
    </div>
    </div>
  );
}

export default  Navbar;
