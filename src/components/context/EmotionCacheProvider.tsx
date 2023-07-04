"use client";

import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@utils/createEmotionCache";
const clientSideEmotionCache = createEmotionCache();

export const EmotionCacheProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  return (
    <CacheProvider value={clientSideEmotionCache}>{children}</CacheProvider>
  );
};
