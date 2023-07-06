"use client";

import { CartIcon } from "@assets/SvgComponents";
import { useCart, useCartDispatch } from "@components/context/CartContext";
import React from "react";
import CartDialog from "./CartDialog";

const CartButton = () => {
  const { items, sessionId, isOpen } = useCart();
  const dispatch = useCartDispatch();

  return (
    <>
      <button
        className="bg-purple-900 rounded-lg p-2 flex items-center gap-2"
        onClick={() => dispatch({ type: "openCart" })}
      >
        <div>
          <CartIcon className="w-5 h-5 fill-slate-50" />
        </div>
        {items.length > 0 && <div>{items.length}</div>}
      </button>
      {isOpen && <CartDialog />}
    </>
  );
};

export default CartButton;
