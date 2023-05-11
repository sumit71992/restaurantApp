import { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    if (items.length > 0) {
      items.map((el, i) => {
        if (el.id !== item.id) {
          return setItems([...items,item]);
        } else {
          console.log("index",i);
          const obj = { ...items[i] };
          obj.quantity = +obj.quantity + +item.quantity;
          items[i] = obj;
          console.log("updated",items[i]);
          return setItems(items);
        }
      });
    } else {
      return setItems([...items,item]);
    }
  };
  const removeItemHandler = (id) => {
    const arr = items.filter(el=>{
      return el.id !== id;
    })
    setItems(arr);
  };

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {console.log(items)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
