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
    cartCtx.items.push(props)
  }
  return (
    <form className={classes.form}>
      <Input
        label={"Amount"}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button button={"+ Add"} onAddCart={addItemToCart}/>
    </form>
  );
};

export default MealItemForm;
