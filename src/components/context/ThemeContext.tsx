import { Children, createContext } from "react";
import { theme } from "./Theme";

interface ThemeContextProps {
    children : React.ReactNode
}

const ThemeContext = createContext(theme)

export const ThemeContexProvider = ({children} : ThemeContextProps) => {
    return <ThemeContext.Provider value={theme}> {children} </ThemeContext.Provider>
}