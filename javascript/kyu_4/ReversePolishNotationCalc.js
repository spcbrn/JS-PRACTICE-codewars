
//URL: https://www.codewars.com/kata/reverse-polish-notation-calculator
//kyu: 4


const calc = (e) => {
    if (!e) {
        return 0;
    } else if (!e.match(/[+\-\/\*]/)) {
        return Number(e.split(' ').sort().reverse()[0])
    } else if (e.split(' ').length === 1) {
        return Number(e)
    }
    let current = e.match(/\d+\s\d+\s[+\-\/\*]/)[0].split(' ')
    let calced = eval(current[0] + current[2] + current[1])
    let update = e.replace(/\d+\s\d+\s[+\-\/\*]/, calced)
    return calc(update)
}



console.log(calc(""), 0);
console.log(calc("1 2 3"), 3);
console.log(calc("1 2 3.5"), 3.5);
console.log(calc("1 3 +"), 4);
console.log(calc("1 3 *"), 3);
console.log(calc("1 3 -"), -2);
console.log(calc("4 2 /"), 2);
console.log(calc('5 1 2 + 4 * + 3 -'), 14)