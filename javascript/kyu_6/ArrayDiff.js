
//URL: https://www.codewars.com/kata/array-dot-diff
//kyu: 6


const array_diff = (a, b) => a.filter(c => !b.includes(c))


console.log(array_diff([1,2,2,2,3],[2]), [1,3]);
console.log(array_diff([1,2],[1]), [2]);