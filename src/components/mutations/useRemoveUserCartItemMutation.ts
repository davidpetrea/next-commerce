import { removeItemFromCartAuth } from "@lib/supabase/client";
import { useMutation } from "@tanstack/react-query";

const useRemoveUserCartItemMutation = () => {
  const mutation = useMutation({
    mutationFn: ({ cartItemId }: { cartItemId: string }) =>
      removeItemFromCartAuth({ cartItemId }),
  });

  return mutation;
};

export default useRemoveUserCartItemMutation;
