"use client";
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@lib/supabase/schema";
import { useRouter } from "next/navigation";

const UserHeaderMenu = ({ children }: { children: JSX.Element }) => {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center">{children}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute w-32 text-center right-0 mt-2 origin-top-right bg-gray-100 rounded-md shadow-dp04 text-black">
          <div>
            <Menu.Item>
              {({ active }) => (
                <Link href="/profile">
                  <div
                    className={`p-2 hover:bg-gray-300 rounded-t-md ${
                      active ? "bg-gray-300" : "bg-gray-100"
                    }`}
                  >
                    Profile
                  </div>
                </Link>
              )}
            </Menu.Item>
          </div>
          <div>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`p-2 hover:bg-gray-300 hover:cursor-pointer rounded-b-md w-full ${
                    active ? "bg-gray-300" : "bg-gray-100"
                  }`}
                  onClick={handleSignOut}
                >
                  Log out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserHeaderMenu;
