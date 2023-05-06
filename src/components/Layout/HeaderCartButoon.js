import React from 'react';
import classes from './HeaderCartButton.module.css';
import 'font-awesome/css/font-awesome.min.css';

function HeaderCartButoon() {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <i className='fa fa-shopping-cart'></i>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  )
}

export default HeaderCartButoon;