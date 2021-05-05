import classes from "*.module.css";
import React, { useContext, useState, useEffect } from "react";
import { CartData } from "../ProductList/ProductList";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStyles } from "./style";

const CartItems = () => {
  const classes = useStyles();

  const cartContext = useContext(CartData);

  return (
    <div className={classes.root}>
      <div className={classes.Title}>
        <div>Cart Items</div>
        <div className={classes.cartIcon}>
          <AddShoppingCartIcon />
          {cartContext ? `(${cartContext.length})` : " "}
        </div>
      </div>
      {cartContext
        ? cartContext.map((e) => (
            <p className={classes.bolds}>
              {e.productName} x 1 = {e.productPrice}{" "}
            </p>
          ))
        : " "}
      <p className={classes.bold}></p>
      {!cartContext ? (
        <p className={classes.empty}>No items in the cart</p>
      ) : (
        " "
      )}
    </div>
  );
};

export default CartItems;
