import React, { createContext } from 'react'

import { getRandomValueFromArray } from '../../helpers/utils';
import ACCENT_COLORS from '../../helpers/colors';

const COLOR_TIMEOUT = 2000; // ms
export const ColorContext = createContext()

const ColorProvider = ({ children }) => {
    const [accentColor, setAccentColor] = React.useState(getRandomValueFromArray(ACCENT_COLORS, 'lightblue'))

    React.useEffect(() => {
        const colorTimeout = setTimeout(() => {
            const newColor = getRandomValueFromArray(ACCENT_COLORS, accentColor)
            setAccentColor(newColor);
        }, COLOR_TIMEOUT);

        return () => {
            clearTimeout(colorTimeout);
        }
    }, [accentColor, getRandomValueFromArray])

    return (
        <ColorContext.Provider value={accentColor}>
            {children}
        </ColorContext.Provider>
    )
}

export default ColorProvider
