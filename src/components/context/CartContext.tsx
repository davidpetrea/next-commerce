import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";

import {
  Dispatch,
  Reducer,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { UserCartItem, getCartItemsByUser } from "@lib/supabase/client";

const initialCart: CartState = {
  items: [],
  isOpen: false,
  sessionId: undefined,
};

export const CartContext = createContext<CartState>(initialCart);
export const CartDispatchContext = createContext<Dispatch<CartAction>>(
  () => null
);

type CartState = {
  items: UserCartItem[];
  isOpen: boolean;
  sessionId: string | undefined;
};

type CartAction =
  | {
      type: "add";
      payload: UserCartItem;
    }
  | {
      type: "remove";
      payload: string;
    }
  | {
      type: "setSessionId";
      payload: string;
    }
  | {
      type: "setItems";
      payload: UserCartItem[];
    }
  | {
      type: "openCart";
    }
  | {
      type: "closeCart";
    }
  | {
      type: "setPromoCode";
      payload: {
        code: string;
        value: number;
      };
    };

const cartReducer: Reducer<CartState, CartAction> = (state, action) => {
  switch (action.type) {
    case "openCart": {
      return {
        ...state,
        isOpen: true,
      };
    }
    case "closeCart": {
      return {
        ...state,
        isOpen: false,
      };
    }
    case "add": {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case "remove": {
      return {
        ...state,
        items: state.items.filter(
          (item) => item.cart_item_id !== action.payload
        ),
      };
    }
    case "setItems": {
      return {
        ...state,
        items: action.payload,
      };
    }
    case "setSessionId": {
      return {
        ...state,
        sessionId: action.payload,
      };
    }
    case "setPromoCode": {
      return {
        ...state,
        promoCode: action.payload,
      };
    }
    default: {
      throw Error("Unknown action: " + action);
    }
  }
};

export function CartProvider({ children }: { children: JSX.Element }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  //Supabase auth session

  const supabase = createClientComponentClient();

  useEffect(() => {
    console.log("This should run once.");
    const getSessionCart = async () => {
      const { data } = await supabase.auth.getSession();

      if (data.session) {
        //delete sessionId cookie
        Cookies.remove("sessionId");
        //get cart info from db
        const cartItems = await getCartItemsByUser({
          userId: data.session.user.id,
        });

        dispatch({ type: "setItems", payload: cartItems! });
      } else {
        const sessionId = Cookies.get("sessionId");

        //If no cookie found, generate new uuid and set it
        if (!sessionId) {
          const newSessionId = uuidv4();
          Cookies.set("sessionId", newSessionId);
          dispatch({ type: "setSessionId", payload: newSessionId });
        } else {
          console.log("found cookie!", sessionId);
          //set sessionId in state
          dispatch({ type: "setSessionId", payload: sessionId });
          //get session from db and set cart items
        }
      }
    };

    getSessionCart();
  }, [supabase]);

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
