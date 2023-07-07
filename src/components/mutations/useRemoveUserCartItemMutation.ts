import { removeItemFromCartAuth } from "@lib/supabase";
import { useMutation } from "@tanstack/react-query";

const useRemoveUserCartItemMutation = () => {
  const mutation = useMutation({
    mutationFn: ({ cartItemId }: { cartItemId: string }) =>
      removeItemFromCartAuth({ cartItemId }),
  });

  return mutation;
};

export default useRemoveUserCartItemMutation;
