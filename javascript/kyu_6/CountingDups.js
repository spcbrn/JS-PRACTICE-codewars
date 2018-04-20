
//URL: https://www.codewars.com/kata/counting-duplicates
//kyu: 6


//multi line version:
// const duplicateCount = str => str
//     .toLowerCase()
//     .split('')
//     .filter((c, i, a) => a.indexOf(c) !== i)
//     .filter((c, i, a) => a.indexOf(c) === i)
//     .length;

//single line version:
const duplicateCount = str => str.toLowerCase().split('').filter((c, i, a) => a.indexOf(c) !== i).filter((c, i, a) => a.indexOf(c) === i).length;


console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2);
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2)
