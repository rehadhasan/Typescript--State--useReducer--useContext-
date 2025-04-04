import React, {createContext} from "react";
import {theme} from "../../utils/Theme";

type ThemeContextProviderProps = {
    children: React.ReactNode;
}

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({children}:ThemeContextProviderProps)=>{
    return <ThemeContext value={theme}>{children}</ThemeContext>
}

export default ThemeContextProvider;