import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";

export const ModeContext = createContext(false)

const ModeContextProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('isDark')))

    useEffect(() => {
        localStorage.setItem('isDark', JSON.stringify(isDarkMode))
    }, [isDarkMode])

    const modeToggler = () => {
        setIsDarkMode(!isDarkMode)
    }
    return (
        <ModeContext.Provider value={[isDarkMode, modeToggler]}>
            <div className={isDarkMode ? "darkModeContainer" : ""}>
                {children}
            </div>
        </ModeContext.Provider>
    )
}

export default ModeContextProvider