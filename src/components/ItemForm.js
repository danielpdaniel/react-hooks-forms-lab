import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm({ onItemFormSubmit }) {
// const [itemName, setItemName] = useState("");
// const [itemCategory, setItemCategory] = useState("Produce");
const itemName = "";
const itemCategory = "Produce";


  const [newItem, setNewItem] = useState({
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: itemName,
    category: itemCategory,
  });

  function handleTextChange(event){
    // console.log(event.target.value)
    // setItemName(event.target.value)
    // console.log(newItem)
    setNewItem({...newItem, name: event.target.value,})
  }
  function handleDropDownChange(event){
    // console.log(event.target.value)
    // console.log(newItem)
    setNewItem({...newItem, category: event.target.value,})
  }

  function handleSubmit(event){
    event.preventDefault();
    // setNewItem({
    //   id: uuid(),
    //   name: itemName,
    //   category: itemCategory,
    // })
    onItemFormSubmit(newItem)
    // console.log(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleTextChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleDropDownChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
