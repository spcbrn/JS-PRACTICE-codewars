
//URL: https://www.codewars.com/kata/bit-counting
//kyu: 6


const countBits = (n) => {
    return n.toString(2).split('').filter(c => c === '1').length;
}


console.log(countBits(0), 0);
console.log(countBits(4), 1);
console.log(countBits(7), 3);
console.log(countBits(9), 2);
console.log(countBits(10), 2);