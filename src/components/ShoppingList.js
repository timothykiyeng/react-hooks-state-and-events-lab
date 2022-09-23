import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

const [selectedCategory, setSelectedCategory] = useState("Filter by category")

console.log(selectedCategory, setSelectedCategory)

const displayTheItems = items.filter((item) => {
  if (selectedCategory === "Filter by category")
  return true;
  
return item.category === selectedCategory;
  

})



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayTheItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
