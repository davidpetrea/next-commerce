import React from "react";

import toast from "react-hot-toast";
import { XIcon } from "@assets/SvgComponents";

const SuccessToast = ({ msg, toastId }: { msg: string; toastId: string }) => (
  <div className="flex justify-between max-w-md gap-2 p-2 text-sm border rounded-md text-green bg-surface-dp01 border-green w-full md:min-w-[18rem] font-bold">
    {msg}
    <button
      type="button"
      className="self-start"
      onClick={() => toast.remove(toastId)}
    >
      <XIcon className="w-5 h-5 fill-green" />
    </button>
  </div>
);

export const showSuccessToast = (msg: string) => {
  toast.custom((t) => <SuccessToast msg={msg} toastId={t.id} />, {
    duration: 2000,
  });
};

export default SuccessToast;
