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

function getRandomColor(currentValue) {
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

function changeColor() {
    var rootElement = document.documentElement;
    var currentColor = rootElement.style.getPropertyValue('--accent-color');
    var newColor = getRandomColor(currentColor);
    rootElement.style.setProperty('--accent-color', newColor);
}

document.getElementById('social-links').style.visibility = 'visible';

changeColor();

window.setInterval(changeColor, 2500);
