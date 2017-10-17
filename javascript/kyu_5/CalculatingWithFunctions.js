
//URL: https://www.codewars.com/kata/calculating-with-consts
//kyu: 


const zero = (op) => {
    if (op) {
        if (op.op === '+') {
            return 0 + op.n;
        } else if (op.op === '-') {
            return 0 - op.n;
        } else if (op.op === '/') {
            return 0 / op.n;
        } else if (op.op === '*') {
            return 0 * op.n;
        }
    } else {
        return 0;
    }
}
const one = (op) => {
    if (op) {
        if (op.op === '+') {
            return 1 + op.n;
        } else if (op.op === '-') {
            return 1 - op.n;
        } else if (op.op === '/') {
            return 1 / op.n;
        } else if (op.op === '*') {
            return 1 * op.n;
        }
    } else {
        return 1;
    }
}
const two = (op) => {
    if (op) {
        if (op.op === '+') {
            return 2 + op.n;
        } else if (op.op === '-') {
            return 2 - op.n;
        } else if (op.op === '/') {
            return 2 / op.n;
        } else if (op.op === '*') {
            return 2 * op.n;
        }
    } else {
        return 2;
    }
}
const three = (op) => {
    if (op) {
        if (op.op === '+') {
            return 3 + op.n;
        } else if (op.op === '-') {
            return 3 - op.n;
        } else if (op.op === '/') {
            return 3 / op.n;
        } else if (op.op === '*') {
            return 3 * op.n;
        }
    } else {
        return 3;
    }
}
const four = (op) => {
    if (op) {
        if (op.op === '+') {
            return 4 + op.n;
        } else if (op.op === '-') {
            return 4 - op.n;
        } else if (op.op === '/') {
            return 4 / op.n;
        } else if (op.op === '*') {
            return 4 * op.n;
        }
    } else {
        return 4;
    }
}
const five = (op) => {
    if (op) {
        if (op.op === '+') {
            return 5 + op.n;
        } else if (op.op === '-') {
            return 5 - op.n;
        } else if (op.op === '/') {
            return 5 / op.n;
        } else if (op.op === '*') {
            return 5 * op.n;
        }
    } else {
        return 5;
    }
}
const six = (op) => {
    if (op) {
        if (op.op === '+') {
            return 6 + op.n;
        } else if (op.op === '-') {
            return 6 - op.n;
        } else if (op.op === '/') {
            return 6 / op.n;
        } else if (op.op === '*') {
            return 6 * op.n;
        }
    } else {
        return 6;
    }
}
const seven = (op) => {
    if (op) {
        if (op.op === '+') {
            return 7 + op.n;
        } else if (op.op === '-') {
            return 7 - op.n;
        } else if (op.op === '/') {
            return 7 / op.n;
        } else if (op.op === '*') {
            return 7 * op.n;
        }
    } else {
        return 7;
    }
}

const eight = (op) => {
    if (op) {
        if (op.op === '+') {
            return 8 + op.n;
        } else if (op.op === '-') {
            return 8 - op.n;
        } else if (op.op === '/') {
            return 8 / op.n;
        } else if (op.op === '*') {
            return 8 * op.n;
        }
    } else {
        return 8;
    }
}
const nine = (op) => {
    if (op) {
        if (op.op === '+') {
            return 9 + op.n;
        } else if (op.op === '-') {
            return 9 - op.n;
        } else if (op.op === '/') {
            return 9 / op.n;
        } else if (op.op === '*') {
            return 9 * op.n;
        }
    } else {
        return 9;
    }
}

const plus = (n) => {
    return {
        op: '+',
        n
    }
}
const minus = (n) => {
    return {
        op: '-',
        n
    }
}
const times = (n) => {
    return {
        op: '*',
        n
    }
}
const dividedBy = (n) => {
    return {
        op: '/',
        n
    }
}


console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);
