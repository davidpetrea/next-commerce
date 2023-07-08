import React from "react";

import toast from "react-hot-toast";
import { XIcon } from "@assets/SvgComponents";

const ErrorToast = ({ msg, toastId }: { msg: string; toastId: string }) => (
  <div className="flex font-bold justify-between w-full md:min-w-[18rem] max-w-md gap-2 p-2 text-sm border rounded-md text-amaranth bg-surface-dp01 border-amaranth">
    {msg}
    <button
      type="button"
      className="self-start"
      onClick={() => toast.remove(toastId)}
    >
      <XIcon className="w-5 h-5 fill-amaranth" />
    </button>
  </div>
);

export const showErrorToast = (msg: string) => {
  toast.custom((t) => <ErrorToast msg={msg} toastId={t.id} />, {
    duration: 2000,
  });
};

export default ErrorToast;
