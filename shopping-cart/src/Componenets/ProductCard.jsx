import React from "react";

function ProductCard({ image, title, size, cost }) {
    return (
      <div className="productCard">
        <img className="productImage" src={image} alt="" />
        <h2 className="productTitle">{title}</h2>
        <p className="productSize">{size}</p>
        <p className="productCost">{cost}</p>
        <button className="productButton">Add to Cart</button>
      </div>
    );
  }
  export default ProductCard;