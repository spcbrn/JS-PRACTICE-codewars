
//URL: https://www.codewars.com/kata/merge-two-sorted-arrays-into-one
//kyu: 8

const mergeArrays = (a1, a2) => {
    return [...a1, ...a2].sort((a,b)=>a-b).filter((c,i,a)=>a.indexOf(c)===i)
}


console.log(mergeArrays([1,2,3,4], [5,6,7,8]), [1,2,3,4,5,6,7,8]);
console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]), [1,2,3,4,5,6,7,8,9,10]);
console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]), [1,2,3,4,5,7,9,10,11,12]);