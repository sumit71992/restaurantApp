import './Button.module.css';
const Button = (props) =>{
  return (
    <button onClick={props.onAddCart}>{props.button}</button>
  )
}

export default Button;