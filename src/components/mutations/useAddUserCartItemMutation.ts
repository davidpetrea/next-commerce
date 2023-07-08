import { AddItemToCartAuthParams, addItemToCartAuth } from "@lib/supabase/client";
import { useMutation } from "@tanstack/react-query";

const useAddUserCartItemMutation = () => {
  const mutation = useMutation({
    mutationFn: (data: AddItemToCartAuthParams) => addItemToCartAuth(data),
  });

  return mutation;
};

export default useAddUserCartItemMutation;
