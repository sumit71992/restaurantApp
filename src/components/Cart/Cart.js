import Button from "../UI/Button";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Shushi", amount: 6, price: 43.89 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>43.89</span>
      </div>
      <div className={classes.actions}>
        <span className={classes.close}>
          <Button button={"Close"} />
        </span>
        <span className={classes.order}>
          <Button button={"Order"}/>
        </span>
      </div>
    </Modal>
  );
};

export default Cart;
