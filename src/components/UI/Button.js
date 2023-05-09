import './Button.module.css';
const Button = (props) =>{
  return (
    <button onClick={()=>{props.onHideCart();}}>{props.button}</button>
  )
}

export default Button;