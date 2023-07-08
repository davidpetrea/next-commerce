import "../globals.css";

export const metadata = {
  title: "Login into Next Commerce",
  description: "sign in into your account",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
