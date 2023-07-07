import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import React from "react";
import type { Database } from "@lib/supabase/schema";
import Image from "next/image";
import UserHeaderMenu from "./UserHeaderMenu";
import { ArrowDown } from "@assets/SvgComponents";
import CartButton from "../cart/CartButton";

export const revalidate = 0;

export default async function Header() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data } = await supabase.auth.getSession();

  //if not logged in, display sign up/sign in buttons
  let authPanel;
  if (!data.session) {
    authPanel = (
      <div className="flex gap-4 items-center">
        <Link href="/signup">
          <button className="text-gray-300 text-sm md:text-base whitespace-nowrap hover:text-gray-200 transition-all hover:scale-105">
            Sign up
          </button>
        </Link>
        <Link href="/login">
          <button className="transition-all duration-150 hover:scale-105 group">
            <span className="bg-gray-300 text-sm md:text-base group-hover:bg-gray-100 px-8 py-2 rounded-full transition-color duration-150 text-black font-semibold">
              Log in
            </span>
          </button>
        </Link>
      </div>
    );
  }
  if (data.session) {
    const { data: currentUser } = await supabase
      .from("users")
      .select("*")
      .eq("id", data.session?.user.id);

    authPanel = (
      <div className="flex items-center gap-4">
        {currentUser && currentUser?.length > 0 && (
          <>
            <UserHeaderMenu>
              <div className="flex items-center gap-2">
                <div className="hidden md:inline-block">
                  {currentUser[0].name}
                </div>
                <span className="rounded-full transition-color duration-150 text-black font-semibold">
                  <Image
                    src={currentUser[0].avatar_url}
                    className="rounded-full shadow-dp04"
                    width={40}
                    height={40}
                    alt="Avatar"
                  />
                </span>
                <ArrowDown className="w-2 h-2 fill-gray-100" />
              </div>
            </UserHeaderMenu>
          </>
        )}
      </div>
    );
  }

  return (
    <header
      className={`bg-neutral-900 px-4 md:px-8 ${
        data.session ? "py-3" : "py-4"
      } flex justify-between items-center gap-4 sticky top-0 z-10 h-[68px]`}
    >
      <Link href="/">
        <span className="font-bold">Next C.</span>
      </Link>
      <div className="flex items-center gap-4">
        {authPanel}
        <CartButton />
      </div>
    </header>
  );
}
