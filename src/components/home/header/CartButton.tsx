"use client";

import { useCart, useCartDispatch } from "@components/context/CartContext";
import React from "react";

const CartButton = () => {
  const { items, sessionId } = useCart();
  const dispatch = useCartDispatch();

  return (
    <div>
      CartButton
      <div>Items: {items}</div>
      <div>sessionId: {sessionId}</div>
      <button onClick={() => dispatch({ type: "add", payload: {} })}>
        Add
      </button>
    </div>
  );
};

export default CartButton;
