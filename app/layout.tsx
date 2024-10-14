import type { Metadata } from "next";
import {  Nunito } from "next/font/google";
import "./globals.css";
import{ Navbar }from "@/app/components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";

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
        <Navbar /> 
       <RegisterModal />
       
        {children}
        </body>
    </html>
  );
}
