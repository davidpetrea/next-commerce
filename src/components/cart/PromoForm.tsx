import { PromoCodeIcon } from "@assets/SvgComponents";
import TextField from "@components/common/TextField";

import React from "react";
import { useForm } from "react-hook-form";

interface FormValues {
  code: string;
}

const PromoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 m-1">
        <TextField
          id="code"
          inputProps={{
            ...register("code", {
              max: {
                value: 32,
                message: "Invalid promo code.",
              },
            }),
          }}
          placeholder="Promo code"
          leftIcon={<PromoCodeIcon className="w-6 h-6 fill-slate-600" />}
        />

        <button className="bg-neutral-800 border-[0.5px] border-purple-700 rounded-md text-sm font-semibold px-4 p-2 max-h-min">
          Apply
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
