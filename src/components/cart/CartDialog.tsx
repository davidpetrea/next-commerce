"use client";
import { XIcon } from "@assets/SvgComponents";
import { useCart, useCartDispatch } from "@components/context/CartContext";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

const CartDialog = () => {
  const { isOpen, items } = useCart();
  const dispatch = useCartDispatch();

  const handleClose = () => dispatch({ type: "closeCart" });

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
        <div className="fixed right-0 top-[68px] h-screen w-[450px]">
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
              <div className="flex flex-col grow-[2] text-5xl overflow-y-auto p-4">
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
              </div>
              {/* Footer */}
              <div className="mb-[68px] border-t border-slate-50">
                <div className="flex justify-between w-full items-center">
                  <div>Items</div>
                  <div>$315</div>
                </div>
                <div className="flex justify-between w-full items-center">
                  <div>Items</div>
                  <div>$315</div>
                </div>
                <div className="flex justify-between w-full items-center">
                  <div>Items</div>
                  <div>$315</div>
                </div>
                <div className="flex justify-between w-full items-center">
                  <div>Items</div>
                  <div>$315</div>
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
