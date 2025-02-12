"use client"

import ThemeContextProvider from "@/context/ThemeContext"
import ThemeWrapper from "./ThemeWrapper"
import Header from "./Header"


export default function Providers ({children}: {children: React.ReactNode}) { 

    return (
        <ThemeContextProvider>
            <ThemeWrapper>
                <Header />
                {children}
            </ThemeWrapper>
        </ThemeContextProvider>
    )
}