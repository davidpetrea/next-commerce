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
import {
  UserCartItem,
  combineCartItems,
  getCartItemsByGuest,
  getCartItemsByUser,
} from "@lib/supabase/client";
import { showErrorToast } from "@components/common/toasts/ErrorToast";

const initialCart: CartState = {
  items: [],
  isOpen: false,
  sessionId: undefined,
  promoCode: {
    code: undefined,
    value: undefined,
  },
};

export const CartContext = createContext<CartState>(initialCart);
export const CartDispatchContext = createContext<Dispatch<CartAction>>(
  () => null
);

type CartState = {
  items: UserCartItem[];
  isOpen: boolean;
  sessionId?: string;
  promoCode: {
    code?: string;
    value?: number;
  };
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
      //save promo code in cookies, expires in 7 days
      Cookies.set("promoCode", JSON.stringify(action.payload), {
        expires: 7,
      });
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
    const getSessionCart = async () => {
      const { data } = await supabase.auth.getSession();

      if (data.session) {
        //Combine guest cart items with user items if logged in
        const sessionId = Cookies.get("sessionId");
        if (sessionId) {
          try {
            await combineCartItems({ userId: data.session.user.id, sessionId });
          } catch (err) {
            if (err instanceof Error) {
              showErrorToast(err.message);
            }
          }
          //delete sessionId cookie
          Cookies.remove("sessionId");
        }

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
          Cookies.set("sessionId", newSessionId, {
            expires: 30,
          });
          dispatch({ type: "setSessionId", payload: newSessionId });
        } else {
          //set sessionId in state
          dispatch({ type: "setSessionId", payload: sessionId });
          //get session from db and set cart items
          const cartItems = await getCartItemsByGuest({
            sessionId,
          });

          dispatch({ type: "setItems", payload: cartItems! });
        }
      }

      //Set promo code
      const promoCode = Cookies.get("promoCode");
      if (promoCode) {
        dispatch({ type: "setPromoCode", payload: JSON.parse(promoCode) });
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
