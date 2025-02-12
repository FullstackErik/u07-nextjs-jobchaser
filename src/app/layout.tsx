"use client";

import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from "./_components/Header";
import ThemeContextProvider from "@/context/ThemeContext";
import ThemeWrapper from "./_components/ThemeWrapper";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <ThemeWrapper>
            <Header />
            {children}
          </ThemeWrapper>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
