import { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    if (items.length > 0) {
      items.map((el,i) => {
        if (el.id !== item.id) {
          return setItems([item, ...items]);
        } else {
          return setItems(el.quantity = +el.quantity + +item.quantity);
        }
      });
    } else {
      return setItems([item, ...items]);
    }
  };
  const removeItemHandler = (id) => {};

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
