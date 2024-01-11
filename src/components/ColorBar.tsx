import { useState, useEffect } from 'react';

function ColorBar() {
    const [color, setColor] = useState('#0e753a');

    useEffect(() => {
        const colorInterval = setInterval(() => {
            const nextColor = getRandomColor(color);
            setColor(nextColor);
            document.documentElement.style.setProperty('--bar-color', color);
        }, 2000);
        return () => clearInterval(colorInterval);
    }, []);

    return (
        <div
            style={{
                content: '',
                display: 'flex',
                height: '10px',
                width: '320px',
                margin: '20px',
                justifyItems: 'center',
                borderRadius: '16px',
                transition: 'background 2s ease-in-out',
                backgroundColor: color
            }}
        />
    );
}

export default ColorBar;

var COLORS = [
    '#ffd6e5',
    '#ffb8d8',
    '#e281bf',
    '#8d3a7f',
    '#ffc6c5',
    '#ff8f8f',
    '#ff4c4d',
    '#c60638',
    '#ffdcc0',
    '#ffa481',
    '#ff7545',
    '#e0533b',
    '#fff2bd',
    '#ffd952',
    '#ffb13b',
    '#ed690e',
    '#e3f6c1',
    '#6bdfab',
    '#0dc98b',
    '#0e753a',
    '#c3eae3',
    '#82d9d7',
    '#10aeba',
    '#128994',
    '#dcf3ff',
    '#aed8f7',
    '#81bef0',
    '#0f7abc',
    '#d1d7f4',
    '#648fff',
    '#036aff',
    '#1850a5',
    '#c8cbfc',
    '#8f91ff',
    '#785ef0',
    '#5245c2'
];

function getRandomColor(currentValue: string) {
    var maxIndex = COLORS.length - 1;
    var random = Math.random() * maxIndex;
    var minValue = Math.min(random, maxIndex);
    var idx = Math.round(minValue);
    if (currentValue === COLORS[idx]) {
        if (idx === maxIndex) {
            idx -= 1;
        } else {
            idx += 1;
        }
    }
    return COLORS[idx];
}
