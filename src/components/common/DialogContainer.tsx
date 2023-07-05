"use client";
import React, { Fragment } from "react";
import Dialog from "@components/common/Dialog";
import { XIcon } from "@assets/SvgComponents";
import { Transition } from "@headlessui/react";

const DialogContainer = ({
  isOpen,
  handleClose,
  children,
}: {
  isOpen: boolean;
  handleClose: () => void;
  children: JSX.Element;
}) => {
  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog onClose={handleClose} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 overflow-y-auto">
          {/* Large view close button */}
          <button
            onClick={handleClose}
            className="fixed md:hidden top-4 right-4 p-3 bg-neutral-800 border border-[#9195d64d] rounded-md hover:bg-neutral-900 transition duration-100 ease-linear"
          >
            <XIcon className="w-4 h-4 fill-violet-800" />
          </button>
          {/* The actual dialog panel  */}
          <Dialog.Panel className="flex w-[95%] max-w-[1200px] mx-auto bg-surface-dp01 rounded-lg shadow-dp04 my-8 md:relative">
            {children}
            <button
              onClick={handleClose}
              className="hidden md:inline-block md:absolute -top-4 -right-4 p-3 bg-neutral-800 border border-[#9195d64d] rounded-md hover:bg-neutral-900 transition duration-100 ease-linear"
            >
              <XIcon className="w-4 h-4 fill-violet-800" />
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DialogContainer;
