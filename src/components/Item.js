import React, {useState} from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(false)
  const cart = addToCart ? "in-cart" : ""
  function handleClick(){
    setAddToCart(!addToCart)
  }
  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{addToCart ? "Add To Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
