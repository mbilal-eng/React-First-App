import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Counter from "./Counter";
import User from "./User";

const Main = () => {
  const [products, setProducts]  = useState( [
    {
      id: 1,
      name: "Iphone 14",
      price: 120000,
    },
    {
      id: 2,
      name: "Samsung S23",
      price: 100000,
    },
    {
      id: 3,
      name: "Oneplus 11R",
      price: 45000,
    },
  ]);

  const handleAddProduct = () => {
    // Logic to add a new product
    console.log("Add Product button clicked");
    const newProduct = {
      id: products.length + 1,
      name: `New Product ${products.length + 1}`,
      price: Math.floor(Math.random() * 100000) + 1000,
    };
    // products.push(newProduct); // Wrong way to update state
    // state want to completely change the refernce if the refernce is same react will not re render the component.

    setProducts([...products, newProduct]); // Correct way to update state
    // setProducts(products.concat(newProduct)); // Another correct way to update state
    // console.log(products.length); // This will still show the old length due to state being asynchronous
    // To see the updated products, use useEffect or check in the next render
    console.log(products);
  }

  return (
    <div>
      <Counter />
      <User />
      <h1>Products</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button
      onClick={handleAddProduct}
        style={{
          background: "purple",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          margin: "20px",
        }}
      >
        Add Product
      </button>
    </div>
  );
};

export default Main;
