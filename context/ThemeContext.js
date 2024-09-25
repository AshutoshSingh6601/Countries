import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('Theme')))
  return (
    <ThemeContext.Provider value={[darkMode, setDarkMode]}>
        {children}
    </ThemeContext.Provider>
  )
}
