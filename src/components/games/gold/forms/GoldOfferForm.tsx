"use client";
import TextField from "@components/ui/TextField";
import { useCart, useCartDispatch } from "@components/context/CartContext";
import useAddUserCartItemMutation from "@components/mutations/useAddUserCartItemMutation";
import { OfferExtended } from "@lib/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { showSuccessToast } from "@components/common/toasts/SuccessToast";
import { showErrorToast } from "@components/common/toasts/ErrorToast";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";

interface FormValues {
  amount: string;
  character?: string;
}

const GoldOfferForm = ({
  offer,
  handleClose,
}: {
  offer: OfferExtended;
  handleClose: () => void;
}) => {
  const supabase = createClientComponentClient();

  const { sessionId } = useCart();
  const dispatch = useCartDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      amount: offer?.minimum_amount?.toString() ?? offer?.unit?.toString(),
    },
  });

  const { mutate, isLoading } = useAddUserCartItemMutation();

  const amount = watch("amount");

  const totalPrice = ((+amount / +offer?.unit!) * +offer?.price!).toFixed(2);

  //react hook form
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { data: auth } = await supabase.auth.getSession();

    let newSessionId;
    if (!sessionId) {
      newSessionId = uuidv4();

      dispatch({ type: "setSessionId", payload: newSessionId });

      Cookies.set("sessionId", newSessionId, {
        expires: 30,
      });
    }

    const itemFields = auth.session
      ? {
          userId: auth.session.user.id,
          productId: offer.product_id,
          offerId: offer.offer_id,
          sellerId: offer.user_id,
          quantity: +data.amount,
          price: +totalPrice,
          meta: {
            character: data.character ?? undefined,
          },
        }
      : {
          sessionId: sessionId ? sessionId : newSessionId!,
          productId: offer.product_id,
          offerId: offer.offer_id,
          sellerId: offer.user_id,
          quantity: +data.amount,
          price: +totalPrice,
          meta: {
            character: data.character ?? undefined,
          },
        };

    //auth add to cart
    mutate(itemFields, {
      onSuccess: (data) => {
        //Add item to items[], close offer dialog and open cart
        handleClose();
        dispatch({ type: "add", payload: data[0] });
        dispatch({ type: "openCart" });
        showSuccessToast("Item added to cart!");
      },
      onError: (error) => {
        if (error instanceof Error) {
          showErrorToast(error.message);
        }
      },
    });
  };

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
              value: offer?.minimum_amount ?? offer?.unit!,
              message: `Minimum amount is ${
                offer?.minimum_amount
                  ? offer?.minimum_amount?.toLocaleString("en-US")
                  : offer?.unit?.toLocaleString("en-US")
              }.`,
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
      <div className="font-extrabold text-3xl">${totalPrice}</div>

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
