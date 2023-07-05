"use client";

import { useCart, useCartDispatch } from "@components/context/CartContext";
import React from "react";

const CartButton = () => {
  const { items } = useCart();
  const dispatch = useCartDispatch();

  return (
    <div>
      CartButton
      <div>Items: {items}</div>
      <button onClick={() => dispatch({ type: "add", payload: {} })}>
        Add
      </button>
    </div>
  );
};

export default CartButton;
