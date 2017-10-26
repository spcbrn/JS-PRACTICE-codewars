
//URL: https://www.codewars.com/kata/roman-numerals-decoder
//kyu: 4


const solution = (r) => {
    let codex = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
    let output = 0;
    r.split('').forEach((c,i,a) => {
        if (codex[a[i-1]] < codex[c]) {
            output -= (codex[a[i-1]]*2)
        }
        output += codex[c]
    })
    return output;
}


console.log(solution('XXI'), 21)
console.log(solution('MCMXC'), 1990);
console.log(solution('MMVIII'), 2008);
console.log(solution('MDCLXVI'), 1666);
console.log(solution('IV'), 4)
console.log(solution('CMLXXVII'), 977)