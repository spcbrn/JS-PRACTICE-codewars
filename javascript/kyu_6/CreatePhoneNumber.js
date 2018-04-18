
//URL: https://www.codewars.com/kata/525f50e3b73515a6db000b83
//kyu: 6

const createPhoneNumber = nums => `(${nums.splice(0,3)}) ${nums.splice(0,3)}-${nums}`.replace(/,/g, '');


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890")