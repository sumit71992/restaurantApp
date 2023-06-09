import MealItemForm from "./MealItemForm";
import classes from "./MealItems.module.css";

const MealItems = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>$ {props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={props.id} item={props}/>
      </div>
    </li>
  );
};

export default MealItems;
