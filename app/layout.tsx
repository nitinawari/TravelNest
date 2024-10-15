import type { Metadata } from "next";
import {  Nunito } from "next/font/google";
import "./globals.css";
import{ Navbar }from "@/app/components/navbar/Navbar";
import RegisterModal from "@/app/components/modals/RegisterModal";
import ToastProvider from "@/app/providers/ToastProvider";

const font = Nunito({subsets:["latin"]})

export const metadata: Metadata = {
  title: "TravelNest",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={font.className}>
        <ToastProvider />
        <Navbar /> 
       <RegisterModal />
       
        {children}
        </body>
    </html>
  );
}
