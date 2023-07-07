import { validatePromoCode } from "@lib/supabase/client";
import { useMutation } from "@tanstack/react-query";

const useValidatePromoCodeMutation = () => {
  const mutation = useMutation({
    mutationFn: ({ code }: { code: string }) => validatePromoCode({ code }),
  });

  return mutation;
};

export default useValidatePromoCodeMutation;
