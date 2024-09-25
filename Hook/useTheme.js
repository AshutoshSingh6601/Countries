import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const useTheme = () => useContext(ThemeContext)


// export const useTheme = () => {
//     const [mode, setMode] = useContext(ThemeContext)
//   return [mode, setMode]
// }