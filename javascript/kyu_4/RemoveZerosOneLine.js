
//URL: http://www.codewars.com/kata/one-line-task-remove-zeros
//kyu: 4


removeZeros=a=>a.join('').replace(/^0+|0+$/g,'')


console.log('0023400'.replace(/^0+|0+$/g,''))
console.log("removeZeros=a=>a.join('').replace(/^0+|0+$/g,'')".length)

console.log(removeZeros([0, 9, 0, 4]),[9, 0, 4])
console.log(removeZeros([0, 9, 5, 0, 0, 0, 0, 2, 0, 0]),[9, 5, 0, 0, 0, 0, 2])
console.log(removeZeros([1, 6, 0, 2]),[1, 6, 0, 2])
console.log(removeZeros([1, 0, 2, 3, 0, 0, 0, 0, 0]),[1, 0, 2, 3])