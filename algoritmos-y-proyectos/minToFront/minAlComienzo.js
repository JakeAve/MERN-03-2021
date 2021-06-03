const minAlComienzo = (arr) => {
    let minIndex = 0;
    let minVal = arr[minIndex];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i];
            minIndex = i;
        }
    }

    for (let i = minIndex; i > 0; i--) arr[i] = arr[i - 1];

    arr[0] = minVal;

    return arr;
};

const resultadoDeMinAlComienzo = minAlComienzo([2, 3, 4, 5, 1, 6, 7, 8]);
const resultadoDeMinAlComienzo2 = minAlComienzo([1, 4, 5, 7, 8, 9, 10, 11]);
const resultadoDeMinAlComienzo3 = minAlComienzo([8, 4, 5, 7, 8, 3, 2, 1]);
console.table({
    resultadoDeMinAlComienzo,
    resultadoDeMinAlComienzo2,
    resultadoDeMinAlComienzo3,
});
