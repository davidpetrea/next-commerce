import { EmotionCacheProvider } from "@components/context/EmotionCacheProvider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Commerce ",
  description: "The Next E-commerce experience.",
};

export default async function HomeLayout({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EmotionCacheProvider>{children}</EmotionCacheProvider>
      </body>
    </html>
  );
}
