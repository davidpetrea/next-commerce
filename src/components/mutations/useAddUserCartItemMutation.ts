import {
  AddItemToCartAuthParams,
  AddItemToCartGuestParams,
  addItemToCart,
} from "@lib/supabase/client";
import { useMutation } from "@tanstack/react-query";

const useAddUserCartItemMutation = () => {
  const mutation = useMutation({
    mutationFn: (data: AddItemToCartAuthParams | AddItemToCartGuestParams) =>
      addItemToCart(data),
  });

  return mutation;
};

export default useAddUserCartItemMutation;
