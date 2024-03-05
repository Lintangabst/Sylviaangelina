import type { Metadata } from "next";
import { Forum, Homemade_Apple } from "next/font/google";
import "./globals.css";

const homemadeApple = Homemade_Apple({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-homemade-apple'
});

const forum = Forum({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-forum'
});

export const metadata: Metadata = {
  title: "Happy Birthday Sylvia",
  description: "Hello dear, what is here is not much, but I made it
with love, and I wanna say this to you...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${forum.variable} ${homemadeApple.variable}`}>{children}</body>
    </html>
  );
}
