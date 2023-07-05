"use client";
import TextField from "@components/common/TextField";
import { OfferExtended } from "@lib/supabase";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
  amount: string;
  character?: string;
}

const GoldOfferForm = ({ offer }: { offer: OfferExtended }) => {
  //react hook form
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("data:", data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      amount: offer?.minimum_amount?.toString() ?? "0",
    },
  });

  const amount = watch("amount");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Stock */}
      <div className="text-gray-400 text-sm">
        <span className="font-bold text-slate-400">
          {offer?.stock.toLocaleString()} GOLD{" "}
        </span>
        in stock
      </div>
      {/* If minimum amount default value  */}
      <TextField
        id="amount"
        label="Amount"
        placeholder="Enter the gold amount..."
        inputProps={{
          ...register("amount", {
            required: "Amount is required.",
            min: {
              value: offer?.minimum_amount ?? 1,
              message: `Minimum amount is ${offer?.minimum_amount?.toLocaleString(
                "en-US"
              )}.`,
            },
            onChange(e: React.ChangeEvent<HTMLInputElement>) {
              setValue(
                "amount",
                isNaN(parseInt(e.target.value))
                  ? "0"
                  : parseInt(e.target.value).toString()
              );
            },
          }),
          maxLength: 10,
        }}
        error={errors?.amount?.message?.toString()}
      />
      <div className="p-2"></div>
      <TextField
        id="character"
        label="Character name (optional)"
        placeholder="Type your character name..."
        inputProps={{
          ...register("character", {
            maxLength: {
              value: 32,
              message: "Character name can not be longer than 32 characters.",
            },
          }),
        }}
        error={errors?.character?.message?.toString()}
      />
      <div className="p-2"></div>

      <div className="bg-white-disabled h-[0.25px]"></div>
      <div className="p-2"></div>
      {/* Price */}
      <div className="font-extrabold text-3xl">
        ${((+amount / +offer?.unit!) * +offer?.price!).toFixed(2)}
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
        {/* TODO: check auth state  */}
        <button
          type="button"
          className="rounded-lg px-8 py-3 bg-gray-700 text-white font-bold hover:brightness-110 transition-all duration-150 ease-linear active:brightness-75 shadow-dp04 uppercase text-sm"
        >
          Contact seller
        </button>
      </div>
    </form>
  );
};

export default GoldOfferForm;
