import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cartContext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  let totalAmount = 0;

  cartCtx.items.forEach((item) => {
    totalAmount += item.price * item.quantity;
  });

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>
          {item.name} {item.price} {item.quantity}
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onHide={props.onHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.close} onClick={props.onHide}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
