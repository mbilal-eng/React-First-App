import React from "react";

const ProductCard = ({product}) => {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
        width: "300px",
      }}
    >
      <h2>{product.name}</h2>
      <h3>Price: {product.price}</h3>
      <button
        style={{
          padding: "10px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
