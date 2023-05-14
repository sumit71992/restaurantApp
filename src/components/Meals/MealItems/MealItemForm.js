import { useContext } from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../store/cartContext";

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  const addItemToCart = (event)=>{
    //update cartContext.item
    event.preventDefault();
    const quantity = document.getElementById("amount" + props.id).value;
    cartCtx.addItem({...props.item, quantity:quantity});
  }
  return (
    <form className={classes.form}>
      <Input
        label={"Amount"}
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button onClick={addItemToCart}>+ Add</Button>
    </form>
  );
};

export default MealItemForm;
