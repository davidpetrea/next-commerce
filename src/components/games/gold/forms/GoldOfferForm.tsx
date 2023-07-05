"use client";
import TextField from "@components/common/TextField";
import { OfferExtended } from "@lib/supabase";
import React from "react";

const GoldOfferForm = ({ offer }: { offer: OfferExtended }) => {
  //react hook form

  return (
    <form>
      {/* Stock */}
      <div className="text-gray-400 text-sm">
        <span className="font-bold text-white">
          {offer?.stock.toLocaleString()} GOLD{" "}
        </span>
        in stock
      </div>
      {/* If minimum amount default value  */}
      <TextField label="Amount" />
      <div className="p-2"></div>
      <TextField label="Character name" />
      <div className="p-2"></div>

      <div className="bg-white-disabled h-[0.25px]"></div>
      <div className="p-2"></div>
      {/* Price */}
      <div className="font-extrabold text-3xl">
        $
        {offer?.minimum_amount
          ? ((offer.minimum_amount / offer.unit) * offer?.price).toFixed(2)
          : offer?.price}
      </div>
      <span className="text-xs font-bold text-gray-400 uppercase">
        15 minutes guaranteed delivery time
      </span>
      <div className="p-2"></div>
      <div className="flex flex-col gap-2">
        <button
          type="submit"
          className="rounded-lg px-8 py-3 bg-gradient-to-r from-green hover:brightness-110 hover:to-seablue to-seablue text-black font-bold transition-all duration-150 ease-linear active:brightness-75 shadow-dp04 uppercase text-sm"
        >
          Add to cart
        </button>
        <button className="rounded-lg px-8 py-3 bg-gray-700 text-white font-bold hover:brightness-110 transition-all duration-150 ease-linear active:brightness-75 shadow-dp04 uppercase text-sm">
          Contact seller
        </button>
      </div>
    </form>
  );
};

export default GoldOfferForm;
