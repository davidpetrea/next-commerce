"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

import { CacheProvider } from "@emotion/react";
import { CartProvider } from "@components/context/CartContext";
import createEmotionCache from "@utils/createEmotionCache";
const clientSideEmotionCache = createEmotionCache();

export default function Providers({ children }: { children: JSX.Element }) {
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <CacheProvider value={clientSideEmotionCache}>
        <CartProvider>{children}</CartProvider>
      </CacheProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
