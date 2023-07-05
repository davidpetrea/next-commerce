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
  useState,
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

type CartAction =
  | {
      type: "add";
      payload: any;
    }
  | {
      type: "setSessionId";
      payload: any;
    };

const cartReducer: Reducer<CartState, CartAction> = (state, action) => {
  switch (action.type) {
    case "add": {
      return {
        ...state,
        items: [...state.items, "item"],
      };
    }
    case "setSessionId": {
      return {
        ...state,
        sessionId: action.payload,
      };
    }
    default: {
      throw Error("Unknown action: " + action);
    }
  }

  return state;
};

export function CartProvider({ children }: { children: JSX.Element }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  //Supabase auth session

  const { auth } = createClientComponentClient();
  //Cart query that depends on session?

  useEffect(() => {
    console.log("This should run once.");
    const getSessionCart = async () => {
      const { data } = await auth.getSession();

      if (data.session) {
        console.log("session found, setting it...");

        //delete sessionId cookie
        Cookies.remove("sessionId");
        //get cart info from db
      } else {
        console.log("no session found, getting cookies");
        const sessionId = Cookies.get("sessionId");

        //If no cookie found, generate new uuid and insert in db
        if (!sessionId) {
          const newSessionId = uuidv4();
          Cookies.set("sessionId", newSessionId);
          dispatch({ type: "setSessionId", payload: newSessionId });
        } else {
          console.log("found cookie!", sessionId);
          //set sessionId in state
          dispatch({ type: "setSessionId", payload: sessionId });
        }
      }
    };

    getSessionCart();
  }, [auth]);

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
