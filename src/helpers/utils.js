export function getRandomValueFromArray(array, currentValue) {
    const maxIndex = array.length - 1;
    const random = Math.random() * maxIndex;
    const minValue = Math.min(random, maxIndex)
    let idx = Math.round(minValue);
    if (currentValue === array[idx]) {
        if (idx === maxIndex) {
            idx -= 1;
        } else {
            idx += 1;
        }
    }
    return array[idx];
}
