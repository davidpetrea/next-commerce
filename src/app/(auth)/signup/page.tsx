import { cookies } from "next/headers";
import RegisterForm from "@components/register/RegisterForm";
import { Database } from "@lib/supabase/schema";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import GoogleLoginButton from "@components/login/GoogleLoginButton";

export const metadata = {
  title: "Sign up | Next Commerce",
  description: "The Next E-Commerce experience.",
};

export default async function Register() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data } = await supabase.auth.getSession();

  if (data.session) {
    redirect("/");
  }

  return (
    <main className="min-h-screen flex flex-col gap-4 justify-center items-center p-4 md:p-24">
      <h1 className="text-3xl mb-4">
        <a href="/">Next Commerce</a>
      </h1>
      <h2 className="text-3xl mb-8 font-bold text-center">
        Sign up for free today.
      </h2>
      {/* Auth providers */}
      <div className="flex flex-col items-center gap-2 w-full max-w-[24rem]">
        <GoogleLoginButton />
      </div>
      <span className="before:table-cell after:table-cell mb-4 before:w-[42%] after:w-[42%] before:border-t before:border-green relative before:relative after:relative before:top-[0.8rem] after:top-[0.8rem] after:border-t after:border-seablue w-full max-w-[24rem] table text-center">
        or
      </span>
      <h2 className="text-lg">Sign up with your email address</h2>
      <RegisterForm />
    </main>
  );
}
