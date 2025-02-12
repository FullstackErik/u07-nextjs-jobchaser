"use client"

import ThemeContextProvider from "@/context/ThemeContext"
import Header from "./Header"


export default function Providers ({children}: {children: React.ReactNode}) { 

    return (
        <ThemeContextProvider>
                <Header />
                {children}
        </ThemeContextProvider>
    )
}