"use client";
import DefaultProvider from "@/components/DefaultProvider/DefaultProvider";
import "./globals.css";
import { Rubik } from "next/font/google";
import Header from "@/components/Header/Header";

const rubik = Rubik({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <DefaultProvider>
          <Header />

          {children}
        </DefaultProvider>
      </body>
    </html>
  );
}
