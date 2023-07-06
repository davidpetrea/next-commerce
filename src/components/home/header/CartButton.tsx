"use client";

import { useCart, useCartDispatch } from "@components/context/CartContext";
import React from "react";

const CartButton = () => {
  const { items, sessionId } = useCart();
  const dispatch = useCartDispatch();

  return (
    <div>
      CartButton
      <div>Items: {JSON.stringify(items)}</div>
      <div>sessionId: {sessionId}</div>
    </div>
  );
};

export default CartButton;
