import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getRandomColor } from '../helpers';

const StyledColorBarDiv = styled.div`
    content: '';
    display: flex;
    height: 10px;
    width: 20rem;
    margin: 1.3rem;
    justify-items: center;
    border-radius: 1rem;
    transition: background 2s ease-in-out;
    background: ${props => props.color};
`;

function ColorBar() {
    const [color, setColor] = useState('#ff00bf');

    useEffect(() => {
        const colorInterval = setInterval(() => {
            const nextColor = getRandomColor(color);
            setColor(nextColor);
        }, 2000);
        return () => clearInterval(colorInterval);
    }, []);

    return <StyledColorBarDiv color={color} />;
}

export default ColorBar;
