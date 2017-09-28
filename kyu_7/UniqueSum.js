
//URL: https://www.codewars.com/kata/unique-sum/javascript
//kyu: 7


function uniqueSum(lst){
    return lst.length ? (lst.filter((c, i) => lst.indexOf(c) === i).reduce((a, c) => a + c)) : null;
}

// function uniqueSum(lst){
//     lst.forEach((c, i) => {
//       if (lst.indexOf(c) !== i) {
//         lst[i] = 0;
//       }
//     })
//     return lst.length ? lst.reduce((a, c) =>  a + c) : null;
// }




console.log(uniqueSum([1,2,3]), 6)
console.log(uniqueSum([1,3,8,1,8]), 12)
console.log(uniqueSum([-1,-1,5,2,-7]), -1)
console.log(uniqueSum([]), null)
console.log(uniqueSum([5,4,3,2,1,-1]), 14)
console.log(uniqueSum([1,1,1,1,1]), 1)