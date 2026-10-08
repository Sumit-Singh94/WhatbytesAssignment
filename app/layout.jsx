import "./globals.css";
import { StoreProvider } from "@/components/StoreProvider";

export const metadata = {
  title: "WhatBytes Store",
  description: "Product listing and shopping cart application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}