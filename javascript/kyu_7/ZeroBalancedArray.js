
//URL: https://www.codewars.com/kata/zero-balanced-array
//kyu: 7


const ìsZeroBalanced = (a) => {
    let sum = null;
    if (a.length) {
        sum = a.reduce((a, b) => a + b);
        a.forEach(c => {
          if (c !== 0 && !a.includes(c*-1)) {
            sum = null;
          }
        })
    }
    return sum === 0 ? true : false;
}


console.log(ìsZeroBalanced([3]),false);
console.log(ìsZeroBalanced([0,0,0,0,0,0]),true);
console.log(ìsZeroBalanced([]), false)
console.log(ìsZeroBalanced([2, 4, -4, 0, 3, -2, -1, -1, -1]), true)