import {
  Dispatch,
  Reducer,
  createContext,
  useContext,
  useReducer,
} from "react";

const initialCart: CartState = {
  items: [],
  sessionId: undefined,
};

export const CartContext = createContext<CartState>(initialCart);
export const CartDispatchContext = createContext<Dispatch<CartAction>>(
  () => null
);

type CartState = {
  items: string[];
  sessionId: string | undefined;
};

type CartAction = {
  type: string;
  payload: {};
};

const cartReducer: Reducer<CartState, CartAction> = (state, action) => {
  switch (action.type) {
    case "add": {
      return {
        ...state,
        items: [...state.items, "item"],
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }

  return state;
};

export function CartProvider({ children }: { children: JSX.Element }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}
