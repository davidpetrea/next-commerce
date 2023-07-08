import { LoadingSpinner, PromoCodeIcon } from "@assets/SvgComponents";
import TextField from "@components/ui/TextField";
import { useCartDispatch } from "@components/context/CartContext";
import useValidatePromoCodeMutation from "@components/mutations/useValidatePromoCodeMutation";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
  code: string;
}

const PromoForm = ({
  setShowPromoInput,
}: {
  setShowPromoInput: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<FormValues>();

  const { mutate, isLoading } = useValidatePromoCodeMutation();

  const dispatch = useCartDispatch();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutate(
      { code: data.code },
      {
        onSuccess: (data) => {
          dispatch({
            type: "setPromoCode",
            payload: {
              code: data.code,
              value: data.value,
            },
          });
          reset();
          setShowPromoInput(false);
        },
        onError: () => {
          setError("code", {
            message: "Invalid promo code.",
          });
        },
      }
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 m-1">
        <TextField
          id="code"
          inputProps={{
            ...register("code", {
              required: {
                value: true,
                message: "Promo code can not be empty.",
              },
              maxLength: {
                value: 32,
                message: "Invalid promo code.",
              },
            }),
          }}
          placeholder="Promo code"
          leftIcon={<PromoCodeIcon className="w-6 h-6 fill-slate-600" />}
        />

        <button className="bg-neutral-800 border-[0.5px] border-purple-700 rounded-md text-sm font-semibold px-4 p-2 max-h-min">
          {isLoading ? (
            <LoadingSpinner className="w-5 h-5 fill-purple-700" />
          ) : (
            "Apply"
          )}
        </button>
      </form>
      {errors.code?.message && (
        <div className="bg-gradient-to-r from-red-500/30 to-transparent font-semibold border-l-2 border-red-500 rounded-md p-2 text-sm m-1 my-2">
          {errors.code?.message.toString()}
        </div>
      )}
    </>
  );
};

export default PromoForm;
