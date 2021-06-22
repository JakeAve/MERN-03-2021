function rSigmna(num) {
    if (num <= 0) return 0;
    // console.count('rSigma')
    return num + rSigmna(num - 1);
}

// console.log({5: rSigmna(5), 15: rSigmna(15), '-1': rSigmna(-1)})

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811

// function fibonacci(num) {
//     let a = 1, b = 0, temp;

//     while (num - 1 >= 0){
//       temp = a;
//       a = a + b;
//       b = temp;
//       num--;
//     }

//     return b;
// }

function fibonacci(num) {
    if (num <= 2) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

// num = 2
// return 1

// num 3
// (fib 2) 1 + (fib 1) 1

// num = 4
// (fib 3) 2 + (fib 2) 1

// console.table({2: fibonacci(2), 3: fibonacci(3), 4: fibonacci(4), 5: fibonacci(5)})

// const mando = {
//     firstName: 'Pedro',
//     lastName: 'Pascal',
//     mascota: {
//         typo: 'Baby Yoda',
//         nombre: 'Grogu'
//     }
// }

// const string = JSON.stringify(mando)
// const obj = JSON.parse(string)

//// Simple function to kick off the recursive version, with default
// values for the number of opens pending (0), the substring fragment
// we've built so far (""), and the array of complete solutions ([]).
function allValidNParens(numParens) {
    var solutions = [];
    rValidNParens(numParens, 0, '', solutions);
    return solutions;
}
///// Recursive All-Valid-Combinations-Of-N-Pairs-Parentheses func.
// Parameters: number of parens remaining, number of opens pending,
// unfinished substring fragment we're building, array of solutions
function rValidNParens(parens, opens, subStr, solutions) {
    // If no parens/opens remain, this fragment is a valid solution.
    if (!parens && !opens) {
        solutions.push(subStr);
    }
    // If opens remain, one option is to close one.
    if (opens) {
        rValidNParens(parens, opens - 1, subStr + ')', solutions);
    }
    // If unused parens remain, one option is to open a new one.
    if (parens) {
        rValidNParens(parens - 1, opens + 1, subStr + '(', solutions);
    }
    // solutions array is a 'live' obj; we don't need to return it.
}

function rBinarySearch(arr, val) {
    const index = Math.floor(arr.length / 2);
    if (arr[index] === val) return true;
    else if (val < arr[index] && arr.length > 1) {
        const nuevoArr = arr.slice(0, index);
        return rBinarySearch(nuevoArr, val);
    } else if (val > arr[index] && arr.length > 1) {
        const nuevoArr = arr.slice(index, arr.length);
        return rBinarySearch(nuevoArr, val);
    } else return false;
}

// console.table({4: rBinarySearch([1,3,5,6],4), 5: rBinarySearch([4,5,6,8,12],5)})

function rGFC(a, b) {
    if (a === b) return a;
    if (a > b) return rGFC(a - b, b);
    if (a < b) return rGFC(a, b - a);
}

// console.table({
//     '1 y 1': rGFC(1, 1),
//     '3 y 6': rGFC(3, 6),
//     '60 y 36': rGFC(60, 36),
//     '42 y 80': rGFC(42, 80),
//     '123456 y 987654': rGFC(123456, 987654),
// });

function rGFC2(a, b) {
    if (a === b) return a;
    if (a > b) {
        if ((a / b) % 1 === 0) return b;
        else return rGFC2(a - b, b);
    }
    if (a < b) {
        if ((b / a) % 1 === 0) return a;
        else return rGFC2(a, b - a);
    }
}

console.table({
    '1 y 1': rGFC2(1, 1),
    '3 y 6': rGFC2(3, 6),
    '60 y 36': rGFC2(60, 36),
    '42 y 80': rGFC2(42, 80),
    '123456 y 987654': rGFC2(123456, 987654),
});
