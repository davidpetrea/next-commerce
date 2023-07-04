import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
