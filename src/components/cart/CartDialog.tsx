"use client";
import { MinusIcon, PlusIcon, XIcon } from "@assets/SvgComponents";
import { useCart, useCartDispatch } from "@components/context/CartContext";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import CartItem from "./CartItem";
import Link from "next/link";
import { TextField } from "@mui/material";
import PromoForm from "./PromoForm";

const CartDialog = () => {
  const { isOpen, items } = useCart();
  const dispatch = useCartDispatch();

  const [showPromoInput, setShowPromoInput] = useState(false);

  const handlePromoToggle = () => {
    setShowPromoInput((prev) => !prev);
  };

  const handleClose = () => dispatch({ type: "closeCart" });

  const totalPrice = items.reduce(
    (acc: number, curr) => acc + curr.total_price!,
    0
  );

  //TODO: Promo code logic

  return (
    <Transition
      show={isOpen}
      enter="transition ease-in-out duration-300 transform"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in duration-200 transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
      as={Fragment}
    >
      <Dialog onClose={handleClose} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 top-[68px] bg-black/30" />
        {/* Full-screen container to center the panel */}
        <div className="fixed right-0 top-[68px] h-screen w-[100dvw] md:w-[450px]">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="h-full bg-surface-dp01 shadow-dp04">
            <div className="flex flex-col justify-between h-full ">
              {/* Shopping cart header */}
              <div className="flex justify-between items-center bg-surface-dp03 w-full p-2">
                <div className="font-semibold">
                  Shopping cart{" "}
                  {items.length > 0 &&
                    `(${items.length} ${items.length > 1 ? "items" : "item"})`}
                </div>
                <button onClick={handleClose} className="p-3">
                  <XIcon className="w-5 h-5 fill-violet-800" />
                </button>
              </div>
              {/* Items list */}
              {items.length > 0 ? (
                <div className="flex flex-col gap-2 grow-[2] overflow-y-auto p-4">
                  {items.map((item) => (
                    <CartItem key={item.cart_item_id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <div className="text-center text-slate-400">
                    Your cart is empty.
                  </div>
                  <Link
                    href="/"
                    className="p-2 bg-purple-800 font-semibold rounded-lg"
                    onClick={() => dispatch({ type: "closeCart" })}
                  >
                    Browse store
                  </Link>
                </div>
              )}
              {/* Total and checkout */}
              <div className="mb-[68px] border-t-[0.5px] border-slate-600">
                <div className="p-4 flex justify-between items-center">
                  <div className="text-sm text-slate-400">Item(s)</div>
                  <div className="font-bold">${totalPrice}</div>
                </div>
                <div className="p-4 border-y-[0.5px] border-slate-600">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-semibold">
                      Apply promo code
                    </div>
                    <button onClick={handlePromoToggle} className="font-bold">
                      {showPromoInput ? (
                        <MinusIcon className="w-6 h-6" />
                      ) : (
                        <PlusIcon className="w-6 h-6" />
                      )}
                    </button>
                  </div>
                  <div
                    className={`${
                      showPromoInput ? "max-h-[120px]" : "max-h-0"
                    } overflow-hidden transition-all duration-300 ease-linear`}
                  >
                    <PromoForm />
                  </div>
                </div>

                <div className="p-4 flex justify-between items-center">
                  <div className="text-sm text-slate-400">Subtotal</div>
                  <div className="font-bold">${totalPrice}</div>
                </div>
                <div className="p-4">
                  <button className="bg-purple-600 text-sm font-semibold p-4 active:brightness-75 hover:bg-purple-700 transition duration-100 ease-in-out w-full rounded-md">
                    Secure checkout
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CartDialog;
