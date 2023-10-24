import React from 'react'
import { useContext } from 'react'
import { ModeContext } from '../../context-api/ModeContext'

const Header = () => {
    const [isDarkMode, modeToggler] = useContext(ModeContext)
    return (
        <>
            <button onClick={modeToggler}>{isDarkMode ? '☀' : '🌙'}</button>
            <div>Header</div>
        </>
    )
}

export default Header