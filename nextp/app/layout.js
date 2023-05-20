"use client";

import "./globals.css";
import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "use-shopping-cart";
import { Providers } from "./provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
 <head /> will contain the components returned by the nearest parent
 head.jsx. Find out more at https://beta.nextjs.org/docs/apireference/file-conventions/head
 */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossOrigin="anonymous"
      />
      <head />

      <body>
        <Providers>
          <CartProvider
            // Enables local storage
            shouldPersist={true}
          >
            <SessionProvider>
              <Navbar />
              {children}
            </SessionProvider>
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
